// reserved name children ( content between opening and closing tags)
import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
