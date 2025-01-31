interface WorkshopElement {
  type: 'span' | 'link' | 'text';
  text: string;
  href?: string;
}

interface Workshop {
  elements: WorkshopElement[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  links: {
    website?: string;
    code?: string;
  }
  workshops?: Workshop[];
  image?: string;
  gifImage?: string;
}
export interface ProjectGroup {
  type: string;
  bgColor: string;
  backgroundImage: string;
  projects: Project[];
}

export const projects: ProjectGroup[] = [
  {
    type: 'log projects',
    bgColor: '#e7f7da',
    backgroundImage: '/music-note-background-green.svg',
    projects: [
      {
        title: 'theater log',
        subtitle: 'theater show tracker',
        description: 'theater log is a personal musical and play tracker, documenting every show i have seen live since 2010.',
        technologies: ['vue.js'],
        links: {
          website: 'https://theaterlog.com/',
          code: 'https://github.com/brittanyrw/theaterlog'
        },
        image: '/images/theaterlog.png',
        gifImage: '/images/theaterlog.gif'
      },
      {
        title: 'bookish log',
        subtitle: 'reading tracker',
        description: 'bookish log is a personal reading tracker, documenting every book i have read starting in 2021.',
        technologies: ['vue.js'],
        links: {
          website: 'https://thebookishlog.com/',
          code: 'https://github.com/brittanyrw/thebookishlog'
        },
        image: '/images/bookishlog.png',
        gifImage: '/images/bookishlog.gif'
      }
    ]
  },
  {
    type: 'musical projects',
    bgColor: '#cbeaf2',
    backgroundImage: '/music-note-background-blue.svg',
    projects: [
      {
        title: 'law & order: broadway',
        subtitle: 'data visualization',
        description: 'data visualization showing how broadway actors have been involved in the law & order franchise.',
        technologies: ['vue.js, mongodb'],
        links: {
          website: 'https://lawandorderbroadway.com/',
          code: 'https://github.com/brittanyrw/law-and-order-broadway-edition'
        },
        image: '/images/lawandorder.png',
        gifImage: '/images/lawandorder.gif'
      },
      {
        title: 'periodic table of musicals',
        subtitle: 'periodic table',
        description: 'a table showing a list of popular broadway and off-broadway shows.',
        technologies: ['vue.js'],
        links: {
          website: 'https://periodic-table-of-broadway.netlify.app/',
          code: 'https://github.com/brittanyrw/Periodic-Table-of-Broadway'
        },
        image: '/images/periodictable.png',
        gifImage: '/images/periodictable.gif'
      },
      {
        title: 'musical picks',
        subtitle: 'musical recommendation quiz',
        description: 'an illustrated quiz app that will recommend movie musicals based on your responses to questions about you.',
        technologies: ['javascript, jquery, the movie database api'],
        links: {
          website: 'https://brittanyrw.github.io/musicalpicks/',
          code: 'https://github.com/brittanyrw/musicalpicks'
        },
        image: '/images/musicalpicks.png',
        gifImage: '/images/musicalpicks.gif'
      },
      {
        title: 'mapping musicals',
        subtitle: 'tony winner locations',
        description: 'an interactive map of musicals that won or were nominated for best musical at the tony awards.',
        technologies: ['javascript, mapbox'],
        links: {
          website: 'https://brittanyrw.github.io/mappingmusicals/',
          code: 'https://github.com/brittanyrw/mappingmusicals'
        },
        image: '/images/mappingmusicals.png',
        gifImage: '/images/mappingmusicals.gif'
      },
      {
        title: 'hamilton quiz',
        subtitle: 'trivia app',
        description: 'a quiz to test your hamilton the musical knowledge',
        technologies: ['javascript, scss'],
        links: {
          website: 'https://brittanyrw.github.io/hamilton-quiz-app/',
          code: 'https://github.com/brittanyrw/hamilton-quiz-app'
        },
        image: '/images/hamiltonquiz.png',
        gifImage: '/images/hamilton.gif'
      },
      {
        title: 'bit theater',
        subtitle: 'theater review website',
        description: 'bittheater is your ultimate theater show resource. track your shows, share reviews and collect badges.',
        technologies: ['javascript, scss, node'],
        links: {
          code: 'https://github.com/brittanyrw/bittheater'
        },
        image: '/images/bittheater.png',
        gifImage: '/images/bittheater.gif'
      }
    ]
  },
  {
    type: 'fun projects',
    bgColor: '#e5e5f9',
    backgroundImage: '/music-note-background-purple.svg',
    projects: [
      {
        title: 'millennials slay',
        subtitle: 'industries millennials have "killed"',
        description: 'a directory of industries, traditions and products that millennials have supposedly killed.',
        technologies: ['vue.js'],
        links: {
          website: 'https://millennialslay.lol/',
          code: 'https://github.com/brittanyrw/millennials-slay'
        },
        image: '/images/millennialsslay.png',
        gifImage: '/images/millennialsslay.gif'
      },
      {
        title: 'css images',
        subtitle: 'images created with css',
        description: 'a colorful collection of various images and animations created using only css and html.',
        technologies: ['html and css, sometimes pug and scss'],
        links: {
          website: 'https://codepen.io/collection/nxLKYO/#0'
        },
        image: '/images/cssimages.png',
        gifImage: '/images/cssimages.gif'
      }
    ]
  },
  {
    type: 'teaching projects',
    bgColor: '#fae6e9',
    backgroundImage: '/music-note-background-pink.svg',
    projects: [
      {
        title: 'emojiscreens',
        subtitle: 'open source project',
        description: 'emojiscreens is a listing of movies, tv shows and musicals described through emojis.',
        technologies: ['open source', 'git/github teaching tool'],
        links: {
          website: '#',
          code: '#'
        },
        image: '/images/emojiscreen.png',
        gifImage: '/images/emojiscreen.gif'
      },
      {
        title: 'year in music',
        subtitle: 'workshop project',
        description: 'learn javascript building a music themed random generator.',
        technologies: ['html', 'javascript'],
        links: {
          website: '#',
          code: '#'
        },
        image: '/images/yearinmusic.png',
        gifImage: '/images/yearinmusic.gif'
      },
      {
        title: 'plant tracker',
        subtitle: 'vue.js + contentful starter project',
        description: 'a tutorial on how to create a simple house plant tracker with contentful and vue.js.',
        technologies: ['developer advocate'],
        links: {
          website: '#',
          code: '#'
        },
        image: '/images/planttracker.png',
        gifImage: '/images/planttracker.gif'
      },
      {
        title: 'what the css?!',
        subtitle: 'web development course',
        description: 'a 6 week course to help developers learn the fundamentals of css via daily challenges and daily exercises.',
        technologies: ['co-founder & web developer'],
        links: {
          website: '#',
          code: '#'
        },
        image: '/images/whatthecss.png',
        gifImage: '/images/whatthecss.gif'
      }
    ]
  },
  {
    type: 'workshops projects',
    bgColor: '#faf9e6',  // Light yellow
    backgroundImage: '/music-note-background-yellow.svg',
    projects: [
      {
        title: 'women who code dc',
        subtitle: 'front-end lead',
        description: 'worked for a year of intro to html and javascript courses with women who code dc.',
        technologies: [],
        links: {
          website: '#'
        },
        image: '/images/wwc.avif',
        gifImage: ''
      },
      {
        title: 'various conferences',
        subtitle: 'speaking/instructor',
        description: 'list of workshops i have taught at different conferences.',
        workshops: [
          {
            elements: [
              { type: 'span', text: '2021:' },
              { type: 'link', text: 'intro to git and github', href: '#' }
            ]
          },
          {
            elements: [
              { type: 'span', text: '2017:' },
              { type: 'link', text: 'build a game with javascript workshop', href: '#' }
            ]
          },
          {
            elements: [
              { type: 'span', text: '2022, 2023 & 2024:' },
              { type: 'link', text: 'a musical introduction to content management', href: '#' }
            ]
          },
          {
            elements: [
              { type: 'span', text: '2025:' },
              { type: 'link', text: 'create your dream portfolio: a workshop for developers', href: '#' }
            ]
          }
        ],
        technologies: [],
        links: {},
        image: '/images/contentfultalk.jpg',
        gifImage: ''
      },
      {
        title: 'thinkful workshops',
        subtitle: 'past lead dc instructor',
        description: 'taught front end web development topics including css, js fundamentals, apis, vue.js.',
        workshops: [
          {
            elements: [
              { type: 'text', text: 'testing on two three:' }            
            ]
          }
        ],
        technologies: [],
        links: {},
        image: '/images/thinkful.png',
        gifImage: ''
      },
      {
        title: 'writing',
        subtitle: 'blog posts & more',
        description: 'collection of blog posts and articles.',
        technologies: [],
        links: {
          website: '#'
        },
        image: '/images/blog.png',
        gifImage: ''
      }
    ]
  }
];