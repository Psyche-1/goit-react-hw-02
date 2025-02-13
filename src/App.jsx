// import { useState } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [feedbackOptions, setFeedbackOptions] = useState(() => {
    const savedFeedbackOptions = JSON.parse(localStorage.getItem("feedbackOptions"))
    if (savedFeedbackOptions === null) {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      }
    }
    return savedFeedbackOptions
  });

  useEffect(() => {
    window.localStorage.setItem("feedbackOptions", JSON.stringify(feedbackOptions));
  }, [feedbackOptions]);


  const totalFeedback = feedbackOptions.good + feedbackOptions.neutral + feedbackOptions.bad;
  const positiveFeedback  = Math.round((feedbackOptions.good / totalFeedback) * 100)

  const updateFeedback = feedbackType => {
    setFeedbackOptions( {
      ...feedbackOptions,
      [feedbackType]: feedbackOptions[feedbackType] + 1
    })
  }


  return (
    <>
      <Description />
      <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} setFeedbackOptions={setFeedbackOptions} />
      {totalFeedback ?<Feedback feedbackOptions={feedbackOptions} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} /> : <Notification/>}
    </>
  )
}

export default App
