import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from "../Components/product.js"
import { useDispatch, useSelector } from 'react-redux'
import { ProductListAction } from '../Actions/ProductListAction'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.ProductList)
    useEffect(() => {
        dispatch(ProductListAction())
    }, [dispatch]);
    return (<>
        <marquee direction="right" className="marq">Featured products</marquee>
        {loading ? <div style={{textAlign:'center'}}><Loader></Loader> </div>:error?<Message variant='danger' message={error}></Message>:<Container>
            <Row style={{}}>

                {products.map((d) => {
                    return (<Col key={d._id} md={6} xl={3} lg={4} style={{ justifyContent: 'center', display: 'flex', margin: '10px 0' }}>
                        <Product id={d._id} ></Product>
                    </Col>)
                })}

            </Row>
        </Container>}
    </>)
}

export default HomeScreen
