---
title: "Orders"
seoTitle: "Stock2Shop Orders walk through."
seoDescription: "Guide to working with orders in the Stock2Shop console."
seoKeyword: [""]
type: guides
tags: ["console"]
aliases:
    - 
---

You can view, edit, reset and export information about your orders directly on your Stock2Shop console. 

- [View orders](#view-orders)
- [View order history](#order-history)
- [Export order](#export-order)
- [Fetch order](#fetch-order)
- [Order fulfillments](#order-fulfillments)
- [Send order](#send-order)
- [Reset order](#reset-order)

## View orders {#view-orders}
Once you have orders in Stock2Shop there are a few ways in which you can view, search and filter for products.

To simply view a list of your orders:

1. From your Stock2Shop console, go to Orders > View.
2. You can then sort your products by date created or modified.
3. You can also set the number of orders to display per page, either 10, 20 or 50.

To search for a specific order:

1. From your Stock2Shop console, go to Orders > View.
2. Add the ID, Channel Code, Source Code or Customer to the search bar.
3. Suggested search results will appear that you can then click on.

To filter for a specific order or orders:

1. From your Stock2Shop console, go to Orders > View.
2. Click Filters.
3. Apply filters based on Orders:
    - Linked to a certain channel.
    - With a specific status.
    
---

## View order history {#order-history}
You can view the history of the order from when it was received from the sales channel, to when it was updated and finally when it was added to your source.

1. From your Stock2Shop console, go to Orders > View.
2. Search for the order you would like to view.
3. Click on the three vertical dots and click edit.
4. Click on the History tab.
5. Click on View Data.

---

## Export order {#export-order}
You can export your orders to a CSV file where you will be able to work with the data outside of Stock2Shop.

1. From your Stock2Shop console, go to Orders > Export.
2. Click Export Products.
3. Click Click here to download export file.

By default the export will only contain the following order information for each order. No order line item information will be exported:

```
created
order_id
channel_order_code
source_order_code
channel_id
source_id
status
total_discount
sub_total
tax
total
customer_first_name
customer_last_name
customer_email
```

---


## Fetch order {#fetch-order}
You can fetch orders from your source (ERP / Accounting System) and add it to Stock2Shop. This will only retrieve the order header information and not the order line item information.

1. From your Stock2Shop console, go to Orders > Fetch.
2. Insert the code of the order as per the source.
3. Select the source you would like to add it to.
4. Click Add.

---

## Order fulfillments {#order-fulfillments}
You can view, edit and manually fulfill orders in the Stock2Shop console.

To view order fulfillment information regarding a specific order:

1. From your Stock2Shop console, go to Orders > View.
2. Search for the order you would like to view.
3. Click on the three vertical dots and click edit.
4. Click on the Fulfillments tab.

To manually edit and fuflill an order:

1. From your Stock2Shop console, go to Orders > View.
2. Search for the order you would like to view.
3. Click on the three vertical dots and click edit.
4. Click on the Fulfillments tab.
5. Click Fulfill.
6. Confirm the fulfillment information is correct.
7. Click Fulfill Order.

---

## Send order {#send-order}
You can manually send your order to your source from the Stock2Shop console.

1. From your Stock2Shop console, go to Orders > View.
2. Search for the order you would like to send.
3. Click on the three vertical dots and click edit.
4. Click Send

---

## Reset order {#reset-order}
You can reset orders that have already been processed to your source. Resetting the order will set the status to "processing" and remove all the order codes linking this order to your source.

1. From your Stock2Shop console, go to Orders > View.
2. Search for the order you would like to reset.
3. Click on the three vertical dots and click edit.
4. Click Edit on the order.
5. Click Reset.

---




