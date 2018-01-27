# pollate
Polling app made with Ruby on Rails

# Instructions

- Clone and ensure PostgreSQL is running in the background
- Navigate ```cd client/pollate-frontend```
- Run ```yarn && yarn build``` to compile a production version
- Or open a new terminal tab ```yarn && yarn start``` for a development version
- Navigate back to the project route to run ```bundle```
- Run ```rails db:drop db:create db:migrate db:seed```
- Then finally run ```rails s``` to start the api server


# Development chronology

**Friday 26th**

Planned on paper, drew an ERD, set up Rails again on my new machine.


**Saturday 27th**

Looking through old Rails projects to remember how to do it

Generate new project using postgres and erb ```rails new pollate --database=postgres```

Adding serializers before generating scaffolds, must run ```bundle```

Generating scaffolds for User and Poll, also join table between them

Adding relationships to models and serializers

Working on templating to display relationships

**Made v2**

v2 is an api with a React frontend

Used create-react-app, ran eject to change build location to Rails public folder

Building out components, performing requests with axios
