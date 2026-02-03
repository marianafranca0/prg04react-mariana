import styles from "./Container.module.css";

//* Container -
//* componente de layout
function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}
export default Container;
