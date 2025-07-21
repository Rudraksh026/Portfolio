import { SkillBar } from "./SkillBar"

export const SkillCategory = ({element}) => {
    const {category,skills} = element
    return (
        <>
            <div className="skills-category">
            <h3>{category}</h3>

            {skills.map((element) => {
                return (
                    <>
                        <SkillBar element={element}/>
                    </>
                )
            })}

          </div>
        </>
    )
}