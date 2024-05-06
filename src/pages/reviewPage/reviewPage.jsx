import React, { useState } from "react";
import "./reviewPage.scss";
import FormField from "../../components/formField/formField";
import StatusBar from "../../components/statusBar/statusBar";


const ReviewPage = () => {
    const [displayStatus, setDisplayStatus] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        message: "",
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const formDataJSON = JSON.stringify(formData);
        console.log(formDataJSON);
        setDisplayStatus(true);

        setTimeout(() => {
            setDisplayStatus(false);
        }, 15000);
    };
    return (
        <div className="reviewPage">
            {displayStatus ? (
                <StatusBar status={"success"} message={"Message sent"} />
            ) : null}
            <p className="reviewPage-title">Share your experience</p>
            <p className="reviewPage-subHeading">Let us know how we did!</p>
            <div className="reviewPage-form">
                {/* <div className="reviewPage-form__section"> */}
                    <FormField
                        label={"Name"}
                        type={"text"}
                        placeholder={"John Doe"}
                        name={"name"}
                        onChange={handleInputChange}
                    />
                    <FormField
                        label={"Location"}
                        type={"text"}
                        placeholder={"London, UK"}
                        name={"location"}
                        onChange={handleInputChange}
                    />
                {/* </div> */}
                <FormField
                    onChange={handleInputChange}
                    label={"Service"}
                    type={"select"}
                    name={"service"}
                    selectValuesTexts={[
                        { value: "Simple", text: "Simple" },
                        { value: "Extreme", text: "Extreme" },
                    ]}
                    selectFirstOption={"Select service"}
                />
                <FormField
                    label={"Comment"}
                    type={"textarea"}
                    placeholder={""}
                    name={"Comment"}
                    onChange={handleInputChange}
                />
                <button
                    className="reviewPage-form-button"
                    onClick={handleSubmit}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ReviewPage;
