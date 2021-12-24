import Link from 'next/link'
function ProjectCard({projectName, projectSlug, coverImage, projectDesc}) {
    return (
    <div className="my-6">
        <Link href={`/projects/${projectSlug}`}><h3 className="cursor-pointer">{projectName}</h3></Link>
        <Link href={`/projects/${projectSlug}`}><img className="cursor-pointer" width="100%" src={coverImage}/></Link>
        <div className="mt-4 flex md:flex-row flex-col justify-between md:items-center justify-items-start">
            <p className="md:p-0 pb-2">{projectDesc} </p>
            <Link href={`/projects/${projectSlug}`}><div className="underline cursor-pointer">View More</div></Link>
        </div>


    </div>)
}
  
export default ProjectCard
