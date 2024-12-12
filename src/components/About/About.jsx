import SectionTitle from "../SectionTitle/SectionTitle";
import RedButton from "../RedButton/RedButton";

import css from "./About.module.css";

export default function About() {
  return (
    <div className="container">
      <SectionTitle text="About"></SectionTitle>
      <h3 className={css.title}>Lorem ipsum dolor sit amet consectetur</h3>

      <div className={css.section}>
        <img className={css.img} src="/assets/third.jpg"></img>

        <div className={css.box}>
          <p className={css.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed
            us sed nunc eget dictumd nunc eget dictum nunc eget dictum Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus
            sed us sed nunc eget dictumd nunc eget dictum
          </p>
        </div>
        <RedButton text="Learn More"></RedButton>
      </div>
    </div>
  );
}
