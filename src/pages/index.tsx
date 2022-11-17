import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { priceFormatter } from "../utils/priceFormatter";

import { OrdersContext } from "../contexts/OrdersContext";
import { useContext } from "react";

import { BuyButton, HomeContainer, Product } from "../styles/pages/home";
import { Handbag } from "phosphor-react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    priceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addProductToCart } = useContext(OrdersContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">   
        {products.map((product) => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
                <Link href={`/product/${product.id}`} prefetch={false} >
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
                </Link>

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{priceFormatter.format(product.price / 100)}</span>
                  </div>

                  <BuyButton onClick={() => {addProductToCart(product.priceId, product.name, product.imageUrl, product.price, product.id)}}>
                    <Handbag size={32} weight="bold" />
                  </BuyButton>
                </footer>
              </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceId: price.id

    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
