
interface Props {
    page_name: string;
    src_img: string;
  }



export default function SubHeader({page_name, src_img}:Props) {
  return (
    <>
      <div className="contact_div">
        <h1 className="contact_h1">{page_name}</h1>
        <img className="contact_img" src={src_img} />
      </div>
    </>
  );
}
