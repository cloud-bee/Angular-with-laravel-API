

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

Clone the repository using the clone URL in the "Clone with HTTPs" section of the project and install the dependency. 

For that follow the below command:

Backend Dependency Installation:

```bash
composer install
```
> For more information about Composer usage, check [their official documentation](https://getcomposer.org/doc/00-intro.md).

Frontend Dependency Installation (Angular)

```bash
npm install
```
> For more information about npm usage, check [their official documentation](https://docs.npmjs.com/downloading-and-installing-packages-locally).


## Laravel Environment Setup

Generate the .env file by running:

```bash
cp .env.example .env
```

Update the database name and password in the .env file and run:

```bash
$ php artisan migrate:fresh --seed
```

To publish the configuration file in Laravel, you have to run below line of the code:

```bash
$ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

When it's done, set the jwt-auth secret:

```bash
$ php artisan jwt:secret
```

> Do you need to more details of laravel jwt-auth dependencey, Chack **https://jwt-auth.readthedocs.io/en/develop/** 

## Processing by API URL

Change the api url in the proxy.conf.json file, and do you want to change the API Url requested process. follow the angular documentation **https://angular.io/guide/build**

```bash
{
    "/api/*": {
      "target": "http://localhost:8000", // API URL
      "secure": false,
      "logLevel": "debug"
    }
}
```

Run the server using the command: "ng serve --open" for the Frontend.

> For more information about Angular usage, check [their official documentation](https://angular.io/guide/quickstart).

## Issue Reporting

If you have found a bug or feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
