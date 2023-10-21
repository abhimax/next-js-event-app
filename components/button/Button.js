const { default: Link } = require("next/link");
import classes from "./Button.module.css";
function Button({ link, children }) {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}
export default Button;
