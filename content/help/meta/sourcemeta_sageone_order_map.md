---
title: ""
name: "sourcemeta_sageone"
key: "order_map"
description: "Override order values using this map. The default values in this map are just an example, do not use them. The map should follow this format https://accounting.sageone.co.za/api/1.1.1/Help/Api/POST-TaxInvoice-Save. The order data used in the transform is the full S2S order, e.g. system_order.channel_order_code and sage customer e.g. sage_customer.TaxReference"
user_friendly_description: ""
default: "{   &quot;TaxReference&quot;: &quot;{{sage_customer.TaxReference}}&quot;,   &quot;DocumentNumber&quot;: &quot;{{system_order.channel_order_code}}&quot;,   &quot;Reference&quot;: &quot;Literal Value&quot;,   &quot;Message&quot;: &quot;{{system_order.notes}}&quot;,   &quot;Discount&quot;: &quot;{{system_order.total_discount}}&quot;,   &quot;PostalAddress01&quot;: &quot;{{system_order.billing_address.first_name}} {{system_order.billing_address.last_name}}&quot;,   &quot;PostalAddress02&quot;: &quot;sample string 21&quot;,   &quot;PostalAddress03&quot;: &quot;sample string 22&quot;,   &quot;PostalAddress04&quot;: &quot;sample string 23&quot;,   &quot;PostalAddress05&quot;: &quot;sample string 24&quot;,   &quot;DeliveryAddress01&quot;: &quot;sample string 25&quot;,   &quot;DeliveryAddress02&quot;: &quot;sample string 26&quot;,   &quot;DeliveryAddress03&quot;: &quot;sample string 27&quot;,   &quot;DeliveryAddress04&quot;: &quot;sample string 28&quot;,   &quot;DeliveryAddress05&quot;: &quot;sample string 29&quot; }"
values: []
tags: [sourcemeta,sageone]
type: "meta"
process: ""
headless: true
---