import React, { useEffect, useState } from 'react';
import { MdHome } from 'react-icons/md';
import { BsGear } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/Header.module.css';
 
import Logo from '../../Assets/GSTS.png';
import LogoScrolled from '../../Assets/GSTS Blue.png';
 
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(Logo);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setLogo(scrolled ? LogoScrolled : Logo);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const menuItems = [
    { name: 'home', path: '/', icon: <MdHome size={24} />, label: 'Home' },
    { name: 'about', path: '/about', icon: <IoIosInformationCircleOutline size={24} />, label: 'About' },
    { name: 'services', path: '/servicepagen', icon: <BsGear size={24} />, label: 'Services' },
    { name: 'technology', path: '/servicepage', icon: <FaLaptopCode size={24} />, label: 'Technology' },
    { name: 'careers', path: '/careers', icon: <IoBookOutline size={24} />, label: 'Careers' },
  ];
 
  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src={logo} alt="Company Logo" className={styles.image} />
      </div>
 
      <nav className={styles.nav}>
        <ul>
          {menuItems.map((item) => {
            const listItemClass = `${styles.listItem}
              ${isScrolled ? styles.listItemHidden : ''}
              ${hovered === item.name && !isScrolled ? styles.listItemHovered : ''}`;
 
            const iconClass = `${styles.icon}
              ${isScrolled ? styles.iconVisible : ''}
              ${hovered === item.name ? styles.iconHovered : ''}`;
 
            const tooltipClass = `${styles.tooltip}
              ${isScrolled && hovered === item.name ? styles.tooltipVisible : ''}`;
 
            return (
             
<div
  key={item.name}
  className={styles.navItem}
  onMouseEnter={() => setHovered(item.name)}
  onMouseLeave={() => setHovered(null)}
>
  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
    <li className={listItemClass}>{item.label}</li>
    <div className={styles.iconWrapper}>
      <div className={iconClass}>{item.icon}</div>
      <span className={tooltipClass}>{item.label}</span>
    </div>
  </Link>
</div>
 
            );
          })}
        </ul>
      </nav>
 
      <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <button
          className={`
            ${styles.contactBtn}
            ${isScrolled ? styles.contactBtnScrolled : ''}
            ${hovered === 'contact' && !isScrolled ? styles.contactBtnHovered : ''}
            ${hovered === 'contact' && isScrolled ? styles.contactBtnHoveredScrolled : ''}
          `}
          onMouseEnter={() => setHovered('contact')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};
 
export default Header;