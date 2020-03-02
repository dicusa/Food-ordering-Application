import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, FlatList, Image} from 'react-native';
import YelpApi from '../api/YelpApi';

const DetailsScreen = ({navigation}) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const responseID = navigation.getParam('id');
  console.log(responseID);

  const fetchRestaurantDetails = async responseID => {
    try {
      const respose = await YelpApi.get(`/${responseID}`);
      console.log(respose.data);
      setRestaurantDetails(respose.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails(responseID);
  }, []);

  if (!restaurantDetails) {
    return null;
  }

  return (
    <>
      <Text style={styles.titleStyle}>{restaurantDetails.name}</Text>
      <Text style={styles.phoneStyle}>{restaurantDetails.phone}</Text>

      <FlatList
        data={restaurantDetails.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.imageStyles} source={{uri: item}} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 250,
    width: 300,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 15,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
  },
  phoneStyle: {
    fontSize: 15,
    color: '#808080',
    marginHorizontal: 15,
    marginBottom: 5,
  },
});

export default DetailsScreen;
