---
title: "Contract Pricing"
seoTitle: "Flexible pricing for your B2B customers"
seoDescription: "With the Stock2Shop B2B trade store you can create custom pricing for products specific for each of your customers"
type: guides
source: ""
tags: ["b2b"]

---

Provide your B2B customers with flexible pricing per product.
With our contract pricing feature, you can assign customers pricing for each product depending on a contract.
This allows us to model complex pricing hierarchies and rules that may exist in your Accounting or ERP platform.
Think of a contract as a set of rules to determine the final price of a product for each of your customers.

## What is a contract?

A contract exists on either a customer or a product. It defines the rule for calculating a price.
In plain english, some example contracts could be describe like this:-


```For products in category "fruit", give "wholesale" customers 10% off. ```

```For products in category "fruit", give "retail" customers 5% off.```

```For customers in group "wholesale", give 10% off on "fruit".```

```For customer "Acme Ltd", give a fixed price of $10 for "bananas".```

```For bananas give "wholesale" customers a fixed price of $8.```

## How does it work?

Stock2Shop uses additional data stored on products and customers, called "meta data", to define contracts.

### Contract Parts

A contract consists of:-

- **Order:** The hierarchy (order) in which to load the contracts. The first successful contract will be used.
- **Entity:** The entity the contract will apply to. For example, a customer would have a contract with entity “product” to apply to the product and vice versa.
- **Key:** The corresponding entities key to match on. In the above examples, this would be “category” or "group",
- **Type:** "Discount" or "fixed". Is this contract a fixed price or discount from some other price.
- **Value:** The value of the contract, in the case of type discount, this would be a percentage expressed as an integer. In the case of a fixed price, it would be the price,

The string representation of a contract looks like this:-

```order_{int}|entity_{string}|key_{string}|value_{string}|type_{string}```

We could fill out a contract like this:

```order_0|entity_product|key_category|value_fruit|type_discount```


### Representing a contract in product or customer meta

Since we store contracts on product or customer meta, we need some kind of convention to represent the contract.

Below is an example of some "meta data" we may store for a customer and product:-

```json
{
    "customer": {
        "company": "Acme Ltd",
        "meta": [
            {
                "key": "Group",
                "value": "Wholesale",
            }
        ]
    }
}
```
```json
{
    "product": {
        "title": "Banana",
        "meta": [
            {
                "key": "Category",
                "value": "Fruit",
            }
        ]
    }
}
```

Adding in a contract to a product could look like this.

```json
{
    "product": {
        "title": "Banana",
        "meta": [
            {
                "key": "Category",
                "value": "Fruit",
            },
            {
                "key": "order_0|entity_customer|key_Group|value_Wholesale|type_discount",
                "value": "8",
            }
        ]
    }
}
```

The above is the same as saying:

```For customers in group "wholesale", give 8% off on "bananas".```

Adding in a contract to a customer could look like this.

```json
{
    "customer": {
        "company": "Acme Ltd",
        "meta": [
            {
                "key": "Group",
                "value": "Wholesale",
            },
            {
                "key": "order_0|entity_product|key_Category|value_Fruit|type_discount",
                "value": "10",
            }
        ]
    }
}
```

The above is the same as saying:

```For products in category fruit, give wholesale customers 10% off.```


