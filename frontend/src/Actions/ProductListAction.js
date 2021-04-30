import {
    PRODUCT_LIST_ERROR,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST
}
    from '../Constants/ProductListConstant'
import axios from 'axios'

export const ProductListAction =()=> async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

    } catch (err) {
        dispatch({ type: PRODUCT_LIST_ERROR, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}