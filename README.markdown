Please note that these instructions are online at www.smileysoftware.co.uk/projects/tabbified

# About Tabbified

Tabbified is a jQuery plugin that literally makes a dead simple bit of HTML into a cool tabbed layout.
The plugin speaks for itself. You're looking at it. Check out those tabs up there, cool aren't they. That's Tabbified in action.
Version
Currently Tabbified is version 1.0, this is the very first release I have made.
Support
Very shortly I'll have a support section on this site. Should there be any issues I'll tackle them there.


##Installation

Tabbified is a jQuery plugin and so requires jQuery to function.
### 1. Download the package and place on your server
Download Tabbified.js and place it on your server. In this case I have put the script in the /js folder.
Now copy the two lines below and paste them into the header of your document. Alternatively you can place them near the bottom of the document. Just above the closing body tag.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript" rel="stylesheet"></script>
<script src="js/tabbified.js" type="text/javascript"></script>
						
### 2. The HTML
The HTML required is really simple. Check out the code below.
The outer containing DIV needs an ID.
This ID can be anything you'd like. Just replace "YourIDHere" with whatever you'd like.
<div id="YourIDHere">
	<div>
		<a href="">About</a>
		<a href="">Installation</a>
		<a href="">Download</a>
	</div>
	<div>
		<div>This is tab one<div>I'm a sub DIV</div></div>
		<div>Some stuff in tab 2</div>
		<div>And more shizzle in tab three</div>
	</div>
</div>
						
There are two DIVs inside the main container. The first contains the tabs themselves and the second contains the tabbed content.
Or if you're feeling really lazy you could let me generate your code for you. Check out the "HTML Generator" tab

### 2a. The HTML in more detail
The first step is to create wrapper div for yout tabbed content and give it an ID.
<div id="YourIDHere">
	
</div>
						
Now we need to add a second div to enclose the actual tabs.
<div id="YourIDHere">
	<div>
	</div>
</div>
						
And add the tabs. Each tab is just an anchor element, don't worry about the href, just leave it blank.
<div id="YourIDHere">
	<div>
		<a href="">About</a>
		<a href="">Installation</a>
		<a href="">Download</a>
	</div>
</div>
						
All that remains is to add the div's to contain the actual content. So lets add another div to the main element.
<div id="YourIDHere">
	<div>
		<a href="">About</a>
		<a href="">Installation</a>
		<a href="">Download</a>
	</div>
	<div>
		
	</div>
</div>
						
And now add the div for each tab.
<div id="YourIDHere">
	<div>
		<a href="">About</a>
		<a href="">Installation</a>
		<a href="">Download</a>
	</div>
	<div>
		<div>This is tab one<div>I'm a sub DIV</div></div>
		<div>Some stuff in tab 2</div>
		<div>And more shizzle in tab three</div>
	</div>
</div>
						
In my example I have used three tabs but there is effectively no limit to the amount of tabs you can use.  If you want to add more just add another anchor to the top div and another div to the second div.
Wow that all got a bit divvy didn't it.

### 3. The JavaScript
Tabbified will work with as many tabs as you would like. All you have to do is to tell the plugin where to find them.
Either in the header of your HTML page or near the footer, place the following code.
<script>
$(document).ready(function() {
	$('div#YourIDHere').tabbified();		             
}); 
</script>
						
The line below will look for a div with an ID of YourIDHere and tabbify it.
$('div#YourIDHere').tabbified();	
						
More tabbified navigation area's
You can add as many tabbed navigation's as you would like to your website using tabbified. To add a second tabbed navigation to your site just create the HTML again but this time give it a different ID. In my case I chose "tabbified". Now tell the plugin where to find it.
$('div#YourIDHere').tabbified();
$('div#tabbified').tabbified();								
						
And now both navigation structures will be tabbified.
