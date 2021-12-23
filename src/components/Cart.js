import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

const Cart = () => {
    const cartCount = useSelector((state)=>state.cart.cartCount)
    return(
        <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon color='#878787'/>
        </Badge>
    )
}

export default Cart;