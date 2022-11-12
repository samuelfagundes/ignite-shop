import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    backgroundColor: '$gray800 !important',
    color: '$gray300 !important',
    borderRadius: 6,
    border: 'none',
    padding: '0.75rem',
    cursor: 'pointer',
    lineHeight: 0,
  }
})

export const Counter = styled('div', {
  position: 'absolute',
  top: '1.4rem',
  right: '-0.8rem',
  maxWidth: '1.5rem',
  maxHeight: '1.5rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '99px !important',
  fontSize: '$sm',
  fontWeight: 'bold',

  background:'$green300 !important',
  color: '$white !important',
  border: '4px solid $gray900',

  opacity: 0,
})

export const Sidebar = styled('aside', {
  '&.sidebar': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    transform: 'translateX(110%)',
    width: '30rem',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '$gray800',

    transition: 'all .5s ease-in-out',
    
    header: {
      margin: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      
      button: {
        width: '1.5rem',
        display: 'flex',
        background: 'inherit',
        border: 'none',
        color: '$gray500',
        cursor: 'pointer'
      }
    },
  },

  '&.sidebarVisible': {
    transform: 'translateX(0%)',
  }
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2.5rem',
  
  strong: {
    marginBottom: '2rem',
  },
})

export const ImageContainer = styled('div', {
  width: '6.25rem',
  height: '5.75rem',
  marginRight: '1.25rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
})

export const ProductDetails = styled('div', {
  display: 'flex',
  marginBottom: '1.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
  },

  p: {
    fontSize: '$md',
    lineHeight: '160%',
  },

  strong: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '160%',
    marginBottom: '0.5rem',
  },

  button: {
    display: 'flex',

    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    color: '$green500',
    fontSize: '1rem',
    width: '70%',

    cursor: 'pointer',

    transition: 'color .2s' ,

    '&:hover': {
      color: '$green300'
    }
  }
})

export const PaymentDetails = styled('footer',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  margin: '0 2.5rem 3.5rem',
  maxWidth: '24rem',
  
  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  p: {
    fontSize: '$md',
    color: '$gray100',
    lineHeight: '160%',
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    lineHeight: '160%',

    '&:last-child': {
      fontSize: '$xl'
    }
  }
})

export const CheckoutButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 2.5rem 3rem',
  padding: '1.25rem 0',
  width: '24rem',

  backgroundColor: '$green500',
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$md',
  border: 'none',
  borderRadius: 8,
  lineHeight: '160%',

  transition: 'all .2s',

  '&:hover': {
    backgroundColor: '$green300',
  }
})
