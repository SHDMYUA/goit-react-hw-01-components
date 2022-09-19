import { UserProfile } from 'components/UserProfile/UserProfile';
import { Statistics } from 'components/Statistic/Statistics';
import user from 'components/User.json';
import data from 'components/data.json';

export const App = () => {
  return (
    <div>
      
      <UserProfile 
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      
      <Statistics
      title="Upload stats"
      stats={data} />

    </div>
  );
};
