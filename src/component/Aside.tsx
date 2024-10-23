import '../styles/Aside/aside.css'
import Device from './Device.tsx'
import { MapContext, useMapContext } from '../context/context.ts'

function Aside() {
    const MapData: MapContext = useMapContext()

    return(
        <>
            {
                MapData.devices.map((device) => {
                    return(
                        <Device {...device} key={device.id} />
                    )
                })
            }
        </>
    )
}

export default Aside
