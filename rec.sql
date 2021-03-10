-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:33
-- Generation Time: Mar 04, 2021 at 10:01 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `transport` varchar(1000) NOT NULL,
  `hostel` varchar(1000) NOT NULL,
  `canteen` varchar(1000) NOT NULL,
  `remarks` varchar(1000) NOT NULL,
  `issue` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(181001074, '\"Rishi Raj\"', 'B', 'IT', '9876543210', 1, '90');

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
  ADD KEY `registerno` (`registerno`),
  ADD KEY `registerno_2` (`registerno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
