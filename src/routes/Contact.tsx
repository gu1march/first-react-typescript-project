import SubHeader from "../components/Subheader";

export default function Contact() {
  return (
    <>
     {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
     <SubHeader page_name="CONTACT" src_img="../imgs/contact_img.jpg" />
     {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="contact_p">
        <p className="p_con">Reach out through one of the following channels:</p>
      </div>
       {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="contact_p">
        <img src="../imgs/telephone.png" className="contact_imgs" />
        <img src="../imgs/email.png" className="contact_imgs" />
        <img src="../imgs/network.png" className="contact_imgs" />
      </div>
      <div className="p_icons">
        <p className="p_icon" >+55 (11)97627-1154</p>
        <p className="p_icon" >guilherme.m.posse@gmail.com</p>
        <p className="p_icon" ><a href="https://www.linkedin.com/in/guilherme-marchioni-38a13a226/" >Guilherme Marchioni</a></p>
      </div>
    </>
  );
}
