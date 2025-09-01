import type { Props } from '../interface'

function AddOns({data, setData}:Props) {

    return (
        <div className="text-start">
            <h1>Pick add-ons</h1>
            <p className='p-description'>Add-ons help enhance your gaming experience.</p>
            
            <div>
                <div className={`div-addon ${data.selectedAddOns.includes(0)? "active" : ""} d-flex align-items-center justify-content-between`} onClick={() => setData(prev => ({
                    ...prev,
                    selectedAddOns: prev.selectedAddOns.includes(0) ? prev.selectedAddOns.filter(item => item != 0) : [...prev.selectedAddOns, 0],
                }))}>
                    <div className="d-flex align-items-center gap-4">
                        <input className="form-check-input" type="checkbox" checked={data.selectedAddOns.includes(0)} id="checkDefault"></input>
                        <div>
                            <h2>Online service</h2>
                            <p className="p-addon-description">Access to multiplayer games</p>
                        </div>
                    </div>
                    {data.selectedTime === true ? <p className="p-plus-money">+$1/mo</p> : <p className="p-plus-money">+$10/yr</p>}
                </div>

                <div className={`div-addon ${data.selectedAddOns.includes(1)? "active" : ""} d-flex align-items-center justify-content-between`} onClick={() => setData(prev => ({
                    ...prev,
                    selectedAddOns: prev.selectedAddOns.includes(1) ? prev.selectedAddOns.filter(item => item != 1) : [...prev.selectedAddOns, 1],
                }))}>
                    <div className="d-flex align-items-center gap-4">
                        <input className="form-check-input" type="checkbox" checked={data.selectedAddOns.includes(1)} id="checkDefault"></input>
                        <div>
                            <h2>Larger storage</h2>
                            <p className="p-addon-description">Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    {data.selectedTime === true ? <p className="p-plus-money">+$2/mo</p> : <p className="p-plus-money">+$20/yr</p>}
                </div>
                
                <div className={`div-addon ${data.selectedAddOns.includes(2)? "active" : ""} d-flex align-items-center justify-content-between m-0`} onClick={() => setData(prev => ({
                    ...prev,
                    selectedAddOns: prev.selectedAddOns.includes(2) ? prev.selectedAddOns.filter(item => item != 2) : [...prev.selectedAddOns, 2],
                }))}>
                    <div className="d-flex align-items-center gap-4">
                        <input className="form-check-input" type="checkbox" checked={data.selectedAddOns.includes(2)} id="checkDefault"></input>
                        <div>
                            <h2>Customizable Profile</h2>
                            <p className="p-addon-description">Custom theme on your profile</p>
                        </div>
                    </div>
                    {data.selectedTime === true ? <p className="p-plus-money">+$2/mo</p> : <p className="p-plus-money">+$20/yr</p>}
                </div>
            </div>
        </div>
    )
}

export default AddOns