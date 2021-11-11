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
If you need to add additional or custom information to your products this can be achieved by adding product attributes.

## Add a product
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

## Add product attributes
After you have added products to Stock2Shop, you can enrich them by adding any other additional product information that is necessary to your integration using attributes.
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

## Edit a product
After you have added products, you can edit them to change their titles, descriptions, categorisations, prices, warehouses and any other product details.
To edit or update a product on your Stock2Shop console:

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like to edit.
3. Click on the three vertical dots and click edit.
4. Modify the [product](/help/guides/product/ "Understanding products in Stock2Shop") and [variant](/ "Understanding variants in Stock2Shop") details.
5. Click Save.

---

## Import products
Importing of products can be used to bulk add products to your Stock2Shop console and or update and further enrich existing products.
To add new products to your Stock2Shop console:

1. From your Stock2Shop console, go to Products > Import.
2. Select the source you will be importing against. 
3. Deselect Skip adding new products.
4. Select Ignore flags.
5. Select your file that has your new products.
6. Click Import Products.

To update and or enrich existing products on your Stock2Shop console:

1. Export (link to export) your products on Stock2Shop.
2. Update this export with any enrichment information.
3. Save as a CSV file
4. From your Stock2Shop console, go to Products > Import.
5. Select the source you will be importing against. 

Example import sheet attached [here](https://docs.google.com/spreadsheets/d/1ouYrwVcM--PuWzbQjCtiauB_FdGEGKSlWI9slJ18WAA/edit#gid=0 "Example product import template")

---

## Export products
You can export your products to a CSV file where you will be able to edit and or update.

1. From your Stock2Shop console, go to Products > Export.
2. Select the fields you wish to export.
3. Select if you would like to select all products from a source or only products linked to a certain channel.
4. Click Export Products.
5. click Click here to download export file.

---

## Add product images
You can manually add an image or images to a product or bulk import images.

To manually add an image to a product:

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like to add an image or images to.
3. Click on the three vertical dots and click edit.
4. Click on the Attributes tab.
5. Click Select a file.
6. Click Upload Image.

To bulk import multiple images for multiple products:

1. From your Stock2Shop console, go to Products > Import Images.
2. Select the [source](/help/guides/source "What is a Stock2Shop source").
3. Select the filed to be used as the identifier.
4. Click Select Files.
5. Click Upload All.

Note: ensure that your image names are identical to the identifier field, else your import may not work.

1. using find and replace to remove text from image name.

```
- Manually add product images
- Image size and aspect ratio (nothing > 2mb)
- Image file types that are accepted
- Bulk import product images
- Bulk import multiple
```

---

## Delete products
You can manually delete a single product or delete multiple products using the product import feature.

To manually delete a single product:

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like to delete.
3. Click on the three vertical dots and click edit.
4. On the General tab click Delete.
5. Select OK.

To delete multiple products:

1. Export (link to export) your products on Stock2Shop.
2. Open the export in a spreadsheet application (Google Sheets / Microsoft Excel).
3. Remove any products from the spreadsheet that you do not want to delete.
4. Keep the following columns:
    - source_product_code
    - source_variant_code
    - active
5. Set the active filed on all products to FALSE.
6. Save the file on your computer.
7. Import the file into Stock2Shop.

By setting the active field as false, you will bulk delete these products.

---

## View product linked to sales channel(s)
To confirm if a product is linked to a sales channel or multiple sales channels.

1. From your Stock2Shop console, go to Products > View.
2. Search for the product.
3. Click on the three vertical dots and click edit.
4. Click on the Channels tab.

The corresponding channel product code and channel variant code will be present if the product is linked. 
If there is no channel product code and or channel variant code the product is not linked to the channel.

---

## View product audit trail
To view the last 30 days activity of your you product, you can use the product audit feature.

1. From your Stock2Shop console, go to Products > View.
2. Search for the product you would like to audit.
3. Click on the three vertical dots and click edit.
4. Click on the Audit tab.

---
