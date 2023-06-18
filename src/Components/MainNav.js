import React from 'react'

export default function MainNav(props) {

  const closeMenu = ()=>{
    props.setMenu('true');
    props.setIcon('false');
  }

  return (
    <>
    <div className='flex flex-row' style={{'width':'249.5px','height':'88px','borderRight':'1px solid #DBDBDB','borderBottom':'1px solid #DBDBDB'}}>
   
   <div className='mt-8 ml-5 w-6 h-6'>
   <img src="../Assets/blueLogo.svg" className='ml-7 mt-8 absolute' style={{'marginLeft':
   '6px','marginTop':'2px','marginRight':'6px'}} height="12px" width="12px" alt="logo"></img>

   <img src="../Assets/leftLogo.svg" height="11.79px" className='absolute' width="12px" alt="logo1" style={{'marginTop':'10.21px',
    'marginLeft':'2px','marginBottom':'2px'}}></img>
   
   <img src="../Assets/rightLogo.svg" height="11.79px" className="absolute" width="10px" alt="logo2" style={{'marginLeft':'12px','marginRight':'2px','marginBottom':'2px','marginTop':'10.21px'}}></img>
   </div>

   <div style={{'fontFamily': 'Inter','width':'98px','height':'24px'}} className='mt-8 ml-14 mb-8 text-xl font-bold absolute'>Project M.</div>

   <button className='absolute w-7 h-5 ml-48 mt-8' id='closeBtn' onClick={closeMenu}>
   <img src="../Assets/leftArrow.svg" alt="arrow" className='absolute' height="14.45px" width="7.16px" style={{'marginLeft':'5.96px','marginTop':'0.78px','marginRight':'2.78px'}}></img>
   <img src="../Assets/leftArrow.svg" alt="arrow" className='absolute' height="14.45px" width="7.16px"></img></button>
   </div>
    </>
  )
}
