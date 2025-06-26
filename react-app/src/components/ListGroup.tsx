import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Banyuwangi", "Jakarta", "Jepara", "Surabaya", "Depok"];

  //memakai variable
  //const message = items.length === 0 ? <p>No cities found</p> : null;

  //memakai function
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No cities found</p> : null;
  //   };

  //create onclick event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
