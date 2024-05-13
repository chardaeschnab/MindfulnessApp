--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists videos;
SET foreign_key_checks = 1;

--
-- Create Tables
--
/*when we export sql code we can copy it here*/

CREATE TABLE `Videos`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `link` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL
);

INSERT INTO videos (link, description, category) VALUES ("test", "test", "test");