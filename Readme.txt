
https://www.youtube.com/watch?v=HfJjzmSaLuQ&t=73s

project setup:
1. google fonts: use Open Sans font from fonts.google.com
 <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
 and put the link in the C:\react-tutorial\firstproject\city-tours\public\index.html file:
2. get font awesome from https://fontawesome.com 
   npm install --save react-fontawesome
   https://www.npmjs.com/package/react-fontawesome
   https://fontawesome.com/v4.7.0/examples/
	$ npm i --save @fortawesome/fontawesome-svg-core
	$ npm i --save @fortawesome/free-solid-svg-icons
	$ npm i --save @fortawesome/react-fontawesome   
	usage:
	import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
	import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";	
	
          <FontAwesomeIcon icon={faCheckSquare} />
          Favorite Drink: <FontAwesomeIcon icon={faCoffee} />
	https://programmingwithmosh.com/react/font-awesome-5-with-react/
3. Sass allow us to work with a css in a more powerful way:
   npm install node-sass --save
   rename index.css to index.scss to use sass (work)
   


4. CSS:
   https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_transition
   https://www.rapidtables.com/web/color/RGB_Color.html
   

5. deployment:   
 1. gett a git software (https://git-scm.com
 2. github account
 3. netlify acount
 a. create new repository in github as 
 b. after create it, copy: git remote add origin https://github.com/daccukc/react-city-tours-dac-cu.git
 c. issue the comand: git add .
 d. issue the command git commit -m "first commit"
 e. paste the "git remote add origin https://github.com/daccukc/react-city-tours-dac-cu.git" on the command prompt
 f. issue: git push -u origin master this is saying how we want to push this.
 
 g. go to netlify and login as github account
 g.1. click on New site from Git
 g.2. click on GitHub button to login netlify  as github account
 g.3. choose the repository city-tour in this case
 g.4. click on deployment
 g.5. click on Site setting to change the name of the site by clicking on Change site name and enter "react-city-tour-dac-cu"
 

6. maintenante:
6.1 change the background to $mainGreen in index.scss and save it 
6.2 issue the command: git add .
6.3 issue the command: git commit -m "background change"
6.4 issue the command: git push -u origin master 


https://react-city-tour-dac-cu.netlify.com/