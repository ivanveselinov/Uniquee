export const initialState = {
    user: {},
    color: "blue",
    basket: [],
    selecterCategory: "",
    products: [],

};

export const reducer = (state, action) => {
    switch (action.type) {
      case "user":  // user owns all of information
        return {
          ...state,
          user: action.payload,
        };
  
      case "color":
        return {
          ...state,
          color: action.payload,
        };
  
      case "reset":
        return {
          ...state,
          color: "black",
        };

        case "addToBasket":
          return {
            ...state,
            basket: [...state.basket, action.payload],
          };

          case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
              item => item.productId === action.payload
            )
            let basketCopy = [...state.basket]
            basketCopy.splice(index, 1);
           
            return {
              ...state,
              basket: basketCopy,
            };

            case "SELECT_CATEGORY":
              return {
                ...state,
                selecterCategory: action.payload, 
              };

              case "ADD_PRODUCTS":
              return {
                ...state,
                products: action.payload, 
              };

          default:
            return;
      
    }

  };
