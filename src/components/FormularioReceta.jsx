import { Form , Container, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {
    const{register,handleSubmit,reset,formState: {errors}} = useForm()

    const onSubmit = () => {
        console.log('submit')
    }
    return (
        <Container className="text-light my-5">
            <h1 className="display-4 text-center">Crear Receta</h1>
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
            <Button variant="primary" type="submit">Guardar</Button>
            </Form>
        </Container>
    );
};

export default FormularioReceta;