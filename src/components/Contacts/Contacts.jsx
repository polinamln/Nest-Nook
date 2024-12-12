import css from "./Contacts.module.css";
import classNames from "classnames";

export default function About() {
  const email = "test_email@gmail.com";
  const phone = "+3800000000000";

  return (
    <div className={classNames("container", css.section)}>
      <div className={css.box}>
        <p className={css.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button type="button" className={css.btn}>
          Contact Us
        </button>
      </div>

      <div className={css.info}>
        <h3 className={css.infoTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div className={css.infoText}>
          <a className={css.contact} href={`mailto:${email}`}>
            {email}
          </a>
          <a className={css.contact} href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
