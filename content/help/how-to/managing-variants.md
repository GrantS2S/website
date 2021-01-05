---
title: Managing Variants 
type: "how-to"
seoTitle: "How to manage variants"
seoDescription: "Managing variants in the Stock2Shop integration with this guide."
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-31T12:16:00+02:00
---

## Understanding your integration

When integrating using S2S, ensure that you understand how S2S maps your data, below are points to confirm when managing your variants

1. S2S Active field - This is the field that S2S will look at to confirm whether a product must sync or be deleted
2. Grouping/Product Code field - This is the field that you would populate to tell S2S which SKUs should be grouped as variable products
3. Option/s field/s - These are the fields that tells S2S/website the difference between the SKUs ie: Size and/or Colour

Refer to "Client Overview" on your handover doc provided during initial setup (Contact S2S if you don't have one)

Once you know the above it will be easier to manage and add variants to S2S and your website.

Key points to remember:

1. All grouped SKUs must have options, ie: if one of the variations/SKUs of a product has a size and colour then all the variations/SKUs of the product should have a size and colour
2. Keep your values of your options uniform, ie: if you are giving one SKU a size value of "XL" don't have other SKUs that say "Extra Large" on a product

Below are some valuable resources to understanding  variable products:  
[Products and variants](/documentation/key-concepts/products-variants/)  
[Product data](/articles/product-data-what-you-need-to-know/)

## Adding and Activating Variants

1. Add your items to ERP/Accounting System. It's advisable to ensure the S2S Active box/field is unticked or marked as Ignore until you're finish adding your batch of products and you're sure they're correct

2. If they are simple products (ie doesn't have variants) then copy the SKU codes into the Product Code field, and leave the Product Options fields blank

3. If they are variable products:
- All SKUs (variants) that should be grouped together as a single product the same Product Code.
- All SKUs within a particular group should have different Product Option values. This value will appear in the drop-down on the website.
- All SKUs within a particular group have the same description (title) - If you are using a field from source to manage titles on your website

4. Check that your newly added items are correct and then mark them as "active" using your S2S Active field with whatever values were set up.

## Changing existing variable products

If you already have variable products syncing to S2S you must ensure that before you change the product type (simple/variable), the product is unmarked in the S2S Active field and completely deleted off S2S and your Website before adjusting the Product Code/Group Code and options.

The reason for ensuring that the product is first completely deleted off S2S is to prevent products from being orphaned in S2S and leading to products being sold incorrectly. Its also important to keep in mind that if a product type needs to change that old product is deleted so it can be created correctly in the new type

## Checking S2S and Channel

Once you have configured and activated your variable products, you should sign into S2S and check that the correct SKU's have been grouped and that the option are all correct within the grouped products.

If they appear to be correct in S2S, check your website and confirm that the product is displayed as expected.
If there are any issues with the products try to ascertain why and follow the steps above to correct.

Should you not be able to get your variable products syncing correctly, contact support@stock2shop.com for assistance.