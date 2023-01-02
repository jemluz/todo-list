export interface TaskModel {
  name: string;
  isComplete: boolean;
}

export interface TaskProps {
  task: TaskModel;
  onDeleteTask: (taskToDelete: TaskModel) => void;
  onCompleteTask: (taskToComplete: TaskModel) => void;
}

export interface NewTaskProps {
  onCreateNewTask: (taskToCreate: TaskModel) => void;
}

export interface TaskCounterProps {
  totalCount: number;
  completedCount: number;
}