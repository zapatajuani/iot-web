import { Historic, type DeviceData } from "../types/apiData";
import { v4 as uuid } from 'uuid';

/* name: string
state: boolean
id: string
type: string
messure: number | null
pos: Array<number>
historic: Array<number | string> */

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

function getHistoric(messure:number):Historic {
    for (let i = 0; i != 24; i++) {

        const randomNumber = Math.random() * (1.25 - 0.75) + 0.75;
    }
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
    
    for (let i=1; i != 8; i++) {

        const randomIndex = Math.floor(Math.random() * positions.length);
        const randomElement = positions.splice(randomIndex, 1)[0]

        const aux = {
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
            aux.messure = Math.floor(Math.random() * 2)
        }

        devices.push(aux)
    }
    
    return devices
}
