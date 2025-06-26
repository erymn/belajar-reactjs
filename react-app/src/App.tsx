import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Banyuwangi", "Jakarta", "Jepara", "Surabaya", "Depok"];

  const handleSelectItem = (item: string) => {
    console.log("handle from App.tsx using passing parameter", item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"List of Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
