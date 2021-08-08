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
	username varchar(255) not null,
	email varchar(255) not null,
	password text not null,
    profileType varchar(20) not null,
    profileName varchar(100) null,
    profileLocation varchar(200) null,
    profileBio varchar(3000) null,
    profilePhoto varchar(1000) null,
    popularity int null,
    tag1 varchar(50) null,
    tag2 varchar(50) null,
    tag3 varchar(50) null,
	_created datetime default current_timestamp
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

INSERT INTO Users (username, email, password, profileType) VALUES 
('Username1', "1@test.com", 'password1', 'venue'),
('Username2', "2@test.com",  'password2', 'artist'),
('Username3',"3@test.com", 'password3', 'artist');

INSERT INTO Users (username, email, password, profileType, profileName, profileBio, profileLocation, profilePhoto, popularity, tag1, tag2, tag3) VALUES 
('Username4', "4@test.com", 'password4', 'venue', 'Chris', 'it me', 'Birmingham', 'placeholder', 10, 'tag1', 'tag2', 'tag3'),
('Username5', "5@test.com",  'password5', 'artist', 'Connor','it me', 'Birmingham', 'placeholder', 20, 'tag1', 'tag2', 'tag3'),
('Username6',"6@test.com", 'password6', 'venue', 'Adam','it me', 'Birmingham', 'placeholder', 30, 'tag1', 'tag2', 'tag3'),
('Username7', "7@test.com", 'password4', 'venue', 'Chris', 'it me', 'Birmingham', 'placeholder', 10, 'tag1', 'tag2', 'tag3'),
('Username8', "8@test.com",  'password5', 'artist', 'Connor','it me', 'Birmingham', 'placeholder', 20, 'tag1', 'tag2', 'tag3'),
('Username9',"9@test.com", 'password6', 'venue', 'Adam','it me', 'Birmingham', 'placeholder', 30, 'tag1', 'tag2', 'tag3'),
('Username10', "10@test.com", 'password4', 'venue', 'Chris', 'it me', 'Birmingham', 'placeholder', 10, 'tag1', 'tag2', 'tag3'),
('Username11', "11@test.com",  'password5', 'artist', 'Connor','it me', 'Birmingham', 'placeholder', 20, 'tag1', 'tag2', 'tag3'),
('Username12',"12@test.com", 'password6', 'venue', 'Adam','it me', 'Birmingham', 'placeholder', 30, 'tag1', 'tag2', 'tag3');

INSERT INTO Posts (userid, title, text, locationEventName, dayEvent, timeEvent, dayPosted, timePosted, moneyAmount) VALUES
('1', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 07 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('2', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Fri Aug 20 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('3', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 19 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('4', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 03 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('5', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Thu Aug 19 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('6', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 19 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('7', "test post", 'pls ignore', 'BirminghamAlabama', 'Mon Aug 09 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('8', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Sat Aug 07 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('9', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Sat Aug 14 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('10', "test post", 'pls ignore', 'BirminghamAlabama', 'Wed Aug 18 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('11', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Mon Aug 09 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('4', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Fri Aug 13 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('6', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 07 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('5', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Fri Aug 20 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('4', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 19 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('6', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 07 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('5', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Thu Aug 19 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('7', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 04 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('12', "test post", 'pls ignore', 'BirminghamAlabama', 'Mon Aug 09 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('2', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Sat Aug 07 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('3', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Sat Aug 14 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('4', "test post", 'pls ignore', 'BirminghamAlabama', 'Wed Aug 18 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('8', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Mon Aug 09 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('9', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Fri Aug 13 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('1', "test post", 'pls ignore', 'BirminghamAlabama', 'Sun Sep 19 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('2', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Mon Sep 06 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('3', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Sat Sep 18 2021', '5pm', 'July 15th 2021', '3pm', '$30');

select * from users;

