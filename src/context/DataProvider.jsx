import { createContext , useState} from "react";

export const DataContext = createContext();

const DataProvider = ({ children}) => {
  const[html , setHtml] = useState('');
  const[css , setCss] = useState('');
  const[js , setJs] = useState('');
  const[width , setWidth] = useState(window.innerWidth);
  const[active , setActive] = useState(window.innerWidth < 600 ? 'html' : '');

  return(
    <DataContext.Provider value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        width, 
        setWidth,
        active,
        setActive
        }}
    >
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;