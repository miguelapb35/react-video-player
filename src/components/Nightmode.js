import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const NightMode = ({nightModeCallback, NightMode}) => (
  <StyledNightmode>
    <span>Nightmode: </span>
    <label className='switch'>
      <input type="checkbox" checked={NightMode} onChange={nightModeCallback} />
      <span className="slider round"></span>
    </label>
  </StyledNightmode>
)  

export default NightMode;