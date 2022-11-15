import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const {priceId} = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: 'price_1M07isCVw1OEY74iXTSNbX1y',
        quantity: 1
      },
      {
        price: 'price_1M07iRCVw1OEY74iAFL9d0NZ',
        quantity: 1
      },
      {
        price: 'price_1M07hKCVw1OEY74iJsneL1dI',
        quantity: 1
      },
      {
        price: 'price_1M07fjCVw1OEY74i1jBn1dUb',
        quantity: 1
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}