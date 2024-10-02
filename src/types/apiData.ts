export interface ApiData {
    map: string
    device: DeviceData
}

export interface DeviceData {
    name: string
    state: boolean
    id: string
    type: string
    messure: number | null
    pos: Array<number>
    historic: Array<number | string>
}