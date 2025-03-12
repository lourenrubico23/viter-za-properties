-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2025 at 07:22 AM
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
-- Table structure for table `zapv1_property_status`
--

CREATE TABLE `zapv1_property_status` (
  `property_status_aid` int(11) NOT NULL,
  `property_status_is_active` tinyint(1) NOT NULL,
  `property_status_name` varchar(200) NOT NULL,
  `property_status_description` text NOT NULL,
  `property_status_created` datetime NOT NULL,
  `property_status_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_property_status`
--

INSERT INTO `zapv1_property_status` (`property_status_aid`, `property_status_is_active`, `property_status_name`, `property_status_description`, `property_status_created`, `property_status_datetime`) VALUES
(1, 0, 'dasda reeter', 'asdasd rrrrrr', '2025-03-12 13:02:13', '2025-03-12 13:17:53'),
(2, 1, 'Available', '', '2025-03-12 13:05:41', '2025-03-12 13:05:41'),
(3, 1, 'Building for Lease', '', '2025-03-12 13:05:59', '2025-03-12 13:05:59'),
(4, 1, 'Building for Sale', '', '2025-03-12 13:06:08', '2025-03-12 13:06:08'),
(5, 1, 'Commercial for Lease', '', '2025-03-12 13:06:22', '2025-03-12 13:06:22'),
(6, 1, 'Commercial for Sale', '', '2025-03-12 13:06:36', '2025-03-12 13:06:36'),
(7, 1, 'Condominium for Lease', '', '2025-03-12 13:06:59', '2025-03-12 13:06:59'),
(8, 1, 'Condominium for Sale', '', '2025-03-12 13:07:18', '2025-03-12 13:07:18'),
(9, 1, 'Farm for Sale', '', '2025-03-12 13:07:31', '2025-03-12 13:07:31'),
(10, 1, 'For Sale', '', '2025-03-12 13:07:39', '2025-03-12 13:07:39'),
(11, 1, 'For Rent', '', '2025-03-12 13:07:50', '2025-03-12 13:07:50'),
(12, 1, 'House for Lease', '', '2025-03-12 13:08:01', '2025-03-12 13:08:01'),
(13, 1, 'House for Sale', '', '2025-03-12 13:08:07', '2025-03-12 13:08:07'),
(14, 1, 'Lease Out', '', '2025-03-12 13:08:17', '2025-03-12 13:08:17'),
(15, 1, 'Reserved', '', '2025-03-12 13:08:24', '2025-03-12 13:08:24'),
(16, 1, 'Sold', '', '2025-03-12 13:08:31', '2025-03-12 13:08:31'),
(17, 1, 'Vacant Lot for Sale', '', '2025-03-12 13:08:50', '2025-03-12 13:08:55'),
(18, 1, 'Vacant Lot for Lease', '', '2025-03-12 13:09:09', '2025-03-12 13:09:09'),
(19, 1, 'Warehouse for Lease', '', '2025-03-12 13:09:21', '2025-03-12 13:09:21'),
(20, 1, 'Warehouse for Sale', '', '2025-03-12 13:09:31', '2025-03-12 13:09:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_property_status`
--
ALTER TABLE `zapv1_property_status`
  ADD PRIMARY KEY (`property_status_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_property_status`
--
ALTER TABLE `zapv1_property_status`
  MODIFY `property_status_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
