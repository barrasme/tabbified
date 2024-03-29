Please note that these instructions are online at www.smileysoftware.co.uk/projects/tabbified

# About Tabbified

Tabbified is a jQuery plugin that literally makes a dead simple bit of HTML into a cool tabbed layout.
The plugin speaks for itself. Visit www.smileysoftware.co.uk/projects/tabbified to look at it. Check out those tabs, cool aren't they. That's Tabbified in action.

## Version
Currently Tabbified is version 1.0, this is the very first release I have made.

## Support
Very shortly I'll have a support section on the site. Should there be any issues I'll tackle them there. But in the mean time please feel free to raise issues on github.


##Installation

Tabbified is a jQuery plugin and so requires jQuery to function.

### 1. Download the package and place on your server
Download Tabbified.js or Tabbified.min.js and place it on your server. 
In this case I have put the script in the /js folder.

Now copy the two lines below and paste them into the header of your document. Alternatively you can place them near the bottom of the document. Just above the closing body tag.

<br/>
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript" &gt;&lt;/script&gt;
<br/>
&lt;script src="js/tabbified.js" type="text/javascript"&gt;&lt;/script&gt;
						
### 2. The HTML
The HTML required is really simple. Check out the code below.
The outer containing DIV needs an ID.
This ID can be anything you like. Just replace "YourIDHere" with whatever you like.

&lt;div id="YourIDHere"&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;About&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Installation&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Download&lt;/a&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&nbsp;&lt;div&gt;This is tab one&lt;div&gt;I'm a sub DIV&lt;/div&gt;&lt;/div&gt;<br/>
&nbsp;&nbsp;&lt;div&gt;Some stuff in tab 2&lt;/div&gt;<br/>
&nbsp;&nbsp;&lt;div&gt;And more shizzle in tab three&lt;/div&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&lt;/div&gt;<br/>
						
There are two DIVs inside the main container. The first contains the tabs themselves and the second contains the tabbed content.
Or if you're feeling really lazy you could let me generate your code for you. Check out the "HTML Generator" tab at www.smileysoftware.co.uk/projects/tabbified

### 2a. The HTML in more detail
The first step is to create wrapper div for your tabbed content and give it an ID.
<br/>&lt;div id="YourIDHere"&gt;
<br/>&lt;/div&gt;<br/>
						
Now we need to add a second div to enclose the actual tabs.
<br/>&lt;div id="YourIDHere"&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&lt;/div&gt;<br/>
						
And add the tabs. Each tab is just an anchor element, don't worry about the href, just leave it blank.
<br/>&lt;div id="YourIDHere"&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;About&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Installation&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Download&lt;/a&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&lt;/div&gt;<br/>
						
All that remains is to add the div's to contain the actual content. So lets add another div to the main element.
<br/>&lt;div id="YourIDHere"&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;About&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Installation&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Download&lt;/a&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&nbsp;&lt;div&gt;<br/>		
&nbsp;&lt;/div&gt;<br/>
&lt;/div&gt;<br/>
						
And now add the div for each tab.
<br/>&lt;div id="YourIDHere"&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;About&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Installation&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;a href=""&gt;Download&lt;/a&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&nbsp;&lt;div&gt;<br/>
&nbsp;&nbsp;&lt;div&gt;This is tab one&lt;div&gt;I'm a sub DIV&lt;/div&gt;&lt;/div&gt;<br/>
&nbsp;&nbsp;&lt;div&gt;Some stuff in tab 2&lt;/div&gt;<br/>
&nbsp;&nbsp;&lt;div&gt;And more shizzle in tab three&lt;/div&gt;<br/>
&nbsp;&lt;/div&gt;<br/>
&lt;/div&gt;<br/>
						
In my example I have used three tabs but there is effectively no limit to the amount of tabs you can use.  If you want to add more just add another anchor to the top div and another div to the second div.
Wow that all got a bit divvy didn't it.

### 3. The JavaScript
Tabbified will work with as many tabs as you like and as many tabbed area's as you like. All you have to do is to tell the plugin where to find them.
Either in the header of your HTML page or near the footer, place the following code.

&lt;script&gt;<br/>
$(document).ready(function() {<br/>
&nbsp;&nbsp;$('div#YourIDHere').tabbified();<br/>}); 
<br/>&lt;/script&gt;<br/>
						
The line below will look for a div with an ID of YourIDHere and tabbify it.
$('div#YourIDHere').tabbified();	
						
More tabbified navigation area's
You can add as many tabbed navigation's as you would like to your website using tabbified.

To add a second tabbed navigation to your site just create the HTML again but this time give it a different ID. In my case I chose "tabbified". Now tell the plugin where to find it.

$('div#YourIDHere').tabbified();

$('div#tabbified').tabbified();								
						
And now both navigation structures will be tabbified.
