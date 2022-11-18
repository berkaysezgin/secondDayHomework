import Customer from "./src/models/customer.js";
import UserService from "./src/services/userService.js";


let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "bardak", quantity: 2, unitPrice: 4000 },
  { id: 3, productName: "kalem", quantity: 1, unitPrice: 7000 },
  { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 5000 },
  { id: 5, productName: "Kitap", quantity: 3, unitPrice: 6000 },
  { id: 6, productName: "Pot", quantity: 5, unitPrice: 3000 },

]
cart.map(product => {
  console.log(product.productName + " : " + product.unitPrice * product.quantity)
})
let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2);
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);
console.log(total);
//SPA
function addToCart(sepet) {
  sepet.push({ id: 7, productName: "ruhsat", quantity: 1, unitPrice: 500 })
}
addToCart(cart);
console.log(cart);
console.log("************");
let userService = new UserService();
userService.load();
let customerToAdd=new Customer(8,"Seda","Yılmaz","Ankara",25);
customerToAdd.type="customer";

userService.add(customerToAdd);
console.log("*****************************");
console.log(userService.customers);
console.log("*****************************");
console.log(userService.employees);
console.log("*****************************");
console.log(userService.errors);
console.log("*****************************");
console.log(userService.getCustomerSorted());
