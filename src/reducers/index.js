import {combineReducers} from 'redux';
import products from './products';
import bestsellers from './bestsellers';
import cart from './cart';
import message from './message';
import douongs from './douongs';
import trangmiengs from './trangmiengs';
const appReducers =  combineReducers({
    products,
    bestsellers,
    cart,
    message,
    douongs,
    trangmiengs,
});

export default appReducers;