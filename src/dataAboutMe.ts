export interface aboutMe {
    skills: {
        name: string
    }[],
    workingPlaces: {
        name: string
        description: string
        time: string
    }[],
    about: string
}

const data: aboutMe = {
    skills: [
        {
            name: 'HTML5'
        },
        {
            name: 'CSS3'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'React'
        },
        {
            name: 'Next.js'
        },
        {
            name: 'Redux'
        },
        {
            name: 'Redux-saga'
        },
        {
            name: 'TypeScript'
        },
        {
            name: 'GraphQL'
        },
        {
            name: 'Node.js'
        },
        {
            name: 'Material-UI'
        },
        {
            name: 'Bootstrap'
        },
        {
            name: 'PHP'
        },
        {
            name: 'Sass'
        },
        {
            name: 'Laravel'
        },
        {
            name: 'Yii2'
        },
        {
            name: 'CMS OpenCart'
        },
        {
            name: 'CMS Wordpress'
        },
        {
            name: 'CMS Битрикс'
        },
        {
            name: 'Git'
        },
        {
            name: 'And other more...'
        },
    ],
    workingPlaces: [
        {
            name: 'Медиа технологии (siteonic) — Middle+ web-developer',
            description: 'Разработка сайтов, продвижение сайтов, разработка на CMS Bitrix\n' +
                '\n' +
                'Из фреймворков на фронте использовал:\n' +
                'vuejs, reactjs\n' +
                '\n' +
                'На бэкэнде использовал:\n' +
                'nodejs, laravel, yii2',
            time: 'Ноябрь 2019 — по настоящее время'
        },
        {
            name: 'BrandPol Group — Middle web engineer',
            description: 'Крупная система с обработкой больших данных и работы с ними\n' +
                'Доработка системы и разработка нового функционала',
            time: 'Июль 2019 — октябрь 2019'
        },
        {
            name: 'Медиа технологии (siteonic) — Middle web-developer',
            description: 'Перешел сюда как Junior+/Middle, занимался разработкой под популярные CMS, настройкой. Супер больших проектов не было, только типичные интернет магазины, среди которых были крупные интернет магазины\n' +
                '\n' +
                'Разработка сайтов, продвижение сайтов, разработка модулей под разные cms, работа с bitrix, opencart, yii2',
            time: 'Июнь 2018 — июль 2019'
        },
        {
            name: 'TrueDesigners — Junior web-developer',
            description: 'Был стажером, с базовыми знаниями только языка PHP, JS и разметкой HTML/CSS\n' +
                '\n' +
                'Разработка сайтов, исправление багов, написание модулей итд (Front-end/Back-end)',
            time: 'Октябрь 2017 — июнь 2018'
        },
    ],
    about: `
        <p>
            Главная область это веб разработка. Начинал свою карьеру как Back-end разработчик.
            Затем перерос на Full-stack с использованием нативного JavaScript или библиотеки JQuery, где весь бекенд это Фреймворки на PHP или CMS системы.
            Потом перерос во Front-end на React, также был небольшой коммерческий опыт на NodeJS потому как программирование бекенда знакомо и во многих моментах схоже с PHP, использовалось конкретно Nest, был опыт с docker но конкретно только развертывание уже готового сервера.
            Сейчас занимаюсь в основном Front-end разработкой и использую активно NextJS, GraphQL (Apollo), TypeScript
        </p>
        <p>
            В последнее время также активно принимаю участие в разработке архитектуры, выбора технологического стека под проект, но считаю что до senior позиции ещё есть куда расти
        </p>
    `
}

export default data;