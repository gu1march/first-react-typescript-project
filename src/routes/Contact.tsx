import Paragraph from "../components/Paragraph";
import SubHeader from "../components/Subheader";

export default function Contact() {
  return (
    <>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <SubHeader page_name="CONTACT" src_img="../../imgs/backiee-263101.jpg" />
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <Paragraph text="" />
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="tet">
        <div className="sma">
          <Paragraph text="If you have any questions, need further information, or are interested, just get in touch through one of the following channels." />
        </div>
        <div className="contact_p">
          <img src="../imgs/telephone.png" className="contact_imgs" />
          <img src="../imgs/email.png" className="contact_imgs" />
        </div>
        <div className="p_icons">
          <p className="p_icon">+55 (11)97627-1154</p>
          <p className="p_icon">guilherme.m.posse@gmail.com</p>
        </div>
        <div className="p_con">
          <p>
            Hey there, I'm Guilherme, a Junior Front-End Developer passionate
            about bringing digital ideas to life through captivating user
            experiences. Here in my portfolio, I'm excited to share with you the
            projects and designs that reflect my journey and expertise in web
            development. With a knack for blending design aesthetics with
            technical functionality, I thrive on creating seamless,
            user-friendly interfaces that leave a lasting impression. From
            responsive layouts to interactive elements, each project showcases
            my dedication to craftsmanship and attention to detail. Driven by a
            curiosity to explore new technologies and a commitment to continuous
            improvement, I'm always seeking to expand my skill set and push the
            boundaries of what's possible in web development. Whether you're
            here to explore my work, discuss collaboration opportunities, or
            simply chat about the latest trends in front-end development, I'm
            thrilled to have you along for the ride. Thanks for stopping by my
            Portfolio. Let's build something extraordinary together!
          </p>
        </div>
      </div>
    </>
  );
}
