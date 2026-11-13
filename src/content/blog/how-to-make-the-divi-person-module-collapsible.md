---
{
 "title": "How To Make the Divi Person Module Collapsible",
 "date": "2020-09-02T14:56:30",
 "modified": "2026-06-26T12:00:55",
 "author": "Adam Hansen",
 "categories": [
  "Website Design"
 ],
 "excerpt": "If you want to make your 'Meet the Team' page stand out, or simply want to condense all of your team members' bios on the page, this post is for you! We'll show you how to turn the regular Divi 'Person' module into a collapsible, accordion-like module. Live Demo...",
 "featuredImage": "/images/2020/08/collapsible-divi-person-module.webp",
 "featuredAlt": "",
 "seoTitle": "How To Make the Divi Person Module Collapsible - Kite Media",
 "description": ""
}
---
<p>If you want to make your 'Meet the Team' page stand out, or simply want to condense all of your team members' bios on the page, this post is for you!</p>
<p>We'll show you how to turn the regular Divi 'Person' module into a collapsible, accordion-like module.</p>
<a href="/divi-layouts/meet-team-tutorial/" target="_blank">Live Demo</a><h2>Instructions</h2>
<p>1. Add 'person' modules to page.</p>
<img alt="make an awesome meet the team page in divi" height="774" loading="lazy" src="/images/2020/08/divi-person-module-collapsible.webp" width="3750"/><p>2. Give them each the class '<strong>team-member</strong>' (Advanced &gt; CSS ID &amp; Classes).</p>
<img alt="make an awesome meet the team page in divi" height="1872" loading="lazy" src="/images/2020/08/divi-person-module-accordion.webp" width="1904"/><p>3. Add a code module to the page. Copy and paste in the following CSS:</p>
<pre><code>&lt;style&gt;
.team-member {
cursor: pointer;
}
.team-member .et_pb_team_member_description {
display: none;
padding: 0px 12px 15px 12px;
position: initial;
}

.team-member .et_pb_team_member_image {
max-width: 100%;
z-index: -1;
}

.team-member.unclicked .et_pb_team_member_image:before {
content: '';
opacity: 0 !important;
}

.team-member ul.et_pb_member_social_links {
padding: 13px 0 0px 1em;
}

@media (max-width: 980px) and (min-width: 768px){
.team-member .et_pb_team_member_image {
float: none;
margin: 0;}
}
&lt;/style&gt;
</code></pre>
<p> </p>
<p>4. Add another code module. This one is for the Javascript. Copy and paste the following code:</p>
<pre><code>&lt;script&gt;
jQuery(document).ready(function(){
jQuery('.team-member').click(function(){

jQuery( '.team-member' ).each(function() {
if (jQuery(this).find('.et_pb_team_member_description').css('display') == 'block')
{
jQuery(this).find('.et_pb_team_member_description').slideToggle("fast", "linear");
}
});

if (jQuery(this).find('.et_pb_team_member_description').css('display') == 'none')
{
jQuery(this).find('.et_pb_team_member_description').slideToggle("fast", "linear");
}

});
});
&lt;/script&gt;
</code></pre>
<p> </p>
<p>You're done!</p>
<h2>Want to take it a step further?</h2>
<p>You can purchase this cool design of ours from the Divi Marketplace for only $15! It can be fully customized to match your brand's colors, fonts, etc.!</p>
<a href="https://www.elegantthemes.com/marketplace/meet-the-team-layout-expandable-person-modules/" target="_blank">Buy Now</a>
