export interface ApiData {
    map: string
    device: DeviceData
}

export interface DeviceData {
    name: string
    state: boolean
    id: string
    type: string
    messure: number | boolean
    pos: Array<number>
    historic: Historic
}

export interface Historic {
    messures: Array<number | boolean>
    hours: Array<Date>
}