import type { AppProps } from 'next/app';
import { AppLayout } from '../components/AppLayout';
import { AppProvider } from '../components/AppProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  );
}

export default MyApp;
