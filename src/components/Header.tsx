
interface Props {
  pages: string[];
}

export default function Header({ pages }: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./index.html">
          MARCHIONI.COM
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {pages.map((item) => (
                <a className="nav-link" key={item} href={item}>
                  {item}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
