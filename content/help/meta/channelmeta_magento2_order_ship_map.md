---
title: "Create shipment in Magento"
name: "channelmeta_magento2"
key: "order_ship_map"
description: "Creates the shipment and updates tracking information from ParcelNinja. ParcelNinja webhook required."
user_friendly_description: "If you are using a 3rd party logistics company or a WMS, Stock2Shop can shipments in Magento and update the shipments with important shipping information such as waybill, tracking number and comments."
default: "{   &quot;notify&quot;: false,   &quot;appendComment&quot;: true,   &quot;comment&quot;: {     &quot;comment&quot;: &quot;{{status}}&quot;,     &quot;is_visible_on_front&quot;: 0   },   &quot;tracks&quot;: [     {       &quot;track_number&quot;: &quot;{{tracking_number}}&quot;,       &quot;title&quot;: &quot;{{tracking_company}}&quot;,       &quot;carrier_code&quot;: &quot;{{tracking_company}}&quot;     }   ] }"
values: []
tags: [channelmeta,magento2,magento-2]
type: "meta"
process: "fulfillments"
headless: true
---