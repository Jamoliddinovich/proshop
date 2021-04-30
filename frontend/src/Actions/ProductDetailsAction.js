import {
    PRODUCT_DETAILS_ERROR,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST
}
    from '../Constants/ProductDetailsConstant'
import axios from 'axios'


export const ProductDetailsAction =(id)=> {return async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const res = await axios.get(`/api/products/${id}`)
        const data = await res.data;
        const data0 = await data[0]
        
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data0 })
    } catch (err) {
        dispatch({ type: PRODUCT_DETAILS_ERROR, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}
}