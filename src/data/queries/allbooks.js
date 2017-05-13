/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from 'isomorphic-fetch';
import BookItemType from '../types/BookItemType';
import UserType from '../types/UserType';
import { User, Book } from '../../data/models';
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

let items = [];

const allbooks = {

  type: new List(BookItemType),
  args: {
	  owner: {type: StringType},
  },
  resolve(root,{owner}) {
  	if(owner){
  		return Book.findAll({where: {owner:owner}});
  	}else{
  		return Book.findAll();
  	}
  },
};

export default allbooks;
