---
title: "Check ordered items exist in Stock2Shop"
name: "channelmeta_takealot"
key: "check_order_items_linked"
description: "Ensures order items must have corresponding variant on S2S or the order fails."
user_friendly_description: "Stock2Shop can compare your order line items to the inventory synced to our system and ensure that the items contained in orders, also appear in Stock2Shop. If this is not a requirement we can simply send the order to your ERP / Accounting System without checking."
default: "false"
values: []
tags: [channelmeta,takealot]
type: "meta"
process: "orders"
headless: true
---