---
title: "Set the path to sync orders to"
name: "sourcemeta_flatfile"
key: "ftp_order_path"
description: "Mustache template which to calculate the full file path"
user_friendly_description: "When Stock2Shop creates orders, we can drop them off at a specified location on your FTP Server."
default: "{{system_order.id}}.txt"
values: []
tags: [sourcemeta,flatfile,flat-file]
type: "meta"
process: "orders"
headless: true
---