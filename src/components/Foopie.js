const Foopie = (props) => {
  //you need to initialize the value of each img title and description
  const { id, img, title, description } = props;

  return (
    <article className="selection">
      <p className="foopieId">{`# ${id}`}</p>
      <img className="foopieImg" src={img} alt={title} />
      <h3>{title}</h3>
      <p className="foopieDescription">{description}</p>
    </article>
  );
};

export default Foopie;
