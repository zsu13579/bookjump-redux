/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Allbooks.css';

class Allbooks extends React.Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      owner: PropTypes.string,
	  borrower: PropTypes.string,
	  title: PropTypes.string.isRequired,
      link: PropTypes.string,
      isBorrowed: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>All Books</h1>
          {this.props.books.map(item => (
            <article key={item.link} className={s.newsItem}>
              <h1 className={s.newsTitle}><a href={item.link}>{item.title}</a></h1>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Allbooks);
