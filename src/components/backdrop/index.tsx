import { Backdrop, CircularProgress, Typography } from '@mui/material'
import { FC } from 'react'
import { Connections } from '../../types/mqtt'

interface BackdropComponentProps {
  status: Connections
}

export const BackdropComponent: FC<BackdropComponentProps> = ({ status }) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    style={{ display: 'flex', gap: '35px' }}
    open={status !== Connections.Connected}>
    <CircularProgress color="inherit" />
    <Typography>{status} ao server</Typography>
  </Backdrop>
)
