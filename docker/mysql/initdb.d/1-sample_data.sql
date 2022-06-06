USE js-sandbox;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(3) NOT NULL,
  `free` varchar(40),
  `registered_at` date NOT NULL,
  PRIMARY KEY  (`id`)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` VALUES (1,'superman',40,'hero','2012-06-06');
INSERT INTO `users` (`name`,`age`,`registered_at`) VALUES 
('takeshi_1',  22, '2017-02-02'),
('takeshi_2',  55, '2017-02-02'),
('takeshi_3',  76, '2017-02-17'),
('takeshi_4',   2, '2017-02-17'),
('takeshi_5',  22, '2017-11-17'),
('takeshi_6',  18, '2018-11-17'),
('takeshi_7',  22, '2019-11-02'),
('takeshi_8', 111, '2020-11-02'),
('horoshi_0',  38, '2021-02-02');