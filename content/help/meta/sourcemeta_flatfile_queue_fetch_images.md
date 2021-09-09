---
title: "Queue product images to sync"
name: "sourcemeta_flatfile"
key: "queue_fetch_images"
description: "Queue fetch_images item after processing sync_product"
user_friendly_description: "Once a product has been created in Stock2Shop, we will fetch the images from your Flat File data source to add to the relevant products on Stock2Shop."
default: "false"
values: []
tags: [sourcemeta,flatfile,flat-file]
type: "meta"
process: "products"
headless: true
---