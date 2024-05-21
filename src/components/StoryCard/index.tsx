import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './StoryCard.module.scss';
import stylesMain from '@/styles/Main.module.scss';

interface StoryCardProps {
  title: string
  text: string
  id: string
  categories: string[]
}

const StoryCard:FC<StoryCardProps> = ({ id, title, text, categories }) => {
  return (
    <a href={`/article/${id}`} className={styles.root}>
      <p className={classNames(stylesMain.h2, styles.title)}>{title}</p>
      <p className={styles.text}>{text}</p>
      {categories && (
        <div className={styles.categories}>
          {categories.map((i, index) => (
            <p key={`article-categories-${index}`}>{i}</p>
          ))}
        </div>
      )}
    </a>
  );
};

export default StoryCard;