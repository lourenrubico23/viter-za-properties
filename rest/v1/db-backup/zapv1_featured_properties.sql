-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2025 at 07:44 AM
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
-- Table structure for table `zapv1_featured_properties`
--

CREATE TABLE `zapv1_featured_properties` (
  `featured_properties_aid` int(11) NOT NULL,
  `featured_properties_property_id` varchar(20) NOT NULL,
  `featured_properties_property_name` varchar(100) NOT NULL,
  `featured_properties_is_active` tinyint(1) NOT NULL,
  `featured_properties_created` datetime NOT NULL,
  `featured_properties_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_featured_properties`
--

INSERT INTO `zapv1_featured_properties` (`featured_properties_aid`, `featured_properties_property_id`, `featured_properties_property_name`, `featured_properties_is_active`, `featured_properties_created`, `featured_properties_datetime`) VALUES
(1, '17', 'Test Properties', 1, '2025-04-25 12:45:57', '2025-04-25 12:45:57'),
(2, '11', 'Prime Southwoods Commercial Lot', 1, '2025-04-25 12:57:10', '2025-04-25 13:03:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_featured_properties`
--
ALTER TABLE `zapv1_featured_properties`
  ADD PRIMARY KEY (`featured_properties_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_featured_properties`
--
ALTER TABLE `zapv1_featured_properties`
  MODIFY `featured_properties_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
