---
title: "Link products in Stock2Shop to Shopify automatically"
name: "channelmeta_shopify"
key: "auto_sync"
description: "If true, will check products on Shopify first and link them to system products. If product not found on Shopify it will create the product on Shopify from the system product. If false all system products will be created on Shopify regardless"
user_friendly_description: "Let Stock2Shop automatically link to your products that have been created in Shopify already. Once a link has been created, Stock2Shop will continue to update that product. Links are created via the SKU. If the product does not exist in Shopify, Stock2Shop can create it for you."
default: "true"
values: []
tags: [channelmeta,shopify]
type: "meta"
process: "products"
headless: true
---