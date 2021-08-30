---
title: "Why is tax not raised correctly on the order document in ERP/Accounting System?"
seoTitle: "Why is tax not raised correctly on the order document in ERP/Accounting System?"
seoDescription: "Orders are being raised into the ERP without Tax coming through correctly."
image: ""
---

## What does this error mean?

Stock2Shop sends ex vat prices of orders to ERP/Accounting System with a specific tax code which calculates the inclusive tax on the system. This means if Tax is set up incorrectly on Shopify, or if the tax code configured is not the same rate as the website tax the calculation won't be correct on the ERP/Accounting side 

## What issue(s) does this cause?

This issue causes a mismatch of order totals in the ERP vs S2S/Shopify

## How to confirm the source of the issue?

1. Click on the three dots of an affected order > view
2. Click on "History" tab
3. Search for the "Sync Order" instruction > click "View Data"
4. Search the payload for "shipping_lines"
5. Within "shipping\_lines"search for "tax\_lines"
6. If the array is empty > tax for shipping has not been set on Shopify.
7. Search the payload for "line_items"
8. Within "line\_items"search for "tax\_lines"
9. If "Price" does not match what the rate should calculate to > Tax has been set incorrectly on Shopify.

## How to resolve the issue

1. Navigate to Shopify tax settings (Settings > Taxes)
2. Edit the appropriate "Tax Region" (e.g. South Africa)
3. Confirm that either the "Country Tax" or "Region" is set. Not Both
4. In tax settings > Confirm that "Charge tax on shipping rates" is ticked (If you charge tax on Shipping and depending if the price for shipping includes your tax)
5. In tax settings > Show all prices with tax included (tick if the price sent from ERP/Accounting System is inclusive and keep unticked if the price assigned to Shopify is Ex Vat price from ERP/Accounting System)
6. Make sure "Charge tax on this product" is ticked on each product if you charge tax
7. Create test order and check ERP/Accounting System to see if tax is correct and totals match

## To note

[Shopify tax documentation](https://help.shopify.com/en/manual/taxes)