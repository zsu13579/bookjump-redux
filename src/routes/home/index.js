/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action({ fetch,store }) {
	let state = store.getState();
	if(!state.user.email){
		return { redirect: '/login' }
	}
    // const resp = await fetch('/graphql', {
      // body: JSON.stringify({
        // query: '{news{title,link,content}}',
      // }),
    // });
    // const { data } = await resp.json();
    // if (!data || !data.news) throw new Error('Failed to load the news feed.');
	// const vnews = {news:{title:"t1",link:"l1",content:"c1"}};
    return {
      title: 'React Starter Kit',
      // component: <Layout><Home news={data.news} /></Layout>,
	  component: <Layout><h1>welcomehome</h1></Layout>,
    };
  },

};
