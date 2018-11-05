# Welcome to my analysis!

this is the analysis of the website http://maps-google.us and contains steps as well as source code of the website in question

# Why

i was **bored!** additional to that, this site is a scam site which means it's illegal

[logo]: https://github.com/tmjvonboss/maps-google.us/blob/master/images/MainPage.png?raw=true "MainPage.png"

## Step 1 - cURL the website down

in order to get the source code of the website we should start with using cURL or anything sortalike to get the HTML code from the website
cURL command: `curl http://maps-google.us/ > index.html`
the result of this can be seen here:
https://github.com/tmjvonboss/maps-google.us/blob/master/results/index.html


## Step 2 - What is going on?

so we need to look at this piece:
~~~javascript
$.ajax(
	{
		type: 'GET',
		url: "source.php",
		cache: false,
		data:{
			v:getQueryString("v")
		},
		
~~~
so it wants to do a GET request to http://maps-google.us/source.php
well... can do that ma boi...

## Step 3 - cURL down source.php
cURL command: `curl http://maps-google.us/source.php > source.php`
the result of this can be seen here:
https://github.com/tmjvonboss/maps-google.us/blob/master/results/source.php.txt

as seen above this is base64, OMG lets decode this

## Step 4 - Decode the BASE64 string

you can decode this online, just copy paste it into https://www.base64decode.org/
result here:
https://github.com/tmjvonboss/maps-google.us/blob/master/results/source.php_decoded.html

BOI this is the website as seen on the screenshot above

## Step 5 - Decoding the Javascript code

for now we will find the hint into decoding this Javascript code here:

~~~javascript
//vars defined above... not copied cuz too big
for (var i = 0; i < smat.length; i += 10) {
	for (var k = 0; k <= 9; k++) {
		if ((k + i) < smat.length) {
			t += String.fromCharCode(smat.charCodeAt(i + k) - p[k]);
		}
	}
}
eval(unescape(t));
~~~

To decode:
~~~javascript
//vars defined above... not copied cuz too big
for (var i = 0; i < smat.length; i += 10) {
	for (var k = 0; k <= 9; k++) {
		if ((k + i) < smat.length) {
			t += String.fromCharCode(smat.charCodeAt(i + k) - p[k]);
		}
	}
}
console.log(unescape(t));
~~~

interesting part: `var f = ["onmouseout", "body", "addEventListener", "mouseout", "*************************************************\nRDN/YahLover.worm!055BCCAC9FEC Infection\n*************************************************\n\n", "attachEvent"];`

FOUND YA BOI

full result:
https://github.com/tmjvonboss/maps-google.us/blob/master/results/decoded_javascript.js

# Further research

so what can further be done? 
Well...
WHOIS -> personal information -> complain to hosters/spam or dox the purp?

## WHOIS?
since it's a .us domain we use http://www.whois.us/
interesting summary:
~~~
Domain Name: maps-google.us 
Registry Domain ID: D392E8A408CCD4BFDA1D8F4FD0EE91B8D-NSR 
Registrar WHOIS Server: whois.godaddy.com 
Registrar URL: whois.godaddy.com 
Updated Date: 2017-11-19T09:11:31Z 
Creation Date: 2017-11-14T09:11:30Z 
Registry Expiry Date: 2018-11-14T09:11:30Z 
Registrar: GoDaddy.com, Inc. 
Registrar IANA ID: 146 
Registrar Abuse Contact Email: abuse@godaddy.com 
Registrar Abuse Contact Phone: +1.4806242505 

Registry Registrant ID: C991CF4C16E13420A89EF15827FDEFE32-NSR 
Registrant Name: Andy Lee 
Registrant Street: wefqwr 
Registrant Street: weqreqw 
Registrant City: rwfe 
Registrant State/Province: Anhui 
Registrant Postal Code: 123242 
Registrant Country: cn 
Registrant Phone: +86.17689512348 
Registrant Email: 76JGYHJMGH@QQ.COM 
Registrant Application Purpose: P3 
Registrant Nexus Category: C11 
~~~
fake street and city? **idk** how well the address got translated from Chinese into English but meh
full results here:
https://github.com/tmjvonboss/maps-google.us/blob/master/results/WHOIS_search.txt

## Contacting GoDaddy.com
GG godaddy, enjoying that malware spreading aid...
(Complaining to them after I finished this research, publishing email conversation in the future)

## Email contact
email address `76JGYHJMGH@QQ.COM`
look closely, **qq.com**, at first i thought it was fake...
https://en.mail.qq.com/cgi-bin/loginpage
might make an account see what happens...

# Summary
try better to hide client side JS code BOI, or just dont do this shit...
