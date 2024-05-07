import React, { useState } from "react";
import "./reviewButton.scss";
import { MdOutlineReviews } from "react-icons/md";
import ReviewModal from "../reviewModal/reviewModal";

const ReviewButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="reviewButton">
            <div className="reviewButton__button" onClick={openModal}>
                <MdOutlineReviews className="reviewButton__button-icon" />
            </div>
            <ReviewModal isActive={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default ReviewButton;
