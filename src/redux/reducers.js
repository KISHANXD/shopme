const InitialState = {
    cartItems: [],
    posts: {}
}

const posts = (state = InitialState , action) => {
    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload.posts
            }
        case 'ADD_PRODUCT_TO_CART':
            let tempCartItems = state.cartItems;
            if(tempCartItems.includes(action.payload)) {
                tempCartItems = tempCartItems.filter(function(value){ 
                    return value!=action.payload;
                });
            } else {
                tempCartItems.push(action.payload);
            }
            console.log("cwevw", tempCartItems)
            return {
                ...state,
                cartItems: tempCartItems,
            }
        default:
            return state
    }
}

export default posts;