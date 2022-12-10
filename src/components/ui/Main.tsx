import React from 'react';
import { Box, Card, Grid, Text, Badge, Button, Group } from '@mantine/core';

export const Main = () => {
  return (
    <main className='px-4 md:px-4 lg:px-8 pt-6'>
      <Box className='announce'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Box>
      <Grid>
        <Grid.Col span={6}>
          <Card shadow='sm' p='lg' radius='xs' withBorder>
            <Card.Section>
              {/* イメージがあればここに入ります。 */}
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color='pink' variant='light'>
                On Sale
              </Badge>
            </Group>
            <Text size='sm' color='dimmed'>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
            <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </main>
  );
};
