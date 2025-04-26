## CropMatch

CropMatch is a soil-analytics web application that helps both new and experienced farmers decide which crops to grow based on their soil’s nutritional profile. By narrowing the “what to produce?” question, CropMatch reduces wasted resources and maximizes yield potential.

---

## Table of Contents

- [Problem Statement](#problem-statement)  
- [Target Audience](#target-audience)  
- [Key Features](#key-features)  
- [Inspiration](#inspiration)  
- [How We Built It](#how-we-built-it)  
- [What It Does](#what-it-does)  
- [Challenges Faced](#challenges-faced)  
- [What We Learned](#what-we-learned)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment-variables)  
  - [Running the App](#running-the-app)  
- [Tech Stack](#tech-stack)  
- [Roadmap & What’s Next](#roadmap--whats-next)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Problem Statement

- **Knowledge Gap:** New farmers often lack experience matching crops to soil types, while experienced farmers sit on valuable crop–soil data they may not leverage fully.  
- **Resource Waste:** Planting unsuitable crops leads to poor yields, wasted labor, and financial loss.

## Target Audience

1. **Beginner Farmers & Gardeners**  
   Clueless on where to start, seeking an intuitive guide to soil-based crop selection.  
2. **Experienced Farmers**  
   Looking to optimize their existing data to choose the best crop rotations for their land.

---

## Key Features

- **Ease of Use:** Clear, step-by-step questionnaire for soil analysis—no jargon required.  
- **User-Centered UI/UX:** Mobile-friendly, minimal-click interface designed in Figma for clarity and speed.  
- **Data-Driven Recommendations:** Matches prominent soil nutrients to a curated crop database.  
- **Quick Insights:** Displays ideal growing conditions, nutritional needs, and cultivation risks for each recommended crop.

---

## Inspiration

- Agriculture underpins Australia’s economy, yet over 30 years to 2011, the farming population dropped 40% (from ~263,200 to ~157,000)—an average loss of ~294 farmers/month.  
- A family member new to farming struggled to choose crops, deterring their early enthusiasm.  
- We saw an opportunity for a **simple, effective** tool to lower entry barriers and empower both novices and veterans.

---

## How We Built It

- **Design:** Figma prototypes for user flows and interface mockups.  
- **Frontend:** HTML, CSS, and vanilla JavaScript for responsive, lightweight pages.  
- **Backend:** Node.js with Express.js handling REST APIs and business logic.  
- **Database:** MongoDB to store soil profiles and crop metadata.

---

## What It Does

1. **Soil Input Options:**  
   - **Exact Nutrient Values**: Users enter soil nutrient concentrations manually.  
   - **Visual Soil Types**: Users select from common soil appearance categories.  
2. **Analysis & Matching:**  
   - The app identifies the dominant nutrients in the user’s soil.  
   - It then recommends crops whose minimum nutrient requirements align with the soil profile.  
3. **Results Display:**  
   - Overscrollable list of crops  
   - For each: ideal pH, temperature ranges, planting seasons, associated risks, and nutrient needs.

---

## Challenges Faced

- **Product Identity & Differentiation**  
  Standing out from competitors like Farmbrite—focused us on simplicity and visualization rather than enterprise features.  
- **Scope Management**  
  Our initial vision was too broad (weather forecasting, remote sensing). We refocused on core soil-to-crop matching.  
- **Web Crawling for Data**  
  Automating crop-nutrient data collection proved time-intensive; we opted for a curated seed dataset.  
- **Time Constraints**  
  Rapid prototyping within our sprint window meant deprioritizing secondary features.  
- **UI/UX Polishing**  
  Iterating mockups in Figma to strike the right balance between functionality and clarity.

---

## What We Learned

- **Data-Driven Agriculture:** Farming decisions can—and should—be informed by quantitative soil metrics.  
- **End-to-End Development:** From brainstorming to deployment, we experienced the full product lifecycle.  
- **Design Tools Matter:** Rapid prototyping in Figma helped us iterate UI/UX before writing code.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/CropMatch.git
   cd CropMatch
   ```  
2. **Install dependencies**  
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the project root with:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=3000
```

### Running the App

```bash
npm start
```

- Frontend available at: `http://localhost:3000`  
- API endpoints under: `http://localhost:3000/api`

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Design & Prototyping:** Figma

---

## Roadmap & What’s Next

- **Machine Learning Integration**  
  • Auto-detect soil nutrients via geolocation & remote data sources  
  • Personalized crop combination suggestions  
- **Mobile App**  
  • Native iOS/Android interface for on-the-go soil analysis  
- **Expanded Soil Types**  
  • More visual categories and region-specific classifications  
- **Custom Nutrient Inputs**  
  • Allow users to specify exact macro- & micro-nutrient levels

---

## Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request detailing your changes

Please adhere to the existing code style and write clear commit messages. All contributions are welcome!

---

## License

This project is licensed under the [MIT License](LICENSE).
