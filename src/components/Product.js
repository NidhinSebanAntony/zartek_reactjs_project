import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CartButton from './CartButton'
import DishTypeIcon from './DishTypeIcon';
const useStyles = makeStyles({
    productContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'serif',
    },
    textColorGrey: {
        color: '#878787',
    },
    textColorRed: {
        color: 'red',
    },
    caloriesDishImg: {
        display: 'flex',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    img: {
        width: '100px', 
        height: '100px', 
        objectFit: 'cover',
        "@media (max-width: 500px)": {
            width: '50px', 
            height: '50px', 
            marginLeft: 5
          }
    },
    icon: {
        marginTop: 5,
        marginRight: 5
    },
    productTitle: {
        display: 'flex'
    }
});
const Product = ({product}) => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.productContainer}>
                <div className={classes.productTitle}>
                    <DishTypeIcon dishType={product.dish_Type}/>
                    <div>
                        <Typography variant="h6" component="div">
                            {product.dish_name}
                        </Typography>
                        <Typography variant="p" component="div">
                            {product.dish_currency} {product.dish_price}
                        </Typography>
                        <Typography variant="subtitle2" component="div" className={classes.textColorGrey}>
                            {product.dish_description}
                        </Typography>
                        {product.dish_Availability&&<CartButton product={product}/>}
                        <Typography variant="caption" display="block" className={classes.textColorRed}>
                            {product.addonCat.length>0? 'customization available': 'Not available'}
                        </Typography>
                    </div>
                </div>
                <div className={classes.caloriesDishImg}>
                    <Typography variant="subtitle2" component="div">
                        {product.dish_calories} calories
                    </Typography>
                    <img src={product.dish_image} alt={product.dish_name} className={classes.img}/>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default Product;