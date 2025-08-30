import type { FormData } from '../interface'

interface Props {
  data: FormData;
  classStates: string[];
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}

function PersonalInfo({data, setData, classStates}:Props) {
    console.log(classStates)
    return ( 
        <div className="text-start">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className={`d-flex flex-column align-items-start`}>
                <label className={`${classStates[0]}`}>Name</label>
                <input className={`${classStates[0]}`} type="text" placeholder="e.g. Stephen King" onChange={e => setData(prev => ({
                    ...prev,
                    personalInfo: {...prev.personalInfo, name: e.target.value}
                }))} value={data.personalInfo.name} style={{marginBottom: classStates[0] === ""? "15px":"0px"}}></input>
                {!(classStates[0] === "") ? <p className='p-warning'>Fill this input</p> : <></>}
            </div>

            <div className={`d-flex flex-column align-items-start ${classStates[1]}`}>
                <label className={`${classStates[1]}`}>Email Address</label>
                <input className={`${classStates[1]}`} type="text" placeholder="e.g. stephenking@lorem.com" onChange={e => setData(prev => ({
                    ...prev, 
                    personalInfo: {...prev.personalInfo, email: e.target.value}
                }))} value={data.personalInfo.email} style={{marginBottom: classStates[1] === ""? "15px":"0px"}}></input>
                {!(classStates[1] === "") ? <p className='p-warning'>Fill this input</p> : <></>}
            </div>

            <div className={`d-flex flex-column align-items-start ${classStates[2]}`}>
                <label className={`${classStates[2]}`}>Phone Number</label>
                <input className={`${classStates[2]}`} type="text" placeholder="e.g. +1 234 567 890" onChange={e => setData(prev => ({
                    ...prev,
                    personalInfo: {...prev.personalInfo, phone: e.target.value}
                }))} value={data.personalInfo.phone} style={{marginBottom: classStates[2] === ""? "15px":"0px"}}></input>
                {!(classStates[2] === "") ? <p className='p-warning'>Fill this input</p> : <></>}
            </div>
        </div>
    )
}

export default PersonalInfo