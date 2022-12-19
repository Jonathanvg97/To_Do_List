//Es el componente que va a tener una lista de tareas por hacer o hechas, donde va a poder eliminar todas las tareas que ya estén hechas.
import React from "react";
import Checkbox from "./CheckBox";//componente para podr chulear las tareas

const TaskList = (props) => {// creamos el componente tasklist

const { list, setList } = props;// recibimos de props la propiedad list el metodo setList para obtener la lista proveniente del array 

/* Cuando el usuario intente escribir sobre el input de usuario o contraseña, se va a ejecutar el evento onChange en React. 
  Dentro de este evento, existe una propiedad target que guarda el elemento input. Esto quiere decir que, a través del comando 
  event.target, podemos tener acceso a toda la API del elemento HTML. Así, podemos acceder a todos los atributos del elemento input, 
  como lo son su type y value. */

const onChangeStatus = (e) => {// creamos un manejador de eventos  para verificar si estan  hecho o no las tareas es decir recibe los datos del checkbox que hayan cambiado 
const { name, checked } = e.target;


const updateList = list.map((item) => ({// recorremos la lista con el .map para mapear la lista y ver cuales de las tareas de la lista estan check y que tareas no estan lista 
...item,
done: item.id === name ? checked : item.done,//se valida si la tarea es igual al id se puede chulear
}));
setList(updateList);
};

// eliminar las tareas // 
const onClickRemoveItem = (e) => {// define la contante que define el evento para filtrar  la lista, hacemos click para las que ya se terminaron 

const updateList = list.filter((item) => !item.done);// donde reconoce los items que sean diferente a realizado y setea la lista 
setList(updateList);// actualiza la lista 
};

/* La constante chk actualiza el listado de las tareas que se van agregando para la correcta visualizacion, en ella se usa un 
    metodo de los arrays para recorrer algo y que esta devuelva algo, para iterar a través de los elementos dentro de una colección 
    de arreglos en JavaScript. En este caso la lista y la nueva tarea agregada para la actualizacion correcta. */

const chk = list.map((item) => (//  se crea la constante check con .map recorre la nueva lista. que tenga el click en el id  y cambie su estado  
<Checkbox key={item.id} data={item} onChange={onChangeStatus} />//(key= identificador unico en react), que nos indica que mapea la lista cuando se realice el check revisando el id la data como fecha de items y procede a cambiarme el estatus se vuelve items cuando pertenecen a un elemeto de un array cada elemento se toma como items ya que tiene un id y una fecha diferente 
));
return (
    // RetoRna una estructura HTML con la lista de tareas que se agregen durante la ejecucion del programa.
<div className="todo-list">
    
{list.length ? chk : "No tasks"/** me recorre el array si todo esta check retorne el string "no tasks" */} 

{list.length ? (// me recorre nuevamente el array  si todo ya esta check me muestra un boton que me limpia la lista porque ya las tareas estan terminadas.
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Delete all done
</button>
</p>
) : null}
</div>
);
};

export default TaskList; // Se exporta este componente para el container


