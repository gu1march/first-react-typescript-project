interface Props {
    apps: string[];
}  



export default function Footer({apps}:Props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          
          
          
          
          
          
          
          
        {apps.map((item) => (  
          <li className="ms-3">
            <a className="text-body-secondary" href={item}>
                <img key={item} src={item} />
            </a>
          </li>
        ))}







        </ul>
      </footer>
    </div>
  );
}
