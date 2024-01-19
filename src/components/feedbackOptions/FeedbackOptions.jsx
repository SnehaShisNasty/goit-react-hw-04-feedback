import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ handleIncrementFeedback, result }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {result.map(item => (
          <li className={css.item} key={nanoid()}>
            <button
              className={css.button}
              onClick={() => handleIncrementFeedback(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
