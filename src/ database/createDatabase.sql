CREATE DATABASE IF NOT EXISTS cartoon;
USE cartoon;
CREATE TABLE `Casts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `Characters` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `Cast_Characters` (
    `cast_id` int DEFAULT NULL,
    `character_id` int DEFAULT NULL,
    KEY `cast_id` (`cast_id`),
    KEY `character_id` (`character_id`),
    CONSTRAINT `Cast_Characters_ibfk_1` FOREIGN KEY (`cast_id`) REFERENCES `Casts` (`id`),
    CONSTRAINT `Cast_Characters_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `Characters` (`id`)
);
INSERT INTO Characters (id, name) VALUES 
(1, 'Homer Simpson'),
(2, 'Marge Simpson'),
(3, 'Bart Simpson'),
(4, 'Lisa Simpson'),
(5, 'Maggie Simpson');

INSERT INTO Casts (id, name) VALUES 
(1, 'Dan Castellaneta'),
(2, 'Julie Kavner'),
(3, 'Nancy Cartwright'),
(4, 'Yeardley Smith'),
(5, 'Hank Azaria'),
(6, 'Harry Shearer');

INSERT INTO Cast_Characters (cast_id, character_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1);