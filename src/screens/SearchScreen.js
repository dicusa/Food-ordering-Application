import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResponseHook from '../hooks/useResponseHook';
import RestaurantList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [searchString, setSearchString] = useState('');
  const [response, errorMessage, searchApi] = useResponseHook();

  const filterRestaurants = price => {
    return response.filter(response => {
      return response.price == price;
    });
  };

  if (!response) {
    return null;
  }

  return (
    <View style={styles.backgroundStyle}>
      <ScrollView>
        <SearchBar
          searchString={searchString}
          onSearchStringChange={newSearchString =>setSearchString(newSearchString)}
          onSearchStringSubmit={() => searchApi(searchString)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        {/* Reusable components */}
        <RestaurantList
          title="Cost Effective"
          results={filterRestaurants('$')}
        />
        <View style={styles.divider} />
        <RestaurantList 
        title="Bit Pricier" 
        results={filterRestaurants('$$')} />
        <View style={styles.divider} />
        <RestaurantList
          title="Big Spender"
          results={filterRestaurants('$$$')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#808080',
    width: '92%',
    marginHorizontal: 15,
    marginBottom: 5,
  },
});

export default SearchScreen;
