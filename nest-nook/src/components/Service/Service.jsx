import SectionTitle from "../SectionTitle/SectionTitle";
import css from "./Service.module.css";

export default function Service() {
  return (
    <div className="container">
      <SectionTitle text="Service"></SectionTitle>

      <h3 className={css.title}>Lorem ipsum dolor sit amet consectetur</h3>
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
        cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd nunc
        eget dictum Sed ornare cursus sed nunc eget dictum Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget
        dictum Sed ornare cursus sed nunc eget dictumd nunc eget dictum Sed
        ornare cursus sed nunc eget dictum{" "}
      </p>
      <div className={css.line}></div>

      <div className={css.imgMenu}>
        <img className={css.img} src="../../../public/assets/second.jpg"></img>
        <ul className={css.ul}>
          <li className={css.li}>
            <p className={css.liText}>Interior Design</p> x
          </li>
          <li className={css.li}>
            <p className={css.liText}>Interior Design</p> x
          </li>
          <li className={css.li}>
            <p className={css.liText}>Interior Design</p> x
          </li>
        </ul>
      </div>
    </div>
  );
}
