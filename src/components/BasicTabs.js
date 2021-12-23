import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import Product from './Product';

function TabPanel(props) {

  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [selectedTabItem, setSelectedTabItem] = useState([])
  const categories = useSelector((state) => state.data.data[0]?.table_menu_list)
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(categories && categories.length>0)
      setSelectedTabItem(categories[0].category_dishes)
  },[categories])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor="inherit" aria-label="basic tabs example" variant="scrollable" TabIndicatorProps={{ style: { background: "red" } }}>
          {categories&&categories.length>0&&categories.map((item)=>{
            return(
              <Tab key={item.menu_category_id} label={item.menu_category} onClick={()=>setSelectedTabItem(item.category_dishes)}/>
            )
          })}
          
        </Tabs>
      </Box>
      {selectedTabItem&&selectedTabItem.length>0&&selectedTabItem.map((item, index)=>{
            return(
              <TabPanel index={index} value={index}>
                <Product 
                  product ={item}
                />
              </TabPanel>
            )
      })}
    </Box>
  );
}