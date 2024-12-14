import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const SecondPage = () => {
  const cash = useSelector((state: RootState) => state.counter.cash);

  return (
    <div>
      <div>{cash}</div>
    </div>
  );
};
