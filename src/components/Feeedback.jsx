import React, { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';

const FeedBack = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrementFeedback = keyName => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [keyName]: prevFeedback[keyName] + 1,
    }));
  };
  const { good, neutral, bad } = feedback;
  let countTotalFeedback = good + neutral + bad;
  let countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );
  return (
    <Section title={'Please leave your Feedback'}>
      <FeedbackOptions
        handleIncrementFeedback={handleIncrementFeedback}
        result={Object.keys(feedback)}
      ></FeedbackOptions>

      {countTotalFeedback === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistics
          result={feedback}
          total={countTotalFeedback}
          positive={countPositiveFeedbackPercentage}
        ></Statistics>
      )}
    </Section>
  );
};
export default FeedBack;
