const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    name: 'Trisha',
    email: 't@t.com',
    age: 24,
    password: 't',
    passwordConfirmation: 't',
    gender: 'Female',
    seeking: 'Women',
    bio: 'I like long walks in the woods and cocktails',
    Interests: ['cats', 'film', 'space'],
    image: 'https://orig00.deviantart.net/b893/f/2011/227/f/6/profile_picture_by_aehireiel_stock-d46o5ls.jpg'
  },{
    name: 'Ned',
    age: 27,
    email: 'n@n.com',
    password: 'n',
    passwordConfirmation: 'n',
    gender: 'Male',
    seeking: 'Men',
    bio: 'I enjoy writing and I am currently learning to code html',
    Interests: ['dogs', 'film', 'space'],
    image: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_74/picture_17112016100959.jpg'
  },{
    name: 'Sandy',
    age: 21,
    email: 's@s.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Female',
    seeking: 'Men',
    bio: 'I enjoy listening to music and I am currently learning to make baskets',
    Interests: ['cats', 'books', 'sea'],
    image: 'http://bestprofilepix.com/wp-content/uploads/2014/03/beautiful-indian-girl-profile-photo.jpg'
  },{
    name: 'Luke',
    age: 34,
    email: 'l@l.com',
    password: 'l',
    passwordConfirmation: 'l',
    gender: 'Male',
    seeking: 'Women',
    bio: 'I enjoy comic books and I am currently learning to cook japanese food',
    Interests: ['cats', 'film', 'space'],
    image: 'https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_9/picture_2405201614728.jpg'
  },{
    name: 'Amanda',
    age: 37,
    email: 'a@a.com',
    password: 'a',
    passwordConfirmation: 'a',
    gender: 'Transgender',
    seeking: 'Men',
    bio: 'I enjoy cooking and I am currently learning MMA',
    Interests: ['dogs', 'books', 'sea'],
    image: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&h=350'
  }])
    .then(users => console.log(`${users.length} created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
