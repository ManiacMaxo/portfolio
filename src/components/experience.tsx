const jobs = [
  {
    company: 'Extreme Labs',
    url: 'https://extreme-ix.org/',
    location: 'Sofia, Bulgaria',
    position: 'Software Engineer',
    from: '2021',
    to: undefined,
    tools: ['React', 'Go', 'GraphQL', 'Docker', 'Kubernetes'],
    description:
      'Working on a variety of projects, including a self-service customer portal, a cloud-based network monitoring system, and internal observability tools.'
  },

  {
    company: 'Coherent Labs',
    url: 'https://coherent-labs.com/',
    location: 'Sofia, Bulgaria',
    position: 'Intern',
    from: '2018',
    to: '2018',
    description: 'Conducted market research...'
  }
]

export const Experience = () => {
  return (
    <section>
      <h2 className='mb-6 font-display text-4xl'>My Experience</h2>
      <ol className='space-y-6'>
        {jobs.map((job, idx) => (
          <li key={idx}>
            <header>
              <h3 className='inline font-display text-xl'>
                <a
                  href={job.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {job.company}
                </a>
              </h3>
              <span className='text-neutral-600 text-sm'>
                {' '}
                - {job.location} -{' '}
                {job.to
                  ? job.from === job.to
                    ? job.from
                    : `${job.from} - ${job.to}`
                  : `Since ${job.from}`}
              </span>
            </header>

            <p className='mb-1 italic'>As {job.position}</p>

            <p className='text-balance'>{job.description}</p>

            {job.tools && (
              <div className='flex flex-wrap gap-1'>
                {job.tools.map((tool) => (
                  <div
                    key={tool}
                    className='my-1 rounded-full bg-neutral-300 px-2 text-sm'
                  >
                    {tool}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
