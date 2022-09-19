import { UserProfile } from 'components/UserProfile/UserProfile';
import { Statistics } from 'components/Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'components/User.json';
import data from 'components/data.json';
import friends from 'components/friends.json';

export const App = () => {
  return (
    <div>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};
