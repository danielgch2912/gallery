drop table if exists album;

create table album (
	code varchar(11) not null,
	url_code varchar(100) not null,
	name varchar(100) not null,
	summary text,
	description_text text,

	primary key pk_album(code)
);