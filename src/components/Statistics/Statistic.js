import PropTypes from 'prop-types';

function Statistic({ items, style }) {
  return items.map(item => (
    <li className={style.item} key={item.id}>
      <span className={style.label}>{item.label}</span>
      <span className={style.percentage}>{item.percentage}%</span>
    </li>
  ));
}

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistic;
