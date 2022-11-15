import { styled } from ".."

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    marginTop: '2rem',
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    fontWeight: 'bold',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  zIndex: 10,
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: 99,
  padding: '0.25rem',
  marginTop: '4rem',
  marginLeft: -52,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ProductImagesContainer = styled('div', {
  display: 'flex',
  marginLeft: 52,
})
