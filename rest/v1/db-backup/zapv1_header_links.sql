-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2025 at 08:51 AM
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
  `links_facebook_link` text NOT NULL,
  `links_facebook_title` varchar(100) NOT NULL,
  `links_instagram_link` text NOT NULL,
  `links_instagram_title` varchar(100) NOT NULL,
  `links_message_link` text NOT NULL,
  `links_message_title` varchar(100) NOT NULL,
  `links_contact` varchar(100) NOT NULL,
  `links_created` datetime NOT NULL,
  `links_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_links`
--

INSERT INTO `zapv1_header_links` (`links_aid`, `links_facebook_link`, `links_facebook_title`, `links_instagram_link`, `links_instagram_title`, `links_message_link`, `links_message_title`, `links_contact`, `links_created`, `links_datetime`) VALUES
(9, 'https://www.facebook.com/ZacAlfantaJr/', 'Like us on Facebook', 'https://www.instagram.com/zapropertiesph/', 'Follow us on Instagram', '', 'Message Us', '+63 917 653 1919', '2025-03-17 15:04:45', '2025-03-17 15:27:05');

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
  MODIFY `links_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
