-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2025 at 02:21 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zapv1_settings_users`
--

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
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_settings_users`
--
ALTER TABLE `zapv1_settings_users`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_settings_users`
--
ALTER TABLE `zapv1_settings_users`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
