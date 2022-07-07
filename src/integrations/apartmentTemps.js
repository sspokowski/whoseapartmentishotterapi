import axios from 'axios';

const shakUrl = 'https://ismyapartmentcold.com/api/v1/status';
const arloUrl = 'http://ismyapartmenthot.com';

const getHottestApartment = async () => {
  let shakResponse, arloResponse ;
  try {
    shakResponse = await axios.get(shakUrl, {responseType: 'blob'});
    arloResponse = await axios.get(arloUrl, {responseType: 'blob'});

    return {shak: shakResponse.data.temperature.temp, arlo: arloResponse.data};
  } catch (error) {
    console.error('Error occurred in retrieving apartment temperatures', error);
    throw new Error('Error occurred in retrieving apartment temperatures', error);
  }
};

export default getHottestApartment;