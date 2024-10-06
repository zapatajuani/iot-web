import '../styles/Aside/aside.css'
import Device from './Device.tsx'
import { type DeviceData } from '../types/apiData.ts'
import { auxApiData } from '../assets/auxApiData.ts'
import { useEffect, useState } from 'react'

const data: DeviceData[] = [{
    name: "Temp 1",
    state: true,
    id: "id",
    type: "temperature",
    pos: [3, 5],
    messure: 15,
    historic: {
        messures: [0],
        hours: [new Date()]
    }
}]

function Aside() {

    const [apiData, setAPIData] = useState(data)

    useEffect(()=>{

        const callAPI = async () => {
            try {
                const data = await auxApiData()
                setAPIData(data)

            } catch (err) {
                console.log(err)
            }
        }

        callAPI()
        
    }, [])

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
