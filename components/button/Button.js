const { default: Link } = require("next/link");
import classes from "./Button.module.css";
function Button({ link, children, onClick }) {
  return (
    <Link href={link} className={classes.btn} onClick={onClick}>
      {children}
    </Link>
  );
}
export default Button;
