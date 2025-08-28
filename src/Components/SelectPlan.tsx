import type { Props } from '../interface'

function SelectPlan({data, setData}:Props) {

    return (
        <div className="text-start">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="row gap-3 mt-4">
                <div className={`col-4 ${data.selectedPlan === 1? "active" : ""}`} onClick={() => setData(prev => ({
                    ...prev,
                    selectedPlan: 1
                }))}>
                    <img src="assets/images/icon-arcade.svg"></img>
                    <div>
                        <h2>Arcade</h2>
                        {data.selectedTime === true? <p>$9/mo</p>: <p>$90/yr</p>}
                        {data.selectedTime === false? <p className="p-note">2 months free</p>: <></>}
                    </div>
                </div>
                
                <div className={`col-4 ${data.selectedPlan === 2? "active" : ""}`} onClick={() => setData(prev => ({
                    ...prev,
                    selectedPlan: 2
                }))}>
                    <img src="assets/images/icon-advanced.svg"></img>
                    <div>
                        <h2>Advanced</h2>
                        {data.selectedTime === true? <p>$12/mo</p>: <p>$120/yr</p>}
                        {data.selectedTime === false? <p className="p-note">2 months free</p>: <></>}
                    </div>
                </div>
                
                <div className={`col-4 ${data.selectedPlan === 3? "active" : ""}`} onClick={() => setData(prev => ({
                    ...prev,
                    selectedPlan: 3
                }))}>
                    <img src="assets/images/icon-pro.svg"></img>
                    <div>
                        <h2>Pro</h2>
                        {data.selectedTime === true? <p>$15/mo</p>: <p>$150/yr</p>}
                        {data.selectedTime === false? <p className="p-note">2 months free</p>: <></>}
                    </div>
                </div>
            </div>

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