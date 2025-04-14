import { StatusType, TodoItemProps } from '../types/types';
import { Edit, Trash } from '../utils/imgData';

const TodoItem = ({ todo, onDeleteTodo, onEditTodo }: TodoItemProps) => {

  return (
    <li className="border-b border-[#A2A1A81A] h-[54px]">
      <div className="flex items-center">
        <div className="flex items-center gap-2 flex-[1]">
          <input
            type="checkbox"
            checked={ todo?.completed }
            name='check-box'
            readOnly
            className="accent-[#7ECC29] w-4 h-4 text-[16px] font-[300]"
          />
          <span className="text-gray-700 text-sm">{ todo?.title }</span>
        </div>
        <div className="flex text-center !pl-45">
          <span
            className={`!pt-[3px] !pb-[3px] !pr-[8px] !pl-[8px] w-[70px] h-[24px] text-[#16151C] text-[12px] rounded-[4px]
              ${ todo.completed ? 'bg-[#7ECC2933]' : 'bg-yellow-300/30' }
            `}>
            { todo?.completed ? StatusType.Done : StatusType.Pending }
          </span>
        </div>
        <div className="flex w-[220px] h-[44px] items-center justify-end gap-2 flex-[1] text-gray-700 !pr-30">
            <img src={ Edit }
            onClick={() => onEditTodo(todo?.id)}
            className="cursor-pointer hover:text-blue-500 w-[20px] h-[20px]"
          />
          <img src={ Trash }
            onClick={() => onDeleteTodo(todo?.id)}
            className="cursor-pointer hover:text-red-500 w-[17px] h-[17px]"
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
