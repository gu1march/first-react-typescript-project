import { useState } from "react";

interface Props {
  heading: string;
  items: string[];
  texts: string[];
}

// function ListGroup({ items, heading }: Props) {
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   return (
//     <div className="mycard">
//       <h1>{heading}</h1>
//       <div className="table3">
//         {items.length === 0 && <p>No item found</p>}
//         <ul className="list-group">
//           {items.map((item, index) => (
//             <li
//               className={
//                 selectedIndex === index
//                   ? "list-group-item active"
//                   : "list-group-item"
//               }
//               key={item}
//               onClick={() => {
//                 setSelectedIndex(index);
//               }}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

function ListGroup_P({ heading, items, texts }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="mycard">
      <h1>{heading}</h1>
      <div className="table3">
        {items.length === 0 && <p>No item found</p>}
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
      </div>
      <p>{selectedIndex > texts.length ? "" : texts[selectedIndex]}</p>
    </div>
  );
}

export default ListGroup_P;
