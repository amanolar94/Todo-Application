CREATE DATABASE IF NOT EXISTS todoapp;
ALTER DATABASE todoapp DEFAULT CHARACTER SET UTF8 DEFAULT COLLATE UTF8_GENERAL_CI;
USE todoapp;

CREATE TABLE IF NOT EXISTS `todolist` (
	id SMALLINT NOT NULL AUTO_INCREMENT ,
	description VARCHAR(500) NOT NULL,
	completed TINYINT(1) DEFAULT 0,
	PRIMARY KEY (`id`)
);

INSERT INTO todolist ( description ) VALUES ( 'Study for the exam' );
INSERT INTO todolist ( description ) VALUES ( 'Go grocery shopping' );
INSERT INTO todolist ( description ) VALUES ( 'Get a haircut' );
INSERT INTO todolist ( description ) VALUES ( 'Feed the dogs' );