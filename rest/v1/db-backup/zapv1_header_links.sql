-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2025 at 08:54 AM
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
-- Table structure for table `zapv1_header_links`
--

CREATE TABLE `zapv1_header_links` (
  `links_aid` int(11) NOT NULL,
  `links_icons` varchar(100) NOT NULL,
  `links_title` varchar(100) NOT NULL,
  `links_link` text NOT NULL,
  `links_created` datetime NOT NULL,
  `links_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_links`
--

INSERT INTO `zapv1_header_links` (`links_aid`, `links_icons`, `links_title`, `links_link`, `links_created`, `links_datetime`) VALUES
(4, 'FaFacebookF', 'Like us on Facebook', 'https://www.facebook.com/ZacAlfantaJr/', '2025-03-03 10:20:27', '2025-03-03 10:20:27'),
(5, 'FaInstagram', 'Follow us on Instagram', 'https://www.instagram.com/zapropertiesph/', '2025-03-03 10:21:09', '2025-03-03 10:21:09'),
(8, 'FaRegEnvelope', 'Message Us', '', '2025-03-03 13:55:53', '2025-03-03 13:55:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_header_links`
--
ALTER TABLE `zapv1_header_links`
  ADD PRIMARY KEY (`links_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_header_links`
--
ALTER TABLE `zapv1_header_links`
  MODIFY `links_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
