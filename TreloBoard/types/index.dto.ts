export type ID = string;

export interface Column {
  title: string;
  id: ID;
  tasks: Task[];
}

export interface Task {
  title: string;
  createdAt: Date;
  id: ID;
}
