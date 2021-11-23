interface ProjectData {
    title: string;
    groupDevelopment: boolean;
    technologies: string[];
    screenshot: {
        desktop: string;
        mobile: string;
    };
    website: string;
}
interface Project {
    name: string;
    sort: number;
    slug: string;
    image: string;
    data: ProjectData;
}

const data: Project[] = [
    {
        name: 'Italian Pizza',
        sort: 1,
        slug: 'italian',
        image: '',
        data: {
            title: 'Сайт для франшизы пиццерий Italian Pizza',
            groupDevelopment: true,
            technologies: [
                'Next.JS',
                'React',
                'Context + Hooks (state management)',
                'Bootstrap',
                'Formik',
                'Apollo GraphQL',
                'LocalStorage',
                'TypeScript',
                'CyPress',
                'Axios',
                'Lodash',
                'react-modal',
                'react-slick',
                'react-spinners',
                'react-sticky',
                'react-tooltip',
                'And more other libs...'
            ],
            screenshot: {
                desktop: '/italian/desktop.png',
                mobile: '/italian/mobile.png'
            },
            website: 'https://italianpizza.ru/'
        }
    },
    {
        name: 'test1',
        sort: 2,
        slug: 'test1',
        image: '',
        data: {
            title: 'test1',
            groupDevelopment: true,
            technologies: [
                'And more other libs...'
            ],
            screenshot: {
                desktop: '/italian/desktop.png',
                mobile: '/italian/mobile.png'
            },
            website: 'https://italianpizza.ru/'
        }
    }
];

export const getProject = (slug: string): Project => {
    return data.filter(item => item.slug === slug)[0];
}

export default data;