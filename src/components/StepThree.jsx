import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const StepThree = ({ formData }) => (
    <Box
        sx={{
            maxWidth: '600px', // Limit the maximum width for larger screens
            margin: '0 auto',
            padding: '1rem', // Added padding for better spacing
        }}
    >
        <Typography variant="h5" component="h1" align="center">
            Review Your Details
        </Typography>
        <Paper elevation={0} sx={{ padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
        <Grid container >
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            Name:
                        </Typography>
                        <Typography>{formData.name}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            Email:
                        </Typography>
                        <Typography>{formData.email}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            Phone:
                        </Typography>
                        <Typography>{formData.phone}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            Address Line 1:
                        </Typography>
                        <Typography>{formData.addressOne}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            Address Line 2:
                        </Typography>
                        <Typography>{formData.addressTwo}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            City:
                        </Typography>
                        <Typography>{formData.city}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            State:
                        </Typography>
                        <Typography>{formData.state}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold">
                            Zip Code:
                        </Typography>
                        <Typography>{formData.zipCode}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    </Box>
);

export default StepThree;
