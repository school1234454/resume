// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ===============================================================
// var =
//================================================================

var header = {
  name: {
    firstname: 'ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '“600$ в місяц”',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/Skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('Skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        { name: 'foorball', isMain: false },
        { name: 'pc games', isMain: true },
        { name: 'books', isMain: true },
      ],
    },

    footer,
  })
})

//=================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          institution: 'educations 1',
          years: 2,
          isEnd: true,
        },
        {
          institution: 'educations 2',
          years: 3,
          isEnd: true,
        },
        {
          institution: 'educations 3',
          years: 0,
          isEnd: false,
        },
        {
          institution: 'educations 4',
          years: 6,
          isEnd: true,
        },
        {
          institution: 'educations 5',
          years: null,
        },
        {
          institution: 'educations 5',
          years: null,
        },
      ],
      certificates: [
        { name: 'js pro', id: 434132 },
        { name: 'html/css', id: 44123123 },
        { name: 'it brains', id: 413213 },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,
    ///==============
    main: {
      works: [
        {
          position: 'Junior Fullstack Deceloper',
          company: {
            name: 'IT Brains',
            url: 'https://it-btains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Lorem Ipsum is simply dummy text of the printing and typesetting',
              stacks: [
                {
                  name: 'React.JS',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.JS',
                },
              ],
              awards: [
                {
                  name: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                },
                {
                  name: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                },
              ],
              stackAmount: 3,
              stackAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: {
        firstname: 'Emma',
        lastname: 'Johnson',
      },
      personinfo: {
        age: 32,
        gender: 'Female',
      },
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },

      educationinfo: {
        education: {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      },
      workExperience: {
        workExperienceinfo: {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',

          employees: {
            employeesinfo: {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    layout: 'bio',

    bio: {
      name: 'Albert Einstein',
      birthdate: 'March 14, 1879',
      birthplace:
        'Ulm, Kingdom of Württemberg, German Empire',
      deathdate: 'April 18, 1955',
      deathplace: 'Princeton, New Jersey, United States',
      nationality: 'Swiss, German, American',
      occupation: 'Theoretical Physicist',
      known_for: [
        'Theory of Relativity',
        'E=mc²',
        'Photoelectric Effect',
        'Brownian Motion',
      ],
      education: [
        {
          degree: 'Doctor of Philosophy',
          field: 'Physics',
          institution: 'University of Zurich',
          year: 1905,
        },
      ],
      notable_publications: [
        {
          title: 'On the Electrodynamics of Moving Bodies',
          year: 1905,
          publisher: 'Annalen der Physik',
        },
        {
          title:
            'Does the Inertia of a Body Depend Upon Its Energy Content?',
          year: 1905,
          publisher: 'Annalen der Physik',
        },
      ],
      partners: [
        {
          name: 'Mileva Marić',
          relationship: 'First wife',
          years: '1903-1919',
        },
        {
          name: 'Elsa Einstein',
          relationship:
            "Second wife, also Einstein's first cousin",
          years: '1919-1936',
        },
      ],
      awards: [
        {
          title: 'Nobel Prize in Physics',
          year: 1921,
          description:
            'Awarded for his explanation of the photoelectric effect',
        },
      ],
      influences: [
        'Isaac Newton',
        'James Clerk Maxwell',
        'Hermann Minkowski',
      ],
      influenced: [
        'Niels Bohr',
        'Erwin Schrödinger',
        'Werner Heisenberg',
        'Richard Feynman',
      ],
      quotes: [
        'Imagination is more important than knowledge.',
        'I have no special talent. I am only passionately curious.',
        'The important thing is not to stop questioning.',
        'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
      ],
      major_discoveries: [
        {
          title: 'Photoelectric Effect',
          year: 1905,
          description:
            'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
        },
      ],
      contributions: {
        title: 'Inventions',
        description:
          'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
        year: 'Late 15th to early 16th century',
        field: 'Invention',
      },
    },
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
