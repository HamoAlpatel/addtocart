import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';

export default function Products() {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products)
    // console.log(products);
    // console.log(products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <Container>
            <h1>products</h1>
            <Row>
                {products.map((product) => {
                    return (

                        <Col className='mt-4' key={product.id} >
                            <Card style={{ width: '18rem',boxShadow:'0px 0px 10px rgb(0,0,0,0.2)',padding:'5px'  }}>
                                <Card.Img variant="top" style={{ height: '200px' }} src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title.slice(0,50)}...</Card.Title>
                                    <Card.Text>{product.description.slice(0,100)}...</Card.Text>
                                    <Button variant="primary" onClick={()=>{dispatch(addToCart(product))}}>add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </Container >
    )
}