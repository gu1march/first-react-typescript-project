import './App.css'
import ListGroup from "./components/ListGroup";

interface Props {
  items: string[];
  heading: string;
}

function App({items, heading}: Props) {
  


  return (
  <div>
    <ListGroup items={items} heading={heading}/>
  </div>);
}

export default App;
