CREATE DATABASE colombianSongs;

USE colombianSongs;

CREATE TABLE `colombiansongs`.`favoriteSongs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `year` MEDIUMINT NOT NULL,
  `genre` VARCHAR(200) NOT NULL,
  `comments` TEXT(1000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);