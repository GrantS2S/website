---
title: "Set Stock quantity tracking on orders"
name: "sourcemeta_apifact_evolution"
key: "param_negative_stock_disabled"
description: "Order setting: Do not allow negative stock for this source when order is created, if set to true, stock must exist in Evolution warehouse or order will fail"
user_friendly_description: "Determine whether stock quantities can go into negative values when syncing orders to Evolution. If negative stock is not allowed orders will fail to sync."
default: "true"
values: []
tags: [sourcemeta,apifact,evolution,sage-100-evolution,sage-200-evolution]
type: "meta"
process: "orders"
headless: true
---