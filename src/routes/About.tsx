import Subheader from "../components/Badges.tsx";
import ListGroup_P from "../components/ListGroup.tsx";
import Carousel from "../components/Carousel.tsx";

export default function About() {
  return (
    <>
      <Subheader
        name_app={["HTML", "JavaScript", "TypeScript", "Python"]}
        path_img={[
          "../imgs/html.png",
          "../imgs/js.png",
          "../imgs/ts.jpg",
          "../imgs/python.png",
        ]}
      />

      <Carousel path_img={["../imgs/carousel1.jpeg", "../imgs/carousel1.jpeg", "../imgs/carousel1.jpeg"]} text="About" />

      <ListGroup_P
        heading={"Experiences"}
        items={[
          "Project Coordination",
          "Machine Integration",
          "Industrials Process Automation",
        ]}
        texts={[
          "In my role as Project Coordinator at Scania, I spearheaded the coordination of a pivotal Control Tower project, overseeing a budget of R$100,000 and navigating a tight 3-month deadline. This experience honed my skills in resource allocation, strategic planning, and agile project management. I adeptly developed and executed a detailed project plan, leading a cross-functional team through multiple milestones, ultimately surpassing project expectations. My journey in project coordination extends beyond a singular project, encompassing diverse initiatives that have collectively refined my abilities. Through the coordination of various projects, I've cultivated proficiency in effective communication, team collaboration, and adaptability. These experiences have equipped me with a robust skill set and a proven track record, making me well-prepared to contribute successfully to future projects and navigate the dynamic landscape of project coordination.",
          "In my daily responsibilities at Scania, a significant portion of my role centered around the integration of measurement machines from various suppliers and languages to centralize data. This task required a nuanced understanding of machine integration, as I seamlessly orchestrated the collaboration of diverse measurement systems to consolidate and streamline data. Managing this integration process enhanced my skills in troubleshooting, adapting to different languages, and fostering seamless communication between heterogeneous systems. This proficiency in machine integration extends across a spectrum of projects, where I consistently delivered successful outcomes. Coordinating these initiatives provided invaluable experience in navigating the intricacies of diverse machinery, refining my expertise in problem-solving and ensuring a cohesive integration process. Armed with this background, I am well-equipped to contribute effectively to future projects involving machine integration, leveraging my comprehensive understanding of diverse measurement systems and their integration nuances",
          "At the core of my daily activities and projects was the automation of machines, a pivotal aspect that became the cornerstone of my professional growth. Immersed in the realm of industrial process automation at Scania, I delved into Python and its renowned libraries to execute intricate tasks. This hands-on experience allowed me to master the intricacies of Python and its applications in industrial automation, contributing to enhanced efficiency and streamlined processes. My journey in industrial process automation spans a multitude of projects, each serving as a unique learning opportunity. Through these experiences, I honed my skills in deploying Python for automation, adapting it to various machine interfaces, and optimizing workflows for seamless operations. The acquired expertise positions me as a valuable asset for future projects in industrial automation, where my proficiency in Python and its libraries can drive innovation and efficiency in diverse automation processes.",
        ]}
      />
    </>
  );
}
