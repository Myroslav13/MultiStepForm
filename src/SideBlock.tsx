interface Props {
    pageNumber: number;
}

function SideBlock({pageNumber}: Props) {

    return (
        <div className="div-side-block d-flex flex-column gap-3 rounded-3 text-white pt-4 ps-4">
            <div className="d-flex align-items-center gap-3">
                <p className={`div-circle ${pageNumber === 0? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                    1
                </p>
                <div className="d-flex flex-column align-items-start text-uppercase">
                    <h2>Step 1</h2>
                    <h1>Your info</h1>
                </div>
            </div>

            <div className="d-flex align-items-center gap-3">
                <p className={`div-circle ${pageNumber === 1? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                    2
                </p>
                <div className="d-flex flex-column align-items-start text-uppercase">
                    <h2>Step 2</h2>
                    <h1>Select plan</h1>
                </div>
            </div>

            <div className="d-flex align-items-center gap-3">
                <p className={`div-circle ${pageNumber === 2? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                    3
                </p>
                <div className="d-flex flex-column align-items-start text-uppercase">
                    <h2>Step 3</h2>
                    <h1>Add-ons</h1>
                </div>
            </div>

            <div className="d-flex align-items-center gap-3">
                <p className={`div-circle ${pageNumber === 3? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                    4
                </p>
                <div className="d-flex flex-column align-items-start text-uppercase">
                    <h2>Step 4</h2>
                    <h1>Summary</h1>
                </div>
            </div>
        </div>
    )
}

export default SideBlock