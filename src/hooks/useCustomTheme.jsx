import { useEffect, useState } from "react";

const useCustomTheme = ()=>{
    const [theme,setTheme] = useState(true)
// console.log(theme);
    // theme selector 
   useEffect(()=>{
  const themeInterface =   document.querySelector('html').setAttribute('data-theme',  theme ? 'light' : 'dark');

},[theme])

return[theme,setTheme]



}
export default useCustomTheme;