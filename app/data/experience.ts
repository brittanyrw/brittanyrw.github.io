interface DetailElement {
  type: 'span' | 'link' | 'text';
  text: string;
  href?: string;
}

interface Detail {
  elements: DetailElement[];
}

export interface Experience {
  title: string;
  subtitle: string;
  description: string;
  details?: Detail[];
  document: string; 
  video: string;
  links: {
    website?: string;
    code?: string;
    video?: string;
    slides?: string;
  } 
}

export const experience: Experience[] = [
  {
    title: 'vue starter',
    subtitle: 'contentful',
    description: '',
    document: '',
    video: '/images/vue-starter.mp4',
    links: {
      website: 'https://www.contentful.com/vue-starter/',
      code: 'https://github.com/contentful/starter-vue-tracker'
    }
  },
  {
    title: 'developer relations',
    subtitle: 'blog posts',
    description: 'selection of writing for developer relations',
    document: '',
    video: '',
    details: [
      {
        elements: [
          { type: 'span', text: 'contentful:' },
          { type: 'link', text: 'monthly dev newsletter (2021-2025)', href: '/images/nov-dev-newsletter.pdf' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'contentful:' },
          { type: 'link', text: 'GraphQL tools for getting started with Contentful', href: 'https://www.contentful.com/blog/graphql-tools-for-getting-started-with-contentful/' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'contentful:' },
          { type: 'link', text: 'How to build a project using Vue.js and Contentful', href: 'https://dev.to/musicalwebdev/how-to-build-a-project-using-vue-js-and-contentful-29gg' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'contentful:' },
          { type: 'link', text: 'I Joined the Contentful Developer Relations Team', href: 'https://dev.to/contentful/i-joined-the-contentful-developer-relations-team-3ne6' }
        ]
      }
    ],
    links: {
      website: '',
      code: ''
    }
  },
  {
    title: 'Intro to Git & GitHub Workshop',
    subtitle: 'Various DC meetups',
    description: '',
    document: '/images/gitworkshop.png',
    video: '',
    links: {
      code: 'https://github.com/brittanyrw/git',
      slides: 'https://docs.google.com/presentation/d/12vEMSEoO95UNabwHH7Hi7sbKTEHXRTj2KaEmXTiMwyg/edit?usp=sharing'
    }
  },
  {
    title: '',
    subtitle: '',
    description: '',
    document: '',
    video: '',
    links: {
      website: '',
      code: ''
    }
  },
  {
    title: 'EmojiScreen and Hacktoberfest',
    subtitle: 'GitHub Education',
    description: '',
    document: '/images/github.png',
    video: '',
    links: {
      video: 'https://www.twitch.tv/videos/1944147198',
      code: ''
    }
  },
  {
    title: 'other',
    subtitle: 'blog posts and more',
    description: '',
    document: '',
    video: '',
    details: [
      {
        elements: [
          { type: 'span', text: 'power to fly:' },
          { type: 'link', text: 'Master the art of public speaking', href: 'https://powertofly.com/up/the-art-of-public-speaking' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'medium:' },
          { type: 'link', text: '100 Days of Code', href: 'https://medium.com/@brittanyrw' }
        ]
      }
    ],
    links: {
      website: '',
      code: ''
    }
  },
  {
    title: 'Women of Jamstack podcast',
    subtitle: 'CodingCatDev',
    description: '',
    document: '/images/jamstack.png',
    video: '',
    links: {
      video: 'https://www.youtube.com/watch?v=NoxddRpApOs'
    }
  },
  {
    title: 'Intro to Contentful',
    subtitle: 'VueJS Forge',
    description: '',
    document: '/images/vuejsforge.png',
    video: '',
    links: {
      video: 'https://www.youtube.com/watch?v=oeD7ig8bzHU'
    }
  },
  {
    title: 'Create your Dream Portfolio',
    subtitle: 'Codebar',
    description: '',
    document: '/images/codebar.jpg',
    video: '',
    details: [],
    links: {
      video: 'https://www.youtube.com/watch?v=cLXClnuxrbA',
      slides: 'https://docs.google.com/presentation/d/1M5lv3O-LHMJtWAh0BbRNdaUgoWTLO06xLjifZzMPyi0/edit?usp=sharing'
    }
  },
  {
    title: 'Other',
    subtitle: 'Webinars & Other Content',
    description: '',
    document: '',
    video: '',
    details: [
      {
        elements: [
          { type: 'span', text: 'writing:' },
          { type: 'link', text: 'GraphQL Cheet Sheet', href: 'https://musicalwebdev.com/imgs/graphql-cheat-sheet.pdf' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'webinar:' },
          { type: 'link', text: 'Building an ecommerce front-end with Algolia and Contentful', href: 'https://www.contentful.com/resources/building-an-ecommerce-front-end-with-algolia-and-contentful/' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'webinar:' },
          { type: 'link', text: 'Accelerate site speed with Contentful and Vercel', href: 'https://www.contentful.com/resources/accelerate-site-speed-with-contentful-vercel/' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'tech ladies conf' },
          { type: 'link', text: 'Build a Game with JavaScript Workshop', href: 'https://github.com/brittanyrw/Build-a-Game-With-JavaScript' }
        ]
      }
    ],
    links: {
      website: '',
      code: ''
    }
  },
  {
    title: 'Musical Intro to Contentful',
    subtitle: 'RenderATL',
    description: '',
    document: '/images/musicalintroworkshop.png',
    video: '',
    links: {
      slides: 'https://docs.google.com/presentation/d/1ItjxX-3fvLxtb5tD3Q1yAusrX6w_xB1kKskWYtiDLso/edit?usp=sharing',
      code: 'https://github.com/brittanyrw/year-in-music-2024'
    }
  },
  {
    title: 'Marketing Template',
    subtitle: 'contentful',
    description: '',
    document: '',
    video: '/images/startertemplate-marketing.mp4',
    links: {
      website: '',
      code: ''
    }
  },
  {
    title: 'Engineering at Contentful',
    subtitle: 'Contentful',
    description: '',
    document: '/images/engineering.png',
    video: '',
    links: {
      video: 'https://www.youtube.com/watch?v=m3lk7QUcB5Q'
    }
  },
  {
    title: 'Thinkful Workshops',
    subtitle: 'Past Lead DC Instructor',
    description: 'Taught free front-end web development workshops for 2+ years weekly on various topics including:',
    document: '',
    video: '',
    details: [
      {
        elements: [
          { type: 'span', text: 'web dev' },
          { type: 'link', text: 'Intro to HTML/CSS', href: '#' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'js' },
          { type: 'link', text: 'js fundamentals, build a game/pet with js, intro to es6', href: '#' }
        ]
      },
      {
        elements: [
          { type: 'span', text: 'git' },
          { type: 'link', text: 'git & github intro', href: '#' }
        ]
      }
    ],
    links: {
      website: '',
      code: ''
    }
  },
  {
    title: 'Mixing DevRel and Community',
    subtitle: 'Certified Fresh Events',
    description: '',
    document: '/images/cfe.jpg',
    video: '',
    links: {
      video: 'https://www.youtube.com/watch?v=qc7Cx7nBITA'
    }
  },
  {
    title: 'Next.js Starter',
    subtitle: 'contentful',
    description: '',
    document: '',
    video: '/images/contentful-nextjs.mp4',
    links: {
      website: 'https://www.contentful.com/nextjs-starter/'
    }
  },
  {
    title: 'women who code',
    subtitle: 'front-end lead',
    description: 'Worked in a team of five to host and teach two front-end web development meetups per month in the DC area.',
    document: '/images/wwc.avif',
    video: '',
    details: [
      {
        elements: [
          { type: 'span', text: '2020:' },
          { type: 'link', text: 'Intro to Git & GitHub: Make Your First Pull Request', href: '#' }
        ]
      }
    ],
    links: {
      website: '',
      code: ''
    }
  }
];