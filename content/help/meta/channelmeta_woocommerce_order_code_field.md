---
title: "Set an order code reference"
name: "channelmeta_woocommerce"
key: "order_code_field"
description: "The Woocommerce field in the order webhook used for order number, if this is not set the id field is used"
user_friendly_description: "When raising orders to your ERP / Accounting System we can set the WooCommerce order code as a reference, so you know which order it relates to in WooCommerce."
default: "order_number"
values: []
tags: [channelmeta,woocommerce]
type: "meta"
process: "orders"
headless: true
---