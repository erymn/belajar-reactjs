import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Banyuwangi", "Jakarta", "Jepara", "Surabaya", "Depok"];

  return (
    <div>
      <ListGroup items={items} heading={"List of Cities"} />
    </div>
  );
}

export default App;
