// el componente container Es el componente que va a pasar FormTodo a TaskList
import React, { useState } from "react"; // se importa el hook de control de estados de react

// en el componente container  va ir importado tanto el componente de tasklits el cual se encarga de listas las tares y el componente formtodo  que se encarga de agregar las tareas 
import TaskList from "./TaskList"; // componente lista de tareas
import FormTodo from "./FormTodo";//componente de agregar tareas

const Container = _ => { // es una constante inicializada que lleve una arrow function sin parametro por ello el _
const [list, setList] = useState([]); // Estado nuevo(lista), se almacena los datos del componente FormTodo a la lista vacia.

// Se trae las props del formTodo para ir añadiendolas 
const handleAddItem = addItem => {// recibe el atributo que declaramos en el formTodo, que recibe unas caracteristicas
setList([...list, addItem]); //  se recibe la tarea y la va organizando en una lista mendiante el array  
};

//retorna un html , pintando los componentes tanto del formtodo como el tasklist
return (
<div>
<FormTodo handleAddItem={handleAddItem} /> {/*genera la funcionalidad que trae la constannte handledadditem*/}

<TaskList list={list} setList={setList} />{/*agrega un valor cada vez que se ingrese*/}
</div>
);
};

export default Container;//se exporta el componente para usarlo en el componente app.js


