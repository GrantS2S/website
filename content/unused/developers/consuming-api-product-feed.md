---
title: "API product feed from a Stock2Shop account"
titleList: "Example: API Product Feed"
seoTitle: "API product feed from a Stock2Shop account"
seoDescription: "A developer's guide on how to automatically pull products from a Stock2Shop client account via the Stock2Shop API."
lead: "This document outlines steps to consume a JSON feed of product data from a Stock2Shop account."
aliases: "/documentation/developers/consuming-api-product-feed/"
weight: 30
---

## Scenario:
A Stock2Shop account wants to share their product feed with you to consume.

* * *

## Solution:
Authenticate to the accounts “channel” and page through the product data.

* * *

## Step 1: Authenticate
The Stock2Shop account owner will provide you with user details. This user will more than likely be limited to see products for a specific channel_id.    
https://app.stock2shop.com/docs/#!/users/authenticateUser_post_1  
The above endpoint will return a token and channels that you have access to.    
Use the token as the “token” query parameter for all future requests.  
You can paste the token in our interactive documentation (at the top of the page) for testing.    
This will automatically add in the token for each request.

## Step 2: Perform Search
To search through products use this end point:  
https://app.stock2shop.com/docs/#!/products/elasticSearchProducts_post_2  
Use the “channel_id” from the authentication response.  
The body JSON payload should look like this:  

{{< highlight go >}}
{
"size":50,
"from":0
}
{{< /highlight >}}

Size being the results returned and from the starting point.

**The results will have the following structure:**
{{< highlight go >}}
{
  "took": 8,
  "timed_out": false,
  "_shards": {},
  "hits": {},
  "request": {},
  "system_products": [],
  "took_s2s": 9
}
{{< /highlight >}}

Use the data inside of the **"system_products"** property for a complete list of product information.

If you plan on continually updating product information on a schedule, one approach to use is to return only the products which have changed since the last check.

Below is a complete Elastic Search request which returns all products which have been modified since “2018-07-16 08:23:04″, the results are ordered by modified date ascending.

{{< highlight go >}}
{
  "query": {
    "bool": {
      "filter": [
        {
          "range": {
            "modified": {
              "gt": "2018-07-16 08:23:04"
            }
          }
        }
      ]
    }
  },
  "size": 50,
  "from": 0,
  "sort": {
    "modified": {
      "unmapped_type":"date",
      "order": "desc"
    }
  }
}
{{< /highlight >}}

Your application could page through products using the above request and save a “last modified” date after it has updated each product. On subsequent requests you would pass in the “last modified” date to get the latest records.

Any questions? [Contact us](/contact-us) – we’re happy to help.