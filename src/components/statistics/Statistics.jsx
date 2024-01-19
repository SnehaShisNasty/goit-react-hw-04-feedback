import css from './Statistics.module.css';
export const Statistics = ({ result, total, positive }) => {
  const { good, neutral, bad } = result;

  return (
    <div className={css.statistics}>
      <h2 className={css.title}> Statistics</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.subTitle}>Good:{good}</p>
        </li>
        <li className={css.item}>
          <p className={css.subTitle}>Neutral:{neutral}</p>
        </li>
        <li className={css.item}>
          <p className={css.subTitle}>Bad:{bad}</p>
        </li>
      </ul>
      <h3 className={css.subTitle}>Total:{total}</h3>
      <h3 className={css.subTitle}>Positive feedback:{positive}%</h3>
    </div>
  );
};
