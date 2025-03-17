-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2025 at 08:52 AM
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
-- Table structure for table `zapv1_blogs`
--

CREATE TABLE `zapv1_blogs` (
  `blogs_aid` int(11) NOT NULL,
  `blogs_is_active` tinyint(1) NOT NULL,
  `blogs_title` text NOT NULL,
  `blogs_author` varchar(200) NOT NULL,
  `blogs_brief_description` text NOT NULL,
  `blogs_published_date` varchar(50) NOT NULL,
  `blogs_contents_a` text NOT NULL,
  `blogs_contents_b` text NOT NULL,
  `blogs_contents_c` text NOT NULL,
  `blogs_img` text NOT NULL,
  `blogs_created` datetime NOT NULL,
  `blogs_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_blogs`
--

INSERT INTO `zapv1_blogs` (`blogs_aid`, `blogs_is_active`, `blogs_title`, `blogs_author`, `blogs_brief_description`, `blogs_published_date`, `blogs_contents_a`, `blogs_contents_b`, `blogs_contents_c`, `blogs_img`, `blogs_created`, `blogs_datetime`) VALUES
(1, 1, 'Test', 'Test Author', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ea cumque modi libero non expedita enim! Odit veniam ipsam, harum maiores reprehenderit eligendi accusantium aspernatur enim.', '2025-03-07', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ea cumque modi libero non expedita enim! Odit veniam ipsam, harum maiores reprehenderit eligendi accusantium aspernatur enim. \nAutem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ea cumque modi libero non expedita enim! Odit veniam ipsam, harum maiores reprehenderit eligendi accusantium aspernatur enim.\n Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ea cumque modi libero non expedita enim! Odit veniam ipsam, harum maiores reprehenderit eligendi accusantium aspernatur enim. Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!', '[{\"name\":\"blogs1.png\",\"id\":\"1E7pETPCgj_xUPWJv2Qsih2C0t9AgsITe\",\"datetime\":\"2025-03-07 11:09:45\"},{\"name\":\"blogs2.png\",\"id\":\"1SODYdT9o4n0zoYTu1Ak4AZuCWQ8Ztmv7\",\"datetime\":\"2025-03-07 11:09:49\"},{\"name\":\"blogs3.png\",\"id\":\"15uR-GF14V7OzV9llgSktduPdi9-keq07\",\"datetime\":\"2025-03-07 11:09:52\"}]', '2025-03-07 11:09:42', '2025-03-07 15:00:12'),
(4, 1, 'Blogsss', 'Test Blog 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', '2025-03-19', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', '[{\"name\":\"Frontage.jpg\",\"id\":\"1o-mli7VbQSt8zPJuldbZOe1f-7fCvZm8\",\"datetime\":\"2025-03-07 13:02:00\"},{\"name\":\"blogs1.png\",\"id\":\"1PTmrnnCw5YpcHAxpBRaM26ZIBJ93Fij_\",\"datetime\":\"2025-03-07 13:02:03\"},{\"name\":\"blogs2.png\",\"id\":\"1hrzoH8kVFpL1H35ICrZNPWj5-Ljjpjm7\",\"datetime\":\"2025-03-07 13:02:07\"},{\"name\":\"blogs3.png\",\"id\":\"18aefgCvxkZP-nNLdTPW--ULvs85VzO9p\",\"datetime\":\"2025-03-07 13:02:11\"},{\"name\":\"cards2.webp\",\"id\":\"1DUjsuAwEfDn3XNzPZx9OC9kyVQCJY3WN\",\"datetime\":\"2025-03-07 13:02:14\"},{\"name\":\"home-3.webp\",\"id\":\"1lslfTwooaMy-I1wTYoa-bMhVuLoOTs1i\",\"datetime\":\"2025-03-07 13:02:18\"}]', '2025-03-07 13:01:53', '2025-03-07 13:01:53'),
(5, 1, 'The Ultimate Guide to Buying Your  First Home', 'Test Blogs', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', '2025-04-10', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', '[{\"name\":\"cards.webp\",\"id\":\"18Ygbx9W2aRt_h7ucOUFKeXzG-mYnJFZv\",\"datetime\":\"2025-03-07 13:04:11\"},{\"name\":\"cards2.webp\",\"id\":\"1BjEt2VPhah7pPpt2xwWdEAT9XIVudOe_\",\"datetime\":\"2025-03-07 13:04:14\"},{\"name\":\"home-2.webp\",\"id\":\"1OEnZsZr77imUUiqlUOa_wA7jwSEEaPo6\",\"datetime\":\"2025-03-07 13:04:18\"},{\"name\":\"home-3.webp\",\"id\":\"1WsmKgDTqJDd6N3pgpHcI0mlUrVx_riuD\",\"datetime\":\"2025-03-07 13:04:22\"},{\"name\":\"home-4.webp\",\"id\":\"1O-rdr8x79xoa-e9V_jqvTeq59nNft6zB\",\"datetime\":\"2025-03-07 13:04:25\"},{\"name\":\"home-5.webp\",\"id\":\"1f_Uj_umPPfRzZSPc6MjO7zAPTQY8TDUC\",\"datetime\":\"2025-03-07 13:04:28\"}]', '2025-03-07 13:04:07', '2025-03-07 13:04:07'),
(6, 1, 'The Ultimate Guide to Buying Your First Home', 'Zac Alfanta', 'Lorem ipsum dolor sit amet consectetur. Vitae eu tincidunt in sed.', '2025-03-07', 'Lorem ipsum dolor sit amet consectetur. In habitasse eget semper dignissim sed lobortis dui.. Vestibulum non eu blandit ornare sed non.. Non vel massa id quis. Volutpat velit imperdiet tortor lectus justo augue quis congue.. Urna risus quisque egestas at sed tortor dignissim tellus non.. Sagittis consectetur feugiat pellentesque auctor condimentum faucibus quis..\n\nFeugiat venenatis tellus sit morbi. Elit blandit nec ornare ac purus aliquet mauris.. Turpis non gravida gravida nisi at adipiscing feugiat risus sapien.. Libero pretium eget amet ullamcorper consequat senectus.. Nulla in tincidunt pretium pretium lectus elit diam suscipit purus.. Facilisis mauris dignissim augue at ipsum arcu arcu ultricies lobortis.. Egestas sollicitudin at morbi nulla ornare.. Quam felis feugiat in enim suscipit mattis..\n\nIpsum et hendrerit massa varius amet.. Sem gravida libero scelerisque phasellus. Dui ultrices tincidunt turpis eu. Gravida sed rhoncus adipiscing et elit condimentum nunc vel imperdiet.. Tempus ante blandit lacus commodo posuere enim nisl.. Maecenas habitasse et augue sollicitudin odio porttitor.. A magna pellentesque condimentum sit. Ac nunc curabitur in vitae morbi arcu at facilisis.. Neque varius cursus erat gravida neque id.. Rhoncus amet mattis condimentum.', 'Lorem ipsum dolor sit amet consectetur. In habitasse eget semper dignissim sed lobortis dui.. Vestibulum non eu blandit ornare sed non.. Non vel massa id quis. Volutpat velit imperdiet tortor lectus justo augue quis congue.. Urna risus quisque egestas at sed tortor dignissim tellus non.. Sagittis consectetur feugiat pellentesque auctor condimentum faucibus quis..\n\nFeugiat venenatis tellus sit morbi. Elit blandit nec ornare ac purus aliquet mauris.. Turpis non gravida gravida nisi at adipiscing feugiat risus sapien.. Libero pretium eget amet ullamcorper consequat senectus.. Nulla in tincidunt pretium pretium lectus elit diam suscipit purus.. Facilisis mauris dignissim augue at ipsum arcu arcu ultricies lobortis.. Egestas sollicitudin at morbi nulla ornare.. Quam felis feugiat in enim suscipit mattis..\n\nIpsum et hendrerit massa varius amet.. Sem gravida libero scelerisque phasellus. Dui ultrices tincidunt turpis eu. Gravida sed rhoncus adipiscing et elit condimentum nunc vel imperdiet.. Tempus ante blandit lacus commodo posuere enim nisl.. Maecenas habitasse et augue sollicitudin odio porttitor.. A magna pellentesque condimentum sit. Ac nunc curabitur in vitae morbi arcu at facilisis.. Neque varius cursus erat gravida neque id.. Rhoncus amet mattis condimentum.', 'Lorem ipsum dolor sit amet consectetur. In habitasse eget semper dignissim sed lobortis dui.. Vestibulum non eu blandit ornare sed non.. Non vel massa id quis. Volutpat velit imperdiet tortor lectus justo augue quis congue.. Urna risus quisque egestas at sed tortor dignissim tellus non.. Sagittis consectetur feugiat pellentesque auctor condimentum faucibus quis..\n\nFeugiat venenatis tellus sit morbi. Elit blandit nec ornare ac purus aliquet mauris.. Turpis non gravida gravida nisi at adipiscing feugiat risus sapien.. Libero pretium eget amet ullamcorper consequat senectus.. Nulla in tincidunt pretium pretium lectus elit diam suscipit purus.. Facilisis mauris dignissim augue at ipsum arcu arcu ultricies lobortis.. Egestas sollicitudin at morbi nulla ornare.. Quam felis feugiat in enim suscipit mattis..\n\nIpsum et hendrerit massa varius amet.. Sem gravida libero scelerisque phasellus. Dui ultrices tincidunt turpis eu. Gravida sed rhoncus adipiscing et elit condimentum nunc vel imperdiet.. Tempus ante blandit lacus commodo posuere enim nisl.. Maecenas habitasse et augue sollicitudin odio porttitor.. A magna pellentesque condimentum sit. Ac nunc curabitur in vitae morbi arcu at facilisis.. Neque varius cursus erat gravida neque id.. Rhoncus amet mattis condimentum.', '[{\"name\":\"blogs1.png\",\"id\":\"1C8W7ST8mRBMVFUgaK0l1a-MxIJHGw-yR\",\"datetime\":\"2025-03-07 15:07:07\"},{\"name\":\"blogs4.png\",\"id\":\"1Mpi3FjGK27B0KSuRWKX_Tk251Ss65nZm\",\"datetime\":\"2025-03-07 15:07:11\"},{\"name\":\"blogs5.png\",\"id\":\"1F7EGJx-oU7zFwCQH9NeOQiiqUGAoXvlE\",\"datetime\":\"2025-03-07 15:07:14\"}]', '2025-03-07 15:07:04', '2025-03-07 15:07:04'),
(8, 1, '10 Essential Tips for a Smooth Home Buying Experience', 'Louren Rubico', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ea cumque modi libero non expedita enim! Odit veniam ipsam, harum maiores reprehenderit eligendi accusantium aspernatur enim.', '2025-04-18', 'Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur! Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur! \nAutem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!', 'Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!\nAutem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!\nAutem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!', 'Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur! Autem magnam deleniti a. Totam eius tenetur cumque culpa perferendis quo doloribus, quibusdam enim vero repellat quas a eum officiis? Placeat ipsa earum consectetur!', '[{\"name\":\"blogs2.png\",\"id\":\"1Xb11IEMvMuePM4t7f5ygBbBPiAwpZDSc\",\"datetime\":\"2025-03-11 12:03:45\"},{\"name\":\"blogs3.png\",\"id\":\"1qxB3ymZoMfbi5xYOBfqwIOCfTaITxcrR\",\"datetime\":\"2025-03-11 12:03:48\"},{\"name\":\"home-1.webp\",\"id\":\"19xH7mypxGhKVrXXQ0QPL8PmZqEZ7p0bi\",\"datetime\":\"2025-03-11 12:03:52\"}]', '2025-03-11 12:03:41', '2025-03-11 12:03:41');

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_colors`
--

CREATE TABLE `zapv1_colors` (
  `colors_aid` int(11) NOT NULL,
  `colors_primary` varchar(50) NOT NULL,
  `colors_secondary` varchar(50) NOT NULL,
  `colors_accent` varchar(50) NOT NULL,
  `colors_light` varchar(50) NOT NULL,
  `colors_dark` varchar(50) NOT NULL,
  `colors_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_colors`
--

INSERT INTO `zapv1_colors` (`colors_aid`, `colors_primary`, `colors_secondary`, `colors_accent`, `colors_light`, `colors_dark`, `colors_datetime`) VALUES
(1, '#002b53', '#007b80', '#5b3a29', '#ffffff', '#2b2b2b', '2025-03-14 08:16:29');

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
(5, 'Sellers', 'Sellers', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', 'Selling your property is a major decision, and I\'m here to make the process smooth, strategic, and successful. With expert market analysis, targeted marketing, and a vast network of qualified buyers, I ensure your property gets the exposure and value it deserves. From pricing to closing, I handle every detail with professionalism and care. Let\'s maximize your properties potential and achieve the best possible deal.', 'Let\'s Get Your Property Sold—Contact Me Now!', '2025-03-12 09:02:53', '2025-03-17 10:13:23'),
(6, 'Blogs', '', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', '', 'Contact us today for a complimentary, no-pressure \nhome appraisal!', '2025-03-12 09:04:33', '2025-03-12 09:04:33'),
(7, 'Contact', '', 'ZA Properties', 'ZAPropertiesPh', 'ZAPropertiesPh', 'ZacAlfantaJr', '24th Floor PSE Tower 5th Avenue BGC Taguig', '', 'Contact us today for a complimentary, no-pressure home appraisal!', '2025-03-12 09:05:39', '2025-03-12 09:05:39');

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
(4, '[{\"name\":\"buyers-banner.webp\",\"id\":\"13DCh34yAsDTDDd9mfOVbo5zHh1sHhJ95\",\"datetime\":\"2025-03-07 08:49:56\"}]', 'Buyers', 'Transforming Properties to Opportunities, Nurturing Life-Long Relationships.', '2025-03-03 14:03:49', '2025-03-07 08:49:52'),
(5, '[{\"name\":\"sellers-banner.webp\",\"id\":\"1RqF4hu4lB0s-afF8DiCdAv1AoxmNaBMm\",\"datetime\":\"2025-03-03 14:08:04\"}]', 'Sellers', 'Maximizing Value in Every Property, Turning Sellers into Trusted Partners.', '2025-03-03 14:08:00', '2025-03-03 14:08:00'),
(6, '[{\"name\":\"contact-banner.webp\",\"id\":\"1ACYP-gcDGf7AUin3HprgHjHNEG3TiREG\",\"datetime\":\"2025-03-03 14:11:08\"}]', 'Contact', 'Maximize your property\'s value with a trusted partner by your side. Contact us today to get started!', '2025-03-03 14:11:04', '2025-03-03 14:11:04'),
(7, '[{\"name\":\"blog-banner.png\",\"id\":\"1YOw7vJPUTC1Y1GnQYUe1u2VjCzaSVHL8\",\"datetime\":\"2025-03-07 09:07:36\"}]', 'Blogs', 'Blogs and Insights', '2025-03-07 09:07:32', '2025-03-07 09:07:32');

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_header_contact_no`
--

CREATE TABLE `zapv1_header_contact_no` (
  `contact_no_aid` int(11) NOT NULL,
  `contact_no_contact` varchar(50) NOT NULL,
  `contact_no_email` varchar(200) NOT NULL,
  `contact_no_qr_code` text NOT NULL,
  `contact_no_created` datetime NOT NULL,
  `contact_no_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_contact_no`
--

INSERT INTO `zapv1_header_contact_no` (`contact_no_aid`, `contact_no_contact`, `contact_no_email`, `contact_no_qr_code`, `contact_no_created`, `contact_no_datetime`) VALUES
(4, '+63 917 653 1919', 'properties@zacalfanta.com', '[{\"name\":\"qr-code.png\",\"id\":\"1sRf0W-HfyTrANU3g29RHI9c0ix1zlx6c\",\"datetime\":\"2025-03-11 15:07:43\"}]', '2025-03-11 14:51:44', '2025-03-11 15:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_header_links`
--

CREATE TABLE `zapv1_header_links` (
  `links_aid` int(11) NOT NULL,
  `links_facebook_link` text NOT NULL,
  `links_facebook_title` varchar(100) NOT NULL,
  `links_instagram_link` text NOT NULL,
  `links_instagram_title` varchar(100) NOT NULL,
  `links_message_link` text NOT NULL,
  `links_message_title` varchar(100) NOT NULL,
  `links_contact` varchar(100) NOT NULL,
  `links_created` datetime NOT NULL,
  `links_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_header_links`
--

INSERT INTO `zapv1_header_links` (`links_aid`, `links_facebook_link`, `links_facebook_title`, `links_instagram_link`, `links_instagram_title`, `links_message_link`, `links_message_title`, `links_contact`, `links_created`, `links_datetime`) VALUES
(9, 'https://www.facebook.com/ZacAlfantaJr/', 'Like us on Facebook', 'https://www.instagram.com/zapropertiesph/', 'Follow us on Instagram', '', 'Message Us', '+63 917 653 1919', '2025-03-17 15:04:45', '2025-03-17 15:27:05');

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
-- Table structure for table `zapv1_notification`
--

CREATE TABLE `zapv1_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_is_active` tinyint(1) NOT NULL,
  `notification_name` varchar(200) NOT NULL,
  `notification_email` varchar(200) NOT NULL,
  `notification_phone` varchar(50) NOT NULL,
  `notification_created` datetime NOT NULL,
  `notification_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_notification`
--

INSERT INTO `zapv1_notification` (`notification_aid`, `notification_is_active`, `notification_name`, `notification_email`, `notification_phone`, `notification_created`, `notification_datetime`) VALUES
(1, 1, 'Louren Rubico', 'lourenisobel18@gmail.com', '09090909087', '2025-03-12 14:21:23', '2025-03-12 14:21:37'),
(2, 1, 'Luke', 'louren.rubico@frontlinebusiness.com.ph', '0912122312312', '2025-03-13 13:40:07', '2025-03-13 13:40:07');

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
(8, 1, 'Luxurious House and Lot in Ayala Alabang Village', '400,000,000 (Negotiable)', 'New Alabang Village, Metro Manila', '2', 'Luxurious House and Lot', '2', 'Available', '', '1,043.63 sqm', '558 sqm', '4', '3 on the 2nd floor, 1 on the 3rd floor', '4-6', 'Separate dressing room (3rd floor)\nServer room (3rd floor)\nGround Floor:\nGym area, lanai area, main kitchen, dining area\nBasement:\nSauna, storage, kitchen, maid\'s and driver\'s rooms, laundry\n', 'Private pool\nFully furnished with Roche Bobois furniture\n', '[{\"name\":\"20221125-DSC_5382.jpg\",\"id\":\"14LRntchjng1yb5pEDSjboKu8GRXBKn8c\",\"datetime\":\"2025-03-12 14:56:07\"},{\"name\":\"20221125-DSC_5492.jpg\",\"id\":\"1iPKLz4G9-Lw4v58GMj4_e-UUbhZJI78l\",\"datetime\":\"2025-03-13 15:03:16\"},{\"name\":\"20221125-DSC_5627-Edit.jpg\",\"id\":\"1h9PRQKln1yjTylzSWjacb8BBT0B_fI0Y\",\"datetime\":\"2025-03-13 15:03:23\"},{\"name\":\"20221125-DSC_5774.jpg\",\"id\":\"1GfC7iz7AXGxOTscE1hbMyPYvIiHsoSxh\",\"datetime\":\"2025-03-13 15:03:28\"},{\"name\":\"20221125-DSC_5823.jpg\",\"id\":\"1WYr8FU0VN4MH-r3y5GENoVXuRocMiDQ3\",\"datetime\":\"2025-03-13 15:03:33\"},{\"name\":\"20221125-DSC_5832.jpg\",\"id\":\"1CFEGbqaZNSxT5KxQreqeoLjtx-XonocJ\",\"datetime\":\"2025-03-13 15:03:38\"},{\"name\":\"20221125-DSC_5837.jpg\",\"id\":\"1qSPxEQHHNOmGaSmGIVZDfhQYjDstWUqX\",\"datetime\":\"2025-03-13 15:03:43\"},{\"name\":\"20221125-DSC_5840.jpg\",\"id\":\"1UEM3ZxIVGE3podC5eM4mGwSXoYDa1Msy\",\"datetime\":\"2025-03-13 15:03:47\"},{\"name\":\"20221125-DSC_5850.jpg\",\"id\":\"1tqKJC8Wd6aIFpl2MkytZZiDhSE1_U9PQ\",\"datetime\":\"2025-03-13 15:03:53\"},{\"name\":\"20221125-DSC_5871.jpg\",\"id\":\"1daF4IG1elO3_WeN9j2IGy8duCPsHT1eX\",\"datetime\":\"2025-03-13 15:03:57\"},{\"name\":\"20221125-DSC_5957.jpg\",\"id\":\"1JQ0Gx1qfHmOqM7SjkzJ-MkVnEG_IjG1R\",\"datetime\":\"2025-03-13 15:04:03\"},{\"name\":\"20221125-DSC_5959.jpg\",\"id\":\"1FF2nYgFER3eUeaERaw91ai1M-6JmWYxl\",\"datetime\":\"2025-03-13 15:04:07\"},{\"name\":\"20221126-DSC_5986.jpg\",\"id\":\"1672oB47Fto4NsQo4dyOFSHBS7izxBADQ\",\"datetime\":\"2025-03-13 15:04:14\"},{\"name\":\"20221126-DSC_5987.jpg\",\"id\":\"10MW4uOzcOQ8NcMZGVzQQWEPatGm2MhXe\",\"datetime\":\"2025-03-13 15:04:18\"},{\"name\":\"20221126-DSC_5988.jpg\",\"id\":\"1FHKAQLfAUiA0fiNfpmVprRvFn6DKM0s7\",\"datetime\":\"2025-03-13 15:04:27\"},{\"name\":\"20221127-DSC_6085-Edit.jpg\",\"id\":\"13Rq_3Bv588oCdBc7rIpddGi9lz-gom4e\",\"datetime\":\"2025-03-13 15:04:33\"},{\"name\":\"20221127-DSC_6087.jpg\",\"id\":\"13uo_wP5gcZADzl6VibD-GVZNVwzuYH2v\",\"datetime\":\"2025-03-13 15:04:37\"},{\"name\":\"20221127-DSC_6094.jpg\",\"id\":\"1Zqz4kVT5WbeO5EdwJOmsXzC1QxKjZLt1\",\"datetime\":\"2025-03-13 15:04:43\"},{\"name\":\"20221127-DSC_6114.jpg\",\"id\":\"1Qt7TlHkKXsF960_8AYY5P_hTZXarbrHu\",\"datetime\":\"2025-03-13 15:04:47\"},{\"name\":\"20221127-DSC_6125.jpg\",\"id\":\"17CVf_hIagjWiLGA4Bm8P3X-EbNds7AUt\",\"datetime\":\"2025-03-13 15:04:53\"},{\"name\":\"20221127-DSC_6128.jpg\",\"id\":\"1rbC6NGyJ5YtPK0zOluVCpl27Ld7cmwyY\",\"datetime\":\"2025-03-13 15:04:58\"},{\"name\":\"20221127-DSC_6133.jpg\",\"id\":\"1-G1DR2Rfi4oPQRNE56IDxKX0poEKNsmF\",\"datetime\":\"2025-03-13 15:08:33\"},{\"name\":\"20221127-DSC_6145.jpg\",\"id\":\"1GCYbFJRTiB5ni190NZTUPCewS_Z9L80w\",\"datetime\":\"2025-03-13 15:08:37\"},{\"name\":\"20221127-DSC_6153.jpg\",\"id\":\"1ZaaRPM0jL27NWuYt1Wj2AeCMimwwD5nD\",\"datetime\":\"2025-03-13 15:08:44\"},{\"name\":\"20221127-DSC_6157.jpg\",\"id\":\"1sVjhbUMfVetaKWPL-GJaysqkAlJ9_KES\",\"datetime\":\"2025-03-13 15:08:48\"},{\"name\":\"20221127-DSC_6226.jpg\",\"id\":\"1QBYRjAT2KobrfLyzGhj-6CPsrTf7ySnQ\",\"datetime\":\"2025-03-13 15:08:54\"},{\"name\":\"20221127-DSC_6332.jpg\",\"id\":\"1YAwjb1LjpGm_CaOMWfOZRoYSynQBL4yE\",\"datetime\":\"2025-03-13 15:08:58\"},{\"name\":\"20221127-DSC_6334.jpg\",\"id\":\"11n0EoCmJekycpa7ay0VAcAAZAlPhjlDe\",\"datetime\":\"2025-03-13 15:09:04\"},{\"name\":\"20221127-DSC_6339.jpg\",\"id\":\"1jB3_u4m-y2vkRAJqZjH0ReWSdMUz36EL\",\"datetime\":\"2025-03-13 15:09:09\"},{\"name\":\"20221127-DSC_6360.jpg\",\"id\":\"1coaCz1wGHC6KW7JboncILb-fwMNlzTow\",\"datetime\":\"2025-03-13 15:09:13\"},{\"name\":\"20221202-DSC_6447.jpg\",\"id\":\"1Byr1x31TvVHPZUIBbMO58LqmkIgedcXJ\",\"datetime\":\"2025-03-13 15:09:19\"},{\"name\":\"20221209-DSC_6518.jpg\",\"id\":\"1ovGZavUJhmvwYbg9NWfhqFX-tqVEC1i-\",\"datetime\":\"2025-03-13 15:09:23\"},{\"name\":\"20221209-DSC_6520-Edit.jpg\",\"id\":\"11_6pou2wmGvef1P0wkvRLucH_U_N18Qw\",\"datetime\":\"2025-03-13 15:09:28\"},{\"name\":\"20221209-DSC_6524.jpg\",\"id\":\"1JtwyTxHKqgkW7PYZnGMh-uY5UvjoDs0D\",\"datetime\":\"2025-03-13 15:09:33\"},{\"name\":\"20221209-DSC_6534.jpg\",\"id\":\"1MgEl7-_0RydaBSvoTb4BckdSid27COoK\",\"datetime\":\"2025-03-13 15:09:38\"},{\"name\":\"20221209-DSC_6595.jpg\",\"id\":\"1P4xRADJ74s9v9eDgIQoG9x2u1tfStWV-\",\"datetime\":\"2025-03-13 15:09:45\"},{\"name\":\"20221209-DSC_6611-Edit.jpg\",\"id\":\"1UjUBZb2BbZOi91eXxt2v_cYQeuBSJTLX\",\"datetime\":\"2025-03-13 15:09:50\"},{\"name\":\"20221209-DSC_6619.jpg\",\"id\":\"1JGgl2xxO0o75EaeIFJW-GmK0QjgtXS9R\",\"datetime\":\"2025-03-13 15:09:54\"},{\"name\":\"20221209-DSC_6668-Edit.jpg\",\"id\":\"1i_-tpf03hVb__tiHJtdjoMQ6jSGHAbjb\",\"datetime\":\"2025-03-13 15:09:59\"},{\"name\":\"20221209-DSC_6674-Edit.jpg\",\"id\":\"1ONw-uriWKe8yf0gGc3CdjE0JsJ1Rd7Kd\",\"datetime\":\"2025-03-13 15:10:04\"},{\"name\":\"20221209-DSC_6687-Edit.jpg\",\"id\":\"100jZWpwny8b3gkdVG1FWlTFmTJ5U_751\",\"datetime\":\"2025-03-13 15:10:08\"},{\"name\":\"20221209-DSC_6701.jpg\",\"id\":\"1Lfwn_bpCYSMQRyM2qJZsc3r2FEpGV-IZ\",\"datetime\":\"2025-03-13 15:15:59\"},{\"name\":\"20221210-DSC_6733.jpg\",\"id\":\"16G4p3Bmyc_K4TcQk6jB-lq9mtaZShJhu\",\"datetime\":\"2025-03-13 15:16:04\"},{\"name\":\"20221210-DSC_6770-Edit.jpg\",\"id\":\"1nk8g8emI8NSb82NAHcZeGPXyX2xS92Nk\",\"datetime\":\"2025-03-13 15:16:08\"},{\"name\":\"20221210-DSC_6776.jpg\",\"id\":\"1JfHMgAQX_vEtfk2IcAtGkvJHgfOIwyZc\",\"datetime\":\"2025-03-13 15:16:13\"},{\"name\":\"20221210-DSC_6823-Edit.jpg\",\"id\":\"1y8HWdRGUECxY436aIDrHQncp6jLBXG45\",\"datetime\":\"2025-03-13 15:16:19\"},{\"name\":\"20230107-DSC_7372.jpg\",\"id\":\"1dbI5zAJ-Kx8K_jP8zWXxYt4JSJmaF3hj\",\"datetime\":\"2025-03-13 15:16:24\"},{\"name\":\"20230107-DSC_7383-Edit.jpg\",\"id\":\"1l0yk1uB8-cD4RjV_56c2Ajkw0qPA62AD\",\"datetime\":\"2025-03-13 15:16:29\"},{\"name\":\"20230107-DSC_7404.jpg\",\"id\":\"16rTnYs3ZB8052k7J8-TD4vteAaXTmxmh\",\"datetime\":\"2025-03-13 15:16:34\"},{\"name\":\"20230107-DSC_7414.jpg\",\"id\":\"1Q2Q8JwyRlPj0t1rWVSy63vwuzZO6YvIc\",\"datetime\":\"2025-03-13 15:16:38\"},{\"name\":\"20230107-DSC_7420.jpg\",\"id\":\"1pvDFWQM_AWEzX7EjUQAyYMNNe0J_2ZLU\",\"datetime\":\"2025-03-13 15:16:44\"},{\"name\":\"20230107-DSC_7430.jpg\",\"id\":\"1Sfl2QwpVOkNoSm3aRtAYYEetWAcT1yrU\",\"datetime\":\"2025-03-13 15:16:48\"},{\"name\":\"20230107-DSC_7436.jpg\",\"id\":\"1cInlySu8gAm6m8wdmoXABKVweQE8vlr6\",\"datetime\":\"2025-03-13 15:16:53\"},{\"name\":\"20230107-DSC_7461-Edit.jpg\",\"id\":\"1cG5est2JnDqeCZR0lJCT3QeRVOHw3Lcm\",\"datetime\":\"2025-03-13 15:16:58\"},{\"name\":\"20230107-DSC_7471.jpg\",\"id\":\"1GJcWTgIQiSklWl4z0QqnmluOoUO5NeeR\",\"datetime\":\"2025-03-13 15:17:05\"},{\"name\":\"20230107-DSC_7477.jpg\",\"id\":\"1LMimA4ZnjbqLB56jFBJd3vw_t9D6cCRL\",\"datetime\":\"2025-03-13 15:17:09\"},{\"name\":\"20230107-DSC_7499.jpg\",\"id\":\"1TIY5JEuudZo5tf05ec0pNQUzH0JO4UUU\",\"datetime\":\"2025-03-13 15:17:14\"},{\"name\":\"20230107-DSC_7512.jpg\",\"id\":\"1W1sB1IXKYcOcfcNtzQiUMFs955zoWlPX\",\"datetime\":\"2025-03-13 15:17:19\"},{\"name\":\"20230107-DSC_7519.jpg\",\"id\":\"1ivk7BYP7G0VVhA0GF2GoUKSQaaP0AZhD\",\"datetime\":\"2025-03-13 15:17:23\"},{\"name\":\"20230107-DSC_7528.jpg\",\"id\":\"1ZtzNSjRagbhqXnrcQPnsDY872dSeHIgt\",\"datetime\":\"2025-03-13 15:17:28\"},{\"name\":\"AAV 400M1.jpg\",\"id\":\"1K-UBl6Y8un-SoV_4dLO2x-9Le9WwOjfa\",\"datetime\":\"2025-03-13 15:17:34\"},{\"name\":\"Ayala Alabang 400M AB622 (5).jpg\",\"id\":\"1kL1GLUumukV-wRSlb8fg96LbP-1aJW4C\",\"datetime\":\"2025-03-13 15:18:13\"},{\"name\":\"AAV 400M4.jpg\",\"id\":\"1dEZ1jYlmKudgwRyG3J1oMPdLFr507An3\",\"datetime\":\"2025-03-13 15:18:17\"}]', '2025-03-12 14:56:02', '2025-03-17 09:45:35'),
(10, 1, 'Prime Mixed-Use Property', '203,200,000 (VAT Inclusive)', 'Dasmariñas Technopark, Dasmariñas City, Cavite', '3', 'Building', '4', 'Building for Sale', '', '', '3,000 sqm', '', '', '26 Slots', 'Multi-Functional Space – Includes two warehouse buildings with a dock bay, office spaces, commercial areas, and residential options.\nFully Equipped – Comes with a generator set for a reliable power supply.\nModern Infrastructure – Designed for mixed-use purposes, ensuring versatility.\nAmple Parking – 26 dedicated parking slots for convenience.\nElevator Access – Enhancing accessibility across floors.', 'Prime Location – Situated in Dasmariñas Technopark, a premier business hub.\nGreat Investment Opportunity – Generates steady rental income from existing tenants.\nVersatile & High-Value – Ideal for businesses, warehouses, and commercial operations.\n Strategic Accessibility – Designed to accommodate diverse business needs efficiently.', '[{\"name\":\"Frontage.jpg\",\"id\":\"1_i7yLNeJU7YraWy8yTOjmL8rlGVph1pK\",\"datetime\":\"2025-03-13 14:34:44\"}]', '2025-03-13 14:34:33', '2025-03-17 09:47:27'),
(11, 1, 'Prime Southwoods Commercial Lot', '80,000,000 (P100,000/sqm)', 'Binan City', '5', 'Lot', '2', 'Available', '', '', '800 sqm', '', '', '', '', 'Strategic location in Southwoods, Binan City\nIdeal for commercial developments such as offices, retail spaces, or mixed-use projects\nHigh foot traffic area with strong business potential\nCompetitive price in a growing commercial hub\nOnly P100,000 to reserve', '[{\"name\":\"property-3.png\",\"id\":\"1eh0UCjmrvcES2GwOi7IWS1PlvbJq86uj\",\"datetime\":\"2025-03-13 14:38:39\"}]', '2025-03-13 14:38:32', '2025-03-17 07:31:42'),
(12, 1, 'Premium Fully Furnished Office Floor in Ortigas Center', '165,000,000', 'Wack-Wack Greenhills, Metro Manila near MRT-3 Ortigas', '3', 'Building', '6', 'Commercial for Sale', '', '', '1,110.38 sqm', '', '', '', ' Workstations: Over 311\nReception Area: 1\nConference Rooms: 3\nPantry Areas: 2\nTraining Rooms: 2\nParking Slots: 6', 'Ready-to-use office space, ideal for immediate business operations\nExceptional value for investors seeking to own an entire floor in Ortigas Center\nFully furnished with modern infrastructure: biometric system, CCTV, fiber optic internet, air conditioning system, and power backup generators\nIncludes a boardroom for executive meetings\n24/7 operations allowed\nOpportunity to lease to one or multiple clients', '[{\"name\":\"property-4-a.png\",\"id\":\"19TDpRpXrS5qIrARm2tPH7DZUp6Xj_p67\",\"datetime\":\"2025-03-13 14:42:22\"},{\"name\":\"property-4-b.png\",\"id\":\"1zoKbrFCKM20MTcXbzmgoTc1hoG-WZFdz\",\"datetime\":\"2025-03-13 14:42:25\"},{\"name\":\"property-4-c.png\",\"id\":\"1_XKqgQItmCs09SM69dyw6fAGOIX5JAf8\",\"datetime\":\"2025-03-13 14:42:33\"},{\"name\":\"property-4-d.png\",\"id\":\"1pWcwwMH9oyirNqP012791HbxCcGW6aHf\",\"datetime\":\"2025-03-13 14:42:37\"},{\"name\":\"property-4-e.png\",\"id\":\"1hHOp_83dRdZlq3C05iiBKFyok4IuFRmc\",\"datetime\":\"2025-03-13 14:42:42\"},{\"name\":\"property-4-f.png\",\"id\":\"11ZENsxuOYaogBwVUxeTWt9p_n4MVLon7\",\"datetime\":\"2025-03-13 14:42:46\"},{\"name\":\"property-4.png\",\"id\":\"12kgfqjokMkl2ytTSZFF48uvolPA_EZGD\",\"datetime\":\"2025-03-13 14:42:52\"}]', '2025-03-13 14:42:16', '2025-03-13 14:42:16'),
(13, 1, 'Prime Lot in Better Living, Parañaque', '22,230,000 (₱39,000/sqm)', 'Better Living Subdivision, Levitown Executive Village Near Eurocampus', '5', 'Lot', '2', 'Available', '', '', '570 sqm', '', '', '', '', 'Exclusive community with ample security\nWide roads for a spacious and convenient environment\nPeaceful and relaxing residential setting\nIdeal for building your dream home or investment property', '[{\"name\":\"property-5.png\",\"id\":\"1PwjppociKlNOhsLr5m1vaRFD_npKAn1M\",\"datetime\":\"2025-03-13 14:47:37\"},{\"name\":\"property-5-a.png\",\"id\":\"1oYgJDTEzILvwUTiz1-EGQAPFnNUrWhcl\",\"datetime\":\"2025-03-13 14:47:43\"},{\"name\":\"property-5-b.png\",\"id\":\"1CMI7ZH-6y7vDzsIstBh3HhclJm55O1Ad\",\"datetime\":\"2025-03-13 14:47:47\"}]', '2025-03-13 14:47:33', '2025-03-13 14:47:33');

-- --------------------------------------------------------

--
-- Table structure for table `zapv1_property_status`
--

CREATE TABLE `zapv1_property_status` (
  `property_status_aid` int(11) NOT NULL,
  `property_status_is_active` tinyint(1) NOT NULL,
  `property_status_name` varchar(200) NOT NULL,
  `property_status_description` text NOT NULL,
  `property_status_created` datetime NOT NULL,
  `property_status_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zapv1_property_status`
--

INSERT INTO `zapv1_property_status` (`property_status_aid`, `property_status_is_active`, `property_status_name`, `property_status_description`, `property_status_created`, `property_status_datetime`) VALUES
(2, 1, 'Available', '', '2025-03-12 13:05:41', '2025-03-12 13:05:41'),
(3, 1, 'Building for Lease', '', '2025-03-12 13:05:59', '2025-03-12 13:05:59'),
(4, 1, 'Building for Sale', '', '2025-03-12 13:06:08', '2025-03-12 13:06:08'),
(5, 1, 'Commercial for Lease', '', '2025-03-12 13:06:22', '2025-03-12 13:06:22'),
(6, 1, 'Commercial for Sale', '', '2025-03-12 13:06:36', '2025-03-12 13:06:36'),
(7, 1, 'Condominium for Lease', '', '2025-03-12 13:06:59', '2025-03-12 13:06:59'),
(8, 1, 'Condominium for Sale', '', '2025-03-12 13:07:18', '2025-03-12 13:07:18'),
(9, 1, 'Farm for Sale', '', '2025-03-12 13:07:31', '2025-03-12 13:07:31'),
(10, 1, 'For Sale', '', '2025-03-12 13:07:39', '2025-03-12 13:07:39'),
(11, 1, 'For Rent', '', '2025-03-12 13:07:50', '2025-03-12 13:07:50'),
(12, 1, 'House for Lease', '', '2025-03-12 13:08:01', '2025-03-12 13:08:01'),
(13, 1, 'House for Sale', '', '2025-03-12 13:08:07', '2025-03-12 13:08:07'),
(14, 1, 'Lease Out', '', '2025-03-12 13:08:17', '2025-03-12 13:08:17'),
(15, 1, 'Reserved', '', '2025-03-12 13:08:24', '2025-03-12 13:08:24'),
(16, 1, 'Sold', '', '2025-03-12 13:08:31', '2025-03-12 13:08:31'),
(17, 1, 'Vacant Lot for Sale', '', '2025-03-12 13:08:50', '2025-03-12 13:08:55'),
(18, 1, 'Vacant Lot for Lease', '', '2025-03-12 13:09:09', '2025-03-12 13:09:09'),
(19, 1, 'Warehouse for Lease', '', '2025-03-12 13:09:21', '2025-03-12 13:09:21'),
(20, 1, 'Warehouse for Sale', '', '2025-03-12 13:09:31', '2025-03-12 13:09:31');

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
(1, 1, 'House', 'House with 4 bedrooms', '2025-03-04 07:55:51', '2025-03-07 12:28:37'),
(2, 1, 'Luxurious House and Lot', 'Private Swimming Pool', '2025-03-04 13:07:10', '2025-03-04 13:07:10'),
(3, 1, 'Building', '3 storey', '2025-03-05 07:22:57', '2025-03-05 07:22:57'),
(5, 1, 'Lot', 'Lot', '2025-03-13 14:35:51', '2025-03-13 14:35:51');

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
(1, 1, 'Louren Isobel', 'Rubico', 'louren.rubico@frontlinebusiness.com.ph', '', 1, '', '$2y$10$fpNSFx5u/8I7xM9TJjIRputnvjfdEnkp5FweHoG.Qh1xIy4t24Nzq', '2025-03-03 01:15:30', '0000-00-00 00:00:00'),
(2, 1, 'Emman', 'Manalo', 'lourenisobel18@gmail.com', '', 1, '', '$2y$10$Wl2qictT.UMx4O/vgfwj/O0NAYBPp3haJzJmmoCKxTCwkbeQ/neFG', '2025-03-13 09:58:26', '2025-03-13 10:16:43');

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
-- Indexes for table `zapv1_blogs`
--
ALTER TABLE `zapv1_blogs`
  ADD PRIMARY KEY (`blogs_aid`);

--
-- Indexes for table `zapv1_colors`
--
ALTER TABLE `zapv1_colors`
  ADD PRIMARY KEY (`colors_aid`);

--
-- Indexes for table `zapv1_contact_form`
--
ALTER TABLE `zapv1_contact_form`
  ADD PRIMARY KEY (`form_aid`);

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
-- Indexes for table `zapv1_notification`
--
ALTER TABLE `zapv1_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- Indexes for table `zapv1_property_list`
--
ALTER TABLE `zapv1_property_list`
  ADD PRIMARY KEY (`list_aid`);

--
-- Indexes for table `zapv1_property_status`
--
ALTER TABLE `zapv1_property_status`
  ADD PRIMARY KEY (`property_status_aid`);

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
-- AUTO_INCREMENT for table `zapv1_blogs`
--
ALTER TABLE `zapv1_blogs`
  MODIFY `blogs_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `zapv1_colors`
--
ALTER TABLE `zapv1_colors`
  MODIFY `colors_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `zapv1_contact_form`
--
ALTER TABLE `zapv1_contact_form`
  MODIFY `form_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `zapv1_header_banner`
--
ALTER TABLE `zapv1_header_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `zapv1_header_contact_no`
--
ALTER TABLE `zapv1_header_contact_no`
  MODIFY `contact_no_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `zapv1_header_links`
--
ALTER TABLE `zapv1_header_links`
  MODIFY `links_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `zapv1_header_logo`
--
ALTER TABLE `zapv1_header_logo`
  MODIFY `logo_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `zapv1_notification`
--
ALTER TABLE `zapv1_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `zapv1_property_list`
--
ALTER TABLE `zapv1_property_list`
  MODIFY `list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `zapv1_property_status`
--
ALTER TABLE `zapv1_property_status`
  MODIFY `property_status_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `zapv1_property_type`
--
ALTER TABLE `zapv1_property_type`
  MODIFY `property_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `zapv1_settings_role`
--
ALTER TABLE `zapv1_settings_role`
  MODIFY `role_aid` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `zapv1_settings_users`
--
ALTER TABLE `zapv1_settings_users`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `zapv1_testimonial`
--
ALTER TABLE `zapv1_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
