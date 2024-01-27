CREATE DATABASE horror_movie;

CREATE TABLE movie (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    genre VARCHAR(50))
    image_url VARCHAR (500);


INSERT INTO movie
VALUES 
const movies = [
  {
    id: 1,
    title: "The Exorcist",
    director: "William Friedkin",
    releaseYear: 1973,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/wBR4HXwR/Exorcist.jpg"
  },
  {
    id: 2,
    title: "The Texas Chain Saw Massacre",
    director: "Tobe Hooper",
    releaseYear: 1974,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/Pr6Sw3c8/Texas-Chainsaw-Massacre.jpg"
  },
  {
    id: 3,
    title: "Jaws",
    director: "Steven Spielberg",
    releaseYear: 1975,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/1RrC95rB/Jaws.jpg"
  },
  {
    id: 4,
    title: "Carrie",
    director: "Brian De Palma",
    releaseYear: 1976,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/3N1n9nxV/Carrie.jpg"
  },
  {
    id: 5,
    title: "Halloween",
    director: "John Carpenter",
    releaseYear: 1978,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/W3RW4dyW/Halloween.jpg"
  },
  {
    id: 6,
    title: "Alien",
    director: "Ridley Scott",
    releaseYear: 1979,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/pL6cgGJt/Alien.jpg"
  },
  {
    id: 7,
    title: "The Shining",
    director: "Stanley Kubrick",
    releaseYear: 1980,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/NfGNLqNc/The-Shining.jpg"
  },
  {
    id: 8,
    title: "Evil Dead",
    director: "Sam Raimi",
    releaseYear: 1981,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/C1jvnFTF/Evil-Dead.jpg"
  },
  {
    id: 9,
    title: "The Thing",
    director: "John Carpenter",
    releaseYear: 1982,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/CK879FKj/The-Thing.png"
  },
  {
    id: 10,
    title: "A Nightmare on Elm Street",
    director: "Wes Craven",
    releaseYear: 1984,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/FRQp42fw/The-Nightmare-On-Elm-Street.jpg"
  },
  {
    id: 15,
    title: "Hellraiser",
    director: "Clive Barker",
    releaseYear: 1987,
    genre: "Horror",
    imageUrl: "https://i.postimg.cc/Y0Md1JMQ/Hellraiser.webp"
  }
];

CREATE TABLE users (
    id int primary key NOT NULL AUTO_INCREMENT, firstname varchar(255) NOT NULL, lastname varchar(255) NOT NULL, email varchar(255) UNIQUE NOT NULL, password varchar(255) NOT NULL, is_admin BOOLEAN NULL DEFAULT false, secret_question varchar(255) DEFAULT NULL, secret_answer varchar(255) DEFAULT NULL
);
