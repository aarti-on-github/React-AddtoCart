import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState={
    cartItem:localStorage.getItem("cartItem")? JSON.parse(localStorage.getItem("cartItem")):[],
    cartTotalQty:0,
    cartTotalAmount:0,

}
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addTocart(state,action){
            const itemIndex=state.cartItem.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cartItem[itemIndex].cartQuantity+=1;
                toast.info(`increased ${state.cartItem[itemIndex].name} cart quantity`,{
                    position:"bottom-left"
                });
            }
            else{
                const tempProduct={...action.payload,cartQuantity:1};
                state.cartItem.push(tempProduct);
                toast.success(`${action.payload.name} is added successfully`,{
                    position:"bottom-left"
                })
            }


            localStorage.setItem("cartItem",JSON.stringify(state.cartItem));
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItem.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.cartItem[itemIndex].cartQuantity > 1) {
              state.cartItem[itemIndex].cartQuantity -= 1;
      
              toast.info("Decreased product quantity", {
                position: "bottom-left",
              });
            } else if (state.cartItem[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.cartItem.filter(
                (item) => item.id !== action.payload.id
              );
      
              state.cartItem = nextCartItems;
      
              toast.error("Product removed from cart", {
                position: "bottom-left",
              });
            }
      
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
          removeFromCart(state, action) {
            state.cartItem.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                const nextCartItems = state.cartItem.filter(
                  (item) => item.id !== cartItem.id
                );
      
                state.cartItem = nextCartItems;
      
                toast.error("Product removed from cart", {
                  position: "bottom-left",
                });
              }
              localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
              return state;
            });
          },
          getTotals(state, action) {
            let { total, quantity } = state.cartItem.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQty= quantity;
            state.cartTotalAmount = total;
          },
          clearCart(state, action) {
            state.cartItem = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", { position: "bottom-left" });
          },
    },

})

export const {addTocart, decreaseCart, removeFromCart, getTotals, clearCart }=CartSlice.actions;
export default CartSlice.reducer;