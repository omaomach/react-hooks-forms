import React from "react";

function DisplayData({ firstName, lastName }) {
    return (
        <div>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
        </div>
    )
}

export default DisplayData