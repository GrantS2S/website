---
title: "Customer account display"
name: "channelmeta_trade"
key: "account_display"
description: "Map used to display additional information on the customers account page. Does not require the mustache template. Use meta_ to map customer attributes."
user_friendly_description: "Set custom fields to display additional information on the customers account page. This may include credit limit, balance, and who the sales rep for the customer is."
default: "{
  &quot;Some Text&quot;: &quot;abc&quot;,
  &quot;Balance&quot;: &quot;meta_balance&quot;,
  &quot;Credit Limit&quot;: &quot;meta_credit_limit&quot;,
  &quot;Sales Person&quot;: &quot;meta_sales_person&quot;
}"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "products"
headless: true
---