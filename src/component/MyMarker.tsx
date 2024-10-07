import '../styles/MyMap/mymapStyle.css'
import 'leaflet/dist/leaflet.css'
import { Popup, Marker } from 'react-leaflet'
import { DeviceData } from '../types/apiData'

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

interface Props {
    device: DeviceData
}

function MyMarker({device}: Props) {
    return (
        <Marker position={[device.pos[0], device.pos[1]]}>
            <Popup>
                <div>
                    <p>{device.name}</p>
                    <p>{messureInit(device.messure, device.type)}</p>
                </div>
            </Popup>
        </Marker>
    )
}

export default MyMarker
