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
-- Table structure for table `zapv1_header_contact_no`
--

CREATE TABLE `zapv1_header_contact_no` (
  `contact_no_aid` int(11) NOT NULL,
  `contact_no_contact` varchar(50) NOT NULL,
  `contact_no_created` datetime NOT NULL,
  `contact_no_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_contact_no`
--

INSERT INTO `zapv1_header_contact_no` (`contact_no_aid`, `contact_no_contact`, `contact_no_created`, `contact_no_datetime`) VALUES
(3, '+63 917 653 1919', '2025-03-03 12:07:49', '2025-03-03 12:07:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_header_contact_no`
--
ALTER TABLE `zapv1_header_contact_no`
  ADD PRIMARY KEY (`contact_no_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_header_contact_no`
--
ALTER TABLE `zapv1_header_contact_no`
  MODIFY `contact_no_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
