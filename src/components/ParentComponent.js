import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        admin: false
    })

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        if (event.target.type === "checkbox") {
            value = event.target.checked
        }

        setFormData({
            ...formData,
            [name]: value
        })

    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    // function handleFirstName(event) {
    //     setFormData({
    //         ...formData,
    //         firstName: event.target.value
    //     })
    // }

    // function handleLastName(event) {
    //     setFormData({
    //         ...formData,
    //         lastName: event.target.value
    //     })
    // }


    return (
        <>
            <Form 
            firstName={formData.firstName}
            lastName={formData.lastName}
            admin={formData.admin}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            // handleLastName={handleLastName}
            />
            <DisplayData firstName={formData.firstName} lastName={formData.lastName} admin={formData.admin}/>
        </>
    )

}

export default ParentComponent