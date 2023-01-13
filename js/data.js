var blogContent =  /*startIndex*/['', '<div id="1" class="post"><b><u>Test-Post</u></b> Posted on 2022-07-21 12:11<br><h1>Hi this is a test post!</h1>\n<ul>\n<li>bing</li>\n<li>chill</li>\n<li>ING</li>\n</ul></div>', '<div id="2" class="post"><b><u>images-work-too</u></b> Posted on 2022-07-21 12:33<br><h2>Sometimes you\'ve got to close a door to open a window</h2>\n<p><img alt="Some Image" src="https://www.rollingstone.com/wp-content/uploads/2019/05/TylerTheCreator_SamRock.jpg?resize=1800,1200&amp;w=1200" /></p></div>']/*endIndex*/


//ideally we will use a GET request to a service/server to get data 
//but since the main focus is on a static webpage, we will get data directly from here 
var AnxietyData = {
    "timetableName": "ECE A 401",
    "colTitles": [
        "08:00-8.50",
        "8:50-9:40",
        "9:50-10:40",
        "10:40-11:30",
        "11:30-12:20",
        "12:20-13:10",
        "13:10-14:00",
        "14:00-14:50",
        "14:50-15:40"
    ],
    "rowTitles": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ],
    "cellTopics": [
        [
            "EEE",
            "Math",
            "Mech Workshop",
            "Mech Workshop",
            "Lunch ",
            "Mech Workshop",
            "Mech Workshop",
            "Chemistry",
            ""
        ],
        [
            "Chemistry",
            "Math",
            "Biology",
            "EEE",
            "Lunch ",
            "Phil of Engg",
            "",
            "",
            ""
        ],
        [
            "Yoga",
            "Japanese",
            "Chemistry Lab",
            "Chemistry Lab",
            "Lunch ",
            "Math",
            "Chemistry",
            "Biology",
            ""
        ],
        [
            "",
            "",
            "Chemistry ",
            "Math",
            "Lunch ",
            "EEE",
            "Phil of Engg",
            "Phil of Engg",
            ""
        ],
        [
            "Prof Skills",
            "Prof Skills",
            "Japanese",
            "Japanese",
            "Lunch ",
            "VAC",
            "VAC",
            "EEE",
            ""
        ]
    ]
}

function getAnxietyData(){return AnxietyData}
function getDepression(){return AnxietyData}

function loadContent(){return blogContent}