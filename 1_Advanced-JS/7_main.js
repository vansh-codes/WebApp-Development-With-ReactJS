import Inventory from './7_inventory.js';

const Inventory1 = new Inventory();
Inventory1.addProducts(['Laptop', 25000, 'Education']);
Inventory1.addProducts(['Mobile', 15000, 'Day-to-Day']);
Inventory1.addProducts(['Headphone', 1000, 'Headset']);
console.log(Inventory1.getDetails());
console.log(Inventory1.getTotalValue());
console.log(Inventory1.findProductByName('Laptop').getDetails());
Inventory1.applyDiscount(10);
console.log(Inventory1.getDetails());