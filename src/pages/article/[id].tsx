import IconBack from '@/components/IconBack';
import { getPageLayout } from '@/layouts/PageLayout';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getArticleById } from '@/store/slices/articleSlice';
import { RootState } from '@/store/store';
import styles from '@/styles/Home.module.scss';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ArticlePage = () => {
  const { query: { id } } = useRouter();
  const dispatch = useAppDispatch();
  const article = useAppSelector((state: RootState) => state.article.item)

  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(getArticleById(id));
    }
  }, [id]);

  if (!article) {
    return 'loading...'
  }

  return (
    <div className={styles.root}>
      <IconBack title={article.title} />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>{article.text}</p>
        </div>
      </div>
    </div>
  );
}

ArticlePage.getLayout = getPageLayout;

export default ArticlePage;
