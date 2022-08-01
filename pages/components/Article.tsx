import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/components/Article.module.css';

type Props = {
  imgUrl: StaticImageData, 
  date: string,
  text: string
}

const Article = ({ imgUrl, date, text }: Props) => {
  return (
    <div className={styles["gpt3__blog-container_article"]}>
    <div className={styles["gpt3__blog-container_article-image"]}>
      <Image src={imgUrl} alt='blog-url' ></Image>
    </div>
    <div className={styles["gpt3__blog-container_article-content"]}>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  )
}

export default Article