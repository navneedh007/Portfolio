// DarkModeToggle.js
import React from 'react';
import Switch from 'react-switch';
import { FiSun, FiMoon } from 'react-icons/fi';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <div className="switch-container">
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          offColor="#2c3e50"
          onColor="#57606f"
          offHandleColor="#ecf0f1"
          onHandleColor="#ecf0f1"
          uncheckedIcon={<FiMoon size={20} color="#ecf0f1" />}
          checkedIcon={<FiSun size={20} color="#ecf0f1" />}
          height={25}
          width={60}
          handleDiameter={30}
          className="react-switch-bg"
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
