# MiniEvax

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## Use Cases 
* Checking For the Current user's Account
* Checking the List of the Appointments assigned to the Current User

## Project Structure
* pages folder: This folder Contains the View and View-Models of each use case : the Html files presenting the views and the ts componenets to be the equivalent of the view-model
* models folder: This folder containes the entities definition (user and appointment)
* services folder: this folder containes the buisiness logic definition 

=> services and models together forms the model layer of the application

## patterns from angular used in this Project
* Dependacy injection mechanism
* property binding
* event binding
* two way data binding

## Note related to the Server
Since it's not related to this Lab, We decided to mock the server by using the json server dependency from npm. in order to have the server running use the following command: 
```bash
$ npm run server
```