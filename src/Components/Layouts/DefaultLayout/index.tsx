import { ReactNode, useContext, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { OrdersContext } from "../../../contexts/OrdersContext"
import { priceFormatter } from "../../../utils/priceFormatter"

import logoImg from '../../../assets/logo.svg'
import { Handbag, X } from "phosphor-react"

import { CheckoutButton, Container, Counter, Header, ImageContainer, PaymentDetails, ProductDetails, ProductsContainer, Sidebar } from "../../../styles/pages/app"

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { cartList, removerProductFromCart } = useContext(OrdersContext)
  const [isVisible, setIsVisible] = useState(false)

  function handleToggleCart() {
    setIsVisible(!isVisible)
  }

  return (
    <Container>
        <Header>
          <Link href='/'>
              <Image src={logoImg} alt="" />
          </Link>
          
          <button onClick={handleToggleCart}>
            <Handbag size={32} weight="bold" />
            {cartList.length !== 0 && <Counter>{cartList.length}</Counter>}
          </button>
        </Header>

        <Sidebar className={`sidebar ${isVisible ? 'sidebarVisible' : ''}`}>
          <div>
            <header>
              <button onClick={handleToggleCart}>
                <X size={24} weight='bold' />
              </button>
            </header>
            <ProductsContainer>
              <strong>Sacola de compras</strong>
                {cartList.length !== 0 && cartList.map((product) => {
                  return (
                    <ProductDetails key={product.id}>
                      <ImageContainer>
                        <Image src={product.image} width={95} height={95} alt={product.name} />
                      </ImageContainer>
                      <div>
                        <p>{product.name}</p>
                        <strong>{priceFormatter.format(product.price / 100)}</strong>
                        <button onClick={() => removerProductFromCart(product.id)} >Remover</button>
                      </div>
                    </ProductDetails>
                  )
                })}
            </ProductsContainer>
          </div>

          {cartList.length !== 0 && (
            <div>
                <PaymentDetails>
                <div>
                  <p>Quantidade</p>
                  <p>{cartList.length === 1 ? `${cartList.length} item` : `${cartList.length} itens`}</p>
                </div>
                <div>
                  <strong>Valor total</strong>
                  <strong>R$ 42,00</strong>
                </div>
              </PaymentDetails>
              <CheckoutButton>
                Finalizar compra
              </CheckoutButton>
            </div>
          )}
        </Sidebar>

        {children}
      </Container>
  )
}