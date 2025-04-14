import { useState, useEffect } from 'react';
import { DirectionRight } from '../utils/imgData';
import { EditId, StatusType, TabType, ToastMessage, ToastType, Todo } from '../types/types';
import { useTodoContext } from '../context/TodoContext';
import { tabItems } from '../constants/tabItems';

import Header from '../common/Header';
import TodoItem from './TodoItem';
import TabItem from './TabItem';

import CustomToast from '../common/CustomToast';
import CustomLoader from '../common/CustomLoader';
import AddEditTask from './AddEditTask';

const TodoList = () => {
  const { addTodo, deleteTodo, error, isLoading, todos, updateTodo } = useTodoContext();

  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [showEditTask, setShowEditTask] = useState<boolean>(false);

  const [isActiveTab, setIsActiveTab] = useState<TabType>(TabType.All);

  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [editingTodoId, setEditingTodoId] = useState<EditId>();
  const [newTask, setNewTask] = useState<string>('');
  const [newStatus, setNewStatus] = useState<StatusType>(StatusType.Pending);

  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastType, setToastType] = useState<ToastType>(ToastType.Success);

  // function to show toast
  const showCustomToast = (message: string, type: ToastType = ToastType.Success): void => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  // function to update tab
  const updateIsActiveTab = (tabType: TabType): void => {
    setIsActiveTab(tabType);
    if (!todos) return;

    if (tabType === TabType.All) {
      setTodoData(todos);
      return;
    }

    const filterIsActiveTab = todos.filter((eachTab: Todo): boolean => {
      const checkIsActiveTab: TabType = eachTab?.completed ? TabType.Done : TabType.Pending;

      return checkIsActiveTab === tabType;
    });

    setTodoData(filterIsActiveTab);
  };

  // function to update todo list based on search input
  const onSearch = (value: string): void => {
    if (!todos) return;

    const filterTodos = todos?.filter((todo: Todo) =>
      todo?.title.toLowerCase().includes(value?.toLowerCase())
    );
    
    setTodoData(filterTodos);
  };

  // function to delete task
  const onDeleteTodo = (id: number): void => {
    deleteTodo(id);
    showCustomToast(ToastMessage.Delete, ToastType.Success);
  };

  // function to get edit task details
  const onEditTodo = (id: number): void => {
    const todoToEdit = todos.find(todo => todo?.id === id);
    if (!todoToEdit) return;
  
    setEditingTodoId(id);
    setNewTask(todoToEdit?.title);
    setNewStatus(todoToEdit?.completed ? StatusType.Done : StatusType.Pending);
    setShowEditTask(true);
  };
  
  // function to update task
  const handleUpdateTask = (): void => {
    if (!editingTodoId || !newTask.trim()) {
      showCustomToast(ToastMessage.Warning, ToastType.Error);
      return;
    }
  
    updateTodo(editingTodoId, newTask, newStatus);
    showCustomToast(ToastMessage.Update, ToastType.Success);
  
    setShowEditTask(false);
    setEditingTodoId(null);
    setNewTask('');
  };

  // function to add new task
  const handleAddTask = (): void => {
    if (!newTask.trim()) {
      showCustomToast(ToastMessage.Warning, ToastType.Error);
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: newTask,
      completed: newStatus === StatusType.Done,
    };

    addTodo(newTodo);
    showCustomToast(ToastMessage.Add, ToastType.Success);
    setShowAddTask(false);
    setNewTask('');
  };

  // based on tab type store data into state
  const checkActiveTab = () => {
    if (isActiveTab === TabType.All) {
      setTodoData(todos);
    } else if (isActiveTab === TabType.Pending) {
      setTodoData(todos?.filter(todo => !todo?.completed));
    } else if (isActiveTab === TabType.Done) {
      setTodoData(todos?.filter(todo => todo?.completed));
    };
  };

  useEffect(() => {
    checkActiveTab();
  }, [isActiveTab, todos]);

  return (
    <>
      {showToast && (
        <CustomToast
          message={ toastMessage }
          type={ toastType }
          onClose={() => setShowToast(false)}
        />
      )}
      <div className='bg-[#D9E1E1] flex border-[#A2A1A81A] border-[1px] flex-col items-center min-h-[100vh] relative'>
        <Header onSearch={ onSearch } />
        <div
          className={`w-full h-full transition-all duration-75 !pr-10 !pl-10 ${
            showAddTask ? 'blur-[16px]' : showEditTask && 'blur-[16px]'
          }`}
        >
          <div className='flex justify-between items-center !mb-4 !mt-3 w-full'>
            <button className='flex items-center font-[300] justify-center rounded bg-[#A2A1A866] w-[81px] h-[40px] text-[#16151C] cursor-pointer'>
              <img src={ DirectionRight } alt='direction-right' className='w-[24px] h-[24px]' />
              Back
            </button>
            <ul className='flex gap-5'>
              {tabItems.map((item) => (
                <TabItem
                  key={ item?.id }
                  data={ item }
                  isActiveTab={ isActiveTab }
                  updateIsActiveTab={ updateIsActiveTab }
                />
              ))}
            </ul>
            <button
              onClick={() => setShowAddTask(true)}
              className='flex items-center justify-center font-[600] rounded-[10px] bg-[#7ECC29] w-[120px] h-[40px] text-[#191919] cursor-pointer hover:bg-[#5ECC29]'
            >
              Add Todo
            </button>
          </div>

          <ul className='bg-[#F9F9F9] !pl-4 !pr-4 !pb-4 !mt-1 !mb-3 rounded-[10px] w-full h-[80vh] overflow-auto scrollbar-hide'>
            <li className='sticky top-0 !pt-3 z-10 bg-[#F9F9F9] border-b border-[#A2A1A81A] h-[50px]'>
              <div className='flex items-center'>
                <div className='flex-[1] flex gap-3 items-center'>
                  <span className='text-[#191919] text-[16px] font-[600]'>Task</span>
                  <span className='text-white text-sm bg-sky-600/70 !px-2 !py-1.5 rounded'>
                    Count: { todoData?.length }
                  </span>
                </div>
                <div className='flex text-center !pl-35'>
                  <span className='text-[#191919] text-[16px] font-[600]'>Status</span>
                </div>
                <div className='flex justify-end flex-[1] text-gray-700 !pr-20'>
                  <span className='text-[#191919] text-[16px] font-[600] !pr-10'>Actions</span>
                </div>
              </div>
            </li>

            {isLoading ? (
              <div className='flex items-center justify-center gap-3 text-center text-gray-700 text-md !py-5'>
                <CustomLoader /> { ToastMessage.isLoading }
              </div>
            ) : error ? (
              <div className='text-center text-red-600/80 font-bold text-md !py-5'>{ error }</div>
            ) : todoData?.length === 0 ? (
              <div className='text-center text-orange-600/80 font-bold text-md !py-5'>{ ToastMessage.NotFound }</div>
            ) : (
              todoData.map((todo: Todo) => (
                <TodoItem
                  key={ todo?.id }
                  todo={ todo }
                  onDeleteTodo={ onDeleteTodo }
                  onEditTodo={ onEditTodo }
                />
              ))
            )}
          </ul>
        </div>

        {showAddTask && (
          <AddEditTask
            label='Add New Task'
            task={ newTask }
            status={ newStatus }
            onChangeTask={ setNewTask }
            onChangeStatus={ setNewStatus }
            onCancel={() => {
              setShowAddTask(false);
              setNewTask('');
            }}
            onSubmit={ handleAddTask }
          />
        )}

        {showEditTask && (
          <AddEditTask
            label='Edit Task'
            task={ newTask }
            status={ newStatus }
            onChangeTask={ setNewTask }
            onChangeStatus={ setNewStatus }
            onCancel={ () => {
              setShowEditTask(false);
              setEditingTodoId(null);
              setNewTask('');
            }}
            onSubmit={ handleUpdateTask }
          />
        )}
      </div>
    </>
  );
};

export default TodoList;
