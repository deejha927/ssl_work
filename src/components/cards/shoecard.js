import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
export default function ShoeCard(data) {

    return (
        <>
            {
                data?.shoe.map((data, key) =>

                    <Grid item xs={12} md={4} key={key} mt={3}>
                        <Link to={"product/" + data?.id} style={{ textDecoration: "none" }}>
                            <Card sx={{ maxWidth: "100%", boxShadow: "0" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={data?.image}
                                        alt={data?.title}
                                        style={{ height: "150px" }}
                                    />
                                </div>
                                <CardContent>
                                    <Typography color="text.secondary" component="div"
                                        style={{ textAlign: "center", fontSize: "15px" }}
                                    >
                                        {data?.title}
                                    </Typography>
                                    <Typography component="div"
                                        style={{ textAlign: "center", fontWeight: "700", fontSize: "15px" }}
                                    >
                                        {"$" + data?.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>

                )
            }
        </>
    );
}

export const ShoeCardSkeleton = () => {
    const skeletonStyle = {
        moveToCenter: {
            marginTop: "1em",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
    return (
        <>
            <Grid container spacing={2} mt={5}>
                {[...Array(6)].map((x, i) =>
                    <Grid item xs={12} md={4} key={i}>
                        <Skeleton variant="rectangular" sx={{ width: "100%", height: "150px", marginTop: "1em" }} animation="wave" />
                        <div style={skeletonStyle.moveToCenter}>
                            <Skeleton variant="text" width={200} animation="wave" />
                        </div>
                        <div style={skeletonStyle.moveToCenter}>
                            <Skeleton variant="text" width={100} animation="wave" />
                        </div>
                    </Grid>
                )}
            </Grid>
        </>

    )

}