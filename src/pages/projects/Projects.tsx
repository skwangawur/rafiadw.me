import { ProjectCard } from "@/components/ui/ProjectCard";
import projects from "@/content/projects";

function Projects() {
    return (
        <section className="grid sm:grid-cols-card sm:grid-cols-2 gap-4 mt-7 justify-center grid-cols-1">
            {projects?.map((article, index) => {
                const meta = article.meta;
                return (
                    <ProjectCard
                        imageUrl={meta.imageUrl}
                        techStacks={meta.techStacks}
                        projectLink={meta.projectLink}
                        desc={meta.desc} // Fixed the typo here from "decs" to "desc"
                        title={meta.title}
                        key={index}
                    />
                );
            })}
        </section>
    );
}

export default Projects;
