var html = {};

html.menu = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/">
    <link rel="icon" type="image/x-icon" href="/assets/favicon.png">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <script src="js/cctvRecorder.js"></script>
    <script defer src="js/menu.js"></script>
    <title>InstaClicks</title>
</head>
<body>
    <div class="navBar">
        <ul class="navBarLinks">
            <li><a href="/"><p>Home</p></a></li>
            <li><a href="/about"><p>About</p></a></li>
            <li><a href="/contact"><p>Contact</p></a></li>
        </ul>
        <img class="menuButton" src="assets/menu.png">
        <div class="logoCont">
            <a href="/"><img class="logo" src="assets/logo.png"></a>
        </div>
    </div>
    <div class="menuCover" style="display: none;"></div>
    <div class="menu">
        <img class="menuClose" src="assets/back.png">
        <ul class="menuLinks">
            <li><a href="/"><p>Home</p></a></li>
            <li><a href="/about"><p>About</p></a></li>
            <li><a href="/contact"><p>Contact</p></a></li>
            <li><a href="/privacy-policy"><p>Privacy Policy</p></a></li>
            <li><a href="/terms-of-use"><p>Terms of Use</p></a></li>
        </ul>
    </div>
    <div class="content">
        <%- include(content) %>
    </div>
    <div class="footer">
        <ul class="footerLinks">
            <li><a href="/"><p>Home</p></a></li>
            <li><a href="/about"><p>About</p></a></li>
            <li><a href="/contact"><p>Contact</p></a></li>
            <li><a href="/privacy-policy"><p>Privacy Policy</p></a></li>
            <li><a href="/terms-of-use"><p>Terms of Use</p></a></li>
        </ul>
        <small class="footerCopyright">© InstaClicks 2024</small>
    </div>
</body>
</html>
`;

html.home = `
<link rel="stylesheet" href="css/home.css">
<link rel="stylesheet" href="css/chooseProduct.css">
<div class="promoPicWrapper">
    <img class="promoPic" src="assets/rocket.jpg"></img>
    <div class="promoText">
        <h1>Grow your TikTok profile faster</h1>
        <button class="getStarted">Get started</button>
    </div>
</div>
<div class="proofCont">
    <div class="proofText">
        <h1>How it works</h1>
        <p class="text">Getting started is simple. First, pick the follower package that fits your goals. Then, share your TikTok username so we know where to send the followers. After that, we'll deliver the followers to your account, increasing your numbers and making your profile look more credible. This boost not only helps you stand out, but also builds trust, legitimacy, and authority, making it easier to attract real organic followers, grow your audience, and even improve your marketing reach and sales potential.</p>
    </div>
    <img class="proof" src="assets/proof.jpg"></img>
</div>
<div class="competitorCont">
    <h1 class="competitorTitle title">Lowest prices on the market. We've outcompeted:</h1>
    <div class="competitorList">
        <img src="assets/competitors/famety.png"></img>
        <img src="assets/competitors/buzzoid.png"></img>
        <img src="assets/competitors/marketingheaven.png"></img>
        <img src="assets/competitors/superviral.png"></img>
        <img src="assets/competitors/tikster.png"></img>
        <img src="assets/competitors/twicsy.png"></img>
    </div>
</div>
<div class="orderInfo">
    <h1 class="title" style="margin-bottom: 30px;">Choose an amount</h1>
    <div class="cardSlider">
        <div class="leftArrowCont">
            <img src="assets/prev.png"></img>
        </div>
        <div class="cardCont"></div>
        <div class="rightArrowCont">
            <img src="assets/next.png"></img>
        </div>
    </div>
    <div style="display: none" class="tutorial"></div>
    <a class="buyNow">Buy now</a>
</div>
<script src="js/home.js"></script>
`;

html.about = `
<h1 style="margin-top: 30px; margin-bottom: 30px;" class="title">About us</h1>
<p class="text">At InstaClicks, we make growing your TikTok account easier and more affordable. We offer cheap, high quality TikTok followers that can give your profile the boost it needs. Whether you're an influencer, a brand, or just starting to build your presence, we're here to help you get noticed. Our followers are real and delivered quickly, so you can focus on what you do best, creating amazing content. With InstaClicks, growing your TikTok following doesn’t have to be expensive or complicated. Let us help you level up your social media game today!</p>
`;

html.contact = `
<h1 style="margin-top: 30px; margin-bottom: 30px;" class="title">Contact us</h1>
<p class="text">For support, feedback or business offers, please don't hesitate to email us at <a href="mailto:insta.cclicks@gmail.com">insta.cclicks@gmail.com</a></p>
`;

html.privacyPolicy = `
<link rel="stylesheet" href="css/legal.css">
<h1 style="margin-top: 30px; margin-bottom: 30px;" class="title">Privacy Policy</h1>
<div class="legalText">
    <p>This Privacy Policy outlines how we collect, use, and protect your information when you purchase services from our website. By using our services, you agree to the practices described below.</p>
    <br>
    <b>1. Information We Collect</b>
    <p>When you place an order, we collect the following information:</p>
    <ul>
        <li>Username: The social media handle for delivering the service.</li>
        <li>Email Address: To send order confirmations and updates.</li>
        <li>Payment Information: Processed securely through our third-party payment provider. We do not store payment details.</li>
    </ul>
    <br>
    <b>2. How We Use Your Information</b>
    <p>We use the collected information to:</p>
    <ul>
        <li>Deliver the purchased services to your specified social media account.</li>
        <li>Send order-related notifications to your email.</li>
        <li>Improve our services and website functionality.</li>
    </ul>
    <br>
    <b>3. Data Protection</b>
    <p>We prioritize the security of your personal information and implement industry-standard measures to safeguard it. Payment details are managed by secure third-party payment providers, and we do not store sensitive financial data on our servers.</p>
    <br>
    <b>4. Information Sharing</b>
    <p>We do not sell, trade, or share your information with third parties except:</p>
    <ul>
        <li>When required by law.</li>
        <li>To facilitate payment processing through secure payment platforms.</li>
    </ul>
    <br>
    <b>5. Cookies and Tracking</b>
    <p>Our website may use cookies to enhance your browsing experience. These cookies do not store sensitive personal information.</p>
    <br>
    <b>7. Changes to the Privacy Policy</b>
    <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated policy.</p>
    <br>
    <b>5. Cookies and Tracking</b>
    <p>If you have any questions about this Privacy Policy, please contact us via email at <a href="mailto:insta.cclicks@gmail.com">insta.cclicks@gmail.com</a></p>
    <br>
    <p>This Privacy Policy is effective as of 30/11/2024.</p>
</div>
`;

html.termsOfUse = `
<link rel="stylesheet" href="css/legal.css">
<h1 style="margin-top: 30px; margin-bottom: 30px;" class="title">Terms Of Use</h1>
<div class="legalText">
    <p>Welcome to our website! By accessing or using our services, you agree to comply with and be bound by these Terms of Use. Please read them carefully before proceeding.</p>
    <br>
    <b>1. Acceptance of Terms</b>
    <p>By purchasing our services, you acknowledge that you have read, understood, and agreed to these Terms of Use. If you do not agree, please do not use our website or services.</p>
    <br>
    <b>2. Services Provided</b>
    <p>We offer likes, followers, views, and comments for various social media platforms. Our services are for promotional purposes only and are not endorsed by or affiliated with any social media platform.</p>
    <br>
    <b>3. Eligibility</b>
    <p>To use our services, you must:</p>
    <ul>
        <li>Provide a valid social media username and email address.</li>
        <li>Be at least 18 years old or have permission from a legal guardian.</li>
    </ul>
    <br>
    <b>4. Payment and Refund Policy</b>
    <ul>
        <li>Payments must be completed in full at the time of purchase.</li>
        <li>Refunds are only granted if delivery of the service fails. Once followers, likes, views, or comments are delivered, no refunds will be issued.</li>
    </ul>
    <br>
    <b>5. Limitations of Service</b>
    <ul>
        <li>We are not responsible for changes to your account (e.g., bans, suspensions, or loss of followers) caused by platform updates or violations of their terms of service.</li>
        <li>You are responsible for ensuring your account complies with the policies of your social media platform.</li>
    </ul>
    <br>
    <b>6. User Conduct</b>
    <p>By using our services, you agree not to:</p>
    <ul>
        <li>Provide false or misleading information.</li>
        <li>Use our services for illegal activities or in violation of any platform's terms.</li>
        <li>Attempt to interfere with our website's functionality.</li>
    </ul>
    <br>
    <b>7. Service Delivery</b>
    <ul>
        <li>Delivery times may vary based on the quantity of services purchased and external factors.</li>
        <li>We do not guarantee specific outcomes, such as increased engagement or sales, beyond the delivery of the purchased services.</li>
    </ul>
    <br>
    <b>8. Intellectual Property</b>
    <p>All content on this website, including text, graphics, and logos, is the property of InstaClicks and is protected by copyright laws. Unauthorized use is prohibited.</p>
    <br>
    <b>9. Disclaimer of Warranties</b>
    <p>Our services are provided "as is" without warranties of any kind. We make no guarantees about the effectiveness, duration, or performance of our services.</p>
    <br>
    <b>10. Limitation of Liability</b>
    <p>We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services. Your use of our services is at your own risk.</p>
    <br>
    <b>11. Changes to Terms</b>
    <p>We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page, and continued use of the website signifies acceptance of the revised terms.</p>
    <br>
    <b>12. Contact Us</b>
    <p>If you have any questions or concerns about these Terms of Use, please contact us at <a href="mailto:insta.cclicks@gmail.com">insta.cclicks@gmail.com</a></p>
    <br>
    <p>These Terms of Use are effective as of 30/11/2024.</p>
</div>
`;

html.admin = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>InstaClicks</title>
    <style>

        .login * {
            font-family: "Poppins", sans-serif;
        }

        .login {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("https://img.freepik.com/free-vector/seamless-black-background-old-style-vector-pattern_1284-47116.jpg");
            background-repeat: repeat;
            background-size: 300px 300px;
        }

        .login .loginBox {
            width: 300px;
            height: 200px;
            border: 1px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
            border-radius: 10px;
        }

        .login .container {
            width: 60%;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .login .password {
            max-width: 100%;
            border: 1px solid #ffffff;
            outline: none;
            padding: 5px;
            background: none;
            color: #ffffff;
            border-bottom: none;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .login .loginTitle {
            margin: 0px;
            margin-bottom: 15px;
            align-self: center;
            color: #ffffff;
        }

        .login .loginBtn {
            border: 1px solid #ffffff;
            color: #ffffff;
            background: none;
            cursor: pointer;
            padding: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        .login .error {
            margin: 0px;
            color: #bf4747;
            align-self: center;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="login">
        <div class="loginBox">
            <div class="container">
                <h2 class="loginTitle">Admin</h2>
                <input placeholder="Password" type="password" class="password">
                <button class="loginBtn">Log in</button>
                <p style="visibility: hidden" class="error">Password incorrect.</p>
            </div>
        </div>
    </div>
    <script>
        (function() {

            var encrypted = "bf8eea12b319c0d3f67fc442902289f8_fa5d78375d1ce9b01b4b181f92dd5b70edabdd40b22880aedad8d10e52d4680137b9849627abbbc73213b2e0cb5166d9993218248283b5b7bdc2ad73609029ed27c9ea0b371119940f0456e7ae60b049f7db9be2261689d5e165173ede9012841f148ad7e92a23ef6f551d32e0110affb4ccaa9a6a29e7618cdb9bc8b2bb7ac90bd5f9c19efe418626cf494b12012e76bd5a0fde5998aa97c414dd747ea22f1458a10519f8a394c65695205df57f96a177ce71a2ea03b4193cc560248b67d7b9044038b8dd8f8d294e3174ea4bb016466f70752dce1b6a66daec5a9f237cfe6ca136a619d4aed860ecc49723fc02d4d54e2a6c53d28aede0238efd6212ad1405343f957ffdf910506e4a91c759e36d70b8b11d45b50a0c309fa94696269525cb308cde2a5440d7645efe33d86a5fb3387916092e5bc0aec1f908544feb4a0f4dcdd4f5b4e693b09e371f08bdc87b89c7d67babcb1f9be5da4f9fe6f43f61fe2c24dc265c0af5a8c3f6abef8fc736e23662c5e504e73b3b66ea75f51f22396fe284227e077bb7cce2cabdd3b2276634d5545b89d3c8e4d87f4dc7bc6b3863ef4c0d3ecfb31cdaf92115004bfa44a8cfcd8e088c5dec355aa940449fc09377f6c913f06d98868d37924411769d3ca9f790959f93bc447f7b3bd3900517f73acaca8a1a903f8bf05654515afeb23818702bcb94e577880fc7f5855558af75a043bdb4f74dbc7a24da42834eb7e1862056ae43c1c8b91d77d444fd772f80ef9e22e7ede5dc09d841e614dcb704a6b36f60544b147a2b09de97f52c33c55ebeb67e31c78516b6750f76c7bf35520489ede90f9b9464e4ad0dc24d7833ef3eaf442b2737e220792169b7e9dc1e5cfdfc47e78502361c06ae26db2ef985e8d7f12e7765f547e4946578d3cb515ddc7303f54b1b2d5a72449165228223cfc31051273fff9c0211cd1c591c4316894bba49c29f627ed6204f97d5a1f2d60202b2af0c39bba0986d7c8678493415e427efad4db75e112114cf1196406d6ad8ddf7ec782887c5a3ff327db694e171351a4d24ceb46a9f0ce2fc0ee8d28a9b780259d8f4df56cbcd5379c5f5696b7c5bc14680515779e9527f09642687e309ee98132da76d6871d892ac4f661a05af1c023a0f8c0681334d9307c0f098336716e650c13d6b3f1bf6ea0212972a6baa9bf093962f6f523a7268a5d0d468c89b93c215dcac4e34cdabeb753c6d9880318b32a8280104e869684931b52df214ef138fdc5091851b580f2bd41e3d52cfa030931108f3761167741c847a625d3a2c91ede9c044ba561bc1ab31409e901464399f1edbf03043b59b79e11ace9d35f6e9f6cca539fc7d1f5f44fe18dd77cdf31e6cd7b9897dde0d044427feca142093d858074b563cd1a8ba50a91f8f0f8016eda223b9ccac27d388f9e8640fce2281ad8c59b6783a1c10345507eb45e098a4f163235df0a0ffc582684c7ea76bca8c6acf87080ad917ac5465b540613aeb37d6364d82305d92b4e7e31cf5dee9228dc8d0d423222a372bb7f59125561912cd0342308bc3c53df6bc4c3bb9c254d135e1d46da182bfefd788a4306ee60f3fb88aae5bffe1a66c13a3c24be626cae1a6d846af37cc5c4ed92b4a223f231ce85be61d49de148c770d6eff917a130d7dc64521f38b000053d375e48921ef0c8fb0ab5fe7436d07d85954b2efe39d57a7f2ba852998bf8064d31fed127369c92867f5164668472eb8c642984258e94da00f29c65410eaa3c579b8c8bace74edefab0e814d0c95a36c3e556ec69f8a79456b7790a36e5e6e8bcaef551bc0478ec608e1ce08c30c35de1afb02cda3acb31f87e89fbbc71d96b5e363bda3740eb62d133e793389beeb914335dee96d4551ccfb1e784b407e132db21e3bacb2924235d84c92b5f2baadbc5c289448197edbc97c4b9f84a0a6debeb600c65c4cefe9106b2c83d974e51571b01c15296faff5619c890e285fd1b18c3ee6d9b8b77bae951de0699417947b845bc7879fbcf0e6ec7e3a3ae5f5d092d5a711639a9f9717217c73766bdd066169bf4736e1c0ae2b9a0e9d78d922adfc591fd36fe71340b81d170ff531a849403682ed237265dcd9c96717c42b69c9660d47794cd0d33dac686fdab3de312b17c875ceac0acb245e7ebbaa83544365f2b065cfb5c7d26b93abfec787e961b9ac42cf9913b8570aecb13a08990d48b7c5c93e0f619d1658ae317a70c937664db1423826bbb155be42af8018fb83a0748025470048de8d58f4632e44a51571bc96f1ef3b2d005174b90fdb775b6decab4dd268c4efd7523c953798298857eafee98633432bfbd97dba2f51f9c1c923063f2ba1d96b09ed2369cd4d4f948bd720a57ed2f3ec71133fd02f0f2d0240e72a6cdfefceb169b9392d695b43d720940b0b5c51eb5ecbcd12bdc7d6e5e70090832035d5b0d0186fb5700fd0d0a6e1a46ff505980e7aae26383921135d3b49dbc05b88d894298594c5f0f07fdaf116475de150b4a429ce87f2efa87a7c3512b88ebcd2f228846aed6a96e86877e72119b2ec528838555f7860564ad395c4f56c2dc6e50732a59c5b6623b20690408ecc0ce9d31e40a9eb91d7e1a0a4f35ac183d621bfce496e6f16f39620c8fea959d362a7ae9d959011e53717fb0b05be95edc8f396a0fc746bfe6c0a10e5eff99029395ce5ec0f9e0635b407d18dfa5e888850d2cdfb65f803994b8f325a73153348c287034c0417a21e5563b34430cd8c3e84d7618b3548ca7fc74137e05051db5bec7628a1f9aa6b99f8f4b4945ba8d10019a3f65adec59ad53cbd603cb24d220c75f568e26926d5c5f6d1d4619bfb4d8ce8a45862b778fc60809d972fc4ca12a80432d9809f4d8c8d4b0f6a15642ad7bca2caadf1fd6c2fee3d3c3500b5930ae29e3e35d774ea7103a90ee4422f12c18ad48319b6a931fb014a361ad3c198688de540d7458b7c1388248a12f2f7a05fae1b5940f77c1fbee93ffb2f11533dc09b6e23e2b5cc4ffd723f1bc0c5af989d374f8a58b7bf3abfecf254248fa6d3dec5a3a9a9638fcc58e8b1d4db7137a64fb97c8fd8364e4ea5a67671a593cd015cbc177af32343da50155ab24bfdb85439bac22236eb66feaefe630366d73d823e280c3a9f8cf7f636395619f7454346ead78e5188b244622ad14fa729c56bc4bf7babcc8e2d0d97708b7c4bb477a1eb09e8af047df432194fe5d0f801144cdbd68d117c3698b99c3f9c4655a5c176b584ca2fae05167d3928be4bc0066c4260dacb4a5b078c932319aff5932c2aaafc603a99c3281c936f5dc3a0ee1a1d1c073dcc69ef9ad356d87b01a97e5c48a8f1343ce3c940d7bc7fac3eea36f4c9a8c1e1df9de6422b631702aef587396c9656abd7070c3974bd3564c61ee865655ad77b36cb46d1bd1b46f533fa3ef717c31031344ef46dc1eaf7f779427f74fa65721b80ccd126ec8978a0775ed4b72741791256fb41aca9a88d6a93ce908cc2f95e8d5df8a78d771d6f2158abcf5d31cd8fe5a71e23d02d7b2100ed088e5cc2772f77bd6b0e07bb230966f8b6b3d53520e00abc42fda78bb611bba33179088c1d362a26060ffdec4cde978a2f2c4f94706a73c949eae41fc2a938c17e7afb5e624055a084f959ba46ede87152c2b5101765222379ba538c2e56d1557878db1ea57f80fcb72d415462b6c8cbcb9b30ba188e03dc7806a605e17cf4b8ad1a4861d9c7956507a0c65a59e60925cf9653abb685b9a5dc05213610b095051f53f334ce0855b0a39faf94de108e8b8651a053e26a6a58db7bb71ba6e2ede95b8a80d83401d1734e5cbb62e2a5b89fb75f02ae58c9f036aab6039a79466fa159b4c4882088e43578183032401b8f6dc6fe996bb47c86b9ae1a57a072b907800808496234f7681c8df0e33d4c5aa818ce6b7ae4d9bc5af86b1787b9810c0a9780ab508d775a714d326fcd51285f6fc43e90ee8207cc81f048b4a59bf6e9b5887517d09bded6554d3c7892cb5af9371b59a55f0b7c7b240411c550184135f9f14012fb4f947c9e3cc5bfff5e3e6dced0eeaf01d74d70f896dac4d2d15bb484c7353a30ec0540166f59842024794f5cbd33fea833a3ca678941f6bdeed63ef84a77c9227de5596b4436c9d7917bc5c1e7d23dbfe0a7bd24feff43a96efe8ab022cf62fb95d0a563b19ce79910ebb5215533b6524835210d8b40ded019227f0ae0069c8ff15dbd6a68ff95f99f95a6bafc4f3378eaddb592346580e11b6c7b350faf6ecdcc3eb8cf240ef8f7ad6f2e3f500359f98be7360ad96796856e96cb67d790d0316511055f50a43b3ccb4f98927e33d7a9cdbf6d79faf4397c7addede29b270736cf3e598d010b7523066cf9a352f07b166b01a177368d986313385bbf8aa7fa76ce5c24b911455bdd3c678410d92bbe2a26c1032b054d6120c0ad2cac33c35ff51b80a80b3d596e9a9fa10d3b352405a43a4ebf9ae3ccfdd8483ef3eebd22042ace97a305ad6c059a819c1214945f5b92bcc9bc80a87c462a5458cd3a813978c7870a761998751ddbec17814303936c3d2b0b08f1f9846e8b24c8621653f5588743627f88cd7311fdd5534f878a231bd4b38a40e85ec8ad531deaaf5df9da56f9f3c8a4c361e9d8b14f37ca90bef5e556df39f30d0f1fceae3b7c6f1383a2829d0e18a8a539ae5b6277cb5ed66b0b0eeed80d80f0b78d9aec0dbe3ebf5b58b05a25e3e70f28ee23a32ffd0dc012d100dc621ede1bf0f77df7eb9f873a8136a9ad9acf4c99d252559d92a6ee73a9043ba5ce974e4a1208c9bffce555f569593f393b6ced08a5481290e9e3df60606d5bc98983a4e3cf7e5f4c5359a01f90377f286ec34da927b52cc73985c67d61b137b325682702167b65e5d9ada3ea7eafcfaa66cf39678603ef5c634fef01ffe0868f82d6e023456eadbd4e819202f758563c7b8a420728f367964c6eb25708bc1146a358318da2174ab7196e0e73fa7e876a1260572783e54edd315a694330d03357286a2d891d2dd6d180ed280d02cfcde5afd64ce81f6fb8ccceaec7479cb5c1448d4d90d041c06543deb1990140a9cf4674317c9dd9c351aa3ce86703b4f1cdbcfa5beedd7aefd50864e70c2a213ce59a060820aeac1f015ea4f241a31404bb25f2f217b238cee386fce115989d528f090de9efcf38e6d6840ceb8744467ddf0d6f7acb12318da57cedd34d074c5b78a8264705d13879437881837aed99127bb715f767697b12825c4ea19387fc07a68fd5ab7e7b74926d32adf947a7606de4092643e122f97fd00b88ac0cf74cc3761781bb83ed0dbc62f6a8b03821b764fbe6449e81ec93b9e20f72f4701aa03a3253ad489a80139acd538776af4a0c871f107812075e321b2865324da45c4f9943da91e0c0124dac4624cc11d96f789266f647b7b4aafd34c3495d8496fc2c40be4cdad51911c2eb31bf3fb967292ee13b65bc049eb65886753487754e90b0e85ad0b50cdaea01c8d1ecde928df8fa11af9375f1e061034bbe4a1e1aeca1bd359fb98bd941970e0c2d94f0d149758970af2d5c26cf9183a17eed0401df97f12681bba136a3a9ba59a10122e5332b4b06056f5f95ea5168bb5aa2097734a8c0049273e511919b081bec0b08df6cbf75efc5d389f49e4cbd851c2ce84ad1e6fcec45161929a8f5ea38d585308cd8a1947419745e0c66ec23f9a4a3120a4217d9d71dd60925981af7c7978740c97294c7e4aafe0b065cfd86cbd393544fa62197ced355b73341170d413baff9c081049f04ef5d8c69f64d42ab8f2782560b8b25382f82dc8300af9ad0dccf1bea169188a9575d98eaea82110cda30d93bd5b260a630bcc0d140012200a3608611f1025193c25bd30e142ce435834429a9c199617286a358aedae5aaacc30d2bb2120fe7a3797a8e840d1c5cd58fc0937774599e3b44eb2fe18c012a5fd7621b6f06f79fdca50475d3be68746b5866b2c2d9bf0e337252f068189bc7b2c2e3f3c207bcff2d4803d80cd1183dbbf611763b2588e9d6c2ebadbfb26990a62ed325a759ace8d89913be6130780a86c08222c413b221fbe7bd1311c272b49fe72bd69235c98f8db0e9e6ceb95719af99ada7fd99c565b8b2ecbf309a8facd91317bd0ecb3ead3e94053192045d0f09dc70ff1526ae1c763b8aa73797b43c925a1ddb690fa9c204a920339ced872336bbecad5c72500f0286da99644bb45c3eb766497aa070fa4cb7342d93236180a03c55d738c955eff0228b950a2ddcb8a21b807f6113b21b899ea1a2df2c7f992478b7bb647f781c8f897c25a087e78ce4ecb366c805ccd3129b468d6db76e75a8a5df8bf210742dfbf7b62d684d21fd7240ac7c724c273e8b68e9a3c05d0836bfc81aa5ea020973027c8fe74c83c92865db7c5d4919bed44f0e6d52a39ad0d57c27e153e1ae73e6e894447f8d91db5eda585b43a60319829234d8988126d7cf87f64c2594b7b2bdcb1530f4ec933cd847c3fd59f2053e84fc7e95e26e2e9401feac4d69d3cddf93f20c45147ab305251364a76d58a910b853281a5897ce626714f396640b61de4b9fbf5910bd3f875a1f40fde6ce1f7a2003cd17e1fa3746b39cd238bcf8c8552b24b5fa2e99dd46863e8028366114c9af5ecca7630a4d6ef50d94d714ce09ea9d1af13d18cb43c4055e0436cd5c53e7933beb6a401d40bdbf30300742427c61578e9748de2bbbb635805f294bb7bb84cc4c3f79570841132257474272504441e35ea688d82597fe2e94b1f88ec8183f03e8d4174e407a37a4201ce19ccccf4df2cc3ca2b68773e3477cd637e2d4421a3b33750e12fc07c64380481470f002716b9fcbbbbdf040561de4b69785781434b5c1bcf6bf6911b38038dbacd4ecd9a99bef0121114aea464b2d5071c5c31b49903bcb1b32a7eb019a8eb2b5988f6d7deff264b13a7895b4d64e7e2f9df5b72bb223a0c509ffbdbf7a61899b5e818249291fb86b3af101c03df4b68d642fdec02654186d1668e654eebac1694a6fb3a3b8a3168530cacbb948b2493b7c415bca301267a777996dbebfbe3084004176e128b7ad16a5ceb4880254a5e5750da005e4cb46b9f0c6be74f36d0149ce3e0380322a7723d1c2f623a6fc599dff3cec2bf2b63ae02aeb8acbb6f0ba60a0563b8fcfaa14b217df7246971ab11a77d3e14274cf8be600eba5825ada48034ad78873fc3137ef78a0527c9ce6999d6e93de4de89c50096745dc4ad0e7a87f5afc8ba91d2584a5cef9ffa53ce76ce186bb782c5c9a9a5dc25b763822cc2dc1e13eb4e12d5def0ebf5c31b5d52df3db22121e0ea475bec5dffb75d2324c011cfaa02785ff024bf6ceb973e9d6e111de4ce3501f8dc092f18bf7ecad7520f45f34a8c361104b6b1aca66c75c67a9bfa50196e9f77e8920b63723044fbbf21d17955936c6a59939c44961a42cc8d7a4c5982fe06f212e625bb041bf8c3c644cb9fd62c4427d724ca571986f3b13d743f9c271f3c4e8344f770bd2673eaec1c8c840338b746e9d15f1f7b326d9bc1cf06875c2ba56778070e32e38f5ecf12929eddaf70612b63e32ec64f6e9b79dfb1675fb19ed342ae616318a4561abff74fc63582a1c2bcf08f4230855fcc7f63e56179ff3342b13a7aef6d2662e7dfd50ab81c8a9e68e50379e4901ebf2b739c8197011dac57a77d30868323ea52bb6b8bf148e174d7cb21d6670d3a1c2ab79d364db562b3f32d6335da16e6c0665c0c91033dc4433cb162eb15a06c10a0503c502a3e58001138a9b6a2e0860de0c0be76db9e87b49291240eb87e6442816f1047c80c6b5cf1f73aa201917899b23f397321ff034ccfb8b50f795f3b1a2f1f9cb0c13698353ea95e92d94e52586cb2d931600eb81eabed3502c4d53d671df09886167eea72e0793339460ad7a094ec82edc2507bb0114918133bb36b2134be2ac17ed111833cf5ed3508f7deb21627f40c1285f9313873392303e54e54ff628b5cd185ecb824ddcefbbf6a67b368e74873d773a5a1e0bb8a7f97ed9541ef37a52d689cfcf0ac53f3c8fc525b6ae585034c28c003ec55dac62f6d9f1bcb3d0bd65e7c68edeee43997fec8c62895d61e8735dd2815743b516d477f85d9a36150d83dfce362e04c2b39006122babd5498d289370630872e86325f7e9cfc9e125e59f2856166dce8f54bc479cc459f7c63e5c11dbe11695b44a3163ecaffc2462978b2f2a99268c2ce838cbbe999a3da9ee0ab0ea2dd18bd6f2bad96391b99484ff44ac880e38a43487f7b36c2f99812e1b0e3ca482c18e8f560069c221a7441fccb83b055cb271b4405876d515e2a014768ff59136dc027d18c994ad54476a3e9e11cfa0bcdfc5f432a3551bc3f46792bb3bf656613a4e323899af2bb9c233d136a75669c2514c6a38e39b0ae02ab8b691453cfb81072c0cbe7c24f343637776cb579ebced246148bcf862e32633c379ba58dc88e95b359657f486e5ba8fb6de01f0636c2f9bac54882177f912740812dd51a7c9d33bac10d120831c6dd37ee94844c138548eed4d5a3a05eab4dbfc25c7dbde85e87ad7e3422b062508f98b2c531cd5011043374f8f129b938b544050e18f10d655e4a4e3c0e487989894f296efa0f4f018889fc66b889e7734f43968a3724548ceafa3714431c51417d914fb7c4309f283bd409953a2f82a26204fd7121e6f9dc0dcc28e62d2a3593d409f195755538d0290ec045db16ba9d821891c648cac1b326025e0c79de10e7c1f9bb1bbf36c9e7b1c1929e9c3263c74c91e5f3f95b482f1234bd47bf1d4e8cc11b5fda79e94b554ca7410d1198f1df67388250dc4f361a9e7158aaa87ff06cb1d615e21fa92ee2c685507ea12f756dc3c14809cf49f17e1f7bee2ae53a7e7a9b493277d3cad981b8f7a61a9b6400673f7a6678505656c0b740ce9850e3001b7cd567bfd73fb305bf759a1004d071be2cd46e0bae494132f27e21e2ddd4c3b7532daed1732efbd520828c252957300702c6a2417ac6e2a8c479f0f7a582074fb299dd87911e7479262c84552f375e61cf82bfbc3b2f09551962f60925497e0aae2cb071d73d58bd95b277946a5827e8e994e00be41b07019a9c5d1abf2e25acc9ef566344d93dd279da12dd77dc01923bd69deb8b7c763d8081fffe5dca4f4eef9e620027cc5dd2de44be84ed8111fe4dc48e70a285a08bbc23e692b9ba631e7ef7100f356e90cb8d60c4abb9ed1c5c8214701d3b2ec2d4c615356055ef1d3faff651e3082719459b9b036b499c1531121c55ff20367ff8a43d0fd97fc9a26203b3cf666e8aa513e3ca2d64fac211ab59dd6da376c5fea514ab7422b793d22399526ef2818c41a2bf8ba088a213fd3577ee82cce9f88e9e4e6816612109d16f7f1b662d61c04f3970548d43034b0c0f802f94440ec9e33450dac0ca7d27a1cf0d5ad29815c8b97e7fead9ddb37ce61af53c5f25442c547411f3caf9358a5e6d1b8bd428f81087a32f6a2cdc0646cdc0abef9856b110078abf844756c370bfb272b399df22225fa06bbf3e79e15138ab999f14a743ae8c508a32133c31543801b1812c3e9b0641a1fef65cd6fd68e14ff0c44131da44f420599ffc4d89210811f7c09aad171f90d6010c3b9ed6fd69affaf5a112ca25d155941c67afd4dd72cabce68776eb6475db04f72991b4b1b65141008ddbd24246ab4db689192bb9656a3fe629c5679eac6817998d95d8fe52c98ba15185a7b22901a265866745e5ad7e1ca3ad7ae795e96524d4bffb3a8a24f9d2b08c010b1c2bc8b30cfad2af7718ad03fdaa7dd1d1b4ad0165e6dd1b65cb8003720bcb6caa68ca39f535d2976fbb354d9e0505783f188a53953c044ea04801110d47efb3ef23d6832e765d3a4b36096084ebd3c5e89c7efb70ae0d21083e2ffc03dd167948c7ad8301868e63fd6a4f2b4c3069764b6fa264ba98e0dcc2d7ca9babeb0c0975fff9d3db2ca9786ebe0a468976e5b324ed77c493d4f0d9a3189dc2d41650ba9691325f05a5cff19cce119d3d4ee8da379763126f9208735360b0e1658e408daf55453c891742dbc2a7b3f42077bdd450e1917fb3f9e9c4a5f9eca9451aac46c49905f93f6bcf364d0722992099c07fe80472904a73dee83ea9f6aefbf7ae655b2772ad6c0648cbb8885b40214ae44f2678fd6d9a97414d15e8f33739be5271a716190ec09b16f6937d6449ca1fd886b0cbd5eac4c4cec13a73f662e86f87c08ffde4f4ebd68455b39eb99925d634b3dba125f42c438f8f45d4e5c262a1f33bdfd9999fbbe639bddbf46bbb806ad4c5f6f93b13d639f499cfa57a45fda7c600b9e53ad8229deb50c7c2f3747a048139453a1cf426645ed33f88cacf39b7cc88fd7b2269a7f25a1d8c1213f65e95525ae991b012cbcd4c60011784dbe77dd5a9d3de5a59b103d0dc4d44d84894e4b4ea043e4eaca18f030b4539a572d57e58571a095de3bca0bda14bb7dd87d7a2a05bb2d733a58885289f84f7c1a84e7480f3d57cf23ba9f41bfc8c276c6d193d53534e7128047018258e73d71c16034ba3e61bcc570bc74139ba6a05682c707dded567421c9e88c3fb6ed2f59f28af460db833181d4d8653a9834af70b9a070ab10687e36909e256285b5c1cc3292f95ec125c89ed482bab1fd439b82d42815d97fb7faefcfac1081819186cb76d9d5866f644e05fe125bed69c1a5bf98d51430d313678111d8f92a29bef9ef75a246cc531d01ac370b67580d8bb603dd7f0a9e0aa5bf39281b37481f055ebe482c3a23f7b35d87d8d8297298b9a795dca11a3f8f0c05b82bb7d12330f055bbfd19ab1b448d8e934bda49fb3f95c30bb446f2618e5d943bb34e89c5dc36f7715a8f5e8015066b4f5c9dae44187216b6e5633e96a1276a94a67040c4bc8b49e7d557d6829044a6c79419f7621e20b99cae5d9a92bcd97592a3d4de82954ca70a7a70c6446fd990c32fc81e92ea6e0930ba859be1cd79063d7c1f24d70bfa54557a7d43ec26243d9f76039b2667e8cd49006f03f4b381067260970bb57cfb1b5b12657959656fb597277b7b509e867521a1d7caf52d1ee5172c1ba588b4d354a6218f69b09b2673c0ac8853f456b22066f29e1b88d86daa359b09a4ade6ec31572489e17a9a2331501e187bf4a9c9e006d252f407d9a563d4bd46aaca4433c491fdc449dcf388822e432b79e2c4c5ac633ecc193154e7e519fb372c1db29af2edb3c60e5ef3d3e3206e7075036a6ec51489ed416322922ea02040b6df4954e6953c2cc5708e750359665e0df3f26184f757e6522efe8c2a7c74f58d087d5c341ce335e8803dc148babc99753d87f514ca16be88d9f1e473a806273208a4622b3f1b6eb3494324ce765d3bbcb21c154d8383ec6914e35c92c052747e0b759e3f3c39b82ed1a52a39fc2998459fb087c829ac8bed7eb83db01239e423a692bc93bc4af48de4af084f4737049e7bd575782921332c86cdd0b1c4fa98180e524b5cf559f8e0e90c78410b9ec1a00f295f5da6aa39a8a104906ec125789ab86a6833692a8aa5c53cbaa793cb591059ff654c80891c20068cb66330d4fd1448b84ef79d4024c6dee7c64a231231e1122e86985ba66a71440ece6b4ab292347100957ffa0e16e4f74f406005a1ffdf4ae801b984a6802f1263482a1c5316d48f46e1c44781bfccfa7c9c037e93f517749afbed7a81c8ca559895b5e010acc4ae1051684acc7faa6d02cb14f5e5dc1e168cc367fbbd58e024f3d5e3b6a7acfb3a97a50b482bff4c464ede92a3c3308be39a9ee8cc8cd65ce174aa176609b16275e223d7e035a316d64c84794b4456319e5e6f9e6f412d0cd8dfb1ff0b2304ad58f7c7c6750b52bf4034f3987ca1edc8910b719f4f3f6565ab2a3f54e272d1a2e67570458ccf6fe01764021962a8b6151814aaafe985c48de13f26831f15f02b7473dd3d190692769f57ea00a015695d8f00a932d876c6adb135a4e1c3b92f2f516d7497355a2b02b3899de41ecd422e39539d42cc62d6eb9a7a413fdc892cb4986f9141c1bda764e4e1946a8722bfe4517da9e67b6d039f0c7fb24265defc9caf5249ce18e14a3cb0232ddce9d69aaf525e654e5b4577925439b64b6f5e6568b8c466f1863699bea75ea1113403b20864c71a417e33195c6e5d44feb5b19119c67d0b505f6a2ee4d51e35381b6b409a8da43724d8232c07f891e57d0ab3a53358e2f65b9dbf44e4686b73b1d07cd437f55c1923e5ceb7d9a3f499f9b8ab3aaada8b55480173fb0eaf4973b489b98134ba1bafdfa3e991e0cf4c6c0ff964c14c2f538131abb6d7eac625f5f92b01f531c7962aaf202d9133ccaa5948a1b5a510c8c4738ef5a2f0346d45df2dc53b508f5df4f821f2b1d1f08e94e4ec6d5d61773041bdb16258d237b2b56ffc32abfe63541a32e22b9f30970465cd9e591c2e39ff19ea4c92f236eb6eb882f43a3e2e070589b895d0e9acef3203cdb837adaf242c1a1d9c80b6454c45a0466c84c30135c617149c13ea1cbee8ba109c192bec4ea1cfd27559609375d43a775bc1e520d4673f0538b619ae02571e52fe94310a59233652ce4dda9a4d329a3acc274e0fff9f32547c081a80b3fe35df193762e31f680d2a93025e5bfdce9a5bd898ce92f53c825e525d379148154513a85581d7a346e8bd744829070ac9c3109e4f55c69b042d2bb89c6b3fe3dc6432087773ae6e0317511caaf8a9510df045d1249102813af259095327e4e6b5ab184266a8a0e5cca7e45598a490384e193725456024e6c7a8351e90f4a162758a7fbe8eedd6694f14e89283492be1bcdbdd17d379c5fa465d46826fcaf1d2bab11e34b1e1a7de50152f3c4862ebdd131acc5bd13af0d04ef61eae7b0b21e0ba5ca81d423ff5bc3155be93db10b817ce5f28c36b361ab9ef5d5f7e96bb85a4b7aed0a07e65be576419e97db1c3126efe2be62aff27949b313b6abe19069b45aea698ea6066dfeb0656d4b3ce41af0a51e637887cb39e5e24b4375d223dc89e844a25b1d49e13f5304cf5177ef9a89a7c7da0a27be690aec92847e85f54d1d1d207f4069a99b78e124c3008671abfc48e3f9dfd5edba1c8f818215dff97c1c1bf6acb8bb1b2a4a6932bfc9798db6b951c02743dbe380e1690c21e6a95cfccb48c369a6964dd8077f52e0963af701f2468ea8f7c03f7d5fb4b19a245adc5c8bd48dd3228b76fd1330bcaba88637829e3f8967e8ac15ccb99d8c70f67cf7f2dcbb3c1003ee4eab67af9fbebaabd983b080f4eca933c4626afd96833b11fbfaadc46dd7531630a418186d67c2865fe7b9b7c3d809fedf95f2a3d91f243cf1882218137adf2ec9d89b55a2fa10cefe40375e8e9a3c71abac725bf433aa8932279a88a3d78f57a7676e290493a4edcac258143f5d32f6baec4c7952d3f29cc97cbf1fcd3e514d2e20b1e4d0e156b29eb848665961bf48a44d817409567faad332db02ad72a4b50cce231dee6d9a71ec25a636ec8995a9f215f9e3736166e8cc97df1cfa4c77f1e29c9acb27d9dd6156df6066b6dc36e299a5113644446506609a6bec57aee4da3f876390b67d489cf7487b78c69a531c9e3c8d783d72dd5602e0d95fc37c966033cb0a8891f4c53f8238f4e84862f31ac3e1e141f72c425159ddba01522616a3b907c83e6f5e1da4e03f196edd7f602e0c5adab039cfa9e178e9780513e1f49d4b80c57e2555bf7399de49303abd657521d597102abe8657b4a7b50271f33cddc04a2a7d4198acb88b218a85eec8f44e2804213255ffee72a47c436a21686d1853835030cfa23db9f287be099badf06ac01108960dd531d6de7b3799b8d0bf395a607dbbf8f0c75712d261e8bd467369511b252c1f2786652ce66c402b191f6af2c305242afc80b087c310fdfc1f79d273b8c33782681db010e289228d91aee98560d5a6eb63b513be6febbb7bdfd52f88c04a3b1ab529f7749e0d7f0371c7a9427da0b5cacb7fcaf159156d822bd2b25883119d078c5946530d4bef08e7ceac6eeaf19201de976f6526a8f7479d16cef50bd1987232b8bc1cd2731a70a0de30770f6abdd1c2d7d3645ac9225ac29a9ee83c25075ef31901219156eee7db4ec8d15620b80eefe5e5fe3a7308b0d351cb7ad90fb211d4d5da773452a830d289235bf35fe087283236db0c0aa55e77e49cfda6cc27087aa6feeab012eb4c31b6f102e9fe25311f6fbef361c7c7b5f3a728060fdfec27bc39506135bcdf58e080a0f217b4a78f4ab8a91d6468ae7aca5edea8eb1bb8d2a1c31e469f493a4c14d466500dbecdadfa106cc725baea1e1061dcc705cf6d839ea7635796a8e1246e5b7610c267e3e1b5afd956b22c935d7556362670aac306b589df42fd947a0b50f7a14e23bc5109b6ddff8147d4106c9354621fb1ae439626b50f79f1a89e8411f610e4fcbe7cdc7017210130530ebec2cef56e7fa950de8b3b71138d57016f9d04c9a1facd2577442bff03af27c03efe0138f03bc2538adf4d084d28e03ede9b8e78d5e3ca367cdbe0ab13cce926a2419e2495e5a01c749f32480bfe97e18c978ddeadd3600db328815969818440bfec8266429f5ebaa385e8076ad2df47aa14b4b9833b85cac008156579576a697f864bdb7cbb9f11b34cdfb190a84ecc2384b04a8e608562cddd5a069e921211602aa859439f0d364165f0b2700ac3cc985258728e5814e99915253aed5a10d8373a2f43f9dae12a80bc80048de69085d81d525164ee6c2224681c7ac3e5eb3fe59bc3d6fa2d9991c23a648a5e7189ac570d59706e4b213758e9851db8e52f18085e8b302671c858e4c6d8bc46d154a8b73a3e9d90da2974b5e662580aff9e08b4c0e06439ef3b6793be35a98c48c34c1d7d9ed0b2fbfdbc8fd78769404386a345ab963209029cbfab5ceafac191e58784368272045993d35043290a4bf5dea183d4462b4c089deb7a1e04ec37cafcdec4453c3e7d774a471c25377a30a8bd16bf2139a39a9e520a555efab01f698829687fb9f3557ea822258913745e6177018656cb3fcdc099b6d4a4f57bc231d86cf55bfff9f9bd74b8119c34d2eed230f72e700e4a6fb15d9a64c03ee233f523df3746883ce405ac338b5ab3abde2a75dcc39ab46c4320fd543d102d87b3ae15e970dcaf6452818a80dce6b6292a53419963d63f22835a83e4db236cf83d083e59e9cd245ae40ebc971d2b35d3c701b6576ba4ecba598d44883407bb8d0bad69cbe8a606f444be1c367cadfac6c78c9634f26d31bc1bad56d142e1f353e54beeacf11a5f63ea430fb9eeffc08a803c00953e29f24512343bd939be04a90bba03d820803eea8c88894308434aacfa8caa03903de964e1478b8e06f85359b5e3a5c89b42e275269a13fd04116e6fe1b92a3506295c305fc8a97271c6f9ca15a04c27ddc76624217e86587b20339c8e705316910fa73c3a15b4f785800c09495671be9073dfb610eed4bff5540daecbc0640844d7474683482e673649c0ada7227f5a38911487c0c92b72945e6c8cc0f78804445ed78fc84d6f81aea5ea27e9c4c82dc23d436c47a5cea03160bd609d2e5b3c862c342057fced996477c1175030166847eda8311c4fd008b21cb47885381687a0f138ff05b0ad6edbd820c965c61767b79e60c5fd02d618b738b849a31240e2b24781dc2cff8e469ce50b77d5e9f232716547e8a0b0cab3fb538e81a0de52602020a93e710d6f1e39469dd0405bc55d3eeef54caa7f4dd713083fbeade7a344e7c54a3d295d1215384687e3aa69005e0d152e7cebaed06206da8706ad93e930d55c9f3d32fd72cd1adfd0b50592808df0dd4b4a36b0f5dc408ff30287a1b5c0a08bba0113793ba3d40430f089b18304f03791fa669e40a334380effd67ac531bf5cdf27809c527f57e29356a027c1caf622118872d4beb9fcd9cd940a4bf61ccafa4a16b27e1cc6bd458b62e784ff55c3dbc1cfe119b2371f95f5a05e3e4b8866ee563717035657eef300727fcca0fceebd41e4959431615fbc149c0ccbd3939105badb1a43751479cc73bb574c76e6972a7fb5f72e61bea9f705635b02c73ae2123c1d4768be7bc8717b484b841a1f2819c501c72c7734ffd10cdd1726325d4b45696a91ef546a6a277d83c30aac50c184d02a65eeaa2a79fbe9927f3bcc4099b45a04e5e3b3609d042a7b302089a001dbd5dcb97f45e30d1491dbbdc8ef146befb69fdc681f7c3cf65bd11d773e190671f04a5a4a40757d2ab4084384fbe28bde9bf00e5913ccbfd5e8679acd19ccd4852c8a054efc0ac4a9ed909034d62b575b3a3399f74c0f64e68cf911aa31b117785c4d013efb98dadfb7c4720ad3455a27cc07a20b6a70005a7031067899c660a21bba69a051c7f1ffeb58663f6c039d2220752776ead15fd0cbc096d0b404e51004428c35086c402e6e56e7b7197362fa19e55174d771181f57c6ab14ae91c326c8871a0c3203a08161765da6d6a7e08111e2d274bfec93900bb7be6b53b400565b17141a345c7a743336e3e7a03a91320afba75acab05dbfbf70fcfb8ce21b71a2d9a48e00bc6f45dde8d1b22236c562df4cc48248d6999e7395dbb348c7110679feda7352704b7987070f75a9fc44bafc74afcfddecdba3e6161402c2543d69a5665f8c7254db52482b7f59fde300f6ac67c505e6f8e59ee2d135f67d4a104107b6db00e63b0664e8f44ae5f47d92d430d491cc267b2120e7ede7612b1b2bbf44293c82276f824711ff8dbf9a3a6ae1418027e5b628cd65884d1cd59aaecda32d8edaea72a8b78afb5040686c6366768b8553df8b8932ee8c008fbb176e0dba4e5ef3a26a003061ae00ef4a834dd928c70a7a2a02f93f6f1e02d2a0592715c5bab83fd631373bf8d0417a4d4968a38a75b8e0f2504998718bf5fbe9b11cc6ba1d7f3987be1a072a7e81c2adc454f4c357a5bf5bcc107c434727adb46a9b776c1cf4c207bfa5509b048798563a1c1ec762e7e6bd5a72b5e2ad36653ffb6c6c49145dda7020653b9abf5fa2d1e59d6537406457818f511ed1afad91ebad81094baf90ee1e2905791c089b736c5bcb6aec323486cc8f84f8d0b5c3e8929783706de272fc11ec780945b26eb9dbc85d2201e72bdaa4fd7414be630f3d4bebf878860c5e18c47adaed5b0abdee980ffd27d16b207a883222c15da688960307520f85c9b9024f3e1600b6f2a3b590bb2ec13218031e39eb6a49f323e146700c79eec82e4714f5634cae71b1a749f74cfc1abe51000a0b903f8ee560c594307612786e302f749f3fee7a94408ee083e925b6b7f1a3ec875f36fed03f6d26c686a78382f64d11629ca905973e36a2e00195806b5dfeef3b7778465f01c68d378ac7645650289fa7bebda2a6232ab3f3d914bad1b5aff1135c65c98a2bdf3b79cf399dd2f7b6dd5ca37e4f9d3d56effb71adc4a42e9e3c6f7bcb0e59d547427d476fb3c330acc6910ec41dec8c5610318f6fa3ba93e39cb62bd0e923cee39e47eb4e27e8edd0475500faa2342aab00aefe34ac7ce37af847442949bd7f51e9557b998ea2977bf359466c2367cf56c192c91da29d9d80590b331f16e347b1589526e3eb0dca41428cdbb03731594a44fcfb06c7adfff0f8239e894af59a5ef2dfb3c324faa70b28211fa43b72b59499211d19d7cca4d0615e3c5a62939955b6de77654e49fb8d5c865d21ce00987bec52e38c4d1960dcc1ed82b17e29509d5206492ca656e4652de58622a4edea578cd6d52cc5e6e3477e951b1d558465688893c61e0de67d476684fc9b8192f5ec9690f712dfaa2ae898cf3fccc519710af57e4351c88fd171adca86f579680973a22c79e3df163a7fe7a31193430abca4ae74b0c8f70d7f65824ec6c03723a344f572e8ec6c331a7a664b4ec0b1a7819b4726db848b95ce6ae7d603ff1413d0e85a5d314ea4f28394c1b832beb21c6af6205d232c85acfdb54d2a944455c37ba55e97501b17dc61f7ad98f918b265c2c95d790dda07564ad10c456a3ca0e5c04fbd3ff138bb7af9475b669c586130c5a968ee46f10aa614d547f9576db5b12eff612cfb6d6e998b6a7ae224cebbb0c9109a647410e87d5d1454120f820c11641cf7ed4445b82e346f91247706d6aa65bd7605333c3d973ebb0fa53935d9bcca9cddf80d14ebaef201bcea1ad4543c19ac599dce8f860112fac465a3576a897afb0e4cbd30725a71485a99363aec8a260f027421a4b24c35bb5fd4f124c00cbdf4d6c6703f814fda64d2423a61cb0836e8612c5644fc31fdea7a33e80365a0e0f6139ae7e9e5d1ee1f10012a22e9e1ca8dd0636d6dad8717e0243ae3c65d84f3c9472be22bac95603681d55b95d1f8fcf825e243975544181874a3cc6f9ac4de42f70482e5fd416ade974bcd97512d2fd59773edf0f6de7d148f76fca31761904ae2a46b40268ef2e170f8711a851e1791783ba44346b973a78d0e9357a5ffa86dfaaebb723a75e34f26516f2b571a337d37d5d5923a1951d286ab823b95ae3d624bc0c4e73c0d84a68056fe09cd42533b45a48e5c7bf939b0692a54ba50ecdde503f5cec537336cb1ab991697646885ed816e4be59b3bf08c84894dcc258db169e983a7ef3460015eed93ca063e4beca8b4cbb11246d06c4985a0f66c1c8b22a3590705a75142a6de49bacedf4ae18e80cfd4d6458f7724c8d8bfaa403591f174991b97636d0e4fa16c693083c89199f32eb580e403b629b2b46fb6d2b5079d09ec3a7a4c7099891a7576939b9b8e0e042170de9269e41e0c5d0dcdebf6ea4871ca2e979c5084e1e2be258f675a0a47a26dae06132fa0b938e2a440a91ad7af65bd7a2ca6425a7eece4456b49cbfe080a7293c4cb13fd5705a4f7b45b3155372b499210b5013bebbe82cf7fcb827f127a7d69ae49b32e1f1f94f7f711dec7a17ed4bfe8a85bf4973dfcb0aefac240f32725d063c57c9aa9e42b2bec909c2f8f3573ecca25bea023ba62d0972f82b705c5871aa2d654fd27f423ae2074fb4ced6dc96b8da15cb013d81659156498127ace262d44060794379091ee181c9fca959d32d64f307edb7112b416970416e04f2a64352f5fb3971fb3588cb4d93c99914c2daac6cc43f67369f673a4916551c768d7bae7edca8ef15e38133fb9e376964af5fa68a7fc354213e9fdd145491628dfaed51318deb8edf2e22162ea4f34bd85951e0641b60a975e3683d19f2696d360f8073f750175bea91383154c43fb38efd1acf3db9a063d025d31badf331c3b89f65985cc6fd1a5fc1b5af0e64cf17d0f4a83763810f2ad34a671685ab159bd37532d8b289e64120ce8d97c47e83d4ce5e706fd0fa33565a60f37c62eb497a3efde1d588b5c9b79ac08f51b1e5a8a106da55d7b09072e79a959b3a42ffebaa6d1b83ed7c379fe515888b1036266d8f1451caacb1b7db9588f156099b2ec017eee6df082fe65a8c2f9de83eaf6af4acb1365f5ed6470eb20d41b3014fbd51e111639fb3293b1968970c8bbf5ca72436d0328956f3745556315c4b8da0c8740d7984cdd3c12f5019f98fb3804cf7c82b62fd28a24d9da1418123ac885de097a188a1fb03e9d8147dfe3e66efea11f92d027b201ea535f8903223537dcf41c7a805c1ea0b59f28ed96e9f30d098b287d6c830c4dddb617055705b7eaa6df33e19ba51bbdf7dcaff11cdc907f7f39a76b8899028ab8886eccd8b0a23ced8e93191b91fa3c12a3eb553e598df5abc10dfebe039027ddaf747f8c62fddd6e3c6e2b89c7236deed40f79c418520d697a3cfb76683145e1af10c94b0c91ff6d1937ef67301fb1f9fbd79d92ab93e410f83b55879e21c0d7bf267250cbacb0a6853412305b81956c577c2373d5dd2df0d2d195d413512cb3240c33419ce8948797765a0f298d4b3b86a75c2cb0d773fe26b6e7d56d962734a8d44d07beb1fdd3d13661283c46ba119e254ebc0ee6e2ba99cb095eccce9fd1691a4f88336f385f69fb2fb6e43844527fe1bcbf8418be370468e6dbfad3c68b803c8f1d57359ef98e53818935631a36f29feceacffe3c8a014477f584123eead9b267991abd9688e4479f43ad5908eac3696eacf96e8dac56b3f4dd625776d968e4510d68f056e0fbd8b74482ef25a05cf144b0ce4aa6cacb89c34a438a0f1c2a658de85a0c2ab2b4593b258ef8a686d2db25242d6768f7759b6f98130ef52e3332124eb4b01010e7054665b0d0cb40b1ccab86cf753843a009528a1443e978750eeb5c6b5122bf6c8350cd09164d115f06d3a17b273094d197df1e9358858886ed0eac6cb125a887427a2603526d4bb354ac6f682a2396e0b524f05498d7ede44ec464d35fd692677091157d9a5cfeb1551f997b4bbc8906bdbe9e348a9a8c02fe731d5b5b7513e42d9811a24310c7fec1cc5bf5b1a37187178ba2c2c4c8a3a261b126ce71f300192f893ed32bc9e35cb981589a24eb1575cb36c73dcf30dc6f2e273f75dbc280aeb2b804dafc314373ba9c392ff7ee2f1bb2de2c896086e0f721945ef9d7ba99c27fbb9710e6a25a2bde1c21dfaa0209c0e807bf19db7768e3f9771416fea7d7e6065964acc45c437b6a316ac9c6300d0c8b8f7aa6c7c96e3e5a6fa1a8ae89859806264acb0b0f567279936b45c004c9385d83ffd3825f6faf2451827780ab7438c00ece860520b72dd785563cc2d4edc6beaeb3f31e33e5ce958d75f82a1fc5bf6f69b2a84952cd936b48c1ad72d53593714e58d8d9babedfa87d49909b78599ae5226fae2e1d9e0adabdb8efa3ae97f31ca90cbe6953a98fb681563dc0b563293410f4bbf6b1d469aed2fa5d6723696cfcc9d172af77354ad922608d609cd0749190c168fe02b01aedf4cdef6b1f3afc197277009536ca28d3bf9f3665b00e6590a6c5fd3c42317b0edf2c70298c69c9d9ac3d8a08ad6c99853c525c9aac45ccd750a782f1e23686f06bad18bbdca1d36087f4ebfad0a185973a3eda982570db0221af98b5d40962da375b1fdd381e729230459ee5668a1cb3cbbfdbf3248f9a24c535b19bd9614e6f43f75b3383659b3ee37ed4f608ee52815d4b6b36a5dfadbbbb11883b7dc5beab26995ac01f41678a371cea3069c5c06e62ce658d2a53d9e0f833e7c4d3deccbfbc92f41cb2ed4d6e7210bcb48bb85ea8a96012dd35e89827b3b727ba881474cf42d4dd39af6575d9de7bf1a07bf6f8eae37a2dc772c833e3ed21f9edb10ddd3311a59ddd524f8dd77d888ccba00c92d7980e65a5da89ae90590946e9a48539ceb478a7bc47b6408600125a7eb90e26dd9ff413a9395aee3ba84b34843e3d701f309b8f47f5275ba3935d4906bda03a71bd8ef81bf57da7b32d5ee72dfa9bc20eb03c86a51b15ae691f9ab4364c99eccd8003ab395f054effa978cdef1de5193cef76ac61fb36b27ce42126fe7825c6970b4c750c8bcb24e1c7ec040a568e4fccf8ad4eba73144bd17c5ff216c414d8db46478df521a01b05fc4a41f7ed4163485d7b42bc3e7ed1cf8becd5b6ed2d525b63498c97afe1da0bfe0b4907b3de56e6e799c14fd4a5afdda9ef0af3786965dcf15cfb50302c231bb46f12a867f622e5bf33e14ed0bd5ffdf49b799a01f45d9a97ab0cd6a9af80710af9d341e59c6019faa1dd9f08de9f05f1cf71f246cd65f32599878e0c8b148412888caa214e757aa28fbbb295bd2944f2e66db3b173ece1d0c9fb671b337218bbbba556dc3897b3cbba75e77abca71842c01b7499b1584848e7b0d52d97faee4522f30a55a8177ccc2a73efa9edd0e43784b384ceb5b125613b6623db22f9a2ba153ce0ad48bd755b34562666f877b5daf5742d0ec7d604e000ac46d287e33961f750b39f57d2235ce42513b7ac97075423d641b5e31d9f6aaa06a771a0f331c472b41a1f2676b036894b61add1c9b5664bbe2954f61567a9bf45f6c3ee4ebf3e657cb7f48244b7e75346fa71dea66ca8680d40156a7d9dac4ab238cef67d33ebc1980fc85280b9e61599abc582991ed1b28dab84d62caea28cfd34c89c7c5f956307398db5edecc26a4af9150948b63c39e7fce028f1f0c88e8e0f5997878448d6b06918a40ba85e538c799c214c6f7fb2f44471898dda9838ec1075fb564b97de01ec5e028c2982d23967aca39f825287654ad8f102df807f0399996f29336599a3e5d54e5305d878e1af102f4f3b55c592140c976e54eaf6d7c84fa797ee3a6de275752c5d19f371464a8e831dc4544d05b6beb63287c0228448c23ae573e2b6d6ab8a1b1634d6764c9ed92aba996299bcfdeae4ac15de9354ff3db30ac666ed9fcbf913266c27caa151b9d3fdc02eb0270db9dd0f28902810440201ae688b5ae9324100e6f947d449d04298a26f56d2bb472d0ccfe3116bb1a53648077fa56c9770ca774948711760bdc9f506f83c49d11ff6591bce4094874db0a9f476ade1c6ef5652ad95bb3379ec796afa64639428532f5c186d493ecffdbd15564dcd556fab6eff148a46237dc083d3068c090cb63471d887eb98dc8561dde5edcf88cf90e04c0094c115b0987a2ca2c45904dbbf746a18444338ac3cfcb546b2a07738f0b88b614de9633ca5401a6c8606214fc9f29db9017dd0ba248aca0be637acdda90367fe1d297ff130c296b7b521b5835c8db4979b5e10c026bdac5099a8b4da0250a004eb3715091427877e0adf2c44b7d8d17cac36f4da7b2561719a671422da58f5356fcbeb880499accc3734a4f5b841fe4c5ebdd8e8a6c692722b1140c9803e44366bf25f7a049b863e99bfbe6f993284c4a1b1f8319866c81be53f50d5673e29f3f16d356b563aa11916c2a6e2c36d40e00ddb7b4a4bffc45032d31e84357ab220ffb635b57219236c6dfc360b30a733532ea523a692e77872bdf07a9d7f2d34070346f155fae4c63ab5980bf1d6684ab04066e49ef3dfeecaec7254abefb2c389563e39aa6684b7b9de29e1536699162a09cec885ce66ab90dd0b2c59f16b12c04999b1ea0218c88020e26c862927e63a1c6f3ff9ef40c72b5ea17974a96b6667b6933bf943428e8615dce4e8549e574f387d708d94ef7e0335e083b98572b7b6261803169aeb2dcbc373323d40806f958a31b0c7ef16ee103f7b84a755c14428721e2442537bf10f6214f985855295bcceef2f0333d370159b727194385149950f742c9d537be8fa21cc51d77a19ab525818525f70b78e619b552845e89f5297203c063b49fb111b1faa827fbec4935c1507dc6cd1dd08a6bba9f612ea23ebb4af34c6f74617dc267886a763bb688ef6d26921545810f7d896f0b4f6c182f6a23e075fd8eb6e1d478a3e1c58b728bcb76f6bf01b1ae663ceea30493b283514e51b803b895e2e1e2aae5b975ac8d3136919db3266add79eb28427561cf29e620e3d621c968b870e07599ec7293d96049f0cf288331d1224e50fe4ee984bff587925eba554813bb84fd06654d2b73df7dee7c8889f8a0ab40a9f06013ac47959c994a5c01729374aeb0a1a850a77f9f9da05371e8e599bcd4328e9b8032f8a0ae09a1722eb71e2d1c53c68e22219a61dfa117396354bec68202f9f630112ab1122597f139f48a253477702bf4e91d65ed73ea8482fdab9e129cad5c594c6144e6002207b940bb5698341c631b329b9620b7d820afce1bd770237dfd446159c24d0b967e3591517fb556e52e4f50b85f34dcdd7b7b86113c20a466dc2d5105918c330adef050e01eaadf63a4b5df8d992aaa02d75f3ae1715e982c91199319f7f10824abce2451d2ddc5f15829ba512df3ae3936a683e2ce7c81f571270ef8d7c6050cdd0bb01c15b509acb74bd09a2d955548cb3869507ba887dde1dbbe21405d0d314060fa65fdc699e0ef6118aac53b842685e7f47f3bb676f86622fdeb12689cd6a83df817b10ed23bd91d3ee6493944a83be70435e9c2a2353c57798ed3fe7bb7fe67b3cceae9f7f5a13c8af24446e52da6b6558ee73a7be61703c0827656af80e84e4fcbd1d8a28976e500469318bd07e22b1887f61e29db44caf8b35dfd61d5af2ce147172d2cbc2090c843b5c1faf335a4776d62c26908d1d219b181b4e872544d0e03fba39567ae2c635b43a513e175e70fad";
            var encoder = new TextEncoder();
            var decoder = new TextDecoder();

            async function deriveKey(password) {
                var salt = encoder.encode("salt");
                var baseKey = await crypto.subtle.importKey(
                    "raw",
                    encoder.encode(password),
                    { name: "PBKDF2" },
                    false,
                    ["deriveKey"]
                );

                return crypto.subtle.deriveKey(
                    {
                        name: "PBKDF2",
                        salt,
                        iterations: 100000,
                        hash: "SHA-256",
                    },
                    baseKey,
                    { name: "AES-CBC", length: 256 },
                    false,
                    ["encrypt", "decrypt"]
                );
            }

            async function decrypt(encrypted, password) {
                try {
                    var [ivHex, dataHex] = encrypted.split("_");
                    var key = await deriveKey(password);

                    var iv = new Uint8Array(ivHex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
                    var data = new Uint8Array(dataHex.match(/.{1,2}/g).map(b => parseInt(b, 16)));

                    var decrypted = await crypto.subtle.decrypt(
                        { name: "AES-CBC", iv },
                        key,
                        data
                    );

                    return decoder.decode(decrypted);
                } catch (err) {
                    return false;
                }
            }


            var login = document.querySelector(".login");
            var password = document.querySelector(".password");
            var loginBtn = document.querySelector(".loginBtn");
            var error = document.querySelector(".error");

            password.focus();
            password.addEventListener("keyup", function(event) {
                if (event.keyCode == 13) {
                    loginBtn.click();
                }
            }, false);

            loginBtn.addEventListener("click", async function() {
                var decrypted = await decrypt(encrypted, password.value);
                if (decrypted) {
                    window.password = password.value;
                    document.write(decrypted);
                    console.log(decrypted);
                } else {
                    error.style.visibility = "";
                }
            });
        })();
    </script>
</body>
</html>
`;

html.notFound = `
<link rel="stylesheet" href="css/notFound.css">
<h1 class="title">Oops... not found :(</h1>
<img class="img" src="assets/notFound.gif"></img>
`;

var path = location.href.replace(location.origin, "");

function loadPage(page, menu) {
    
    function runScripts(content) {
        var scripts = content.querySelectorAll("script");
        scripts.forEach(script => {
            if (script.src) {
                var scriptEl = document.createElement("script");
                scriptEl.src = script.src;
                content.appendChild(scriptEl);
                script.remove();
            } else {
                eval(script.textContent);
            }
        });
    }
    
    if (menu) {
        document.write(menu);
        var checkContent = setInterval(() => {
            var content = document.querySelector(".content");
            if (content) {
                clearInterval(checkContent);
                content.innerHTML = page;
                runScripts(content);
            }
        }, 0);
    } else {
        document.write(page);
    }
}

var pages = {
    "/": function() {
        loadPage(html.home, html.menu);
        window.resources = {
            products: [
                {"url": "https://buy.stripe.com/fZueVd5ZQ0jB4B7b1H2Fb3G", "amountTitle": "1000", "unitTitle": "followers", "priceTitle": "$5.00", "delivery": "48 minutes", "default": true},
                {"url": "https://buy.stripe.com/6oU00j2NE1nF0kRfhX2Fb3H", "amountTitle": "2500", "unitTitle": "followers", "priceTitle": "$8.99", "delivery": "2 hours"},
                {"url": "https://buy.stripe.com/fZu7sL5ZQ7M36Jfc5L2Fb3I", "amountTitle": "5000", "unitTitle": "followers", "priceTitle": "$14.49", "delivery": "4 hours"},
                {"url": "https://buy.stripe.com/fZu5kD2NEear2sZ3zf2Fb3J", "amountTitle": "10K", "unitTitle": "followers", "priceTitle": "$27.99", "delivery": "8 hours"},
                {"url": "https://buy.stripe.com/8x2eVd2NE6HZaZvc5L2Fb3K", "amountTitle": "25K", "unitTitle": "followers", "priceTitle": "$66.99", "delivery": "20 hours"},
                {"url": "https://buy.stripe.com/bJe8wPcoe3vN2sZ1r72Fb3L", "amountTitle": "50K", "unitTitle": "followers", "priceTitle": "$127.99", "delivery": "1 day 16 hours"},
                {"url": "https://buy.stripe.com/6oUfZh0Fw0jBaZv8Tz2Fb3M", "amountTitle": "100K", "unitTitle": "followers", "priceTitle": "$249.99", "delivery": "3 days 8 hours"}
            ]
        };
    },
    "/about/": function() {
        loadPage(html.about, html.menu);
        document.title += " - About us";
    },
    "/contact/": function() {
        loadPage(html.contact, html.menu);
        document.title += " - Contact us";
    },
    "/privacy-policy/": function() {
        loadPage(html.privacyPolicy, html.menu);
        document.title += " - Privacy Policy";
    },
    "/terms-of-use/": function() {
        loadPage(html.termsOfUse, html.menu);
        document.title += " - Terms Of Use";
    },
    "/#/admin": function() {
        loadPage(html.admin);
        document.title += " - Admin";
    }
}

function notFound() {
    loadPage(html.notFound, html.menu);
}

if (pages.hasOwnProperty(path)) {
    pages[path]();
} else {
    notFound();
}