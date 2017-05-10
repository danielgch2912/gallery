
insert into album values(null, 'ushuaia', 'Ushuaia', 'Ushuaia travel in 2014', 
'This is an album about my travel to Ushuaia, Argentina in 2014');

insert into album values(null, 'chiang-mai', 'Chiang Mai', 'Chiang Mai travel in 2016', 
'This is an album about my travel to Chiang Mai, Thailand in 2016');

insert into picture(album_id, url_code, title, url) values
((select id from album where url_code='ushuaia'),
'ushuaia-1',
'Ushuaia 1',
'files/ushuaia/1.jpg'
),
((select id from album where url_code='ushuaia'),
'ushuaia-2',
'Ushuaia 2',
'files/ushuaia/2.jpg'
),
((select id from album where url_code='ushuaia'),
'ushuaia-3',
'Ushuaia 3',
'files/ushuaia/3.jpg'
),
((select id from album where url_code='ushuaia'),
'ushuaia-4',
'Ushuaia 4',
'files/ushuaia/4.jpg'
),
((select id from album where url_code='ushuaia'),
'ushuaia-5',
'Ushuaia 5',
'files/ushuaia/5.jpg'
);