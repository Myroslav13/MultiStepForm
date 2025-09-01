import { useEffect, useState } from 'react'
import './App.css'
import PersonalInfo from './Components/PersonalInfo'
import SelectPlan from './Components/SelectPlan'
import AddOns from './Components/AddOns'
import Summary from './Components/Summary'
import Congrats from './Congrats'
import type { AddOn, Plan, FormData } from './interface'
import SideBlockMobile from './SideBlockMobile'
import SideBlockDesktop from './SideBlockDesktop'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [classStates, setClassStates] = useState<string[]>(["", "", ""])
  const [classStatePlan, setClassStatesPlan] = useState<string>("")
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

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

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
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
    <>
      {windowWidth < 576 ? <SideBlockMobile pageNumber={pageNumber} windowWidth={windowWidth}></SideBlockMobile> : <></>}
      
      <div className='div-main-block d-flex rounded-3 p-0 p-sm-3 pe-0 position-relative'>
        {windowWidth >= 576 ? <SideBlockDesktop pageNumber={pageNumber}></SideBlockDesktop> : <></>}
        <div className="div-main-form position-relative">
          {pageNumber === 0 ? <PersonalInfo data={data} setData={setData} classStates={classStates}></PersonalInfo> : <></>}
          {pageNumber === 1 ? <SelectPlan data={data} setData={setData} classStatePlan={classStatePlan} setClassStatesPlan={setClassStatesPlan}></SelectPlan> : <></>}
          {pageNumber === 2 ? <AddOns data={data} setData={setData}></AddOns> : <></>}
          {pageNumber === 3 ? <Summary data={data} allPlans={allPlans} allAddOns={allAddOns} setPageNumber={setPageNumber}></Summary> : <></>}
          {pageNumber === 4 ? <Congrats></Congrats> : <></>}

          <div className='d-none d-sm-block'>
            {(pageNumber > 0 && pageNumber !== 4) ? <button className="btn-back" onClick={() => setPageNumber(prev => (prev - 1))}>Go Back</button>: <></>}
            {pageNumber < 4 ? <button className={`${pageNumber === 3 ? "btn-confirm":"btn-next"}`} onClick={() => {!checkData(pageNumber) ? setPageNumber(prev => (prev + 1)) : null}}>{pageNumber === 3 ? "Confirm":"Next Step"}</button>: <></>}
          </div>
        </div>
      </div>

      {pageNumber !== 4 ? 
        <div className='div-lower-block d-block d-sm-none'>
          {(pageNumber > 0 && pageNumber !== 4) ? <button className="btn-back" onClick={() => setPageNumber(prev => (prev - 1))}>Go Back</button>: <></>}
          {pageNumber < 4 ? <button className={`${pageNumber === 3 ? "btn-confirm":"btn-next"}`} onClick={() => {!checkData(pageNumber) ? setPageNumber(prev => (prev + 1)) : null}}>{pageNumber === 3 ? "Confirm":"Next Step"}</button>: <></>}
        </div>
        : 
        <></>
      }
    </>
  )
}

export default App
