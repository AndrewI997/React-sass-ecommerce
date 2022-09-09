import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Wrapper from '../../shared/Wrapper/Wrapper'
import { ADMIN_ROUTE, HOME_ROUTE, ITEMS_ROUTE, ABOUT_ROUTER } from '../../../consts/consts';
import styles from './Header.module.scss'

const Header = () => {
  return (

    <Wrapper>
      <header id="hed">
        <a className={styles.logo} href="#">Другая Мебель</a>
        <nav className={styles.navigation}>
          <ul>
            <li><NavLink className={styles.navLink} to={HOME_ROUTE}>Главная</NavLink></li>
            <li className={styles.droplink}>
              <NavLink className={styles.navLink} to={ITEMS_ROUTE}>Продукция</NavLink>
              {/* <div className={styles.dropdown}>
              <div className={styles.droplink2}>
                <NavLink className={styles.droplink_title} to={ITEMS_ROUTE}>Корпусная мебель</NavLink>
                <div className={styles.dropdown2}>
                  <a href="#">Кухни</a>
                  <a href="#">Шкафы</a>
                  <a href="#">Для дома</a>
                  <a href='#'>Для бизнеса</a>
                </div>
              </div>
              <div className={styles.droplink3}>
                <NavLink className={styles.droplink_title} to={ITEMS_ROUTE}>Каркасная мебель (ЛОФТ)</NavLink>
                <div className={styles.dropdown3}>
                  <a href="#">Для дома</a>
                  <a href="#">Для сада и дачи</a>
                  <a href="#">Для бизнеса</a>
                </div>
              </div>
            </div> */}
            </li>
            <li><NavLink className={styles.navLink} to={ABOUT_ROUTER}>Сервис</NavLink></li>
            <li><NavLink className={styles.navLink} to={ADMIN_ROUTE}>Новости</NavLink></li>
          </ul>
        </nav>
        <a className={styles.phone} href="tel:+79822239061">+7 (982) 223 90 61</a>
      </header>
    </Wrapper>

  )
}

export default Header