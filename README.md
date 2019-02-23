

# Angular-with-laravel-API

<p align="center"><img width="75" src="https://angular.io/assets/images/logos/angular/angular.svg"><img width="90" src="https://laravel.com/assets/img/laravel-logo.png"></p>

## Design

[Angular Material 7.3.1](https://material.angular.io) design components built with frontend.

## Requirements

- [PHP](http://php.net/) 7.1.3+
- [composer](https://getcomposer.org/) 
- [Node.js](https://nodejs.org/en/) 
- [npm](https://www.npmjs.com/) 
- [Mysql](https://www.mysql.com/) 

## Installation

In the project Clone with HTTPs section, click to <span class="octicon octicon-clippy" aria-label="The clipboard icon " title="The clipboard icon "></span> copy the clone URL for the repository:

To install the dependency, run the following cammand:

Use By below the command for the Backend:

```bash
composer install
```
> For more information about Composer usage, check [their official documentation](https://getcomposer.org/doc/00-intro.md).

Angular install the dependency, run the following command. (Frontend)

```bash
npm install
```
> For more information about npm usage, check [their official documentation](https://docs.npmjs.com/downloading-and-installing-packages-locally).

To publish the configuration file in Laravel, you need to run following line of code :

```bash
$ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

When that is done, set the jwt-auth secret by running the following command:

```bash
$ php artisan jwt:secret
```

> Do you need to more details of laravel jwt-auth dependencey, Chack **https://jwt-auth.readthedocs.io/en/develop/** 


## Laravel envirement stup

Change the database name and password in .env file and running by following the command:

```bash
$ php artisan migrate:fresh --seed
```

## Processing by API URL

Change the api url in the proxy.conf.json file, And Do you want to change the API Url requested process. follow the angular documentation **https://angular.io/guide/build**

```bash
{
    "/api/*": {
      "target": "http://localhost:8000", // API URL
      "secure": false,
      "logLevel": "debug"
    }
}
```

Launch the server by using the CLI command `ng serve`, with the --open option for Frontend

> For more information about Angular usage, check [their official documentation](https://angular.io/guide/quickstart).

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
