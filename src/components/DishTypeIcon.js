import vegIcon from '../assets/veg.png'
import nonVegIcon from '../assets/non-veg.png'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    icon: {
        marginTop: 5,
        marginRight: 5
    },
});
const DishTypeIcon  = ({dishType}) => {
    const classes = useStyles();
    return(
        <div className={classes.icon}>
            {dishType === 1
            ?
            <img src={nonVegIcon} width="18px" height="18px" alt="non_veg-icon"/>
            :
            <img src={vegIcon} width="18px" height="18px" alt="veg-icon"/>}
        </div>
    )
}

export default DishTypeIcon;