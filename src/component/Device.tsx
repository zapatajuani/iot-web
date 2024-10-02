import '../styles/Aside/device.css'
import { type DeviceData } from '../types/apiData'
import DevIcon from './DevIcon'

function Device(dataArray: DeviceData) {
    const state: string = dataArray.state?
    "cloud_ok":
    "cloud_off"

    return (
        <div className="device-container">
            <img
                className='state-icon'
                src={`/img/icons/${state}.svg`}
                alt="state"
            />
            <p className='device-tittle'>{dataArray.name}</p>
            <DevIcon {...dataArray}/>
            <p className='device-messure'>{dataArray.messure}</p>
        </div>
    )
}

export default Device