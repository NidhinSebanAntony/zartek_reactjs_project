import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header"
import BasicTabs from "../components/BasicTabs"
import {getData} from '../redux/actions/productAction'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    spinner: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
    }
});
const Home = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getData())
    },[])
    const loading = useSelector((state)=>state.data.loading)
    
    return(
        <>
            {loading?
                <Box className={classes.spinner}>
                    <CircularProgress color="error"/>
                </Box> 
                :
                <>
                    <Header />
                    <BasicTabs />
                </>
            }
        </>
    )
}

export default Home