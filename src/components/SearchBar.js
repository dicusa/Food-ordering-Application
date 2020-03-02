import React from 'react';
import { View, StyleSheet, Image, TextInput} from 'react-native';

const SearchBar = ({searchString, onSearchStringChange, onSearchStringSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        style={styles.iconStyle}
        source={require('../../assets/searchoutline50.png')}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search"
        autoCapitalize = "none"
        autoCorrect = {false}
        value={searchString}
        onChangeText={onSearchStringChange}
        onEndEditing={() => onSearchStringSubmit(searchString)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10
  },

  iconStyle: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 35,
    marginHorizontal: 7,
  },

  textInputStyle: {
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
