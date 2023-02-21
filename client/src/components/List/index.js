import { useMutation } from '@apollo/client';

import { REMOVE_ITEM } from '../../utils/mutations';
import { QUERY_LIST } from '../../utils/queries';


const ToDoList = ({ items, isLoggedInUser = false }) => {
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

  if (items.length) {
    return <h3>List Empty</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {items &&
          items.map((item) => (
            <div key={item} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{item}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveItem(item)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  )
};

export default ToDoList;