import React, { useEffect } from "react";
import { signInWithGoogle } from "../../firebase/firebase-utils";
import {
  ButtonLogin,
  ErrorMsg,
  FormContainer,
  FormParagraph,
  Imput,
  LoginGoogle,
  LoginGoogleContainer,
  SpanForm,
  SpanFormContainer,
} from "./FormStyles";
import { Formik, ErrorMessage } from "formik";
import {  useNavigate } from "react-router-dom";

import { signInUser  , createUserProfileDocument} from "../../firebase/firebase-utils";

//este componente maneja el Formulario de login utilizando Formik 
const Form = () => {
  const navigate = useNavigate()

  return (
   
    
    <>
      <Formik
        initialValues={{
          //al usuario se le pedira el email y contraseña previamente registradas.
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errores = {};
          if (!values.email) {
            // si el usuario no ingresa un email , se le pedira uno. Caso contrario se evaluara que sea formato Email 
            errores.email = "Por favor Ingrese un Email";
          } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(values.email)) {
            errores.email = "Ingrese un email valido Por Favor ";
          }
          if (!values.password) {
            //si no ingresa una password , se le pedira una. Caso contrario se evaluara que la password ingresada  se evaluara. Tendra que tener entre 8 y 30 caracteres , 1 mayuscula, minuscula y 1 numero 
            errores.password = "ingrese una Contraseña";
          } else if (
            !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/.test(values.password)
          ) {
            errores.password =
              "debe tener al entre 8 y 16 caracteres, al menos un dígito, una minúscula una mayúscula.";
          }

          return errores;
        }}
        onSubmit={ async (values, { resetForm }) => {
          // cuando se envie el formulario se comprobara por medio de firebase que el usuario se encuentre registrado. enviandole el mail y la contraseña previamente registada. si ese usuario no existe , es por que no esta registrado. si existe , se logeara a nuestra aplicacion.Asi mostrando algunas funcionalidades que un usuario No registrado No podrá interactuar. Por ejemplo manejo de carrito , manejo de modalUser    y checkout  
          try {
            const {user } = await  signInUser(values.email , values.password);
            createUserProfileDocument(user)
          } catch (error) {
            if(error.code === "auth/wrong-password"){
              alert("contraseña incorrecta")
            }
            if(error.code === "auth/user-not-found"){
              alert("usuario no encontrado")
            }
          }
          resetForm(values);
        }}
      >
        {({ errors }) => (
          <FormContainer>
            <SpanFormContainer>
              <SpanForm>Email :</SpanForm>
              <Imput 
              type={"text"} 
              name="email"
              ></Imput>
            </SpanFormContainer>
            {errors && (
              <ErrorMessage
                name="email"
                component={() => <ErrorMsg>{errors.email}</ErrorMsg>}
              ></ErrorMessage>
            )}
            <SpanFormContainer>
              <SpanForm>Contraseña :</SpanForm>
              <Imput type={"password"} name="password"></Imput>
            </SpanFormContainer>
            {errors && (
              <ErrorMessage
                name="password"
                component={() => <ErrorMsg>{errors.password}</ErrorMsg>}
              ></ErrorMessage>
            )}
            {/* si el usuario perdio su contraseña , se lo dirigira a la pagina para restablecer su contraseña. */}
            <FormParagraph onClick= {() => navigate("/forgotPassword")}>
              ¿Perdio Su Contraseña?{" "}
            </FormParagraph>
            {/* si el usuario no esta registrado, se lo mandara  a la pagina de registrarse.  */}
            <FormParagraph onClick={() => navigate("/register")} >
              ¿ no tenes una cuenta?{" "}
            </FormParagraph>
            <LoginGoogleContainer>
              <LoginGoogle type="button" onClick={signInWithGoogle} />
            </LoginGoogleContainer>
            <ButtonLogin >Iniciar Sesion</ButtonLogin>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default Form;
