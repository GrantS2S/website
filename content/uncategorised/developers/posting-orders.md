---
title: "How to Manually Post an Order to Stock2Shop"
seoTitle: "How to Manually Post an Order to Stock2Shop using our API"
seoDescription: "Instructions on how to send orders manually into Stock2Shop using our API endpoint"
weight: 20
draft: false
---

## Scenario

You would like to replay or re-post an order to Stock2Shop on behalf of a channel.
Perhaps you are wanting to test changes or test a channel without having to reproduce the order manually. 

* * *

## Solution

You are going to POST a valid JSON payload to the sales channel.
Depending on the sales channel, the payload will look different.
For example, a Shopify order will follow the format of the [shopify webhook](https://shopify.dev/docs/admin-api/rest/reference/events/webhook) and 
a Woocommerce order will follow the [Woocommerce format](https://docs.woocommerce.com/document/webhooks/).
You are replicating what the channel would normally send Stock2Shop using the HTTP POST method.

### Step 1 Authenticate

Follow the steps [here](/developers/authentication) to get your authentication token.


### Step 2: Get Channel & Client ID 

You need to know you "client_id" and your "channel_id" in order to post the order to a specific channel.
Fetch a list of your channels:

[GET /channels](https://app.stock2shop.com/docs/#!/channels/getChannels_get_3)
  
```
{
  "system_channels": [
    {
      "id": 123,
      "created": "2015-08-08T21:32:46+0000",
      "description": "My Sales Channel",
      "modified": "2020-05-06T09:53:30+0000",
      "client_id": 456,
      "active": 1,
      "type": "shopify",
      "price_tier": null,
      "qty_availability": null
    }
}
```

In the above example the "channel_id" is the "id" property (value 123). 

### Step 3: Post Order

Given the token from step 1 and the "client_id" and "channel_id" from step 2 create a HTTP POST request using this format:

```
https://api.stock2shop.com/v2-queue/order?client_id=456&channel_id=123&token=x
{
    "my order payload": {
        "foo": "bar"
    }
}
```
* * *