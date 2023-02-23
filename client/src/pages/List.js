import ToDoList from '../components/List';
import ItemForm from '../components/Itemform';

// list of To-Dos
import auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_LIST, QUERY_ME } from '../utils/queries';
import { REMOVE_ITEM } from '../utils/mutations';

const deleteButtonStyles = {
  width: 25,
  height: 25,
  lineHeight: 0,
  placeItems: "center",
  display: "grid"
}


const List = () => {
  const { listId } = useParams()
  const { loading, data } = useQuery( QUERY_ME );
  const [ removeItem ] = useMutation( REMOVE_ITEM );

  const list = data?.me || data?.list || {};
    console.log(list)
    const isAuthenticated = auth.loggedIn()
    if (!isAuthenticated) {
      return <Navigate to='/' />
    }

    return (
       <div className='w-50 p-3 m-3'>
          <h2 className="card-header">
          {listId ? `${list.title}'s` : 'Your'} To Do List
          </h2>

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ItemForm list={list._id} />
      </div>

      {list?.items?.map(item => {
        return(
          <div className='card boarder w-50 p-1 m-1'>
            <div className='card-body d-flex justify-content-between animate__animated animate__slideInUp'>
              <p>{item.itemDescription} - {item.quantity}</p>
              <div>
                <button type="button" className='btn btn-danger p-1 rounded-circle' style = {deleteButtonStyles} onClick= { async() =>{
                  await removeItem({
                    variables: { _id: item._id }
                  })
                }}>&times;</button>
              </div>
            </div>
          </div>
        )
      })}
       </div>
    )
}

export default List
