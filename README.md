# pollate
Polling app made with Ruby on Rails

## v1

v1 uses erb for templating, it was mainly just to test relationships and be sure I have the correct commands.
In the end I moved on to React because I'm far more comfortable with MVC frontends, it helped me get past some blockers.

## v2

v2 is the same thing with the --api flag. I used React because it is fresh in my mind, I was able to mock up a frontend very quickly.

In retrospect, I think this complicated the project, I could have met the brief with erb. 

# Instructions

- Clone and ensure PostgreSQL is running in the background
- Navigate ```cd pollate-v2/client/pollate-frontend```
- Run ```yarn && yarn build``` to compile a production version
- Or open a new terminal tab ```yarn && yarn start``` for a development version
- Navigate back to the version route to run ```bundle```
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

Made forms for creating and updating polls, don't work properly.

**Emailed Marcus here**

Branching to continue working.
