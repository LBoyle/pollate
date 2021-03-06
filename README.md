# pollate
Polling app made with Ruby on Rails

It did deploy it to Heroku, but I haven't set up postgres permissions for Heroku yet.

## v1

I made a v1 with erb for templating, it was mainly just to test relationships and be sure I have the correct commands.
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

**Continuation Sunday 28th**

Struggled for a little while with poll_params in the poll controller, figured some cool things out like permitting an array of objects.

Ultimately worked with the rails console and figured out how to delete relationships properly instead of sending a PUT with an updated list.

Fixed the route for adding a user to a poll, added select field on edit page, can use this form for new I think as well

It doesn't prevent duplicates as it is, so it freaks out when there are duplicate users added to a poll

Now added create poll page, just with title, you would then go and edit the new poll to add users

Added email to User and creator to Poll, now must select a creator when making a poll

Create user page, tried getting polls this user has created but couldn't figure it out

Prevented defaults for forms

**Monday 29th morning**

Added skeleton.css and styled it up just a little bit

Edit users page

Spend some time making sure AJAX was all correct, redirecting or updating state
