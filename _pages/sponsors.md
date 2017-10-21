---
permalink: /sponsors
title: Sponsors
---

{::options parse_block_html="true" /}

{% for sponsor in site.data.sponsors %}
<div>
![2016](/assets/images/sponsors/{{sponsor.image}}){: .sponsor}
## {{sponsor.name}}
</div>
{% endfor %}
