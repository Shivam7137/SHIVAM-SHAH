 My Photography Website

This is a simple HTML based website for a photography business. The website consists of 4 pages: Home, Services,Contact,
and Portfolio. The following is the structure of the code for each of the pages.

Home Page
Purpose
The Home Page serves as an introduction to the website and provides a brief overview of the services offered.

Dependent Code Structures
The Home Page uses a header and nav element to provide navigation between the different pages of the website.
The page also includes two li elements, each containing an img element with a link to the Portfolio page.
The page also includes a footer element that displays a copyright notice.
--------------------------------------------------x----------------------------x----------------------------------------

Services Page
Purpose
The Services Page provides detailed information on the photography services offered by the business.

Dependent Code Structures
The Services Page uses a header and nav element to provide navigation between the different pages of the website.
The page includes a table that displays the different services offered and their prices.
The page also includes a footer element that displays a copyright notice.

---------------------------------------------------x---------------------------x---------------------------------------

Contact Page
Purpose
The Contact Page allows users to contact the business for any inquiries or questions.

Dependent Code Structures
The Contact Page uses a header and nav element to provide navigation between the different pages of the website.
The page includes a form that allows users to input their name, email, and message.
The page also includes a footer element that displays a copyright notice.

---------------------------------------------------x-----------------------------x--------------------------------------

-Portfolio Page
Purpose
The Portfolio Page showcases the photographer's work and serves as a platform to display their photos.

Dependent Code Structures
The Portfolio Page uses a header and nav element to provide navigation between the different pages of the website.
The page does not contain any specific code structures as it will be dependent on the content displayed on the page.

----------------------------------------------------x-----------------------------x-------------------------------------

The relative paths for the images and the favicon used in the code are as follows:

favicon.ico: favicon.ico
sunset.jpg: /images/sunset.jpg
Lizard.jpg: /images/Lizard.jpg
Peggy's_cove.jpg: /images/Peggy's_cove.jpg

-----------------------------------------------------x-----------------------------x------------------------------------
Button and JavaScript Implementation:
The button on the homepage can be used to switch between light and dark themes. This is achieved using JavaScript,
which changes the CSS properties of the elements on the page. When the button is clicked, the JavaScript function is
executed, which toggles a class on the body element. The class can then be used in the CSS to define different styles
for the light and dark themes. The JavaScript code can be included in the head or body section of the HTML file or in
an external JavaScript file.

This JavaScript code defines three buttons with IDs "button1", "button2", and "button3". Each button has an event
listener attached to it that listens for a click event. When the button is clicked, the event listener executes a
function that resets all the styles on the page using the resetStyles() function, and then applies new styles to various
 elements depending on which button was clicked.

For example, if "button1" is clicked, the function changes the background color of "button1" to black, changes the text
 color of "button2" and "button3" to black, changes the background color of the body element to a light gray color,
 changes the text color of the body element to black, changes the background color of the navigation element to black,
  and changes the text color of all navigation links to white.

Similarly, if "button2" is clicked, the function changes the background color of "button2" to black, changes the text
color of "button1" and "button3" to black, changes the background color of the body element to black, changes the text
color of the body element to white, changes the background color of the navigation element to black, and changes the
text color of all navigation links to white.

If "button3" is clicked, the function changes the background color of "button3" to black, changes the text color of
"button1" and "button2" to black, changes the background color of the body element to a light blue color, changes the
text color of the body element to black, changes the background color of the navigation element to white, and changes
the text color of all navigation links to black.

The resetStyles() function is used to reset all the styles to their default values, which is particularly useful when
switching between different themes.

Finally, there is a piece of code that checks if the user's system is currently using dark mode. If dark mode is
enabled, the code automatically clicks "button2" to apply the dark theme. Otherwise, it automatically clicks "button1"
to apply the light theme.
------------------------------------------------------x----------------------x-----------------------------------------

References
All the pictures and videos that are used are mine including the external links provided in the website
Most of the HTML code and some part of this Readme is being adapted from my A1 and A2 assignments

