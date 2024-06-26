import React, { Component} from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Block, theme, Text } from "galio-framework";
import Swiper, {swipeRight, swipeLeft, swipeBack} from 'react-native-deck-swiper'
import { Card } from "../components";
import { Button } from "../components";
import articles from "../constants/articles";
import {Job} from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        "id": 48,
        "feed": {
            "feed_name": "USA"
        },
        "title": "Z-Wave Programming",
        "link": "https://www.upwork.com/jobs/Wave-Programming_%7E01d615b67ba9829d02?source=rss",
        "published_date": "2023-07-18T22:33:05Z",
        "content": "I need to install firmware updates to 200 z-wave devices.  I would need someone to remote into a spare windows computer. setup a virtual machine and help setup the process to do batch firmware updates to z-wave devices.  I would need a list of all programs needed to purchase and correct z-wave to purchase for batch firmware updates.  Additionally, I would then give access after the firmware update to help program a z-wave system for a home.   ",
        "pay_range": "$25.00-$100.00",
        "job_type": "Hourly",
        "category": "Network Administration",
        "skills": "Microsoft Windows,     macOS,     Ubuntu",
        "country": "United States",
        "archived": false
      }],//This will eventually be replaced with the getJobs function
      swipedAllCards: false,
    };
    this.swiperRef = React.createRef();
  }

  getJobs = () =>{

    //This is where I will parse an RSS feed and then display the results in the job cards once I can figure out how it works in the bidworker

  };

  onSwipedAllCards = () => {
    this.setState({ swipedAllCards: true });
  };

  renderCard = (card) => {
    return (
      <View style={styles.card}>
          <Job job={card}/>
      </View>
    );
  };

  resetDeck = () => {
    this.setState({
      cards: [...this.state.cards],
      swipedAllCards: false
    }, () => {
      this.swiperRef.current.jumpToCardIndex(0);
    });
  };

  handleSwipe = (direction) => {
    if (this.swiperRef.current) {
      switch (direction) {
        case 'left':
          this.swiperRef.current.swipeLeft();
          break;
        case 'right':
          this.swiperRef.current.swipeRight();
          break;
        case 'back':
          this.swiperRef.current.swipeBack();
          if (this.state.swipedAllCards){
            this.setState({swipedAllCards : false});
          }
          break;
        default:
          console.log('Failed to handle swipe \n');
          break;
      }
    }
  }

  render() {
    const { cards, swipedAllCards } = this.state;

    return (
      <View style={styles.container}>
        <Swiper
          ref={this.swiperRef}
          cards={cards}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          onSwipedLeft={() => console.log('Swiped left')}//These need to functions that call the job logic. Probably a stack?
          onSwipedRight={() => console.log('Swiped Right')}
          onSwipedTop={() => console.log('Swiped Top')}
          backgroundColor="#4C175A"
          disableBottomSwipe
        />
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.circleButton} onPress={() => this.handleSwipe('left')}>
            <Text>
            👎
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton} onPress={() => this.handleSwipe('back')}>
            <Text>
            ↩️
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton} onPress={() => this.handleSwipe('right')}>
            <Text>
            👍
            </Text>
            </TouchableOpacity>
        </View>
        {swipedAllCards && (
          <Button title="Reroll" onPress={this.resetDeck}>
            REROLL
          </Button>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FC5D9D",
    justifyContent: 'center',  // Align children (cards) vertically in the center
    alignItems: 'center',      // Align children horizontally in the center
    paddingVertical: 20,       // Adds space at the top and bottom inside the container
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  circleButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 25,
  },
  card: {
    height: 500,               // Example fixed height, adjust based on your needs
    width: width - 40,         // Adjust the width as needed, assuming 20 padding on each side
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    justifyContent: "center",  // Center the text or content within the card
    marginVertical: 0,        // Adds vertical space around each card
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  job_container: {
    flex: 4,
    marginHorizontal: "auto",
    width: "auto"
  },
  row: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    justifyContent: "center"
  },
  content: {
    flex: 1,
    justifyContent: "flex-start"
  },
  pay_range: {
    flex: 1,
  },
  country: {
    flex: 2,
  },
  category: {
    flex: 3,
  },
  skills: {
    flex: 1,
  }
});

export default Home;
