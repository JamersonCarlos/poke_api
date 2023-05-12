import React from 'react';
import './PokeStats.css';

function PokeStats({statistics, typeListStats}) {
  return (
    <div className='area_statistic'>
        {statistics && statistics.map((state, index) => {
            if (typeListStats && index < 3) { 
                return (
                    <div className='stats' key={state.stat.name}>
                        <p>{state.stat.name}</p>
                        <div className="bar">
                            <div className='barStat' style={{width: state.base_stat}}></div>
                        </div>
                    </div>   
                )
            } else if (!typeListStats){ 
                return (
                    <div className='stats' key={state.stat.name}>
                        <p>{state.stat.name}</p>
                        <div className="bar">
                            <div className='barStat' style={{width: state.base_stat}}></div>
                        </div>
                    </div>   
                )      
            } else { 
                // eslint-disable-next-line array-callback-return
                return;
            }
        })}
    </div>
  )
}

export default PokeStats