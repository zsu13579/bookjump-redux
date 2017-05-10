/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { connect } from 'react-redux'

class Navigation extends React.Component {
  render() {
	const {username}=this.props;
    return username ? (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/home">Home</Link>
		<Link className={s.link} to="/allbooks">All books</Link>
        <Link className={s.link} to="/mybooks">My books</Link>
		<Link className={s.link} to="/profile">My profile</Link>
        <span className={s.spacer}> | </span>
        <a className={s.link} href="/logout">Log out</a>		
      </div>
    ) : 
	(
      <div className={s.root} role="navigation">
		<Link className={s.link} to="/home">Home</Link>
        <Link className={s.link} to="/login">Log in</Link>
        <span className={s.spacer}>or</span>
        <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.email
  }
}

export default connect(mapStateToProps)(withStyles(s)(Navigation));
