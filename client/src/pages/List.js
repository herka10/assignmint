//const ToDoItems = ["Pay Bills", "Renew License", "Call for appointment"];

// list of To-Dos
import auth from '../utils/auth'
import { Navigate } from 'react-router-dom'

const List = () => {
    const isAuthenticated = auth.loggedIn()
    if (!isAuthenticated) {
      return <Navigate to='/' />
    }

    return (
        <h1>To Do List</h1>
    )
}

export default List
