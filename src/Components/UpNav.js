import React from 'react'
import { Calendar2, MessageQuestion, Notification, HambergerMenu } from 'iconsax-react';
import { useEffect } from 'react';

export default function UpNav(props) {


  useEffect(() => {
    if (props.icon === 'false') {
      console.log("show ham");
      let btn = document.getElementById('hamBtn');
      btn.classList.add('mobile:block');
      btn.classList.remove('mobile:hidden');

    } if (props.icon === 'true') {
      let btn = document.getElementById('hamBtn');
      console.log("hide ham");
      btn.classList.add('mobile:hidden');
      btn.classList.remove('mobile:block');
    }
  }, [props.icon])


  const showMenu = () => {
    props.setIcon('true');
    let btn = document.getElementById('hamBtn');
    btn.classList.remove('mobile:block');
    btn.classList.add('mobile:hidden');
    props.setMenu('false');
  }



  return (
    <>
      <button onClick={showMenu} ><HambergerMenu id="hamBtn" size="30" color="#FF8A65" className='cursor-pointer ml-5 mt-2 mobile:block md:hidden' /></button>
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-b-[#DBDBDB]  h-[68px]">

        <div style={{ 'height': '44px', 'background': '#F5F5F5' }} className='flex flex-row md:ml-[20px] mt-[-2px] mr-[20px] rounded-md md:block w-[417px] sm:hidden mobile:hidden'>
          <img src="../Assets/search.svg" alt="search" width="17.42px" height="17.42px" style={{ 'marginLeft': '17.13px', 'background': '#F5F5F5' }} className='absolute mt-4'></img>
          <input type="text" className='ml-18 mt-4' style={{ 'paddingLeft': '52.8px', 'marginTop': '14px', 'marginBottom': '8px', 'background': '#F5F5F5', 'border': 'none' }} placeholder='Search for anything...'></input>
        </div>




        <div className='flex md:flex-row mobile:flex-row-reverse justify-evenly'>

          <div className='flex flex-row justify-evenly mt-[6px] mr-5'>
            <div className=" flex items-center justify-center space-x-5 text-grayColor ">
              <button className="">
                <Calendar2 />
              </button>
              <button className="">
                <MessageQuestion />
              </button>
              <button className="relative">
                <Notification />
                <span className=" absolute right-[2px] top-[1px] h-2 w-2 rounded-full bg-[#D8727D] "></span>
              </button>
            </div>
          </div>

          <div className='text-base font-normal w-fit mt-[-8px]'>
            <div className='text-[#0D062D] '>Anima Agarwal</div>
            <div className='text-right mobile:text-left text-sm'>U.P,India</div>
          </div>
          <div className='ml-[18px] mt-[-6px] mr-[10px]'>
            <img src="../Profiles/6.svg" alt="profile" className="h-auto max-w-full rounded-full" height='71px' width='47px'></img>
          </div>
          <div className='mt-[8.5px] ml-[8.5px] mr-[48.5px] width="13px md:block mobile:hidden'>
            <img src="../Contents/blackDownArrow.svg" alt="down" width="13px" height="6.45px"></img>
          </div>
        </div>
      </div>
    </>
  )
}
