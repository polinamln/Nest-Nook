import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className="container">
      <div className={css.heroBox}>
        <h1 className={css.heroTitle}>
          <span className={css.heroTitleAcc}>Lorem</span> ipsum dolor sit <br />{" "}
          amet consectetur
        </h1>
        <div className={css.heroBoxT}>
          <div className={css.heroLine}></div>
          <p className={css.heroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum Lorem ipsum
            dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <img className={css.heroImg} src="/assets/hero.jpg"></img>
    </div>
  );
}
