import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import '../App.css'
import { clear, deleteFromCart, minus, plus } from "../rtk/slices/cart-slice";
export default function Cart() {
    let cartProducts = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    let total = cartProducts.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    return (
        <Container className="mt-4">
            <h1>Cart Products</h1>
            <button className="btn btn-warning btn-lg" onClick={() => dispatch(clear())}>Clear All</button>
            <h2>total: {total.toFixed(3)}$</h2>
            {cartProducts.map((product) => {
                return (
                    <div className="parentcart mt-4 mb-4" key={product.id}>
                        <img src={product.image} />
                        <div className="disc">
                            <h2>title: {product.title}</h2>
                            <h5>{product.description}</h5>
                            <h3>quantity: {product.quantity}</h3>
                            <span className="fs-5">rate: {product.rating.rate}</span>
                            <span className="m-2 fs-5">count rate: {product.rating.count}</span>
                            <span className="m-2 fs-5">Price: {product.price}</span>
                            <button className="btn btn-danger btn-sm m-2" onClick={() => dispatch(deleteFromCart(product))}>delete</button>
                            <button className="btn btn-danger btn-sm m-2" onClick={() => dispatch(plus(product))}>add quantity</button>
                            <button className="btn btn-danger btn-sm m-2" onClick={() => dispatch(minus(product))}>delete quantity</button>
                        </div>
                    </div>
                )
            })
            }
        </Container>
    )
}