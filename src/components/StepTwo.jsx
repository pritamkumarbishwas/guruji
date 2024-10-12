import React from 'react';
import { Grid,Typography, TextField } from '@mui/material';

const StepTwo = ({ formData, handleInputChange, errors }) => (
    <>
     <Typography variant="h5" component="h1" gutterBottom>
     Address Information
        </Typography>
        <Grid item xs={12}>
            <TextField
                label="Address Line 1"
                name="addressOne"
                value={formData.addressOne}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.addressOne}
                helperText={errors.addressOne}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Address Line 2"
                name="addressTwo"
                value={formData.addressTwo}
                onChange={handleInputChange}
                fullWidth
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.city}
                helperText={errors.city}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.state}
                helperText={errors.state}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Zip Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.zipCode}
                helperText={errors.zipCode}
            />
        </Grid>
    </>
);

export default StepTwo;