const FoopieItem = (props) => {
  //you need to initialize the value of each img title and description
  const { id, img, title, description } = props;

  return (
    <article className="foopieItem">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
