import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ProductImagesContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    price: {
      id: string
      product: {
        name: string
        images: Array<string>
      }
    }
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

      <ProductImagesContainer>
          {products?.map((product) => {
            return (
              <ImageContainer key={product.price.id}>
              <Image src={product.price.product.images[0]} alt={product.price.product.name} width={120} height={110} />
            </ImageContainer>
            )
          })}
        </ProductImagesContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} {products.length === 1 ? 'camiseta' : 'camisetas'} já está a caminho da sua casa.
        </p>

        <Link href="/" >
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })
  
  const customerName = session.customer_details.name;
  const products = session.line_items.data

  console.log(products[0].price.product)

  return {
    props: {
      customerName,
      products,
    }
  }
}
