import type { FormData } from '../interface'

interface Props {
    data: FormData;
    setData: React.Dispatch<React.SetStateAction<FormData>>;
    setClassStatesPlan: React.Dispatch<React.SetStateAction<string>>;
    classStatePlan: string;
}

function SelectPlan({data, setData, classStatePlan, setClassStatesPlan}:Props) {

    return (
        <div className="text-start">
            <h1>Select your plan</h1>
            <p className='p-description'>You have the option of monthly or yearly billing.</p>

            <div className="row d-block d-md-flex gap-3">
                <div className={`col-4 d-flex d-md-block gap-3 mb-2 ${data.selectedPlan === 1 ? "active" : ""} ${classStatePlan}`} onClick={() => {setClassStatesPlan(""); setData(prev => ({
                    ...prev,
                    selectedPlan: 1
                }))}}>
                    <img src="assets/images/icon-arcade.svg"></img>
                    <div>
                        <h2>Arcade</h2>
                        <p className='p-info'>${data.selectedTime === true? "9/mo" : "90/yr"}</p>
                        {data.selectedTime === false? <p className="p-note">2 months free</p>: <></>}
                    </div>
                </div>
                
                <div className={`col-4 d-flex d-md-block gap-3 mb-2 ${data.selectedPlan === 2 ? "active" : ""} ${classStatePlan}`} onClick={() => {setClassStatesPlan(""); setData(prev => ({
                    ...prev,
                    selectedPlan: 2
                }))}}>
                    <img src="assets/images/icon-advanced.svg"></img>
                    <div>
                        <h2>Advanced</h2>
                        <p className='p-info'>${data.selectedTime === true? "12/mo" : "120/yr"}</p>
                        {data.selectedTime === false? <p className="p-note">2 months free</p>: <></>}
                    </div>
                </div>
                
                <div className={`col-4 d-flex d-md-block gap-3 ${data.selectedPlan === 3 ? "active" : ""} ${classStatePlan}`} onClick={() => {setClassStatesPlan(""); setData(prev => ({
                    ...prev,
                    selectedPlan: 3
                }))}}>
                    <img src="assets/images/icon-pro.svg"></img>
                    <div>
                        <h2>Pro</h2>
                        <p className='p-info'>${data.selectedTime === true? "15/mo" : "150/yr"}</p>
                        {data.selectedTime === false? <p className="p-note">2 months free</p>: <></>}
                    </div>
                </div>
            </div>

            {classStatePlan !== "" ? <p className='p-warning mb-0'>Select any plan</p> : <></>}

            <div className="div-time-period d-flex gap-3 align-items-center mt-4">
                <label className={`form-check-label ${data.selectedTime === true? "active": ""}`} htmlFor="switchCheckDefault">Monthly</label>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={() => setData(prev => ({
                        ...prev,
                        selectedTime: !prev.selectedTime
                    }))} checked={!data.selectedTime}></input>
                </div>
                <label className={`form-check-label ${data.selectedTime === false? "active": ""}`} htmlFor="switchCheckDefault">Yearly</label>
            </div>
        </div>
    )
}

export default SelectPlan