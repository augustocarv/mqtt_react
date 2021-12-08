import mqtt, { MqttClient } from 'mqtt'
import { useEffect, useState } from 'react'
import { Connections, PayloadMQTT, UseMQTTReturn } from '../types/mqtt'
import { initialLocations } from '../utils/constants'
import { isTemperaturePayload } from '../utils/type-guards'

const url = process.env.REACT_APP_URL_MQTT

export const useMQTT = (): UseMQTTReturn => {
  const [status, setStatus] = useState(Connections.Connecting)
  const [userLocations, setUsersLocations] = useState(initialLocations)
  const [client, setClient] = useState<MqttClient | undefined>(undefined)
  const [lastPayload, setLastPayload] = useState<PayloadMQTT | undefined>(undefined)

  useEffect(() => {
    if (client) {
      client.on('connect', () => {
        client.subscribe(process.env.REACT_APP_TOPIC_MQTT as string, { qos: 0 })

        setStatus(Connections.Connected)
      })

      client.on('error', (err) => {
        console.error('Connection error: ', err)
        client.end()
      })

      client.on('reconnect', () => {
        setStatus(Connections.Reconnecting)
      })

      client.on('message', (_, message) => {
        const response = JSON.parse(message.toString())
        if (isTemperaturePayload(response) && !isNaN(Number(response.latitude)) && !isNaN(Number(response.longitude))) {
          setUsersLocations((prev) => [...prev.filter((user) => user.id !== response.id), response])
          setLastPayload(response)
        }
      })
    }
  }, [client])

  useEffect(() => {
    setClient(
      mqtt.connect(url, {
        clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
        keepalive: 60,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
          topic: 'WillMsg',
          payload: 'Connection Closed abnormally..!',
          qos: 0,
          retain: false
        }
      })
    )
  }, [])

  return {
    lastPayload,
    userLocations,
    status
  }
}
