import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Block, theme, Text } from "galio-framework";
import Swiper from 'react-native-deck-swiper'
import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderJobs = () => {
    return(
    <View style={styles.container}>
      <Swiper
        cards={[{text: "Hoyack"},{text: "is"},{text: "based"},{text:"and"},{text:"redpilled"}]}
        renderCard={(card) => (
          <View style={styles.card}>
            <Text style={styles.text}>
              {card.text}
            </Text>

          </View>
        )}
        onSwiped={(cardIndex) => { console.log(cardIndex) }}
        onSwipedAll={() => { console.log('onSwipedAll') }}
        cardIndex={0}
        backgroundColor={'#C0FFEE'}
        stackSize={5}>
      </Swiper>
    </View>
    )
  };

  render() {
    return (
        this.renderJobs()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0FFEE",
  },
  card: {
    flex: 1,
    width: width - theme.SIZES.BASE * 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});

export default Home;
