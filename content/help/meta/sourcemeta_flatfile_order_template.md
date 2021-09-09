---
title: "Transform the order data we send to your FTP server"
name: "sourcemeta_flatfile"
key: "order_template"
description: "Mustache JSON template used to transform order data"
user_friendly_description: "Stock2Shop can transform the order that we send to your FTP server based on your requirements"
default: "{{some template}}"
values: []
tags: [sourcemeta,flatfile]
type: "meta"
process: "orders"
headless: true
---