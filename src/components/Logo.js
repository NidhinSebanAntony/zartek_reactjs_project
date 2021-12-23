import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        "@media (max-width: 325px)": {
            fontSize: 14
          }
    }
});
const Logo = ({title}) => {
    const classes = useStyles();

    return(
        <>
            <span className={classes.title}>{title&&title.length>0&&<h2>{title}</h2>}</span>
        </>
    )
}

export default Logo