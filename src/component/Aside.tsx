import '../styles/Aside/aside.css'
import Device from './Device.tsx'
import { type DeviceData } from '../types/apiData.ts'

interface Props {
    apiData: DeviceData[]
}

function Aside({apiData}: Props) {

    return(
        <>
            {
                apiData.map((device) => {
                    return(
                        <Device {...device} key={device.id} />
                    )
                })
            }
        </>
    )
}

export default Aside
