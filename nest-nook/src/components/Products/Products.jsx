import SectionTitle from "../SectionTitle/SectionTitle";
import css from "./Products.module.css";
import { FaArrowRight } from "react-icons/fa6";

export default function Products() {
  return (
    <div className="container">
      <SectionTitle text="Products"></SectionTitle>
      <h3 className={css.title}>Lorem ipsum dolor sit amet, consectetur</h3>

      <ul className={css.list}>
        <li className={css.li}>
          <a href="#" className={css.item}>
            <h4 className={css.itemTitle}>Vintage</h4>
            <p className={css.text}>
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </a>
          <FaArrowRight className={css.icon} />
        </li>
        <li className={css.li}>
          <a href="#" className={css.item}>
            <h4 className={css.itemTitle}>Minimalist</h4>
            <p className={css.text}>
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </a>
          <FaArrowRight className={css.icon} />
        </li>
        <li className={css.li}>
          <a href="#" className={css.item}>
            <h4 className={css.itemTitle}>Modern</h4>
            <p className={css.text}>
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </a>
          <FaArrowRight className={css.icon} />
        </li>
        <li className={css.li}>
          <a href="#" className={css.item}>
            <h4 className={css.itemTitle}>Transitional</h4>
            <p className={css.text}>
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </a>
          <FaArrowRight className={css.icon} />
        </li>
      </ul>
    </div>
  );
}
