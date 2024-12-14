import { useDispatch } from 'react-redux';
import { add, setValue, take } from '../../app/slices/counterSlice';
import styles from './FirstPage.module.scss';

export const FirstPage = () => {
  const dispatch = useDispatch();

  const valueToSet = 50;

  return (
    <div>
      <button className={styles.button} onClick={() => dispatch(add())}>
        +
      </button>
      <button className={styles.button} onClick={() => dispatch(take())}>
        -
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(setValue(valueToSet))}
      >{`make ${valueToSet}`}</button>
    </div>
  );
};
