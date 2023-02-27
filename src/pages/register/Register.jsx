import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { ButtonRegister, RegisterErrorMsg,  RegisterContainer, RegisterFormContainer, RegisterInput, RegisterInputContainer, RegisterParagraph, RegisterParagraphContainer, RegisterTitle, UserLogoContainer, UserRegisterLogo } from './registerStyles'
import { Formik  , ErrorMessage } from 'formik'
import { createUser } from '../../firebase/firebase-utils'
//este es el formulario de register para un usuario nuevo. 
const Register = () => {
    const navigate = useNavigate()
  return (
    <>
    <Header/>
   <Formik
   //se le va a pedir al usuario , email , nombre de usuario y una contraseña. 
    initialValues={{
        email : "",
        user: "",
        password: "",
       
    }}
    validate= {(values) => {
        let errores = {}
        if(!values.user){
            //si el usuario no ingresa un nombre de usuario , se le pedira uno 
            errores.user = "ingrese un usuario"
           
        }
        if(!values.email){
            //si no ingresa un email , se le pedira uno , caso contrario se evalua que el email sea de formato email 
            errores.email  = "ingrese un mail "
        }else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(values.email)){
            errores.email = "Ingrese un email valido Por Favor "
        }
        if(!values.password){
            //si no ingresa una contraseña se le pedira una, caso contrario al ingresarla se le evaluara que la contraseña sea de entre 8 a 30 caracteres , que contenga al menos 1 mayuscula  y  al menos 1 numero .
            errores.password = "ingrese una contraseña"
        }else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/.test(values.password)){
            errores.password = "debe tener al entre 8 y 16 caracteres, al menos un dígito, una minúscula una mayúscula."
        }
      
        return errores;
    }}
    onSubmit={async (values , {resetForm}) => {

        //cuando el formulario se envie, se intentara crear un usuario via firebase, pasandole como parametro los campos que el usuario ingresó , si el usuario ingresado ya existe, se le muestra una alerta de eso. si no  el usuario va a ser creado. luego se resetea el formulario
        try{
            await createUser(values.email , values.password , values.user)
        }
        catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("email en uso ")
            }
        }
        resetForm();
        
    }}
   >

   {({errors})=> (
  
     <RegisterContainer>
       
     <UserLogoContainer>
     <UserRegisterLogo/>
     </UserLogoContainer>

     <RegisterFormContainer>
    <RegisterTitle>Registrate</RegisterTitle>
     <RegisterInputContainer>
     <RegisterInput
         placeholder="Ingrese un email "
         type="text" 
         name="email">
         </RegisterInput>
         {errors && 
            (
            <ErrorMessage
            name="email"
            component={() => 
                <RegisterErrorMsg>{errors.email}</RegisterErrorMsg>
            }
            >

            </ErrorMessage>)}

         <RegisterInput
         placeholder="Ingrese un  usuario"
         type="text" 
         name="user">
         </RegisterInput>
         {errors && 
            (
            <ErrorMessage
            name="user"
            component={() => 
                <RegisterErrorMsg>{errors.user}</RegisterErrorMsg>
            }
            >

            </ErrorMessage>)}
         <RegisterInput 
         placeholder="Ingrese una contraseña "
         type="password"
         name="password"
         >
         </RegisterInput>
         {errors && 
            (
            <ErrorMessage
            name="password"
            component={() => 
                <RegisterErrorMsg>{errors.password}</RegisterErrorMsg>
            }
            >

            </ErrorMessage>)}
        
     </RegisterInputContainer>
     <RegisterParagraphContainer>
         <RegisterParagraph onClick={() => navigate("/login")}>¿Ya tenes una cuenta?</RegisterParagraph>
     </RegisterParagraphContainer>
     <ButtonRegister type='submit'>Registrarme</ButtonRegister>
 </RegisterFormContainer>
 

 </RegisterContainer>
   )}
   
    </Formik>
  
    
    </>
  )
}

export default Register