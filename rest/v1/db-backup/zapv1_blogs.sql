-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2025 at 08:19 AM
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
(2, 1, 'Test blog', 'Louren', '', '2025-03-15', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! At non dolore quisquam obcaecati doloribus ea. Impedit?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! At non dolore quisquam obcaecati doloribus ea. Impedit?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! At non dolore quisquam obcaecati doloribus ea. Impedit?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! At non dolore quisquam obcaecati doloribus ea. Impedit?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! At non dolore quisquam obcaecati doloribus ea. Impedit?\nLorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nam quos enim explicabo beatae ad! At non dolore quisquam obcaecati doloribus ea. Impedit?', '[{\"name\":\"cards.webp\",\"id\":\"1cjBHnHzO6QHYsduXZ5ucp5YruVjjXzR2\",\"datetime\":\"2025-03-07 12:10:36\"},{\"name\":\"home-3.webp\",\"id\":\"1mfGv2CadKcnrhz-6tuBOejP4aYqyiyKk\",\"datetime\":\"2025-03-07 12:11:22\"}]', '2025-03-07 12:09:26', '2025-03-07 12:16:15'),
(4, 1, 'Blogsss', 'Test Blog 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', '2025-03-19', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam ducimus cupiditate ipsum excepturi a. Est tempore tenetur adipisci nulla?', '[{\"name\":\"Frontage.jpg\",\"id\":\"1o-mli7VbQSt8zPJuldbZOe1f-7fCvZm8\",\"datetime\":\"2025-03-07 13:02:00\"},{\"name\":\"blogs1.png\",\"id\":\"1PTmrnnCw5YpcHAxpBRaM26ZIBJ93Fij_\",\"datetime\":\"2025-03-07 13:02:03\"},{\"name\":\"blogs2.png\",\"id\":\"1hrzoH8kVFpL1H35ICrZNPWj5-Ljjpjm7\",\"datetime\":\"2025-03-07 13:02:07\"},{\"name\":\"blogs3.png\",\"id\":\"18aefgCvxkZP-nNLdTPW--ULvs85VzO9p\",\"datetime\":\"2025-03-07 13:02:11\"},{\"name\":\"cards2.webp\",\"id\":\"1DUjsuAwEfDn3XNzPZx9OC9kyVQCJY3WN\",\"datetime\":\"2025-03-07 13:02:14\"},{\"name\":\"home-3.webp\",\"id\":\"1lslfTwooaMy-I1wTYoa-bMhVuLoOTs1i\",\"datetime\":\"2025-03-07 13:02:18\"}]', '2025-03-07 13:01:53', '2025-03-07 13:01:53'),
(5, 1, 'The Ultimate Guide to Buying Your  First Home', 'Test Blogs', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', '2025-04-10', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', 'Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\n\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.\nLorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris.', '[{\"name\":\"cards.webp\",\"id\":\"18Ygbx9W2aRt_h7ucOUFKeXzG-mYnJFZv\",\"datetime\":\"2025-03-07 13:04:11\"},{\"name\":\"cards2.webp\",\"id\":\"1BjEt2VPhah7pPpt2xwWdEAT9XIVudOe_\",\"datetime\":\"2025-03-07 13:04:14\"},{\"name\":\"home-2.webp\",\"id\":\"1OEnZsZr77imUUiqlUOa_wA7jwSEEaPo6\",\"datetime\":\"2025-03-07 13:04:18\"},{\"name\":\"home-3.webp\",\"id\":\"1WsmKgDTqJDd6N3pgpHcI0mlUrVx_riuD\",\"datetime\":\"2025-03-07 13:04:22\"},{\"name\":\"home-4.webp\",\"id\":\"1O-rdr8x79xoa-e9V_jqvTeq59nNft6zB\",\"datetime\":\"2025-03-07 13:04:25\"},{\"name\":\"home-5.webp\",\"id\":\"1f_Uj_umPPfRzZSPc6MjO7zAPTQY8TDUC\",\"datetime\":\"2025-03-07 13:04:28\"}]', '2025-03-07 13:04:07', '2025-03-07 13:04:07'),
(6, 1, 'The Ultimate Guide to Buying Your First Home', 'Zac Alfanta', 'Lorem ipsum dolor sit amet consectetur. Vitae eu tincidunt in sed.', '2025-03-07', 'Lorem ipsum dolor sit amet consectetur. In habitasse eget semper dignissim sed lobortis dui.. Vestibulum non eu blandit ornare sed non.. Non vel massa id quis. Volutpat velit imperdiet tortor lectus justo augue quis congue.. Urna risus quisque egestas at sed tortor dignissim tellus non.. Sagittis consectetur feugiat pellentesque auctor condimentum faucibus quis..\n\nFeugiat venenatis tellus sit morbi. Elit blandit nec ornare ac purus aliquet mauris.. Turpis non gravida gravida nisi at adipiscing feugiat risus sapien.. Libero pretium eget amet ullamcorper consequat senectus.. Nulla in tincidunt pretium pretium lectus elit diam suscipit purus.. Facilisis mauris dignissim augue at ipsum arcu arcu ultricies lobortis.. Egestas sollicitudin at morbi nulla ornare.. Quam felis feugiat in enim suscipit mattis..\n\nIpsum et hendrerit massa varius amet.. Sem gravida libero scelerisque phasellus. Dui ultrices tincidunt turpis eu. Gravida sed rhoncus adipiscing et elit condimentum nunc vel imperdiet.. Tempus ante blandit lacus commodo posuere enim nisl.. Maecenas habitasse et augue sollicitudin odio porttitor.. A magna pellentesque condimentum sit. Ac nunc curabitur in vitae morbi arcu at facilisis.. Neque varius cursus erat gravida neque id.. Rhoncus amet mattis condimentum.', 'Lorem ipsum dolor sit amet consectetur. In habitasse eget semper dignissim sed lobortis dui.. Vestibulum non eu blandit ornare sed non.. Non vel massa id quis. Volutpat velit imperdiet tortor lectus justo augue quis congue.. Urna risus quisque egestas at sed tortor dignissim tellus non.. Sagittis consectetur feugiat pellentesque auctor condimentum faucibus quis..\n\nFeugiat venenatis tellus sit morbi. Elit blandit nec ornare ac purus aliquet mauris.. Turpis non gravida gravida nisi at adipiscing feugiat risus sapien.. Libero pretium eget amet ullamcorper consequat senectus.. Nulla in tincidunt pretium pretium lectus elit diam suscipit purus.. Facilisis mauris dignissim augue at ipsum arcu arcu ultricies lobortis.. Egestas sollicitudin at morbi nulla ornare.. Quam felis feugiat in enim suscipit mattis..\n\nIpsum et hendrerit massa varius amet.. Sem gravida libero scelerisque phasellus. Dui ultrices tincidunt turpis eu. Gravida sed rhoncus adipiscing et elit condimentum nunc vel imperdiet.. Tempus ante blandit lacus commodo posuere enim nisl.. Maecenas habitasse et augue sollicitudin odio porttitor.. A magna pellentesque condimentum sit. Ac nunc curabitur in vitae morbi arcu at facilisis.. Neque varius cursus erat gravida neque id.. Rhoncus amet mattis condimentum.', 'Lorem ipsum dolor sit amet consectetur. In habitasse eget semper dignissim sed lobortis dui.. Vestibulum non eu blandit ornare sed non.. Non vel massa id quis. Volutpat velit imperdiet tortor lectus justo augue quis congue.. Urna risus quisque egestas at sed tortor dignissim tellus non.. Sagittis consectetur feugiat pellentesque auctor condimentum faucibus quis..\n\nFeugiat venenatis tellus sit morbi. Elit blandit nec ornare ac purus aliquet mauris.. Turpis non gravida gravida nisi at adipiscing feugiat risus sapien.. Libero pretium eget amet ullamcorper consequat senectus.. Nulla in tincidunt pretium pretium lectus elit diam suscipit purus.. Facilisis mauris dignissim augue at ipsum arcu arcu ultricies lobortis.. Egestas sollicitudin at morbi nulla ornare.. Quam felis feugiat in enim suscipit mattis..\n\nIpsum et hendrerit massa varius amet.. Sem gravida libero scelerisque phasellus. Dui ultrices tincidunt turpis eu. Gravida sed rhoncus adipiscing et elit condimentum nunc vel imperdiet.. Tempus ante blandit lacus commodo posuere enim nisl.. Maecenas habitasse et augue sollicitudin odio porttitor.. A magna pellentesque condimentum sit. Ac nunc curabitur in vitae morbi arcu at facilisis.. Neque varius cursus erat gravida neque id.. Rhoncus amet mattis condimentum.', '[{\"name\":\"blogs1.png\",\"id\":\"1C8W7ST8mRBMVFUgaK0l1a-MxIJHGw-yR\",\"datetime\":\"2025-03-07 15:07:07\"},{\"name\":\"blogs4.png\",\"id\":\"1Mpi3FjGK27B0KSuRWKX_Tk251Ss65nZm\",\"datetime\":\"2025-03-07 15:07:11\"},{\"name\":\"blogs5.png\",\"id\":\"1F7EGJx-oU7zFwCQH9NeOQiiqUGAoXvlE\",\"datetime\":\"2025-03-07 15:07:14\"}]', '2025-03-07 15:07:04', '2025-03-07 15:07:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zapv1_blogs`
--
ALTER TABLE `zapv1_blogs`
  ADD PRIMARY KEY (`blogs_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zapv1_blogs`
--
ALTER TABLE `zapv1_blogs`
  MODIFY `blogs_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
