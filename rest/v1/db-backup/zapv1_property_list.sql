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
-- Table structure for table `zapv1_property_list`
--

CREATE TABLE `zapv1_property_list` (
  `list_aid` int(11) NOT NULL,
  `list_is_active` tinyint(1) NOT NULL,
  `list_name` text NOT NULL,
  `list_price` varchar(100) NOT NULL,
  `list_location` text NOT NULL,
  `list_property_type_id` varchar(50) NOT NULL,
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

INSERT INTO `zapv1_property_list` (`list_aid`, `list_is_active`, `list_name`, `list_price`, `list_location`, `list_property_type_id`, `list_id`, `list_floor_area`, `list_lot_area`, `list_bedrooms`, `list_bathrooms`, `list_carport`, `list_key_features`, `list_best_buy`, `list_img`, `list_created`, `list_datetime`) VALUES
(1, 1, 'Prime Office Space at BPI-Philam Life Building, Madrigal Business Park, Alabang', '400 M', 'Alabang', '1', 'abcde123', '1043.63 sqm', '558 sqm', '4', '5', '6', 'Separate dressing room (3rd floor)\nServer room (3rd floor)\nGround Floor:\nGym area, lanai area, main kitchen, dining area\nBasement:\nSauna, storage, kitchen, maid\'s and driver\'s rooms, laundry\n', 'Fully furnished with Roche Bobois furniture.\n', '[{\"name\":\"buyers-banner.webp\",\"id\":\"1dY_QIkA8nkC7epkoq0cTQPzd3oNh0hQE\",\"datetime\":\"2025-03-04 13:12:32\"},{\"name\":\"20221125-DSC_5382.jpg\",\"id\":\"1E8BZuPnWaDVUvnpCbjeEnQsz-_9MjA2h\",\"datetime\":\"2025-03-04 14:52:48\"},{\"name\":\"home-1.webp\",\"id\":\"1TuEjgzti3s_4VKIiHh91CUBGuFt4i9U1\",\"datetime\":\"2025-03-04 14:52:52\"},{\"name\":\"home-2.webp\",\"id\":\"1ZQAXrtvA_K0AsoApXgd_Qif9mlMsQGj1\",\"datetime\":\"2025-03-04 14:52:56\"},{\"name\":\"home-3.webp\",\"id\":\"1h2EMD5FZXsfFZI8YX-SZ-wGbbfAw6KEI\",\"datetime\":\"2025-03-04 14:52:59\"},{\"name\":\"home-4.webp\",\"id\":\"177fNULZrTCUZa1f5SuWZnjwKdPYs2rIM\",\"datetime\":\"2025-03-04 14:53:04\"},{\"name\":\"home-5.webp\",\"id\":\"1zE4BrE1LwKUUjiYLBGpWhxahgxMXz128\",\"datetime\":\"2025-03-04 14:53:08\"}]', '2025-03-04 13:12:20', '2025-03-04 15:20:05'),
(2, 1, 'Prime Mixed-Use Property in Dasmariñas Technopark', '203,200,000 (VAT Inclusive)', 'Dasmariñas Technopark, Dasmariñas City, Cavite', '2', 'xxxx12345', '', '3,000 sqm', '', '', ' 26 Slots', '✅ Multi-Functional Space – Includes two warehouse buildings with a dock bay, office spaces, commercial areas, and residential options.\n✅ Fully Equipped – Comes with a generator set for a reliable power supply.\n✅ Modern Infrastructure – Designed for mixed-use purposes, ensuring versatility.\n✅ Ample Parking – 26 dedicated parking slots for convenience.\n✅ Elevator Access – Enhancing accessibility across floors.\n', '???? Prime Location – Situated in Dasmariñas Technopark, a premier business hub.\n???? Great Investment Opportunity – Generates steady rental income from existing tenants.\n???? Versatile & High-Value – Ideal for businesses, warehouses, and commercial operations.\n???? Strategic Accessibility – Designed to accommodate diverse business needs efficiently.\n', '[{\"name\":\"Frontage.jpg\",\"id\":\"14yjnlp5tu1JKDK4rmyH5jIRk5rBMfI66\",\"datetime\":\"2025-03-04 15:01:50\"}]', '2025-03-04 15:00:59', '2025-03-04 15:00:59');

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
  MODIFY `list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
