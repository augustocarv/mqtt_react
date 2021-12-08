import { BackdropComponent } from '../components/backdrop'
import { LeafLet } from '../components/leaftlet'
import { useMQTT } from '../hooks/useMQTT'
import { AppLayout } from './style'

function App() {
  const { userLocations, status, lastPayload } = useMQTT()
  return (
    <AppLayout>
      <LeafLet markers={userLocations} lastPayload={lastPayload} />
      <BackdropComponent status={status} />
    </AppLayout>
  )
}

export default App
