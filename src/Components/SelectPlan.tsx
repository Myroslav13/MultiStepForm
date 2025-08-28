import type { Props } from "../interface"

function SelectPlan({ setPageNumber }:Props) {
    return (
        <div>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <label>Arcade</label>
            $9/mo

            Advanced
            $12/mo

            Pro
            $15/mo

            Monthly
            Yearly

            Go Back
            Next Step
        </div>
    )
}

export default SelectPlan