import { UserProfile } from 'components/UserProfile/UserProfile';
import user from 'components/User.json';

export const App = () => {
  return (
    <div
    >
      <UserProfile 
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>

    </div>
  );
};
