import {PRODUCT_LIST_ERROR,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_REQUEST}
                             from '../Constants/ProductListConstant'

export const ProductListReducer = (state= {products:[]},action)=>{
switch(action.type){
case PRODUCT_LIST_REQUEST : return {loading:true}
case PRODUCT_LIST_SUCCESS : return {loading:false,products:action.payload}
case PRODUCT_LIST_ERROR : return {loading:false,error:action.payload}
default : return state
}
}