---
title: "URL key for specified store already exists"
issue: "Magento 2.x: URL key for specified store already exists"
type: "solution"
seoTitle: "`Magento: URL key for specified store already exists"
seoDescription: "A product is trying to use the same url of an existing product."
source: ""
channel: "magento_2"
fulfillment: ""
process: products
headless: true
---

#### Error description
A product is trying to use the same url of an existing product.

#### Error solution
Magento does not allow duplicate product names, as it uses them to create url keys.
Update any duplicate product titles then retry any errors in the queue with a similar message.
