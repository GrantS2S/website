---
title: "Send shipping updates to Magento"
name: "channelmeta_magento2"
key: "shipment_comment_map"
description: "Configuration of the Shipment comments. entity_id is required as an order param - add entity_id to order_map"
user_friendly_description: "Whenever there is a new comment on the status of your customers order from your 3rd party logistics company or WMS these can be sent to Magento to notify your customer."
default: "{   &quot;entity&quot;: {     &quot;is_customer_notified&quot;: 0,     &quot;comment&quot;: &quot;{{status}}&quot;,     &quot;is_visible_on_front&quot;: 0   } }"
values: []
tags: [channelmeta,magento2,magento-2]
type: "meta"
process: "fulfillments"
headless: true
---