import type { AddOn, Plan, FormData } from '../interface'

interface Props {
    data: FormData;
    allAddOns: AddOn[];
    allPlans: Plan[];
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

function Summary({data, allPlans, allAddOns, setPageNumber}:Props) {
    const timePeriod = data.selectedTime === true ? "mo":"yr"
    let totalPrice = 0

    for (let i of data.selectedAddOns) {
        if (data.selectedTime === true) {
            totalPrice += allAddOns[i].monthlyPayment
        } else {
            totalPrice += allAddOns[i].yearlyPayment
        }
    }

    if (data.selectedTime === true) {
        totalPrice += allPlans[data.selectedPlan-1].monthlyPayment
    } else {
        totalPrice += allPlans[data.selectedPlan-1].yearlyPayment
    }

    return (
        <div className="text-start">
            <h1>Finishing up</h1>
            <p className='p-description'>Double-check everything looks OK before confirming.</p>

            <div>
                <div className="div-expenses" style={{paddingBottom: data.selectedAddOns.length > 0 ? "0px":"20px"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className='m-0'>{allPlans[data.selectedPlan-1].name} ({data.selectedTime === true ? "Monthly" : "Yearly"})</p>
                            <p className="p-headline text-decoration-underline m-0" style={{cursor: "pointer"}} onClick={() => setPageNumber(1)}>Change</p>
                        </div>
                        <p className='fw-bold m-0 p-price'>${data.selectedTime === true ? allPlans[data.selectedPlan-1].monthlyPayment : allPlans[data.selectedPlan-1].yearlyPayment}/{timePeriod}</p>
                    </div>

                    {data.selectedAddOns.length > 0 ? <hr></hr> : <></>}

                    {data.selectedAddOns.map(el => (
                        <div className="d-flex justify-content-between">
                            <p className="p-headline">{allAddOns[el].name}</p>
                            <p className='p-price'>+${data.selectedTime === true ? allAddOns[el].monthlyPayment : allAddOns[el].yearlyPayment}/{timePeriod}</p>
                        </div>
                    ))}
                </div>

                <div className="div-total d-flex justify-content-between align-items-center mt-3">
                    <p className="p-headline m-0">Total (per {data.selectedTime === true ? "month":"year"})</p>
                    <h3 className='m-0 h3-total-price fw-bold'>+${totalPrice}/{timePeriod}</h3>
                </div>
            </div>
        </div>
    )
}

export default Summary