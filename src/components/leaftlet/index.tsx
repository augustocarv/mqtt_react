import 'leaflet/dist/leaflet.css'
import { FC } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { PayloadMQTT } from '../../types/mqtt'
import { Markers } from './markers'
import { Wrapper } from './styles'

interface LeafLetProps {
  markers: PayloadMQTT[]
  lastPayload: PayloadMQTT | undefined
}

export const LeafLet: FC<LeafLetProps> = ({ markers, lastPayload }) => {
  return (
    <Wrapper id="mapid">
      <MapContainer
        center={[-28.68943193184485, -49.376412026852186]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Markers key={marker.id} marker={marker} lastPayload={lastPayload} />
        ))}
      </MapContainer>
    </Wrapper>
  )
}
