import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.headerIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.header.homeTitle}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.header.infoTitle}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{settings.header.faqTitle}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;