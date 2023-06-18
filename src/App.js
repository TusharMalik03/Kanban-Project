import './App.css';
import Content from './Components/Content';
import KanbanBoard from './Components/KanbanBoard';
import MainNav from './Components/MainNav';
import SideNavbar from './Components/SideNavbar';
import SideNavbar1 from './Components/SideNavbar1';
import SideNavbar2 from './Components/SideNavbar2';
import UpNav from './Components/UpNav';
import { useState,useEffect} from 'react';

function App() {

  const [menu, setmenu] = useState('');
  const [hamIcon, sethamIcon] = useState('');

  // false hoga toh menu show krna hai

  useEffect(() => {
    if(menu==='true'){
      console.log('Hide Menu');
      let menu = document.getElementById('menu');
      menu.classList.remove('mobile:block');
      menu.classList.add('mobile:hidden');

    }if(menu==='false'){
      console.log('show Menu');
      let menu = document.getElementById('menu');
      menu.classList.remove('mobile:hidden');
      menu.classList.add('mobile:block');
    }
  }, [menu])
  


  return (
   <>
   <div className='flex flex-row'>
   <div className='flex md:block mobile:hidden'  id="menu" style={{'width':'249.5px'}}>
   <MainNav setMenu={setmenu} setIcon={sethamIcon} className="sm:fixed"/>
   <SideNavbar/>
   <SideNavbar1/>
   <SideNavbar2/>
   </div>
   <div  className="mb-20 w-full md:px-10 px-2"> 
   <UpNav setMenu={setmenu} icon={hamIcon} setIcon={sethamIcon}/>
   <Content/>
    <KanbanBoard/>
   </div>
   </div>
   </>
  );
}

export default App;
