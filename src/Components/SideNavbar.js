import React from 'react'
import { TaskSquare,Message,Category} from 'iconsax-react'

export default function SideNavbar() {
  return (
    <>
        <div className='flex flex-col text-base mt-0' style={{'color':'#787486','height':'283.5px','width':'249.5px','borderRight':'1px solid #DBDBDB'}}>

            <div className='flex flex-row ml-6 mt-7' style={{'height':'24px','width':'84px'}}>
            <Category size="20" color="#787486" className='ml-[3px]'/>
            <div className='ml-8 font-medium text-base mb-8 absolute' style={{'fontFamily':'Inter','width':'46px','height':'19px'}}>Home</div>
            </div>

            <div className='flex flex-row ml-6 mt-7' style={{'height':'24px','width':'116px'}}>
            <div className='ml-[2px] mt-[2px]'><Message size="20" color="#787486"/></div>
            <div className='ml-8 font-medium absolute' style={{'fontFamily':'Inter','width':'78px','height':'19px'}}>Messages</div>
            </div>

            <div className='flex flex-row ml-6 mt-7' style={{'width':'83px','height':'24px'}}>
            <div className='absolute ml-[2px] mt-[2px]'><TaskSquare size="20" color="#787486"/></div>
            <div className='ml-8 font-medium ' style={{'fontFamily':'Inter','width':'45px','height':'19px'}}>Tasks</div>
            </div>

            <div className='flex flex-row ml-6 mt-7' style={{'width':'111px','height':'24px'}}>
            <img src="../Navbar/SideNav2.svg" height="8.87px" width="8.88px" alt="img" style={{'marginTop':'2px','marginLeft':'4.56px'}}className='absolute'></img>
            <img src="../Navbar/SideNav3.svg" height="8.62px" width="13.64px" alt="img" style={{'marginTop':'10.57px','marginLeft':'2.34px'}}className='absolute'></img>
            <img src="../Navbar/SideNav4.svg" height="6px" width="3.63px" alt="img" style={{'marginTop':'4px','marginLeft':'16.08px'}}className='absolute'></img>
            <img src="../Navbar/SideNav5.svg" height="3.13px" width="6px" alt="img" style={{'marginTop':'11px','marginLeft':'15.98px'}}className='absolute'></img>
            <div className='ml-8 font-medium ' style={{'fontFamily':'Inter','width':'73px','height':'19px'}}>Members</div>
            </div>


            <div className='flex flex-row ml-6 mt-7' style={{'width': '103px','height': '24px'}}>
            <img src={"../Assets/Settings.svg"} alt="img" width="20.01px" height="18.88px" className="absolute"></img>
            <div className='ml-8 font-medium mb-8' style={{'fontFamily':'Inter','width':'64px','height':'19px'}}>Settings</div>
            </div>
        </div>

    </>
  )
}
