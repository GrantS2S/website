---
title: "System integration using the Stock2Shop queue"
seoTitle: "Integrate safe seamless with Stock2Shops Queue system"
seoDescription: "Looking for an efficient way to integrate your systems? Stock2Shop has the answer. The Stock2Shop queue ensures product data from your ERP or accounting systems (Sage, SYSPRO, iSync or SAP) is connected to your e-commerce platform (Shopify, WooCommerce, Magento or B2B trade store)."
aliases: "/documentation/key-concepts/queue/"
---

The queue is the backbone of Stock2Shop.

The key function of the queue is to help transfer data between your various applications. It connects your ERP or accounting system (Sage, SYSPRO, iSync or SAP) and your e-commerce platform (Shopify, WooCommerce, Magento or B2B trade store).

* * *

### What is the queue?

The queue is simply a list of instructions for the Stock2Shop system to perform. Each instruction is called a “queue item” and can perform very different tasks, such as:

*   Add an order to the accounting system
*   Send an order to the warehouse
*   Update a product on Magento
*   Send a notification

And so on…

* * *

### Blocking vs Non-Blocking queues

Stock2Shop has two different queue types: “blocking” and “non-blocking”.  
Queue items that may depend on other queue items having successfully run are placed in the “blocking” queue. Queue items that have no dependencies on other queue items will be placed in the “non-blocking” queue.

* * *

### Blocking queue items

The blocking queue follows the principle of “first in first out”. If there is a failure on one of the queue items, the queue will be blocked (stopped). The queue will remain stopped until the issue has been resolved and the queue can be started again.  
  
This process is managed by you, the client. When a blocking queue item fails, you will receive a notification via email. You then need to rectify the issue, whatever that is, and try the queue item again or skip it.  
  
This can all be done on the Stock2Shop web console, which you will have access to.  
  
A list of blocking queue items are:

*   Add, edit or delete a product / image to a sales channel
*   Add, edit or delete a product / image on Stock2Shop
*   Fetch images from a source

* * *

### Non-blocking queue items

The non-blocking queue consists of queue items that will not stop future queue items from running if they fail.  
  
When a non-blocking queue item fails, you will receive a notification via email which will contain information about why the queue item failed. You will then need to resolve the issue, whatever that may be. Once you have resolved the issue, you can login to our web console and try the queue item again or skip it.  
  
A list of non-blocking queue items are:

*   Add an order to the source (accounting / erp)
*   Add a fulfillment to your warehouse
*   Send email notifications
*   Send webhook notifications

  
It is extremely important to pay attention to the notifications you receive for blocked queue items and stay on top of managing your queue.  
  
Any questions? [Contact us](https://www.stock2shop.com/contact-us/) – we’re happy to help.