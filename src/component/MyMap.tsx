import '../styles/MyMap/mymapStyle.css'
import 'leaflet/dist/leaflet.css'
import { TileLayer, Popup, Marker } from 'react-leaflet'
import { MapContainer } from 'react-leaflet'
import { /* useMapContext, */ useThemeContext } from '../context/context'
import { useEffect, useState } from 'react'

/* interface Mapa {
    url: string | undefined
    center: string | number[] |undefined
} */

interface ThemeContext {
    mode: string
    changeMode: undefined | React.Dispatch<React.SetStateAction<string>>
}

function MyMap () {
    const darkURL: string = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    const lightURL: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    
    /// const data: Mapa = useMapContext()
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
        center={[51.505, -0.09]}
        zoom={13}
        >
            <TileLayer
                url={url}
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup.<br />Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MyMap