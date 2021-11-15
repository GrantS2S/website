---
title: Understanding your queue
seoTitle: "Understanding your queue"
seoDescription: "How to manage the Stock2Shop Console Queue for a smooth running integration."
type: guides
tags: ["queue"]
draft: true
aliases:
    - /documentation/key-concepts/queue/
---

## Introduction

One of the key concepts that Stock2Shop uses to manage data is the Queue.
Any passing of data through the Stock2Shop system will pass through the queue, be it a sync from the source to Stock2Shop, updating product data on the website or syncing an order from the website, it will pass through the queue.

Each type of sync that passes through the queue will have its own queue instruction and within those instructions each item will have its own queue id.

The queue id is a unique number that Stock2Shop uses to identify each queue item and is helpful when investigating any issues that may occur.

## Queue Instructions

Queue instructions are the different requests/instructions our system uses, note the "mode" of the instruction. Blocking queue instructions means if there is an error for that instruction it will block all other instructions from that source or to that particular channel, **remember if you have multiple channels and there is a blocking queue error for one channel it will not affect the others or the non-blocking queue instructions**.

{{< highlight go >}}
{
  system_queue_instructions: [

    //Used when queuing an image to add to a channel
    {
      instruction: "add_image",
      description: "Add image to {{channel_description}}",
      mode: "blocking"
    },

    //Used when queuing a product to add to a channel or link to a product that already exists on the channel
    {
      instruction: "add_product",
      description: "Add product to {{channel_description}}",
      mode: "blocking"
    },

    //Used when queuing a variant to add to a channel or link to a variant that already exists on the channel
    {
      instruction: "add_variant",
      description: "Add variant to {{channel_description}}",
      mode: "blocking"
    },  

    //This is a channel instruction, used to delete all products from the channel
    {
      instruction: "clear_channel",
      description: "Clear channel {{channel_description}}",
      mode: "blocking"
    },

    //This is a channel instruction, used to initiate a full sync after removing all channel id's off the products
    {
      instruction: "init_channel",
      description: "Init channel {{channel_description}}",
      mode: "blocking"
    },

    //This is a channel instruction, is used once a full sync has completed to mark it as active
    {
      instruction: "set_channel_status",
      description: "Set channel status {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to delete an image from the channel
    {
      instruction: "delete_image",
      description: "Delete image on {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to delete a product from the channel
    {
      instruction: "delete_product",
      description: "Delete product on {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to delete a particular variant from the channel
    {
      instruction: "delete_product_variant",
      description: "Delete variant on {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to FETCH images from the source, used for particular sources, not available for all
    {
      instruction: "fetch_images",
      description: "Fetch images from {{source_description}}",
      mode: "blocking"
    },

    //This is a channel instruction, used to sync the channel with all product data in S2S , uses the current product id's 
    {
      instruction: "sync_channel",
      description: "Sync channel {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to PUSH(APIFACT) images from the source, used for particular sources, not available for all
    {
      instruction: "sync_image",
      description: "Sync image from {{source_description}}",
      mode: "blocking"
    },

    //Instruction to PUSH(APIFACT) a product from the source, used for particular sources, not available for all
    {
      instruction: "sync_product",
      description: "Sync product from {{source_description}}",
      mode: "blocking"
    },

    //Instruction to PUSH(APIFACT) a products from the source, used for particular sources, not available for all
    {
      instruction: "sync_products",
      description: "Sync products from {{source_description}}",
      mode: "blocking"
    },

    //Instruction to PUSH(APIFACT) a customer from the source, used for particular sources, not available for all
    {
      instruction: "sync_customer",
      description: "Sync customer from {{source_description}}",
      mode: "blocking"
    },

    //Instruction to sync/update all products on channel, abiding by the rules of the channel
    {
      instruction: "sync_channel_products",
      description: "Update products on {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to update a product on the channel, related to all data on the general tab and attributes tab of the product
    {
      instruction: "update_product",
      description: "Update product on {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to update a product on the channel, related to all data on the variants tab of the product
    {
      instruction: "update_variant",
      description: "Update variant on {{channel_description}}",
      mode: "blocking"
    },

    //Instruction to create order in the ERP/Accounting system
    {
      instruction: "add_order",
      description: "Create order at {{source_description}}",
      mode: "non-blocking"
    },

    //Instruction to create outbound order at fulfillment service, after order has been created at source
    {
      instruction: "fulfill_order",
      description: "Create fulfillment at fulfillment service",
      mode: "non-blocking"
    },

    //Instruction from Stock2Shop trade store or API feed to mark an order as paid and ensure paid value matches order value
    {
      instruction: "update_order_instruction",
      description: "Update order instruction",
      mode: "non-blocking"
    },

    //Instruction to update fulfillment status of an order on channel, relates only to Shopify channel
    {
      instruction: "sync_channel_fulfillments",
      description: "Sync fulfillment to {{channel_description}}",
      mode: "non-blocking"
    },

    //Instruction from fulfillment service with fulfillment status and details, updating S2S
    {
      instruction: "sync_fulfillment",
      description: "Sync fulfillment from webhook",
      mode: "non-blocking"
    },

    //Instruction for syncing an order from channel to Stock2Shop
    {
      instruction: "sync_order",
      description: "Sync order from {{channel_description}}",
      mode: "non-blocking"
    },

    //Instruction for sending email notifications, order confirmations and any other emails that Stock2Shop system sends
    {
      instruction: "send_email",
      description: "Send email",
      mode: "non-blocking"
    }
  ]
}
{{< /highlight >}}

## Managing your Queue

Managing your queue is crucial, especially if your integration is new.

When queue blocking errors build up and are not resolved as they occur, it can cause a lot of confusion and further errors.

Points to remember in order to manage your queue efficiently:

- Ensure the person managing the Stock2Shop console is added to notifications
- When you receive an error notification, sign into the console and resolve the error before the queue builds up
- Use the support widget (Envelope at the top right of the console) to receive assistance if you are unsure of the error 
- Provide the queue ID, queue error and the SKU the error relates to for speedy assistance
- Take note of the errors that have occurred, if the same error is occurring over and over again there may be updates for the same SKU in the queue with the old data, you will need to skip the errors that pertain to that SKU until the queue has completed

There are a range of errors that occur, once you are aware of how the system works it will assist you in managing the errors more efficiently, [read through our documentation](/documentation/key-concepts/) to gain a better understanding.

Remember the better the queue is managed the less time that will be needed to resolve issues
