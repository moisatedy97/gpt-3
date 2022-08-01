import React from 'react'
import styles from '../../styles/components/Feature.module.css';

type Props = {
  title: string,
  text: string
}

const Feature = ({ title, text } : Props) => {
  return (
    <div className={styles["gpt3__features-container__feature"]}>
    <div className={styles["gpt3__features-container__feature-title"]}>
      <div />
      <h1>{title}</h1>
    </div>
    <div className={styles["gpt3__features-container_feature-text"]}>
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature