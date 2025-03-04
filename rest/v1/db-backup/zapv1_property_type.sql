-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2025 at 08:58 AM
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
-- Table structure for table `zapv1_property_type`
--

CREATE TABLE `zapv1_property_type` (
  `property_type_aid` int(11) NOT NULL,
  `property_type_is_active` tinyint(1) NOT NULL,
  `property_type_name` varchar(200) NOT NULL,
  `property_type_description` text NOT NULL,
  `property_type_created` datetime NOT NULL,
  `property_type_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_property_type`
--

INSERT INTO `zapv1_property_type` (`property_type_aid`, `property_type_is_active`, `property_type_name`, `property_type_description`, `property_type_created`, `property_type_datetime`) VALUES
(1, 1, 'House', 'House with 4 bedrooms', '2025-03-04 07:55:51', '2025-03-04 08:48:48'),
(2, 1, 'Luxurious House and Lot', 'Private Swimming Pool', '2025-03-04 13:07:10', '2025-03-04 13:07:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  ADD PRIMARY KEY (`property_type_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  MODIFY `property_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
