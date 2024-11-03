import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebtn'



function App() {
  const[themeMode,SetThemeMode] = useState("light")

  const lightTheme = () => {
    SetThemeMode('light')
  } 
  const darkTheme = () => {
    SetThemeMode('dark')
  } 

  useEffect(() => {
    document.querySelector('html').classList.remove("ligth" ,"dark")

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  
  return (
    <ThemeProvider value= {{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
     </div>

    </ThemeProvider>
  )
}

export default App
