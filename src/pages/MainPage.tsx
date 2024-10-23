import '../styles/MainPage/gridStyle.css'
import Aside from '../component/Aside'
import Header from '../component/Header'
import MyMap from '../component/MyMap'
import { useEffect } from 'react'
import { auxApiData } from '../assets/auxApiData'
import { MapContext, useMapContext } from '../context/context'
import { upDateData } from '../assets/auxApiData'

function MainPage() {
    const MapData: MapContext = useMapContext()

    useEffect(() => {
        async function callAPI() {
            try {
                const data = await auxApiData()
                
                if (MapData.setDevices) {
                    MapData.setDevices(data)
                }
            } catch (err) {
                console.log(err)
            }
        }

        const intervalId = setInterval(async () => {
            
            MapData.devices.map(async (e)=> {
                e.messure = upDateData(e.type)
            })

            if (MapData.setFlag && MapData.updateFlag) {
                MapData.setFlag(false)
            } else if (MapData.setFlag) {
                MapData.setFlag(true)
            }

        }, 3000)

        callAPI()

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="grid-container">
        <div className="header">
            <Header />
        </div>
        <div className="aside">
            <Aside />
        </div>

        <MyMap /> 
        </div>
    )
}

export default MainPage
