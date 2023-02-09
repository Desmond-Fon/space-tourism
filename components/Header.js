import logo from '../public/assets/shared/logo.svg';
import hamburger from '../public/assets/shared/icon-hamburger.svg';
import close from '../public/assets/shared/icon-close.svg';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
     
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    }

    return (
      <div className='p-[24px] flex items-center justify-between'>
      <Image src={logo} alt="" width={40} height={40}/>
      {isOpen ? <Image src={hamburger} alt="" onClick={toggleOpen} width={24} height={21}/> : <Image src={close}  onClick={toggleOpen} alt='' width={20} height={20}/> }
      </div>
    );
  };
  
  export default Header;