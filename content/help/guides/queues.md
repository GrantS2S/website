---
title: "Queues"
seoTitle: "Stock2Shop queue walk through."
seoDescription: "Guide to working with queues in the Stock2Shop console."
type: guides
tags: ["console"]
draft: false
aliases:
    - 
---

You can view, filter, skip and retry queue items in your Stock2Shop console.

- [View queue](#view-queue)
- [Retry queue item](#retry-queue)
- [Clear queue](#clear-queue)
- [Skip queue item](#skip-queue)

## View queue {#view-queue}
Once data between your connectors has started to sync, you can view, filter, retry and clear queue items.

To simply view your queue:

1. From your Stock2Shop console, go to Queue > View.
2. You will be presented with a list of:
    - Failed queue items.
    - List of Un-processed Queue items.

To filter for a specific queue item(s):

1. From your Stock2Shop console, go to Queue > View.
2. Apply filters based on Queue Items:
    - Based on status
    - Based on mode
    - Linked to a specific channel
    - Linked to a specific source

By default the search results display all queue items with a failed status.

---

## Retry queue item {#retry-queue}
You can re process [blocking](/help/guides/queue/ "understanding blocking queue items") and [non-blocking](/help/guides/queue/ "understanding non-blocking queue items") items from directly from your console.


To re process a blocking and or non-blocking queue item:

1. From your Stock2Shop console, go to Queue > View.
2. Under search results Search for the queue item you would like to retry.
3. Click on the three vertical dots and click Try again.

You may be required to adjust information on either the source / channel or console in order to process the queue item successfully.

---

## Clear queue {#clear-queue}
Clearing the queue will remove any queue items that are yet to be processed:

1. From your Stock2Shop console, go to Queue > Clear.
2. Select the mode:
   - blocking
   - non-blocking
3. Select the Instruction (optional)
4. Select the Channel (optional)
5. Click Clear.

By setting the Instruction and Channel, you are only clearing specific items and not the entire queue.

---

## Skip queue item {#skip-queue}
If you would like to skip a queue item entirely.

1. From your Stock2Shop console, go to Queue > Clear.
2. Under search results Search for the queue item you would like to skip.
3. Click on the three vertical dots and click Skip.

Any information contained in this queue item will be skipped and not reach the intended source and or sales channel.

---