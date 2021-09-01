---
title: ""
name: "channelmeta_magento2"
key: "order_ship_map"
description: "Creates the shipment and updates tracking information from ParcelNinja. ParcelNinja webhook required."
user_friendly_description: ""
default: "{   &quot;notify&quot;: false,   &quot;appendComment&quot;: true,   &quot;comment&quot;: {     &quot;comment&quot;: &quot;{{status}}&quot;,     &quot;is_visible_on_front&quot;: 0   },   &quot;tracks&quot;: [     {       &quot;track_number&quot;: &quot;{{tracking_number}}&quot;,       &quot;title&quot;: &quot;{{tracking_company}}&quot;,       &quot;carrier_code&quot;: &quot;{{tracking_company}}&quot;     }   ] }"
values: []
tags: [channelmeta,magento2]
type: "meta"
process: ""
headless: true
---