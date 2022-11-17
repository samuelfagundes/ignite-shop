import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Stripe from "stripe"
import { OrdersContext } from "../../contexts/OrdersContext"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { priceFormatter } from "../../utils/priceFormatter"

interface ProductProps {
  product: {
    id: string
    name: string 
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useContext(OrdersContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!")
    }
  }
  
  if(isFallback) {
    return (
      <p>Tá carregando espera ai...</p>
      )
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatter.format(product.price / 100)}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={() => {addProductToCart(product.defaultPriceId, product.name, product.imageUrl, product.price, product.id)}}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
