// Components
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

// Data
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

// Style
import './App.css';

export default function App() {
  return (
    <div>
      <div className="Container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="Container">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div className="Container">
        <FriendList friends={friends} />
      </div>
      <div className="Container">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
