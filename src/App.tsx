import { useState } from 'react'
import './App.css'
import SideBlock from './SideBlock'
import PersonalInfo from './Components/PersonalInfo'
import SelectPlan from './Components/SelectPlan'
import AddOns from './Components/AddOns'
import Summary from './Components/Summary'
import Congrats from './Congrats'

function App() {
  const [pageNumber, setPageNumber] = useState(0)

  return (
    <>
      <SideBlock></SideBlock>
      {pageNumber === 0 ? <PersonalInfo></PersonalInfo> : <></>}
      {pageNumber === 1 ? <SelectPlan></SelectPlan> : <></>}
      {pageNumber === 2 ? <AddOns></AddOns> : <></>}
      {pageNumber === 3 ? <Summary></Summary> : <></>}
      {pageNumber === 4 ? <Congrats></Congrats> : <></>}
    </>
  )
}

export default App
