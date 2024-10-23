import { ReactNode, useState } from "react"
import { mapContext, themeContext } from "./context"
import { DeviceData } from "../types/apiData"

interface ContextProps {
    children: ReactNode
}

const aux: DeviceData[] = [{
    name: "Temp 1",
    state: true,
    id: "id",
    type: "temperature",
    pos: [0, 0],
    messure: 0,
    historic: {
        messures: [0],
        hours: [new Date()]
    }
}]

export function MyContext({ children }: ContextProps) {

    const [mode, setMode] = useState('dark')

    const [center, setCenter] = useState([0])
    const [devices, setDevices] = useState(aux)
    const [flag, setFlag] = useState(false)

    return(
        <themeContext.Provider value={{
            mode: mode,
            changeMode: setMode
            }}>
            <mapContext.Provider value={{
                devices: devices,
                center: center,
                updateFlag: flag,
                setFlag: setFlag,
                setDevices: setDevices,
                setCenter: setCenter
                }}>
                { children }
            </mapContext.Provider>
        </themeContext.Provider>
    )
}