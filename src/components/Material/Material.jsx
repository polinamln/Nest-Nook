import RedStrokeButton from "../RedStrokeButton/RedStrokeButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import css from "./Material.module.css";

export default function Material() {
  return (
    <div className="container">
      <SectionTitle text="Material"></SectionTitle>
      <div className={css.box}>
        <div className={css.textBox}>
          <h3 className={css.title}>Lorem ipsum dolor sit amet, consectetur</h3>
          <p className={css.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum{" "}
          </p>
          <RedStrokeButton text="See Materials"></RedStrokeButton>
        </div>
        <div className={css.imgBox}>
          <img className={css.imgF} src="/assets/f1.jpg" alt="wood material" />
          <div className={css.images}>
            <img
              className={css.imgS}
              src="/assets/f2.jpg"
              alt="wood material"
            />
            <img
              className={css.imgT}
              src="/assets/f3.jpg"
              alt="wood material"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
