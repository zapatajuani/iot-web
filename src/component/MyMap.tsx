import '../styles/MyMap/mymapStyle.css'
import 'leaflet/dist/leaflet.css'
import { TileLayer } from 'react-leaflet'
import { MapContainer } from 'react-leaflet'
import { /* useMapContext, */ useThemeContext } from '../context/context'
import { useEffect, useState } from 'react'
import { DeviceData } from '../types/apiData'
import MyMarker from './MyMarker'

/* interface Mapa {
    url: string | undefined
    center: string | number[] |undefined
} */

interface ThemeContext {
    mode: string
    changeMode: undefined | React.Dispatch<React.SetStateAction<string>>
}

interface Props {
    apiData: DeviceData[]
}

function MyMap ({apiData}: Props) {
    const darkURL: string = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    const lightURL: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    
    const mode: ThemeContext = useThemeContext()
    const [url, setUrl] = useState(darkURL)

    useEffect(()=>{
        if (mode.mode=='light') {
            setUrl(lightURL)
        } else {
            setUrl(darkURL)
        }
    }, [mode])

    return(
        <MapContainer
        center={[-34.92, -57.95]}
        zoom={15}
        >
            <TileLayer
                url={url}
            />
            {
                apiData.map((device) => {
                    return(
                        <MyMarker device={device}/>
                    )
                })
            }
        </MapContainer>
    )
}

export default MyMap