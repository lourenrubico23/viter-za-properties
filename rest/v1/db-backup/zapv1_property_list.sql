-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2025 at 09:02 AM
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
-- Table structure for table `zapv1_property_list`
--

CREATE TABLE `zapv1_property_list` (
  `list_aid` int(11) NOT NULL,
  `list_is_active` tinyint(1) NOT NULL,
  `list_name` text NOT NULL,
  `list_price` varchar(100) NOT NULL,
  `list_location` text NOT NULL,
  `list_property_type_id` varchar(50) NOT NULL,
  `list_property_type_name` text NOT NULL,
  `list_property_status_id` varchar(20) NOT NULL,
  `list_property_status_name` varchar(200) NOT NULL,
  `list_id` varchar(100) NOT NULL,
  `list_floor_area` varchar(100) NOT NULL,
  `list_lot_area` varchar(100) NOT NULL,
  `list_bedrooms` varchar(50) NOT NULL,
  `list_bathrooms` varchar(50) NOT NULL,
  `list_carport` varchar(50) NOT NULL,
  `list_key_features` text NOT NULL,
  `list_best_buy` text NOT NULL,
  `list_img` text NOT NULL,
  `list_created` datetime NOT NULL,
  `list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_property_list`
--

INSERT INTO `zapv1_property_list` (`list_aid`, `list_is_active`, `list_name`, `list_price`, `list_location`, `list_property_type_id`, `list_property_type_name`, `list_property_status_id`, `list_property_status_name`, `list_id`, `list_floor_area`, `list_lot_area`, `list_bedrooms`, `list_bathrooms`, `list_carport`, `list_key_features`, `list_best_buy`, `list_img`, `list_created`, `list_datetime`) VALUES
(8, 1, 'Luxurious House and Lot in Ayala Alabang Village', '400M (Negotiable)', 'New Alabang Village, Metro Manila', '1', 'House', '2', 'Available', '565abc', '1,043.63 sqm', '558 sqm', '4', '3 on the 2nd floor, 1 on the 3rd floor', '4-6', 'Separate dressing room (3rd floor)\nServer room (3rd floor)\nGround Floor:\nGym area, lanai area, main kitchen, dining area\nBasement:\nSauna, storage, kitchen, maid\'s and driver\'s rooms, laundry\n', 'Private pool\nFully furnished with Roche Bobois furniture\n', '[{\"name\":\"20221125-DSC_5382.jpg\",\"id\":\"14LRntchjng1yb5pEDSjboKu8GRXBKn8c\",\"datetime\":\"2025-03-12 14:56:07\"},{\"name\":\"home-1.webp\",\"id\":\"1SIo0gbkNJee1jCMzaA_yIYbhvdb56P0J\",\"datetime\":\"2025-03-12 14:56:12\"},{\"name\":\"home-2.webp\",\"id\":\"1iQR_sOHIzSgfM5Gagux7bggUPnkMngaV\",\"datetime\":\"2025-03-12 14:56:16\"},{\"name\":\"home-3.webp\",\"id\":\"11YTwYU2EO4EYMZdQ8ikwPnU8-AVXOzE7\",\"datetime\":\"2025-03-12 14:56:19\"},{\"name\":\"home-4.webp\",\"id\":\"1kQWLw4gyu2XxbOrckyPkbn0Mx166SKsL\",\"datetime\":\"2025-03-12 14:56:22\"},{\"name\":\"home-5.webp\",\"id\":\"1ZObvPJ3J4Qx6T7U-cBmlOH6xiN_mtmjT\",\"datetime\":\"2025-03-12 14:56:26\"}]', '2025-03-12 14:56:02', '2025-03-12 14:56:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_property_list`
--
ALTER TABLE `zapv1_property_list`
  ADD PRIMARY KEY (`list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_property_list`
--
ALTER TABLE `zapv1_property_list`
  MODIFY `list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
