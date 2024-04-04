import im1 from "../assets/brainERRp.jpg";
import im2 from "../assets/campus_map.png";
import im3 from "../assets/money_tracker.png";
import im4 from "../assets/tictactoe.jpg";

const ProjectCardData = [
    {
        imgsrc: im1,
        title: "Brain ErrP Detection",
        text: "Developed a notebook to identify brain error signals from raw EEG data by training ML models to predict brain signals. We obtained the data from kaggle but trained and develop our own machine learning model.",
        source: "https://github.com/andrewdarmawant/ERRP-BCI"
    },
    {
        imgsrc: im2,
        title: "Campus Map",
        text: "Created a GUI to provide directions on maps by drawing the routes around the UW campus with Directed Graph data structure and Dijkstra’s algorithm using Java Spark backend and React frontend.",
        source: "https://github.com/andrewdarmawant/campus_maps"
    },
    {
        imgsrc: im3,
        title: "Budget Tracking",
        text: "Developed a React app to keep track of spending and income by using react for front end, express js for backend, mongodb for storage and node js packages",
        source: "https://github.com/andrewdarmawant/money_tracker"
    },
    {
        imgsrc: im4,
        title: "Tic Tac Toe",
        text: "Developed the Tic Tac Toe game and programmed the computer AI using the Minimax algorithm",
        source: "https://github.com/andrewdarmawant/tic_tac_toe_ai"
    }
]