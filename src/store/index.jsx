import { create } from "zustand"; // Importing the create function from Zustand library

// Helper function to save products to local storage
const saveProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

// Helper function to load products from local storage
const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts ? JSON.parse(storedProducts) : []; // Return parsed products from local storage or an empty array if no products are found
};

export const useCartStore = create((set, get) => ({
  products: loadProductsFromLocalStorage(),

  addProduct: (product) => {
    const products = get().products;
    const productIndex = products.findIndex((p) => p.id === product.id);

    let updatedProducts;

    if (productIndex !== -1) {
      console.log("working");
      const updatedProduct = {
        ...products[productIndex],
        count: products[productIndex].count + 1,
      };
      updatedProducts = [...products];
      updatedProducts[productIndex] = updatedProduct;
    } else {
      updatedProducts = [...products, { ...product, count: 1 }];
    }
    saveProductsToLocalStorage(updatedProducts);
    set({ products: updatedProducts });
  },
  getProducts: () => get().products,

  setProductCount: (id, count) =>
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.id === id) {
          return { ...product, count };
        }
        return product;
      });
      saveProductsToLocalStorage(updatedProducts);
      return { products: updatedProducts };
    }),

  removeProduct: (id) => {
    const products = get().products;
    const updatedProducts = products.filter((product) => product.id !== id);
    saveProductsToLocalStorage(updatedProducts);
    set({ products: updatedProducts });
  },
}));
