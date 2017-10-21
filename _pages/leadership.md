---
permalink: /leadership
title: Leadership
description: The team is split into several subteams, each with its own specialty.
css:
- people.css
---

{::options parse_block_html="true" /}

{: .people}
{% for person in site.data.leads %}
{% assign loopindex = forloop.index | modulo: 2 %}
{: .people}
<div>
## {{person.name}} - {{person.subteam}}
{% if loopindex == 1 %}
![2016](/assets/images/people/{{person.image}}){: .people-img .left}
<div class="people-text right">
{{person.bio}}
</div>
{% else %}
![2016](/assets/images/people/{{person.image}}){: .people-img .right}
<div class="people-text left">
{{person.bio}}
</div>
{% endif %}
</div>
{% endfor %}

## Subteams

### Mechanical
The mechanical subteam is responsible for the design and fabrication of the
robot. During the first few days of build season, mechanical designs and
creates CAD models and prototypes of proposed mechanisms of the robot. After
different mechanisms have been tested and eliminated, mechanical designs a CAD
model and builds a test model of the robot. After the test robot has been
tested and altered, a final robot is built.

### Software
The software subteam writes code for the robot and the driver station.
Specifically using Java as their programming language, the software subteam
writes code to make the robot autonomously function as effectively as possible.
In addition to autonomously programming the robot, software is also responsible
for making the driver station effectual and comprehendible.

### Business
The business subteam is responsible for updating the website, writing grants
and award submissions, acquiring sponsors, planning outreach events, creating
marketing material to recruit new team members and mentors, and maintaining an
active social media presence.

### Electrical
The electrical subteam creates a control system for the robot. By wiring
electronics and creating a control system, software is able to operate the
robot.

### Strategy
The strategy subteam works to ensure quality robot analysis, thorough testing,
and successful matches. This includes creating and guiding the team through a
process to design the best robot our team can build for this year's game,
testing the prototype and the robot in thorough and exciting ways, working
on match-strategy, and organizing scouting.
