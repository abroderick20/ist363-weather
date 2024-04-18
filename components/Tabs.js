import styles from "./Tabs.module.scss";
import classNames from "classnames/bind";

const cx = classnames.bind(styles);

const Tabs = ({ activeIndex, clickHandler, items }) => {
  return (
    <ul class={styles.tabs}>
      {items.map((item, index) => {
        const itemClasses = cx({
          tabs__item: true,
          active: index === activeIndex,
        });
        return (
          <li
            key={index}
            className={itemClasses}
            onClick={() => {
              clickHandler(index);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
