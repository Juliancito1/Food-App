import { useState } from "react";
import { Form , Container, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {
    const{register,handleSubmit,reset,formState: {errors}} = useForm()
    const[formu,setFormu] = useState(false)
    const onSubmit = () => {
        console.log('submit')
    }
    return (
        <Container className="text-light my-5 mainPage">
          {formu? <h1 className="display-4 text-center">Editar Producto</h1> : <h1 className="display-4 text-center">Crear Producto</h1> }
            <hr></hr>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formProducto">
            <Form.Label>Receta*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Milanesa con Pure" 
            {...register("nombreReceta",{
                required: 'El nombre de la receta es obligatorio y debe comenzar con mayúscula',
                minLength:{
                  value: 2,
                  message: 'El nombre de la receta  debe contener como mínimo 2 carácteres'
                },
                maxLength:{
                  value: 45,
                  message: 'El nombre de la receta  debe contener como máximo 45 carácteres'
                },
                pattern:{
                  value: /^[A-Z][A-Za-z]{1,44}$/,
                  message: 'El nombre de la receta  solo puede contener letras y debe comenzar con mayúscula'
                }
              })}/>
              <Form.Text className="text-danger">
                {errors.nombreReceta?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control type="text" placeholder="Ej: https://img-global.cpcdn.com/recipes/4ceea74e946533eb/400x400cq70/photo.jpg" 
            {...register("imagen",{
                required: 'La URL de la Imagen es obligatoria y debe terminar con .jpg/.png/.svg',
                pattern:{
                  value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg)$/,
                  message: 'La URL de la Imagen debe terminar con .jpg/.png/.svg'
                }
              })}/>
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIngredientes">
              <Form.Label>Ingredientes*</Form.Label>
              <Form.Control as="textarea" placeholder="Ej. Ingredientes: 1kg de Carne (Nalga, Bola de Lomo)" rows={4}{...register('ingredientes',{
                required:'Los Ingredientes de la receta son obligatorios',
                minLength:{
                  value: 5,
                  message: 'Los ingredientes de la receta deben contener como mínimo 5 carácteres'
                },
                maxLength:{
                  value: 300,
                  message: 'Los ingredientes de la receta deben contener como máximo 300 carácteres'
                },
                pattern:{
                  value: /^[A-Za-z0-9:,.()\s]{4,299}$/,
                  message: 'Los ingredientes de la receta solo pueden contener letras, numeros y signos de puntuación (",",".",":") y parentesis de ser necesario'
                }
              })}></Form.Control>
              <Form.Text className="text-danger">
              {errors.ingredientes?.message}
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasos">
              <Form.Label>Pasos*</Form.Label>
              <Form.Control as="textarea" placeholder="Ej. Paso 1: Cortar una cebolla" rows={4}
              {...register('pasos',{
                required:'Los pasos a seguir de la receta son obligatorios',
                minLength:{
                  value: 5,
                  message: 'Los pasos a seguir de la receta deben contener como mínimo 5 carácteres'
                },
                maxLength:{
                  value: 700,
                  message: 'Los pasos a seguir de la receta deben contener como máximo 700 carácteres'
                },
                pattern:{
                  value: /^[A-Za-z0-9:,.()\s]{4,699}$/,
                  message: 'Los pasos a seguir de la receta solo pueden contener letras, numeros, signos de puntuación (",",".",":") y parentesis de ser necesario'
                }
              })}></Form.Control>
              <Form.Text className="text-danger">
              {errors.pasos?.message}
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Guardar</Button>
            </Form>
        </Container>
    );
};

export default FormularioReceta;