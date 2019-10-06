# React Starter (Bulma/Fontawesome)
<div align="center">
  <!-- badges -->
  <a href="http://www.wtfpl.net/"><img
        src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
        width="80" height="15" alt="WTFPL" /></a>
</div>

A simple repository for starting an ejected Create-React-App project with already-integrated [bulma](https://bulma.io/)
and [font-awesome](https://fontawesome.com/) free edition.

> **DISCLAIMER:**<p>
>  This project has a very niche audience; namely only myself (and those who I try to show [bulma](https://bulma.io/)).
  With that, I am not under any obligation to accept any requests submitted. I am however open to consider them if you have any.

## Getting Started

To start the application just run

    docker-compose up --build

and the project will be running on `localhost:8080`.

### Prerequisites

The project requires [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/); npm not necessary as the build and running is
containerized.

### Installing

If you want to run the project locally (with no containerization); you'll need [npm](https://www.npmjs.com/).

To install all dependencies; run

    npm -i

then run your local dev server with:

    npm start

the project should now be running at `localhost:3000`.

## Running the tests

    npm -t

¯\\\_(ツ)_/¯

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Bulma.io](https://bulma.io/) - UI/CSS Framework
* [Fontawesome](https://fontawesome.com//) - UI Icons

## License

This project is licensed under the WTFPL License - see the [LICENSE.md](LICENSE.md) file for details
