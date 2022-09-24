import React from "react";

function DisplayData({ firstName, lastName, admin }) {
    return (
        <div>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <h2>{admin}</h2>
        </div>
    )
}

export default DisplayData