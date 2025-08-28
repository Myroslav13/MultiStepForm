import { useState } from 'react'
import './App.css'
import SideBlock from './SideBlock'
import PersonalInfo from './Components/PersonalInfo'
import SelectPlan from './Components/SelectPlan'
import AddOns from './Components/AddOns'
import Summary from './Components/Summary'
import Congrats from './Congrats'
import type { FormData } from './interface'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [data, setData] = useState<FormData>({
    personalInfo: { name: "", email: "", phone: "" },
    selectedPlan: 0,
    selectedTime: true,
    selectedAddOns: []
  });

  return (
    <div className='div-main-block d-flex rounded-3 p-3'>
      <SideBlock pageNumber={pageNumber}></SideBlock>
      <div className="div-main-form position-relative">
        {pageNumber === 0 ? <PersonalInfo data={data} setData={setData}></PersonalInfo> : <></>}
        {pageNumber === 1 ? <SelectPlan data={data} setData={setData}></SelectPlan> : <></>}
        {pageNumber === 2 ? <AddOns data={data} setData={setData}></AddOns> : <></>}
        {pageNumber === 3 ? <Summary></Summary> : <></>}
        {pageNumber === 4 ? <Congrats></Congrats> : <></>}

        <div>
          {pageNumber > 0 ? <button className="btn-back" onClick={() => setPageNumber(prev => (prev - 1))}>Go Back</button>: <></>}
          {pageNumber < 4 ? <button className="btn-next" onClick={() => setPageNumber(prev => (prev + 1))}>{pageNumber === 3 ? "Confirm":"Next Step"}</button>: <></>}
        </div>
      </div>
    </div>
  )
}

export default App
