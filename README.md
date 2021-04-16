What does this application do?
The goal of the application is to search through a given text file of insurance companies. The user will be prompted to search for a company using their ID and if a company matches the input id the geographic area, website, plan name and insurance company will be returned for the relevant company.
What You Need
For the FrontEnd
* Install React.js
   * Go to this link and install node for the device you have https://nodejs.org/en/
      * In a terminal type node -v to make sure you have a working version of node
      * In a terminal type npm -v to make sure you have a working version of npm(should come with node download)
      * In a terminal type npx -v to make sure you have a working version of node(should come with node download)
   * Open Terminal
      * Type create-react-app project-name to create your react app where you will put the frontend stuff.
Now You Should Have React Installed For Your FrontEnd


For the BackEnd
* Install Express.js
   * Go to this link and install NPM for the device you have https://nodejs.org/en/(Assuming it is not already installed)
   * Create a directory and cd into that directory, this will be where your backend is stored
   * Open Terminal
      * Type npm init
      * Type npm install express --save inside of the folder where you want to save your backend


Modules needed (FrontEnd)
* Install Axios
   * Go into your directory where you have your frontend
   * Type npm install axios


Modules needed(BackEnd)
* Install File System
   * Go into your directory where you have your backend
   * Type npm install file-system --save
You should hopefully have all of the components necessary to run the application
IMPORTANT
After Downloading the Code Please Do the Following Steps to Ensure it Can Run Correctly
* Go into the frontend folder you have created and delete the src and the package.json files in the folder
   * Then go into the downloaded FrontEnd folder and move the src folder and the package.json file from the FrontEnd folder into the folder you have created
* Go into the backend folder you have created and move the medicare_plans.txt from the downloaded BackEnd folder into your created folder
   * Then move the app.js file from the downloaded BackEnd folder into your created backend folder.
In order to run the program, please first run the backend by typing node app.js in the terminal of where your backend is located
While the backend is running, please run the frontend by typing npm start in the terminal of where your frontend is located