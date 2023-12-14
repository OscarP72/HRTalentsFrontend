import './Profile.css';

import { useContext } from 'react';

import { UserContext } from '../../context/userContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="perfil">
      <img src={user.avatar} alt={user.username} />
      <h2>{user.username}</h2>
    </main>
  );
};

export default Profile;
