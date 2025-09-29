import { initialState } from './initialState.js'


export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price * (item.quantity || 1);
  }, 0);


const AppReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
     case "ADD_TO_BASKET": {
  const existingItemIndex = state.basket.findIndex(
    (item) => item.title === action.item.title
  );

  if (existingItemIndex >= 0) {
    const updatedBasket = [...state.basket];
    updatedBasket[existingItemIndex] = {
      ...updatedBasket[existingItemIndex],
      quantity: (updatedBasket[existingItemIndex].quantity || 1) + 1,
    };

    return {
      ...state,
      basket: updatedBasket,
    };
  } else {
    return {
      ...state,
      basket: [...state.basket, { ...action.item, quantity: 1 }],
    };
  }
}

      case "INCREASE_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), 
      };
    case "REMOVE_FROM_BASKET":{
      const index = state.basket?.findIndex((basketItem) =>
        basketItem.title === action.title
      )
      let NewBasket = [...state.basket]
      if (index >= 0) {
        NewBasket.splice(index, 1)
      }
      else {
        console.warn(
          `can't remove product {id ${action.id} as it's not in basket!`
        );
      }
      return {
        ...state,
        basket: NewBasket
      }}
    default:
      return state;
  }

}


export default AppReducer
