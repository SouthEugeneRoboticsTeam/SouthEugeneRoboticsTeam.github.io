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

## **Help inspire a new generation of students by sponsoring our team.** 
### [Learn more about what it means to be a SERT sponsor](https://drive.google.com/open?id=1eWleMt7kJbSCyO12OeiyQy7RruBbpqSK)
### Interested? Send us an email at <sert2521business@gmail.com> or contact one of our mentors at (541)-228-1534
&nbsp;
# **Current Sponsors**

<div class="sponsor-grid">
{% for tier in site.data.sponsortiers %}

<div class="sponsor-tier-banner">
<h1 style='color:white;' class="sponsor-tier-text">{{tier.name}}</h1>
</div>

{% for sponsor in site.data.sponsors %}

{% if sponsor.tier == tier.name %}
<div class="sponsor">
[![2016](/assets/images/sponsors/{{sponsor.image}}){: .sponsor-image}]({{sponsor.website}})
</div>
{% endif %}

{% endfor %}

{% endfor %}
</div>
