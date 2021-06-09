import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Route } from '.'

export const socials = [
    {
        name: 'twitter',
        icon: <FaTwitter />,
        href: 'https://twitter.com/maniacmaxo'
    },
    {
        name: 'instagram',
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/victorgorchilov/'
    },
    {
        name: 'github',
        icon: <FaGithub />,
        href: 'https://github.com/ManiacMaxo'
    },
    {
        name: 'linkedin',
        icon: <FaLinkedinIn />,
        href: 'https://www.linkedin.com/in/victorgorchilov/'
    }
]

export const addresses = [
    {
        name: 'Personal',
        location: 'Sofia, Bulgaria',
        phone: '+359884866981',
        mail: 'victor@gorchilov.com',
        icon: 'https://repo.gorchilov.net/api/images/portfolio/me.png',
        cover: 'https://repo.gorchilov.net/api/images/portfolio/personal.jpg'
    },
    {
        name: 'School',
        location: 'ELSYS',
        phone: '',
        mail: 'viktor.n.gorchilov.2016@elsys-bg.org',
        icon: '',
        cover: 'https://repo.gorchilov.net/api/images/portfolio/tues.jpeg'
    }
]

export const routes: Route[] = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
]

export const errors = new Map([
    [100, 'Continue'],
    [101, 'Switching Protocols'],
    [102, 'Processing'],
    [200, 'OK'],
    [201, 'Created'],
    [202, 'Accepted'],
    [203, 'Non-Authoritative Information'],
    [204, 'No Content'],
    [205, 'Reset Content'],
    [206, 'Partial Content'],
    [207, 'Multi-Status'],
    [208, 'Already Reported'],
    [226, 'IM Used'],
    [300, 'Multiple Choices'],
    [301, 'Moved Permanently'],
    [302, 'Found'],
    [303, 'See Other'],
    [304, 'Not Modified'],
    [305, 'Use Proxy'],
    [306, 'Reserved'],
    [307, 'Temporary Redirect'],
    [308, 'Permanent Redirect'],
    [400, 'Bad Request'],
    [401, 'Unauthorized'],
    [402, 'Payment Required'],
    [403, 'Forbidden'],
    [404, 'Sorry! Page Was Not Found'],
    [405, 'Method Not Allowed'],
    [406, 'Not Acceptable'],
    [407, 'Proxy Authentication Required'],
    [408, 'Request Timeout'],
    [409, 'Conflict'],
    [410, 'Gone'],
    [411, 'Length Required'],
    [412, 'Precondition Failed'],
    [413, 'Request Entity Too Large'],
    [414, 'Request-URI Too Long'],
    [415, 'Unsupported Media Type'],
    [416, 'Requested Range Not Satisfiable'],
    [417, 'Expectation Failed'],
    [422, 'Unprocessable Entity'],
    [423, 'Locked'],
    [424, 'Failed Dependency'],
    [425, 'Reserved for WebDAV advanced collections expired proposal'],
    [426, 'Upgrade Required'],
    [427, 'Unassigned'],
    [428, 'Precondition Required'],
    [429, 'Too Many Requests'],
    [430, 'Unassigned'],
    [431, 'Request Header Fields Too Large'],
    [500, 'Internal Server Error'],
    [501, 'Not Implemented'],
    [502, 'Bad Gateway'],
    [503, 'Service Unavailable'],
    [504, 'Gateway Timeout'],
    [505, 'HTTP Version Not Supported'],
    [506, 'Variant Also Negotiates (Experimental)'],
    [507, 'Insufficient Storage'],
    [508, 'Loop Detected'],
    [509, 'Unassigned'],
    [510, 'Not Extended'],
    [511, 'Network Authentication Required']
])