import { ReactNode, useState } from "react"
import { mapContext, themeContext } from "./context"

interface ContextProps {
    children: ReactNode
}

export function MyContext({ children }: ContextProps) {

    const [mode, setMode] = useState('dark')

    return(
        <themeContext.Provider value={{
            mode: mode,
            changeMode: setMode
            }}>
            <mapContext.Provider value={{
                url: undefined,
                center: undefined
                }}>
                { children }
            </mapContext.Provider>
        </themeContext.Provider>
    )
}