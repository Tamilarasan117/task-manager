import { TabItemProps } from "../types/types";

const TabItem = ({ data, isActiveTab, updateIsActiveTab }: TabItemProps) => {
  const isActive = isActiveTab === data?.label;

  return (
    <li>
      <button
        onClick={ () => updateIsActiveTab(data?.label) }
        className={`text-[#16151C] text-[16px] font-semibold w-[160px] h-[42px] text-center cursor-pointer rounded-t-[10px] ${
          isActive && 'bg-[#7ECC2933] rounded-t border-b-3 border-[#7ECC29]'
        }`}
      >
        { data?.label }
      </button>
    </li>
  );
};

export default TabItem;
