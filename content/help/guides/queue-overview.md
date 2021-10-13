---
title: "Queue Overview"
lead: "The queue is the backbone of Stock2Shop"
seoTitle: ""
seoDescription: ""
type: guides
tags: ["queue"]
aliases:
    - 
weight: 1
---

## What is the queue

The queue is simply a list of instructions for the Stock2Shop system to perform. Each instruction is called a “queue item” and can perform very different tasks, such as:

- Add an order to the accounting system
- Send an order to the warehouse
- Update a product on Magento
- Send a notification
And so on…

## What is the difference between queue blocking and non-blocking
Stock2Shop has two different queue types: “blocking” and “non-blocking”.

Queue items that may depend on other queue items having successfully run are placed in the “blocking” queue. 

Queue items that have no dependencies on other queue items will be placed in the “non-blocking” queue.


## Queue blocking items
The blocking queue follows the principle of “first in first out”. If there is a failure on one of the queue items, the queue will be blocked (stopped). The queue will remain stopped until the issue has been resolved and the queue can be started again.

This process is managed by you, the client. When a blocking queue item fails, you will receive a notification via email. You then need to rectify the issue, whatever that is, and try the queue item again or skip it.

This can all be done on the Stock2Shop web console, which you will have access to.

A list of blocking queue items are:

- Add, edit or delete a product / image to a sales channel
- Add, edit or delete a product / image on Stock2Shop
- Fetch images from a source

## Queue non-blocking items
The non-blocking queue consists of queue items that will not stop future queue items from running if they fail.

When a non-blocking queue item fails, you will receive a notification via email which will contain information about why the queue item failed. You will then need to resolve the issue, whatever that may be. Once you have resolved the issue, you can login to our web console and try the queue item again or skip it.

A list of non-blocking queue items are:

- Add an order to the source (accounting / erp)
- Add a fulfillment to your warehouse
- Send email notifications
- Send webhook notifications






    


