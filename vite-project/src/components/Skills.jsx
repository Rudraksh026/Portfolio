import { SkillCategory } from "./SkillCategory";
import "./styles/Skills.css";
export const Skills = () => {
  const skillsData = [
    {
      category: "Hard Skills",
      skills: [
        { name: "MERN Stack Development", proficiency: 90 },
        { name: "HTML, CSS & JavaScript", proficiency: 95 },
        { name: "Responsive Web Design", proficiency: 90 },
        { name: "Data Structures & Algorithms", proficiency: 85 },
        { name: "Database Management (MySQL, MongoDB)", proficiency: 85 },
        { name: "Version Control (Git & GitHub)", proficiency: 80 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Team Collaboration", proficiency: 85 },
        { name: "Communication", proficiency: 80 },
        { name: "Time Management", proficiency: 80 },
        { name: "Adaptability", proficiency: 75 },
        { name: "Leadership (PantFresh, Robotics Club)", proficiency: 80 },
        { name: "Project Planning", proficiency: 85 },
      ],
    },
  ];

  return (
    <>
      <section className="skills-section section-to-pop">
        <h5>WHAT I CAN DO</h5>
        <h1>
          Skills &<br />
          Proficiencies
        </h1>
        <hr className="divider" />

        <div className="skills-grid">

            {
                skillsData.map((element) => {
                    return (
                        <>
                            <SkillCategory element={element} />
                        </>
                    )
                })
            }
        </div>
      </section>
    </>
  );
};
