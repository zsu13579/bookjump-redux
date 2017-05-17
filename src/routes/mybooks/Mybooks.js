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
import s from './Mybooks.css';
import { Alert,Button,Panel,Accordion } from 'react-bootstrap';
import { connect } from 'react-redux'

class Mybooks extends React.Component {
    
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...args) {
    super(...args);
    // this.state = {
      // yourRequestOpen: false,
      // RequestForYouOpen: false,
      // myReqBooks: this.props.myReqBooks,
      // reqForMyBooks: this.props.reqForMyBooks,
    // };
  }


  render() {
	const { value, onIncreaseClick } = this.props
    return (
      <div className={s.root}>
        <div className={s.container}>
        <br/>
        <Accordion>
          <Panel header={'Your Trade requests('+ this.props.myReqBooks.length +' outstanding)'} bsStyle="info" eventKey="1">
            <div className={s.bookList}>
            {this.props.myReqBooks.map(item => (
              <h4 className={s.newsTitle}><a href={item.link}>{item.title}</a></h4>
            ))}
            </div>
          </Panel>
          <Panel header={'Trade requests for you('+ this.props.reqForMyBooks.length +' unapproved)'} bsStyle="info" eventKey="2">
            <div className={s.bookList}>
            {this.props.reqForMyBooks.map(item => (
              <h4 className={s.newsTitle}><a href={item.link}>{item.title}</a>&nbsp;<a><i id={item.id} onClick={handleClick} className="fa fa-thumbs-o-up"></i></a></h4>
            ))}
            </div>
          </Panel>
        </Accordion>

          <h1>{this.props.title}</h1>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="title">
                Book's Name: 
              </label>
              <input
                className={s.input}
                id="title"
                type="text"
                name="title"
                autoFocus
              />
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Add
              </button>
            </div>
          </form>
		  <div className={s.bookList}>
			<h1></h1>
			{this.props.myAllBooks.map(item => (
            <article className={s.newsItem}>
              <h2 className={s.newsTitle}><a href={item.link}>{item.title}</a></h2>
            </article>
			))}
		  </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    handleClick: (e) => dispatch(reqForMyBooks({id:e.target.id}))
  }	
} 
export default connect(false,mapDispatchToProps)(withStyles(s)(Mybooks));
