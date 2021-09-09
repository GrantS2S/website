---
title: "Queue product images to sync"
name: "sourcemeta_sageone"
key: "queue_fetch_images"
description: "Queue fetch_images item after processing sync_product. Must be set to False in Used Config, if removed, it will be set to true by default."
user_friendly_description: "Once a product has been created in Stock2Shop, we will fetch the images from Sage Business Cloud Accounting to add to the relevant products on Stock2Shop."
default: "false"
values: []
tags: [sourcemeta,sageone]
type: "meta"
process: "products"
headless: true
---