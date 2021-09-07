---
title: "Create products on WooCommerce"
name: "channelmeta_woocommerce"
key: "create_product_enabled"
description: "If set to true allow new products to be created. If false(DO NOT use this setting if false) only products already on the channel will update - any that do not exist will be given a channel ID of '0'. Any updates to the product will trigger queue errors. Note if a product tries to update but is not found, further updates will fail due to invalid channel ID and would need to be reset."
user_friendly_description: "Determine whether or not you want Stock2Shop to create products on WooCommerce or only link to existing products on WooCommerce."
default: "true"
values: []
tags: [channelmeta,woocommerce]
type: "meta"
process: "products"
headless: true
---