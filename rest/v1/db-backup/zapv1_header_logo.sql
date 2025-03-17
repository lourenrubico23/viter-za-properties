-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2025 at 03:03 PM
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
-- Table structure for table `zapv1_header_logo`
--

CREATE TABLE `zapv1_header_logo` (
  `logo_aid` int(11) NOT NULL,
  `logo_image` text NOT NULL,
  `logo_name` varchar(100) NOT NULL,
  `logo_position` varchar(100) NOT NULL,
  `logo_nav_a` varchar(50) NOT NULL,
  `logo_nav_b` varchar(50) NOT NULL,
  `logo_nav_c` varchar(50) NOT NULL,
  `logo_nav_d` varchar(50) NOT NULL,
  `logo_nav_e` varchar(50) NOT NULL,
  `logo_nav_f` varchar(50) NOT NULL,
  `logo_created` datetime NOT NULL,
  `logo_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_logo`
--

INSERT INTO `zapv1_header_logo` (`logo_aid`, `logo_image`, `logo_name`, `logo_position`, `logo_nav_a`, `logo_nav_b`, `logo_nav_c`, `logo_nav_d`, `logo_nav_e`, `logo_nav_f`, `logo_created`, `logo_datetime`) VALUES
(2, '', 'Zac Alfanta', 'Real State Broker', 'Home', 'Properties', 'Buyers', 'Sellers', 'Blogs', 'Contact', '2025-03-03 13:57:16', '2025-03-17 20:51:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_header_logo`
--
ALTER TABLE `zapv1_header_logo`
  ADD PRIMARY KEY (`logo_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_header_logo`
--
ALTER TABLE `zapv1_header_logo`
  MODIFY `logo_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
