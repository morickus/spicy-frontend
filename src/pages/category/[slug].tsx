import IconBack from '@/components/IconBack';
import SiderMobile from '@/components/Sider/SiderMobile';
import StoryCard from '@/components/StoryCard';
import { getPageLayout } from '@/layouts/PageLayout';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getArticles } from '@/store/slices/articleSlice';
import { RootState } from '@/store/store';
import styles from '@/styles/Home.module.scss';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const CategoryPage = () => {
  const { query: { slug } } = useRouter();
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state: RootState) => state.article.list);

  useEffect(() => {
    dispatch(getArticles())
  }, []);

  return (
    <div className={styles.root}>
      <IconBack title={`${slug}`} />
      <div className={styles.content}>
        <SiderMobile />
        <div className={styles.section}>
          {articles.map(i => <StoryCard key={i._id} id={i._id} title={i.title} categories={['Fiction', 'Footfetish', 'Incest']} text={i.shortDescription} />)}
        </div>
      </div>
    </div>
  );
}

CategoryPage.getLayout = getPageLayout;

export default CategoryPage;
