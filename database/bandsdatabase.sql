create database BandsDatabase;

use BandsDatabase;

create table Locations (
	id int not null auto_increment primary key,
    name varchar(200) not null,
    _created datetime default current_timestamp
);

drop table if exists Users;

create table Users (
	id int not null auto_increment primary key,
	name varchar(255) not null,
	email varchar(255) not null,
	password text not null,
    locationUserid int null,
    profileBio varchar(3000) null,
    profileType varchar(20) not null,
    profilePhoto varchar(1000) null,
    popularity int null,
    tag1 varchar(50) null,
    tag2 varchar(50) null,
    tag3 varchar(50) null,
	_created datetime default current_timestamp,
    foreign key (locationUserid) references Locations(id)
);

drop table if exists Posts;

create table Posts (
	id int not null auto_increment primary key,
    title varchar(500) not null,
    text varchar(1000) not null,
    dayEvent varchar(100) not null,
    timeEvent varchar(100) not null,
    locationEventName varchar(200) not null,
    dayPosted varchar(100) not null,
    timePosted varchar(100) not null,
    moneyAmount varchar(10) not null,
    userid int not null,
    _created datetime default current_timestamp,
    foreign key (userid) references Users(id)
);

create user 'guest'@'localhost'
identified with mysql_native_password
by 'guest';

GRANT ALL PRIVILEGES ON bandsdatabase.* TO 'guest'@'localhost';

INSERT INTO Users (name, email, password, profileType) VALUES 
('Username1', "1@test.com", 'password1', 'venue'),
('Username2', "2@test.com",  'password2', 'artist'),
('Username3',"3@test.com", 'password3', 'artist');


