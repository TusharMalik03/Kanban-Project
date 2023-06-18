import React from 'react'

export default function SideNavbar1() {
  return (
    <>
        <div className='flex flex-col' style={{'height':'283.5px','width':'249.5px','borderRight':'1px solid #DBDBDB'}}>

            <div className='flex flex-row'>
            <div className='ml-6 mt-7 text-xs font-bold' style={{'fontFamily':'Inter','color':'#787486','height':'15px',
            'width':'87px'}}>MY PROJECTS</div>
            <div className='flex flex-row'>
            <img src="../Navbar/UpperNav1.svg" alt='plus-logo' style={{'marginTop':'26px','marginLeft':'80px','marginRight':'26.83px'}}></img>
            <div style={{'color':'','marginLeft':'85px'}} className='absolute mt-6'>+</div>
            </div>
            </div>

            <div className='flex flex-col text-base font-medium' style={{'fontFamily':'Inter','color':'#787486'}}>
                <div className='flex flex-row ml-3 mt-5'style={{'width':'225px','height':'39px','background': 'rgba(80, 48, 229, 0.08)','borderRadius':'6px'}} >
                <img src="../Assets/circle.svg" alt="circle" height="8px" width="8px" className='ml-3 mt-4 mb-4'></img>
                <div className='font-semibold text-black mb-5 absolute' style={{'marginTop':'10px','marginLeft':'31px','height':'19px','width':'88px'}}>Mobile App</div>
                <div style={{'width':'16px','height':'19px','marginLeft':'195px','marginTop':'6px'}} className='absolute'>...</div>
                </div>

                <div className='flex flex-row ml-3'>
                <img src="../Contents/yellowCircle.svg" alt="circle" height="8px" width="8px" className='ml-3 mt-4 mb-4'></img>
                <div className='mb-5 absolute' style={{'marginLeft':'30px','marginTop':'9px'}}>Website Design</div>
                </div>

                <div className='flex flex-row ml-3'>
                <img src="../Contents/purpleCircle.svg" alt="circle" height="8px" width="8px" className='ml-3 mt-4 mb-4'></img>
                <div className='mb-5 absolute' style={{'marginLeft':'30px','marginTop':'9px'}}>Design System</div>
                </div>
                
                <div className='flex flex-row ml-3'>
                <img src="../Contents/blueCircle.svg" alt="circle" height="8px" width="8px" className='ml-3 mt-4 mb-4'></img>
                <div className='mb-5 absolute' style={{'marginLeft':'30px','marginTop':'9px'}}>Wire Frames</div>
                </div>
            </div>
        </div>
    </>
  )
}
