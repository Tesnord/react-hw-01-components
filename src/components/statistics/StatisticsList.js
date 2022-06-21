import Statistics from './Statistics'
import css from './statistics.module.css'

export default function StatisticsList({ items }) {
  return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
      <ul className={css['stat-list']}>
        {items.map(item => (
          <Statistics
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
        ))}
      </ul>
    </section>
  )
}