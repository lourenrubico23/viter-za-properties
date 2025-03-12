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
-- Table structure for table `zapv1_contact_form`
--

CREATE TABLE `zapv1_contact_form` (
  `form_aid` int(11) NOT NULL,
  `form_page` varchar(50) NOT NULL,
  `form_label` varchar(200) NOT NULL,
  `form_title` varchar(200) NOT NULL,
  `form_facebook` varchar(200) NOT NULL,
  `form_instagram` varchar(200) NOT NULL,
  `form_linkedIn` varchar(200) NOT NULL,
  `form_address` text NOT NULL,
  `form_description` text NOT NULL,
  `form_contact_description` text NOT NULL,
  `form_created` datetime NOT NULL,
  `form_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_contact_form`
--

INSERT INTO `zapv1_contact_form` (`form_aid`, `form_page`, `form_label`, `form_title`, `form_facebook`, `form_instagram`, `form_linkedIn`, `form_address`, `form_description`, `form_contact_description`, `form_created`, `form_datetime`) VALUES
(1, 'Home', '', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', '', 'Contact Us', '2025-03-12 08:53:46', '2025-03-12 08:55:34'),
(3, 'Properties', '', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', '', 'Contact Us', '2025-03-12 09:00:25', '2025-03-12 09:00:25'),
(4, 'Buyers', 'Buyers', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', 'Finding the perfect property is more than just a transaction—it\'s about securing your future. Whether you\'re searching for your dream home, a smart investment, or a prime commercial space, I am committed to guiding you every step of the way. With expert market insights, personalized service, and a passion for real estate, I help buyers make confident, well-informed decisions. Let\'s turn your vision into reality—because the right property changes everything.', 'Your Ideal Property Awaits—Let’s Connect!', '2025-03-12 09:01:21', '2025-03-12 09:01:21'),
(5, 'Sellers', 'Sellers', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', 'Selling your property is a major decision, and I\'m here to make the process smooth, strategic, and successful. With expert market analysis, targeted marketing, and a vast network of qualified buyers, I ensure your property gets the exposure and value it deserves. From pricing to closing, I handle every detail with professionalism and care. Let\'s maximize your propertys potential and achieve the best possible deal.', 'Let\'s Get Your Property Sold—Contact Me Now!', '2025-03-12 09:02:53', '2025-03-12 09:02:53'),
(6, 'Blogs', '', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', '', 'Contact us today for a complimentary, no-pressure \nhome appraisal!', '2025-03-12 09:04:33', '2025-03-12 09:04:33'),
(7, 'Contact', '', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', '', 'Contact us today for a complimentary, no-pressure home appraisal!', '2025-03-12 09:05:39', '2025-03-12 09:05:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_contact_form`
--
ALTER TABLE `zapv1_contact_form`
  ADD PRIMARY KEY (`form_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_contact_form`
--
ALTER TABLE `zapv1_contact_form`
  MODIFY `form_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
