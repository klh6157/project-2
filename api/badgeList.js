export default async function handler(request, res) {

    const badgeList = [
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
            "title": "Docker the Dockening",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "He docks",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Jeff Jeffington",
            "time": "5.0 hours"
        },
        {
            "title": "React: Hi",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "description": "Pretty sad",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Mark Zuckerberg",
            "time": "5.0 hours"
        },
        {
            "title": "Coolest Painter Around",
            "icon": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160523192458-10-netflix-amazon-hulu-itunes-june.jpg",
            "description": "He paints",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Bob Ross",
            "time": "5.0 hours"
        },
        {
            "title": "Kentucky Fried Chicken",
            "icon": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/061113/061113_kfc_logo_vmed5p.jpg",
            "description": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Colonel Harland Sanders",
            "time": "5.0 hours"
        },
        {
            "title": "Linus Torvalds: A Star Wars Story",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png",
            "description": "idk",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Richard Stallman",
            "time": "5.0 hours"
        },
        {
            "title": "How to Play Sabacc",
            "icon": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a-kgu4yHL._AC_UF894,1000_QL80_.jpg",
            "description": "just putting random test badges in tbh",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a-kgu4yHL._AC_UF894,1000_QL80_.jpg",
            "author": "Jabba the Hutt",
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