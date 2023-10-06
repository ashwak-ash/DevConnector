import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile }) => {
  const { user, status, company, location, skills } = profile;

  return (
    <div className='profile bg-light'>
      {user && user.avatar && <img src={user.avatar} alt='' className='round-img' />}
      <div>
        {user && user.name && <h2>{user.name}</h2>}
        {status && (
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
        )}
        {location && <p className='my-1'>{<span>{location}</span>}</p>}
        {user && user._id && (
          <Link to={`/profile/${user._id}`} className='btn btn-primary'>
            View Profile
          </Link>
        )}
      </div>
      {skills && Array.isArray(skills) && (
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check'></i> {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    status: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProfileItem;

