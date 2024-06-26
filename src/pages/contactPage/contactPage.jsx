import React, { useState } from "react";
import "./contactPage.scss";
import FormField from "../../components/formField/formField";
import { MdOutlinePhoneInTalk, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import StatusBar from "../../components/statusBar/statusBar";

const ContactPage = () => {
    const [displayStatus, setDisplayStatus] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
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
        <div className="contactPage">
            <p className="contactPage-title">Get in touch</p>
            <div className="contactPage__container">
                <div className="contactPage__container__left">
                    <p className="contactPage__container__left-subHeading">
                        Call, send a Whatsapp message or DM us on instagram
                    </p>
                    <div className="contactPage__container__left-socials">
                        <div className="contactPage__container__left-socials-social social-phone">
                            <MdOutlinePhoneInTalk className="contactPage__container__left-socials-icon" />
                        </div>
                        <div className="contactPage__container__left-socials-social social-whatsapp">
                            <MdOutlineWhatsapp className="contactPage__container__left-socials-icon" />
                        </div>
                        <div className="contactPage__container__left-socials-social social-insta">
                            <FaInstagram className="contactPage__container__left-socials-icon rotate" />
                        </div>
                    </div>
                </div>
                
                <div class="contact-break">
                    <div class="contact-break-1"></div>
                    <h6>OR</h6>
                    <div class="contact-break-1"></div>
                </div>

                <div className="contactPage__container__right">
                    <p className="contactPage__container__right-subHeading">
                        Send an{" "}
                        <span className="textHighlight">inquiry</span>
                    </p>
                    {displayStatus ? <StatusBar status={"success"} message={"Message sent"}/> : null}
                    <div className="contactPage__container__right-form">
                        <FormField
                            label={"Name"}
                            type={"text"}
                            placeholder={"John Doe"}
                            name={"name"}
                            onChange={handleInputChange}
                        />
                        <FormField
                            label={"Email"}
                            type={"email"}
                            placeholder={"johndoe@gmail.com"}
                            name={"email"}
                            onChange={handleInputChange}
                        />
                        <FormField
                            label={"Phone number"}
                            type={"text"}
                            placeholder={"07000000000"}
                            name={"phoneNumber"}
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
                            label={"Message"}
                            type={"textarea"}
                            placeholder={""}
                            name={"message"}
                            onChange={handleInputChange}
                        />
                        <button
                            className="contactPage__container__right-form-button"
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
