import React, { useState, useEffect } from 'react';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import { getCurrentColor, setCurrentColor } from 'helpers/Utils';
import { DarkIcon, LightIcon } from '../../components/svg';

const TopnavDarkSwitch = () => {
  const [switchChecked, setSwitchChecked] = useState(false);

  useEffect(() => {
    const color = getCurrentColor();
    setSwitchChecked(color.indexOf('dark') > -1);
  }, []);

  const changeMode = () => {
    let color = getCurrentColor();

    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    setCurrentColor(color);
    setSwitchChecked(color.indexOf('dark') > -1);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      <LightIcon />
      <div className="d-none d-md-inline-block align-middle mx-2">
        <Switch
          id="tooltip_switch"
          className="custom-switch custom-switch-primary custom-switch-small"
          checked={switchChecked}
          onChange={changeMode}
        />
      </div>
      <DarkIcon />
    </div>
  );
};
export default TopnavDarkSwitch;
