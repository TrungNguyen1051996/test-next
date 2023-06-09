import axiosClient from "@/api-client/axios-client";
import { EmptyLayout } from "@/components/layout";
import { SWRConfig } from "swr";
// import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
