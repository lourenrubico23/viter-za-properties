-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2025 at 08:45 AM
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
-- Table structure for table `zapv1_testimonial`
--

CREATE TABLE `zapv1_testimonial` (
  `testimonial_aid` int(11) NOT NULL,
  `testimonial_name` varchar(200) NOT NULL,
  `testimonial_occupation` varchar(200) NOT NULL,
  `testimonial_feedback` text NOT NULL,
  `testimonial_created` datetime NOT NULL,
  `testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_testimonial`
--

INSERT INTO `zapv1_testimonial` (`testimonial_aid`, `testimonial_name`, `testimonial_occupation`, `testimonial_feedback`, `testimonial_created`, `testimonial_datetime`) VALUES
(1, 'Jade D.', 'London Based Seller', 'Zac was a great agent that helped me navigate a difficult sale as I was based in London and a completely different time zone. He was readily available at all times.', '2025-03-05 11:55:25', '2025-03-05 11:55:25'),
(2, 'Alyanna B.', 'Commercial Pilot', 'Transparent with transactons, nothing hidden. He also made an effort to lst down each and every transaction for our reference. Overall, I highly recommended Sir Zac as broker/agent. He negotiates excellently with both buyer and seller, in such a ways that it\'s in favor of both parties. If you\'re a beginner to real property, he\'ll make it easy for you.', '2025-03-05 11:55:54', '2025-03-05 11:55:54'),
(4, 'Angelina C.', 'Seller', 'I am very grateful that Zac was my Broker in selling my properties! He deals professionally and protects both the seller and the buyer\'s interest. Everything is in order, especially in document preparation, which leads to a very smooth turn-over! Zac, you are a blessing to us! God bless you with more clients and sales in Jesus name Amen!', '2025-03-05 11:57:07', '2025-03-05 11:57:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_testimonial`
--
ALTER TABLE `zapv1_testimonial`
  ADD PRIMARY KEY (`testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_testimonial`
--
ALTER TABLE `zapv1_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
