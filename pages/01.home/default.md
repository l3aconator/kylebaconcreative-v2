---
title: Work
heading: 'Welcome to the Portfolio Site of Graphic/Web Designer and Front end Developer Kyle Bacon'
container: false
visible: false
content:
    items:
        - '@taxonomy':
            tag: [featured]
twig_first: true
process:
    twig: true
---
<div class="home">
    <div class="page-hero">
        <div class="container">
            <div class="grid flex-grid--gutters">
                <div class="col col--width__seven">
                    <h1><span>Kyle Bacon</span> is a lover of design & code.</h1>
                    <h2 class="h4">He also loves helping people on the web and breathing life into the digital world. He's currently working at TeamSnap.</h2>
                </div>
                <div class="col col--width__five">
                    testing
                </div>
            </div>
        </div>
    </div>
    <div class="page-list">
        <div class="container">
            <div class="grid flex-grid--gutters">
                <div class="col col--width__six">
                    <h3>Specializes in&hellip;</h3>
                    <ul class="home--list">
                        <li>Frontend Development</li>
                        <li>Website/Web app creation</li>
                        <li>User Experience</li>
                        <li>UI Design</li>
                        <li>Interactive Design</li>
                        <li>Illustration</li>
                        <li>Print (yes, I still love this, too)</li>
                    </ul>
                </div>
                <div class="col col--width__six">
                    <h3>Has worked with&hellip;</h3>
                    <ul class="home--list">
                        <li>TeamSnap <em>(current)</em></li>
                        <li>United Food and Commercial Workers Union</li>
                        <li>PixelSpoke</li>
                        <li>Capsci Health</li>
                        <li>Health Republic Insurance</li>
                        <li>ClinTrialApp</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="page-work">
        <div class="container">
            <h4 class="h3">Featured work</h4>
            <div class="grid flex-grid--gutters">
                {% set collection = page.collection() %}
                {% for child in collection.order('header.order', 'desc')|slice(0,4) if child != page %}
                    <div class="col col--width__six">
                        <a href="{{ child.url }}">
                            <div class="work-image-box {{ random(['work--orange', 'work--blue__light', 'work--pink', 'work--turq']) }} work-image-box__homepage" style="background-image: url( {{ child.media[child.header.homepagepreview].url }} )">
                                <div class="work-meta">
                                    <div class="work-meta--content">
                                        <p class="work-meta--content-title">{{ child.title }}</p>
                                        <img class="work-meta--content-arrow" src="/user/themes/kylebaconcreative/images/prev-arrow.svg" alt="An arrow to go onto the work." />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                {% endfor %}
            </div>
            <a class="button" href="/work">Check it all out</a>
        </div>
    </div>
    <div class="page-about">
        <div class="container">
            <div class="grid flex-grid--gutters">
                <div class="col col--width__five">
                    <h4 class="h3">About me</h4>
                    <p>Here's some dry boilerplate: Lover of learning the new and pushing myself to the limits. Design skills in multiple disciplines with a focus in interaction and web development, providing creative solutions to problems rooted in rational choices pertaining to the client and ultimate user&hellip;wait&hellip;just click the dang button. It's more interesting anyways.</p>
                    <a class="button" href="/about">Learn more about me</a>
                </div>
                <div class="col col--width__seven">
                    testing
                </div>
            </div>
        </div>
    </div>
</div>
