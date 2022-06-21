import PropTypes from 'prop-types'
import css from './statistics.module.css'

export default function Statistics(props) {
  const { id, label, percentage} = props
  return <li className={css.item} key={id}>
    <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
}

Statistics.propTypes = {
  id:PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.number,
}