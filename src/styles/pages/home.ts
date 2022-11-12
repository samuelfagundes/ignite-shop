import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100',
      lineHeight: '160%',
      marginBottom: '0.25rem'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      lineHeight: '140%',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})

export const BuyButton = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  borderRadius: 6,
  border: 'none',
  padding: '0.75rem',
  cursor: 'pointer',
  lineHeight: 0,

  '&:hover': {
    backgroundColor: '$green300',
  }
})
