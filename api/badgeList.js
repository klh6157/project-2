export default async function handler(request, res) {

    const badgeList = [
        {
            "objectHeader": "Amazon Cognito",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "objectLink": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "objectBadgeCreator": "Kevin Hantman",
            "objectTimeETA": "4.00 hours",
            "objectStepIcon": "https://pbs.twimg.com/media/Es9CrQtUYAM01oU.jpg",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Amazon I AM",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Create a I AM account with MFA enabled and Admin permissions",
            "objectLink": "https://www.google.com",
            "objectBadgeCreator": "John Pork",
            "objectTimeETA": "2.00 hours",
            "objectStepIcon": "https://pbs.twimg.com/media/Es9CrQtUYAM01oU.jpg",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime":"2.00 hours"
        },
        {
            "objectHeader": "Signing up for AWS Web Services",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "objectLink": "https://www.google.com",
            "objectBadgeCreator": "Joshua Hantman",
            "objectTimeETA": "2.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "AWS- LAMBDA Phase 1",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
            "objectLink": "https://aws.amazon.com/lambda",
            "objectBadgeCreator": "Joshua Hantman",
            "objectTimeETA": "4.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Amazon S3 Phase 1",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.",
            "objectLink": "https://aws.amazon.com/s3",
            "objectBadgeCreator": "Joshua Hantman",
            "objectTimeETA": "4.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Docker the Dockening",
            "objectIcon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "objectDescription": "He docks",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectBadgeCreator": "Jeff Jeffington",
            "objectTimeETA": "5.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "React: Hi",
            "objectIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "objectDescription": "Pretty sad",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectBadgeCreator": "Mark Zuckerberg",
            "objectTimeETA": "5.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Coolest Painter Around",
            "objectIcon": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160523192458-10-netflix-amazon-hulu-itunes-june.jpg",
            "objectDescription": "He paints",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectBadgeCreator": "Bob Ross",
            "objectTimeETA": "5.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Kentucky Fried Chicken",
            "objectIcon": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/061113/061113_kfc_logo_vmed5p.jpg",
            "objectDescription": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectBadgeCreator": "Colonel Harland Sanders",
            "objectTimeETA": "5.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "Linus Torvalds: A Star Wars Story",
            "objectIcon": "https://upload.wikimedia.org/wikipedia/commons/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png",
            "objectDescription": "idk",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectBadgeCreator": "Richard Stallman",
            "objectTimeETA": "5.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        },
        {
            "objectHeader": "How to Play Sabacc",
            "objectIcon": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a-kgu4yHL._AC_UF894,1000_QL80_.jpg",
            "objectDescription": "idk",
            "objectLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "objectBadgeCreator": "Han Solo",
            "objectTimeETA": "5.00 hours",
            "objectStepIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "objectStepDescription": "Creating you first lambda function",
            "objectStepTime": "2.00 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgeList);
}