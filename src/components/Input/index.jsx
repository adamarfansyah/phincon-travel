/* eslint-disable react/prop-types */
import styles from "./input.module.scss";

export default function Input({ placeholder, onClick, onChange, name, label, value, ...rest }) {
  return (
    <div className={styles.inputCustom}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        {...rest}
        defaultValue={value}
      />
      <div>
        <button className={styles.btn} onClick={onClick}>
          {label}
        </button>
      </div>
    </div>
  );
}
