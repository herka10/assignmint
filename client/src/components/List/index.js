import { useMutation } from '@apollo/client';

import { REMOVE_ITEM } from '../../utils/mutations';
import { QUERY_LIST } from '../../utils/queries';

const deleteButtonStyles = {
  width: 25,
  height: 25,
  lineHeight: 0,
  placeItems: "center",
  display: "grid"
}

const ToDoList = ({ items, isLoggedInUser = false }) => {
  console.log(items)
  const [removeItem, { error }] = useMutation(REMOVE_ITEM, {
    update(cache, { data: { removeItem } }) {
      try {
        cache.writeQuery({
          query: QUERY_LIST,
          data: { list: removeItem },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  const handleRemoveItem = async (item) => {
    try {
      const { data } = await removeItem({
        variables: { item },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (items?.length === 0) {
    return <h3>List Empty</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
      {items?.map(item => {
        return(
          <div className='card boarder w-50 p-1 m-1'>
            <div className='card-body d-flex justify-content-between'>
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
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  )
};

export default ToDoList;