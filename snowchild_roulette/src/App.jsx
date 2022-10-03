import React, { useState } from "react";
import styles from "./App.module.css";
import one from "./images/1.jpg";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import five from "./images/5.png";
import left from "./images/left.png";
import right from "./images/right.png";

const App = () => {
  let array = [one, two, three, four, five];
  let arrayNumber = [1, 2, 3, 4, 5];
  let [count, setCount] = useState(0);
  let [countItem, setCountItem] = useState(0);
  let [leftImage, setLeftImage] = useState(array.length - 1);
  let [rightImage, setRightImage] = useState(1);

  const increment = () => {
    if (count === array.length - 1) {
      count = 0;
      setLeftImage((leftImage += 1));
      setRightImage((rightImage += 1));
      setCount(count);
      setCountItem(count);
      return;
    } else {
      setCount((count += 1));
      setCountItem(count);
    }

    if (rightImage === array.length - 1) {
      setRightImage(0);
    } else {
      setRightImage((count += 1));
    }

    if (leftImage === array.length - 1) {
      setLeftImage(0);
      return;
    } else {
      setLeftImage((leftImage += 1));
    }
  };

  const decrement = () => {
    if (count === 0) {
      setCount(array.length - 1);
      setCountItem(array.length - 1);
      setRightImage((rightImage -= 1));
      setLeftImage((leftImage -= 1));
      return;
    } else {
      setCount((count -= 1));
      setCountItem(count);
    }

    if (rightImage === 0) {
      setRightImage(array.length - 1);
    } else {
      setRightImage((rightImage -= 1));
    }

    if (leftImage === 0) {
      setLeftImage(array.length - 1);
      return;
    } else {
      setLeftImage((leftImage -= 1));
    }
  };

  const clickSlider = (i) => {
    console.log(i);
    if (i === array.length) {
      setCount(i - 1);
      setCountItem(i - 1);
      setRightImage(0);
      setLeftImage(i - 2);
      return;
    } else if (i === 1) {
      setCount(0);
      setCountItem(0);
      setRightImage(i);
      setLeftImage(array.length - 1);
      return;
    }

    setCount(i - 1);
    setCountItem(i - 1);
    setRightImage(i);
    setLeftImage(i - 2);
  };

  return (
    <>
      <div className={styles.mainCont}>
        <div className={styles.navigationButtons}>
          <img src={left} onClick={decrement} alt="" />
        </div>
        <div className={styles.items}>
          <img alt="" src={array[leftImage]} />
        </div>
        <div>
          <img alt="" src={array[count]} className={styles.centerItem} />
        </div>
        <div className={styles.items}>
          <img alt="" src={array[rightImage]} />
        </div>
        <div className={styles.navigationButtons}>
          <img src={right} onClick={increment} alt="" />
        </div>
      </div>
      <div className={styles.slider}>
        {arrayNumber.map((item, key) => (
          <div
            className={
              countItem + 1 !== item ? `${styles.sliders}` : `${styles.active}`
            }
            key={key}
            onClick={() => clickSlider(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
