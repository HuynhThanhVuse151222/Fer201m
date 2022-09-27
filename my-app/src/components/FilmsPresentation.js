import React from 'react'

export default function FilmsPresentation({phimp}) {
 console.log(phimp);
    return (
        <div className='container'>
        {phimp.map((p)=>(
        <div className='column'>
        <div className='card'>
        <img src={p.img} alt='pic'/>
          <h3>{p.name}</h3>
          <h4>{p.titles}</h4>
          <p className='year'>{p.year}</p>
          <p className='nation'>{p.nation}</p>
          <p><button>Detail</button></p>
        </div>
      </div>
     ))}</div>   

    )
  }

