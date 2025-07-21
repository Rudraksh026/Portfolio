export const SkillBar = ({element}) => {
    const {name,proficiency} = element
    return (
        <>
            <div className="skill">
              <p>{name}</p>
              <div className="bar">
                <div className="fill" style={{width: `${proficiency}%`}}></div>
              </div>
            </div>
        </>
    )
}