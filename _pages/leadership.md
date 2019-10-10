---
title: Leadership
permalink: "/leadership/"
description: The team is split into several subteams, each with its own specialty.
disableComments: true
css:
- people.css
---

<!--
    DO NOT EDIT THIS PAGE FROM SITELEAF
    DO NOT CLICK THE "SAVE" BUTTON IN SITELEAF

    CHANGES SHOULD ONLY BE MADE USING THIS LINK:
    https://github.com/SouthEugeneRoboticsTeam/SouthEugeneRoboticsTeam.github.io/blob/master/_data/leads.yml

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
{% for person in site.data.leads %}
{% assign loopindex = forloop.index | modulo: 2 %}
{: .people}
<div>
## {{person.name}} - {{person.subteam}}
{% if loopindex == 1 %}
![person](/assets/images/people/{{person.image}}){: .people-img .left}
<div class="people-text right">
{{person.bio}}
</div>
{% else %}
![person](/assets/images/people/{{person.image}}){: .people-img .right}
<div class="people-text left">
{{person.bio}}
</div>
{% endif %}
</div>
{% endfor %}
</div>

## Subteams

### Mechanical
The mechanical subteam is responsible for the design and fabrication of the
robot. During the first few days of build season, mechanical designs and
creates CAD models and prototypes of proposed mechanisms of the robot. After
different mechanisms have been tested and eliminated, mechanical designs a CAD
model and builds a test model of the robot. After the test robot has been
tested and altered, a final robot is built.

### Software
The software subteam writes code for the robot with goals to create as many
autonomous functions as effectively as possible. It's always trying to pioneer
the next evolution in FRC robot programming. Currently, the software subteam is
living on the bleeding edge by using the programming language Kotlin with
IntelliJ and Gradle. In addition to its other responsibilities, the software
subteam is also responsible for making the driver station as effectual and
comprehendible as possible for the Drive Team.

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

### Safety
The safety subteam is dedicated to making FIRST and SERT a safer and better place for all. It is responsible for enforcing safe practices, educating team members and the public about safety, and managing a safe environment for all. At SERT, safety always comes FIRST!
