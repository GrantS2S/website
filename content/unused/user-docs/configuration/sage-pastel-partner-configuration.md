---
title: "sage pastel partner configuration"
description: "Settings for integrating Sage Pastel Partner with multiple sales channels such as Magento, Woocommerce, Shopify and Stock2Shop's B2B ordering platform. Let us work with you to create the perfect workflow for your business."
lead: "Stock2Shop has full support for Sage Pastel Partner. This means that inventory information can be fetched and orders can be raised, simply and easily."
aliases: "/documentation/configuration/sage-pastel-partner-configuration/"
toc: true
menu:
  docside:
    parent: Configuration
    name: Sage Pastel Partner
    weight: 10
---

Sage Pastel Partner is a flexible system. Over the years, Stock2Shop has added configuration options to this platform and continues to do so. These configuration options help to simplify the process of pulling inventory data out of Sage Pastel Partner and sending this to sales channels. There are also many configuration options for how sales orders get handled inside of Pastel Partner.

“Out of the box” inventory functionality that ships with Pastel Partner includes:

- Multiple price lists (up to 10)
- Multiple warehouses (stores)
- User-defined fields

Pastel Partner also has some limitations. The main ones are:

- Only 10 price lists available
- Field lengths are short, so no long text data can be stored against your inventory
- Only one image per product (inventory item)
- Limited inventory user-defined fields (3 text, numeric and Boolean)

---
## Recommended Configuration
Because of these limitations, we recommend only using the “core” inventory data from Pastel.

By “core” we mean only using the SKU (product code), price lists, availability (can be from multiple warehouse) and product title (description).

Trying to manage long descriptions, multiple categories and other attributes is usually not practical inside Pastel Partner. We recommend adding this kind of information to your products via our web console or via a linked Google Sheet. Managing product data in a spreadsheet is far easier than doing this inside Pastel Partner.

If you plan on only ever having one sales channel, then you can manage your attribute product data in the specific channel (e.g. Magento, Shopify and WooCommerce) and leave Stock2Shop to send through pricing and quantity and send orders to Pastel.

---
## Deciding which products to pull out of Sage Pastel Partner
There are a number of different ways to choose which products get sent to Stock2Shop. Here are some options we have already configured:

- Use a warehouse (store) and assign products to a specific store
- Use a user-defined field
- Use specific inventory groups

We can further customise how inventory data is fetched to suit your workflow. You simply need to provide us with a specific requirement and we will let you know if it is possible.

---
## Raising orders
We can raise a “sales order” or we can create an “invoice”. This is up to you. The order can be assigned to a default customer account, or you can choose to create new customer accounts automatically.

For B2B transactions, we recommend that the customer account is already created and you don’t allow the creating of customers accounts.

For B2C transactions, such as sales off a retail website, we recommend creating one cash account and posting all orders to that account.

Any questions? [Contact us](/contact-us) – we’re happy to help.