import css from "./RedStrokeButton.module.css";

export default function RedStrokeButton({ text }) {
  return (
    <div>
      <button type="button" className={css.btn}>
        {text}
      </button>
    </div>
  );
}
