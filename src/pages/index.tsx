import SiderMobile from '@/components/Sider/SiderMobile';
import StoryCard from '@/components/StoryCard';
import { getPageLayout } from '@/layouts/PageLayout';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import styles from '@/styles/Home.module.scss';
import stylesMain from '@/styles/Main.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';
import { getArticles } from '@/store/slices/articleSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state: RootState) => state.article.list);

  useEffect(() => {
    dispatch(getArticles())
  }, []);

  return (
    <div className={styles.root}>
      <p className={classNames(stylesMain.h1, styles.title)}>All erotic stories</p>
      <div className={styles.content}>
        <SiderMobile />
        <div className={styles.section}>
          {articles.map(i => <StoryCard key={i._id} title={i.title} categories={['Fiction', 'Footfetish', 'Incest']} text={i.shortDescription} id={i._id} />)}
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = getPageLayout;

export default HomePage;
