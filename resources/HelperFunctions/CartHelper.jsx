export const generateCartItemUniqueName = (cartItem) => {
    const { product_name, id } = cartItem;
    return `${product_name.slice(0, 3)}${id}`;
};

// Checks if the item is already added to the cart
export const isItemAddedToCart = (productUniqueName) => {
    return localStorage.getItem(productUniqueName) !== null;
};

// Get total items added to cart
export const getTotalItemsAddedToCart = () => {
    // Retrieves the total count of items added to the cart from localStorage
    // If the value doesn't exist or cannot be parsed as an integer, default to 0
    return parseInt(localStorage.getItem("totalItemsAddedToCart")) || "";
};

// Saves the total count of items added to the cart
export const saveTotalItemsAddedToCart = (productUniqueName) => {
    if (!isItemAddedToCart(productUniqueName)) {
        // Increment the total count of items added to the cart by 1
        const totalItemsAddedToCart = getTotalItemsAddedToCart() + 1;

        // Save the updated total count in the localStorage
        localStorage.setItem("totalItemsAddedToCart", totalItemsAddedToCart.toString());
    }
};

// Retrieves all cart items from the localStorage
export const getAllCartItems = () => {
    const allItems = [];
    const totalItemsAddedToCart = getTotalItemsAddedToCart();

    // Iterate over the keys in localStorage to retrieve cart items
    for (let i = 0; i <= totalItemsAddedToCart; i++) {
        const key = localStorage.key(i);

        // Exclude the key "totalItemsAddedToCart" as it stores the count and not an actual item
        if (key !== "totalItemsAddedToCart") {
            allItems.push(getSingleItemFromTheCart(key));
        }
    }

    return allItems;
};

// Retrieves a single cart item from the localStorage based on the provided key
const getSingleItemFromTheCart = (key) => {
    // Retrieve the value associated with the key from localStorage
    // Parse the value as JSON before returning it
    return JSON.parse(localStorage.getItem(key));
};


export const incrementQuantity = (quantityAdded, setQuantityAdded) => {
    // Increase the quantity by 1 when the increment button is clicked
    setQuantityAdded(quantityAdded + 1);
};

export const decrementQuantity = (quantityAdded, setQuantityAdded) => {
    // Decrease the quantity by 1 when the decrement button is clicked, if the quantity is greater than 1
    if (quantityAdded > 1) {
        setQuantityAdded(quantityAdded - 1);
    }
};

export const addToCartAndGetCartItem = (
    cartItem,
    productUniqueName,
    setCartItem,
    setQuantityAdded,
    setProductUnitPrice,
    setProductTotalPrice
) => {
    if(productUniqueName !==""){
        // Update product unit price and total price when productUniqueName changes
        setProductUnitPrice(cartItem.selling_price);
        setProductTotalPrice(cartItem.selling_price);

        // Retrieve the saved product from localStorage based on the unique name
        const parsedLocalSavedProduct = JSON.parse(localStorage.getItem(productUniqueName));

        if (parsedLocalSavedProduct) {
            // If the saved product exists, update the state with its details
            setCartItem(parsedLocalSavedProduct);
            setQuantityAdded(parsedLocalSavedProduct.quantity);
        } else {
            // If the saved product doesn't exist, create a new cart item and save it to localStorage
            const updatedCartItem = { ...cartItem, quantity: 1 };
            setCartItem(updatedCartItem);
            setProductTotalPrice(updatedCartItem.selling_price);
            setQuantityAdded(updatedCartItem.quantity);
            localStorage.setItem(productUniqueName, JSON.stringify(updatedCartItem));
        }
    }
};


export const updateCartItem = (
    cartItem,
    productUnitPrice,
    quantityAdded,
    setProductTotalPrice,
    setCartItem,
    productUniqueName
) => {
    if(productUniqueName !==""){
        if (cartItem.product_name) {
            // Calculate the updated product total price based on the quantity
            const updatedProductTotalPrice = productUnitPrice * quantityAdded;
            setProductTotalPrice(updatedProductTotalPrice);

            // Update the cart item with the new quantity and total price
            const updatedCartItem = {
                ...cartItem,
                quantity: quantityAdded,
                selling_price: updatedProductTotalPrice,
            };
            setCartItem(updatedCartItem);

            // Save the updated cart item to localStorage
            localStorage.setItem(productUniqueName, JSON.stringify(updatedCartItem));
        }
    }


};



