//Es el componente donde vamos a escribir una tarea, y vamos a poder agregarla.
//Se immporat un hook para asignarle valores
import React, { useState } from "react";//  useState manejo de estados

// variables constantes donde se ingresan eventos y como parametros se le pasa unas prop que son la propedades de html
const FormTodo = props => {
  const { handleAddItem } = props; // metodo propiedades  y caracateristicas que se comparten en algun parametros  que puedo llamar a lo largo del codigo
  const [description, setDescription] = useState("");  //crea una constante  que tendra un array por defecto como parametros la variable donde se almacenara lo que el segundo argumento reciba.
  const handleSubmit = (e) => {
    e.preventDefault(); // AYuda a evitar que la pagaina se refresque y se pierda la información
    // Cuando creamos un formulario, si tiene un atributo "action" el comportamiento por defecto es redirigir la página hacia la dirección del action, sino por defecto refresca la página actual. Es decir, si necesitas que tu página web no se actualice después del submit, debería colocar event.preventDefault() en la función que maneja el evento.

    handleAddItem({//
      //Recibe unn metodo y envia unos valores (props)
      done: false,
      id: (+new Date()).toString(),//método devuelve una cadena de texto que representa el objeto
      description,
    });
    setDescription(""); //limpiar el estado para que vuelva a iniciar en blanco
  };
  return (//  Me va a retornar mi estructura html 
    //Esta función recibirá los datos del formulario si la validación del formulario es exitosa.
    <form onSubmit={handleSubmit}> 
      
      <div className="todo-list">
        <div className="file-input">

        {/* Primero agregamos los elementos input y button.
Después generamos el estado description para asignarlo al input.
Finalmente validamos el botón, sí description no tiene valor lo deshabilitamos, caso contrario lo habilitamo */}

          <input  // input espacio para agregar un dato
            type="text"
            className="text"
            value={description} // valor del texto que voy a poner en input que lo toma como valor
            onChange={e => setDescription(e.target.value)}
            // el onchance nos permite definir acciones a ejecutar cuando algo sucede. Al ser un evento como cualquier otro, debemos pasarle una función. Esta función recibe el evento que nos manda React, conocido como event. Event no es más que un objeto con ciertas características de limpieza que uniforman al evento para poder trabajar con él.

            required={description ? "" : "required"}
          />
        
          <button
            className="button pink"
            disabled={description ? "" : "disabled"} // Valida si description si tiene datos === true este habilita el boton , en caso contrario lo  muestra deshabilitado
          >
            Add {/* nombre boton */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo; // se exporta el componente para usarlo en el componente container
