import React from "react";
import "./formField.scss";

const FormField = ({
    type,
    label,
    value,
    placeholder,
    name,
    selectValuesTexts,
    onChange,
    selectFirstOption,
}) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    const inputs = () => {
        if (type === "select") {
            return (
                <>
                    <select
                        className="formfield__select"
                        name={name}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled selected>
                            {selectFirstOption}
                        </option>
                        {selectValuesTexts?.map((valueText) => {
                            return (
                                <option value={valueText.value}>
                                    {valueText.text}
                                </option>
                            );
                        })}
                    </select>
                </>
            );
        }
        if (type === "textarea") {
            return (
                <>
                    <textarea
                        onChange={handleInputChange}
                        className="formfield__textarea"
                        name={name}
                    ></textarea>
                </>
            );
        } else {
            return (
                <>
                    <input
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        className="formfield__input"
                        type={type}
                        value={value}
                        name={name}
                    />
                </>
            );
        }
    };

    return (
        <div className="formfield">
            <label className="formfield__label">{label}</label>
            {inputs()}
        </div>
    );
};

export default FormField;
