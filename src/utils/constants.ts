import { PayloadMQTT } from '../types/mqtt'

export const initialLocations: PayloadMQTT[] = JSON.parse(process.env.REACT_APP_USERS_LOCATIONS as string)
