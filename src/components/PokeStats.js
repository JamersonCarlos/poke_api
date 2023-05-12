import React from 'react';
import './PokeStats.css';

function PokeStats({hp, attack, defense}) {
  return (
    <div className='area_statistic'>
        <div className='stats'>
            <p>HP</p>
            <div className="bar">
                <div className='barStat' style={{width: hp}}></div>
            </div>
        </div>   
        <div className='stats'>
            <p>Attack</p>
            <div className="bar">
                <div className='barStat' style={{width: attack}}></div>
            </div>
        </div>     
        <div className='stats'>
            <p>Defense</p>
            <div className="bar">
                <div className='barStat' style={{width: defense}}></div>
            </div>
        </div>       
    </div>
  )
}

export default PokeStats