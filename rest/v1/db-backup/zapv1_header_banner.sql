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
-- Table structure for table `zapv1_header_banner`
--

CREATE TABLE `zapv1_header_banner` (
  `banner_aid` int(11) NOT NULL,
  `banner_image` text NOT NULL,
  `banner_page` varchar(50) NOT NULL,
  `banner_title` varchar(200) NOT NULL,
  `banner_created` datetime NOT NULL,
  `banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_banner`
--

INSERT INTO `zapv1_header_banner` (`banner_aid`, `banner_image`, `banner_page`, `banner_title`, `banner_created`, `banner_datetime`) VALUES
(2, '[{\"name\":\"home-banner.webp\",\"id\":\"1vJTBdFu0gh95ZiFTCZyCS68-2JXs_71X\",\"datetime\":\"2025-03-03 13:58:09\"}]', 'Home', 'Turning Properties Into Opportunities, Turning Clients Into Partners.', '2025-03-03 13:58:04', '2025-03-03 13:58:04'),
(3, '[{\"name\":\"properties-banner.webp\",\"id\":\"1mZerYL7dfgmwu4aTkZucYQCX9ZxgX7PR\",\"datetime\":\"2025-03-03 14:01:43\"}]', 'Properties', 'Unlocking Property Potential. Creating Life-Long Partnerships.', '2025-03-03 14:01:36', '2025-03-03 14:01:36'),
(4, '[{\"name\":\"buyers-banner.webp\",\"id\":\"1od5i4PZ6azoD2Z5DM7l12l102BaAdPLp\",\"datetime\":\"2025-03-03 14:03:52\"}]', 'Buyers', 'Transforming Properties to Opportunities, Nurturing Life-Long Relationships.', '2025-03-03 14:03:49', '2025-03-03 14:03:49'),
(5, '[{\"name\":\"sellers-banner.webp\",\"id\":\"1RqF4hu4lB0s-afF8DiCdAv1AoxmNaBMm\",\"datetime\":\"2025-03-03 14:08:04\"}]', 'Sellers', 'Maximizing Value in Every Property, Turning Sellers into Trusted Partners.', '2025-03-03 14:08:00', '2025-03-03 14:08:00'),
(6, '[{\"name\":\"contact-banner.webp\",\"id\":\"1ACYP-gcDGf7AUin3HprgHjHNEG3TiREG\",\"datetime\":\"2025-03-03 14:11:08\"}]', 'Contact', 'Maximize your property\'s value with a trusted partner by your side. Contact us today to get started!', '2025-03-03 14:11:04', '2025-03-03 14:11:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_header_banner`
--
ALTER TABLE `zapv1_header_banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_header_banner`
--
ALTER TABLE `zapv1_header_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
