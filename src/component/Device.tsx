import { useEffect, useState } from 'react'
import '../styles/Aside/device.css'
import { type DeviceData } from '../types/apiData'
import DevIcon from './DevIcon'
import { upDateData } from '../assets/auxApiData'

const messureInit = (messure: number | boolean | string, type: string): string => {
    let rta: string = ''
    
    if (typeof messure === 'boolean') {
        if (messure) {
            rta = 'On' 
        } else {
            rta = 'Off'
        }
    } else if (type == 'humidity' && typeof messure === 'number') {
        rta = `${messure.toFixed(0)} %`
    } else if (type == 'temperature' && typeof messure === 'number') {
        rta = `${messure.toFixed(1)} °C`
    }
    
    return rta
}

function Device(dataArray: DeviceData) {
    const [messure, setMessure] = useState('')
    const [numberMessure, setNumberMessure] = useState(dataArray.messure)
    
    useEffect(() => {
        setMessure(messureInit(dataArray.messure, dataArray.type))

        const intervalId = setInterval(async () => {
            try {
                const data = await upDateData(dataArray.type)
                setMessure(messureInit(data, dataArray.type))
                setNumberMessure(data)
            } catch (err) {
                console.log(err)
            }
        }, 3000)

        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId)
    }, [dataArray.type, dataArray.messure]) // Agrega las dependencias necesarias

    const state: string = dataArray.state?
    "cloud_ok":
    "cloud_off"

    messureInit(dataArray.messure, dataArray.type)

    return (
        <div className="device-container" id={dataArray.id}>
            <img
                className='state-icon'
                src={`/img/icons/${state}.svg`}
                alt="state"
            />
            <p className='device-tittle'>{dataArray.name}</p>
            <DevIcon type={dataArray.type} messure={numberMessure}/>
            <p className='device-messure'>{messure}</p>
        </div>
    )
}

export default Device