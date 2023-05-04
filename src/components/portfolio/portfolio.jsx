import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
// import IMG7 from "../../assets/portfolio7.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Class Manager uses the multi-user concept of Django where student and teacher are different types of user and have different functionalities. Also adding features like notice, messages, Assignment, adding students to the class etc. requires a lot of Django concepts. Projects like Class Manager is a great choice to practice your Django skills and test yourself.",
        github: "https://github.com/john62821/classmanager-student-teacher-portal",
        dimo: "hello world",
    },
    {
        id: 2,
        image: IMG2,
        title: "Restaurant Website using MERN Stack. I uses 1.ReactJS(Frontend) 2.Advance CSS 3.NodeJS(Backend) 4.Vercel 5.Heroku",
        github: "https://github.com/john62821/restaurant-management-system",
        dimo: "hello world",
    },
    {
        id: 3,
        image: IMG3,
        title: "Online School Management System",
        github: "https://github.com/John62821/SchoolManagementSystem-Mandakh",
        dimo: "hello world",
    },
    {
        id: 4,
        image: IMG4,
        title: "Medical Prescription Management Web Application",
        github: "https://github.com/John62821",
        dimo: "hello world",
    },
    {
        id: 5,
        image: IMG5,
        title: "TodoList App",
        github: "https://github.com/John62821/ReactNative-application",
        dimo: "hello world",
    },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: "Crypto Currency Dashbord & Financial Visualization",
    //     github: "https://github.com/John",
    //     dimo: "hello world",
    // },
];
const portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Porfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, github, title }) => {
                    return (
                        <article className="portfolio__item">
                            <div>
                                <img
                                    src={image}
                                    alt=""
                                    className="portfolio__item-image"
                                />
                            </div>
                            <h3>{title}</h3>
                            <a href={github} className="btn" target="_blank">
                                Github
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default portfolio;
