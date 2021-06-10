[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Pieter-stack/Chatscape">
    <img src="/assets/Chatscape_logo.PNG" alt="Logo" width="100%" height="150">
  </a>

  <h3 align="center">Chatscape</h3>

  <p align="center">
    CHATROOM app that is using Nodejs, javscript and socket.io.
    <br />
    <a href="https://github.com/Pieter-stack/Chatscape"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Pieter-stack/Chatscape">View Demo</a>
    ·
    <a href="https://github.com/Pieter-stack/Chatscape/issues">Report Bug</a>
    ·
    <a href="https://github.com/Pieter-stack/Chatscape/issues">Request Feature</a>
  </p>
</p>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h1 style="display: inline-block">Table of Contents</h1></summary>
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
    <li><a href="#functions">Features and functions</a></li>
    <li><a href="#concept">Concept process</a>
          <ul>
        <li><a href="#ideation">Ideation</a></li>
        <li><a href="#wireframes">Wireframes</a></li>
        <li><a href="#userflow">User-flow diagram</a></li>
      </ul>
    </li>
     <li><a href="#dev">Development process - implementation</a></li>
      <li><a href="#demo">Demo video</a></li>
    <li><a href="#Contributions">Contributions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

 <img src="/assets/Chatscape_page.PNG" alt="mockup" width="" height="600" align="center">

<br></br>



### Built With

* [Nodejs](https://nodejs.org/en/)
* [Javascript](https://www.javascript.com/)
* [Socket.io](https://socket.io/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy of Chatscape and running follow these simple steps.

### Prerequisites

* install Node.js [https://nodejs.org/en/](node.js) and follow the installation instructions

* homebrew
  ```sh
  brew install node
  brew install npm 
  ```

* npm
  ```sh
  npm install
  npm init --yes
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Pieter-stack/Chatscape.git
   ```
2. Install NPM packages - client.js
   ```sh
   npm install --save es6-template-strings
   npm install socket.io-client
   npm install node-static

   ```

3. Install NPM packages - server.js
   ```sh
   npm install --save es6-template-strings
   npm install socket.io

   ```

<br></br>

# Features and functions 
Chatscape allows multiple users to communicate to eachother in a groupchat environment.
 
The users can login through the app and there is authentication added, there are also a list of users that are online and they can send and receive messages, and view chat history.

See the [open issues](https://github.com/Pieter-stack/Chatscape/issues) for a list of proposed features (and known issues).

<br></br>

# Concept process
### Ideation
For this project I did some research on chatroom apps and then I put together a moodboard of all my findings:


  <img src="/assets/Chatscape_moodboard.PNG" alt="mockup" width="80%" height="600" align="center">
<br></br>

### Wireframes

I made multiple wireframes and transformed them into initial ideas with my idea to have themes for the users to choose from:
  <img src="/assets/Chatscape_wireframes.PNG" alt="mockup" width="" height="600" align="center">

I didn't implement the themes into my project at this time.
<br></br>

### User-flow diagram
After that, I created a simple userflow diagram, which depicts the basic information flow when the user interacts with the website.
  <img src="/assets/Chatscape_userflow.PNG" alt="mockup" width="" height="600" align="center">
<br></br>

# Development process and implementation
Roadmap of the last 9 weeks, here's a visual representation of my success and challenges.
* **login page** - In the first week I created a simple login page and created a http response.
* **Routing and templates** - We then learnt how to use routing in our projects, which allowed me to start working on my chat page. We also taught how to read and use HTML files as templates.
* **Socket.io** - I struggled with the socket.io and sending data accross session but in the end I finished the project
* **Sending messages** - After that, we learned how to save conversation history to text files. This is when I began to arrange my responses and produce the messages in a professional manner.


<!-- USAGE EXAMPLES -->
## Usage

This project can still be improved to have single cob=nversation with users rather than groupchats and also add themes and colours for text blocks.

_<img src="/assets/Chatscape_chatspage.PNG" alt="mockup" width="700" height="" align="center">
  <br></br>
_For more examples, please refer to the [Documentation](https://example.com)_


<!-- CONTRIBUTING -->
## Contributions

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - pieterven12@gmail.com

Project Link: [https://github.com/Pieter-stack/Chatscape](https://github.com/Pieter-stack/Chatscape)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [https://github.com/ArmandPret/rona]()
* [https://smartmockups.com/mockups/laptop]()
* [https://smartmockups.com/mockups/desktop]()






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Pieter-stack/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/Pieter-stack/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Pieter-stack/repo.svg?style=for-the-badge
[forks-url]: https://github.com/Pieter-stack/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/Pieter-stack/repo.svg?style=for-the-badge
[stars-url]: https://github.com/Pieter-stack/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/Pieter-stack/repo.svg?style=for-the-badge
[issues-url]: https://github.com/Pieter-stack/repo/issues
[license-shield]: https://img.shields.io/github/license/Pieter-stack/repo.svg?style=for-the-badge
[license-url]: https://github.com/Pieter-stack/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Pieter-stack
