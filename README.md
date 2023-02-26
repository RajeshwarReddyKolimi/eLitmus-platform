# eLitmus-platform

It is chrome extension which monitors the activity of a user while giving his/her exams or test. It is developed using the Javascript, html and css for frontend and node.js for the backend support along with relaional database as MySQL deployed on AWS RDS.

Steps to run application --> 

1] download or clone from github

2] prerequisite -> 

    -- node.js
    -- chrome

3] Backend setup ->
Make sure the node is installed 
try below command to check

    -- node -v
    -- npm -v
locate the folder "node-server"
run below command in cmd after navigating to folder "node-server"

    -- npm install  // installs the dependencies
    -- node server.js  // runs the server
    
it will run the server at http://localhost:8081 

below are the list of exposed endpoints on it

    1 -  http://localhost:8081/student-upload   // uploads the pictures of user activities

    2 -  http://localhost:8081/create-student   // creates the student details in DB

    3 -  http://localhost:8081/student-all'     // fetches all the photos of all the students

4] To run Chrome Extension 

    -- goto Chrome and type in the URL chrome://extensions
    
    -- enable the Developer Tool on right top corner of chrome
    
    -- click on Load Unpack
    
    -- select the eLitmus-chrome-extension folder
    
5] you can see the extension available now in chrome with name as eLitmus.

6] Before testing the extension make sure that any random website is opened.

7] Enter the details and click start test. It will capture the images every 3 minutes.

8] To see the saved images click on admin dashboard and enter details as

    Id: Abc
    
    Password: Abc@123
    
