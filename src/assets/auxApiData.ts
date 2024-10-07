import { Historic, type DeviceData } from "../types/apiData";
import { v4 as uuid } from 'uuid';

function randomNumber(max:number, min:number):number {
    return parseFloat(((Math.random() * (max - min + 1)) + min).toFixed(2))
}

function randomDevice():string {
    const aux = Math.random()
    let rta = ''

    switch (true) {
        case(aux <= 0.33):
            rta = 'temperature'
            break
        case(aux >= 0.66):
            rta = 'humidity'
            break
        case(aux < 0.66 && aux > 0.33):
            rta = 'switch' 
    } 

    return rta
}

function getHistoric(messure:number | boolean):Historic {
    const rta:Historic = {messures:[], hours: []}
    const currentDate = new Date()

    if (typeof messure === 'boolean') {

        for (let i = 0; i < 24; i++) {

            const pastDate = new Date(currentDate)
            pastDate.setHours(currentDate.getHours() - i)
            rta.hours.push(pastDate)

            if (Math.random() <= 0.50) {
                rta.messures.push(true)
            } else {
                rta.messures.push(false)
            }
        }

    } else if (typeof messure === 'number') {
        
        rta.messures.push(messure)
        rta.hours.push(currentDate)
    
        for (let i = 0; i < 24; i++) {
    
            const pastDate = new Date(currentDate)
            pastDate.setHours(currentDate.getHours() - i)
            rta.hours.push(pastDate)
    
            const firstMessure = typeof rta.messures[0] === 'number' ? rta.messures[0] : 0
            const randomPercetange = Math.random() * (1.25 - 0.75) + 0.75
            const randomMessure = firstMessure * randomPercetange
            rta.messures.unshift(parseFloat(randomMessure.toFixed(2)))
        }
    
        rta.hours.splice(0, 1)
        rta.messures.pop()
    }

    rta.messures.reverse()
    return rta
}

export async function auxApiData(): Promise<Array<DeviceData>> {
    const devices: Array<DeviceData> = []

    const positions = [
        [-34.9120283, -57.952612],
        [-34.909062, -57.935317],
        [-34.907415, -57.944759],
        [-34.9072916, -57.9441958],
        [-34.9208528, -57.9419804],
        [-34.920117, -57.953152],
        [-34.9143474, -57.9458913],
        [-34.9217547, -57.9671948],
    ]
    
    for (let i=1; i < 9; i++) {

        const randomIndex = Math.floor(Math.random() * positions.length);
        const randomElement = positions.splice(randomIndex, 1)[0]

        const aux: DeviceData = {
            name: `Sensor-00${i}`,
            state: true,
            id: uuid(),
            type: randomDevice(),
            messure: 0,
            pos: randomElement,
            historic: {
                messures: [0],
                hours: [new Date()]
            }
        }

        if (aux.type == 'temperature') {
            aux.messure = randomNumber(15, 35)
        } else if (aux.type == 'humidity') {
            aux.messure = randomNumber(0, 100)
        } else {
            aux.messure = Math.random() < 0.5 ? true : false
        }

        aux.historic = getHistoric(aux.messure)

        devices.push(aux)
    }
    
    return devices
}

export async function upDateData(type: string): Promise<number | boolean> {
    let rta: number | boolean = 0

    if (type == 'temperature') {
        rta = randomNumber(15, 35)
    } else if (type == 'humidity') {
        rta = randomNumber(0, 100)
    } else {
        rta = Math.random() < 0.5 ? true : false
    }

    return rta
}