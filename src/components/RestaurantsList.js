import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import RestaurantsFlatList from './RestaurantsFLatList';
import { withNavigation } from 'react-navigation';


const RestaurantList = ({title, results, navigation}) => {
    return (
        <View >
        <Text style = {styles.titleStyles}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor = {(results) => results.id}
            renderItem = {({ item }) => {
                return (
                    <TouchableOpacity onPress = {() => navigation.navigate('Details', {id: item.id })}>
                        <RestaurantsFlatList restaurantName = {item.name}
                                             restaurantImage = {item.image_url} 
                                             restaurantReviews = {item.review_count}
                                             restaurantRating = {item.rating} />
                    </TouchableOpacity>
                )
            }}
        />
        <View style = {styles.divider}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
    titleStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginStart: 15
    },
    
})

export default withNavigation(RestaurantList);