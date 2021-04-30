import {PRODUCT_DETAILS_ERROR,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST}
                         from '../Constants/ProductDetailsConstant'

export const ProductDetailsReducer = (state = {loading:true},action)=>{
switch(action.type){
case PRODUCT_DETAILS_REQUEST : return {loading:true}
case PRODUCT_DETAILS_SUCCESS : return {loading:false,product:action.payload}
case PRODUCT_DETAILS_ERROR : return {loading:false,error:action.payload}
default : return state
}
}