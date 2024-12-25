import BraitBg from '@/assets/brait.bg.png'
import {
  type HoverImage,
  HoverImageDisplay
} from '@/components/ui/hover-image-display'

type Project = {
  title: string
  year: number
  description: string
  url: string
  images?: HoverImage[]
  github?: string
}

const projects: Project[] = [
  {
    title: 'Brait.bg',
    year: 2024,
    description: '',
    url: 'https://brait.bg',
    images: [BraitBg]
  },
  {
    title: 'High-School Thesis',
    year: 2021,
    description:
      'Over the last year of high school, I worked on a project that used deep neural networks to locate FOX transcription factors in genomes.',
    url: 'https://github.com/ManiacMaxo/Thesis'
  },
  {
    title: 'CyclePath',
    year: 2020,
    description: `Created for Hack TUES GG over the course of 2 days and won first place. Get the best routes for cyclists based on others' ratings. Built with React and Nest with Neo4J as the database.`,
    url: 'https://cyclepath.gorchilov.net',
    github: 'https://github.com/ManiacMaxo/CyclePath'
  }
].sort((a, b) => b.year - a.year)

export const Projects = () => {
  return (
    <section className="my-20">
      <h2 className="mb-6 font-display text-4xl">Projects</h2>

      <ol className="space-y-6">
        {projects.map((project, idx) => {
          const link = (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {project.title}
            </a>
          )
          return (
            <li key={idx}>
              <header>
                <h3 className="inline-block font-display text-xl">
                  {project.images ? (
                    <HoverImageDisplay images={project.images}>
                      {link}
                    </HoverImageDisplay>
                  ) : (
                    link
                  )}
                </h3>
                <span> - {project.year}</span>
              </header>

              <p className="text-balance">{project.description}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
