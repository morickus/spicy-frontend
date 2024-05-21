import Icon from '@/components/Icon';
import stylesMain from '@/styles/Main.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styles from './IconBack.module.scss';

interface IconBackProps {
  title: string
  onClick?(): void
}

const IconBack:FC<IconBackProps> = ({ title, onClick }) => {
  const router = useRouter();

  return (
    <div className={styles.root} onClick={onClick || router.back}>
      <div className={styles.icon}>
        <Icon name="arrow-right" fontSize={24} />
      </div>
      <p className={classNames(stylesMain.h3, styles.title)}>{title}</p>
    </div>
  );
};

export default IconBack;