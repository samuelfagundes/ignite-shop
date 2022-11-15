import { createContext, ReactNode, useState } from "react";

interface CartList {
  id: string;
  amount_total: number;
  price: {
    id: string;
    product: {
      default_price: string;
      images: Array<string>
      name: string
    }
  }
}

interface OrdersContextType {

}

export const OrdersContext = createContext({} as OrdersContextType)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({ children }: OrdersContextProviderProps) {
  const [cartList, setCartList] = useState<CartList[]>([])
  
  return (
    <OrdersContext.Provider value={{

    }}>
      {children}
    </OrdersContext.Provider>
  )
}