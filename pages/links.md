---
layout: mypost
title: Links
---

If you want your link show up here, please open a issue on github, I will add it ASAP.

```
Site Name: {{ site.title }}
Description: {{ site.description }}
Link: {{ site.domainUrl }}{{ site.baseUrl }}
Logo: {{ site.domainUrl }}{{ site.baseUrl }}/static/img/logo.png
```

<ul>
  {% for link in site.links %}
  <li>
    <p><a href="{{ link.url }}" title="{{ link.desc }}" target="_blank" >{{ link.title }}</a></p>
  </li>
  {% endfor %}
</ul>
