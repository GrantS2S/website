---
title: "Send order fulfillent to Stock2Shop"
name: "channelmeta_shopify"
key: "fulfillment_map"
description: "Map used to transform the S2S fulfilment into the Shopify fulfilment, NB! Update location ID from channel setting and add to map, see this documentation https://help.shopify.com/en/api/reference/shipping-and-fulfillment/fulfillment#create"
user_friendly_description: "Once Stock2Shop has received fulfillment data from your fulifllment service we can map this to Shopify to update the order status as well as trigger fulfillment emails that will be sent to your client."
default: "{ 	&quot;fulfillment&quot;: { 		&quot;tracking_number&quot;: &quot;{{tracking_number}}&quot;, 		&quot;tracking_company&quot;: &quot;{{tracking_company}}&quot;, 		&quot;tracking_url&quot;: &quot;{{tracking_url}}&quot;, 		&quot;location_id&quot;: 123456789, 		&quot;notify_customer&quot;: false 	} }"
values: []
tags: [channelmeta,shopify]
type: "meta"
process: "fulfillments"
headless: true
---