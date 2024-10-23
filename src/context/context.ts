import { createContext, useContext } from "react"
import { DeviceData } from "../types/apiData"

/// INTERFACES ---------------------------

export interface MapContext { 
    devices: DeviceData[]
    center: number[] | undefined
    updateFlag: boolean | undefined
    setFlag: undefined | React.Dispatch<React.SetStateAction<boolean>>
    setDevices: undefined | React.Dispatch<React.SetStateAction<DeviceData[]>>
    setCenter: undefined | React.Dispatch<React.SetStateAction<number[]>>
}

interface ThemeContext {
    mode: string
    changeMode: undefined | React.Dispatch<React.SetStateAction<string>>
}

/// ---------------------------------------

export const themeContext = createContext<ThemeContext>({
    mode: 'light',
    changeMode: undefined
})

export const mapContext = createContext<MapContext>({
    devices: [],
    center: undefined,
    updateFlag: undefined,
    setFlag: undefined,
    setDevices: undefined,
    setCenter: undefined
})

export function useMapContext() {
    return useContext(mapContext)
}

export function useThemeContext() {
    return useContext(themeContext)
}
