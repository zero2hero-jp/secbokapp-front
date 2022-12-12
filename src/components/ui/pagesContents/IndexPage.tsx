import React, { useEffect, useState } from 'react';
import { Box, Card, Grid, Text, Badge, Button, Group } from '@mantine/core';
import { useUuId } from '@Commons/hooks/useUuId';

type CardsProps = {
  id: string;
  title?: string;
  badge?: string;
  paragraph: string;
  btnName?: string;
};

type indexCardsData = Omit<CardsProps, 'id'>;

export const IndexPage = () => {
  const [cards, setCards] = useState<CardsProps[]>([]);
  const { uuId } = useUuId();

  const indexCardsData: indexCardsData[] = [
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
  ];
  const indexCards = () => {
    const newCards = indexCardsData.map((item) => {
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

  useEffect(() => {
    indexCards();
    // 何かに依存しないで初回から関数走ってほしいため
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box className='announce'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Box>
      {cards.map((item) => (
        <Grid key={item.id}>
          <Grid.Col span={8}>
            <Card shadow='sm' p='lg' radius='xs' withBorder>
              <Card.Section>{/* <Image alt={} src={} /> */}</Card.Section>
              <Group position='apart' mt='md' mb='xs'>
                <Text weight={500}>{item.title}</Text>
                <Badge color='pink' variant='light'>
                  {item.badge}
                </Badge>
              </Group>
              <Text size='sm' color='dimmed'>
                {item.paragraph}
              </Text>
              <Button
                variant='light'
                color='blue'
                fullWidth
                mt='md'
                radius='md'
              >
                {item.btnName}
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      ))}
    </>
  );
};

// export const Index = () => {
//   return <div>IndexPage</div>;
// };
