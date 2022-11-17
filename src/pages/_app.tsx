import { AppProps } from "next/app";
import { OrdersContextProvider } from "../contexts/OrdersContext";
import { DefaultLayout } from "../Components/Layouts/DefaultLayout";
import { globalStyles } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <OrdersContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </OrdersContextProvider>
  )
}
