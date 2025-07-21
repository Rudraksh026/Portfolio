import { ExperienceCart } from "./ExperienceCart";
import "./styles/Experience.css";
export const Experience = () => {
  const Education = [
    {
      year: "2025-2027",
      course: "Full Stack Developer",
      college:
        "The Pant Fresh – A Startup under the Directorate of Research, Pantnagar",
      Description:
        "Built and maintained MERN-based web apps with authentication and payment systems.",
    },
    {
      year: "2024-2027",
      course: "Bachelor of Technology in Information Technology",
      college:
        "Govind Ballabh Pant University of Agriculture & Technology Pantnagar",
      Description:
        "Lateral entry student with specialization in Full Stack development.",
    },
    {
      year: "2021-2024",
      course: "Diploma in Information Technology",
      college: "Government Polytechnic Narendra Nagar",
      Description:
        "Completed a 3-year diploma with foundational expertise in programming and system design.",
    },
    {
      year: "2020-2021",
      course: "High School",
      college: "Modern School Rishikesh",
      Description:
        "Completed senior secondary education with strong foundation in java ,science and mathematics.",
    },
  ];

  return (
    <>
      <section className="experience section-to-pop">
        <div className="experience-left">
          <h1>
            Experience &<br />
            Education
          </h1>
          <hr />
        </div>
        <div className="experience-right">
          {Education.map((element) => {
            return (
              <>
                <ExperienceCart element={element} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
