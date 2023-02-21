import ToDoList from '../components/List';
import ItemForm from '../components/Itemform';

// list of To-Dos
import auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LIST, QUERY_ME } from '../utils/queries';


const List = () => {
  const { listId } = useParams()
  const { loading, data } = useQuery(
    listId ? QUERY_LIST : QUERY_ME,
    { 
      variables: {listId: listId } 
  }
  );

  const list = data?.me || data?.list || {};

    const isAuthenticated = auth.loggedIn()
    if (!isAuthenticated) {
      return <Navigate to='/' />
    }

    return (
       <div>
          <h2 className="card-header">
          {listId ? `${list.title}'s` : 'Your'} To Do List
          </h2>
          {list.items?.length > 0 && (
        <ToDoList
          items={list.items}
          isLoggedInUser={!listId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ItemForm list={list._id} />
      </div>
       </div>
    )
}

export default List
