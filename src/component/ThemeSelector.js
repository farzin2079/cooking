import './ThemeSelector.css';
import modeIcon from '../assets/dark-light.svg';

import { useTheme } from '../hook/useTheme'

const themecolors = [ '#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode( mode === 'dark'? 'light': 'dark')
    }

  return (
    <div className='theme-selector'>
        <div className="mode-toggle">
            <img src={ modeIcon } onClick={toggleMode} alt='dark/light toggle' 
            style={{filter: mode === 'dark'? 'invert(100%)': 'invert(20%)' }}
             />
        </div>
        <div className="theme-buttons">
            {themecolors.map(color => (
                <div 
                    key={color}
                    onClick={() => changeColor(color)}
                    style={{background: color}}
                />
            ))}
        </div>
    </div>
  )
}
