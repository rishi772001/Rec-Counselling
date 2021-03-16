-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2021 at 04:08 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rec`
--

-- --------------------------------------------------------

--
-- Table structure for table `grievances`
--

CREATE TABLE `grievances` (
  `registerno` int(11) NOT NULL,
  `transport` varchar(1000) DEFAULT NULL,
  `hostel` varchar(1000) DEFAULT NULL,
  `canteen` varchar(1000) DEFAULT NULL,
  `remarks` varchar(1000) DEFAULT NULL,
  `issue` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grievances`
--

INSERT INTO `grievances` (`registerno`, `transport`, `hostel`, `canteen`, `remarks`, `issue`) VALUES
(181001060, 'Excelllent', 'Good', 'Super', 'Fine', 'Everything is Fine'),
(181001074, 'Excellent', '', 'Excellent', '', 'All is Fine'),
(181001098, 'Good', 'Ok', NULL, 'Good', 'Excellent');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staffid` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `designation` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staffid`, `name`, `department`, `designation`) VALUES
('IT178', '\"Sowmia KR\"', '\"Information Technology\"', '\"Assistant Professor\"');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `registerno` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `section` varchar(100) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `phno` varchar(100) NOT NULL,
  `arrearcount` int(11) DEFAULT NULL,
  `attendance` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`registerno`, `name`, `section`, `branch`, `phno`, `arrearcount`, `attendance`) VALUES
(181001060, 'Palaniappan M', 'B', 'IT', '9876544100', 2, '100'),
(181001074, 'Rishiraj', 'B', 'IT', '9876543200', 0, '97'),
(181001098, 'Sriram K', 'B', 'IT', '9876543211', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `grievances`
--
ALTER TABLE `grievances`
  ADD PRIMARY KEY (`registerno`),
  ADD KEY `registerno` (`registerno`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`registerno`),
  ADD KEY `registerno` (`registerno`),
  ADD KEY `registerno_2` (`registerno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
