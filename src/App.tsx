import './App.css'
import ListGroup from "./components/ListGroup";

interface Props {
  items: string[];
  heading: string;
}

function App({items, heading}: Props) {
  


  return (
  <div className='table3'>
    <ListGroup items={items} heading={heading}/>
    <ListGroup items={items} heading={heading}/>
  </div>);
}

export default App;
