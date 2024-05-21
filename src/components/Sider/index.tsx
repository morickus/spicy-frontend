import IconBack from '@/components/IconBack';
import React, { FC } from 'react';
import styles from './Sider.module.scss';
import stylesMain from '@/styles/Main.module.scss';
import classNames from 'classnames';

interface SiderProps {
  onClose?(): void
}

const Sider:FC<SiderProps> = ({ onClose }) => {
  const categories = [
    { title: 'Anal', count: '1,764' },
    { title: 'BDSM', count: '1,764' },
    { title: 'Bisexual', count: '1,764' },
    { title: 'Blowjob', count: '1,764' },
    { title: 'Cheating', count: '1,764' },
    { title: 'Cuckold', count: '1,764' },
    { title: 'Cuckold', count: '1,764' },
    { title: 'First time', count: '1,764' },
    { title: 'Gay male', count: '1,764' },
    { title: 'Group sex', count: '1,764' },
    { title: 'Lesbian sex', count: '1,764' },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <IconBack onClick={onClose} title="Categories" />
        <p className={classNames(stylesMain.h3, styles.title)}>Categories</p>
      </div>
      <div className={styles.categories}>
        {categories.map((i, index) => (
          <a key={`categories-${index}`} href={`/category/${i.title}`} className={styles.categories__item}>
            <span>{i.title}</span>
            <span>{i.count}</span>
          </a>
        ))}
      </div>
      <div className={styles.footer}>
        <span>© {new Date().getFullYear()} Spicy tales</span>
        <a href="/">Privacy policy</a>
        <div>
          <span>For authors: </span><a href="/">authors@spicy.pub</a>
        </div>
        <div>
          <span>For ads: </span><a href="/">ads@spicy.pub</a>
        </div>
      </div>
    </div>
  );
};

export default Sider;