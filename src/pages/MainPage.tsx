import '../styles/MainPage/gridStyle.css'
import Aside from '../component/Aside';
import Header from '../component/Header';
import MyMap from '../component/MyMap';

function MainPage() {
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
    );
}

export default MainPage
