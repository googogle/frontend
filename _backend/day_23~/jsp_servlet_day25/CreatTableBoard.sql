create table if NOT EXISTS BOARD(
seq bigint not NULL primary key auto_increment,
title varchar2(50) not NULL,
content varchar2(512),
writedate DATE,
writer varchar2(20),
cnt bigint
);

insert into board(title, content, writedate, writer, cnt) values('test content','test',NOW(),'user1',0);

select * from board;

COMMIT;