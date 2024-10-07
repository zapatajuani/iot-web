import '../styles/MainPage/gridStyle.css'
import Aside from '../component/Aside';
import Header from '../component/Header';
import MyMap from '../component/MyMap';
import { DeviceData } from '../types/apiData';
import { useEffect, useState } from 'react';
import { auxApiData } from '../assets/auxApiData';

const data: DeviceData[] = [{
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

function MainPage() {

    const [apiData, setAPIData] = useState(data)

    useEffect(()=>{
        async function callAPI() {
            try {
                const data = await auxApiData();
                setAPIData(data);

            } catch (err) {
                console.log(err);
            }
        }

        callAPI()
    }, [])

    return (
        <div className="grid-container">
        <div className="header">
            <Header />
        </div>
        <div className="aside">
            <Aside apiData={apiData}/>
        </div>

        <MyMap apiData={apiData}/> 
        </div>
    );
}

export default MainPage
