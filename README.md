<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://jjacobsonn.github.io/uvu-studygroups/">
    <img src="./public/images/UVUComboOverWolverinesWhite-0040.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">UVU Study Groups</h3>

  <p align="center">
    An application to help students at UVU find and create study groups.
    <br />
    <a href="https://www.figma.com/design/ym37iW2znUsgLhKauQ1bqv/UVU-Study-Groups---e2i?m=auto&t=sL9P2sdZFEm4NT1v-6"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jjacobsonn.github.io/uvu-studygroups/">View Demo</a>
    ·
    <a href="https://github.com/jjacobsonn/uvu-studygroups">Report Bug</a>
    ·
    <a href="https://github.com/jjacobsonn/uvu-studygroups">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![UVU Study Groups Screenshot](./public/images/ss-README.png)](https://example.com)

UVU Study Groups is a web application developed as part of Utah Valley University's (UVU) Excellence & Innovation Initiative (e2i) program. This platform is designed to facilitate the creation, discovery, and management of study groups for UVU students, leveraging modern web technologies and integration with popular communication platforms.

### Key Features

- **User Authentication**: Secure login and signup functionality, with Discord integration for seamless access
- **Study Group Management**: Tools for creating, searching, and joining public study groups
- **Discord Integration**: Automatic server creation and member management for each study group
- **Intuitive User Interface**: A clean, responsive design optimized for both desktop and mobile devices

### Benefits

- **Enhanced Collaboration**: Facilitates easier connection between students with shared academic interests
- **Time Efficiency**: Reduces the overhead of manually coordinating study sessions
- **Improved Learning Outcomes**: Encourages peer-to-peer learning and knowledge exchange
- **University Integration**: Designed specifically for UVU students, aligning with university programs and initiatives

### Built With

* [![React][React.js]][React-url]
* [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
* [![Express][Express.js]][Express-url]
* [![JavaScript][JavaScript.com]][JavaScript-url]
* [![CSS][CSS.com]][CSS-url]
* [![MySQL][MySQL.com]][MySQL-url]
* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FIGMA DESIGN -->
## Figma Design Documentation
[![Figma UVU Study Groups ScreenShot](./public/images/figma-rm.png)](https://example.com)

The design for UVU Study Groups was created in Figma. It includes both desktop and mobile layouts for the following pages:
- Home
- Sign Up
- Login
- Join Study Group
- Create Study Group

You can view the detailed Figma design here:
[UVU Study Groups Figma Design](https://www.figma.com/design/ym37iW2znUsgLhKauQ1bqv/UVU-Study-Groups---e2i?m=auto&t=lq7FYnXMh2zOMXNN-6)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have Node.js, npm, MySQL (or another database system), and TailwindCSS installed.

* **Node.js & npm**:
  ```sh
  npm install npm@latest -g
  ```

* **TailwindCSS**:
  ```sh
  npm install -D tailwindcss
  ```

* **MySQL**:
  Follow the guidelines below for installation instructions.

### MySQL Installation

#### Installation on Windows:
1. Download the MySQL Installer from [MySQL's official website](https://dev.mysql.com/downloads/installer/).
2. Run the installer and choose the "Server only" installation option.
3. During the setup, configure a root password that you will use later.
4. Complete the installation.

#### Installation on macOS:
1. Install Homebrew if you haven't already:
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2. Use Homebrew to install MySQL:
    ```sh
    brew install mysql
    ```
3. Start the MySQL service:
    ```sh
    brew services start mysql
    ```
4. Secure your MySQL installation:
    ```sh
    mysql_secure_installation
    ```

#### Installation on Linux (Ubuntu/Debian):
1. Update your package index:
    ```sh
    sudo apt-get update
    ```
2. Install MySQL server:
    ```sh
    sudo apt-get install mysql-server
    ```
3. Run the security script:
    ```sh
    sudo mysql_secure_installation
    ```
4. Start the MySQL service:
    ```sh
    sudo service mysql start
    ```

#### Post-Installation Setup:
1. Log in to the MySQL root account:
    ```sh
    mysql -u root -p
    ```
2. Create a new database for your project:
    ```sql
    CREATE DATABASE uvu_study_groups;
    ```
3. Optionally, create a new MySQL user and grant privileges:
    ```sql
    CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
    GRANT ALL PRIVILEGES ON uvu_study_groups.* TO 'your_username'@'localhost';
    FLUSH PRIVILEGES;
    ```

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/jjacobsonn/uvu-studygroups-frontend.git
    ```

2. Install frontend dependencies:
    ```sh
    cd uvu-study-groups
    npm install
    ```

3. Install backend dependencies:
    ```sh
    cd uvu-studygroups-backend
    npm install
    ```

4. Create a `.env` file in the backend directory based on the `.env.example` file and fill in your credentials:
    ```sh
    cp .env.example .env
    ```
    Example contents of `.env`:
    ```plaintext
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASS=your_password
    DB_NAME=uvu_study_groups
    JWT_SECRET=your_jwt_secret
    ```

5. Run the backend server:
    ```sh
    npm run dev
    ```

6. Run the frontend development server in another terminal:
    ```sh
    cd ../uvu-study-groups
    npm start
    ```

7. Open your browser and navigate to `http://localhost:3000` to view the application locally.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Usage
* Navigate to `http://localhost:3000` to use the application locally.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Roadmap

- [x] Create GitHub Repo for Onboarding Project Members

#### Frontend Roadmap
- [x] Created Figma Outlining Main Application Pages
- [x] Created `Home Page` + Components
- [x] Create Main Footer
- [x] Create and implement `Sign Up` Page
- [x] Create and implement `Login` Page
- [x] Create and implement `Join Study Group` Page
- [x] Create and implement `Create Study Group` Page 
- [x] Implement Mobile App Version

#### Backend Roadmap
- [ ] Add User Authentication
- [ ] Integrate Discord OAuth2
- [ ] Add Notification System
- [ ] Implement Backend DB for Study Groups
- [ ] Implement the backend for the "Join Study Group" and "Create Study Group" pages:
  - **Task:** Ensure that users must be logged in to view and interact with these pages.
  - **Steps:**
    - Implement middleware in the Express.js backend to check if a user is authenticated before they can access these pages.
    - Redirect unauthenticated users to the login page.
    - Test the authentication flow to ensure users can only access the pages after logging in.
- [ ] Link the "Create Study Group" and "Join Study Group" pages through the backend:
  - **Task:** When a new study group is created, it should be viewable on the "View Study Groups" page with pagination.
  - **Steps:**
    - Create a new API endpoint (e.g., `POST /api/study-groups`) to handle the creation of study groups.
    - Implement a `GET /api/study-groups` endpoint that supports pagination, returning 8 study groups per page.
    - Ensure the frontend correctly requests and displays the appropriate groups based on the pagination state.
    - Write integration tests to ensure the linkage works as expected.
- [ ] Ensure the "Learn More" button functionality is dynamic:
  - **Task:** The "Learn More" buttons should take users to the "Join Study Group" page with content reflecting the selected course.
  - **Steps:**
    - Pass the course ID as a parameter when navigating to the "Join Study Group" page.
    - Fetch the course and study group details from the backend using the provided course ID.
    - Populate the form on the "Join Study Group" page with the correct details.
    - Test to ensure the correct data is displayed based on user interaction.
- [ ] Implement interactive search bars on the home and "View Study Groups" pages:
  - **Task:** The "Looking For A Specific Group?" areas should be interactive search bars.
  - **Steps:**
    - Create a `GET /api/study-groups/search` endpoint that returns study groups based on the search query.
    - Implement frontend logic to dynamically update the study groups displayed as the user types in the search bar.
    - Test the search functionality to ensure it’s responsive and accurate.
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeatureContribution`)
3. Commit your Changes (`git commit -m 'Add some YourFeatureContribution'`)
4. Push to the Branch (`git push origin feature/YourFeatureContribution`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License
This project is licensed under a Custom Restrictive License. See the [LICENSE](LICENSE.txt) file for more details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

GitHub Owner: **Jackson Jacobson**

Twitter - [@jackson_swe](https://x.com/jackson_swe)

Email - jacobsonjackson3@gmail.com

LinkedIn: [https://www.linkedin.com/in/jjacobsonn/](https://www.linkedin.com/in/jjacobsonn/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/jjacobsonn/uvu-studygroups-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/jjacobsonn/uvu-studygroups-frontend/forks
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/jjacobsonn/uvu-studygroups-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/jjacobsonn/uvu-studygroups-frontend/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jjacobsonn/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[TailwindCSS.com]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Express.js]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[JavaScript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS.com]: https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[MySQL.com]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/