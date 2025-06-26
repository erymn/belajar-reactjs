import { useState } from "react";

//Pertukaran data antar komponen dengan menggunakan props dibungkus dengan interface
// [items: [], header: string] --> tipe data dikirim
interface Props {
  items: string[];
  heading: string;

  // (item: string) => void, untuk lempar/tukar parameter/data ke parent component
  // penamaan menggunakan on didepannya
  onSelectItem: (item: string) => void;
}

//cara pertama dengan lempar parameter props
//function ListGroup(props: Props) {
//cara kedua dengan full param
function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <h1>{heading}</h1>
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
              onSelectItem(item);
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
