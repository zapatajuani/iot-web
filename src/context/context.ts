import { createContext, useContext } from "react"

/// INTERFACES ---------------------------

interface MapContext {
    url: string | undefined
    center: string | number[] |undefined
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
    url: undefined,
    center: undefined
})

export function useMapContext() {
    return useContext(mapContext)
}

export function useThemeContext() {
    return useContext(themeContext)
}
