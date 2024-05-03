import Paragraph from "../components/Paragraph";
import SubHeader from "../components/Subheader";
import { useState } from "react";

export default function Root() {
  const title = "Front-End Developer";
  const a = "About";
  const a_link = "/About";
  const atributes = [
    "A dynamic Junior Front-End Developer with a passion for crafting immersive digital experiences.",
    "He thrives in collaborative environments, seamlessly integrating feedback to deliver polished and user-friendly interfaces.",
    "With a hunger for learning and a drive for excellence, he is poised to make a significant impact in the world of web development.",
    "His proficiency in HTML, CSS, and TypeScript, coupled with a solid understanding of frameworks like React and Vue.js, enables him to turn creative concepts into reality.",
    "What truly sets him apart is his collaborative spirit and problem-solving mindset. Whether working in a team or independently, he approaches every project with enthusiasm and a can-do attitude.",
    "As a Junior Front-End Developer, he is not just building websites; he’s creating engaging digital experiences that connect and resonate with users worldwide.",
    "His approach to web development is not only about creating visually appealing and functional websites but also about fostering a positive work environment.",
    "His ability to communicate effectively, collaborate with peers, and adapt to new challenges makes him a valuable asset to any team.",
    "He is not just building websites; he’s building relationships and experiences that leave a lasting impact.",
  ];
  const imgs = [
    "../../imgs/cards/1.jpg",
    "../../imgs/cards/2.png",
    "../../imgs/cards/3.png",
    "../../imgs/cards/4.png",
    "../../imgs/cards/5.png",
    "../../imgs/cards/6.png",
    "../../imgs/cards/7.png",
    "../../imgs/cards/8.png",
    "../../imgs/cards/9.png",
  ];

  return (
    <>
      <SubHeader page_name="HOME" src_img="../../imgs/backiee-263101.jpg" />

      <Paragraph text="Take a look at the catalog of available front-end devs:" />

      <div className="home_card">
        {atributes.map((item, index) => (
          <div className="card">
            <img src={imgs[index]} className="card_imgs" />
            <div className="card-body middle">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{atributes[index]}</p>
              <div className="middle">
                <a href={a_link} className="btn btn-primary middle2">
                  {a}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
