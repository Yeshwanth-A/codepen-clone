import { AppBar , Toolbar} from "@mui/material";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = () =>{
  
  const{width, setWidth,setActive ,  active} = useContext(DataContext);
 
 useEffect(()=>{
  const handleResize = () =>{
    if(window.innerWidth < 600){
       setActive('html');
    }
    setWidth(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);

  return ()=>{
    window.removeEventListener('resize', handleResize);
 }

 },[setActive]);

 const handleSectionChange = (section) => {
  setActive(section);
};

  return(
    <AppBar
      position="static"
      sx={{ background: '#060606'}}>
      <Toolbar style={{fontSize:'20px', display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
        Codepen
      { width<600 && 
      <Stack direction="row" spacing={1}>

        <Button onClick={
          () => handleSectionChange('html')}
          style={{ color: active === 'html' ? '#FF3C41' : '#fff' , 
                  border: active === 'html' ? '1px solid #FF3C41' : ''
                 }}
        >
          HTML
        </Button>

        <Button onClick={
          () => handleSectionChange('css')}
          style={{ color: active === 'css' ? '#0EBEFF' : '#fff' , 
                  border: active === 'css' ? '1px solid #0EBEFF' : ''
                 }}
        >
          CSS
        </Button>

        <Button onClick={
          () => handleSectionChange('js')}
          style={{ color: active === 'js' ? '#FCD000' : '#fff' , 
                  border: active === 'js' ? '1px solid #FCD000' : ''
                 }}
        >
          JS
        </Button>
      </Stack>}
      </Toolbar>
    </AppBar>
    )
};

export default Header;