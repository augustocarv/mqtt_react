import { FC } from 'react'
import { PayloadMQTT } from '../../../types/mqtt'

interface IconProps {
  marker: PayloadMQTT
}

export const CustomIcon: FC<IconProps> = ({ marker }) => {
  const temperature = Number(marker.temperature)
  return (
    <div>
      <strong>{marker.id}</strong>
      <p>{!temperature ? 'Sem temperatura' : `Temperatura: ${temperature} °C`}</p>
    </div>
  )
}
