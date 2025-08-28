import type { Props } from "../interface"

function PersonalInfo({ setPageNumber }:Props) {

    return ( 
        <div className="text-start">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className="d-flex flex-column align-items-start">
                <label>Name</label>
                <input placeholder="e.g. Stephen King"></input>
            </div>

            <div className="d-flex flex-column align-items-start">
                <label>Email Address</label>
                <input placeholder="e.g. stephenking@lorem.com"></input>
            </div>

            <div className="d-flex flex-column align-items-start">
                <label>Phone Number</label>
                <input placeholder="e.g. +1 234 567 890"></input>
            </div>
        </div>
    )
}

export default PersonalInfo