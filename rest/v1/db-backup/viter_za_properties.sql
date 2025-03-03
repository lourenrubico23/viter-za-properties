-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2025 at 08:53 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_header_logo`
--

CREATE TABLE `zapv1_header_logo` (
  `logo_aid` int(11) NOT NULL,
  `logo_image` text NOT NULL,
  `logo_name` varchar(100) NOT NULL,
  `logo_position` varchar(100) NOT NULL,
  `logo_created` datetime NOT NULL,
  `logo_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_logo`
--

INSERT INTO `zapv1_header_logo` (`logo_aid`, `logo_image`, `logo_name`, `logo_position`, `logo_created`, `logo_datetime`) VALUES
(2, '[{\"name\":\"za-logo.png\",\"id\":\"1usSbEW31e25qY5z5CUAMwzzlw_785vW2\",\"datetime\":\"2025-03-03 13:57:20\"}]', 'Zac Alfanta', 'Real State Broker', '2025-03-03 13:57:16', '2025-03-03 13:57:16');

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_property_type`
--

CREATE TABLE `zapv1_property_type` (
  `property_aid` int(11) NOT NULL,
  `property_is_active` tinyint(1) NOT NULL,
  `property_type_name` varchar(200) NOT NULL,
  `property_created` datetime NOT NULL,
  `property_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_settings_role`
--

CREATE TABLE `zapv1_settings_role` (
  `role_aid` int(1) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(128) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` datetime NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_settings_role`
--

INSERT INTO `zapv1_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_admin`) VALUES
(1, 1, 'Admin', 'Admin', '2025-03-03 01:13:47', '2025-03-03 01:13:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_settings_users`
--

CREATE TABLE `zapv1_settings_users` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_first_name` varchar(128) NOT NULL,
  `user_last_name` varchar(128) NOT NULL,
  `user_email` varchar(128) NOT NULL,
  `user_email_new` varchar(128) NOT NULL,
  `user_role_id` int(11) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` datetime NOT NULL,
  `user_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_settings_users`
--

INSERT INTO `zapv1_settings_users` (`user_aid`, `user_is_active`, `user_first_name`, `user_last_name`, `user_email`, `user_email_new`, `user_role_id`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(1, 1, 'Louren Isobel', 'Rubico', 'louren.rubico@frontlinebusiness.com.ph', '', 1, '', '$2y$10$jnApR/ovZ/hN81XbmA.XT.M/2GPhQkR4sdcZa.1N5qt1laulvCkMa', '2025-03-03 01:15:30', '2025-03-03 01:15:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_header_banner`
--
ALTER TABLE `zapv1_header_banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- Indexes for table `zapv1_header_contact_no`
--
ALTER TABLE `zapv1_header_contact_no`
  ADD PRIMARY KEY (`contact_no_aid`);

--
-- Indexes for table `zapv1_header_links`
--
ALTER TABLE `zapv1_header_links`
  ADD PRIMARY KEY (`links_aid`);

--
-- Indexes for table `zapv1_header_logo`
--
ALTER TABLE `zapv1_header_logo`
  ADD PRIMARY KEY (`logo_aid`);

--
-- Indexes for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  ADD PRIMARY KEY (`property_aid`);

--
-- Indexes for table `zapv1_settings_role`
--
ALTER TABLE `zapv1_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `zapv1_settings_users`
--
ALTER TABLE `zapv1_settings_users`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_header_banner`
--
ALTER TABLE `zapv1_header_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `zapv1_header_contact_no`
--
ALTER TABLE `zapv1_header_contact_no`
  MODIFY `contact_no_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `zapv1_header_links`
--
ALTER TABLE `zapv1_header_links`
  MODIFY `links_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `zapv1_header_logo`
--
ALTER TABLE `zapv1_header_logo`
  MODIFY `logo_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  MODIFY `property_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zapv1_settings_role`
--
ALTER TABLE `zapv1_settings_role`
  MODIFY `role_aid` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `zapv1_settings_users`
--
ALTER TABLE `zapv1_settings_users`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
