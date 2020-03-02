import {useState, useEffect} from 'react';
import YelpApi from '../api/YelpApi';

export default () => {
  const [response, setResponse] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async searchStrings => {
    try {
      console.log('Into searchApi');
      const result = await YelpApi.get('/search', {
        params: {
          limit: 50,
          term: searchStrings,
          //some default location for first time screen render
          location: 'san jose',
        },
      });
      console.log(result);
      setResponse(result.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [response, errorMessage, searchApi];
};
