import React from "react"
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          <div className={styles.content}>
            <h3>Lamborghuni</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1637859460045-ac3ae9ced99d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          <div className={styles.content}>
            <h3>Range Rover</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
          <div className={styles.content}>
            <h3>Porshe</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Luxury
