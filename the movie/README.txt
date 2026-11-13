THE JOURNEY OF 2 KIDS — THE MOVIE
==================================

FILES
-----
index.html  Structure and story content
style.css   Cinematic visual design and responsive layout
script.js   Film opening, scroll reveals, live counter, soundtrack and replay

RUN LOCALLY
-----------
1. Extract the downloaded ZIP.
2. Open VS Code.
3. Choose File > Open Folder.
4. Select the "the_movie_fahad_aysha" folder.
5. Open index.html.
6. Right-click and choose "Open with Live Server".
   If Live Server is not installed, you can open index.html directly in a browser.

SOUNDTRACK
----------
Click SOUND in the navigation and choose an audio file from your device.
The file is played locally; it is not uploaded to a server. Visitors to a published
website must select their own audio file.

COUNTER
-------
The live counter starts at 25 October 2024. The date is set in script.js:
const startDate = new Date(2024, 9, 25, 0, 0, 0);
JavaScript months start at zero, so 9 means October.

CUSTOMISING
-----------
Edit the story text directly in index.html.
The still-image backgrounds use remote Unsplash images and need an internet
connection. Replace the image URLs in style.css with your own images if desired.
Use images you own or have permission to use.

PUBLISHING WITH GITHUB PAGES
----------------------------
1. Create a GitHub repository.
2. Upload index.html, style.css and script.js to its root.
3. Open Settings > Pages.
4. Choose Deploy from a branch, select main and /(root), then Save.
5. Wait for GitHub Pages to publish the website.

PRIVACY
-------
Before publishing, make sure both people are comfortable with the story and
any photos or personal details included. This project uses no database and
does not collect or send relationship information.
