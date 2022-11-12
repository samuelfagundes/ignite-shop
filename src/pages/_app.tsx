import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import { globalStyles } from "../styles/global";
import { CheckoutButton, Container, Counter, Header, ImageContainer, PaymentDetails, ProductDetails, ProductsContainer, Sidebar } from "../styles/pages/app";

import { Handbag, X } from "phosphor-react";
import logoImg from '../assets/logo.svg'
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState(false)

  function handleToggleCart() {
    setIsVisible(!isVisible)
  }

  globalStyles()
  return (
    <Container>
      <Header>
        <Link href='/'>
            <Image src={logoImg} alt="" />
        </Link>
        
        <button onClick={handleToggleCart}>
          <Handbag size={32} weight="bold" />
          <Counter>1</Counter>
        </button>
      </Header>

      <Sidebar className={`sidebar ${isVisible ? 'sidebarVisible' : ''}`}>
        <div>
          <header>
            <button onClick={() => handleToggleCart()}>
              <X size={24} weight='bold' />
            </button>
          </header>
          <ProductsContainer>
            <strong>Sacola de compras</strong>
            <ProductDetails>
              <ImageContainer>
              </ImageContainer>
              <div>
                <p>Camiseta X</p>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </ProductDetails>

            <ProductDetails>
              <ImageContainer>
              </ImageContainer>
              <div>
                <p>Camiseta X</p>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </ProductDetails>

            <ProductDetails>
              <ImageContainer>
              </ImageContainer>
              <div>
                <p>Camiseta X</p>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </ProductDetails>
          </ProductsContainer>
        </div>

        <div>
          <PaymentDetails>
            <div>
              <p>Quantidade</p>
              <p>3 itens</p>
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
      </Sidebar>

      <Component {...pageProps} />
    </Container>
  )
}
