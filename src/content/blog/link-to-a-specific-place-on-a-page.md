---
{
 "title": "How to Link to a Specific Place on a Page",
 "date": "2014-10-02T21:37:04",
 "modified": "2014-10-07T02:18:15",
 "author": "Garrett Kite",
 "categories": [
  "Website Design"
 ],
 "excerpt": "One of the fastest growing trends in website design is the parallax style website. You’ve probably noticed that a lot of new sites allow you to scroll through one page to different sections rather than clicking links to navigate from page to page. Apple’s iPhone 6...",
 "featuredImage": "/images/2014/10/Image.webp",
 "featuredAlt": "",
 "seoTitle": "How to Link to a Specific Place on a Page | Kite Media",
 "description": "Read this tutorial to learn how to link to a specific place on a webpage using anchors. Check back on the Kite Media blog for more updates and tutorials!"
}
---
<p>One of the fastest growing trends in website design is the parallax style website. You’ve probably noticed that a lot of new sites allow you to scroll through one page to different sections rather than clicking links to navigate from page to page. <a href="http://www.apple.com/iphone-6/" target="_blank">Apple’s iPhone 6 product page</a> is a perfect example. The traditional condensed, shorter pages where you can see a small portion of information in one screen used to be the norm, but parallax is becoming more and more popular. The scrolling pages are fun, and allow you to put a lot more info and graphics on a page to keep the content engaging and interactive. Scrolling up and down rather than clicking back and forth  is a more natural feel for those that view your website on a smartphone or tablet, as well. It does, however pose a problem: with all that content, how can we quickly jump to the section that is most relevant to what we’re looking for?</p>
<p>One solution is to place links to each section at the top of the page, or at the bottom of each section that directs a viewer to the next section. <a href="http://www.wafflehausmedia.com/" target="_blank">Wafflehaus Media </a>did a great job of this on their site. These links won’t take you to a new page, but a specific place on the same page. If you link to a page, it will usually bring you to the top of the page so that you can begin your scrolling journey. These links to specific sections are called “anchors.”</p>
<p>The process of linking to a specific section of a page involves html tags placed in two places on your page. The first tag is where you would like to place the link. For example, pretend you are writing a blog post about your favorite music, and you would like to list your favorite albums and then describe a little about the artists behind them. Your list (in simplified code) would look like this:</p>
<p>&lt;ol&gt;</p>
<p>&lt;li&gt;Abbey Road (1969)&lt;/li&gt;</p>
<p>&lt;li&gt;The Joshua Tree (1987)&lt;/li&gt;</p>
<p>&lt;li&gt;Wish (1992)&lt;/li&gt;</p>
<p>&lt;/ol&gt;</p>
<p>Now, you’re going to place this tag: &lt;a href=“#target”&gt;&lt;/a&gt; (Except you can replace ‘target’ with whatever you want). Let’s link Abbey Road to a paragraph about the Beatles.</p>
<p>Your new list would look like this:</p>
<p>&lt;ol&gt;</p>
<p>&lt;li&gt;&lt;a href=“#beatles”&gt;Abbey Road (1969)&lt;/a&gt;&lt;/li&gt;</p>
<p>&lt;li&gt;The Joshua Tree (1987)&lt;/li&gt;</p>
<p>&lt;li&gt;Wish (1992)&lt;/li&gt;</p>
<p>&lt;/ol&gt;</p>
<p>Next, scroll down to the paragraph you’ve written about that mop-top British sensation. Insert this second tag at the beginning of the section: &lt;a id=“target”&gt;&lt;/a&gt; (Except you’ll want to replace ‘target’ with the same anchor you used to set your link).</p>
<p>Your paragraph will look like this:</p>
<p>&lt;a id=“beatles”&gt;&lt;h1&gt;The Beatles&lt;/h1&gt;&lt;/a&gt;</p>
<p>&lt;p&gt;The Beatles are a great band that made a huge impact on the world, influencing everything from movies and clothing to art and culture with their songs and lyrics.&lt;/p&gt;</p>
<p>After publishing your page, you should be able to click the Abbey Road link in your list of albums and be taken down the page to your paragraph about The Beatles.</p>
<p> </p>
<p><strong>Check back to see more tutorials and posts from Kite Media!</strong></p>
<p> </p>
<p>**Wanting to link to a specific section of one page from a different page? Simply include #target at the end of the url in the &lt;a&gt; tag for the link. Like so:</p>
<p>&lt;a href=”/blog/link-to-a-specific-place-on-a-page/#beatles”&gt;Click here to learn about my favorite album by The Beatles!&lt;/a&gt;</p>
<p> </p>
<p><em>By <a href="https://plus.google.com/+RachelCottrellKiteMedia?rel=author" rel="author">Rachel Cottrell</a></em></p>
