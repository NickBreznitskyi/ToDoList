import React from 'react'


function Task() {
    const inputRef = React.useRef()

    const [listArray, setListArray] = React.useState([])

    let tempValue;

    function handleChange(value) {
        tempValue = value
    }

    function submit() {
        if (inputRef.current.value === "")
            alert('You must write something')
        else {
            setListArray([...listArray, tempValue])
            console.log(listArray)
        }
    }

    return (
        <div>
            <h2>Task List</h2>
            <input ref={inputRef} type="text" onChange={(e) => handleChange(e.target.value)} name="task" id="taskInput" placeholder="New Task" />
            <button onClick={submit}>Add Task</button>

            {listArray.length > 0 ? listArray.map((task, index) => {
                debugger
                return (<div style={{ marginTop: '10px'}} key={index}>{task}</div>)
            }) : null}
        </div>
    )
}

export default Task