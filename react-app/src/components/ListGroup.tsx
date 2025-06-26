import { useState } from "react";

function ListGroup() {
  let items = ["Banyuwangi", "Jakarta", "Jepara", "Surabaya", "Depok"];

  //Hook, untuk kasih tau react kalau component ini bisa memiliki data
  //arr[0]: variabel
  //arr[1]: updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //contoh lain
  //const [name, setName] = useState('');

  //memakai variable
  //const message = items.length === 0 ? <p>No cities found</p> : null;

  //memakai function
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No cities found</p> : null;
  //   };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
