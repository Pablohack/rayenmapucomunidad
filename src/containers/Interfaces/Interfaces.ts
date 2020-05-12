export interface IAccordion{
    level: string;
    link: string;
    data: ITeacher[];
}

export interface ITeacher{
    cargo: string;
    name: string;
}