import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Grid } from '@mui/material';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';

const Form = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const [errors, setErrors] = useState({});

    // Load data from local storage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Update local storage whenever formData changes
    useEffect(() => {
        if (formData.name) {
            localStorage.setItem('formData', JSON.stringify(formData));
        }
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error for that field on input change
    };

    const validate = () => {
        const newErrors = {};
        // Validation logic
        if (currentStep === 1) {
            if (!formData.name) newErrors.name = "Name is required.";
            if (!formData.email) {
                newErrors.email = "Email is required.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = "Invalid email format.";
            }
            if (!formData.phone) {
                newErrors.phone = "Phone number is required.";
            } else if (!/^\d{10}$/.test(formData.phone)) {
                newErrors.phone = "Phone number must be 10 digits.";
            }
        } else if (currentStep === 2) {
            if (!formData.addressOne) newErrors.addressOne = "Address is required.";
            if (!formData.city) newErrors.city = "City is required.";
            if (!formData.state) newErrors.state = "State is required.";
            if (!formData.zipCode) {
                newErrors.zipCode = "Zip code is required.";
            } else if (!/^\d{6}$/.test(formData.zipCode)) {
                newErrors.zipCode = "Zip code must be exactly 6 digits.";
            }
        }
        return newErrors;
    };

    const nextStep = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, 3));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert('Form submitted successfully!');
            console.log(formData);
            // Optionally clear localStorage after form submission
            // localStorage.removeItem('formData'); 
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3 }}>
                <Box display="flex" justifyContent="space-between" mb={4}>
                    {[1, 2, 3].map((step) => (
                        <Button
                            key={step}
                            variant="contained"
                            color={currentStep === step ? "secondary" : "primary"}
                            onClick={() => {
                                const validationErrors = validate();
                                if (Object.keys(validationErrors).length === 0 || step < currentStep) {
                                    setCurrentStep(step);
                                } else {
                                    setErrors(validationErrors);
                                }
                            }}
                            disabled={currentStep === step}
                            sx={{
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                minWidth: '0',
                                padding: 0,
                            }}
                        >
                            {step}
                        </Button>
                    ))}
                </Box>
                <Grid container spacing={2}>
                    {currentStep === 1 && (
                        <StepOne formData={formData} handleInputChange={handleInputChange} errors={errors} />
                    )}
                    {currentStep === 2 && (
                        <StepTwo formData={formData} handleInputChange={handleInputChange} errors={errors} />
                    )}
                    {currentStep === 3 && <StepThree formData={formData} />}
                </Grid>
                <Box display="flex" justifyContent="space-between" mt={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                    >
                        Previous
                    </Button>
                    {currentStep < 3 ? (
                        <Button variant="contained" color="primary" onClick={nextStep}>
                            Next
                        </Button>
                    ) : (
                        <Button variant="contained" color="success" onClick={handleSubmit}>
                            Submit
                        </Button>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default Form;
