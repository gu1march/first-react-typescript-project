
interface Props {
  path_img: string[];
  text: string;
}

function Carousel({ path_img, text }: Props) {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {path_img.map((item) => (
          <div className="carousel-item">
            <img key={item} src={item} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h4>{text}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
