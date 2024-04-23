interface Props {
  path_apps: string[];
  path_img: string[];
}

export default function Footer({ path_apps, path_img }: Props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
           <img src="../imgs/sitelogo.png" alt="M" id="sitelogo" /> © 2024 Marchioni.com, Inc
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {path_apps.map((item, index) => (
            <li className="ms-3">
              <a className="text-body-secondary" href={item}>
                <img key={item} src={path_img[index]} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}


