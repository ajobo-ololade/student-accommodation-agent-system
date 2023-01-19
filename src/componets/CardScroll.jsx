import React, { useEffect } from 'react';
// , { useEffect }
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Card, Link, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import one from "../assets/citybackpackers1.jpg"
import two from "../assets/Como-Montar-um-Hostel-1200x900.jpg"
import three from "../assets/jztna-tzVt5ELC89w-unsplash.jpg"
import four from "../assets/marcus-loke-WQJvWU_HZFo-unsplash.jpg"
import five from "../assets/merlin_174147483_ab6611b2-b57f-49ac-86bd-baa4c4892881-mobileMasterAt3x.jpg"
import six from "../assets/mosaic-hostel-belgrade.jpg"
import seven from "../assets/nick-kimel-GrLnSHJT1fI-unsplash.jpg"
// import nine from "../assets/toa-heftiba-bnoPZ9aTyWQ-unsplash.jpg"
import Label from '../componets/Label/Label';
import axios from 'axios';
// import axios from 'axios';

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
const products = [
    {
        status: 'sold',
        name: 'bold hostel',
        image: one,
        price: '$4,000',
        location: 'L.A'
    },
    {
        status: 'on sale',
        name: 'bold hostel',
        image: two,
        price: '$4,000',
        location: 'L.A'
    },
    {
        status: 'sold',
        name: 'bold hostel',
        image: three,
        price: '$4,000',
        location: 'L.A'
    },
    {
        status: 'on sale',
        name: 'bold hostel',
        image: four,
        price: '$4,000',
        location: 'L.A'
    }
    , {
        status: 'sold',
        name: 'bold hostel',
        image: five,
        price: '$4,000',
        location: 'LA'
    }
    ,
    {
        status: 'on sale',
        name: 'bold hostel',
        image: six,
        price: '$4,000',
        location: 'L.A'
    },
    {
        status: 'sold',
        name: 'bold hostel',
        image: seven,
        price: '$4,000',
        location: 'L.A'
    }
]
const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});
const Example = () => {
    useEffect(() => {
        const hostel = axios.get(`http://127.0.0.1:8000/api/accommodations/public`).then((res) => {
            console.log(res.data);
        });
        // console.log(hostel);
    }, [])
    
    return (
        <div>
            <Box sx={{ textAlign: 'center', marginTop: "10px" }}>
                <Typography variant='h5'>Hostels</Typography>
                <Typography variant='p' sx={{ color: 'primary.main' }}>Available hostels for sale</Typography>
            </Box>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} >
                {/* <Grid container p={2} spacing={3} > */}
                {products.map(({ status, name, image, price, location }, id) => (
                    <Grid key={id} item xs={12} sm={6} md={3} sx={{ padding: "1rem", backgroundColor: "white", }}>
                        <Card>
                            <Box sx={{ pt: '100%', position: 'relative' }}>
                                {status && (
                                    <Label
                                        variant="filled"
                                        color={(status === 'sold' && 'error') || 'info'}

                                        sx={{
                                            zIndex: 9,
                                            top: 16,
                                            right: 16,
                                            position: 'absolute',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {status}
                                    </Label>
                                )}
                                <StyledProductImg alt={'name'} src={image} />
                                <img src={image} />

                            </Box>

                            <Stack spacing={2} sx={{ p: 3 }}>
                                <Link color="inherit" underline="hover">
                                    <Typography variant="subtitle2" noWrap>
                                        {name}
                                    </Typography>
                                </Link>

                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    {/* <ColorPreview colors={colors} /> */}
                                        <Typography
                                            component="span"
                                            variant="p"
                                            sx={{
                                                fontSize: "12px"
                                            }}
                                        >
                                            {location}
                                        </Typography>
                                    <Typography variant="p" sx={{
                                                fontSize: "12px"
                                            }}>
                                        &nbsp;
                                        {price}
                                        {/* {fCurrency(price)} */}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
                {/* </Grid> */}
            </Slide>
        </div>
    );
};

export default Example;