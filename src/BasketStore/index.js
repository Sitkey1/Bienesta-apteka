export const BasketStore = {
  add: (el) => {
    const basket = JSON.parse(localStorage.getItem("BASKET"));

    localStorage.setItem("BASKET", JSON.stringify([...(basket ?? []), el]));
  },
  remove: (index) => {
    const basket = JSON.parse(localStorage.getItem("BASKET"));

    basket.splice(index, 1);
    localStorage.setItem("BASKET", JSON.stringify(basket));
  },
  getAll: () => {
    return JSON.parse(localStorage.getItem("BASKET"));
  },
};
