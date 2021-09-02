---
title: "Customise the order display page"
name: "channelmeta_trade"
key: "order_view_display"
description: "Fields included on the order view page. Meta fields can be accessed as &quot;meta.some_value&quot;"
user_friendly_description: "Add additional information to order display page that might be important to your customers. By default the order number and sales order number are included."
default: "{
        &quot;ORDER NO&quot;: &quot;order.channel_order_code&quot;,
        &quot;SALES ORDER NO.&quot;: &quot;order.sources[0].source_order_code&quot;
    }"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "orders"
headless: true
---