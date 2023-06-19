const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_RECETAS = import.meta.env.VITE_API_RECETAS;

export const crearReceta = async (receta) => {
    try {
        const respuesta = await fetch(URL_RECETAS,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta
    } catch (error) {
        console.log(error);
    }
}