import { useState } from "react"
const ListRender = () => {
    const [list] = useState(["Luis","Gustavo","Pedro"])
    const [users, setUsers] = useState([
        {id:1, name:"Luis", age:23},
        {id:2, name:"Gustavo", age:23},
        {id:3, name:"Iago", age:23}
    ])
    const deleteRandom = () =>{ 
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers)=>prevUsers.filter((user) => randomNumber !== user.id))
    }
  return (
    <div>
        
        <div className="list">
        {/* 4 - Render sem key */}
            <ul>
                {
                    list.map((item)=>(
                        <li>{item}</li>
                    ))
                }
            </ul>
        {/* 5 - Render com key */}
            <ul>
            {
                users.map((user)=>(
                    <li key={user.id}> {user.name} - {user.age}</li>
                ))
            }
            </ul>            
        </div>
    {/* 6 - previus state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>

  )
}

export default ListRender