import React, { useState, useRef, useEffect } from "react";
import "./reviewModal.scss";
import FormField from "../formField/formField";
import StatusBar from "../statusBar/statusBar";

const ReviewModal = ({ isActive, onClose }) => {
    const [displayStatus, setDisplayStatus] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

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
            // Close the modal after submission
            onClose();
        }, 5000);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        if (isActive) {
            body.classList.add("modal-open");
        } else {
            body.classList.remove("modal-open");
        }
        return () => {
            body.classList.remove("modal-open");
        };
    }, [isActive]);

    return (
        <div className={`reviewModal ${isActive ? 'active' : ''}`} ref={modalRef}>
            <div className="reviewModal__header">
                <p className="reviewModal__header-top">Review</p>
                <p className="reviewModal__header-title">
                    Share your experience
                </p>
                <p className="reviewModal__header-subtitle">
                    Let us know how we did!
                </p>
            </div>
            {displayStatus ? (
                <StatusBar status={"success"} message={"Review sent"} />
            ) : null}
            <div className="reviewModal__form">
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
                    className="reviewModal__form-button"
                    onClick={handleSubmit}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ReviewModal;
