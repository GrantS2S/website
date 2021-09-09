---
title: "Queue product images to sync"
name: "sourcemeta_isync"
key: "queue_fetch_images"
description: "Queue fetch_images item after processing sync_product"
user_friendly_description: "Once a product has been created in Stock2Shop, we will fetch the images from iSync to add to the relevant products on Stock2Shop."
default: "false"
values: []
tags: [sourcemeta,isync]
type: "meta"
process: "products"
headless: true
---