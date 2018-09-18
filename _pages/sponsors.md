---
title: Sponsors
permalink: "/sponsors/"
disableComments: true
---

{::options parse_block_html="true" /}

<div class="sponsor-grid">
{% for sponsor in site.data.sponsors %}
<div class="sponsor">
[![2016](/assets/images/sponsors/{{sponsor.image}}){: .sponsor-image}]({{sponsor.website}})
</div>
{% endfor %}
</div>
