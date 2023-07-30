import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    // Lógica para manejar el envío del formulario, como hacer una solicitud a la API de inicio de sesión
    reset(); // Restablecer los campos del formulario
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: 'Ingrese su email' })} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div><br />
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: 'Ingrese su contraseña' })} />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
