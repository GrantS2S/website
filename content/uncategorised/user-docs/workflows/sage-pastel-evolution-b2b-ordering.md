---
title: "Sage Evolution - B2B Ordering platform"
heading: "sage evolution and the B2B trade store"
lead: "An example workflow using our B2B trade store with Sage Evolution."
description: "Turn your Sage Evolution into a B2B ordering platform for customers and sales reps to view inventory and raise orders back into the accounting system. A Sage Evolution B2B ordering integration can significantly streamline your business. Fine out more!"
aliases: "/documentation/workflows/sage-pastel-evolution-b2b-ordering/"
toc: false
menu:
  docside:
    parent: Example Workflows
    name: Sage Evolution - B2B
---

An example workflow using our B2B trade store with Sage Evolution.

Sage Evolution is an enterprise solution that allows a fair amount of flexibility, especially when it comes to storing inventory information.  
  
Some of the core features that ship with Sage Evolution are:

1.  Multiple Warehouses
2.  Multiple Price Lists
3.  Unlimited User-Defined Fields
4.  Storing Multiple Images

* * *

### The Traditional Workflow

In our example, we have a wholesale business that buys products (Purchase Orders) from manufacturers and sells these products (Sales Orders) to many different customers.  
  
Traditionally, orders are raised from customers calling in, sending emails or even via sales reps who are on the road. All these orders are then manually captured into Sage Evolution by administrative staff.  
  
This approach is a problematic for several reasons:

1.  The customer does not know stock availability at the time of ordering, unless they request an updated list of inventory and pricing.
2.  It is difficult to control what prices are given to specific customers.
3.  Manually re-capturing orders is hugely time consuming and prone to human error.
4.  Product information is not stored in one central place.

* * *

### The new workflow with Sage Evolution and our B2B trade store

Inventory and product information is now synced with the B2B trade store, and orders from this platform are automatically raised as sales orders and converted to invoices in Sage Evolution.  
  
Price lists, stock levels and product information is continually sent to the B2B trade store. Customers and sales reps are given access to this information to view and order products.  
  
There is strict control around what products and pricing each customer and sales rep gets to see. This means when a customer or sales rep logs in to the B2B trade store, they only see the products and price list that has been assigned to them.  
  
In our example, we also have a 3rd party warehouse set up. Orders are automatically sent to the warehouse for fulfillment once they are approved.

* * *

### Central Product Data Management

Sage Evolution allows the storing of images and other custom fields. The company in our example can now manage all elements of their “product catalog” from inside Sage Evolution.  
  
This means product categories, pictures and many descriptive fields are managed inside Sage Evolution.  
  
Every hour, Stock2Shop looks at Sage Evolution and checks if any product information has changed. If so, the B2B trade store is automatically updated. This means that stock, pricing and other product data is never older than an hour on the B2B trade store.  
  
Stock availability is obtained from several different warehouses and the availability is calculated as “stock on hand” minus “stock on sales order”.  
  
All the current price lists are also sent to the B2B trade store. Each product potentially has a price for each price list.

* * *

### Managing Customer and Sales Rep Access

When new customers are created inside of Sage Evolution, they are assigned a customer code. To give this customer (or sales rep) access to the B2B trade store, administrative staff in our example company log into the Stock2Shop web console and assign them access.  
  
Customers are assigned to a price list and are linked to a specific customer account in Sage Evolution. This means when orders are raised into Sage Evolution, they are placed into the correct customer account.

* * *

### The Order Workflow

When new orders are raised, they are instantly pushed from the B2B trade store to Stock2Shop.  
An email notification is sent to staff to alert them of the new order.  
  
If all the details of the order are valid and the payment terms are correct, Stock2Shop sends the order to Sage Evolution to be raised as a sales order and then converted to an invoice.  
  
If the order fails for whatever reason, staff are notified of the failure. They can then log in to the Stock2Shop web console, resolve the issue and re-process the order by clicking a button.

* * *

### Fulfillment and Warehousing

When a successful order is converted into an invoice, Stock2Shop sends an instruction to the 3rd party warehouse for fulfillment.  
  
This is done after the invoice is created as there may be checks that the accounting system does to validate the account before creating the invoice. This ensures goods are not released until the account is seen as valid by the accounting system.  
  
If the invoice is not created, staff are notified. They can then communicate with the customer to resolve the issue and release the goods automatically through the warehouse, using the Stock2Shop web console.

* * *

### Conclusion

This is a simple example of how the B2B trade store can be integrated with Sage Evolution.  
In this example, Stock2Shop has reduced the administration requirements and processing time for the company, ensured that order data is correctly captured, and given customers access to an easy-to-use ordering system.  
  
Stock2Shop is highly customisable and there are many different configuration options for each of the steps above.  
  
[Contact us](/contact-us/) to find out how we can tailor a solution to meet your needs.

* * *