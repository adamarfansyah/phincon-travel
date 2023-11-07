/* eslint-disable react/prop-types */
import styles from "./inputCustom.module.scss";

export default function InputCustom({ placeholder, onChange, name, label, value, ...rest }) {
  return (
    <div className={styles.inputCustom}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        {...rest}
        defaultValue={value}
      />
    </div>
  );
}
