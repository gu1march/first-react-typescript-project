interface Props {
  text: string;
}

export default function Paragraph({ text }: Props) {
  return (
    <>
      <div className="contact_p">
        <p className="p_con">{text}</p>
      </div>
    </>
  );
}
