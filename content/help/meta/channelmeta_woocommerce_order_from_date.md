---
title: "Determine when orders should sync from"
name: "channelmeta_woocommerce"
key: "order_from_date"
description: "Only orders after this date will be processed. Date sting must be in iso 8061 format (YYYY-MM-DD)"
user_friendly_description: "If you have captured orders from WooCommerce into your ERP / Accounting system already, you wouldn't want Stock2Shop raising them again. Set the date as to when Stock2Shop should start raising orders."
default: ""
values: []
tags: [channelmeta,woocommerce]
type: "meta"
process: "orders"
headless: true
---