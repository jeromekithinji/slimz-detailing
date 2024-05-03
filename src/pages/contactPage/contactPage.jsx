import React, { useState } from "react";
import "./contactPage.scss";
import FormField from "../../components/formField/formField";
import { MdOutlinePhoneInTalk, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
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
                        Select a service that’s right for{" "}
                        <span className="textHighlight">you</span>
                    </p>
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
