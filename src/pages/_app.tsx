import '@Styles/common.css';
import '@Styles/header.css';
import '@Styles/sidebar.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            defaultProps: {
              size: 'sm',
              color: 'blue',
            },
          },
          Text: {
            defaultProps: {
              size: 'sm',
              color: 'black',
            },
          },
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
