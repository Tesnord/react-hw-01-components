import PropTypes from 'prop-types'

export default function TransactionItem(props) {
  const { id, type, amount, currency} = props
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

TransactionItem.propTypes = {
  id:PropTypes.string,
  type:PropTypes.string,
  amount:PropTypes.string,
  currency:PropTypes.string
}