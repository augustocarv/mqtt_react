import styled from 'styled-components'
import { Badge } from '@mui/material'
import { styled as styledMaterial } from '@mui/material/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-marker-icon {
    width: 82px !important;
    height: 68px !important;
    text-align: center;
    background-color: #ffffffcc !important;
  }
`

export const StyledBadge = styledMaterial(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))
