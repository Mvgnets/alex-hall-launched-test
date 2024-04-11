import React from 'react';
import { Alert, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


interface IFormInput {
    email: string
    password: string
}

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        navigate('/users');
    }

    return (
        <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mt: 3 }}>
                    Alex Hall - Launched Test
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mt: 3 }}>
                    Login
                </Typography>
                <Stack spacing={2} alignItems={'center'}>
                    <TextField label="Email" fullWidth {...register('email', { required: 'Email is required', minLength: { value: 8, message: 'Email must contain more than 7 characters' }, pattern: { value: /\S+@\S+\.\S+/, message: 'email must be in the format abc@xyz.com' } })} id="email" name="email" />
                    {errors.email && <Alert severity="error" sx={{ my: 1 }}>{errors.email.message}</Alert>}

                    <TextField label="Password" fullWidth {...register('password', { required: 'Password is required', minLength: { value: 9, message: 'Password must contain more than 8 characters' } })} id="password" name="password" />
                    {errors.password && <Alert severity="error" sx={{ my: 1 }}>{errors.password.message}</Alert>}
                    <Button variant="contained" type='submit' sx={{ width: '10rem' }}>Continue</Button>
                </Stack>

            </form>
        </Container>
    );
}

export default Login;
