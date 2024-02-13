var config = {
    style: 'mapbox://styles/renben2000/clsb64osi00hc01podcjq04yt/draft',
    accessToken: 'pk.eyJ1IjoicmVuYmVuMjAwMCIsImEiOiJjazh4eGZqemUwdHZ4M25tY3JsMm9nNDE0In0.9fZUW9GH9ABi1e5diMioTQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
  
    inset: false,
    theme: 'dark',
    use3dTerrain: false, 
    auto: false,
    title: 'Journey to the Young',
    subtitle: "Pupil's routes and favorite places after school in Yishun East",
    byline: 'By Youlong',
    footer: 'Source: OpenStreetMap, Author. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            opacity: 0.6,
            alignment: 'left',
            hidden: false,
            title: 'Primary School',
            image: 'image/01.jpg',
            description: 'During school hours, a large number of pupils will gather at the entrance of primary school, categorized according to different grades and classes, waiting to be picked up by their parents or going home on their own.',
            location: {
                center: [103.8437, 1.42685],
                zoom: 16,
                pitch: 40,
                bearing: 0,
                speed: 0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'HDB Ground Floor',
            image: 'image/02.jpg',
            description: "The convenience and relevant design of the HDB Ground Floor is relevant to pupils' travels because of its protection from the sun and rain as well as its quickness, which makes it an essential part of most pupils' journeys home.",
            location: {
                center: [103.84475, 1.4259],
                zoom: 15.5,
                pitch: 60,
                bearing: -43.2,
                speed: 0.1,
                curve: 1

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Food Court',
            image: 'image/03.jpg',
            description: "Points of interest such as food courts on the pupils' way home attract a large number of pupils to stop and play, and to engage in various social activities.",
            location: {
                center: [103.84657, 1.4245],
                zoom: 15.5,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Community Park',
            image: 'image/04.jpg',
            description: "Community facilities such as various parks also attract pupils for more than 1-10 minutes, and the design of facilities is relevant to pupil safety.",
            location: {
                center: [103.84835, 1.42533],
                zoom: 17,
                pitch: 60,
                bearing: 0,
                speed: 0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
