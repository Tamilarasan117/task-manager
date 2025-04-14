// todo object structure
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// toast color types
type ToastColorType = 'success' | 'error' | 'info';

// custom toast props structure
export interface CustomToastProps {
  message: string;
  type?: ToastColorType;
  onClose: () => void;
}

// tab types
export enum TabType {
  All = 'All',
  Pending = 'Pending',
  Done = 'Done',
};

// tab item props structure
export interface TabItemType {
  id: number;
  label: TabType;
  isActive: boolean;
}

// tab data object structure
export interface TabData {
  id: number;
  label: TabType;
  isActive?: boolean;
}

// tab item props structure
export interface TabItemProps {
  data: TabData;
  isActiveTab: string;
  updateIsActiveTab: (label: TabType) => void;
}

// todo props object structure
export interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number) => void;
}

// todo context object structure
export interface TodoContextType {
  error: string | null,
  isLoading: boolean,
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, task: string, status: string) => void;
  deleteTodo: (id: number) => void;
}

// group of status type
export enum StatusType {
  Pending = 'Pending',
  Done = 'Done'
}

// group of toast types
export enum ToastType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

// group of toast colors
export enum ToastColors {
  success = 'bg-green-600/80',
  error = 'bg-red-600/80',
  info = 'bg-sky-600/80',
};

// interface for search
export interface HeaderProps {
  onSearch: (query: string) => void;
}

// group of toast messages
export enum ToastMessage {
  Add = 'Task Added Successfully!',
  Delete = 'Task Deleted Successfully!',
  Update = 'Task Updated Successfully!',
  Warning = 'Task field cannot be empty!',
  NotFound = 'No Todos Found!',
  isLoading = 'isLoading...',
}

// edit id type
export type EditId = number | null;

// add new task props structure
export interface AddEditTaskProps {
  label: string,
  task: string;
  status: StatusType;
  onChangeTask: (value: string) => void;
  onChangeStatus: (value: StatusType) => void;
  onCancel: () => void;
  onSubmit: () => void;
}
