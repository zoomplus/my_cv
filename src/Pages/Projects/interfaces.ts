import { PagesProps } from "../interfaces";

export interface ProjectsProps extends PagesProps {
    slugProp?: string;
}

export enum ViewStatus {
    desktop = "desktop",
    mobile = "mobile"
}