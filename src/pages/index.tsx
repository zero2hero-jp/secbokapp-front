import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@Components/ui/layouts/Layout';
import {
  CardsProps,
  indexCardItem,
  IndexPage,
} from '@Components/ui/pagesContents/IndexPage';
import { useState } from 'react';
import { useUuId } from '@Commons/hooks/useUuId';

const Home: NextPage = () => {
  // const [children, setChildren] = useState<ReactElement>(<About />);
  /*  メモ: Nextの場合はPages配下に入ったjsxとtsxはpageとして認識されます
   *  pages/index.tsx => topページ
   *  pages/about.tsx => aboutページ
   *
   */
  // const [children, setChildren] = useState<ReactElement>(<Main />);

  const [cards, setCards] = useState<CardsProps[]>([]);
  const { uuId } = useUuId();

  const CARD_ITEMS: indexCardItem[] = [
    {
      title: 'Norway Fjord Adventures',
      badge: 'On Sale',
      paragraph:
        'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
      btnName: 'Book classic tour now',
    },
    {
      title: 'Lorem ipsum',
      badge: 'On Sale',
      paragraph: 'Lorem ipsum',
      btnName: 'Book classic tour now',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      badge: 'On Sale',
      paragraph: 'quia aperiam iure modi aspernatur',
      btnName: 'Book classic tour now',
    },
  ];

  const createIndexCards = () => {
    const newCards = CARD_ITEMS.map((item) => {
      return {
        title: item.title,
        badge: item.badge,
        paragraph: item.paragraph,
        btnName: item.btnName,
        id: uuId(),
      };
    });

    setCards(newCards);
  };

  return (
    <>
      {/* <Seo /> */}
      <Head>
        <title>SecBokApp</title>
      </Head>

      <Layout /* setChildren={setChildren} */>
        <IndexPage createCards={createIndexCards} cards={cards} />
      </Layout>
    </>
  );
};

export default Home;
