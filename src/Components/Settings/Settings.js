import React, {useContext} from 'react';
import './Settings.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import Button from '../Reusable/Button';
import themeContext from '../../context/themeContext';

const Settings = () => {

  const {dark, setDark} = useContext(themeContext);

  const changeThemeHandler = () => {
    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  }

  const resetHandler = () => {
    setDark(false);
    window.localStorage.setItem('darkTheme', false);
  }

  return (
    <div className={!dark ? 'Settings' : 'Settings Settings-dark'}>
      <div className="SettingsWrapper">
      <span>Set dark/light theme: <Toggle className="Toggle" onChange={changeThemeHandler} checked={dark} /></span>
      <Button onClick={resetHandler}>Reset</Button>
      </div>
    </div>
  )
}

export default Settings
