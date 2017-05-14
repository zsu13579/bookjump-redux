/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import UserType from '../types/UserType';

const BookItemType = new ObjectType({
  name: 'BookItem',
  fields: {
    _id: { type: StringType },
    owner: { type: StringType },
    borrower: { type: StringType },
	  isBorrowed: { type: new NonNull(StringType) },/* 0: not borrowed, 1: request for borrow, 2: borrowed  */
	  title: { type: new NonNull(StringType) },
    link: { type: StringType },
  },
});

export default BookItemType;
