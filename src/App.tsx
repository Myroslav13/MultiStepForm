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
    <div className='div-main-block d-flex rounded-3 p-3'>
      <SideBlock pageNumber={pageNumber}></SideBlock>
      <div className="div-main-form position-relative">
        {pageNumber === 0 ? <PersonalInfo setPageNumber={setPageNumber}></PersonalInfo> : <></>}
        {pageNumber === 1 ? <SelectPlan setPageNumber={setPageNumber}></SelectPlan> : <></>}
        {pageNumber === 2 ? <AddOns setPageNumber={setPageNumber}></AddOns> : <></>}
        {pageNumber === 3 ? <Summary setPageNumber={setPageNumber}></Summary> : <></>}
        {pageNumber === 4 ? <Congrats></Congrats> : <></>}
      
        {pageNumber < 4 ? <button onClick={() => setPageNumber(prev => (prev + 1))}>Next Step</button>: <></>}
      </div>
    </div>
  )
}

export default App
