import { useEffect, useRef } from 'react';
import { Cancel } from '../utils/imgData';
import { AddEditTaskProps, StatusType } from '../types/types';

const AddEditTask: React.FC<AddEditTaskProps> = ({
  label,
  task,
  status,
  onChangeTask,
  onChangeStatus,
  onCancel,
  onSubmit,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event?.target as Node)) {
        onCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  };

  useEffect(() => {
    handleClick();
  }, [onCancel]);

  return (
    <div ref={ modalRef } className=' absolute top-[82px] right-[0px] bg-opacity-40 w-[560px] min-h-[91%] bg-[#F9F9F9] rounded-[10px] shadow-lg shadow-[#D7D7D7]'>
      <div className='flex justify-between items-center !px-5 h-[54px] bg-[#7ECC2933] rounded-t-[10px]'>
        <h2 className='text-[21px] font-semibold text-[#444444]'>{ label }</h2>
        <button onClick={ onCancel } className='w-[24px] h-[24px] cursor-pointer'>
          <img src={ Cancel } alt='cancel-icon' />
        </button>
      </div>
      <div className='!p-6 flex min-h-[80vh] flex-col justify-between gap-4'>
        <div className='flex flex-col gap-5'>
          <div>
            <label htmlFor='task' className='block text-[16px] text-[#191919] font-[300] !mb-1'>Task</label>
            <input
              id='task'
              type='text'
              placeholder='Add new task here...'
              value={ task }
              onChange={(event) => onChangeTask(event?.target.value)}
              className='w-full border-[2px] border-[#D2D2D2] rounded-[5px] !px-3 !py-2 text-[#979797] text-[16px] font-[600] outline-none'
            />
          </div>
          <div>
            <label htmlFor='status' className='block text-[16px] text-[#191919] font-[300] !mb-1'>Status</label>
            <select
              value={status}
              id='status'
              onChange={(event) => onChangeStatus(event?.target.value as StatusType)}
              className='w-full border-[2px] border-[#D2D2D2] rounded-[5px] !px-3 !py-2 text-[#979797] text-[16px] font-[600] outline-none'
            >
              <option value={ StatusType.Pending }>Pending</option>
              <option value={ StatusType.Done }>Done</option>
            </select>
          </div>
        </div>
        <div className='flex justify-end gap-10 !mr-7'>
          <button
            onClick={ onCancel }
            className='w-[120px] h-[40px] cursor-pointer border border-[#A2A1A8] rounded-[10px] text-[#16151C] font-[300]'
          >
            Cancel
          </button>
          <button
            onClick={ onSubmit }
            className='w-[120px] h-[40px] cursor-pointer bg-[#7ECC29] hover:bg-[#5ECC29] text-[#191919] font-[500] rounded-[10px]'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditTask;
