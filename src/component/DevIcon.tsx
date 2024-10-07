import { useEffect, useState } from 'react'
import '../styles/Aside/devIcon.css'

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

function iconInit(type: string, messure: boolean | number): string[] {

    let icon: string = ""
    let quantity: string = ""

    switch (true) {
        case (type == "temperature" && typeof messure === 'number'):
            [icon, quantity] = iconAsignation(18, 30, type, messure)
            break
        case (type == "humidity" && typeof messure === 'number'):
            [icon, quantity] = iconAsignation(20, 90, type, messure)
            break
        case (type == "switch" && typeof messure === 'boolean'):
            icon = 'switch'
            quantity = ''
            break
        case type == "gps":
            icon = "gps"
            quantity = ""
            break
    }

    return [icon, quantity]
}

interface Props {
    type: string
    messure: boolean | number
}

function DevIcon({ type, messure }: Props) {
    const [icon, setIcon] = useState('')
    const [quantity, setQuantity] = useState('')

    useEffect(()=>{
        const [newIcon, newQuantity] = iconInit(type, messure)
        
        setIcon(newIcon)
        setQuantity(newQuantity)

    }, [messure, type])

    return(
        <img
            className='dev-icon'
            src={`/img/icons/${icon}${quantity}.svg`}
            alt="device-icon"
        />
    )
}

export default DevIcon
