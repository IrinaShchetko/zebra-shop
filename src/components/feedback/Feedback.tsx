import styles from './style.module.css'

export const Feedback = () => {
  return (
    <dialog className={styles.content} open>
      <h2 className={styles.title}>How Do You Like Our Website?</h2>
      <form className={styles.form} action="">
        <label className={styles.label} htmlFor="feedback">
          We’d like to get your feedback.
        </label>
        <textarea className={styles.input} name="feedback" id="feedback"></textarea>
        <button className={styles.submit} type="submit">
          SEND
        </button>
      </form>
    </dialog>
  )
}
