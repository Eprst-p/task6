import { useAppSelector } from '../../hooks/redux-hooks';
import { getTotalPrice } from '../../store/selectors';


function TotalPrice():JSX.Element {
  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <h2 className="total-price">
      Total price:
      <span className="price">{`${totalPrice} rub`}</span>
    </h2>
  );
}

export default TotalPrice;
