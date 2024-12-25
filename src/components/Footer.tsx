export const Footer = () => {
  return (
    <footer className='grid grid-cols-2 gap-4 bg-neutral-700 py-10 text-white'>
      <h4 className='ml-auto'>Find me at:</h4>

      <ul className='space-y-2 font-display text-4xl'>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/ManiacMaxo'
            className='hover:underline'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/victorgorchilov'
            className='hover:underline'
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/victorgorchilov'
            className='hover:underline'
          >
            Instagram
          </a>
        </li>
        <li>
          <a href='mailto:victor@gorchilov.com' className='hover:underline'>
            Email
          </a>
        </li>
      </ul>
    </footer>
  )
}
