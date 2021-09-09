---
title: "Check product exists in Sage Business Cloud Accounting"
name: "sourcemeta_sageone"
key: "order_by_sku"
description: "If true, we look up the sku on Sage for each line item. Used if there is no previous link for this product"
user_friendly_description: "Before we sync the order to Sage Business Cloud Accounting we first check that all items on the order exist in Sage Business Cloud Accounting."
default: "false"
values: []
tags: [sourcemeta,sageone,sage-business-cloud-accounting]
type: "meta"
process: "orders"
headless: true
---