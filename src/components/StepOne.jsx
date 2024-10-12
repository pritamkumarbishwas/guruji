// src/components/StepOne.js
import React from 'react';
import { Grid,Typography, TextField } from '@mui/material';

const StepOne = ({ formData, handleInputChange, errors }) => (
    <>
        <Typography variant="h5" component="h1" gutterBottom>
        Personal Information
        </Typography>
        <Grid item xs={12}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone}
            />
        </Grid>
    </>
);

export default StepOne;
