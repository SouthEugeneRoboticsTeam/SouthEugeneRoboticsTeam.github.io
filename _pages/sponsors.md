---
permalink: /sponsors/
title: Sponsors
---

{::options parse_block_html="true" /}

{% for sponsor in site.data.sponsors %}
<div>
## {{sponsor.name}}
![2016](/assets/images/sponsors/{{sponsor.image}}){: .sponsor}
</div>
{% endfor %}
