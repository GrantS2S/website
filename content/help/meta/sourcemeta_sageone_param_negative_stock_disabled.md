---
title: "Allow negative stock"
name: "sourcemeta_sageone"
key: "param_negative_stock_disabled"
description: "Do not allow negative stock for this source, if set to true, stock must exist in source or order will fail"
user_friendly_description: "Allow Stock2Shop to sync orders to Sage Business Cloud Accounting even if you do not have quantity available for the product(s) on the order."
default: "false"
values: []
tags: [sourcemeta,sageone,sage-business-cloud-accounting]
type: "meta"
process: "orders"
headless: true
---