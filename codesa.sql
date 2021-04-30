<<<<<<< HEAD
/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : codesa

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 29/04/2021 18:40:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol`  (
  `ID_ROL` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID_ROL`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES (1, 'ADMINISTRADOR');
INSERT INTO `rol` VALUES (2, 'AUDITOR');
INSERT INTO `rol` VALUES (3, 'AUXILIAR');

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `ID_ROL` int NOT NULL,
  `NOMBRE` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ACTIVO` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID_USUARIO`) USING BTREE,
  INDEX `ID_ROL`(`ID_ROL`) USING BTREE,
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`ID_ROL`) REFERENCES `rol` (`ID_ROL`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES (17, 1, 'asdsadsas', '1');
INSERT INTO `usuario` VALUES (18, 1, 'sdsd', '1');
INSERT INTO `usuario` VALUES (19, 1, 'asdsa', '1');
INSERT INTO `usuario` VALUES (20, 1, 'ryuza', '2');
INSERT INTO `usuario` VALUES (21, 1, 'Dai Ortiz', '1');
INSERT INTO `usuario` VALUES (24, 1, 'dsfdsfdsf', '1');
INSERT INTO `usuario` VALUES (25, 2, 'baxter', '2');
INSERT INTO `usuario` VALUES (26, 1, 'dsfdsfds', '1');
INSERT INTO `usuario` VALUES (27, 2, 'Dai Ortiz', '1');
INSERT INTO `usuario` VALUES (28, 1, 'baxter', '1');
INSERT INTO `usuario` VALUES (29, 3, 'jasda', '1');
INSERT INTO `usuario` VALUES (31, 1, 'Dai Ortiz', '1');

SET FOREIGN_KEY_CHECKS = 1;
=======
/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : codesa

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 29/04/2021 18:40:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol`  (
  `ID_ROL` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID_ROL`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES (1, 'ADMINISTRADOR');
INSERT INTO `rol` VALUES (2, 'AUDITOR');
INSERT INTO `rol` VALUES (3, 'AUXILIAR');

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `ID_ROL` int NOT NULL,
  `NOMBRE` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ACTIVO` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID_USUARIO`) USING BTREE,
  INDEX `ID_ROL`(`ID_ROL`) USING BTREE,
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`ID_ROL`) REFERENCES `rol` (`ID_ROL`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES (17, 1, 'asdsadsas', '1');
INSERT INTO `usuario` VALUES (18, 1, 'sdsd', '1');
INSERT INTO `usuario` VALUES (19, 1, 'asdsa', '1');
INSERT INTO `usuario` VALUES (20, 1, 'ryuza', '2');
INSERT INTO `usuario` VALUES (21, 1, 'Dai Ortiz', '1');
INSERT INTO `usuario` VALUES (24, 1, 'dsfdsfdsf', '1');
INSERT INTO `usuario` VALUES (25, 2, 'baxter', '2');
INSERT INTO `usuario` VALUES (26, 1, 'dsfdsfds', '1');
INSERT INTO `usuario` VALUES (27, 2, 'Dai Ortiz', '1');
INSERT INTO `usuario` VALUES (28, 1, 'baxter', '1');
INSERT INTO `usuario` VALUES (29, 3, 'jasda', '1');
INSERT INTO `usuario` VALUES (31, 1, 'Dai Ortiz', '1');

SET FOREIGN_KEY_CHECKS = 1;
>>>>>>> 6a4f9c0592a5a1362feca1b83ce101cf1dfb3381
