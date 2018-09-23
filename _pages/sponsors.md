---
title: Sponsors
permalink: "/sponsors/"
disableComments: true
---

<!--
    DO NOT EDIT THIS PAGE FROM SITELEAF
    DO NOT CLICK THE "SAVE" BUTTON IN SITELEAF

    CHANGES SHOULD ONLY BE MADE USING THIS LINK:
    https://github.com/SouthEugeneRoboticsTeam/SouthEugeneRoboticsTeam.github.io/blob/master/_data/sponsors.yml

    If you're not confident changing the website's
    code, please use your browser's back button or
    cancel button to leave this page. Clicking the
    "Save" or "Publish" button will cause damage to
    the website.

    If a change to this page is needed, talk to a member
    of the software team to get things sorted out.
 -->


{::options parse_block_html="true" /}

<div class="sponsor-grid">
{% for sponsor in site.data.sponsors %}
<div class="sponsor">
[![2016](/assets/images/sponsors/{{sponsor.image}}){: .sponsor-image}]({{sponsor.website}})
</div>
{% endfor %}
</div>
