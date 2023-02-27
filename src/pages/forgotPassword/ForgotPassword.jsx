import React from 'react'
import Header from '../../components/header/Header'
import { ErrorMsgContainer, ForgotButton, ForgotContainer, ForgotParagraph, InputForgot, InputForgotContainer, LabelInput } from './forgotPasswordStyles'
import { Formik , ErrorMessage } from 'formik'
import { ErrorParagraph } from '../../components/checkoutForm/checkoutForm/checkoutFormStyles'
import { resetPassword } from '../../firebase/firebase-utils'
//esta funcion  es para que el usuario restablezca su contraseña. 
const ForgotPassword = () => {
  return (
    <>
    <Header/>
    <ForgotContainer>
    <ForgotParagraph>
        Por favor ingrese su email con el que se registró para poder recuperar la contraseña.
    </ForgotParagraph>
    <Formik
    initialValues= {{
        email : "",
    }}
    validate={(values) => {
        //recibe los valores del initial values, en este caso solamente del email. 
        let errores = {}
        if(!values.email){
            //en el caso que no haya ingresado un email , se le muestra un mensaje de error diciendo que lo introduzca.
            errores.email ="Por favor ingrese un mail."
        }else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(values.email)){
            //si el usuario ingresa un formato que no es de tipo email , se le pide que ingrese un email. 
            errores.email = "Ingrese un email valido por favor"
          
        }
        return errores;
    }}
    onSubmit={ async (values , {resetForm})=> {
        //cuando el formulario se es enviado , se utiliza la funcion de restablecer el email de firebase, con el valor de email. luego se formatea el formulario nuevamente. 
        await resetPassword(values.email)
        resetForm(values)
    }}
    >
    {({errors})=> (
        <InputForgotContainer>
     
        <InputForgot
        placeholder='ingrese el email '
        type="text"
        name="email"
        >  
        </InputForgot>
        <ForgotButton type="submit">Enviar</ForgotButton>
        {errors && (<ErrorMessage
        name='email'
        component={()=> <ErrorParagraph>{errors.email}</ErrorParagraph>}
        >
        </ErrorMessage>)}
       </InputForgotContainer>
    
   
    )}
        
  

    </Formik>
   
    </ForgotContainer>
    </>
  )
}

export default ForgotPassword