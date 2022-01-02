const initialState = {
  cartProducts: [],
  show: false,
  count: 0,
};
export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      let cartProducts = [...state.cartProducts, payload];
      return {
        cartProducts: cartProducts,
        show: state.show,
        count: state.count + 1,
      };
    case "DELETE_FROM_CART":
      let cart = state.cartProducts.filter((product) => {
        return payload !== product; // payload is come from action that user click (الي بدي اعملها دليت وكبست عليها)
      });
      return {
        cartProducts: cart,
        show: state.show,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
