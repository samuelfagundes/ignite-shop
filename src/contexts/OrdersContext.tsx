import { createContext, ReactNode, useState } from "react";

interface CartList {
  priceId: string;
  quantity: number;
  name: string;
  image: string;
  price: number;
  id: string
}

interface CheckoutList {
  priceId: string;
  quantity: number;
}

interface OrdersContextType {
  cartList: CartList[];
  addProductToCart: (priceId: string, name: string, image: string, price: number, id: string) => void;
  removerProductFromCart: (id: string) => void;
}

export const OrdersContext = createContext({} as OrdersContextType)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({ children }: OrdersContextProviderProps) {
  const [cartList, setCartList] = useState<CartList[]>([])
  const [checkoutList, setCheckoutList] = useState<CheckoutList[]>([])

  function addProductToCart(priceId: string, name: string, image: string, price: number, id: string) {
    if(cartList.length === 0) {
      const quantity = 1
      const newOrder = { priceId, quantity, name, image, price, id }
      const newCheckoutList = { priceId, quantity }
          
      setCheckoutList([...checkoutList, newCheckoutList])
      setCartList([...cartList, newOrder])

      } else {
        cartList.map((product) => {
          if(product.id === id) {
            return cartList
          } else {
            const quantity = 1
            const newOrder = { priceId, quantity, name, image, price, id }
            const newCheckoutList = { priceId, quantity }
                
            setCheckoutList([...checkoutList, newCheckoutList])
            setCartList([...cartList, newOrder])
          }
        })
      }
  }

  function removerProductFromCart(id: string) {
    cartList.map((product) => {
      if(product.id === id) {
        const filteredCartList = cartList.filter((order) => order.id !== product.id)
        const filteredCheckoutList = checkoutList.filter((order) => order.priceId !== product.priceId)

        setCheckoutList(filteredCheckoutList)
        setCartList(filteredCartList)
      }

      return cartList
    })
  }
  
  return (
    <OrdersContext.Provider value={{
      addProductToCart,
      cartList,
      removerProductFromCart
    }}>
      {children}
    </OrdersContext.Provider>
  )
}