drop table if exists picture;
drop table if exists album;

create table album (
	id int(11) not null auto_increment,
	url_code varchar(100) not null,
	name varchar(100) not null,
	summary text,
	description_text text,

	primary key pk_album(id),
    unique(url_code)
);

create table picture (
	id int(11) not null auto_increment,
    album_id int(11) not null,
    url_code varchar(100) not null,
    title varchar(100) not null,
    url varchar(255) not null,
    
    constraint fk_picture_album foreign key (album_id) references album(id),
    primary key pk_picure(id),
    unique(url_code)
);
