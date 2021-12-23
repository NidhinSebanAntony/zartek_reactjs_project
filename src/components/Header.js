import Logo from "./Logo";
import { makeStyles } from '@material-ui/core/styles';
import Cart from "./Cart";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    header: {
      color: '#878787',
      fontFamily: 'serif',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    icon_my_orders: {
        display: 'flex',
        alignItems: 'center',
    },
    my_orders: {
        margin: '0px 15px'
    }
});

const Header = () => {

    const classes = useStyles();
    const title = useSelector((state) => state.data.data[0]?.restaurant_name)

    return(
        <div className={classes.header}>
            <Logo title={title}/>
            <div className={classes.icon_my_orders}>
                <p className={classes.my_orders}>My Orders</p>
                <Cart />
            </div>
        </div>
    )
}

export default Header;