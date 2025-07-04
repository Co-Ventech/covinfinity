export const aeChatData = [
  // Conversation 1 - Winston chat about collaboration
  [
    {
      role: 'user' as const,
      sender: 'Winston',
      message: 'Thanks, Sarah. I appreciate your responsiveness and support. Looking forward to seeing these changes in action!',
      avatar: '/Winston.png',
      time: '2:14 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '2:14 PM',
    },
    {
      role: 'user' as const,
      sender: 'Winston',
      message: "I'll coordinate with them to make sure they're available for your next brainstorming session. Is there anything else on your mind",
      avatar: '/Winston.png',
      time: '2:14 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '2:14 PM',
    }
  ],

  // Conversation 2 - Alex discussing Cloud Solutions
  [
    {
      role: 'user' as const,
      sender: 'Alex',
      message: 'Hi Sarah, we need to scale our cloud infrastructure. Can you help us optimize our AWS setup?',
      avatar: '/Alex.png',
      time: '3:20 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '3:21 PM',
    },
    {
      role: 'user' as const,
      sender: 'Alex',
      message: "That sounds great! We're particularly concerned about cost optimization and auto-scaling configurations.",
      avatar: '/Alex.png',
      time: '3:22 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '3:23 PM',
    }
  ],

  // Conversation 3 - Emma discussing AI Integration
  [
    {
      role: 'user' as const,
      sender: 'David',
      message: 'Sarah, we want to implement AI-powered analytics in our application. What would be the best approach?',
      avatar: '/emma.png',
      time: '4:15 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '4:16 PM',
    },
    {
      role: 'user' as const,
      sender: 'David',
      message: 'Yes, a proof of concept would be great! When can we expect to see the initial results?',
      avatar: '/emma.png',
      time: '4:17 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '4:18 PM',
    }
  ],

  // Conversation 4 - Michael discussing Mobile Development
  [
    {
      role: 'user' as const,
      sender: 'Michael',
      message: 'We need to develop a cross-platform mobile app. What technology stack would you recommend?',
      avatar: '/Michael.png',
      time: '5:30 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '5:31 PM',
    },
    {
      role: 'user' as const,
      sender: 'Michael',
      message: 'That makes sense. How long would it take to develop an MVP with React Native?',
      avatar: '/Michael.png',
      time: '5:32 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '5:33 PM',
    }
  ],

  // Conversation 5 - Sophia discussing DevOps
  [
    {
      role: 'user' as const,
      sender: 'Sophia',
      message: 'Our deployment pipeline needs improvement. Can you help us implement CI/CD?',
      avatar: '/sophia.png',
      time: '6:45 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '6:46 PM',
    },
    {
      role: 'user' as const,
      sender: 'Sophia',
      message: 'Great! How soon can we start implementing this? Our team is eager to improve deployment efficiency.',
      avatar: '/sophia.png',
      time: '6:47 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '6:48 PM',
    }
  ],
  [],
  // Conversation 6 - David discussing Web Development
  [
    {
      role: 'user' as const,
      sender: 'Emma',
      message: 'We need a modern web application with real-time features. What would you suggest?',
      avatar: '/john.png',
      time: '7:55 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '7:56 PM',
    },
    {
      role: 'user' as const,
      sender: 'Emma',
      message: 'Sounds promising! Can you show us some examples of similar implementations?',
      avatar: '/john.png',
      time: '7:57 PM',
    },
    {
      role: 'ai' as const,
      sender: 'Sarah',
      message: "too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!",
      avatar: '/sarah1.png',
      time: '7:58 PM',
    }
  ]
];

const collaboratorAvatars = [
  '/Winston.png', // 0
  '/Alex.png',    // 1
  '/emma.png',    // 2
  '/Michael.png', // 3
  // ...add more as needed, keep the order matching the orbits
  '/sarah1.png',  // 5 (for Sarah or user chat)
  // etc.
];
