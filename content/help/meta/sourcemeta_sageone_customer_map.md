---
title: "Set additional customer information"
name: "sourcemeta_sageone"
key: "customer_map"
description: "Map used to create new customers, see Sage One API docs"
user_friendly_description: "When a customer is created in Sage Business Cloud Accounting (triggered by an order), you have the ability to add additional information to the customer."
default: "{
  &quot;Name&quot;: &quot;{{billing_address.company}}&quot;
}"
values: []
tags: [sourcemeta,sageone,sage-business-cloud-accounting]
type: "meta"
process: "orders"
headless: true
---