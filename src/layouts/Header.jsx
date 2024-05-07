import React from "react";

const Header = (header) => {
    return (
        <>
            <div className="section-header text-center p-3">
                <h6 className="monospace text-lighter">{header.six}</h6>
                <h1 className="display-5" style={{ fontFamily: 'Amatic SC, sans-serif' }}>{header.one}{header.two}{header.three}</h1>
            </div>
        </>
    )
}
export default Header