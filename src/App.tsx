import { useState } from 'react'
import './App.css'
import SideBlock from './SideBlock'
import PersonalInfo from './Components/PersonalInfo'
import SelectPlan from './Components/SelectPlan'
import AddOns from './Components/AddOns'
import Summary from './Components/Summary'
import Congrats from './Congrats'
import type { AddOn, Plan, FormData } from './interface'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [classStates, setClassStates] = useState<string[]>(["", "", ""])
  const [classStatePlan, setClassStatesPlan] = useState<string>("")

  const allPlans: Plan[] = [
    {name: "Arcade", monthlyPayment: 9, yearlyPayment: 90}, 
    {name: "Advanced", monthlyPayment: 12, yearlyPayment: 120},
    {name: "Pro", monthlyPayment: 15, yearlyPayment: 150},
  ]

  const allAddOns: AddOn[] = [
    {name: "Online Service", monthlyPayment: 1, yearlyPayment: 10}, 
    {name: "Larger Storage", monthlyPayment: 2, yearlyPayment: 20},
    {name: "Customizable profile", monthlyPayment: 2, yearlyPayment: 20},
  ]

  const [data, setData] = useState<FormData>({
    personalInfo: { name: "", email: "", phone: "" },
    selectedPlan: 0,
    selectedTime: true,
    selectedAddOns: []
  })

  // Data check
  function checkData(pageNum:number) {
    let isBlank = false
    const newClassStates = ["", "", ""]
    
    if (pageNum === 0) {
      if (data.personalInfo.name === "") {
        newClassStates[0] = "not-filled"
        isBlank = true
      }
      if (data.personalInfo.email === "") {
        newClassStates[1] = "not-filled"
        isBlank = true
      }
      if (data.personalInfo.phone === "") {
        newClassStates[2] = "not-filled"
        isBlank = true
      }

      setClassStates(newClassStates)
    } else if (pageNum === 1) {
      if (data.selectedPlan === 0) {
        isBlank = true
        setClassStatesPlan("not-selected")
      }
    }
    
    return isBlank
  }

  return (
    <div className='div-main-block d-flex rounded-3 p-3'>
      <SideBlock pageNumber={pageNumber}></SideBlock>
      <div className="div-main-form position-relative">
        {pageNumber === 0 ? <PersonalInfo data={data} setData={setData} classStates={classStates}></PersonalInfo> : <></>}
        {pageNumber === 1 ? <SelectPlan data={data} setData={setData} classStatePlan={classStatePlan} setClassStatesPlan={setClassStatesPlan}></SelectPlan> : <></>}
        {pageNumber === 2 ? <AddOns data={data} setData={setData}></AddOns> : <></>}
        {pageNumber === 3 ? <Summary data={data} allPlans={allPlans} allAddOns={allAddOns} setPageNumber={setPageNumber}></Summary> : <></>}
        {pageNumber === 4 ? <Congrats></Congrats> : <></>}

        <div>
          {(pageNumber > 0 && pageNumber !== 4) ? <button className="btn-back" onClick={() => setPageNumber(prev => (prev - 1))}>Go Back</button>: <></>}
          {pageNumber < 4 ? <button className={`${pageNumber === 3 ? "btn-confirm":"btn-next"}`} onClick={() => {!checkData(pageNumber) ? setPageNumber(prev => (prev + 1)) : null}}>{pageNumber === 3 ? "Confirm":"Next Step"}</button>: <></>}
        </div>
      </div>
    </div>
  )
}

export default App
