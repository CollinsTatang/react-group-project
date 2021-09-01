/* eslint-disable */
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';
const missionsUrl = 'https://api.spacexdata.com/v3/missions';

const getRockets = async () => await axios.get(`${rocketsUrl}`).then((result) => {
  const rockets = [];
  if (result.status === 200) {
    const { data } = result;
    data.forEach((rocketData) => {
      const rocket = {
        id: rocketData.rocket_id,
        rocket_name: rocketData.rocket_name,
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

const getMissions = async () => axios.get(`${missionsUrl}`).then((result) => {
  const missions = [];
  if (result.status === 200) {
    const { data } = result;
    data.forEach((missionData) => {
      const mission = {
        id: missionData.mission_id,
        name: missionData.mission_name,
        description: missionData.description,
        kind: 'mission',
        reserved: false,
      };
      missions.push(mission);
    });
  }
  return missions;
});

export default { getRockets, getMissions };
