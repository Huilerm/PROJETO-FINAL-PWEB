export interface Task {
    id: number;
    title: String;
    description?: String; // ? significa que é opcional
    completed: boolean;
}
export interface TaskCreate { //Criou isso na aula de hoje
    title: String;
    description: String;
}

export interface TaskUpdate { //Criou isso na aula de hoje
    title: string;
    description: string;
    completed: boolean;
}
