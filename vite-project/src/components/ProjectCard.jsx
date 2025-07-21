export const ProjectCard = ({element}) => {
    const {title,link,description,path} = element
    const handleClick = () => {
        window.open(link,"_blank")
    }
    return (
        <>
            <div onClick={handleClick} className="project-card">
            <img
              src={`images/${path}`}
              alt={path}
            />
            <a href={link} className="project-title" target="_blank">{title}</a>
            <p className="project-desc">
              {description}
            </p>
          </div>
        </>
    )
}