import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static proptypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageBack={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column colTitle={'Shopping List'} />
          <Column colTitle={'Quotes Worth Remembering'} />
          <Column colTitle={'Appointments'} />
        </div>
      </section>
    )
  }
}

export default List;
