# Full Stack Portfolio

![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This is my portfolio website, which is a full stack application deployed on Heroku. It runs an Express server on Node.js and uses Express-Handlebars to populate the HTML pages with project information stored in a JSON file. The front end is styled with Bootstrap as well as custom CSS. 

## Table of Contents

* [Installation](#installation)

* [Demonstration](#demonstration)

* [Code Explanation](#code-explanation)

* [Technologies Used](#technologies-used)

* [Deployed Link](#deployed-link)

* [License](#license)

* [Tests](#tests)

* [Questions](#questions)

## Installation

After downloading this repository, run the following command inside the folder to install the necessary dependencies:

```
npm install
```

To run the server locally, run:

```
npm start
```

## Demonstration

![Demonstration of application](demo.gif)

## Code Explanation

The following code snippet fills a handlebars template with project information to generate the body of the featured projects page. It loops through an array of project objects and renders information about the projects, and within each loop there is a second loop to print the technologies and skills used. This makes allows for the flexibility to easily rearrange, update, or change the projects displayed by editing the JSON file or manipulating the array within the code.

```handlebars
<h2>Featured Projects</h2>

{{#each project}}
    <h3>{{title}}</h3>
    <img class="img-fluid" src="/assets/img/{{repo}}.png" alt="screenshot of {{title}}" width="1000">
    <p>{{description}}</p>

    <a class="btn button-dark m-2 left-align" href="https://github.com/SierraChapman/{{repo}}">GitHub Repo</a> 
    {{#if url}}<a class="btn button-bright m-2" href="{{url}}">Deployed Application</a>{{/if}}


    <h4>Skills/Technologies Used</h4>
    <div style="column-count: 2;">
        <ul>
            {{#each tags}}
                <li>{{this}}</li>
            {{/each}}
        </ul>
    </div>
{{/each}}
```

## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Heroku](https://www.heroku.com/)
* [Google Fonts](https://fonts.google.com/)
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Node.js](https://nodejs.org/en/)
* [Node Package Manager (NPM)](https://www.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)


## Deployed Link

* [See Live Site](https://full-stack-portfolio-sc.herokuapp.com/)

## License

This project is licensed under the MIT license.

## Questions

If you have any questions about the repo, open an issue or contact me directly at siechap@gmail.com. You can find more of my work at [SierraChapman](https://github.com/SierraChapman/).