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
    //==================
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
