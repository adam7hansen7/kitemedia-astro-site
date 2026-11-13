---
{
 "title": "How To Create A Custom Page Template In WordPress",
 "date": "2016-07-11T12:00:39",
 "modified": "2026-06-26T12:00:38",
 "author": "Garrett Kite",
 "categories": [
  "Website Design"
 ],
 "excerpt": "Looking to make some custom changes to your WordPress site? Check out a quick and easy way to make a custom page template. I recently wrote a blog post confessing my dying love for WordPress . I addressed some common concerns that we sometimes hear from clients, and...",
 "featuredImage": "/images/2016/07/How-to-Create-a-Custom-Page-Template-in-WordPress-Featured-Images.webp",
 "featuredAlt": "how to create a custom page template in wordpress kite media",
 "seoTitle": "How to Create a Custom Page Template in WordPress | Kite Media",
 "description": "Make custom changes to your WordPress site with this step by step guide for creating a custom page template in WordPress, here on the Kite Media Blog."
}
---
<p>Looking to make some custom changes to your WordPress site? Check out a quick and easy way to make a custom page template.</p>
<p><img alt="how to create a custom page template in wordpress kite media" height="290" loading="lazy" src="/images/2016/07/How-to-Create-a-Custom-Page-Template-in-Wordpress-Blog-Photo.webp" width="793"/></p>
<p>I recently wrote a blog post <a href="/why-wordpress-is-so-awesome/">confessing my dying love for WordPress</a>. I addressed some common concerns that we sometimes hear from clients, and then we put those myths to rest. </p>
<p>However, I’d be lying if I said WordPress didn’t come with complications here and there. Quite often, WordPress will test your technical skills to the tipping point.</p>
<p>When you build and edit a site on WordPress, you are basically creating a global layout for the entire website, and then just editing each page’s content. So what happens when you need one particular page to be formatted differently?</p>
<p>Here at <a href="">Kite Media</a>, we often face this challenge when building custom landing pages for clients. If they need a different tracking phone number or if they have a different address to put in the footer, we don’t want to create an entirely new site. Instead, we’ll just create a <b>custom WordPress page template</b>!</p>
<p>WordPress.org explains that a page template is “ a specific type of template file that can be applied to a specific page or groups of pages”. In other words, your custom template will only apply to the pages that you specify, rather than the entire website. This is especially useful when having to create a custom footer or header that will only apply to a certain page. Let’s get started…</p>
<p><i>NOTE: We’ll be working with a few snippets of code throughout this tutorial. We HIGHLY suggest </i><a href="https://codex.wordpress.org/WordPress_Backups"><i>backing up your website</i></a><i> before changing a bunch of code. Although we’re making only minor changes, one line of code can break an entire page, or even site.</i></p>
<p><strong>Step 1: Access your site’s file directory</strong></p>
<p>First off, get to your WordPress website’s file directory (all of the site’s files). You can either use <a href="https://www.siteground.com/tutorials/ftp/ftp_client.htm">FTP</a>, or you can do this directly through your web hosting’s <a href="https://www.siteground.com/tutorials/cpanel/file_manager.htm">file manager</a> (most basic hosts use cPanel).</p>
<p>Navigate to your themes folder. Generally, the file path will be similar to:</p>
<p>public_html/example.com/wp-content/themes/yourTheme</p>
<p><strong>Step 2: Create a new PHP file</strong></p>
<p>Once you’re inside the active theme’s folder, create a new file. This file will be the new custom page template we’re creating.</p>
<p>For this example, we’ll call our custom page template newCustomTemplate.php. You can name your template whatever you’d like (with the exception of page.php), just make sure it ends  in .php.</p>
<p>Copy and paste the code below at the top of your newly created file. Change ‘New Custom Template’ to whatever you want your template to be called.</p>
<p><code>   &lt;?php /* Template Name: New Custom Template */ ?&gt;</code></p>
<p><strong>Step 3: Find your new template</strong></p>
<p>Log in to your WordPress Dashboard and add a new page. </p>
<p><img alt="WPDash" height="300" loading="lazy" src="/images/2016/07/WPDash-114x300.webp" width="114"/></p>
<p>On the right sidebar of the newly created page, click the ‘template’ dropdown menu, and select the template page you created (it will show up as you named it in the code pasted from above). </p>
<p><img alt="NewCustomTemplateWP" height="300" loading="lazy" src="/images/2016/07/NewCustomTemplateWP-262x300.webp" width="262"/></p>
<p>There you go! Your new template will be applied to the new page you’re creating. Let’s add something to it so you’re not stuck with a white blank page of nothing…</p>
<p><strong>Step 4: Connecting it to your site’s content</strong></p>
<p>From here, you could technically write your own html and PHP code in the new file you created and it will show up on the new page you made. However, you most likely want to keep the majority of the existing site’s layout and just tweak some things. </p>
<p>If you want to create just a custom page (not change the header or footer), you’ll want to take code from your page.php file in your site directory. This file contains the layout for each page on your WordPress site. Once again, we’ll be accessing your website’s file directory. Navigate to:</p>
<p>public_html/example.com/wp-content/themes/yourTheme</p>
<p>This time, open and edit your website’s <strong>page.php</strong> file. Copy ALL of the code in that file.</p>
<p>Open the new custom template we created a minute ago (it should be in the same folder). Paste the code you just copied from <strong>page.php</strong>. Make sure you paste the new code below the line of code we added earlier at the top. </p>
<p>From here, it’s going to be entirely up to you what you change. If you need to rebuild a column, find that particular column in the HTML code and make the change. Or, if you want to entirely rebuild the page, start writing the new code in place of the pasted code. </p>
<p><i>Note: If you don’t see any HTML where you think the content should be, your page is probably pulling the content from a different function in a different file. If this is the case, you’ll have to search for that function and change it there. Or, you can simply erase the function and write new HTML in its place.</i></p>
<p>If all you’re changing is the page’s layout, your new custom page template should be ready to go! Save the file, make sure it’s uploaded back to the server, and test your site.</p>
<p><strong>Step 5: Point the page to a new header or footer</strong></p>
<p>If you’re wanting to create a custom header or footer template, we have a couple more quick steps to go. </p>
<p>First, create a new page template and copy all of the code from <strong>page.php</strong> into the newly created template file, just like we did in Step 4. </p>
<p>Now, you’ll need to create an <i>additional</i> template file that will be used for either the header or footer. Just like before, create a new PHP file and place it in the ‘yourTemplate’ folder. For this example, we’ll call the file <strong>header-secondary.php</strong>. Make sure to name it something that follows header-.</p>
<p>Just like before, copy and paste this snippet into the top of your newly created template file:</p>
<p><code>   &lt;?php /* Template Name: Header Secondary */ ?&gt;</code></p>
<p>Name the file whatever you’d like, but make it easy to find for future reference.</p>
<p>We’ll now be changing one line of code near the top that says something similar to:</p>
<p><code>   get_header(); ?&gt;</code></p>
<p>Erase that single line of code and paste the following line of code in its place:</p>
<p><code>   get_header( 'secondary' ); ?&gt;</code></p>
<p>Notice that this is specific to my example, because I named my file ‘header-secondary.php’. Replace ‘secondary’ with however you named your new header template. For example, if I named my new custom template header-newHeader.php, I would replace ‘secondary’ with ‘newHeader’.</p>
<p>Now this new custom template will pull anything from your newly created header-secondary.php file. </p>
<p>This is the exact same process for the footer, but you would change the line of code that says:</p>
<p><code>   &lt;?php get_footer(); ?&gt;</code></p>
<p>Simply add ‘secondary-footer’, or however you named your custom footer template, in the parenthesis and it will pull the code from that other template file you created. </p>
<p>As with the page.php process, you’ll copy the code from your website’s header.php or footer.php file, and paste it into your new custom header or footer template. You can now edit the code in your custom template however you’d like. </p>
<p><strong>Step 5: Test your site</strong></p>
<p>Once you’ve saved all those files and uploaded them back to the server, choose the new custom page template on your new WordPress page and you should see any changes that you made to the code in your new template files. </p>
<p>Just like that you’ve created your very own WordPress template. Pat yourself on the back. You earned it, champ.</p>
<p><strong>Confused?</strong></p>
<p>If you have questions or if your site isn’t quite working, feel free to leave a comment below and we’ll do our best to steer you in the right direction. </p>
<p>If you’re not comfortable writing code but you want to start customizing your WordPress site, it might be worth brushing up on your HTML and to learn some PHP. <a href="https://www.codeschool.com/">CodeSchool</a> is a great free resource, or you can check out <a href="https://premium.wpmudev.org/blog/">WPMU Dev’s blog</a> to learn WordPress specific coding practices. </p>
<p>Or, if you’d rather avoid all of this, you can always hire a WordPress developer (the much faster, easier route). <a href="/">Hit us up at Kite Media</a> for any WordPress projects you have for your business! Kite Media is always looking to work with new, exciting businesses. </p>
<p>Happy coding!</p>
