import { type DeviceData } from "../types/apiData";
import { v4 as uuid } from 'uuid';

/* name: string
state: boolean
id: string
type: string
messure: number | null
pos: Array<number>
historic: Array<number | string> */

async function randomNumber(max:number, min:number):number {
    return parseFloat(((Math.random() * (max - min + 1)) + min).toFixed(2))
}

export const auxApiData = () => {
    console.log(randomNumber(10, 15))
}
