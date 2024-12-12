import css from "./RedButton.module.css";

export default function RedButton({ text }) {
  return (
    <div>
      <button type="button" className={css.btn}>
        {text}
      </button>
    </div>
  );
}
