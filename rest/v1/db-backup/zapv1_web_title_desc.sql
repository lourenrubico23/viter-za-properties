-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2025 at 06:09 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter_za_properties`
--

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_web_title_desc`
--

CREATE TABLE `zapv1_web_title_desc` (
  `web_aid` int(11) NOT NULL,
  `web_title` varchar(50) NOT NULL,
  `web_description` varchar(200) NOT NULL,
  `web_created` datetime NOT NULL,
  `web_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_web_title_desc`
--

INSERT INTO `zapv1_web_title_desc` (`web_aid`, `web_title`, `web_description`, `web_created`, `web_datetime`) VALUES
(1, 'ZA Properties', 'Zac Alfanta – Your Trusted Real Estate Broker for Premium Residential & Commercial Properties.', '0000-00-00 00:00:00', '2025-05-05 12:07:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_web_title_desc`
--
ALTER TABLE `zapv1_web_title_desc`
  ADD PRIMARY KEY (`web_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_web_title_desc`
--
ALTER TABLE `zapv1_web_title_desc`
  MODIFY `web_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
