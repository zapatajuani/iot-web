import '../styles/Header/Header.css'
import '../styles/Header/button.css'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../context/context';

function lightMode() {
    const style = document.documentElement.style
    style.setProperty('--color-50', '#1f2c5e');  
    style.setProperty('--color-100', '#243b84'); 
    style.setProperty('--color-200', '#2641a7'); 
    style.setProperty('--color-300', '#284fcd'); 
    style.setProperty('--color-400', '#3063e0'); 
    style.setProperty('--color-500', '#4681eb');  
    style.setProperty('--color-600', '#69a3f1'); 
    style.setProperty('--color-700', '#99c3f7'); 
    style.setProperty('--color-800', '#c3dafa'); 
    style.setProperty('--color-900', '#dde9fc'); 
    style.setProperty('--color-950', '#f0f6fe');     
}

function darkMode() {
    const style = document.documentElement.style
    style.setProperty('--color-50', '#f0f6fe');
    style.setProperty('--color-100', '#dde9fc');
    style.setProperty('--color-200', '#c3dafa');
    style.setProperty('--color-300', '#99c3f7');
    style.setProperty('--color-400', '#69a3f1');
    style.setProperty('--color-500', '#4681eb');
    style.setProperty('--color-600', '#3063e0');
    style.setProperty('--color-700', '#284fcd');
    style.setProperty('--color-800', '#2641a7');
    style.setProperty('--color-900', '#243b84');
    style.setProperty('--color-950', '#1f2c5e');
}

interface ThemeContext {
    mode: string
    changeMode: undefined | React.Dispatch<React.SetStateAction<string>>
}

function Header() {
    const mode: ThemeContext = useThemeContext()
    
    const themeButton = ():void => {
        if (mode.mode == 'light' && mode.changeMode) {
            darkMode()
            mode.changeMode('dark')
        } else if (mode.changeMode) {
            lightMode()
            mode.changeMode('light')
        }
    }

    return(
        <div className='header-main-containe'>
            <img className='logo-empresa' src="/img/logo/empresa.png" alt="logo" />
            <ul className="header-ref-list">
                <li><Link to={"/mapa"}>MAPA</Link></li>
                <li><Link to={"/mapa"}>DISPOSITIVOS</Link></li>
                <li><Link to={"/graficos"}>GRÁFICOS</Link></li>
                <li><Link to={"/mapa"}>CUENTA</Link></li>
            </ul>

            <button
                id='theme-provider'
                onClick={themeButton}
                >{
                    mode.mode == 'dark' ?
                    <img className='sun' src="/img/icons/sun.svg" alt="moon" /> :
                    <img className='moon' src="/img/icons/moon.svg" alt="sun" />
                }
            </button>
        </div>
    )
}

export default Header
