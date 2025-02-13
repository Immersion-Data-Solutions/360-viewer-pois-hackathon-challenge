# IDS & SCSU Hackathon Feb. 2025 Challenge - 360° Viewer POIs

## Getting Started

 1. Create a new repository, using this repo as the template.
 2. Add the following users as collaborators:
	 - `mfitzer_ids`
	 - `jknudson-ids`

## Team:  _insert team name_

- _Member names here_

## Challenge Description

Immersion Data Solutions (IDS) captures and displays immersive 360° panoramic images within our cutting-edge digital twin platform. Users can navigate seamlessly between panoramic views, track their orientation within the environment, and see their precise location on a map.

For this challenge, we're looking to take our 360° viewer to the next level by allowing users to create and interact with Points of Interest (POIs) directly within the panoramic scene. Imagine being able to click on a door to pull up maintenance logs, hover over a machine to view performance metrics, or tag important objects for quick reference. Your mission is to develop a feature that enables users to add, edit, and visualize these interactive POIs in the 360° viewer.

## Technologies

- **JavaScript** – for core functionality and dynamic interactions.
- **KRPano** – a powerful 360° rendering library for panoramic image visualization.   
- **ReactJS** – to create a smooth and responsive user interface for managing POIs.
- **Backend** – any backend technology can be used for POI management if backend is desired

## Test Data

This challenge uses a sample krpano xml file.

## Target Outcome

### Key Objectives
1. **Milestone 1 - POI Creation:** Enable users to place markers or hotspots in the 360° image by clicking directly within the viewer.
2. **Milestone 2 - POI Data Display:** When a user interacts with a POI (click/hover), display relevant information (text, images, or links) associated with that point.
3. **Milestone 3 - Spatial Accuracy:** Ensure that POIs are accurately anchored to specific points within the 360° scene, maintaining their position as the user navigates.
4. **Milestone 4 - POI Management:** Allow users to edit or remove POIs and store this data persistently.
5. **Milestone 5 - Integrate into React UI:** Note: React Portal may be needed to avoid WebGL context loss

### Bonus Points For:
- Integrating a map view that shows POI locations relative to the user's position.
- Implementing filters or categories for POIs (e.g., Maintenance, Safety, Information).
- Supporting multimedia content (videos, PDFs) within POI pop-ups.
- Enable users to add comments to a POI

## How to Run

In the 360-viewer folder, run `npm install` if the app has not been run before. Then run `npm run dev` to run the app locally.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

_Teams update this section with any additional instructions on how to run the application._

## Hackathon Submission Checklist

 - [ ] Committed all prototype code
 - [ ] Updated README with instructions for running the application
 - [ ] Transfer repository ownership to `mfitzer-ids`
 - [ ] Created presentation showcasing our work using the PresentationTemplate.pptx
 - [ ] Committed the presentation to the repository root folder in PDF format

## Judging

### Criteria
- **Innovation** – How creative and unique is your POI implementation?
- **Functionality** – Does your solution allow seamless creation, editing, and display of POIs?
- **User Experience** – Is the POI interaction intuitive and user-friendly?
- **Technical Execution** – How well do you integrate KRPano with ReactJS and manage the underlying data?

### Feedback
_Provided after hackathon judging is completed._