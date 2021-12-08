export interface PayloadMQTT {
  id: string
  temperature: string
  latitude: string
  longitude: string
}

export enum Connections {
  Connecting = 'Conectando',
  Connected = 'Conectado',
  Reconnecting = 'Reconectando'
}

export interface UseMQTTReturn {
  userLocations: PayloadMQTT[]
  lastPayload: PayloadMQTT | undefined
  status: Connections
}
