# InteractiveUniversityDashboard
An interactive and responsive data visualization dashboard for university data, built with Flask and amCharts.
# UniversityDataVizDashboard

An interactive and responsive data visualization dashboard for university data, built with Flask and amCharts.

![Dashboard Screenshot](path/to/your/screenshot.png)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Project

This project was developed as part of a data visualization course. The dashboard provides various insights into university data, including student performance, department statistics, and counseling information. It is built using Flask for the backend and amCharts for the interactive visualizations.

## Features

- **Interactive Charts**: Tooltips, zooming, and filtering functionalities.
- **Responsive Design**: Ensures the dashboard is accessible on various devices.
- **Data Visualization**: Displays data through various charts such as average grades, student distribution, and more.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/UniversityDataVizDashboard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd UniversityDataVizDashboard
    ```
3. Create a virtual environment:
    ```bash
    python -m venv venv
    ```
4. Activate the virtual environment:
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      source venv/bin/activate
      ```
5. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. Run the Flask application:
    ```bash
    python server.py
    ```
2. Open your web browser and navigate to `http://127.0.0.1:5000` to view the dashboard.

## Project Structure
UniversityDataVizDashboard/
├── static/
│ ├── chart.js
│ ├── chart2.js
│ ├── chart3.js
│ ├── chart4.js
│ ├── style.css
├── templates/
│ ├── index.html
├── Department_Information.csv
├── Employee_Information.csv
├── Student_Counseling_Information.csv
├── Student_Performance_Data.csv
├── Student_Performance_Data_Wide_Version.csv
├── server.py
├── requirements.txt
├── README.md

- **static/**: Contains JavaScript and CSS files for the charts and styling.
- **templates/**: Contains HTML templates.
- **CSV files**: Contains the data used for the visualizations.
- **server.py**: The main Flask application file.
- **requirements.txt**: Python dependencies.
- **README.md**: Project documentation.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Mahmoud Tarek - [LinkedIn](https://www.linkedin.com/in/mahmoud-tarek-666b2b2b1/) - [Email](mahmoudtarek118@gmail.com)

## Acknowledgements

- [amCharts](https://www.amcharts.com/)
- [Flask](https://flask.palletsprojects.com/)
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)


