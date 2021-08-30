---
title: "Multiple Shipping Options"
heading: ""
description: ""
image: ""
---

## What does this mean

It means that there are different shipping options on checkout when ordering a product on their Website. Parcel Ninja also has specific shipping options: Namely - Collection, Overnight, and Next Day. These shipping options must be mapped from the Website to Parcel Ninja

This development would need to be done in the S2S Console. using the order information for each shipping option required.

## What issue(s) can arise

A customer buys an order from the website and expects to collect the order, but the order has been sent to Parcel Ninja for delivery (If the custom mapping has not been developed), thus the shipping options will not match Parcel Ninja automatically. 

## How to confirm the shipping option from order

Send a test order to S2S with specific shipping options chosen, You should have an example of each type of shipping option. These will be used as test samples for S2S to develop the mapping from the website to Parcel Ninja.

## How to resolve it

Send Stock2Shop an email asking for an estimate to map the shipping option from the website to specific options.

Include order examples in S2S of each shipping option that should be mapped.

## Dealing with queue errors

There should not be any queue errors to do with the shipping option. If S2S has not developed this custom feature for you. The order will always be sent to Parcel Ninja with the default delivery option.

## To Note

In order for 'fastest delivery' option to work in Parcel Ninja -> the selected product needs to loaded already  Parcel Ninja so they can record the weights and dimensions, to provide and allocate a quote to this option.