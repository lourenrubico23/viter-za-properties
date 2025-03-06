-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2025 at 08:53 AM
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
(2, '[{\"name\":\"home-banner.jpg\",\"id\":\"1sSr2_Asfyk2vX5aGsUbPxL4GqzESKQnq\",\"datetime\":\"2025-03-06 14:44:18\"}]', 'Home', 'Turning Properties Into Opportunities, Turning Clients Into Partners.', '2025-03-03 13:58:04', '2025-03-06 14:44:15'),
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

INSERT INTO `zapv1_property_list` (`list_aid`, `list_is_active`, `list_name`, `list_price`, `list_location`, `list_property_type_id`, `list_property_type_name`, `list_id`, `list_floor_area`, `list_lot_area`, `list_bedrooms`, `list_bathrooms`, `list_carport`, `list_key_features`, `list_best_buy`, `list_img`, `list_created`, `list_datetime`) VALUES
(1, 1, 'Prime Office Space at BPI-Philam Life Building, Madrigal Business Park, Alabang', '400 M', 'Alabang', '2', 'Luxurious House and Lot', 'abcde123', '1043.63 sqm', '558 sqm', '4', '5', '6', 'Separate dressing room (3rd floor)\nServer room (3rd floor)\nGround Floor:\nGym area, lanai area, main kitchen, dining area\nBasement:\nSauna, storage, kitchen, maid\'s and driver\'s rooms, laundry\n', 'Fully furnished with Roche Bobois furniture.\n', '[{\"name\":\"20221125-DSC_5382.jpg\",\"id\":\"1E8BZuPnWaDVUvnpCbjeEnQsz-_9MjA2h\",\"datetime\":\"2025-03-04 14:52:48\"},{\"name\":\"home-1.webp\",\"id\":\"1TuEjgzti3s_4VKIiHh91CUBGuFt4i9U1\",\"datetime\":\"2025-03-04 14:52:52\"},{\"name\":\"home-2.webp\",\"id\":\"1ZQAXrtvA_K0AsoApXgd_Qif9mlMsQGj1\",\"datetime\":\"2025-03-04 14:52:56\"},{\"name\":\"home-3.webp\",\"id\":\"1h2EMD5FZXsfFZI8YX-SZ-wGbbfAw6KEI\",\"datetime\":\"2025-03-04 14:52:59\"},{\"name\":\"home-4.webp\",\"id\":\"177fNULZrTCUZa1f5SuWZnjwKdPYs2rIM\",\"datetime\":\"2025-03-04 14:53:04\"},{\"name\":\"home-5.webp\",\"id\":\"1zE4BrE1LwKUUjiYLBGpWhxahgxMXz128\",\"datetime\":\"2025-03-04 14:53:08\"}]', '2025-03-04 13:12:20', '2025-03-06 15:30:16'),
(2, 1, 'Prime Mixed-Use Property in Dasmariñas Technopark', '203,200,000 (VAT Inclusive)', '', '3', 'Building', 'xxxx12345', '', '', '', '', ' 26 Slots', ' Multi-Functional Space – Includes two warehouse buildings with a dock bay, office spaces, commercial areas, and residential options.\n Fully Equipped – Comes with a generator set for a reliable power supply.\n Modern Infrastructure – Designed for mixed-use purposes, ensuring versatility.\n Ample Parking – 26 dedicated parking slots for convenience.\n Elevator Access – Enhancing accessibility across floors.\n', 'Prime Location – Situated in Dasmariñas Technopark, a premier business hub.\nGreat Investment Opportunity – Generates steady rental income from existing tenants.\nVersatile & High-Value – Ideal for businesses, warehouses, and commercial operations.\nStrategic Accessibility – Designed to accommodate diverse business needs efficiently.', '[{\"name\":\"Frontage.jpg\",\"id\":\"14yjnlp5tu1JKDK4rmyH5jIRk5rBMfI66\",\"datetime\":\"2025-03-04 15:01:50\"}]', '2025-03-04 15:00:59', '2025-03-05 08:35:04'),
(3, 1, 'Prime Lot in Better Living, Parañaque', '22,230,000 (₱39,000/sqm)', 'Don Bosco, Metro Manila', '1', 'House', 'cdfvfvg2-194', '', '570 sqm', '', '', '', '', 'Exclusive community with ample security.\nWide roads for a spacious and convenient environment.\nPeaceful and relaxing residential setting.\nIdeal for building your dream home or investment property\n', '[{\"name\":\"property-3.png\",\"id\":\"1NKudu6rfae2fONC317MW6OS_XSBhqqaH\",\"datetime\":\"2025-03-05 07:20:29\"},{\"name\":\"property-4.png\",\"id\":\"1YKO3YJSVhaoK5ueinMkjgc1EXMF_J22t\",\"datetime\":\"2025-03-05 07:20:33\"},{\"name\":\"property-5.png\",\"id\":\"1rl6-cuh7d58qTDcvQjfEa67sGTueVcN_\",\"datetime\":\"2025-03-05 07:20:37\"}]', '2025-03-05 07:20:22', '2025-03-05 08:32:48'),
(4, 1, 'Premium Fully Furnished Office Floor in Ortigas Center', '165,000,000', 'Ortigas Center, Pasig City', '2', 'Luxurious House and Lot', 'qass234', '', '1,110.38 sqm', '', '', '6', 'Workstations: Over 311\nReception Area: 1\nConference Rooms: 3\nPantry Areas: 2\nTraining Rooms: 2', 'Ready-to-use office space, ideal for immediate business operations.\nExceptional value for investors seeking to own an entire floor in Ortigas Center.\nFully furnished with modern infrastructure: biometric system, CCTV, fiber optic internet, air conditioning system, and power backup generators.\nIncludes a boardroom for executive meetings.\n24/7 operations allowed.\nOpportunity to lease to one or multiple clients.', '[{\"name\":\"property-4-a.png\",\"id\":\"1FvdQTbvcNMYBij6oYQ2H-txd5-0-hwP3\",\"datetime\":\"2025-03-05 12:18:32\"},{\"name\":\"property-4-b.png\",\"id\":\"1oC4h9y3sWbWAPb8yxbrRLekv1cCOF4Zg\",\"datetime\":\"2025-03-05 12:18:36\"},{\"name\":\"property-4-c.png\",\"id\":\"1oYzZboXW_NuBvZ3EZ1PnlhocuCcZXPwG\",\"datetime\":\"2025-03-05 12:18:40\"},{\"name\":\"property-4-d.png\",\"id\":\"1_rpUjbTWLpNHKkIs3BBE934GSzi4daUK\",\"datetime\":\"2025-03-05 12:18:46\"},{\"name\":\"property-4-e.png\",\"id\":\"1YTlVNuZwUorjY4i0FCZav3BzPq4nFfAN\",\"datetime\":\"2025-03-05 12:18:50\"},{\"name\":\"property-4-f.png\",\"id\":\"10LEPlzcnyXxNZCUoISYjVPExg8ap0atp\",\"datetime\":\"2025-03-05 12:18:55\"}]', '2025-03-05 12:18:25', '2025-03-05 12:18:25'),
(5, 1, 'Test 1', '200', '', '3', 'Building', '', '', '', '', '', '', '', '', '[{\"name\":\"accounting-associate-300x198.png\",\"id\":\"1KYyWFi-FS8Lahi6twgpFa0AvK7jPMtGo\",\"datetime\":\"2025-03-06 14:09:27\"}]', '2025-03-06 14:09:23', '2025-03-06 14:09:23'),
(6, 1, 'Test 2', '3000', '', '1', 'House', '', '', '', '', '', '', '', '', '[{\"name\":\"web-developer-2.jpg\",\"id\":\"1d6EMS6vExzziTLVGt0WAPUP_sv47RnjB\",\"datetime\":\"2025-03-06 14:10:41\"},{\"name\":\"virtual-assistant.jpg\",\"id\":\"1_8S-BWF00d5XPvITX84XnmW3uAtoO087\",\"datetime\":\"2025-03-06 14:10:45\"}]', '2025-03-06 14:10:38', '2025-03-06 14:10:38'),
(7, 1, 'Test 3', '7000000', '', '2', 'Luxurious House and Lot', '', '', '', '', '', '', '', '', '[{\"name\":\"january2025-newsletter-cover.jpg\",\"id\":\"1Lca_yDw4XZJaRFlsmDwA3FU__vk2eNUo\",\"datetime\":\"2025-03-06 14:12:09\"}]', '2025-03-06 14:12:05', '2025-03-06 14:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_property_type`
--

CREATE TABLE `zapv1_property_type` (
  `property_type_aid` int(11) NOT NULL,
  `property_type_is_active` tinyint(1) NOT NULL,
  `property_type_name` varchar(200) NOT NULL,
  `property_type_description` text NOT NULL,
  `property_type_created` datetime NOT NULL,
  `property_type_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_property_type`
--

INSERT INTO `zapv1_property_type` (`property_type_aid`, `property_type_is_active`, `property_type_name`, `property_type_description`, `property_type_created`, `property_type_datetime`) VALUES
(1, 1, 'House', 'House with 4 bedrooms', '2025-03-04 07:55:51', '2025-03-04 08:48:48'),
(2, 1, 'Luxurious House and Lot', 'Private Swimming Pool', '2025-03-04 13:07:10', '2025-03-04 13:07:10'),
(3, 1, 'Building', '3 storey', '2025-03-05 07:22:57', '2025-03-05 07:22:57');

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
-- Indexes for table `zapv1_about`
--
ALTER TABLE `zapv1_about`
  ADD PRIMARY KEY (`about_aid`);

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
-- Indexes for table `zapv1_property_list`
--
ALTER TABLE `zapv1_property_list`
  ADD PRIMARY KEY (`list_aid`);

--
-- Indexes for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  ADD PRIMARY KEY (`property_type_aid`);

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
-- Indexes for table `zapv1_testimonial`
--
ALTER TABLE `zapv1_testimonial`
  ADD PRIMARY KEY (`testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_about`
--
ALTER TABLE `zapv1_about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- AUTO_INCREMENT for table `zapv1_property_list`
--
ALTER TABLE `zapv1_property_list`
  MODIFY `list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  MODIFY `property_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `zapv1_settings_role`
--
ALTER TABLE `zapv1_settings_role`
  MODIFY `role_aid` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `zapv1_settings_users`
--
ALTER TABLE `zapv1_settings_users`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `zapv1_testimonial`
--
ALTER TABLE `zapv1_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
