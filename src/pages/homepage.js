import ShoeCard, { ShoeCardSkeleton } from '../components/cards/shoecard';
import MasonryImageList from '../components/gridimages/gridimages';
import { MainBanner } from '../components/banner/banner';
import { productApi } from '../apis/productapi';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
const HomePage = () => {
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState([])
    React.useEffect(() => {
        if (!product) return;
        productApi()
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
    }, []);
    return (
        <>
            <MainBanner />

            <Container maxWidth="xl" >
                <MasonryImageList />
                <Grid container spacing={2} mt={5} >
                    {loading && (<ShoeCardSkeleton />)}
                    {!loading && (<ShoeCard shoe={product} />)}
                </Grid>
            </Container>


        </>
    )
};

export default HomePage;