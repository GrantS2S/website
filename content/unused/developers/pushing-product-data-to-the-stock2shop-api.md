---
title: "Push products to Stock2Shop via the API"
titleList: "Example: API Push Products"
seoTitle: "Push products to Stock2Shop via the API"
seoDescription: "A developer's guide on how to automatically pull products from a Stock2Shop client account via the Stock2Shop API."
lead: "This document outlines steps to send a JSON payload of products to Stock2Shop for processing."
aliases: "/documentation/developers/pushing-product-data-to-the-stock2shop-api/"
weight: 40
---

## Scenario:

You have a Stock2Shop account and want to update products on your account automatically via our API. Once product data is processed it can be enriched or automatically sent to multiple channels for updating.

* * *

## Solution:

Post product data to Stock2Shops queueing system and monitor the progress.
Note: You are billed for the amount of products that are synced across the Stock2Shop network.

* * *

### Step 1: Authenticate

You will need an active Stock2Shop account and a valid console username and password.

Authenticate using the following endpoint.  
[POST /users/authenticate](https://app.stock2shop.com/docs/#!/users/authenticateUser_post_2)

Use the token as the “token” query parameter for all future requests.
You can paste the token in our interactive documentation (at the top of the page) for testing.
This will automatically add in the token for each request.
Any token’s previously issued prior to authentication for a user will be invalidated.

### Step 2: Fetch Sources

Get a list of available sources to push data to.  
[GET /sources](https://app.stock2shop.com/docs/#!/sources/getSources_get_0)  
Take note of the “source_id” you want to use.

### Step 3: Post Products to Queue

[POST /products/queue](https://app.stock2shop.com/docs/#!/products/addProductsToQueue_post_6)  
It is recommended to batch many products per request, instead of individually.  
Each product must contain only one variant, in the future we will allow multiple variants.
To understand the relationship between products, variants and their options [read this](https://www.stock2shop.com/documentation/key-concepts/products-variants/).
If the relationship between the product and variant is not correctly configure, these products will be ignored.

The full model for the post payload is:-

{{< highlight go >}}
    {
      "system_products": [
        {
          "source": {
            "source_id": "{source_id}",
            "product_active": "true",
            "source_product_code": "ABC",
            "sync_token": "0",
            "fetch_token": "0"
          },
          "product": {
            "options": [
              {
                "name": "Size",
                "position": "1"
              }
            ],
            "body_html": "",
            "collection": "",
            "product_type": "",
            "tags": "",
            "title": "Example",
            "vendor": "",
            "variants": {
              "source_variant_code": "ABC-XXL",
              "sku": "ABC-XXL",
              "barcode": "",
              "qty": 9,
              "qty_availability": [
                {
                  "description": "Warehouse X",
                  "qty": 10
                }
              ],
              "price": 100.00,
              "price_tiers": [
                {
                  "tier": "Price List X",
                  "price": 80.00
                }
              ],
              "inventory_management": "true",
              "grams": 0,
              "option1": "XXL",
              "option2": null,
              "option3": null
            },
            "meta": [
              {
                "key": "foo",
                "value": "bar"
              }
            ]
          }
        }
      ]
    }
{{< /highlight >}}

The minimum required fields are:-

{{< highlight go >}}
    {
      "system_products": [
        {
          "source": {
            "source_id": "{source_id}",
            "product_active": "true",
            "source_product_code": "ABC",
            "sync_token": "0",
            "fetch_token": "0"
          },
          "product": {
            "title": "Example",
            "variants": {
              "source_variant_code": "ABC",
              "sku": "ABC"
            }
          }
        }
      ]
    }
    
{{< /highlight >}}

The results of the post tell you how many products have been queued to process.
The rate at which the queue will process depends on how busy the workers are and several other factors.

### Step 4: Monitor

Fetch a summary of unprocessed queue items.  
[GET /queue/summary](https://app.stock2shop.com/docs/#!/queue/summary_get_4)  
Once the queue is complete you should see the products in your console.

Note: There may be a delay in viewing the product data in our console due to our Elastic Search indexing process. This should not take longer than 60 seconds.

Any questions? [Contact us](/contact-us) – we’re happy to help.