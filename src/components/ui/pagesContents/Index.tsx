import React from 'react';
import { Box, Card, Grid, Text, Badge, Button, Group } from '@mantine/core';

type IndexProps = {
  id: string;
  title?: string;
  badge?: string;
  paragraph: string;
  btnName?: string;
}[];

export const Index = () => {
  const getUUId = new Date().getTime().toString();
  const indexData: IndexProps = [
    {
      id: getUUId,
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
            <Grid.Col span={6}>
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
