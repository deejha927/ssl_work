import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
export default function MasonryImageList() {
    return (
        <Box sx={{ width: "100%", height: 450, overflowY: 'auto', scrollbarWidth: "none" }}>
            <ImageList variant="masonry" cols={4} gap={8}>
                {itemData.map((item) => (
                    <>
                        <ImageListItem key={item.img} >

                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{ marginBottom: "0.5em" }}
                            />
                        </ImageListItem>

                    </>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Bed',
    },
    {
        img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
        title: "Exercise"
    },
    {
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Exercise"
    },


];
