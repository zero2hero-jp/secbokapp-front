import React from 'react';
import { Box, Card, Grid, Text, Badge, Button, Group } from '@mantine/core';

type IndexProps = {
  id: string;
  title?: string;
  badge?: string;
  paragraph: string;
  btnName?: string;
}[];

export const IndexPage = () => {
  const uuId = () => {
    var uuid = '',
      i,
      random;
    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;

      if (i == 8 || i == 12 || i == 16 || i == 20) {
        uuid += '-';
      }
      uuid += (i == 12 ? 4 : i == 16 ? (random & 3) | 8 : random).toString(16);
    }
    return uuid;
  };

  const indexData: IndexProps = [
    {
      id: uuId(),
      title: 'Norway Fjord Adventures',
      badge: 'On Sale',
      paragraph:
        'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
      btnName: 'Book classic tour now',
    },
    {
      id: uuId(),
      title: 'Norway Fjord Adventures',
      badge: 'On Sale',
      paragraph:
        'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
      btnName: 'Book classic tour now',
    },
  ];

  return (
    <>
      <Box className='announce'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Box>
      {indexData.map((item) => (
        <>
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
        </>
      ))}
    </>
  );
};

// export const Index = () => {
//   return <div>IndexPage</div>;
// };
