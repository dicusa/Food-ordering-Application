import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const ResturantsFlatList = ({
  restaurantName,
  restaurantImage,
  restaurantRating,
  restaurantReviews,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.restaurantImageStyle}
        source={{uri: restaurantImage}}
      />
      <Text style={styles.restaurantTitleStyle}>{restaurantName}</Text>
      <Text style={styles.restaurantSubTitleStyle}>{restaurantRating} Stars, {restaurantReviews} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
  },

  restaurantImageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },

  restaurantTitleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    maxWidth: 248,
  },

  restaurantSubTitleStyle: {
    fontSize: 13,
    color: '#808080',
    marginBottom: 5,
  },
});
export default ResturantsFlatList;
