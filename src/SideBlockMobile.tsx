interface Props {
    pageNumber: number;
    windowWidth: number;
}

function SideBlockMobile({pageNumber, windowWidth}: Props) {

    return (
        <>
            { windowWidth > 250 ?
                <div className="d-flex justify-content-center align-items-center">
                    <div className="div-upper-block position-absolute top-0 d-flex justify-content-center pt-5 gap-2 d-sm-none">
                        <p className={`div-circle ${pageNumber === 0? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                            1
                        </p>

                        <p className={`div-circle ${pageNumber === 1? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                            2
                        </p>

                        <p className={`div-circle ${pageNumber === 2? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                            3
                        </p>

                        <p className={`div-circle ${(pageNumber === 3 || pageNumber === 4)? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                            4
                        </p>
                    </div>
                </div>
            :
                <div className="div-upper-block position-absolute top-0 d-flex justify-content-center pt-5 gap-2 d-sm-none">
                    <p className={`div-circle ${pageNumber === 0? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                        1
                    </p>

                    <p className={`div-circle ${pageNumber === 1? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                        2
                    </p>

                    <p className={`div-circle ${pageNumber === 2? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                        3
                    </p>

                    <p className={`div-circle ${(pageNumber === 3 || pageNumber === 4)? "active": ""} m-0 rounded-circle border d-flex justify-content-center align-items-center`}>
                        4
                    </p>
                </div>
            }
        </>
    )
}

export default SideBlockMobile