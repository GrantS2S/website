---
title: "Allocate discount to line items"
name: "sourcemeta_apifact_omniaccounts"
key: "param_line_item_discount"
description: "Order setting: When active then any order with a total discount will have this discount divided across all the line items excluding price (shipping lines are not included)"
user_friendly_description: "This setting take the total order discount and splits it evenly between the items ordered."
default: "false"
values: []
tags: [sourcemeta,apifact,omniaccounts,omni-accounts]
type: "meta"
process: "orders"
headless: true
---