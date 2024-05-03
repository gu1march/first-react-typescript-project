import Badges from "../components/Badges.tsx";
import Subheader from "../components/Badges.tsx";
import ListGroup_P from "../components/ListGroup.tsx";
import SubHeader from "../components/Subheader.tsx";

export default function About() {
  return (
    <>
      <SubHeader page_name="ABOUT" src_img="../../imgs/backiee-263101.jpg" />

      <div className="img_h3">
        <img className="img_me" src="../imgs/about_page_knowledge3.png" />
      </div>
      <div className="p_con3">
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



      <div className="lists">
        <ListGroup_P
          heading={"Experiences"}
          items={[
            "Project Coordination",
            "Machine Integration",
            "Automation of Flows",
          ]}
          texts={[
            "In my role as Project Coordinator at Scania, I spearheaded the coordination of a pivotal Control Tower project, overseeing a budget of R$100,000 and navigating a tight 3-month deadline. This experience honed my skills in resource allocation, strategic planning, and agile project management. I adeptly developed and executed a detailed project plan, leading a cross-functional team through multiple milestones, ultimately surpassing project expectations. My journey in project coordination extends beyond a singular project, encompassing diverse initiatives that have collectively refined my abilities. Through the coordination of various projects, I've cultivated proficiency in effective communication, team collaboration, and adaptability. These experiences have equipped me with a robust skill set and a proven track record, making me well-prepared to contribute successfully to future projects and navigate the dynamic landscape of project coordination.",
            "In my daily responsibilities at Scania, a significant portion of my role centered around the integration of measurement machines from various suppliers and languages to centralize data. This task required a nuanced understanding of machine integration, as I seamlessly orchestrated the collaboration of diverse measurement systems to consolidate and streamline data. Managing this integration process enhanced my skills in troubleshooting, adapting to different languages, and fostering seamless communication between heterogeneous systems. This proficiency in machine integration extends across a spectrum of projects, where I consistently delivered successful outcomes. Coordinating these initiatives provided invaluable experience in navigating the intricacies of diverse machinery, refining my expertise in problem-solving and ensuring a cohesive integration process. Armed with this background, I am well-equipped to contribute effectively to future projects involving machine integration, leveraging my comprehensive understanding of diverse measurement systems and their integration nuances",
            "Seasoned automation specialist at Scania, proficient in designing and optimizing workflows for enhanced efficiency. Extensive experience in utilizing Python and its libraries, including pandas, numpy, py-auto-gui, and tkinter, to develop automated solutions. Collaborative team player with a keen eye for identifying process improvement opportunities. Proven track record of creating and automating both new and established workflows. Detail-oriented approach coupled with a commitment to precision and accuracy. Passionate about driving continuous improvement initiatives to maximize productivity. Strong problem-solving skills and ability to adapt to evolving challenges. Excellent communication skills, capable of effectively liaising with cross-functional teams. Dedicated to staying updated with the latest advancements in automation technology. Committed to delivering results that align with organizational goals and objectives.",
          ]}
        />

        <ListGroup_P
          heading={"Companys"}
          items={["Scania Latin America" ,"Paranoá Rubber Industry Ltd."]}
          texts={[
            "Scania, a Swedish company, is a pioneer in sustainable transportation solutions. With 128 years of history in manufacturing heavy trucks, buses, industrial engines, and marine engines, Scania is at the forefront of transforming the transport ecosystem. Collaborating with partners and clients, Scania is driving change toward a more sustainable world of mobility, benefiting businesses, society, and the environment. Their global workforce of 52,000 employees spans approximately 100 countries, and they operate production facilities across Europe, Latin America, and Asia. Notably, in 1957, Scania made the strategic decision to establish its first plant outside Sweden in Brazil. The Scania Latin America facility, situated in São Bernardo do Campo, covers an impressive area of around 400,000 square meters and is the sole plant outside the headquarters that produces the complete Scania product range.",
            "Founded in 1963 with the aim of providing top-quality rubber products for the automotive industry, we currently manufacture rubber compounds, hydraulic steering hoses, fuel hoses, cooling systems, injected components, and rubber, PU, or TPO acoustic and thermal coatings. Our facilities cover a total area of 60,000 square meters, with 35,000 square meters of constructed space. We excel in production processes and adhere to the strictest quality and safety standards demanded by the market.",
          ]}
        />
      </div>
    </>
  );
}
