# Web Technologies - Final Report

The group members are **Asel Kitulagoda (ak17520)** and **Karthik Sridhar (ks17226)**. Our project is a fully responsive multi-page website, selling a futuristic fitness tracker called Enerjog. This is an idea inspired from our Year 2 unit, Computer Science in Society. The project consists of 2 parts:
*   **enerjog-api** - The SQLite database API, which runs on port ```3333``` and hosted on [http://enerjog-api.herokuapp.com]().
*   **enerjog-website** - The main website, which runs on port ```3000``` and hosted on [https://enerjog-tracker.herokuapp.com]().

Setup, Installation and Running instructions are described in the ```README.md```.

## Grade Estimates

Below are what we feel are the estimates for our grades.
*   HTML - **A+**
    *   We used an existing framework **Nuxt.js** to divide our website into templates which get rendered during run time. This also allowed us to follow a systemic project structure throughout. The main pages of the site can be found under ```enerjog-website/pages/``` while the individual components can be found under ```enerjog-website/components```. 
*   CSS - **A+**
    *   We wrote most of the styling using **SCSS**, a CSS pre-processor which helped us do the styling more efficiently. 
    *   ```Poppins``` by Google fonts is the core font used throughout the website.
    *   Excessive use of media queries and keyframes with vendor prefixes to add smooth transitions, animations and responsiveness to the site (cross-browser).
    *   Stylings for the pages can be found under ```enerjog-website/assets/scss```.
    * Made use of Bulma for styling in Order portal 
*   JS - **A+**
    *   We used JS in most components, to trigger animations and toggle classes (hamburger menu for mobile view).
    * We built the API using ***AdonisJS*** and it uses ***JWT*** for our authentication module . The API itself has 5 end points: ```\register``` , ```\login```, ```\me```, ```\change``` and ```\destroy```.API Has CORS enabled. we use authentication tokens in the local data storage to manage sessions for users.
    * we use AdonisJS to handle all Post and Get requests which pass these onto to asynch methods declared in the controller in ```enerjog-api/Controllers/AuthenticationController.js```. Here we use the models defined in ```enerjog-api/Models``` to perform CRUD functionaity on the embedded database and then return responses back to the website.
    * we also make use of ***Vuex store*** to extract getters from the store which we call in our computed property to ensure the information displayed in the website is consistent with the database. 
    * we also created a guest middleware to restrict login and register pages to only users that are not logged in.
*   PNG - **A+**
    *   Most of the product images were taken from the original website itself, found [here](https://www.letscom.com/). The rest of the images are royalty free.
    *   Excess use of **Krita** for image manipulation:
        *   Designing and Exporting the main logo.
        *   Enhancing, smoothing and removal of sharp edges on images.
        *   Bezier Curve Tool to outline sections of the image.
        *   Layering of Images and exporting as one whole.
*   SVG - **A+**
    *   The site involves a lot of SVGs. Some of them made and animated from scratch. We mainly used **Inkscape** to draw the SVGs. They include the outline of Enerjog and the Running man.
    *   Some SVGs were downloaded/embedded from FontAwesome and Undraw, which are free to use. 
    *   We used **Figma**, a free SVG editing tool for:
        *   Making the circle gradients for landing page.
        *   Organising and grouping the SVGs exported from Inkscape in order to easily access the ID of each components.
        *   To visualise and test the SVG animation done using animateTransform.
*   Server - **A+**
    *   We wrote our own server for the website with Node and Express. This overrides the default Nuxt.js one. This can be found under ```enerjog-website/server/index.js```
    *   In ```enerjog-api```, the ```server.js``` spins up the API
    *   We also use Express Sessions and Web Tokents to save the user's sessions so that they remain logged in even after closing the session.
    *   We have used Nuxt.js's middleware to define a route for guest users as well. This means if the user is not logged in, they cannot access the ```/profile``` page and will be redirected to the home page.
    *   Since the site is hosted on Heroku, the Heroku SSL is pre-enabled through its certificate management.
*   Databases - **A+**
    *   The ```enerjog-api``` contains everything to do with the database.
    *   The database is an embedded SQLite database called ```enerjog.sqlite```. The recent copies of the database can be migrated (check ```README.md```).
    *   We used ORMs (LucidORM) to create our tables
    *   We store Passwords which are encrypted using **bcrypt**
    *   We perform all CRUD operations, which can be tested from the ```/order``` page.
*   Dynamic Pages - **A+**
    *   We make extensive use of Nuxt.js, in order to dynamically insert data into templates.
    *   The ```Navbar.vue``` changes dynamically when the user is logged in or not.
    *   The ```Notifications.vue``` component renders the response from the API on the register and login pages if there is an issue.
    *   The logged in User's details are displayed and can be changed during runtime.
