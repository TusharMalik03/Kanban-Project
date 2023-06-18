const data = [
  {
    id: 1,
    title: "to do",
    identityColor: "#5030E5",
    count: 4,
    tasks: [
      {
        id: 31,
        priority: "low",
        title: "Brainstorming",
        image: null,
        description: `Brainstorming brings team members' diverse experience into play. `,
        comments: 12,
        files: 0,
        users: [
          {
            image: '../Profiles/5.svg'
          },
          {
            image: '../Profiles/2.svg'
          },
          {
            image: '../Profiles/3.svg'
          },
          
        ],
      },
      {
        id: 32,
        priority: "high",
        title: "Research",
        image: null,
        description: `User research helps you to create an optimal product for users. `,
        comments: 10,
        files: 3,
        users: [
          {
            image: '../Profiles/4.svg'
          },
          {
            image: '../Profiles/6.svg'
          },
        ]
      },
      {
        id: 33,
        priority: "high",
        title: "Wireframes",
        image: null,
        description: `Low fidelity wireframes include the most basic content and visuals.. `,
        comments: 12,
        files: 13,
        users: [
          {
            image: '../Profiles/5.svg'
          },
          {
            image: '../Profiles/2.svg'
          },
          {
            image: '../Profiles/3.svg'
          },
        ]
      },
    ],
  },
  {
    id: 2,
    title: "on progress",
    identityColor: "#FFA500",
    count: 3,
    tasks: [
      {
        id: 45,
        priority: "low",
        title: "Onboarding Illustrations ",
        image: '../Profiles/Progress1.png',
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            image: '../Profiles/1.svg'
          },
          {
            image: '../Profiles/2.svg'
          },
          {
            image: '../Profiles/5.svg'
          },
        ]
      },
      {
        id: 47,
        priority: "high",
        title: "React DND",
        image: null,
        description: `React DnD is a set of React utilities designed to help you build advanced drag-and-drop interfaces while keeping your components decoupled. `,
        comments: 14,
        files: 15,
        users: [
          {
            image: '../Profiles/5.svg'
          },
          {
            image: '../Profiles/2.svg'
          },
          {
            image: '../Profiles/3.svg'
          },
        ]
      },
    ],
  },
  {
    id: 3,
    title: "done",
    identityColor: "#8BC48A",
    count: 2,
    tasks: [
      {
        id: 73,
        priority: "completed",
        title: "Mobile App Design",
        image: '../Profiles/Done1.png',
        description: null,
        comments: 12,
        files: 15,
        users: [
          {
            image: '../Profiles/6.svg'
          },
          {
            image: '../Profiles/2.svg'
          },
        ]
      },
      {
        id: 74,
        priority: "completed",
        title: "Design System",
        image: null,
        description: `It just needs to adapt the UI from what you did before `,
        comments: 12,
        files: 15,
        users: [
          {
            image: '../Profiles/6.svg'
          },
          {
            image: '../Profiles/2.svg'
          },
          {
            image: '../Profiles/1.svg'
          },
        ]
      },
    ],
  },
]

export default data