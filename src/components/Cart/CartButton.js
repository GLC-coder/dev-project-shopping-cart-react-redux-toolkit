import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../store/cartUi-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
 
  const totalQuantity = useSelector(state => state.cart.totalQuantity)



  const onToggleCartBtnHandler = ()=>{
    dispatch(cartUiActions.toggle())
  }
  return (
    <button className={classes.button} type="button" onClick={onToggleCartBtnHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
