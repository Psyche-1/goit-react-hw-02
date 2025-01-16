import css from './Feedback.module.css'

export default function Feedback({ feedbackOptions, positiveFeedback, totalFeedback }) {
    return (
        <div>
            <p className={css.feedback}>Good: { feedbackOptions.good }</p>
            <p className={css.feedback}>Neutral: { feedbackOptions.neutral }</p>
            <p className={css.feedback}>Bad: { feedbackOptions.bad }</p>
            <p className={css.feedback}>Total: { totalFeedback }</p>
            <p className={css.feedback}>Positive: { totalFeedback ? positiveFeedback : 0 }%</p>
        </div>
    )
}