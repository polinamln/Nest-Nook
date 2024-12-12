import css from "./SectionTitle.module.css";

// eslint-disable-next-line react/prop-types
export default function SectionTitle({ text }) {
  return (
    <div className={css.lineBox}>
      <div className={css.line}></div>
      <h2 className={css.SectionTitleText}>{text}</h2>
      <div className={css.line}></div>
    </div>
  );
}
