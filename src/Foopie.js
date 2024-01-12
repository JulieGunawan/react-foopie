const FoopieItem = (props) => {
  //you need to initialize the value of each img title and description
  const { id, img, title, description } = props;

  return (
    <article className="foopieItem">
      <p className="foopieId">{`# ${id}`}</p>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p className="foopieDescription">{description}</p>
    </article>
  );
};

export default FoopieItem;
