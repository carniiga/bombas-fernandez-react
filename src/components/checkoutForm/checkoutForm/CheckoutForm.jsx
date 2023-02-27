import React from "react";
import {
  ButtonConfirmed,
  ButtonContainer,
} from "../../checkoutForm/checkoutForm/checkoutFormStyles";
import {
  CheckoutContainer,
  CheckoutParagraph,
  CheckoutTitle,
  ErrorParagraph,
  FormContainer,
  InputCheckout,
  InputCheckoutContainer,
  InputsCheckoutContainer,
 
} from "./checkoutFormStyles";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch  } from "react-redux";
import * as cartActions  from "../../../redux/cart/cart-actions"

import * as userDetailsActions from "../../../redux/userDetails/userDetails-actions"

// este componente se encarga de confirmar la compra del usuario si es que lo desea, utilizando formik 
const CheckoutForm = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>
          ingresa tus datos para completar el pedido.
        </CheckoutTitle>
        <Formik
        //se le pide al usuario algunos datos personales como nombre , apellido y celular para contactarlo con el despues de la compra. 
          initialValues={{
            nombre: "",
            apellido: "",
            tel: "",
          }}
          validate={(values) => {
            //validacion de datos. 
            let errores = {};
            if (!values.nombre) {
              //si el usuario no ingresa nombre , se le pedira uno. Caso contrario se evaluara que el nombre sea correcto. 
              errores.nombre = "Por favor ingresá un Nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
              errores.nombre =
                "El  nombre tiene que tener mas de 4 letras y sin numeros.";
            }
            if (!values.apellido) {
              // si el usuario no ingresa un apellido, se le pedira uno .Caso Contrario  se evaluara que el apellido sea de formato valido. 
              errores.apellido = "Por favor ingresá un Apellido";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellido)) {
              errores.apellido =
                "El  Apellido  tiene que tener mas de 4 letras y sin numeros.";
            }
            if (!values.tel) {
              //si no ingresa un numero de telefono de le pedira uno. Caso contrario se evaluara que sea formato numero y que tenga  un maximo de 10 digitos para Argentina.
              errores.tel = "Por favor ingresá un Telefono";
            } else if (!/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/.test(values.tel)) {
              errores.tel =
                "no puede contener letras y tiene que contener 10 digitos. ";
            }

            return errores;
            
          }}
          onSubmit = {(values , {resetForm})=> {
            //cuando se envia el formulario. se va a despachar a nuestro estado global el resumen de los campos rellenados, y se lo envia a la pagina "felicitaciones" , para informarle que ya ha comprado . cuando se complete esta compra, se vacia el carro y se resetea el formulario. 
            dispatch(userDetailsActions.resumenDescription(values))
            navigate("/felicitaciones")
            dispatch(cartActions.clear_cart())
            resetForm(values)
          }}
      
        >
          {({ errors   }) => (
            <FormContainer>
              <InputsCheckoutContainer>
                <InputCheckoutContainer>
                  <CheckoutParagraph> Nombre : </CheckoutParagraph>
                  <InputCheckout type="text" name="nombre"></InputCheckout>
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <ErrorParagraph>{errors.nombre}</ErrorParagraph>
                    )}
                  ></ErrorMessage>
                </InputCheckoutContainer>
                <InputCheckoutContainer>
                  <CheckoutParagraph> Apellido : </CheckoutParagraph>
                  <InputCheckout type="text" name="apellido"></InputCheckout>
                  <ErrorMessage
                    name="apellido"
                    component={() => (
                      <ErrorParagraph>{errors.apellido}</ErrorParagraph>
                    )}
                  ></ErrorMessage>
                </InputCheckoutContainer>
                <InputCheckoutContainer>
                  <CheckoutParagraph>Cel : </CheckoutParagraph>
                  <InputCheckout type="text" name="tel"></InputCheckout>
                  <ErrorMessage
                    name="tel"
                    component={() => (
                      <ErrorParagraph>{errors.tel}</ErrorParagraph>
                    )}
                  ></ErrorMessage>
                </InputCheckoutContainer>
              </InputsCheckoutContainer>
              <ButtonContainer>
                <ButtonConfirmed type="submit" >
                  Confirmar Pedido </ButtonConfirmed>
              </ButtonContainer>
            </FormContainer>
          )}
        </Formik>
      </CheckoutContainer>
    </>
  );
};

export default CheckoutForm;
