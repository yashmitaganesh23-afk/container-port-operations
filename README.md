# Container Port Operations and Cargo Tracking Platform

A web-based Container Port Operations and Cargo Tracking Platform developed as a Software Engineering project. The system provides a centralized interface for managing container information, vessel schedules, customs information, logistics details, and yard operations.

The application is implemented as a full-stack system using HTML, CSS and JavaScript for the frontend, Node.js and Express.js for the backend, MySQL for persistent data storage, and Docker for containerized deployment.

---

## 1. Problem Statement

Port operations involve multiple activities such as container tracking, vessel scheduling, customs processing, logistics coordination, and yard management.

When these activities are maintained separately, it becomes difficult to monitor operational information efficiently.

This project provides a centralized web-based platform that integrates these operational areas and provides REST APIs for retrieving data from the MySQL database.

---

## 2. Objectives

The main objectives of the project are:

* Centralize container and cargo information.
* Track container status, location, cargo type and destination.
* Manage vessel information and scheduling.
* Maintain customs-related information.
* Maintain logistics and transportation information.
* Display operational information through a web dashboard.
* Provide REST APIs for retrieving container and vessel information.
* Store operational data using MySQL.
* Containerize the backend and database environment using Docker.
* Use Git and GitHub for source-code management and version control.

---

## 3. Key Features

### Dashboard

The dashboard provides an overview of port operations, including:

* Total containers
* Active vessels
* Customs pending information
* Yard utilization
* Navigation to operational modules

### Container Management

The container module provides information such as:

* Container ID
* Container number
* Cargo type
* Location
* Status
* Vessel name
* Destination
* Arrival date

### Vessel Management

The vessel module provides information such as:

* Vessel name
* IMO number
* Arrival date
* Departure date
* Berth
* Vessel status

### Customs

The customs module represents customs-related information including:

* Container number
* Customs status
* Inspection requirement

### Logistics

The logistics module represents transportation information including:

* Container number
* Truck number
* Driver name
* Destination
* Transportation status

### Yard Operations

The database includes yard-operation information for monitoring container positions and yard utilization.

---

## 4. Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js |
| Web Framework | Express.js |
| Database | MySQL 8.0 |
| Database Driver | mysql2 |
| API | REST API |
| Containerization | Docker |
| Orchestration | Docker Compose |
| Version Control | Git |
| Repository | GitHub |

---

## 5. System Architecture

The application follows a simple three-layer full-stack architecture.

```text
                 Web Browser
                     |
                     v
        +--------------------------+
        |        Frontend          |
        |     HTML / CSS / JS      |
        +------------+-------------+
                     |
                  HTTP/API
                     |
                     v
        +--------------------------+
        |        Backend           |
        |     Node.js / Express    |
        |        Port 5000         |
        +------------+-------------+
                     |
                 MySQL Query
                     |
                     v
        +--------------------------+
        |       MySQL 8.0          |
        |      Port 3306           |
        +--------------------------+
                     |
                     v
              Persistent Volume
                mysql_data
