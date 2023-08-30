# node-api-boilerplate
Boilerplate setup for an api service using Node &amp; ExpressJS

# Installation 
Run `yarn` & ensure you have nodemon installed globally

# Running 
Run `yarn run dev` - for nodemon to watch and create a live reload when working </br>
Run `yarn build` - to build the package with tsc and then compile to commonJS </br>
Run `yarn lint` - to run lint add `--fix` for auto fixing of linting </br>
Run `yarn test` - to run Jest </br>

# Includes
This package includes the following:
- Ping & healcheck routes
- Jest testing
- Linting
- Swagger connected to JSDocs for generated API Docs off comments 
- Babel configured to build to `/dist`
