import { PayloadMQTT } from '../types/mqtt'

export const isTemperaturePayload = (payload: PayloadMQTT | string): payload is PayloadMQTT => {
  return !!(payload as PayloadMQTT).temperature
}
