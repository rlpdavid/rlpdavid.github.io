---
# DEMO POST: a template to copy for real articles.
# draft: true means it only shows in the local preview (hugo server -D) and is NEVER published.
# For a real post: copy this folder to content/blog/<your-post-slug>/, edit everything below,
# replace feature.png (1200x630) and set draft: false.
title: "Your Blog Post Title Goes Here"
date: 2026-10-29
draft: true
# Shown on the blog list cards, the home page preview and in Google results (aim for ~150 characters)
summary: "A one or two sentence summary of the post. Mention the main topic and, where it fits, the area you serve, e.g. Dumaguete, Dauin, Bohol, Cebu or Davao."
description: "A one or two sentence summary of the post. Mention the main topic and, where it fits, the area you serve, e.g. Dumaguete, Dauin, Bohol, Cebu or Davao."
# Category = the post's main topic (pick 1). Tags = specific keywords (2-5).
# Both are free text: a new name automatically creates its own page, e.g. /categories/seo-and-geo/.
# Suggested categories: "Web Design", "SEO and GEO", "Digital Marketing", "Hospitality".
# Avoid "&" in names: it makes messy web addresses (seo--geo).
# Reuse the exact same spelling each time, or you get two separate categories/tags.
categories: ["SEO and GEO"]
tags: ["Local SEO", "Google Search", "Dumaguete"]
# Header image: any image in this folder with "feature" in its name, e.g. seo-tips-dumaguete-feature.jpg
# (1200x630). To use a name without "feature", add both lines:
#   featureimage: "my-image.jpg"
#   images: ["my-image.jpg"]
# Optional caption under the big header image
featureimagecaption: "Optional caption for the header image."
---

{{< lead >}}
This is the introduction. In two or three sentences, tell the reader what problem this post solves
and what they will learn. This paragraph is shown slightly larger than the rest of the text.
{{< /lead >}}

## First main section

Write the first part of the article here. Keep paragraphs short (two to four sentences) so they are
easy to read on a phone. Use **bold** for key phrases and [links](https://theislandmonkeys.com/#services)
to related pages or services.

Some points worth listing:

- First point, short and specific
- Second point, with an example from a real client or project
- Third point, linking back to a service where it makes sense

## Second main section

{{< alert "lightbulb" >}}
**Tip:** use a callout box like this for a key takeaway, a warning, or a quick win readers can apply today.
{{< /alert >}}

Continue the article here. Headings like the one above (`##`) automatically appear in the table of
contents, so give each section a clear, descriptive title. Search engines read these too.

### A smaller sub-heading

Use `###` for sub-points inside a section.

> A quote from a client, a statistic, or a line you want to stand out goes here.
>
> **Name, Business, Dumaguete**

## Adding images

Put images in this post's folder and add them like this:

{{< figure src="feature.png" alt="Describe the image for Google and screen readers" caption="Optional caption under the image." >}}

## Conclusion

Summarise the key points in a few sentences and tell the reader what to do next.

**Need help with your website, SEO or digital marketing?** [Get in touch with The Island Monkeys](https://theislandmonkeys.com/#contact).
