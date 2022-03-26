import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
export const Product = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>

                    </Grid>
                    <Grid item xs={12} md={4}>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
