import css from "./RedButton.module.css";

export default function RedButton({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick} type="button" className={css.btn}>
        {text}
      </button>
    </div>
  );
}
