import { useContext } from 'react';
import { Box , styled } from '@mui/material';
import Editor from './Editor';
import { DataContext } from '../context/DataProvider';


const Container = styled(Box)({
    display: 'flex',
    background: '#060606',
    height: '50vh'
})

const Code = () =>{

    const {html, setHtml, css, setCss, js, setJs,width,active } = useContext(DataContext);

    return(
         <Container>
            {active ==='html'|| width >= 600 ? 
            <Editor 
               heading="HTML"
               icon="/"
               color="#FF3C41"
               value={html}
               onChange={setHtml}
            />: ''}
           {active==='css'||width >=600 ? 
            <Editor 
               heading="CSS"
               icon="*"
               color="#0EBEFF"
               value={css}
               onChange={setCss}      
            />:''}

          {active==='js'||width >=600 ? 
            <Editor 
               heading="JavaScript"
               icon="( )"
               color="#FCD000"
               value={js}
               onChange={setJs}
            />:''}
         </Container>
    )
};

export default Code;