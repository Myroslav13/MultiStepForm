import type { Props } from '../interface'

function PersonalInfo({data, setData}:Props) {

    return ( 
        <div className="text-start">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className="d-flex flex-column align-items-start">
                <label>Name</label>
                <input type="text" placeholder="e.g. Stephen King" onChange={e => setData(prev => ({
                    ...prev,
                    personalInfo: {...prev.personalInfo, name: e.target.value}
                }))} value={data.personalInfo.name}></input>
            </div>

            <div className="d-flex flex-column align-items-start">
                <label>Email Address</label>
                <input type="text" placeholder="e.g. stephenking@lorem.com" onChange={e => setData(prev => ({
                    ...prev, 
                    personalInfo: {...prev.personalInfo, email: e.target.value}
                }))} value={data.personalInfo.email}></input>
            </div>

            <div className="d-flex flex-column align-items-start">
                <label>Phone Number</label>
                <input type="text" placeholder="e.g. +1 234 567 890" onChange={e => setData(prev => ({
                    ...prev,
                    personalInfo: {...prev.personalInfo, phone: e.target.value}
                }))} value={data.personalInfo.phone}></input>
            </div>
        </div>
    )
}

export default PersonalInfo