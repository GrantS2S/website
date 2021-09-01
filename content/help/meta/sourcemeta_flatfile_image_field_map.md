---
title: ""
name: "sourcemeta_flatfile"
key: "image_field_map"
description: "Fieldmap used for creating images. See example map for object model"
user_friendly_description: ""
default: "{
  &quot;source_images&quot;: [
    {
      &quot;source&quot;: {
        &quot;source_product_code&quot;: &quot;{{source.source_product_code}}&quot;,
        &quot;source_id&quot;: &quot;{{source.id}}&quot;,
        &quot;sync_token&quot;: &quot;{{source.sync_token}}&quot;
      },
      &quot;image&quot;: {
        &quot;action&quot;: &quot;I&quot;,
        &quot;image_id&quot;: &quot;{{data.image1}}&quot;,
        &quot;meta&quot;: {
          &quot;thumbnail&quot;: &quot;true&quot;,
          &quot;image&quot;: &quot;true&quot;,
          &quot;small_image&quot;: &quot;true&quot;
        }
      }
    }
  ]
}"
values: []
tags: [sourcemeta,flatfile]
type: "meta"
process: ""
headless: true
---