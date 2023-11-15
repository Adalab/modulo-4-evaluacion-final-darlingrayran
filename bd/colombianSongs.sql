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
  
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('waka waka (This Time for Africa','shakira','2010','POP','Premios: NRJ Music Award a la Canción Internacional del Año, Billboard Music Award a la Mejor Canción Latina');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('fotografia','juanes','2002','Rock en español','Album: un dia normal, con Nelly Furtado');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('caballito','carlos vives','1997','pop','Album: Tengo fe');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('hawai','maluma','2020','reggaeton','Nominaciones: MTV Video Music Award al Mejor Video Latino');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('provenza','karolG','2022','reggaeton','Nominaciones: American Music Award a la Canción Latina Favorita');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('no voy a morir','pipe Bueno','2008','musica popular','otros generos:Cumbia,pop');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('osito dormilon','Jean Carlo Centeno','2016','Vallenato','otro artista Ronal Urbina');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('cuatro rosas','Jorge Celedon','2004','vallenato','album:!juepa je!');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('la vida es un carnaval','Celia Cruz','1998','salsa','expresion favorita:!azucar!');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('arroyito','Fonseca','2008','pop','album: Gratitud');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('baracunatana','aterciopelados','1996','rock en español','album: la pipa de la paz');
  INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('salud por el','Paola Jara','2020','ranchera', 'album: prohibido');
INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES ('salud por el','Paola Jara','2020','ranchera', 'album: prohibido');
  