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
-- Table structure for table `zapv1_about`
--

CREATE TABLE `zapv1_about` (
  `about_aid` int(11) NOT NULL,
  `about_name` varchar(200) NOT NULL,
  `about_paragraph_a` text NOT NULL,
  `about_paragraph_b` text NOT NULL,
  `about_paragraph_c` text NOT NULL,
  `about_img` text NOT NULL,
  `about_logo_img` text NOT NULL,
  `about_created` datetime NOT NULL,
  `about_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_about`
--

INSERT INTO `zapv1_about` (`about_aid`, `about_name`, `about_paragraph_a`, `about_paragraph_b`, `about_paragraph_c`, `about_img`, `about_logo_img`, `about_created`, `about_datetime`) VALUES
(1, 'Zac Alfanta', 'I am a Licensed Real Estate Broker (PRC 33585) and an Associate Broker with RE/MAX PREMIER BGC, recognized as a 2023 Real Estate Board Topnotcher (Top 10) for my commitment to excellence.', 'As an International Realtor Member of CREBA-NAR and a proud REBAP LMP Chapter member, I bring deep industry expertise. Before real estate, I built a strong banking career as a former Bank Officer at a top Philippine bank, equipping me with financial acumen to provide strategic real estate advice. I also serve as an Independent Director for a fintech company driving innovation in financial technology', 'My work is driven by integrity, meaningful relationships. and a passion for delivering tailored real estate solutions that create long-term value.', '[{\"name\":\"zac-alfanta.webp\",\"id\":\"1EXLG_vqsMkNKRVe0ytzhtGgfj7bdJ1d5\",\"datetime\":\"2025-03-05 10:12:23\"}]', '[{\"name\":\"nar-logo.png\",\"id\":\"1Pa8eCSLAQCAL_6FktdJOYeTOj-Gt1_SE\",\"datetime\":\"2025-03-05 10:25:16\"},{\"name\":\"rebap-logo.png\",\"id\":\"1OqBxOubwzmJCMlzr1KaXL5dpT3OU-HIP\",\"datetime\":\"2025-03-05 10:25:18\"},{\"name\":\"remax-logo.png\",\"id\":\"1U-Txs3WSKubEMVL4c2r79a88Kr9dA333\",\"datetime\":\"2025-03-05 10:25:23\"}]', '2025-03-05 10:12:20', '2025-03-05 10:25:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_about`
--
ALTER TABLE `zapv1_about`
  ADD PRIMARY KEY (`about_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_about`
--
ALTER TABLE `zapv1_about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
