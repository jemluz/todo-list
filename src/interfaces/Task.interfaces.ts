export interface TaskModel {
  name: string;
  isComplete: boolean;
}

export interface TaskProps {
  task: TaskModel;
  onDeleteTask: (taskToDelete: TaskModel) => void;
}

export interface NewTaskProps {
  // newTaskName: string;
  onCreateNewTask: (taskToCreate: TaskModel) => void;
  // setNewTask: (newTask: TaskModel) => void;
}