import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from '../redux/actions/cartAction';
export default function CartButton({product}) {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.cart.productsInCart.map(dish => dish.id === product.dish_id? dish.count: null))
  return (
    <ButtonGroup disableElevation variant="contained" color='success'>
        <Button style={{border: 'none', borderTopLeftRadius: 25, borderBottomLeftRadius: 25}} onClick={()=>dispatch(deleteFromCart(product.dish_id))}>-</Button>
        <div style={{padding: '5px 10px', background: '#357a38', color: '#fff'}}>{count.some(el => el !== null) && count.length>0? count: 0}</div>
        <Button style={{border: 'none', borderTopRightRadius: 25, borderBottomRightRadius: 25}} onClick={()=>dispatch(addToCart(product.dish_id))}>+</Button>
    </ButtonGroup>
  );
}