export default async function handler(req, res) {
    const search = req.query.search || '';

    var badgeList = [
        {
            "objectHeader": "Amazon Cognito",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "objectLink": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Kevin Hantman",
            "objectTimeETA": "4.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Amazon I AM",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Create a I AM account with MFA enabled and Admin permissions",
            "objectLink": "",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "John Pork",
            "objectTimeETA": "2.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Signing up for AWS Web Services",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "objectLink": "",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Joshua Hantman",
            "objectTimeETA": "2.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "AWS- LAMBDA Phase 1",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
            "objectLink": "https://aws.amazon.com/lambda",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Joshua Hantman",
            "objectTimeETA": "4.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Amazon S3 Phase 1",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Joshua Hantman",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Shrek the Shreker",
            "objectIcon": "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000",
            "objectDescription": "He Shreks",
            "objectLink": "Stuff",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Shrek",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "A guy with spikey hair",
            "objectIcon": "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg",
            "objectDescription": "its pointy",
            "objectLink": "pointy stuff",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Goku",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Its just a Duck",
            "objectIcon": "https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg",
            "objectDescription": "He is just a duck",
            "objectLink": "Just Stuff",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Duck guy",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Gorilla",
            "objectIcon": "https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg",
            "objectDescription": "Its a gorilla",
            "objectLink": "Gorilla man 1",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Gorilla guy 256",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "A guy with hair to the sky",
            "objectIcon": "https://www.giantbomb.com/a/uploads/scale_medium/2/27436/2722697-gon_freecss_2617.jpg",
            "objectDescription": "rock",
            "objectLink": "rock, paper, scissors",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Gon",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Pokemon got to catch em all",
            "objectIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectDescription": "pokemon",
            "objectLink": "just love pokemon",
            "objectStepIcon": "https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg",
            "objectBadgeCreator": "Ash Ketchum",
            "objectTimeETA": "5.0 hours",
            "objectStepobjectDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        }
    ];
    
    badgeList.map((badges) => {
        badges.index = badges.objectHeader.toLowerCase() + " " + badges.objectBadgeCreator.toLowerCase() + " " + badges.objectDescription.toLowerCase() + " " + badges.objectLink.toLowerCase();
      });
      badgeList = badgeList.filter((badges) => {
        return badges.index.indexOf(search.toLowerCase()) > -1;
      });

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgeList);
}