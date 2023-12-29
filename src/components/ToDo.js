import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState("");
  const [listArr, setListArr] = useState([]);
  // if (toDo) console.log(toDo);
  useEffect(() => {
    console.log("current todo list:",listArr);
  }, [listArr]);

  function addToDo(e) {
    e.preventDefault();
    let LastTask = listArr[listArr.length-1] || {id: 0}
    setListArr([...listArr, { id: LastTask.id + 1, msg: toDo }]);
    setToDo("");
    console.log("todo added");
  }

  function deleteTodo(itemId){
    setListArr(listArr.filter((item)=>item.id !== itemId))
  }

  return (
    <div className="to-do">
      <h1>To-Do List</h1>
      <form onSubmit={addToDo}>
        <input
          type="text"
          placeholder="Whats needs to be done?"
          onChange={(e) => setToDo(e.target.value)}
          value={toDo}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="to-do-list">
        {
          listArr.length>0 && listArr.map((item)=>(
                              <li key={item.id}>
                                <span>{item.msg}</span>
                                <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                              </li>
                              ))
        }
      </ul>
    </div>
  );
};

export default ToDo;
