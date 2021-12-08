import ReactDOMServer from 'react-dom/server'
import { divIcon } from 'leaflet'
import { FC, memo } from 'react'
import { Marker } from 'react-leaflet'
import { PayloadMQTT } from '../../../types/mqtt'
import { CustomIcon } from '../customIcon'
import { StyledBadge } from '../styles'

interface MarkersProps {
  marker: PayloadMQTT
  lastPayload: PayloadMQTT | undefined
}

export const Markers: FC<MarkersProps> = memo(({ marker, lastPayload }) => {
  const mapPackageIcon = divIcon({
    html: ReactDOMServer.renderToString(
      <StyledBadge variant="dot" invisible={!(lastPayload?.id === marker.id)} color="primary">
        <CustomIcon marker={marker} />
      </StyledBadge>
    ),
    iconSize: [75, 45],
    iconAnchor: [29, 68]
  })

  return <Marker position={[Number(marker.latitude), Number(marker.longitude)]} icon={mapPackageIcon} />
})
