import { createContext, useContext } from "react"
import { DeviceData } from "../types/apiData"

/// INTERFACES ---------------------------

interface MapContext { 
    devices: DeviceData[]
    center: string | number[] | undefined
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
    center: undefined
})

export function useMapContext() {
    return useContext(mapContext)
}

export function useThemeContext() {
    return useContext(themeContext)
}
