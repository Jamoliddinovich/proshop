import React, { useEffect, useState } from 'react'
import { Col, Row, Container, ListGroup, Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ProductDetailsAction } from '../Actions/ProductDetailsAction'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

function ProductsScreen({history, match }) {
    let [qty, setQty] = useState(0)
    const dispatch = useDispatch()
    const ProductD = useSelector(state => state.ProductDetails)
    const { loading, product, error } = ProductD
    useEffect(() => {
        dispatch(ProductDetailsAction(match.params.id))
    }, [dispatch, match]);
    return (
        <>
            {loading ? <div style={{ textAlign: 'center' }}><Loader></Loader> </div> : error ? <Message variant='danger' message={error}></Message> :
                <Container>
                    <Row style={{ marginTop: '40px' }}>
                        <Col lg={6} sm={12}>
                            <img src={product.image} alt={product.name} style={{ width: '100%' }}></img>
                        </Col>
                        <Col lg={3} sm={12}>
                            <ListGroup variant="flush">
                                <ListGroup.Item as="h2"> {product.name}</ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="rate"><i className={`${product.rating >= 0.5 ? "fas fa-star" : product.rating > 0 ? "fas fa-star-half-alt" : "far fa-star"}`}></i></span>
                                    <span className="rate"><i className={`${product.rating >= 1.5 ? "fas fa-star" : product.rating > 1 ? "fas fa-star-half-alt" : "far fa-star"}`}></i></span>
                                    <span className="rate"><i className={`${product.rating >= 2.5 ? "fas fa-star" : product.rating > 2 ? "fas fa-star-half-alt" : "far fa-star"}`}></i></span>
                                    <span className="rate"><i className={`${product.rating >= 3.5 ? "fas fa-star" : product.rating > 3 ? "fas fa-star-half-alt" : "far fa-star"}`}></i></span>
                                    <span className="rate"><i className={`${product.rating >= 4.5 ? "fas fa-star" : product.rating > 4 ? "fas fa-star-half-alt" : "far fa-star"}`}></i></span>
                                    <span className="review">{`  `}{product.numReviews} reviews</span>
                                </ListGroup.Item>
                                <ListGroup.Item>Price : {product.price} $</ListGroup.Item>
                                <ListGroup.Item>description : {product.description}</ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col lg={3} sm={12}>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price</Col>
                                        <Col>{product.price} $</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>{product.countInStock > 0 ? "In Stock" : "Disabled"}</Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col md={6} lg={4} xl={6}>Quantity</Col>
                                            <Col md={6} lg={8} xl={6}>
                                                <Form.Control as="select" value={qty} onChange={(e) => {
                                                    setQty(e.target.value)
                                                }}>
                                                    {

                                                        [...Array(product.countInStock).keys()].map((x, i) => {
                                                            return (
                                                                <option key={i + 1} value={i + 1}>
                                                                    {i + 1}
                                                                </option>
                                                            )
                                                        })
                                                    }                                            </Form.Control> </Col>
                                        </Row>
                                    </ListGroup.Item>)}
                                <ListGroup.Item  style={{ textAlign: 'center' }}>
                                    <Button disabled={product.countInStock > 0 ? false : true}
                                     onClick={()=>{history.push(`/cart/${match.params.id}/?qty=${qty}`)}}>
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>
                    </Row>
                </Container>}
        </>
    )
}

export default ProductsScreen
