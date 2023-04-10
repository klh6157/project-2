export default async function handler(request, res) {

    var badgeList = [
        {
            "title": "Amazon Cognito",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "documentLink": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorIcon": "https://pbs.twimg.com/media/Es9CrQtUYAM01oU.jpg",
            "author": "Kevin Hantman",
            "time": "4.0 hours",
        },
        {
            "title": "Amazon I AM",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "Create a I AM account with MFA enabled and Admin permissions",
            "documentLink": "",
            "authorIcon": "https://pbs.twimg.com/media/Es9CrQtUYAM01oU.jpg",
            "author": "John Pork",
            "time": "2.0 hours"
        },
        {
            "title": "Signing up for AWS Web Services",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "documentLink": "",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "2.0 hours"
        },
        {
            "title": "AWS- LAMBDA Phase 1",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
            "documentLink": "https://aws.amazon.com/lambda",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "title": "Amazon S3 Phase 1",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "5.0 hours"
        },
        {
            "title": "Shrek the Shreker",
            "icon": "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000",
            "description": "He Shreks",
            "documentLink": "Stuff",
            "authorIcon": "More Stuff",
            "author": "Shrek",
            "time": "5.0 hours"
        },
        {
            "title": "A guy with spikey hair",
            "icon": "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg",
            "description": "its pointy",
            "documentLink": "pointy stuff",
            "authorIcon": "its just pointy hair",
            "author": "Goku",
            "time": "5.0 hours"
        },
        {
            "title": "Its just a Duck",
            "icon": "https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg",
            "description": "He is just a duck",
            "documentLink": "Just Stuff",
            "authorIcon": "Just more Stuff",
            "author": "Duck guy",
            "time": "5.0 hours"
        },
        {
            "title": "Gorilla",
            "icon": "https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg",
            "description": "Its a gorilla",
            "documentLink": "Gorilla man 1",
            "authorIcon": "Gorilla man 2",
            "author": "Gorilla guy 256",
            "time": "5.0 hours"
        },
        {
            "title": "A guy with hair to the sky",
            "icon": "https://www.giantbomb.com/a/uploads/scale_medium/2/27436/2722697-gon_freecss_2617.jpg",
            "description": "rock",
            "documentLink": "rock, paper, scissors",
            "authorIcon": "gon with rock",
            "author": "Gon",
            "time": "5.0 hours"
        },
        {
            "title": "Pokemon got to catch em all",
            "icon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "description": "pokemon",
            "documentLink": "just love pokemon",
            "authorIcon": "Just a Ash Ketchum",
            "author": "Ash Ketchum",
            "time": "5.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgeList);
}