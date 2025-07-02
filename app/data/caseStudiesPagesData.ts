// Case Study Data
export const CASE_STUDIES = [
    {
      slug: 'bykea',
      title: 'Bykea - Pakistan\'s Leading Mobility Super App',
      description: 'Empowering Pakistan\'s gridlocked cities with affordable mobility solutions through an innovative ML-powered platform that combines ride-hailing, deliveries, and digital payments.',
      showcaseImage: '/golf-training-app-dashboard.png',
      duration: '7+ years (Est. 2016)',
      location: 'Karachi, Pakistan',
      background: "Bykea, a leading mobility platform, needed to modernize its infrastructure to support rapid growth and ensure secure, seamless operations.",
      problem: [
        'Legacy systems struggled to handle increasing user demand.',
        'Manual processes led to inefficiencies and errors.',
        'Security vulnerabilities posed risks to user data.'
      ], 
       implementation: [
        { heading: 'System Audit', text: 'Conducted a comprehensive audit of existing infrastructure and workflows.' },
        { heading: 'Automation Rollout', text: 'Implemented automation tools to streamline ride-booking and payment processes.' },
        { heading: 'Security Enhancement', text: 'Upgraded security protocols to protect user data and transactions.' }
      ],
      journey: [
        'Automated core systems and streamlined operations.',
        'Enhanced security, ensured seamless migration, and empowered teams through training.'
      ],
      impact: [
        '30% reduction in operational costs',
        '50% faster ride-booking times',
        'Significant decrease in security incidents'
      ],
      techStack: [
        {
          name: 'Swift',
          image: '/logo-tech.png', // TODO: Replace with '/icons/swift.png'
        },
        {
          name: 'Laravel',
          image: '/logo-tech-1.png', // TODO: Replace with '/icons/laravel.png'
        },
        {
          name: 'React',
          image: '/logo-tech.png', // TODO: Replace with '/icons/react.png'
        },
        {
          name: 'Node.js',
          image: '/logo-tech-1.png', // TODO: Replace with '/icons/nodejs.png'
        },
      ],
      solutions: [
        {
          id: 1,
          title: 'Optimized Mobility Network',
          description: 'Using Google Maps Platform and ML algorithms, we achieved 20% reduction in dead miles and 15% time savings per transaction, making transportation more efficient and affordable.',
          image: '/bykea-mobility.png'
        },
        {
          id: 2,
          title: 'Multilingual Accessibility',
          description: 'Integrated Google Assistant for Urdu voice commands, making the platform accessible to Pakistan\'s diverse population regardless of language barriers.',
          image: '/bykea-language.png'
        },
        {
          id: 3,
          title: 'Super App Evolution',
          description: 'Expanded from ride-hailing to a comprehensive platform offering instant deliveries, e-commerce, and digital payments, serving over 5 million customers.',
          image: '/bykea-services.png'
        }
      ],
      link: 'https://www.bykea.com'
    },
    {
      slug: 'bluefin',
      title: 'Bluefin - Global Leader in Payment Security',
      description: 'Revolutionizing payment security through integrated PCI-validated encryption and tokenization solutions that protect sensitive data across 60 countries.',
      showcaseImage: '/bluefin.png',
      duration: '15+ years',
      location: 'Atlanta, United States',
      background: 'Bluefin, a global payment security provider, sought to enhance its platform to support a growing client base and evolving compliance requirements.',
      problem: [
        'Outdated encryption methods could not keep up with new threats.',
        'Scaling issues as client numbers increased rapidly.',
        'Compliance with international standards required major updates.'
      ],
      implementation: [
        { heading: 'Encryption Upgrade', text: 'Deployed next-generation encryption across all payment channels.' },
        { heading: 'Scalability Solutions', text: 'Redesigned system architecture to support global expansion.' },
        { heading: 'Compliance Automation', text: 'Integrated automated compliance checks for international standards.' }
      ],
   
      impact: [
        '99% reduction in data breaches',
        'Doubled platform capacity',
        'Faster compliance reporting by 60%'
      ],
      journey: [
        'Modernized infrastructure with advanced encryption and scalability enhancements.',
        'Ensured global compliance with minimal disruption and improved client confidence.'
      ],
      techStack: [
        {
          name: 'PCI P2PE',
          image: '/logo-tech.png', // TODO: Replace with '/icons/pci-p2pe.png'
        },
        {
          name: 'ShieldConex',
          image: '/logo-tech-1.png', // TODO: Replace with '/icons/shieldconex.png'
        },
        {
          name: 'PayConex',
          image: '/logo-tech.png', // TODO: Replace with '/icons/payconex.png'
        },
        {
          name: 'Tokenization',
          image: '/logo-tech-1.png', // TODO: Replace with '/icons/tokenization.png'
        },
      ],
      solutions: [
        {
          id: 1,
          title: 'Advanced Payment Security',
          description: 'Implemented PCI-validated Point-to-Point Encryption (P2PE) across 35,000+ merchants, protecting over $270B in card transactions with 42 security patents.',
          image: '/bluefin-security.png'
        },
        {
          id: 2,
          title: 'Vaultless Tokenization',
          description: 'Developed ShieldConex® platform for securing PII and PHI data, providing real-time tokenization and detokenization across all acceptance channels.',
          image: '/bluefin-token.png'
        },
        {
          id: 3,
          title: 'Global Integration Network',
          description: 'Built a network of 300+ global partners serving clients in 60 countries, with support for retail, healthcare, higher education and government sectors.',
          image: '/bluefin-network.png'
        }
      ],
      link: 'https://www.bluefin.com'
    },
    // {
    //   slug: 'creditbook',
    //   title: 'CreditBook - Digital Financial Services for MSMEs',
    //   description: 'Empowering Pakistan\'s micro and small businesses with digital bookkeeping, payments, and embedded financial services to improve their financial outcomes.',
    //   showcaseImage: '/creditbook.png',
    //   duration: '4+ years (Est. 2020)',
    //   location: 'Karachi, Pakistan',
    //   techStack: [
    //     {
    //       name: 'React Native',
    //       image: '/logo-tech.png', // TODO: Replace with '/icons/react-native.png'
    //     },
    //     {
    //       name: 'Node.js',
    //       image: '/logo-tech-1.png', // TODO: Replace with '/icons/nodejs.png'
    //     },
    //     {
    //       name: 'MongoDB',
    //       image: '/logo-tech.png', // TODO: Replace with '/icons/mongodb.png'
    //     },
    //     {
    //       name: 'AWS',
    //       image: '/logo-tech-1.png', // TODO: Replace with '/icons/aws.png'
    //     },
    //   ],
    //   solutions: [
    //     {
    //       id: 1,
    //       title: 'Digital Bookkeeping',
    //       description: 'Built Pakistan\'s first fully-licensed digital SME financing platform, serving over 1 million MSMEs across 400 localities with a 4.8/5 NPS score.',
    //       image: '/creditbook-ledger.png'
    //     },
    //     {
    //       id: 2,
    //       title: 'Embedded Finance',
    //       description: 'Developed white-label financial infrastructure enabling businesses to extend financing to customers in hours, with over 5,000 successful funding instances.',
    //       image: '/creditbook-finance.png'
    //     },
    //     {
    //       id: 3,
    //       title: 'Business Analytics',
    //       description: 'Implemented intelligent credit decisioning system achieving less than 2% overdue rate on 30+ day loans, while increasing customer order values by 25%.',
    //       image: '/creditbook-analytics.png'
    //     }
    //   ],
    //   link: 'https://www.creditbook.pk'
    // },
    {
      slug: 'neusolme',
      title: 'Application Testing Services for Neusolme',
      description: 'Neusolme, a rapidly growing software solutions company, needed a reliable testing process to improve platform performance and ensure smooth operations. Their platform faced increasing user demands, and they needed a solution to optimize performance.',
      showcaseImage: '/golf-training-app-dashboard.png',
      duration: '',
      location: '',
      techStack: [
        { name: 'Selenium', image: '/logo-tech.png' },
        { name: 'Appium', image: '/logo-tech-1.png' },
        { name: 'Custom In-house Automation Frameworks', image: '/logo-tech.png' },
        { name: 'Trello', image: '/logo-tech-1.png' },
      ],
      background: 'Neusolme, a rapidly growing software solutions company, needed a reliable testing process to improve platform performance and ensure smooth operations. Their platform faced increasing user demands, and they needed a solution to optimize performance.',
      problem: [
        'Platform faced increasing user demands.',
        'Needed to optimize performance and reliability.'
      ],
      implementation: [
        { heading: 'Initial Analysis', text: 'We analyzed the client requirements and current systems.' },
        { heading: 'Solution Design', text: 'Designed a tailored solution to address the identified needs.' },
        { heading: 'Deployment & Review', text: 'Implemented the solution and reviewed outcomes with the client.' }
      ],
      journey: [
        'Improved platform reliability and performance.',
        'Enhanced development processes for greater efficiency.'
      ],
      impact: [
        '25% improvement in platform efficiency',
        'Reduced user experience issues by 40%'
      ]
    },
    {
      slug: 'olivine',
      title: 'Cybersecurity Assessment for Olivine',
      description: 'Olivine, a utility administration company, needed a comprehensive assessment of its network and infrastructure to ensure system reliability and mitigate risks that could disrupt operations.',
      showcaseImage: '/golf-training-app-dashboard.png',
      duration: '',
      location: '',
      techStack: [
        { name: 'Metasploit', image: '/logo-tech.png' },
        { name: 'Nmap', image: '/logo-tech-1.png' },
        { name: 'Nessus', image: '/logo-tech.png' },
        { name: 'OpenVAS', image: '/logo-tech-1.png' },
      ],
      background: 'Olivine, a utility administration company, needed a comprehensive assessment of its network and infrastructure to ensure system reliability and mitigate risks that could disrupt operations.',
      problem: [
        'Needed a comprehensive assessment of network and infrastructure.',
        'Required to ensure system reliability and mitigate risks.'
      ],
      implementation: [
        { heading: 'Initial Analysis', text: 'We analyzed the client requirements and current systems.' },
        { heading: 'Solution Design', text: 'Designed a tailored solution to address the identified needs.' },
        { heading: 'Deployment & Review', text: 'Implemented the solution and reviewed outcomes with the client.' }
      ],
      journey: [
        'Optimized enterprise systems and proactively addressed risks.',
        'Ensured more reliable operations and future-proofed infrastructure.'
      ],
      impact: [
        '40% increase in system reliability',
        'Reduced security vulnerabilities by 50%'
      ]
    },
    {
      slug: 'rawcaster',
      title: 'Application Testing for RawCaster',
      description: 'RawCaster, a social media platform, faced performance issues as user traffic grew. They needed an effective way to test their application performance under load to ensure a seamless user experience.',
      showcaseImage: '/golf-training-app-dashboard.png',
      duration: '',
      location: '',
      techStack: [
        { name: 'JMeter', image: '/logo-tech.png' },
        { name: 'LoadRunner', image: '/logo-tech-1.png' },
        { name: 'Custom Server Log Analyzers', image: '/logo-tech.png' },
      ],
      background: 'RawCaster, a social media platform, faced performance issues as user traffic grew. They needed an effective way to test their application performance under load to ensure a seamless user experience.',
      problem: [
        'Faced performance issues as user traffic grew.',
        'Needed to test application performance under load.'
      ],
      implementation: [
        { heading: 'Initial Analysis', text: 'We analyzed the client requirements and current systems.' },
        { heading: 'Solution Design', text: 'Designed a tailored solution to address the identified needs.' },
        { heading: 'Deployment & Review', text: 'Implemented the solution and reviewed outcomes with the client.' }
      ],
      journey: [
        'Recommended and implemented solutions to resolve performance bottlenecks.',
        'Allowed RawCaster to handle higher traffic volumes without affecting user experience.'
      ],
      impact: [
        '30% faster response time under heavy load',
        '25% reduction in server downtime'
      ]
    },
    {
      slug: 'seedlabs',
      title: 'App Testing & General Assessment for Seedlabs',
      description: 'Seedlabs, a fast-growing software company, needed a detailed assessment of their web and mobile applications to enhance product quality and optimize operations.',
      showcaseImage: '/golf-training-app-dashboard.png',
      duration: '',
      location: '',
      techStack: [
        { name: 'Selenium', image: '/logo-tech.png' },
        { name: 'Appium', image: '/logo-tech-1.png' },
        { name: 'JMeter', image: '/logo-tech.png' },
      ],
      background: 'Seedlabs, a fast-growing software company, needed a detailed assessment of their web and mobile applications to enhance product quality and optimize operations.',
      problem: [
        'Needed a detailed assessment of web and mobile applications.',
        'Aimed to enhance product quality and optimize operations.'
      ],
      implementation: [
        { heading: 'Initial Analysis', text: 'We analyzed the client requirements and current systems.' },
        { heading: 'Solution Design', text: 'Designed a tailored solution to address the identified needs.' },
        { heading: 'Deployment & Review', text: 'Implemented the solution and reviewed outcomes with the client.' }
      ],
      journey: [
        'Identified areas for improvement in performance and functionality.',
        'Helped Seedlabs enhance product quality and streamline operations.'
      ],
      impact: [
        '35% improvement in mobile app performance',
        '20% increase in user engagement'
      ]
    },
    {
      slug: 'creditbook',
      title: 'QA Automation for CreditBook',
      description: 'CreditBook, a digital solution provider for financial record management, wanted to streamline their testing process to improve efficiency and reduce manual work.',
      showcaseImage: '/creditbook.png',
      duration: '',
      location: '',
      techStack: [
        { name: 'Selenium', image: '/logo-tech.png' },
        { name: 'Cypress', image: '/logo-tech-1.png' },
        { name: 'Automated Reporting Tools', image: '/logo-tech.png' },
      ],
      background: 'CreditBook, a digital solution provider for financial record management, wanted to streamline their testing process to improve efficiency and reduce manual work.',
      problem: [
        'Wanted to streamline testing process to improve efficiency.',
        'Aimed to reduce manual work.'
      ],
      implementation: [
        { heading: 'Initial Analysis', text: 'We analyzed the client requirements and current systems.' },
        { heading: 'Solution Design', text: 'Designed a tailored solution to address the identified needs.' },
        { heading: 'Deployment & Review', text: 'Implemented the solution and reviewed outcomes with the client.' }
      ],
      journey: [
        'Implemented automated testing framework, significantly reducing testing times.',
        'Improved accuracy and streamlined the development cycle.'
      ],
      impact: [
        '50% reduction in manual testing time',
        '30% faster software release cycles'
      ]
    }
  ];