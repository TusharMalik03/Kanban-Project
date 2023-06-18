import React from 'react'

export default function SideNavbar2() {
  return (
    <div style={{'borderRight':'1px solid #DBDBDB'}}>
    <div style={{'marginLeft':'22px','background':'#F5F5F5','marginTop':'88px'}} className='rounded-2xl mr-5'>
        <div style={{'marginLeft':'70px','marginTop':'-45px','width':'70px','height':'70px','borderRadius':'50%','background':'#F5F5F5'}} className='absolute'>
        <img src="../Contents/bulb.svg" className='ml-6 mt-7' alt="bulb" style={{'width':'16.07px','height':'17.71px'}}></img>
        </div>
        <div style={{'width':'206px','height':'200px'}} className='flex flex-col'>
            <div className='absolute w-fit text-sm font-medium text-black' style={{'marginTop':'37px','marginLeft':'53px'}}>Thoughts Time</div>
            <div style={{'marginTop':'66px','marginRight':'66px','marginLeft':'20px','width':'166px','height':'60px'}} className='text-xs font-normal pl-4 pr-1'>We don't have any notice for you , till then you can share your thoughts with your peers. </div>
        </div>
        <div className='ml-5 absolute h-10' style={{'width':'166px','background':'white','marginTop':'-60px','color':'black','padding':'9px 20px 11px 24px'}}>Write Message</div>
    </div>
    </div>
  )
}
