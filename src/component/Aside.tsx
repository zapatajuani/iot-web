import '../styles/Aside/aside.css'
import Device from './Device.tsx'
import { type DeviceData } from '../types/apiData.ts'
import { auxApiData } from '../assets/auxApiData.ts'

function Aside() {

    const data: DeviceData = {
        name: "Temp 1",
        state: true,
        id: "id",
        type: "temperature",
        pos: [3, 5],
        messure: 15,
        historic: [23, 24, 25, 28]
    }

    auxApiData() 

    return(
        <>
            <Device {...data} />
            <Device {...data} />
            <Device {...data} />
            <Device {...data} />
            <Device {...data} />
            <Device {...data} />
            <Device {...data} />
            <Device {...data} />
        </>
    )
}

export default Aside
