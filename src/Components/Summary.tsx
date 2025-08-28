import type { Props } from "../interface"

function Summary({data, setData}:Props) {

    return (
        <div className="text-start">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            <div>
                <div className="div-expenses">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>{}({data.selectedTime === true ? "Monthly" : "Yearly"})</p>
                            <p className="p-headline text-decoration-underline">Change</p>
                        </div>
                        <p></p>
                    </div>

                    <hr></hr>

                    <div className="d-flex justify-content-between">
                        <p className="p-headline">Online service</p>
                        <p></p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p className="p-headline m-0">Larger storage</p>
                        <p></p>
                    </div>
                </div>

                <div>
                    <h2>Total (per month/year)</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Summary