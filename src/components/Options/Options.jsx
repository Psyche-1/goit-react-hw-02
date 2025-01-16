import css from './Options.module.css'

export default function Options({ totalFeedback, updateFeedback, setFeedbackOptions }) {
    function handleReset() {
        setFeedbackOptions({
	good: 0,
	neutral: 0,
	bad: 0
  })
    }

    return (
        <div className={css['btn-wrapper']}>
            <button className={css.btn} onClick = {() => { updateFeedback('good') }}> Good</button>
            <button className={css.btn} onClick = {() => { updateFeedback('neutral') }}>Neutral</button>
            <button className={css.btn} onClick = {() => { updateFeedback('bad') }}>Bad</button>
            {totalFeedback !== 0 && <button className={css.btn} onClick={handleReset}>Reset</button>}
        </div>
    )
}
