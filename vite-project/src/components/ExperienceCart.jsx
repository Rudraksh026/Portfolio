export const ExperienceCart = ({element}) => {
    const {year,course,college,Description} = element
    return (
        <>
            <div className="exp-block">
        <div className="year">{year}</div>
        <div className="content">
          <h2>{course}</h2>
          <h3>{college}</h3>
          <p>
            {Description}
          </p>
        </div>
      </div>
        </>
    )
}