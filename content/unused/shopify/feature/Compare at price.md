---
title: "Compare at price"
seoTitle: "Compare at price"
seoDescription: "Compare at Pricing price lists for Shopify"
heading: ""
image: ""
---

## Introduction

This is a feature on Shopify that allows clients to add an additional price lists that can be used as their compare at price

## Configuration 

S2S requires two price lists:

1. Now Price: This is the price of the product that the products must sell for NOW
2. Was Price: This is the price of the product that the product WAS selling for

Below are the rules of how it works:
1. Stock2Shop won't add compare at price **(WAS price)** if compare at price **(WAS price)** is 0 ie the price list that will be assigned to was price (Compare at price)
2. We won't add compare at price if compare at price **(WAS price)** is < than price **(Now Price)** ie the Was price list that will be assigned to was price (compare at price)