export const RESUMEN_DESCRIPTION = "RESUMEN_DESCRIPTION"

export const resumenDescription = description => ({
    //recibe la descripcion de los campos requeridos para completar el pedido. 
    type : RESUMEN_DESCRIPTION,
    payload : description,
})