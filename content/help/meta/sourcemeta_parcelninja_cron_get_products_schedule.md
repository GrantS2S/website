---
title: "Sync product schedule"
name: "sourcemeta_parcelninja"
key: "cron_get_products_schedule"
description: "Basic format is &quot;MM HH * * *&quot;"
user_friendly_description: "When changes are made in Parcelninja, we can set an hourly time to check for changes. This can be set for which ever minute on the hour best suits your workflow."
default: "x 00 * * * *"
values: []
tags: [sourcemeta,parcelninja]
type: "meta"
process: "products"
headless: true
---