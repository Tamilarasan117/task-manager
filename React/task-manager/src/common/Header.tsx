import { useState, ChangeEvent } from 'react';
import { Logo, Profile, Search, Notification, DirectionDown } from '../utils/imgData';
import { HeaderProps } from '../types/types';

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');

  // function to handle search task
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <nav className="w-full !pt-[15px] !pb-[15px] !pl-[30px] !pr-[30px] h-[82px] flex items-center justify-between bg-[#F9F9F9]">
      <img src={ Logo } alt="logo" />
      <div className="flex gap-1 items-center">
        <div className="flex gap-1 border-[#A2A1A81A] border-1 w-[261px] h-[50px] !pt-[13px] !pb-[13px] !pr-[16px] !pl-[16px] rounded">
          <img src={ Search } className="w-[24px] h-[24px]" alt="search icon" />
          <input
            value={ search }
            onChange={ handleSearch }
            type="text"
            name='search'
            placeholder="Search"
            className="outline-none text-gray-500 font-family-[Lexend]"
          />
        </div>
        <img
          src={ Notification }
          alt="notifications"
          className="text-gray-700/90 w-[50px] h-[50px] cursor-pointer hover:text-orange-600/90"
        />
        <div className="flex gap-2 w-[78px] !p-[5px] rounded-[8px] border-[1px] border-[#A2A1A833]">
          <img
            src={ Profile }
            alt="profile"
            className="rounded-[8px] w-[40px] h-[40px] cursor-pointer"
          />
          <img src={ DirectionDown } alt="dropdown arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
