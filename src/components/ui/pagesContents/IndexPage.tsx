import React, { useEffect } from 'react';
import { Box, Card, Grid, Text, Badge, Button, Group } from '@mantine/core';

export type CardsProps = {
  id: string;
  title?: string;
  badge?: string;
  paragraph: string;
  btnName?: string;
};

export type indexCardItem = Omit<CardsProps, 'id'>;

export type IndexPageProps = {
  createCards: () => void;
  cards: CardsProps[];
};

export const IndexPage = ({ createCards, cards }: IndexPageProps) => {
  useEffect(() => {
    createCards();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box className='announce'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Box>

      <Grid>
        {cards.map((item) => (
          <Grid.Col lg={4} md={4} sm={6} key={item.id}>
            <Card
              shadow='sm'
              p='lg'
              radius='xs'
              withBorder
              className='contents'
            >
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
        ))}
      </Grid>
    </>
  );
};

// export const Index = () => {
//   return <div>IndexPage</div>;
// };
