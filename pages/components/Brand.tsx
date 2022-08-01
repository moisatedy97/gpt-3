import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Brand.module.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className={styles["gpt3__brand"] + ' ' + " section__padding"}>
    <div>
      <Image src={google} alt='google'></Image>
    </div>
    <div>
      <Image src={slack} alt='slack'></Image>
    </div>
    <div>
      <Image src={atlassian} alt='atlassian'></Image>
    </div>
    <div>
      <Image src={dropbox} alt='dropbox'></Image>
    </div>
    <div>
      <Image src={shopify} alt='shopify'></Image>
    </div>
  </div>
  )
}

export default Brand