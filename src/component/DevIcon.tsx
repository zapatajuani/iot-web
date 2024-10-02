import '../styles/Aside/devIcon.css'
import { type DeviceData } from '../types/apiData'

/**
 * Choose the correct strings fro the icon
 * @param step1 First messure point 
 * @param step2 Second messure point
 * @param type Type of device
 * @param messure Quantity of the messure
 * @returns An array with the icon string and the level
 */
function iconAsignation(
    step1: number,
    step2: number,
    type: string,
    messure: number
) {
    const icon: string = type
    let quantity: string = ""
    if (messure < step1) {
        quantity = "_low"
    } else if (messure >= step1 && messure < step2) {
        quantity = "_middle"
    } else {
        quantity = "_high"
    }

    return [icon, quantity]
}

function DevIcon(data: DeviceData) {

    let icon: string = ""
    let quantity: string = ""

    switch (true) {
        case (data.messure && data.type == "temperature"):
            [icon, quantity] = iconAsignation(18, 30, data.type, data.messure)
            break
        case (data.messure && data.type == "humidity"):
            [icon, quantity] = iconAsignation(20, 90, data.type, data.messure)
            break
        case data.type == "gps":
            icon = "gps"
            quantity = ""
            break
    }

    return(
        <img
            className='dev-icon'
            src={`/img/icons/${icon}${quantity}.svg`}
            alt="device-icon"
        />
    )
}

export default DevIcon
