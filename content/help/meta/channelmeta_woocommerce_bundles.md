---
title: "Update bundled products in WooCommerce"
name: "channelmeta_woocommerce"
key: "bundles"
description: "JSON to define bundles, bundles need to exist on Woo. At this point in time we pass the price of R0 for each bundled item into the accounting system."
user_friendly_description: "Update your existing bundled products in WooCommerce directly from Stock2Shop. It is a requirement that bundles are pre populated in WooCommerce, as Stock2Shop does not create bundles."
default: "{   &quot;sku of bundle&quot;: [     &quot;sku of item 1&quot;,     &quot;sku of item 2&quot;,     &quot;sku of item 3&quot;   ] }"
values: []
tags: [channelmeta,woocommerce]
type: "meta"
process: "products"
headless: true
---