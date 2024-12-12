import RedButton from "../RedButton/RedButton";
import css from "./Footer.module.css";
import classNames from "classnames";

export default function Footer() {
  return (
    <div className={classNames("container", css.footer)}>
      <div className={css.footerBox}>
        <div className={css.footerBoxText}>
          <h1 className={css.logo}>
            Nest <span className={css.logoAccent}>&</span> Nook
          </h1>
          <p className={css.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum{" "}
          </p>
          <RedButton text="Learn More"></RedButton>
        </div>

        <div>
          <ul className={css.footerNav}>
            <li>
              <a className={css.footerNavLink} href="#">
                <p>Home</p>
              </a>
            </li>
            <li>
              <a className={css.footerNavLink} href="#">
                <p>About Us</p>
              </a>
            </li>
            <li>
              <a className={css.footerNavLink} href="#">
                <p>Services</p>
              </a>
            </li>
            <li>
              <a className={css.footerNavLink} href="#">
                <p>Our team</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
