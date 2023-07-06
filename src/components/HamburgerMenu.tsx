import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useHover } from 'usehooks-ts';

const HamburgerMenu = () => {
  const menuIconRef = useRef<HTMLDivElement>(null);
  const isMenuIconHover = useHover(menuIconRef);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenuIcon = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      ref={menuIconRef}
      className='z-[2000] relative cursor-pointer group group-hover:bg-transparent flex items-center justify-end w-[70px] h-[70px]'
      onClick={onClickMenuIcon}
    >
      <div className='relative'>
        <span
          className={twMerge([
            'absolute -translate-x-full left-0 h-[2px] ease-in-out',
            isMenuIconHover ? 'bg-primary' : 'bg-white',
            isMenuOpen
              ? 'rotate-45 w-[30px] md:w-[35px] bottom-0 duration-500'
              : 'w-[30px] md:w-[45px] bottom-[2.5px] duration-[200ms]',
          ])}
        />
        <span
          className={twMerge([
            'absolute -translate-x-full left-0  h-[2px] ease-in-out duration-[400ms]',
            isMenuIconHover ? 'bg-primary' : 'bg-white',
            isMenuOpen
              ? '-rotate-45 w-[30px] md:w-[35px] bottom-0'
              : 'w-[30px] md:w-[45px] -bottom-[4.5px]',
          ])}
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
