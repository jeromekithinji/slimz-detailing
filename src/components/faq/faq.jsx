import React, { useState } from "react";
import "./faq.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="faq">
            <div className="faq__question" onClick={toggleAnswer}>
                <p className="faq__question-text">
                    Do I need to provide parking?
                </p>
                {showAnswer ? (
                    <MdKeyboardArrowUp className="faq__question-icon" />
                ) : (
                    <MdKeyboardArrowDown className="faq__question-icon" />
                )}
            </div>
            {showAnswer && (
                <div className="faq__answer">
                    <p className="faq__answer-text">
                        Although this is a mobile car cleaning service, for the
                        valet to take place the agent will require parking next
                        to your vehicle or in close proximity to it. As it is a
                        fully mobile service, this does not have to be on a
                        driveway at your home, but can also be carried out on a
                        public road as long as parking is available.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Faq;
