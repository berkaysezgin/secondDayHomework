import Customer from "../models/customer.js";
import User from "../models/user.js";
import User from "../models/user.js"
import UserService from "../services/userService.js"
console.log("User component yüklendi");
let logger1 = new ElasticLogger();
let userService = new UserService(logger1)

let user1 = new User(1, "Engin", "Demirog", "Ankara");
let user2= new User(2,"Berkay","Sezgin","İstanbul");

userService.Add(user1);
userService.Add(user2);
userService.Add(user1.firstName);


userService.getById(1);

let customer = { id: 1, firstName: "Engin" }
//prototyping
customer.lastName = "Demirog";
console.log(customer.lastName);
console.log("************")
userService.load();

let customerToAdd=new Customer(8,"Seda","Yılmaz","Ankara",25);
customerToAdd.type="customer";

userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log("*****************************");
console.log(userService.getCustomerSorted());