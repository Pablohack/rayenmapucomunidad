import React from 'react';
import { Box } from '@material-ui/core';
import banner from '../../utilities/img/banner1.png'
import MenuTop from './menuTop';
export default function Banner() {
    
    return (
        <Box>
            <img src={banner} width="100%" height="300px"></img>
            <MenuTop></MenuTop>
      </Box>  
    );
}