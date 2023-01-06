import { useState, useEffect } from 'react';
import {Box, Stack, Typography} from '@mui/material';


import { fetchFromAPI } from "../utils/fetchFromAPI";
import {SideBar, Videos} from './';


const Feed = () => {
    // DECLARE new prop selectedCategory and set new prop setSelectedCategory with useState
    const[selectedCategory, setSelectedCategory] = useState('New');
    const[videos, setVideos] = useState([]);


    useEffect( () => {
        // the CODE inside this function will only re-run when SelectedCategory changes
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
        // Below is the change of selectedCategory
    }, [selectedCategory]);


    return (
        <Stack sx={{ flexDirection: { sx:"column", md: "row"}}}>
            <Box sx={{height: {sx:'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
                {/* PASSES PROPS selectedCategory and setSelectedCategory into SideBar component */}
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography 
                    className="copyright"
                    variant="body2"
                    sx={{ mt: 1.5, color: "#fff"}}
                >
                    Copyright 2022 @ MH Media Hub
                </Typography>
            </Box>

            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                    {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed