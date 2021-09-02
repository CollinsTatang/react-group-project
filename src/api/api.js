/* eslint-disable */
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => await axios.get(`${rocketsUrl}`).then((result) => {
  const rockets = [];
  if (result.status === 200) {
    const { data } = result;
    data.forEach((rocketData) => {
      const rocket = {
        id: rocketData.rocket_id,
        name: rocketData.rocket_name,
        description: rocketData.description,
        flickr_images: rocketData.flickr_images,
        kind: 'rocket',
        reserved: false,
      };
      return rockets.push(rocket);
    });
  }
  return rockets;
});