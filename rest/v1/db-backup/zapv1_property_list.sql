-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2025 at 09:45 AM
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
  `list_city` text NOT NULL,
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

INSERT INTO `zapv1_property_list` (`list_aid`, `list_is_active`, `list_name`, `list_price`, `list_location`, `list_city`, `list_property_type_id`, `list_property_type_name`, `list_property_status_id`, `list_property_status_name`, `list_id`, `list_floor_area`, `list_lot_area`, `list_bedrooms`, `list_bathrooms`, `list_carport`, `list_key_features`, `list_best_buy`, `list_img`, `list_created`, `list_datetime`) VALUES
(8, 1, 'Luxurious House and Lot in Ayala Alabang Village Lakeside Evozone, Nuvali Prime Mixed-Use Lot', '400M (Negotiable)', 'New Alabang Village, Metro Manila', 'City of Batac', '2', 'Luxurious House and Lot', '2', 'Available', '', '1,043.63 sqm', '558 sqm', '4', '3 on the 2nd floor, 1 on the 3rd floor', '4-6', 'Separate dressing room (3rd floor)\nServer room (3rd floor)\nGround Floor:\nGym area, lanai area, main kitchen, dining area\nBasement:\nSauna, storage, kitchen, maid\'s and driver\'s rooms, laundry\n', 'Private pool\nFully furnished with Roche Bobois furniture\n', '[{\"name\":\"20221125-DSC_5382.jpg\",\"id\":\"14LRntchjng1yb5pEDSjboKu8GRXBKn8c\",\"datetime\":\"2025-03-12 14:56:07\"},{\"name\":\"20221125-DSC_5492.jpg\",\"id\":\"1iPKLz4G9-Lw4v58GMj4_e-UUbhZJI78l\",\"datetime\":\"2025-03-13 15:03:16\"},{\"name\":\"20221125-DSC_5627-Edit.jpg\",\"id\":\"1h9PRQKln1yjTylzSWjacb8BBT0B_fI0Y\",\"datetime\":\"2025-03-13 15:03:23\"},{\"name\":\"20221125-DSC_5774.jpg\",\"id\":\"1GfC7iz7AXGxOTscE1hbMyPYvIiHsoSxh\",\"datetime\":\"2025-03-13 15:03:28\"},{\"name\":\"20221125-DSC_5823.jpg\",\"id\":\"1WYr8FU0VN4MH-r3y5GENoVXuRocMiDQ3\",\"datetime\":\"2025-03-13 15:03:33\"},{\"name\":\"20221125-DSC_5832.jpg\",\"id\":\"1CFEGbqaZNSxT5KxQreqeoLjtx-XonocJ\",\"datetime\":\"2025-03-13 15:03:38\"},{\"name\":\"20221125-DSC_5837.jpg\",\"id\":\"1qSPxEQHHNOmGaSmGIVZDfhQYjDstWUqX\",\"datetime\":\"2025-03-13 15:03:43\"},{\"name\":\"20221125-DSC_5840.jpg\",\"id\":\"1UEM3ZxIVGE3podC5eM4mGwSXoYDa1Msy\",\"datetime\":\"2025-03-13 15:03:47\"},{\"name\":\"20221125-DSC_5850.jpg\",\"id\":\"1tqKJC8Wd6aIFpl2MkytZZiDhSE1_U9PQ\",\"datetime\":\"2025-03-13 15:03:53\"},{\"name\":\"20221125-DSC_5871.jpg\",\"id\":\"1daF4IG1elO3_WeN9j2IGy8duCPsHT1eX\",\"datetime\":\"2025-03-13 15:03:57\"},{\"name\":\"20221125-DSC_5957.jpg\",\"id\":\"1JQ0Gx1qfHmOqM7SjkzJ-MkVnEG_IjG1R\",\"datetime\":\"2025-03-13 15:04:03\"},{\"name\":\"20221125-DSC_5959.jpg\",\"id\":\"1FF2nYgFER3eUeaERaw91ai1M-6JmWYxl\",\"datetime\":\"2025-03-13 15:04:07\"},{\"name\":\"20221126-DSC_5986.jpg\",\"id\":\"1672oB47Fto4NsQo4dyOFSHBS7izxBADQ\",\"datetime\":\"2025-03-13 15:04:14\"},{\"name\":\"20221126-DSC_5987.jpg\",\"id\":\"10MW4uOzcOQ8NcMZGVzQQWEPatGm2MhXe\",\"datetime\":\"2025-03-13 15:04:18\"},{\"name\":\"20221126-DSC_5988.jpg\",\"id\":\"1FHKAQLfAUiA0fiNfpmVprRvFn6DKM0s7\",\"datetime\":\"2025-03-13 15:04:27\"},{\"name\":\"20221127-DSC_6085-Edit.jpg\",\"id\":\"13Rq_3Bv588oCdBc7rIpddGi9lz-gom4e\",\"datetime\":\"2025-03-13 15:04:33\"},{\"name\":\"20221127-DSC_6087.jpg\",\"id\":\"13uo_wP5gcZADzl6VibD-GVZNVwzuYH2v\",\"datetime\":\"2025-03-13 15:04:37\"},{\"name\":\"20221127-DSC_6094.jpg\",\"id\":\"1Zqz4kVT5WbeO5EdwJOmsXzC1QxKjZLt1\",\"datetime\":\"2025-03-13 15:04:43\"},{\"name\":\"20221127-DSC_6114.jpg\",\"id\":\"1Qt7TlHkKXsF960_8AYY5P_hTZXarbrHu\",\"datetime\":\"2025-03-13 15:04:47\"},{\"name\":\"20221127-DSC_6125.jpg\",\"id\":\"17CVf_hIagjWiLGA4Bm8P3X-EbNds7AUt\",\"datetime\":\"2025-03-13 15:04:53\"},{\"name\":\"20221127-DSC_6128.jpg\",\"id\":\"1rbC6NGyJ5YtPK0zOluVCpl27Ld7cmwyY\",\"datetime\":\"2025-03-13 15:04:58\"},{\"name\":\"20221127-DSC_6133.jpg\",\"id\":\"1-G1DR2Rfi4oPQRNE56IDxKX0poEKNsmF\",\"datetime\":\"2025-03-13 15:08:33\"},{\"name\":\"20221127-DSC_6145.jpg\",\"id\":\"1GCYbFJRTiB5ni190NZTUPCewS_Z9L80w\",\"datetime\":\"2025-03-13 15:08:37\"},{\"name\":\"20221127-DSC_6153.jpg\",\"id\":\"1ZaaRPM0jL27NWuYt1Wj2AeCMimwwD5nD\",\"datetime\":\"2025-03-13 15:08:44\"},{\"name\":\"20221127-DSC_6157.jpg\",\"id\":\"1sVjhbUMfVetaKWPL-GJaysqkAlJ9_KES\",\"datetime\":\"2025-03-13 15:08:48\"},{\"name\":\"20221127-DSC_6226.jpg\",\"id\":\"1QBYRjAT2KobrfLyzGhj-6CPsrTf7ySnQ\",\"datetime\":\"2025-03-13 15:08:54\"},{\"name\":\"20221127-DSC_6332.jpg\",\"id\":\"1YAwjb1LjpGm_CaOMWfOZRoYSynQBL4yE\",\"datetime\":\"2025-03-13 15:08:58\"},{\"name\":\"20221127-DSC_6334.jpg\",\"id\":\"11n0EoCmJekycpa7ay0VAcAAZAlPhjlDe\",\"datetime\":\"2025-03-13 15:09:04\"},{\"name\":\"20221127-DSC_6339.jpg\",\"id\":\"1jB3_u4m-y2vkRAJqZjH0ReWSdMUz36EL\",\"datetime\":\"2025-03-13 15:09:09\"},{\"name\":\"20221127-DSC_6360.jpg\",\"id\":\"1coaCz1wGHC6KW7JboncILb-fwMNlzTow\",\"datetime\":\"2025-03-13 15:09:13\"},{\"name\":\"20221202-DSC_6447.jpg\",\"id\":\"1Byr1x31TvVHPZUIBbMO58LqmkIgedcXJ\",\"datetime\":\"2025-03-13 15:09:19\"},{\"name\":\"20221209-DSC_6518.jpg\",\"id\":\"1ovGZavUJhmvwYbg9NWfhqFX-tqVEC1i-\",\"datetime\":\"2025-03-13 15:09:23\"},{\"name\":\"20221209-DSC_6520-Edit.jpg\",\"id\":\"11_6pou2wmGvef1P0wkvRLucH_U_N18Qw\",\"datetime\":\"2025-03-13 15:09:28\"},{\"name\":\"20221209-DSC_6524.jpg\",\"id\":\"1JtwyTxHKqgkW7PYZnGMh-uY5UvjoDs0D\",\"datetime\":\"2025-03-13 15:09:33\"},{\"name\":\"20221209-DSC_6534.jpg\",\"id\":\"1MgEl7-_0RydaBSvoTb4BckdSid27COoK\",\"datetime\":\"2025-03-13 15:09:38\"},{\"name\":\"20221209-DSC_6595.jpg\",\"id\":\"1P4xRADJ74s9v9eDgIQoG9x2u1tfStWV-\",\"datetime\":\"2025-03-13 15:09:45\"},{\"name\":\"20221209-DSC_6611-Edit.jpg\",\"id\":\"1UjUBZb2BbZOi91eXxt2v_cYQeuBSJTLX\",\"datetime\":\"2025-03-13 15:09:50\"},{\"name\":\"20221209-DSC_6619.jpg\",\"id\":\"1JGgl2xxO0o75EaeIFJW-GmK0QjgtXS9R\",\"datetime\":\"2025-03-13 15:09:54\"},{\"name\":\"20221209-DSC_6668-Edit.jpg\",\"id\":\"1i_-tpf03hVb__tiHJtdjoMQ6jSGHAbjb\",\"datetime\":\"2025-03-13 15:09:59\"},{\"name\":\"20221209-DSC_6674-Edit.jpg\",\"id\":\"1ONw-uriWKe8yf0gGc3CdjE0JsJ1Rd7Kd\",\"datetime\":\"2025-03-13 15:10:04\"},{\"name\":\"20221209-DSC_6687-Edit.jpg\",\"id\":\"100jZWpwny8b3gkdVG1FWlTFmTJ5U_751\",\"datetime\":\"2025-03-13 15:10:08\"},{\"name\":\"20221209-DSC_6701.jpg\",\"id\":\"1Lfwn_bpCYSMQRyM2qJZsc3r2FEpGV-IZ\",\"datetime\":\"2025-03-13 15:15:59\"},{\"name\":\"20221210-DSC_6733.jpg\",\"id\":\"16G4p3Bmyc_K4TcQk6jB-lq9mtaZShJhu\",\"datetime\":\"2025-03-13 15:16:04\"},{\"name\":\"20221210-DSC_6770-Edit.jpg\",\"id\":\"1nk8g8emI8NSb82NAHcZeGPXyX2xS92Nk\",\"datetime\":\"2025-03-13 15:16:08\"},{\"name\":\"20221210-DSC_6776.jpg\",\"id\":\"1JfHMgAQX_vEtfk2IcAtGkvJHgfOIwyZc\",\"datetime\":\"2025-03-13 15:16:13\"},{\"name\":\"20221210-DSC_6823-Edit.jpg\",\"id\":\"1y8HWdRGUECxY436aIDrHQncp6jLBXG45\",\"datetime\":\"2025-03-13 15:16:19\"},{\"name\":\"20230107-DSC_7372.jpg\",\"id\":\"1dbI5zAJ-Kx8K_jP8zWXxYt4JSJmaF3hj\",\"datetime\":\"2025-03-13 15:16:24\"},{\"name\":\"20230107-DSC_7383-Edit.jpg\",\"id\":\"1l0yk1uB8-cD4RjV_56c2Ajkw0qPA62AD\",\"datetime\":\"2025-03-13 15:16:29\"},{\"name\":\"20230107-DSC_7404.jpg\",\"id\":\"16rTnYs3ZB8052k7J8-TD4vteAaXTmxmh\",\"datetime\":\"2025-03-13 15:16:34\"},{\"name\":\"20230107-DSC_7414.jpg\",\"id\":\"1Q2Q8JwyRlPj0t1rWVSy63vwuzZO6YvIc\",\"datetime\":\"2025-03-13 15:16:38\"},{\"name\":\"20230107-DSC_7420.jpg\",\"id\":\"1pvDFWQM_AWEzX7EjUQAyYMNNe0J_2ZLU\",\"datetime\":\"2025-03-13 15:16:44\"},{\"name\":\"20230107-DSC_7430.jpg\",\"id\":\"1Sfl2QwpVOkNoSm3aRtAYYEetWAcT1yrU\",\"datetime\":\"2025-03-13 15:16:48\"},{\"name\":\"20230107-DSC_7436.jpg\",\"id\":\"1cInlySu8gAm6m8wdmoXABKVweQE8vlr6\",\"datetime\":\"2025-03-13 15:16:53\"},{\"name\":\"20230107-DSC_7461-Edit.jpg\",\"id\":\"1cG5est2JnDqeCZR0lJCT3QeRVOHw3Lcm\",\"datetime\":\"2025-03-13 15:16:58\"},{\"name\":\"20230107-DSC_7471.jpg\",\"id\":\"1GJcWTgIQiSklWl4z0QqnmluOoUO5NeeR\",\"datetime\":\"2025-03-13 15:17:05\"},{\"name\":\"20230107-DSC_7477.jpg\",\"id\":\"1LMimA4ZnjbqLB56jFBJd3vw_t9D6cCRL\",\"datetime\":\"2025-03-13 15:17:09\"},{\"name\":\"20230107-DSC_7499.jpg\",\"id\":\"1TIY5JEuudZo5tf05ec0pNQUzH0JO4UUU\",\"datetime\":\"2025-03-13 15:17:14\"},{\"name\":\"20230107-DSC_7512.jpg\",\"id\":\"1W1sB1IXKYcOcfcNtzQiUMFs955zoWlPX\",\"datetime\":\"2025-03-13 15:17:19\"},{\"name\":\"20230107-DSC_7519.jpg\",\"id\":\"1ivk7BYP7G0VVhA0GF2GoUKSQaaP0AZhD\",\"datetime\":\"2025-03-13 15:17:23\"},{\"name\":\"20230107-DSC_7528.jpg\",\"id\":\"1ZtzNSjRagbhqXnrcQPnsDY872dSeHIgt\",\"datetime\":\"2025-03-13 15:17:28\"},{\"name\":\"AAV 400M1.jpg\",\"id\":\"1K-UBl6Y8un-SoV_4dLO2x-9Le9WwOjfa\",\"datetime\":\"2025-03-13 15:17:34\"},{\"name\":\"Ayala Alabang 400M AB622 (5).jpg\",\"id\":\"1kL1GLUumukV-wRSlb8fg96LbP-1aJW4C\",\"datetime\":\"2025-03-13 15:18:13\"},{\"name\":\"AAV 400M4.jpg\",\"id\":\"1dEZ1jYlmKudgwRyG3J1oMPdLFr507An3\",\"datetime\":\"2025-03-13 15:18:17\"}]', '2025-03-12 14:56:02', '2025-04-23 12:18:06'),
(10, 1, 'Prime Mixed-Use Property', '203,200,000 (VAT Inclusive)', 'Dasmariñas Technopark, Dasmariñas City, Cavite', '', '3', 'Building', '4', 'Building for Sale', '', '', '3,000 sqm', '', '', '', 'Multi-Functional Space – Includes two warehouse buildings with a dock bay, office spaces, commercial areas, and residential options.\nFully Equipped – Comes with a generator set for a reliable power supply.\nModern Infrastructure – Designed for mixed-use purposes, ensuring versatility.\nAmple Parking – 26 dedicated parking slots for convenience.\nElevator Access – Enhancing accessibility across floors.', 'Prime Location – Situated in Dasmariñas Technopark, a premier business hub.\nGreat Investment Opportunity – Generates steady rental income from existing tenants.\nVersatile & High-Value – Ideal for businesses, warehouses, and commercial operations.\n Strategic Accessibility – Designed to accommodate diverse business needs efficiently.', '[{\"name\":\"Frontage.jpg\",\"id\":\"1_i7yLNeJU7YraWy8yTOjmL8rlGVph1pK\",\"datetime\":\"2025-03-13 14:34:44\"}]', '2025-03-13 14:34:33', '2025-03-13 14:34:33'),
(11, 1, 'Prime Southwoods Commercial Lot', '80,000,000 (P100,000/sqm)', 'Binan City', '', '5', 'Lot', '17', 'Vacant Lot for Sale', '', '', '800 sqm', '', '', '', '', 'Strategic location in Southwoods, Binan City\nIdeal for commercial developments such as offices, retail spaces, or mixed-use projects\nHigh foot traffic area with strong business potential\nCompetitive price in a growing commercial hub\nOnly P100,000 to reserve', '[{\"name\":\"property-3.png\",\"id\":\"1eh0UCjmrvcES2GwOi7IWS1PlvbJq86uj\",\"datetime\":\"2025-03-13 14:38:39\"}]', '2025-03-13 14:38:32', '2025-03-13 14:38:32'),
(12, 1, 'Premium Fully Furnished Office Floor in Ortigas Center', '165,000,000', 'Wack-Wack Greenhills, Metro Manila near MRT-3 Ortigas', 'City of Batac', '3', 'Building', '6', 'Commercial for Sale', '', '', '1,110.38 sqm', '', '', '', ' Workstations: Over 311\nReception Area: 1\nConference Rooms: 3\nPantry Areas: 2\nTraining Rooms: 2\nParking Slots: 6', 'Ready-to-use office space, ideal for immediate business operations\nExceptional value for investors seeking to own an entire floor in Ortigas Center\nFully furnished with modern infrastructure: biometric system, CCTV, fiber optic internet, air conditioning system, and power backup generators\nIncludes a boardroom for executive meetings\n24/7 operations allowed\nOpportunity to lease to one or multiple clients', '[{\"name\":\"property-4-a.png\",\"id\":\"19TDpRpXrS5qIrARm2tPH7DZUp6Xj_p67\",\"datetime\":\"2025-03-13 14:42:22\"},{\"name\":\"property-4-b.png\",\"id\":\"1zoKbrFCKM20MTcXbzmgoTc1hoG-WZFdz\",\"datetime\":\"2025-03-13 14:42:25\"},{\"name\":\"property-4-c.png\",\"id\":\"1_XKqgQItmCs09SM69dyw6fAGOIX5JAf8\",\"datetime\":\"2025-03-13 14:42:33\"},{\"name\":\"property-4-d.png\",\"id\":\"1pWcwwMH9oyirNqP012791HbxCcGW6aHf\",\"datetime\":\"2025-03-13 14:42:37\"},{\"name\":\"property-4-e.png\",\"id\":\"1hHOp_83dRdZlq3C05iiBKFyok4IuFRmc\",\"datetime\":\"2025-03-13 14:42:42\"},{\"name\":\"property-4-f.png\",\"id\":\"11ZENsxuOYaogBwVUxeTWt9p_n4MVLon7\",\"datetime\":\"2025-03-13 14:42:46\"},{\"name\":\"property-4.png\",\"id\":\"12kgfqjokMkl2ytTSZFF48uvolPA_EZGD\",\"datetime\":\"2025-03-13 14:42:52\"}]', '2025-03-13 14:42:16', '2025-04-10 08:44:52'),
(13, 1, 'Prime Lot in Better Living, Parañaque', '22,230,000 (₱39,000/sqm)', 'Better Living Subdivision, Levitown Executive Village Near Eurocampus', 'Batangas City', '5', 'Lot', '2', 'Available', '', '', '570 sqm', '', '', '', '', 'Exclusive community with ample security\nWide roads for a spacious and convenient environment\nPeaceful and relaxing residential setting\nIdeal for building your dream home or investment property', '[{\"name\":\"property-5.png\",\"id\":\"1PwjppociKlNOhsLr5m1vaRFD_npKAn1M\",\"datetime\":\"2025-03-13 14:47:37\"},{\"name\":\"property-5-a.png\",\"id\":\"1oYgJDTEzILvwUTiz1-EGQAPFnNUrWhcl\",\"datetime\":\"2025-03-13 14:47:43\"},{\"name\":\"property-5-b.png\",\"id\":\"1CMI7ZH-6y7vDzsIstBh3HhclJm55O1Ad\",\"datetime\":\"2025-03-13 14:47:47\"}]', '2025-03-13 14:47:33', '2025-05-06 13:05:02'),
(14, 1, 'Test Building', '900000', 'Dolores', '', '3', 'Building', '2', 'Available', '', '', '', '', '', '', '', '', '[{\"name\":\"20221125-DSC_5774.jpg\",\"id\":\"1cAWVj_-rHxdq_YmF004bXDWrFyHJ3ykm\",\"datetime\":\"2025-03-19 07:36:30\"}]', '2025-03-19 07:36:22', '2025-03-19 14:27:42'),
(15, 1, 'Lakeside Evozone, Nuvali Prime Mixed-Use Lot', '46,955,244.   (P33,708/sqm)', 'Dolores, Quezon', '', '1', 'House', '4', 'Building for Sale', 'F 0125', '', '1,393 sqm.', '', '', '', 'Two adjacent lots\n\n701 sqm — ₱23,629,308\n1,393 sqm — ₱46,955,244\n\nTotal Lot Area: 2,094 sqm\nPrice: Only ₱33,708 per sqm\n???? Option to purchase individually or together\n', '\nBest priced lots in Soliento Nuvali — rare find!\nPrime residential community with lush greenery and open spaces\nPerfect for a dream home or long-term investment\nExcellent location near schools, commercial centers, and lifestyle destinations\nFlexible purchase options: buy individually or combine for a larger estate', '[{\"name\":\"20230107-DSC_7372.jpg\",\"id\":\"10HfxoeAM7KSukJMzbhWYMb_eGIUNEdX1\",\"datetime\":\"2025-03-19 07:38:18\"},{\"name\":\"20230107-DSC_7383-Edit.jpg\",\"id\":\"1O8vx4kSal_1aDuGauOvEWt-Yhiucatiz\",\"datetime\":\"2025-03-19 07:38:32\"}]', '2025-03-19 07:38:07', '2025-04-23 12:15:34'),
(17, 1, 'Test Properties', '340000', 'Dolores', 'City of Ilagan', '3', 'Building', '5', 'Commercial for Lease', '0912', '2345', '346546', '2', '6', '3', '', '', '', '2025-03-31 15:14:43', '2025-04-02 08:44:49'),
(20, 1, 'Single-Family Homes: \\\"The Willow Tree House\\\", \\\"Sunrise Manor\\\", \\\"Oak Creek Estates\\\"', '0000000000', 'Bataan', 'Batac', '5', 'Lot', '19', 'Warehouse for Lease', '546456', '20000', '20000', '5', '6', '7', '', '', '[{\"name\":\"_MG_3389.jpg\",\"id\":\"1OYdKdHEcinAn1xF5dkP806PDbIrGG_w4\",\"datetime\":\"2025-05-06 07:54:56\"}]', '2025-05-06 07:54:49', '2025-05-06 07:54:49'),
(21, 1, 'Multi-Family Homes: \\\"The Grandview Apartments\\\", \\\"The Riverside Condos\\\", \\\"Urban Flats\\\"', '300000', 'Batangas', 'Batangas City', '5', 'Lot', '16', 'Sold', '3454', '50000', '70000', '67', '', '', '', '', '[{\"name\":\"_MG_3516.jpg\",\"id\":\"16wcvW2RPgqREO4MENGGG3LTDuXaUOmRO\",\"datetime\":\"2025-05-06 07:55:54\"}]', '2025-05-06 07:55:49', '2025-05-06 07:55:49'),
(22, 1, 'Condos: \\\"The Skyview Residences\\\", \\\"The Azure Condos\\\", \\\"Coastal Views\\\"', '6000009', 'Cavite', 'Cavite', '3', 'Building', '6', 'Commercial for Sale', '90925', '47985', '70000', '23', '35', '', '', '', '[{\"name\":\"_MG_3508.jpg\",\"id\":\"13zO2Yr2vuLgAxsvuvwM-Ne1tko_eWCxm\",\"datetime\":\"2025-05-06 07:57:04\"}]', '2025-05-06 07:56:59', '2025-05-06 07:56:59'),
(23, 1, 'Mobile Homes: \\\"Maplewood Estates\\\", \\\"Sunset Park\\\", \\\"The Green Acres\\\"', '90000', 'Laguna', 'Lipa', '2', 'Luxurious House and Lot', '2', 'Available', '90346', '309090', '890090', '56', '5', '', '', '', '[{\"name\":\"_MG_3524.jpg\",\"id\":\"1BbWA2KFviGZhYy7-Ai4u_zOul-76w3pA\",\"datetime\":\"2025-05-06 07:58:05\"}]', '2025-05-06 07:58:00', '2025-05-06 07:58:00'),
(24, 1, 'Retail:  \\\"The Marketplace Mall\\\", \\\"Main Street Emporium\\\",  \\\"The Community Center\\\"', '232457789', 'San Pablo', 'San Pablo', '1', 'House', '19', 'Warehouse for Lease', '90909', '60000', '80000', '9', '4', '', '', '', '[{\"name\":\"_MG_3021.jpg\",\"id\":\"1h7hZTl1vlFUU_HglE1YYc95YT8IQyd8l\",\"datetime\":\"2025-05-06 07:59:20\"}]', '2025-05-06 07:59:16', '2025-05-06 08:00:08'),
(25, 1, 'The Corporate Center', '50000', 'Dolores', 'Lucena', '5', 'Lot', '15', 'Reserved', '8983', '490090', '5000000', '6', '9', '4', '', '', '[{\"name\":\"_MG_3089.jpg\",\"id\":\"1TOYIHHcWOda9-RexmtnzYhpyH4z7Zcjw\",\"datetime\":\"2025-05-06 08:04:18\"}]', '2025-05-06 08:04:13', '2025-05-06 08:04:13'),
(26, 1, 'The Financial District', '5780000', 'Baloc', 'Cabuyao', '2', 'Luxurious House and Lot', '13', 'House for Sale', '8934', '10009809', '', '', '', '', '', '', '[{\"name\":\"_MG_3103.jpg\",\"id\":\"1igXv9E3-qR4POtIH5o64AVqGyIAlsHye\",\"datetime\":\"2025-05-06 08:05:42\"}]', '2025-05-06 08:05:38', '2025-05-06 08:05:38'),
(27, 1, 'The Cozy Cottage', '670,000', 'Manila', 'Dipolog', '1', 'House', '4', 'Building for Sale', '9000', '2300', '40000', '6', '5', '', '', '', '[{\"name\":\"_MG_3175.jpg\",\"id\":\"1aEEo1BKxelDKlSBUmOWWStW6A-jmxha4\",\"datetime\":\"2025-05-06 08:18:16\"}]', '2025-05-06 08:18:11', '2025-05-06 08:18:11'),
(28, 1, 'The Riverside Estate', '789,450', 'Quezon City', 'Makati', '1', 'House', '9', 'Farm for Sale', '890', '50000', '89000', '', '', '', '', '', '[{\"name\":\"_MG_3198.jpg\",\"id\":\"1Fb2utZ4Gb3QspdGOerBGBqn2fX3gQfra\",\"datetime\":\"2025-05-06 08:19:52\"}]', '2025-05-06 08:19:47', '2025-05-06 08:19:47');

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
  MODIFY `list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
