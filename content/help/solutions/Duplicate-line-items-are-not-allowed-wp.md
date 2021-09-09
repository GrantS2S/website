---
title: "Duplicate line items are not allowed"
issue: "Duplicate line items are not allowed"
type: "solution"
seoTitle: "Duplicate Line items are not allowed"
seoDescription: "The sales channel that the order is syncing from has a single sku listed twice on an order"
source: ""
channel: ""
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
This error occurs when the order from a sales channel a single SKU listed twice as line items on the order. If the SKU is ordered twice it should display as one line item on the order with a qty of "2".

This also occurs when the sales channel has a specific discount process, in which the system adds the same SKU to the order as a negative value to display the discount.

#### Error solution

To confirm which of the above is causing the error, follow the below steps:

- Log in to S2S Console
- Click on *Queue > View*
- Click on the three dots on the right the order error > click *View Item*
- Scroll down on the payload and find the order number ("order_number":)

{{< highlight go >}}
{
  "order": {
    "order": {
      "id": 443,
      "order_number": "443",
      "order_key": "wc_order_6KyJndyBGpu7O",
      "created_at": "2020-01-16T15:39:44Z",
      "updated_at": "2020-01-16T15:41:02Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "status": "processing",
      "currency": "ZAR",
      "total": "3298.00",
      "subtotal": "3298.00",
      "total_line_items_quantity": 3,
      "total_tax": "0.00",
      "total_shipping": "0.00",
      "cart_tax": "0.00",
      "shipping_tax": "0.00",
      "total_discount": "0.00",
      "shipping_methods": "",
{{< /highlight >}}

- Log in to the admin portal of your WooCommerce Store
- Navigate to *WooCommerce > Orders*  and search for the above order number
- Check order for either duplicate SKU's on different line items or 2 line items with blank SKUs.


If the discount app is causing the order to duplicate the SKU, you will have to contact ***Stock2Shop Support*** to assist in adding a setting to combine the line items. Note Stock2Shop needs to combine them or the order will fail when sending it to the accounting system.

As the order has been created incorrectly, for whichever cause, and you don't want Stock2Shop to automatically combine both line items, it  will need to be manually captured and the fulfillment manually created .

You can also manually adjust the invoice to only have a unique line item per SKU.
