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
('Username1', "email@test.com",  'password2', 'artist'),
('Username2', "email@test.com",  'password2', 'artist'),
('Username3', "email@test.com",  'chris', 'artist'),
('Username13',"email@test.com", 'donald', 'artist');

INSERT INTO Users (username, email, password, profileType, profileName, profileBio, profileLocation, profilePhoto, popularity, tag1, tag2, tag3) VALUES 
('Username4', "4@test.com", 'password4', 'venue', 'The Bluebird', 'it me', 'Birmingham', 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2020/02/denver-concert-venues-bluebird-theatre-1600x800-1.jpg', 10, 'Historic', 'Theater', 'Balconies'),
('Username5', "5@test.com",  'password5', 'artist', 'Kyle Schucks','it me', 'Birmingham', 'https://www.indiewire.com/wp-content/uploads/2015/11/ape.jpg?w=640', 20, 'Stand Up', 'Cynical', 'Dark'),
('Username6',"6@test.com", 'password6', 'venue', 'B&A Warehouse','it me', 'Birmingham', 'https://images-ext-2.discordapp.net/external/rMiOHlwaazm-okVPsJ_ypB-u0IUhKpx6eYMFf1MZygY/https/www.bawarehouse.com/wp-content/themes/bawarehouse/style/images/bkgd-grid-venues.jpg', 30, 'Weddings', 'Parties', 'Rentable'),
('Username7', "7@test.com", 'password4', 'venue', 'Avondale Brewery', 'it me', 'Birmingham', 'https://d2ftwog2ykfqwt.cloudfront.net/54e3e889688341b2a3b09353215aa494.jpg', 10, 'Brewery', 'Outdoor', 'Big Stage'),
('Username8', "8@test.com",  'password5', 'artist', 'Blue Man Group','it me', 'Birmingham', 'https://images-ext-2.discordapp.net/external/Y8sTFpgNP1bF6bEqwhd05GNVMhGEaRqaqktgO5TGm2k/https/attpac-website-assets.s3.amazonaws.com/assets/Image/6716-fitandcrop-660x365.jpg', 20, 'Performance', 'Comedy', 'Music'),
('Username9',"9@test.com", 'password6', 'venue', 'My House','it me', 'Birmingham', 'https://dynamicmoversnyc.com/wp-content/uploads/2018/11/house.jpg', 30, 'House Show', 'DJs', 'Indie'),
('Username10', "10@test.com", 'password4', 'artist', 'Little City', 'it me', 'Birmingham', 'https://liveon35mm.files.wordpress.com/2010/12/beachhouse12.jpg?w=584', 10, 'Bar', 'Underground', 'Punk'),
('Username11', "11@test.com",  'password5', 'artist', 'Travis Scott','it me', 'Birmingham', 'https://images-ext-1.discordapp.net/external/3bSjVYpL2Yas8UddKVm3hCr7hCUPgPi8AravKZiwpJU/%3Fresize%3D1800%2C1200%26w%3D1200/https/www.rollingstone.com/wp-content/uploads/2018/06/r1297_fea_travis-scott-opener-0326a443-8560-498c-be3e-98cb1002dec0.jpg?width=995&height=663', 20, 'Rapper', 'Hip Hop', 'Trap'),
('Username12',"12@test.com", 'password6', 'venue', 'Laugh Box','it me', 'Birmingham', 'https://www.traveller.com.au/content/dam/images/g/r/u/j/t/u/image.related.articleLeadwide.620x349.gruidq.png/1475822560714.jpg', 30, 'Live Comedy', 'Bar', 'Stand Up/Improv');



INSERT INTO Posts (userid, title, text, locationEventName, dayEvent, timeEvent, dayPosted, timePosted, moneyAmount) VALUES
('8', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 07 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('7', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Fri Aug 20 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('5', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 19 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('6', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 03 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('5', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Thu Aug 19 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('6', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 19 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('7', "test post", 'pls ignore', 'BirminghamAlabama', 'Mon Aug 09 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('8', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Sat Aug 07 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('9', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Sat Aug 14 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('10', "test post", 'pls ignore', 'BirminghamAlabama', 'Wed Aug 18 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('11', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Mon Aug 09 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('7', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Fri Aug 13 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('6', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 07 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('5', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Fri Aug 20 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('8', "Large Outdoor Bookings Available: Avondale Brewery", 'Bar crowd with the largest outdoor venue shared by small and large artists alike in the city of Birmingham. Booking and contact info in profile!', 'BirminghamAlabama', 'Tue Aug 31 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('6', "test post", 'pls ignore', 'BirminghamAlabama', 'Sat Aug 07 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('5', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Thu Aug 19 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('7', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Thu Aug 04 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('12', "test post", 'pls ignore', 'BirminghamAlabama', 'Mon Aug 09 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('2', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Sat Aug 07 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('3', "test post 3", 'pls ignore 3', 'BirminghamAlabama', 'Sat Aug 14 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('7', "test post", 'pls ignore', 'BirminghamAlabama', 'Wed Aug 18 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('8', "test post 2", 'pls ignore 2', 'NashvilleTennessee', 'Mon Aug 09 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('9', "Blue Man Group Comes Alive", 'Large venues preferred. All ages, no alcohol sales allowed.', 'BirminghamAlabama', 'Tue Aug 31 2021', '5pm', 'July 15th 2021', '3pm', '$30'),
('10', "test post", 'pls ignore', 'BirminghamAlabama', 'Sun Sep 19 2021', '7pm', 'July 10th 2021', '10am', '$125'),
('11', "New in Town Tour", 'Small/medium venues preferred, house shows for premium. Contact info for booking on profile.', 'BirminghamAlabama', 'Sun Aug 22 2021', '8pm', 'July 13th 2021', '9am', '$75'),
('12', "Wish You Were Here Tour", 'Large venues only. Booking: kate@astroworldtour.com', 'BirminghamAlabama', 'Sun Aug 22 2021', '5pm', 'July 15th 2021', '3pm', '$30');

select * from users

