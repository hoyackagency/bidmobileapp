import React, { Component} from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Block, theme, Text } from "galio-framework";
import Swiper from 'react-native-deck-swiper'
import { Card } from "../components";
import { Button } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{text: "Welcome"},{text: "to"},{text: "Powerbidder"}],
      swipedAllCards: false,
    };
    this.swiperRef = React.createRef();
  }

  onSwipedAllCards = () => {
    this.setState({ swipedAllCards: true });
  };

  renderCard = card => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>
          {card.text}
        </Text>

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

  render() {
    const { cards, swipedAllCards } = this.state;

    return (
      <View style={styles.container}>
        <Swiper
          ref={this.swiperRef}
          cards={cards}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          backgroundColor="#4C175A"
          disableBottomSwipe
        />
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
});

export default Home;
