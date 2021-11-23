---
title: "Segments"
seoTitle: "Managing Bulk Image Uploads"
seoDescription: "Managing Bulk Image Uploads"
type: guides
source: ""
tags: ["key-concept"]
draft: false
aliases:
    - 
---

[example link](/url/ "This is a tile for a link")

The segments feature gives Stock2Shop clients the ability to create filters (rules) for console users as well as B2B Trade Store customers.
As the client you will be able to determine which customers your sales reps have access to on your console. 
You will also be able to create filters (rules) to determine what products specific B2B Trade Store customers should see.
It works by creating relationships between customers and products. Let's take a look at some use cases.


### Segment B2B Trade Store Customer
Segmenting products by customer on the Stock2Shop B2B Trade Store is particularly useful when you have many customers, 
but certain customer should only see certain products at a certain price from a specific warehouse. 
More over, if a product does not have a price or quantity, it should not be visible. 


#### Use Case 1 (Segment by price list)
In this use case, we want customers to only see products based on the price list they are assigned to.
We should also add a segment to remove any products in the price list that do not have a value, or is 0.

```
For customer 1
Segemet 1
- Segement type = products
- Field = Price Tier Name
- Operator = Equal
- Value = price_list_1
```

```
Segemet 2
- Segement type = products
- Field = Price Tier Price
- Operator = Greater Than
- Value = R0.00
```

As a result, this customer will only see products in price_list_1 that have a value greater than 0.

#### Use Case 2 (Segment by warehouse)
In this use case, we want customers to only see products based on a specific warehouse, or a warehouse they are assigned to.
We should also add a segment to remove any products in the warehouse that do not have a value, or is 0.

```
For customer 1
Segemet 1
- Segement type = products
- Field = Warehouse Name
- Operator = Equal
- Value = mstr (master)
```

```
Segemet 2
- Segement type = products
- Field = Warehouse QTY
- Operator = Greater Than
- Value = 0
```

There may be many other ways you would want to segment products by customer, however we recommend the aforementioned use cases.

### Segement Console Users
Segments also allow you to limit what the console user can view. For example, you could limit a sales rep to only view customers associated to them.
So when we sync B2B Trade Store customers to Stock2Shop from your ERP / Accounting system we sync the sales rep associated to this customer. 
Once this has been completed, you would then need to create this segment for every sales rep console user.

#### Use Case 1 (Segment by customer)
In this use case, we want sales resp to only see customers they are associated to.
In order to acheive this realationship we would first need to sync the sales rep id from the ERP / Accounting system.
Once the sales rep has been set on the customer as an attribute.

```
- Navigate to settings > Manage Users
- Search for the console user > Edit
- You wil then create the following two segments
```

```
Segemet 1
- Segement type = customers
- Field = attribute key
- Operator = equal
- Value = rep_id
```

```
Segemet 2
- Segement type = customers
- Field = attribute value
- Operator = equal
- Value = actual rep_id (123)
```

Note: Only Admin users have the ability to create segemnts on other console users

```
If you source does not support the syncing of customers please see this guide [Manual customer import]() and the adding of customer attributes.
To add attributes to imported customers, please see [Adding customer attributes]()
Note: link to console user doc [here]()
```

## Limitations
The only limitation for segments to be aware of is that you are not able to add more than one segment field.
For example, if you are tyring to segment by Brand, you can't add two brand segments. 
If you try doing this, you will overwrite the first brand segment. A practical exmaple of this would be:


```
- field: "Price Tier Name"
- Operator: Equals
- value: PriceList1
```

If you then add:

```
- field: "Price Tier Name"
- Operator: Equals
- value: PriceList2
```

The first will be overwritten

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com

