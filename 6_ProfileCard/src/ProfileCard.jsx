import PropTypes from 'prop-types';

export default function ProfileCard(props) {
  return (
    <div className='flex flex-col justify-center items-center shadow-lg p-6 m-4 rounded-lg bg-white min-w-[300px] max-w-[400px] transition-transform transform hover:scale-105 hover:shadow-2xl'>
      <div className=' rounded-full p-2 mb-4 w-24 h-16 flex justify-center items-center'>
        <img
          src={props.avatar || 'https://via.placeholder.com/50'}
          alt={`${props.name}'s avatar`}
          className='rounded-full w-full h-full object-cover'
        />
      </div>
      
      <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
        {props.name}
      </h2>
      
      <p className='text-center text-gray-600 mb-4'>
        {props.bio}
      </p>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
