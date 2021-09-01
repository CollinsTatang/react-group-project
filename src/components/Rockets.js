import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket, cancelBooking, fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets);
    }
  }, []);

  const handleBooking = (id) => dispatch(bookRocket(id));
  const handleCancellation = (id) => dispatch(cancelBooking(id));

  return (
    rockets.map(({
      id, name, description, images, reserved,
    }) => (
      <div key={id} className="">
        <div>
          <img src={images[0]} alt="roc-img" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>
            {description}
          </p>
          {reserved && (
            <button type="button" onClick={() => handleCancellation(id)}>
              Cancel reservation
            </button>
          )}
          {!reserved && (
            <button type="button" onClick={() => handleBooking(id)}>
              Reserve rocket
            </button>
          )}
        </div>
      </div>
    ))
  );
};

export default Rockets;
