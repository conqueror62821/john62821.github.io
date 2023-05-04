import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const headerSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/David-John-946576180/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/John" target="_blank">
                <FaGithub />
            </a>
            {/* <a href="https://linkedin.com" target="_blank">
                <FiDribbble />
            </a> */}
        </div>
    );
};

export default headerSocials;
/*
 *@documentaion
 *
 * @arguments
 */
