import Statistic from './Statistic';

function StatisticsList({ items, style }) {
  return (
    <ul className={style.statList}>
      <Statistic items={items} style={style} />
    </ul>
  );
}

export default StatisticsList;
