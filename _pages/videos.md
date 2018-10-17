---
title: Videos
permalink: "/videos/"
description: A list of SERT's recent outreach and event videos.
disableComments: true
---

<!--
    DO NOT EDIT THIS PAGE FROM SITELEAF
    DO NOT CLICK THE "SAVE" BUTTON IN SITELEAF

    CHANGES SHOULD ONLY BE MADE USING THIS LINK:
    https://github.com/SouthEugeneRoboticsTeam/SouthEugeneRoboticsTeam.github.io/blob/master/_data/videos.yml

    If you're not confident changing the website's
    code, please use your browser's back button or
    cancel button to leave this page. Clicking the
    "Save" or "Publish" button will cause damage to
    the website.

    If a change to this page is needed, talk to a member
    of the software team to get things sorted out.
 -->


{::options parse_block_html="true" /}

<div>
{% for video in site.data.videos %}
<div>
## {{video.title}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/{{video.id}}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
{% endfor %}
</div>
