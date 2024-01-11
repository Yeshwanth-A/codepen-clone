import { useState } from "react";
import { Box , styled} from "@mui/material"
import { CloseFullscreen } from "@mui/icons-material"
import { Controlled as ControlledEditor } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)({
    flexGrow: '1',
    flexBasic: '0',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 8px 8px'
  });
    

const Heading = styled(Box)({
  background: '#1d1e22',
  display: 'flex',
  padding: '9px 12px',
});

const Header = styled(Box)({
  display: 'flex',
  background: '#060606',
  color: '#AAAEBC',
  justifyContent: 'space-between',
  fontWeight: '700',

});

const Editor = ({heading , icon , color , value , onChange}) => {
  
  const[open , setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  }
  
  return (
    <Container style={ open ? null : { flexGrow: 0 }}>
      <Header>
         <Heading>
            <Box
             component="span"
             style={{
               background: color,
               color: "#000",
               height: 20,
               width: 20,
               display: "flex",
               placeContent: "center",
               borderRadius: 5,
               marginRight: 5,
               paddingBottom: 2
            }}
            >{icon}</Box>
            {heading}
         </Heading>
         {
         window.innerWidth>=600 &&
         <CloseFullscreen 
              fontSize='small'
              style={{alignSelf: 'center'}}
              onClick={() => setOpen(prevState => !prevState)} 
              onTouchStart={() => setOpen(prevState => !prevState)}        
         />}
      </Header>
      <ControlledEditor 
        className = "controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: 'material',
          lineNumbers: true,
        }}
      />
      <Box>

      </Box>
    </Container>
  )
}

export default Editor
