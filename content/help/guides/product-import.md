---
title: "Importing and Exporting Product Data"
seoTitle: "Importing and Exporting Product Data with Stock2Shop"
seoDescription: "Instructions on how to use the Stock2Shop Import/Export features for Product data."
type: guides
tags: ["product"]
draft: ture
aliases:
    - /documentation/product-data/product-export/
---

Stock2Shops console has the ability to export all your product data fields that sync from your ERP / Accounting system,
make any changes to the fields available and import the data back into the console.

There are certain settings applied to ensure that the data that you have imported does not get overwritten on the next 
sync from your ERP/Accounting system, these setting are a feature called flags.

We suggest you contact support@stock2shop.com to find out if your flags have been set up according to the fields
that you would like to make changes to. 

## Exporting
Here are some steps to Export your Product data. You can see our [Product Fields](/how-to/products/product-fields) for more information.

- Log in to your console - https://console.stock2shop.com/ 
- [Click here](https://console.stock2shop.com/console/#/products/export) or Hover over the "Products" Tab and Click "Export"
- Tick the boxes of the fields you wish to include on your export

Here are the Fields that can be selected for your Export data.

|Name|Description|Field required for Import|
|---|---|---|
|S2S Product ID|This is the S2S internal id of the product|Field not required for Import or Export|
|Source Product Code|This is the product code of your products/grouping code of your variants|Field will be required when making changes to any field on the "GENERAL" tab , Image tab or Attributes tab|
|Channel Product Code|This can be unticked as it will not populate on the Export|NOT REQUIRED|
|S2S Variant ID|This is the S2S internal id of the variant|Field not required for Import or Export|
|Source Variant Code|This is the variant identifier syncing from your ERP/Accounting system|Field will be required when making changes to any field on the "VARIANTS" tab|
|Product Title|This is the title of your product|source_product_code + title required to make changes to this field|
|Product Description|This is the Long Description of your product, the column name on the export is "body_html"|source_product_code + body_html required to make changes to this field|
|Collection|This is the collection of your product|source_product_code + collection required to make changes to this field. This field can be used for Shopify collections, WooCommerce Categories, and Magento Categories|
|Product Type|This would be the type of your product|source_product_code + product_type required to make changes to this field|
|Tags|This would be the tags of your product|source_product_code + tags required to make changes to this field|
|Vendor (Brand)|This is the brand of the product|source_product_code + vendor required to make changes to this field|
|SKU|This is the unique identifier of the variants, this field should sync from your ERP/Accounting system|source_variant_code + SKU required to make changes to this field|
|Barcode|This is the barcode of your Variant|source_variant_code + barcode required to make changes to this field|
|Default Price|This is the price list that has been set as default|source_variant_code + price required to make changes to this field|
|QTY|This is the qty that has been set as default|source_variant_code + qty required to make changes to this field|
|Weight (Grams)|This is the weight of your variants|source_variant_code + grams required to make changes to this field and can only be stored in grams|
|Inventory Managed|This field is for inventory management, TRUE or FALSE|Source Variant code required to make changes to this field|
|Option Name 1|This is the label of the first option|source_variant_code + option1_name  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Value 1|This is the value of the first option|source_variant_code + option1_value required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Name 2|This is the label of the second option|source_variant_code + option2_name  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Value 2|This is the value of the second option|source_variant_code + option2_value required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Name 3|This is the label of the third option|source_variant_code + option3_name  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Value 3|This is the value of the third option|source_variant_code + option3_value  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Variant Image|This is the URL of the image assigned to the variant|Not used on an import|
|All Images|This is the urls for all images on this product (Each image listed in own column)|source_product_code + image1, image2, etc required to make changes to these fields|
|All product attributes|This is all the product attributes (Each listed in own column)|source_product_code + meta_[attribute] required to make changes to these attributes (meta_ tells the Stock2Shop system to create/update a specific attribute after the "meta_")|
|All price tiers|This is all the price lists available on the variants (Each listed in own column)|source_variant_code + price_[price list name] required to make changes to price lists ( price_ tells the Stock2Shop system to create/update a specific price list after the "price_")|
|All qty availability|This is all the warehouses available on the variants (Each listed in own column)|source_variant_code + qty_[warehouse name] required to make changes to these fields (qty_ tells the Stock2Shop system to create/update a specific warehouse after the "qty_")|



- Once the fields have been selected, you will need to select the Source that is relevant.
   (For Integrations with more than 1 Source)

- Click "EXPORT PRODUCTS"  the console will start to process the CSV file, you can wait for the Download link to Generate.
    
- Once processed, you can click on the generated link to download the CSV file for editing.
    
- Save the export and open it in either Google Sheets or Excel. 

## Importing

When importing data into Stock2Shop, the key points to remember are:

- Only import fields required and fields that have updates to them. Avoid Importing Quantity and Price fields if not being updated.
- If these fields are updated by your ERP/Accounting system, you should not need to import them.
- Are the flags set up accordingly (Consult support@stock2shop.com to assist) to update specific fields in Stock2Shop that you are trying to import?
- Is my import file in plain CSV format?

Once you have populated the correct fields per the above, follow the below steps to process your import:

- Login to your console - https://console.stock2shop.com/ 
- [Click here](https://console.stock2shop.com/console/#/products/import) or Hover over the "Products" Tab and Click "Import"
- Read the fields listed and make sure you are aware of the fields you are importing and have the required fields in place.
- Select your primary source (Main ERP/Accounting system)
- Ensure that both **"Skip adding new products"** and "[Ignore flags](/documentation/key-concepts/flags/)"  are ticked **NB**
- Click on "SELECT FILE" and choose the CSV file that you wish to import.
- Click on "IMPORT PRODUCTS"
- The import will process and depending on the size of the import file it may take some time. Once complete, you will
see a breakdown of the Import.

## Processing Queue
Any import into your console will be added to the Queue, hover over Queue and click on "View" you will see the 
lines containing "sync_products" wait for the queue to complete and open one or two products and confirm that your 
import has processed successfully. Should your changes not reflect, or an error occurs contact support@stock2shop.com for assistance. 

