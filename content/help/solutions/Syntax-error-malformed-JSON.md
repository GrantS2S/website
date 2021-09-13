---
title: "Syntax error malformed JSON"
issue: "WooCommerce: Syntax error malformed JSON"
type: "solution"
seoTitle: "WooCommerce: Syntax error malformed JSON"
seoDescription: "Failed to update a product or variant due to an incorrect response from the server."
source: ""
channel: "woocommerce"
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
Failed to update a product or variant due to an incorrect response from the server.

#### Error solution
Some steps below to help investigate and resolve the server issue. Contact Stock2shop Support if this looks greek!

- Confirm that API URL is still valid.
- View error logs to see the error when trying to update variant and resolve
- Log in to WooCommerce backend and confirm that API keys are still in place
- If updates still don't work,  investigate if there have been any recent website updates, server changes, hosting changes, plugin updates and revert back to when it was working
- Contact WooCommerce hosting company to get server error logs at the time of the error
- Ask hosting company support for assistance in resolving API issues
- Clear Cloudflare cache and plugins
- Test requests using Postman

Retry queue errors once the API issues are resolved.