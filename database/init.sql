CREATE DATABASE IF NOT EXISTS port_operations;

USE port_operations;

CREATE TABLE containers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    container_number VARCHAR(50) NOT NULL,
    cargo_type VARCHAR(100),
    location VARCHAR(100),
    status VARCHAR(50),
    vessel_name VARCHAR(100),
    destination VARCHAR(100),
    arrival_date DATE
);

CREATE TABLE vessels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vessel_name VARCHAR(100) NOT NULL,
    arrival_time TIME,
    departure_time TIME,
    berth VARCHAR(50),
    status VARCHAR(50)
);

CREATE TABLE customs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    container_number VARCHAR(50),
    customs_status VARCHAR(50),
    inspection_status VARCHAR(50),
    clearance_date DATE
);

CREATE TABLE logistics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    container_number VARCHAR(50),
    truck_id VARCHAR(50),
    driver_name VARCHAR(100),
    destination VARCHAR(100),
    transport_status VARCHAR(50)
);

CREATE TABLE yard_operations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    yard_name VARCHAR(50),
    capacity INT,
    occupied INT,
    status VARCHAR(50)
);
INSERT INTO containers
(container_number, cargo_type, location, status, vessel_name, destination, arrival_date)
VALUES
('CONT1001', 'Electronics', 'Yard A', 'In Transit', 'MV Ocean Star', 'Chennai', '2026-08-18'),
('CONT1002', 'Machinery', 'Yard B', 'Customs', 'MV Ocean Star', 'Mumbai', '2026-08-18'),
('CONT1003', 'Food Products', 'Yard C', 'Cleared', 'MV Sea Pearl', 'Kochi', '2026-08-17'),
('CONT1004', 'Textiles', 'Yard A', 'In Transit', 'MV Sea Pearl', 'Tuticorin', '2026-08-18');

INSERT INTO vessels
(vessel_name, arrival_time, departure_time, berth, status)
VALUES
('MV Ocean Star', '10:00:00', '18:00:00', 'B03', 'Scheduled'),
('MV Sea Pearl', '13:00:00', '21:00:00', 'B05', 'Arrived');

INSERT INTO customs
(container_number, customs_status, inspection_status, clearance_date)
VALUES
('CONT1001', 'Pending', 'Required', NULL),
('CONT1002', 'Under Inspection', 'In Progress', NULL),
('CONT1003', 'Cleared', 'Completed', '2026-08-17'),
('CONT1004', 'Pending', 'Required', NULL);

INSERT INTO logistics
(container_number, truck_id, driver_name, destination, transport_status)
VALUES
('CONT1001', 'TRK101', 'Arun', 'Chennai', 'Dispatched'),
('CONT1002', 'TRK102', 'Kumar', 'Mumbai', 'Waiting'),
('CONT1003', 'TRK103', 'Ravi', 'Kochi', 'Delivered');

INSERT INTO yard_operations
(yard_name, capacity, occupied, status)
VALUES
('Yard A', 100, 75, 'Operational'),
('Yard B', 100, 60, 'Operational'),
('Yard C', 100, 40, 'Operational');
CREATE TABLE IF NOT EXISTS vessels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vessel_name VARCHAR(100) NOT NULL,
    arrival_time VARCHAR(20),
    departure_time VARCHAR(20),
    berth VARCHAR(20),
    status VARCHAR(50)
);

INSERT INTO vessels
(vessel_name, arrival_time, departure_time, berth, status)
VALUES
('MV Ocean Star', '10:00', '18:00', 'B03', 'Scheduled'),
('MV Sea Pearl', '13:00', '21:00', 'B05', 'Arrived');