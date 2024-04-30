interface Props {
  path_img: string;
}

function Carousel({ path_img }: Props) {
  return (
    // <div id="back-img">
    //   <img src={path_img} className="img-fluid img-back" />
    //   <h3>{text}</h3>
    // </div>

    <div className="port">
      <div className="tet">
        <img src={path_img} />
      </div>
    </div>
  );
}

export default Carousel;
