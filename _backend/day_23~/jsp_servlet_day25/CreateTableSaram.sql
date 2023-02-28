create table saram(
seq bigint not null primary key auto_increment,
id varchar2(20) not null,
name varchar2(20),
age int
);

insert into saram( id, name, age) values('PARK', '박', 23);
insert into saram(id, name, age) values('KIM', '김', 23);
insert into saram( id, name, age) values('LEE', '이', 23);

select * from saram
select * from saram where seq = 2;

--트랜잭션(commit, rollback)
commit;

update saram set name = '권', age = 90 where seq = 1;

delete from saram where seq = 2;