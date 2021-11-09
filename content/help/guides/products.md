---
title: "Products"
seoTitle: ""
seoDescription: ""
seoKeyword: [""]
type: guides
tags: ["console"]
aliases:
    - 
---

You can add and update information about your products directly on your Stock2Shop console. 
If you need to add add additional or custom information to your products this can be achieved by adding product attributes.

## Adding a product
To add a product manually via your Stock2Shop console:

1. From your Stock2Shop console, go to Products > Add.
2. Select the [source](/help/guides/source "What is a Stock2Shop source") you will be adding the product to.
3. Fill out the following sections:
    - Product Details
    - Options
    - Inventory & Variants
    - Collection
    - Tags
4. Click Save.
---

## Adding product attributes
After you have added products with the standard fields Stock2Shop has to offer, you can enrich them by adding any other additional product information that is necessary to your integration using attributes.
There are two ways in which you can manually add product attributes. To add attributes one at a time:

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like to add attributes to.
3. Click on the three vertical dots and click edit.
4. Click on the Attributes tab.
5. Under Add Custom Attribute, define the attribute key or the name of the attribute.
6. Add the value of the attribute.
7. Click Add.

If you have a set of attributes you would like to apply to every product, and then update the value of each attribute, this too can be done.
You will first need to create an attribute template:

1. From your Stock2Shop console, go to Settings > Product Templates.
2. Click Create Template.
3. Name your product template and fill out the following information
    - Add the name of the attribute 
    - Select the attribute type.
    - Set a default attribute value. 
    - Add a description about the attribute.
    - Select whether the attribute is required or not. If an attribute is required it cannot be left blank.
4. Repeat this process until you have created all the attributes in the template that you require.
5. Click Save.

Now that you have created your product attribute template, you can start adding the templates to your products:

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like to add attributes to.
3. Click on the three vertical dots and click edit.
4. Click on the Attributes tab.
5. Under Attribute Templates, click add on the template you would like to apply to the product.
6. Update the default attribute values where required.
7. Click Save All Attributes.

---

## Editing and updating products
- On the Stock2shop console Navigate to products > view > edit
- Talk about things we can edit on products > Genereal
- Talk about editing price lists and warehouses under variants

---

## Importing products
Importing of products can be used to bulk add products to your Stock2Shop console and or update and further enrich existing products.
To add new products to your Stock2Shop console:

1. From your Stock2Shop console, go to Products > Import.
2. Select the source you will be importing against. 
3. Deselect Skip adding new products.
4. Select Ignore flags.
5. Select your file that has your new products.
6. Click Import Products.

To update and or enrich existing products on your Stock2Shop console:

1. First export (link to export) your products on Stock2Shop
2. Update this export with any enrichment information.
3. Save as a .CSV file
4. From your Stock2Shop console, go to Products > Import.
5. Select the source you will be importing against. 

Example import sheet attached [here](https://docs.google.com/spreadsheets/d/1ouYrwVcM--PuWzbQjCtiauB_FdGEGKSlWI9slJ18WAA/edit#gid=0 "Example product import template")

---

## Exporting products
1. On the Stock2shop console Navigate to products > export
2. Select the fields you wish to export
3. Select whether you want to export all product from source or only some that are linked to a certain channel

---

## Working with product images
- Manually add product images
- Image size and aspect ratio (nothing > 2mb)
- Image file types that are accepted
- Bulk import product images
- Bulk import multiple

---

## Deleting products 
- Manual deletion
- Bulk deletion viq the product import

source_product_code
source_variant_code
active = false

---

## View sales channel(s) linked to product
In order to confirm which products are linked to your sales channel(s).

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like 
3. Click on the three vertical dots and click edit.
4. Click on the Channels tab.


---

## View product audit trail
The product audit lets you view all activity relating to a product over the last 30 days.

- On the Stock2shop console Navigate to products > product > audit

---
