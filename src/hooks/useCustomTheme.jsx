import { useState } from "react";

const useCustomTheme = ()=>{
    const [theme,setTheme] = useState(true)

    // theme selector 
    document.querySelector('html').setAttribute('data-theme',  theme ? 'light' : 'dark');
    return[theme,setTheme]

}
export default useCustomTheme;