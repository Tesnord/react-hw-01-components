import Profile from './components/profile/Profile'
import profile from './components/profile/user.json'
import StatisticsList from './components/statistics/StatisticsList'
import statistics from './components/statistics/data.json'
import FriendList from './components/friends/FriendList'
import friends from './components/friends/friends.json'
import TransactionHistory from './components/transactions/TransactionHistory'
import transactions from './components/transactions/transactions.json'


export default function App() {
  return (
    <div className='app'>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <StatisticsList items={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>

  )
}