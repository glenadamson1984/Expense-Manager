import "./UI/Card.css";

const Card = ({ children, className }) => {
  const styles = "card " + className;

  return <div className={styles}>{children}</div>;
};

export default Card;
