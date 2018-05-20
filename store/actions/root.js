import { ADD_COUPON } from './actionTypes';

export const addCoupon = e => {
  return {
    type: ADD_COUPON,
    e: e
  };
};
