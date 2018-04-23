-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: torneotenismesa
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estructura`
--

DROP TABLE IF EXISTS `estructura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estructura` (
  `idEstructura` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idEstructura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estructura`
--

LOCK TABLES `estructura` WRITE;
/*!40000 ALTER TABLE `estructura` DISABLE KEYS */;
INSERT INTO `estructura` VALUES (1,'Arbol'),(2,'Cuadros');
/*!40000 ALTER TABLE `estructura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'admin','Administradores'),(2,'arbitro','Arbitros'),(3,'jugador','Jugadores');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keys`
--

DROP TABLE IF EXISTS `keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `key` varchar(40) NOT NULL,
  `level` int(2) NOT NULL,
  `ignore_limits` tinyint(1) NOT NULL DEFAULT '0',
  `is_private_key` tinyint(1) NOT NULL DEFAULT '0',
  `ip_addresses` text,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keys`
--

LOCK TABLES `keys` WRITE;
/*!40000 ALTER TABLE `keys` DISABLE KEYS */;
INSERT INTO `keys` VALUES (1,1,'AAA',1,0,0,NULL,'2018-03-30 05:19:55');
/*!40000 ALTER TABLE `keys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_attempts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(45) NOT NULL,
  `login` varchar(100) NOT NULL,
  `time` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
INSERT INTO `login_attempts` VALUES (16,'127.0.0.1','fredy1',1524442540);
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partido`
--

DROP TABLE IF EXISTS `partido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partido` (
  `idPartido` int(11) NOT NULL AUTO_INCREMENT,
  `fechaHora` datetime NOT NULL,
  `idTorneo` int(11) NOT NULL,
  `idPartidoTorneo` int(11) NOT NULL,
  PRIMARY KEY (`idPartido`),
  KEY `fkPartidoTorneo_idx` (`idTorneo`),
  CONSTRAINT `fkPartidoTorneo` FOREIGN KEY (`idTorneo`) REFERENCES `torneo` (`idTorneo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partido`
--

LOCK TABLES `partido` WRITE;
/*!40000 ALTER TABLE `partido` DISABLE KEYS */;
INSERT INTO `partido` VALUES (52,'2017-05-22 11:17:00',41,1),(53,'2017-05-22 11:47:00',41,2),(54,'2017-05-22 12:17:00',41,3),(55,'2017-05-22 12:47:00',41,4),(56,'2017-05-22 01:17:00',41,5),(57,'2017-05-22 01:47:00',41,6),(58,'2017-05-22 02:17:00',41,7),(59,'2017-05-22 11:23:00',42,1),(60,'2017-05-22 11:53:00',42,2),(61,'2017-05-22 12:23:00',42,3),(62,'2017-05-22 12:53:00',42,4),(63,'2017-05-22 01:23:00',42,5),(64,'2017-05-22 01:53:00',42,6),(65,'2017-05-22 02:23:00',42,7),(66,'2017-05-22 11:35:00',43,1),(67,'2017-05-22 12:05:00',43,2),(68,'2017-05-22 12:35:00',43,3),(69,'2017-05-22 01:05:00',43,4),(70,'2017-05-22 01:35:00',43,5),(71,'2017-05-22 02:05:00',43,6),(72,'2017-05-22 02:35:00',43,7),(73,'2018-02-26 07:27:00',44,1),(74,'2018-02-26 07:57:00',44,2),(75,'2018-02-26 08:27:00',44,3),(76,'2018-02-26 08:57:00',44,4),(77,'2018-02-26 09:27:00',44,5),(78,'2018-02-26 09:57:00',44,6),(79,'2018-02-26 10:27:00',44,7);
/*!40000 ALTER TABLE `partido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torneo`
--

DROP TABLE IF EXISTS `torneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `torneo` (
  `idTorneo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `idEstructura` int(11) NOT NULL,
  `cantidadJugadores` int(11) NOT NULL,
  `cantidadMesas` int(11) DEFAULT NULL,
  PRIMARY KEY (`idTorneo`),
  KEY `fkEstructuraTorneo_idx` (`idEstructura`),
  CONSTRAINT `fkEstructuraTorneo` FOREIGN KEY (`idEstructura`) REFERENCES `estructura` (`idEstructura`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneo`
--

LOCK TABLES `torneo` WRITE;
/*!40000 ALTER TABLE `torneo` DISABLE KEYS */;
INSERT INTO `torneo` VALUES (41,'prueba 1',1,8,1),(42,'prueba 2',1,8,1),(43,'prueba 3',1,8,1),(44,'torneo 1',1,8,1),(45,'torneo 123',1,16,1),(46,'torneo 123',1,16,1),(49,'test1',1,8,1),(50,'test1',1,8,1),(51,'test1',1,8,1),(52,'test1',1,8,1);
/*!40000 ALTER TABLE `torneo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_groups`
--

DROP TABLE IF EXISTS `users_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` int(10) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_groups_users1_idx` (`usuario_id`),
  KEY `fk_users_groups_groups1_idx` (`group_id`),
  CONSTRAINT `fk_users_groups_groups1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_groups`
--

LOCK TABLES `users_groups` WRITE;
/*!40000 ALTER TABLE `users_groups` DISABLE KEYS */;
INSERT INTO `users_groups` VALUES (1,1,1),(2,0,1),(3,1,1),(4,2,3),(5,4,3),(6,5,3),(7,6,3),(8,7,3);
/*!40000 ALTER TABLE `users_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) NOT NULL,
  `apellido` varchar(64) NOT NULL,
  `cedula` varchar(45) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tipo` enum('Administrador','Jugador','Arbitro','Apostador') NOT NULL,
  `telefono` varchar(64) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `forgotten_password_time` int(10) unsigned DEFAULT NULL,
  `remember_code` varchar(40) DEFAULT NULL,
  `created_on` int(10) unsigned DEFAULT NULL,
  `last_login` int(10) unsigned DEFAULT NULL,
  `active` tinyint(1) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombreUsuario_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Fredy','Aunta','123456',1,'fredy1','$2y$08$oAeHOiH3EcqsFUMnNKF4Z.xZgSdgmeMWLnDpJBW55i4pPxHfYdKDi','Administrador','1234567','1944-03-03','127.0.0.1',NULL,'fredy@test.com',NULL,NULL,NULL,NULL,1523823916,1524304391,1),(2,'Fredy','Aunta','fredy0394',0,'fredy0394','$2y$08$UvGeoXtKZ5ikiuq9VuFwXOpNL6jS0mdJ4rFlR6L5TUlGvN.uNI8hi','Administrador','7766183','1994-03-03','127.0.0.1',NULL,NULL,NULL,NULL,NULL,NULL,1523826587,NULL,1),(4,'Admin','Admin','admin',1,'admin','$2y$08$GSBEXhnE9Z5m6jWrFqTWEuMmM3dXYesgyEDMfgAL11unbx4yI6KtC','Administrador','1234567','1994-03-03','127.0.0.1',NULL,NULL,NULL,NULL,NULL,NULL,1524417719,1524426359,1),(5,'jhbnjh','bnjhbjh','fredy3',0,'fredy3','$2y$08$Nw3/iVByJ7ijvstwWAqNpe30NQuxuXdGo2U6uas.aPJ5uKQbbq8La','Jugador','bjhb','1994-03-03','127.0.0.1',NULL,NULL,NULL,NULL,NULL,NULL,1524443432,NULL,1),(6,'ygvbgh','vbghvbgh','fredy4',0,'fredy4','$2y$08$tTjMeuKl.TIP0B74fcioV.HpAEFaubZwrVTWOBdIg1dMuS9UOQjnG','Administrador','jgbjhb','2000-03-03','127.0.0.1',NULL,NULL,NULL,NULL,NULL,NULL,1524444157,NULL,1),(7,'Arbitro','Arbitro','arbitro',0,'arbitro','$2y$08$EbNZLPmndz6meIxjfMmtBOpDsObiJJZEB.3BIiWNTGtWFivRfcnGy','Arbitro','Arbitro','1944-03-03','127.0.0.1',NULL,NULL,NULL,NULL,NULL,NULL,1524448162,NULL,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariopartido`
--

DROP TABLE IF EXISTS `usuariopartido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariopartido` (
  `idUsuarioPartido` int(11) NOT NULL AUTO_INCREMENT,
  `idPartido` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `resultado` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsuarioPartido`),
  KEY `fk_Partido_has_Usuario_Partido1_idx` (`idPartido`),
  CONSTRAINT `fk_Partido_has_Usuario_Partido1` FOREIGN KEY (`idPartido`) REFERENCES `partido` (`idPartido`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariopartido`
--

LOCK TABLES `usuariopartido` WRITE;
/*!40000 ALTER TABLE `usuariopartido` DISABLE KEYS */;
INSERT INTO `usuariopartido` VALUES (1,52,32,NULL),(2,52,30,NULL),(3,52,29,NULL),(4,53,29,NULL),(5,53,28,NULL),(6,53,28,NULL),(7,54,27,NULL),(8,54,26,NULL),(9,54,28,NULL),(10,55,25,NULL),(11,55,24,NULL),(12,55,30,NULL),(13,56,0,NULL),(14,56,0,NULL),(15,56,32,NULL),(16,57,0,NULL),(17,57,0,NULL),(18,57,27,NULL),(19,58,0,NULL),(20,58,0,NULL),(21,58,32,NULL),(22,59,32,NULL),(23,59,30,NULL),(24,59,29,NULL),(25,60,29,NULL),(26,60,28,NULL),(27,60,32,NULL),(28,61,27,NULL),(29,61,26,NULL),(30,61,28,NULL),(31,62,25,NULL),(32,62,24,NULL),(33,62,27,NULL),(34,63,0,NULL),(35,63,0,NULL),(36,63,29,NULL),(37,64,0,NULL),(38,64,0,NULL),(39,64,24,NULL),(40,65,0,NULL),(41,65,0,NULL),(42,65,29,NULL),(43,66,32,NULL),(44,66,30,NULL),(45,66,31,NULL),(46,67,29,NULL),(47,67,28,NULL),(48,67,31,NULL),(49,68,27,NULL),(50,68,26,NULL),(51,68,31,NULL),(52,69,5,NULL),(53,69,5,NULL),(54,69,7,NULL),(55,70,0,NULL),(56,70,0,NULL),(57,70,7,NULL),(58,71,0,NULL),(59,71,0,NULL),(60,71,31,NULL),(61,72,0,NULL),(62,72,0,NULL),(63,72,31,NULL),(64,73,32,NULL),(65,73,30,NULL),(66,73,31,NULL),(67,74,29,NULL),(68,74,28,NULL),(69,74,31,NULL),(70,75,27,NULL),(71,75,26,NULL),(72,75,31,NULL),(73,76,25,NULL),(74,76,24,NULL),(75,76,31,NULL),(76,77,0,NULL),(77,77,0,NULL),(78,77,31,NULL),(79,78,0,NULL),(80,78,0,NULL),(81,78,31,NULL),(82,79,0,NULL),(83,79,0,NULL),(84,79,31,NULL);
/*!40000 ALTER TABLE `usuariopartido` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-23 11:38:23
