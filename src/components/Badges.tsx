interface Props {
  name_app: string[];
  path_img: string[];
}

const class1 = "badge d-flex align-items-center p-1 pe-2 text-";
const colors_badges = [
  "primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill",
  "secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill",
  "danger-emphasis bg-danger-subtle border border-danger-subtle rounded-pill",
  "info-emphasis bg-info-subtle border border-info-subtle rounded-pill",
  "info-emphasis bg-info-subtle border border-info-subtle rounded-pill",
  "dark-emphasis bg-dark-subtle border border-dark-subtle rounded-pill",
  "success-emphasis bg-success-subtle border border-success-subtle rounded-pill",
];
const class_widht_height = ["rounded-circle me-1", "24"];

function RandomNumber() {
  return Math.floor(Math.random() * (6 - 0 + 1)) + 0;
}

export default function Badges({ name_app, path_img }: Props) {
  return (
    <div className="d-flex gap-2 justify-content-center badge">
      {name_app.map((item, index) => (
        <span className={class1 + colors_badges[RandomNumber()]}>
          <img
            className={class_widht_height[0]}
            width={class_widht_height[1]}
            height={class_widht_height[1]}
            src={path_img[index]}
            alt={item + " logo image"}
          />
          {item}
        </span>
      ))}
    </div>
  );
}


//Usar como badges no subheader e colocar os badges como meus conhecimentos em JS, HTML, CSS, Python, Oracle e etc.
