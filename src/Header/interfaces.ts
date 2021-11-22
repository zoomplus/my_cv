export interface projectLink {
    name: string;
    sort: number;
    slug: string;
}

export interface HeaderProps {
    projectList: projectLink[];
}

export * from './components/Dropdown/interfaces';