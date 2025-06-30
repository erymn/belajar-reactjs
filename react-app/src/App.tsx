import Alert from "./components/Alert";
import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        Hello <strong>World!</strong>
      </Alert>
      <Button color="danger" onClick={() => console.log("Test Button Clicked")}>
        Test Button
      </Button>
    </div>
  );
  // let items = ["Banyuwangi", "Jakarta", "Jepara", "Surabaya", "Depok"];

  // const handleSelectItem = (item: string) => {
  //   console.log("handle from App.tsx using passing parameter", item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading={"List of Cities"}
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
}

export default App;
