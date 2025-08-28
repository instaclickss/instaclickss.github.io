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

            var encrypted = "a2233b9592f1124643210655b04e998c_7f98995c0d39b4cbc08b5c9746723c4b8afdf7b670c4607d2240d7017ab91a0fd3cbb318c0e4691ce5dd6f7c99b7a2c1a772c556b6b082d2b8d872c0593de718ec6f2275fd8f8f20b7d38812383dfddb47724d50eb912fbb9b7be42a652e2a5348b8f6fecbf8f9f4baf7fb5bf164b8a4637744560b61a6f6da2dfa289f8e24d86fd0f79810133339b6adcce84f60d268a9295db635e55f659f4c87614b6152c900d7b6eaa49cb2bf58829a717b3f9ff8da3e1497e2b966be8f771b33144eeb25534939efc4d68e761054f946101f195a820ab7c11bf171ff46830007e3313c1962a0c3b83e6cfe0f9e2d39afbba5368cadcf1043af0ac550542f7f0775bc4855100fd0b39ea36ae8ada5b384ad61594c6af2c1c7efb5ee183a207fbf71a79e0fdb181c739013d51c616c51d0d5d7e9948b4fc21e80f83dfa0bc7588aa13a1b49c45b3e899e7b2204f463226ed63edd1c6d910a3f2cd633e03b9734291a4bfdf1529aff40ab68dafca8bc3ad12dcda91cbec21ed1a9025f059e24888b817ca3e0bb2c604581f185e2ffda3c00892e864391d91bec79903ac77021bb680721f9d389f84a987d074c2c57b5451d98aacfe8261901a10810fea7c04d4f08e103af50fd8da98baa3fad13c78b088109a69f63be603d26766782d4c0f1d0adf74aadb1d31ed1a92436c67f5073fef89ebb97d237c6179108c98df89094fb639b891bdd9e326bb295fbfad60a8dd323682ef9cd88340ec04e60590ad55da2f92f33825d4955140d769118a0910de709133b4b6e0cacdeb89016a50b7cb3fca67ebe9e1596c8be38ac4ec713c6055a34000d91a0956fd9c83fe6ecb88f769c39a5b22b12281e5a6cb14529ec8975152c9a0d8bb8a6cf7ec0860d3bdc949f6dae619fbd9e42715e88b20995e45859c3c1d67d3a83323d32585e03d4ee0e7c0b2511bd640994afc70ea746ab010cc58d2b4e2afe27b3224c704b40a2efbc5736c70a37bb5cfc952b676546efbce87daf50b504bac9cf3e426a700d22abc88b3afce8c433106e66274ef6514ac185bac2c27334f41b74cb480ef91ee16fcf65d1454cbdbf466ec33993d1bbb60b87e5b519fb0b1e4f03d505bfc679286e88491f1538b47e332645302c0501acc74b195b980026c90da15af57f846195d53b0f4100b5b82e98d286adc86180702ca70bbc1ea71bc014f1c8b6dc6270f52b5b96daa171fcecdca93ba51442dc1a9309208edf2fca2533b034f697a60ce15643cd31e0f88804d3bf9059c726c3e6a234a1152f970baf25c77882e459cb302afcf7a92cd7234ed451facbb9312e716b78c2d0b48e8a6f25a270ac5872c482ab3bcc99dd177a3541e2dc2a6d04f3c308a07e1ce8540498c64ff5e08ad55d80d0b2ca5a06abaf97751c6ebefd5c56f3859b8669ae7f4fd666082cbd997b960f4a4a5f3d1e9c3841cc1d3a8df336d08e045740ad7d3a566ee557c7b3c4f85ef61afaca160f5a4f37dd7c925a4350939a4cd0d88915d1262e4aeaa0a0c525c7f6ad64c993e6204c622b0686b267a8c1142822e5ad1d17ffc33e80f61e53a11bcc277bfe1986e48bf68bd5fbd396ee23547641582969a50c28539cbcd47b758b66d2a2c61621f6f16d660fa8f10e1fc60d195c18e457c60c9abbaf61f87d3be1e7a6cfb2d442a29c04361a40e91fd65692e8d845c955bef30944a6fcccb2d331faee97e203449bc981d985e7e1f1827befa82b1deb5cef26c965447bdd246592fc27e26bc665eb2d37553afc8c1ad8b44202e8ee434a8de83df41134ec0fa81084b1443d78b98e8fa4cf7c7a9710faec5eacc06d79b497e8a8c05cc5f3e9dc716c1c0753f988702c778f6799e2c16a937cf547d946efd495f98e8829dee7b96fc6cd2a6ad362f60bb807a851689fd8cba4224048e0fdb79f34c66a3a8053e06feb06a3926d1d801ef9e61104e589af97ebce5b243214dba773000a793d3cbca659daf44712a3b42d558d60b890387ec034ec754e82449201077ecf2ca7a3992b2650adfd2ef4a7ecacf85650a6862c48a519d402638f7196c0370060c548605217e443df9ec4593f02f5051a6e60f2cb03d95169efddac5524e8f4f0dc302bb3fa39eaee65d26adf031e6e3bb4f7c62a0381bc7ef0aa035d41852b10d2a5de6697ebc958b0d3ce6599b64e3ce717b85543c3e78c2282aee631c9ab267d58b018f9acb7138783e1eb210426fa3608a3f281fc5dfe644008c78cebbb41fad119e69501da53447e28bce23a8aac4c6ff0bf821423e481707e2bec046ca461f316a4444d33e0278f2cdf81688647ed12ce5e8266830f3012c4afb5850e434f0bf2c963d09f353446564b847fa614a6e9145bdad4d9f493faaef8297714ac01886220c023ea3b6b61601fd1bd43d0ace521a8a971db1c92776d402b8966ddd4acfe96f8dbe37833ee03b77627279daeb6dafb9922da35c7387ce7151f800b2bb31f32f37b5188f9d2cfc70b81543a238646bd6c4f6dbd3e671d84f7bd4ac4f953acdfd21d52b473b4d95f8547054e14b3159f9bf53ed431568e6fab081637edb803f3f4e7fa249fbf006836545d1145d445dc37e9a1658d8fa2ac763aa23a9820fb1808b2eeb0048dac5072d09e3fc5634860a5732b1d27e7b2cf7d23c2ed8493745214887334ea860f018e414638556173cd55b52959e62c8cb5fbfcebde308a1d1f3d9687cf6e211a5deeb1cb8020dc5ae33334692ee7f502ee7da52c55b8bce4e3ca6f7076605621af637876fbb3ea605a7856b2a045fdfb6634c64ce4286df66366224310e127df392e39011128044cbbbba503adacc7a9338f2a2d871bf452a9328dd08fca5d5a2838d49e4ccc03a09d5a1f106a2b38406acba4b37b9b38903d6b10f989fe12f4e53881b909bc9299fce37e81c8e42ade879cefd5a5821b42183085e4b4c3020df763764dd0489cae0d8dbabc52e08a30cabc529c6f5ebffb1596113784bcad7ce53ca972dae3c9f039af87d46b26c28465f572f252b8d2b22162b851bdb4188e275df48e353f830139df953ee076f71e6ea9afb5a7269e553578d6b3076ad7c0234995fa7fd035c52997078a8c1cbc8599c63c40f4cc8996c338da603503893657b9f0a7541a214349acec81c77b272498d041a3c40c59219564ad1fa74afa2e03ae2271326ddeeaae95370da9c45a913b526d1582b0e1db0cf387bff84d0e4eb91fab7fab1aaf0c87f69a60dc2e83252c815579ef621a40415f77e97ba206e07800854ee5e4c1d6c861526e14880cb78a9ce70f2bfdbb78a2e5a12a174803c510b2793879deb25ae5942087e252aef3b5c69d1487ffc0b57450443264954636fbfea618250df3376e9a90b419ce01f4c3d66d58b9a9603db36b8cc9fe4fb36c160f6185c2f9ea715685b6a662ee29098b3eddc352fba5af7f98418755cea425a35a98a76eed52d4da39b91b9dcda49b93d8ec79b2012eb72d66b73497f8b18689ab66ece6c7521c11f9465eedb6f43b829d7a336447987e7bb2fdf38f2a8cc0058917c2b8681a8bd0477784d077843c0c5dd7953ff70d06ac17faeff1448612ae62752f2de2c20aca48ae22cd3190d7042660bdb8eadb38df2419fe42973024619a93c3d338798580871256c9e2b7bf617a0b06f7406a4b2cbe1424952adc987b42f96edb6705412cd6666f1b71aca3334001c6bfba13aeb280ca0accb7acb087be2001d8a3653a2bcdb506836ade2f25995f46b766440937b607cda4eb22cc652eaec24a52744af97e3a4e9b222a7ec30b2b3f2a604072564299621598162659b3000771877531689b58076f7a8c6a37fcd06bb14962e718beb9f34ee02ce2de62cb490dc3bfd0cab04caadd3bb00a9041b2d69c75990d0205fbbdc2b406321fe40bd7d5b47e06f34e463449684adad6da6258c07b887a867807d71d08635c379460c5f8088c05c537583af6a7a12f5f51e69bdc0ceab7b40adc746ec4ceeaab6a24442d984c824f4fd4195fb975958f6e5fc86b2c847621a79e76c48ebad9b8921ae806106a67c27a2749b4394444532afcaf0bbed79bdf2b26a0ba77e7c6a2e8d2d5c1452d942b45e7be3dd383bf15ccf52b8d0729f30edf3b2dd4849cb9215be55b34ccdec90384b4acebd0bd7a88616bfff2654c3ccfb09edf496bb2804a157943f83216eb24822a22c6318d86282f26d45927b7b3a4aa2f935deb0f7dd1e8c7e3b2b4f32bb778c395c7bb6d78649defdad05e2ed567d30917b0c4c44c18082a8d51493022c5edc1394786e4241bfe3128ee17634bd9ccc1728a39773cc3a538b6296fd76fc9f645df8b31ee64b31697cb33cfa1eec793104009ad1c2d45572c3ea1d7ce0dd2b9e294e6d90830e9305bfca4ce343ea660c13ab038f6e0ba4f1339ef3d03a71b045fd08df0bb0bc5320a611505c354745efa1340fc0f69ff127a4e5bd3cd276aada876fd72937b17a7f5110510c092a39d3f0c64ab53ffe3bb9eace108ef3eea1d8449694709ca653122835d66f2db8a9318912b6dfe212dbd0d9b4c20c7acb8f56255f83fc5d82b58249320fa0784bd846437a7030dee7c7cfeb9d4a92b89cfef46810b0c3220996b38a75395340ed84b8651c98af6233b85d6efe6dbd544dcb3cc94eaf1f4974c971f22ce57a584b21e35d102d35cf62401bc0bebcf4a155d5a908ace1faa635348f2b2a62496d78c9c32dd22bfd03fac346b813b1aac318fa69e985addb4d6439b274a086a26bd4238ba4edcf3dbe95610abf31303db6fe231e025e0186c2fd6e5b54354166e3fe7b665be952ce2258f00ec14adfddd466ae4aae7c7d9581e2398a4fc6f1f7e03b26b0b7429ee072b7cacb4c870ad03d0955d6eec26dee6399fbb28f28c01f3dbfbf380741f64b37950ec2e645a49927948e2aed01eb423cbf664d22159e3665f7831a952b88f74c0c465fcb4af91259c72a788f96de5da89485618720614a72fb66521d769c57eaa34bad760c4bad7fec2e92be18d08bb741bb5b4c1b762246bc63bdc41149fe55ad81dc0602ab9ce48f49631fe647ba340a8d6f8ea8a76d19c96236d2b6066c8aab44e22c26294b8f8615d76eba869cb06e9678f36655833588a615a65d1be0b7540b873e7fdb127185c0a6c2dd89f3cc145d64263c93b757b3be7bdeacf68ee99486424faaba043598d2ce69f1e2da355b7427d4a4317fcfe906ff82af9d5ea31c9e0ede29e14dd9b8f46469e8fddd9708db640bcde0a09a1af79a1d869862057df6e3aa200000b1f1d8f389ee004b9101c153594b5a016c4fd1527dbb877e40c8d99f31eaede183b0dd67303cd85201b1714fa5178cde72d93be892e53610883c50022bdf8c348ae62d7359349f02921ec776e4823424a345241c6bd2e85043def3c1714a915603dd573d431927c68d9a09391302d501d0c0accf3a970751c53afee0276479420599ecf791fc409a86f934573276c1eb2b971678e95760ccdf437bcb62d54ba5d7d9feec8ca7138f1e54ba0fe1b3c046386b264518ef401f02143c002e65dc93b297a143ee7ccf2e77087f99a5650f00b696091bc2b358832213001cd5910dd770f2edb64e360a891425e6604131beed7faec9468adb821ea0a2e6445f4dd7076124ee493603a6358a472dd80050648ab5e4f5cbf32a04f95945c91e8ed931c17afc02bd22fbef55dd7de51cbd05d2c0b0aab5903cf348f6361bcaafb507da729c1a9f9883ea028cd75a85eb3fd625b04f224cd9888f35bc6e65f2d70d47ac3c0a6583f1009730635653b1817f954b71b5b8fec12d7b119b53e1495b681ca528feb12dd72c9eacf808b2e1681976175f921484179482cd22e369e2b897c7ea8eb62574d3db1bbbd3fa9b9167f46d45cb543b1cf7d3b603b5326f32acac88b2e0e9e0b02cd726bc1ef716e8c2f793d27166cf87540f86603cd12b430d63e346027f6e8cb0366b15a85b0a72d5414eb7f170a349aef11e6616b73d6afeef739d4caac0f1f4ea8bd962a767cab7e058386aae0e2aa833f49eb7a6f6ff39eddb868d001b564ae4bbb0cdf5ebcfdd2c43d5c8954e0b617440da332e8aac00d4d467b3e1dfd101f98b980c233f14d06c37b58d3b3e206eb1a5bb450d1185c9676d3c8531a4c6ee8e0a32ad1aebd00a949d18314473e7e75c4f996af64966a716dc7fdf1bacab73ee55fb69e4da7db50b7fce90079fe1edf6eb6dd734d67d61c00935f26ba9f470a8b7645d6da6bb741d834ab9f1e86299040444eab2c184c37dee0e06e9e9bed08ff0843950686d2455cff155c1398d641f3542a7bad3bc4a5bd658ad5a0d0f2f74f2b5ec219c659d9e04ac861f9360a010e9ea4282ccebf817056ac049a562c72011c94a6c0558bac9bb680f806e6f2b9a17f2e937392b481a25808327632685d6381bcd31adfd21607a34eff9e121c91d2d0f8b3dc49c367df5f86ef6a464026b1ee5a50ea99e193549f7b3f2904ade6eeac85cad2508e7912138e8ca0f2163fd2a31cdef9e82e6bb8259735497550ea3470587cdf4d8238a355211fc8739a73d327d3efe61dbae94667b412b57ab57e8193387b7ec27f6a6b2459affe3f23b118187b743cbe2d71604264abe1d3093e5d79b1ced14815e4e374e52cde255bea81e16ded669d6ae9498975a9b8c44d91b6f03b5a896512c94ad33972d0f08096eac576e6dff793bef25c6e79a263e7611527dece4a6d800b28cf8e2a756b791e92431dffa67954305d82b9fcd04ca60790c5fd3e4755e699bd7e2bdf2d71f91bbe888b33f9ca2225f97b9f3c7c8cdb73933b8b747d35945ca88f5732fdcbe7554c603c27d418f9762aea4aed569e6e1853a48fefb72d4b339dae8de7447f34e88d0c4295adc46c008c9d7a402ba27dcd4a495e20c43c1ba50d2507e800bc096c3704ae43dd9b159e16f1574ca127bdabddcdba20fcc1816cf619286baa096e975d7005e1b1dad6847903530e10bb2bb076578d1cea13715513d4e0f120c09851111a76e43ac95659253fba82502a22d773b428a3d7f6b655d9a778d0396abaac8905b7f1b78ab7baafdeeeea6f78f791d898906d3e52b6bd043d8310a22c79375234e432d8673e8335b29469630de30c0e879eff712ecfa3296b15029edea1f1440c5a442f1788797b1e36333358e7992dc1f28838802b8f5aa5d93d51946b3f03caa07bf0cbb1548978a46e0c9d5058678d67d3b984e4bd0da8b2ef4ed4b25db71d292ed9a9db7359259eed627511049f0387d4af3d75cef9681d3b7a7a8d51a5047fde4f962a1176336fadc6bba44975c1563505350e61ff4e57034000263405f58aca32236b77f6d234ef07f363f6c7e6e68186c96b34a88c8e142c5c083d3e8c46498d8bbc405a6b077eaa737c394f6bd34935ad405a50ae075ec4821a988088d0a519c947ef6f978ded32cfda9ceff784a7bd91ea133abd647162adda6943e4546c07bd36cb4e3fb322f2cdebfd3a5d8ed6b50d33178bfc2c3ef490bf62a298d0fcbea50c2d407d817cd1f2632e35884862669e4b03669c24a1202955eb23f389cbe1a552dff3ebfed23100acb67303d523d6182e938bff08ba06571d0875a4d1836bba9eb2a102940a5e1ac0971d3d0694e52e8a61bb8ea009582b4965092e5c00ca9aab4ddd60d1b51d973e70a2dce26ad64ab90246ab80d0d3ba3646211416e41f9d7f2eb98bc03dd2584348a3d19c228ee7332442604a383c9a4aa754d4a4983a23c3d17e28ece0578a7239b19d0417f5c3c68c6a3e25f9431e292294f5767e12f6060dc1c90b6991c17dea995110398e9ebebf4078007eb7d68f4d9aefbdac8d04125a7ec44b1c4a6433f7f38b803b9916cc8a384e8065bffad5ea4c8daaab1c2a4ea46c17b3b0c996034add02022e3d76b3acdbf075f00df917beac5208908b488eddd94cdc9bc273fc41b987b8695e6c4b3ece24fba96395d6750690be4863f36350d1d4a445bd40576ae3e60b94c21e316b5c7075f16c3c6498f5906e0a4aea0e9a3b5921fbfca8e269f8a606a7b25f3d0a7fd5ef69d224e158e1b875ea5102bc33f32c97f8da440fc53fdb90c689275691dad490f3c340ff9518c02e0fa88975139c24dac3350fe09b904b83e5713589da25444126af69dc37478e6fbb8075ef09832624c832b64083c006893f026434a19478095fa20138b6f0f578356bfc70c3f4c434b59ce8df397bbca03fc30fe04bfe4ebfc267df97d57a74418eea50bf7889d69694a21c8953612d573ef3edee0b080b77493ba9dc5a10a748d1b48d529e0039b134a042b2eac8457797e126019aad7e37df10fd3197deceff80a87ffdb249bfba4b276450002ea75a5abd65ffff2cece8347f7a849cb92136b5415d8f9e633c6c40ef31c9eea4ade62a4e79fb1ee706516c94968162faed803e0f14120ee9db1430a5e7a8dbd1fbf7be2a8463fd28e36f38c98a453eb16daa8c387c75183d908da87369a597bb9b477173c7cae9ea6d9e4210233c726269b93a3ea0a352ba6a32c4c33f913bf0f25b2684c57dab0262e0b8a11074b53e8392d31906bed9fb3437cbc2614a89c9875f9a595cd4ce73706357d55216b2068ffe0bc7acf29453c30461f35888543a4b9f4c2026ad2680a2832f80bd59f1c1164dc41c9f811bd647d5b8e4a6971aef3a94896a2e504eb830b54f644e4c63561759a381a383687abf670a224cc639090fe38424f0f657dd520c961bedf5d160a84e54780c7f359517dc7117eecd5125b317ccb7ecd45d9f4362ce9eb33ffb4a09a4690c8c696659bb838d9452b7ca374b62e2f41355a47b2685c10eb1b21a3956549c9c8dc1c3330cc0f70debb2a9976904815973eb864073dd2d60d81ecd0ab8e212598f368ff14a67da9e8fc5ac687c868100e0b454b9bf46a33c3c9dbf25b31f50477ca50e3576bd518beaa196d9b704bd29201a9eed36b0a8959fa9454af5663a3aba531995aa3752b1a548603fa50a3ba3615a0012e5e881546720a9d95170af3fbf588fbf93430f2a07370097f57a57e3433244a515d876ca416fe55a6556a65fe96bdebb1fd9e2b875279e0b0ba4a6b8f2cfb79f336276ff9873232396209a7277513fa30d823cb50672bd56cd0a8398d0338fc9a31b1447f12f0da40291630a1b5a5bb41724273d9e125abf3305678bd324960383f3f8f1a3c81a769c524a74dcec63176eeb0c41cae85d802a4152901a54d03f61c35c35b93304397f2fe6f7bb4f33b1a97d2409920a0e9eab27d971d9733745d516a834ebbef0ffb50fbbc4eb2756872bbab61054985b323e7a21b50716059d3cf05e60ab91018fc67859c34e5e46cbc0989b48401c80af25b04e295d620c059f6be3f854575bce919dc7af6c380e46ed4fad137af9f769c143188f521cf41731d2218a143856982b436f35f93d31ce60cfed6b59d5eb47a8c3974dd565da605698269b16ff463a3e0366208ace5d7481b3abff3140c9d0517b9047c695382a1326718a4c644cc701d44aa0f8308072a7319d4013cff2cc1727a5cae35f42c4f391b2eecaa2a80f47df0da73ae0768ab5b1c0e8f5835d9c1c2d95e8645f61e6bb2937f608743e21036b424627bb98d4c54849465b80f6b5816e7c4071bbf88a7dd8a55f356cd395978f82552d0f44c8556dbdf2b751c5b0e27449954aa34ff7f2fc62e82d6a2c54c46c8a3dee28d7d9ff76e5e9e00bea2a42144013d77b2722cd784ad976ef6e3f3b03f4a29b14f1303f3e72f86d040157d5fa1fd72d47838cf044562368a5bfce3b1b589c21193974be61ec63dd396aff70d4b3c51339ae06b07dc3efeb74afcc474647d6a9817caeafc5707fc86ebcc1eb280ef29149535bc14e119b1ab76384400c679767e6b1e0ff0f6742407f12a208c2c7ce38b26822bc23eaf56b5ff402a2fa61407a20341ff69b682b233bcad31fbf04050ab49f181f968f55539cafbf23e776ec60c24f4317f9ed094a958803ed0125d3c7f42d93ea74a7a922def0fa25352ee5eff14491f089e2584e4388185a5466c87f77db62ca1c3cc1eb8970e516509b5bde560841f1ecd63b69791a5be873b9cfb37b080b76360d6ff04d4ba339b909d524e446db8335508188a3cf1869c26e593e8f021aac3bb81befd1ceae7040947311451e5e8c3c2b0c27aad4006db7dddab7bf02c79cd60c26e6686240b66e96917b5b4f5d7df09edf4cbbb8f8eac90b99679fccbc043e0275c7325fa274c45ff92465c1e8657149dba1457f90b76e6aa00ebdf2b454ee7b1420974dddd01a1356a089dc1efa75166425145030b09140efefd5667fe6ff3ecdab8baf8a4378c50c05f8d9775d999dff312ce255bb079a43865841b3ad626584b94150bceb116edd41c362cc5594f0f1571874159cf182caf1044ae37540b9f13540d86129d3258baef224b51e0be11d7636129039d85dcf285c8a996dd3ff5a7e6ddfff3bc9430326d4f280bc60a165914c2070d7219ba65b35c72220321c4aed1b78c66dc7e0966d3db0332cdfeef698f0e70f72a578bf95b06c18b23213fb927dc6f1f9fa8c7405350448dd1e67c624a0d5c6d2d7723fe49a85416e2bf296ca21c8755e397d4ade152c103cc3886832f95bc06979a0b827968b12cd5d461072ee0828b244b440d7cd861bcbe2709d071971583336164a8c30718728eea1f743f33980db25692b700c2cac03964ac39b8238602564155e2fb323b68d5b43fceebd45423cab922f5f2bd2cfccc5a94dd1d53dfcc718d9d6ac30fb8cbea870f11b554638621110e42dc54eb41e5be887f6d3dccd7398e63d885477447e03d8b1a5eb85bbad37cd5780c6d733cf43008a18925515755d7e5637d37dc34eea409757eac5d94251f307c23d829c6d51c0c8043183d043fcdefc3dde44a6d83a14dea22e8f6f16583035489f4362de0ca9378b6dbc62b4520ff0560b112fccfebfb133577297e0442f54f30699b49b93dd14753ee6073759945b32272028275a3a882968d4f31c298845203012bbf71e90fc14a2f7dd228b672a9d256d938977e860ec5db90b2b712a3acb7dcb36140ceb15f98e06d97bb64edecec0a30d1e5b2e7b2dfa05510943a732355d2f6a95a2b648c6f2c3a2218b946eafe31dcc02de813e01cfa6b146b4938e1b7488458717242350d0501b87c8437b0d8ef87b9cff473f7d686324ee7ed1bae91ba364159b7c670ec8ed526d2ceaa99a7cd455692e50f63666ec058c3d5162b3f34111d98fcbb43a2c64b70f4ece7c2b5358a9da1464589c091b60d828378828882c809d1802ba8ffa0215461534596ba0faba954a452432e0f7b742eaa81725100f7851f5059bd066c65656b30ddd271402b02cadc726287c965f722fd98fe18699400872a2f7918a03bd0ae36ad58cd405b92d538913d5662d7e1d42f0b3c167e60afc82dd9703e104303e34d9076cc0e8dca9d0df9281e0f2f4465000817110fdd80aace17765196e92a3abe128f9c7ffb80095cd84486cacffd768dd192032519bbf16cd3ff72217592e66620a7af2233a223eaa694716d93808793307db3cd0ba35e6e21786fa8dfdd04d6338b4b7d1d82b7d252f2611ff737fd7ab672a634149c54ced83e49ed97219dece18edb293f2212d083855e3de676529a0654b12b25672fcc07d39b92c2c81c3d47b6341cc9ebfa30fdc8dcaecca5ed16e6d838738e5e66361494a50fc8c2b1603cad7c0cf8d39c35bccc23769314795f63714a35397d756f4baf4058b579187d1953a462702b4a4fe985195284ef052fc6c3dfba12418a686c9a4d9b1cdbd6f725bfafa9aa1603367bf18e8c4808dd9cb6ca609f6c0ba10acd74b75f7566a9f2b61e0b43e5d55b0ea83332ed1f69958e4256960ad9ced0ecf5870870559acde655473ecc570d16e5fedb07ff539ee91b4844b5eca659e5b5fe5c719dfd2b384e3651eaa82e5a97c9b16318c49ccdf95aea38604ffa1d03335ea0655b9202458e71fbc87aca0bdd1d37c84a5681d73bde2ce07b1d768d0839880bbb5c3e45475ebc8b831ebdc152c0fea3587834f761ba0df934c6f61b211c98b661e8f0bfa2fed6585d59d466d26336c44bb95a86c4b3659aaf488a75540e6b65be4a097e8a4984d36b4b1e69660aa7d655e4ed8be42c351d5e7534aae1a92a896665d916fdc208d85d2c5e21cca0f17ca595e4b3353d6cceaefa9a665ab46cc3a7d86064344a4cd56fe53f2aa9db831aa7d39261df7e45398998be3ad47e1ec91eb7f7b29e54bdd2e6d900b19a8a2d3fb631544f27da9036cedb00e8787f9069c15674f733d9a2afb2d402e673eed2cd5c530527ffc610e6d4a5349fea2bd1af7eda0f0c09b996120f78cae202fe63ffd365e582a79fed473caf52ea9a40a905a5564ae9f2913a89cea264a6cde31b0a57263d155b7eed6185afb9815c37e10797ebdd348e539d7b79d9600fdfa33e3944f80861ff391aa42a28f51010e70f4c2595efb408cff3f2eaa1761e97ba96b1d0c11de3ccb5ef2624a9c78b72bbf521d8e5a15257638272214d23a8b101cd8b0ec868d532dafe80bc9848287a9f5701409198cb0789b44eef1d4d965461006aeea7a1cb23ad7d56660942a2c0861c6a8bd1cab3205e71939da100c62abddec0b923be49dfea470b1bab7c6f853af2ec5a3541515c0a2716624ae4372a98499b331369e4d63fbc20038a7f17329f4cd1fe591c1f66c5752666a0956a48bf39a43ab28569dc3b72d2040c132a2b5b754e8a3c53230dab96de68904dee4cd14a15bb191ba2e3f05690ed9b2a74afe711e63564576597bd401ea770f632fc2586045510e8cb3585f5aa3c51870b4912528eef7d489b8c6f578784397fa0f823a8f77f46d4ad4e29d6079b9d4c310b4885117e1ef7696887df40569cf7de826c96a4f710a27f369cb9c9d7686f820e75397d24672e6d6ffa2e9bc5af64645dd523ce73adfa8c5da07a3b240cbfc5d4a36e2cf9f360e14f5393a460c579e84af024a648f9a21e9c2c8a6afee83c34f1540811f7b3c0a6734b7d08effc3efb7590a2c1cfac3b75c07f8f43a574b4131bd3141e8ee3bf8cf15caaf1598ce87709faa6c03d37de01b1974df04bb20289467d7b8843aadd480b38358575e64428d6793901cb009d4ac2195f74aa0d4b05b551b4567cddb276ee8c39551d6e614a1dd025666838ea4e9d91cc9c69d7ca522f98942c8ac858bc8d175f87d0f6e7012bbcf9d039b70c9a2325c3480c88dda4a90d3c61482d352cbdf180e71e94913db0baeebfd2282ccb06f97a43a20975361082268d5aa6ed5c4e8dd61fd14f234afda07fc78b06d849fedbf23ff861f51e3c30d4b1bd86536d1259cbcd7cd415c47cebe846706dca33729f3839a9b39de64cfe2638b4620f88091b18efa9a3e2a1d4b82b8b06b569fcd57930fe0085500df25c54b7355de567b15578a03f1c54e6960063f5210dd82fd5756206d686c1af4c43f06c45ea92451deb789e209f323d69f7c5606caf2f31f3dcca6e98581228e1bf817e189360d9ac00ada27e9dcd5206f745df94ffa144c539794e5ce95bc0dbfff7de96df5db98a390dced81dcfe3f5cbe97ad390c9cc64a4ea6a961e9cf73421ff8cde1a838fd7f7177bdb7c0dc9e2bb9e971b11ffc97d1b38e42bdaf392f013fc07f508ab0ef804f1cffcee3b4f45847a2ae0218cd0f801fdfe3c7c5d97d1374651163e26a14c09dd332b3a2011c93c6281cf1fa11a48e368e92b1b914b37446e38dc3b0bde77579b8dd59f79029af21c301d542dd54640c8af45c5f71f76ea6fb926c9bc8eb87e2e45ae1cf3d10eba0b95cf00be32e45cb1bb8c137cdaef468b64d625d6ce1dd49d8cadbc6e01a5d197575e6b80c06aee0819ebb2c70ff3c8cebfdb46418037408f8be35f05f01adc0d9a263171cee4d1fa94bdefdc33ea49fb2c95232c24e7bf6a1c43e0ca1237becbd0e4eb3b769d8ba70971c8f1394bb92d830d0226cbd5489d52fcac6f77d0daaf7c66df36f3d6e904408c356fd0f7807ecd1329635ed4f128f012c65d5b3cbc7c690c8be345694415bbeabb81cb4b7c52a5253adc2b16f0726eedceb9d5a9fd92d54441807ed8545ef297329dd3d6f36f5e27f1e39a2fbe05e5dc2a26b35e481bc6cc18cf2ee7f9ab6bab7d62744ae901b815f50ea8b87c72166e27acb755a80e27651f90c27654a02516545a50c9482eb9dec5d4cd006b52f84e9a5fe074058c69aecd8d46b1f01fcfaea1a812d834e581bd0f83557babadb9c168766dd539897ae2497b2073d41b18d66ad25c42e6e40dc337e0a0871d84a077efda77d8982ccdfad37ad0be3b5aac865dfffb5bd20a429780d3ace7a75c1f6810af27509d969e9c011dc2a60c624735b905fc6b58f83d218a6a86b689f0975ab5b403308c5cd28602c94739b75b557b654da53f3b55755d4d35be9b1fb38ce471d8c9a7a73133c0dacf03c556b14b2d0c460f9f94c1921c1a9e089609ee7430fa6e826b25350aae538a50a0abbf763d34d134333cefce4d39df4a6dafd0e92d966f249437f629a9305194048403ce154899bd9f460bb8af512b0592b0cc126ca75e4f669c11eca594935cd54fa7fe84d12bfc49c7abeab6c75103e3c2b19207e392c1e986a7cb923eeff691af190fa7550ef14e6d9ef259fa85f333e57bc30b2242cf85ca94dfe6d8c2d51d9c5340d2698bcbf5d3629ebdebea3d5664d2aae264efc2f88da0f3eb5d188b82f19c4567ac0fcaf137957ef46f1c0ee3f63642113306f25cac21e19efb16b4f7aa3e8122665caa04481a2fe31fde00f01b65f38a80c3dee06d9df23c68b935b2ff10086995dca064738670fe360f71b6ce3609912c85f7ac637ead0db8b68e155e3ae09996cf60fa8185f337b02f7333d20ed40965c8544ca091c7472ebdacd88a522773197608cc64f3355d6463ae79d57a39d880d1ff48030bb7a1fb23d517668d958b6c0158a7ebfa9aca717f2cf9fc7992904c83305c946bb3c4bfd1abfd2c62409faca6e3cf089a8a0d69936e1d4b7e76846ed7345e0628218c781e3b2ff1ea566e181ebd0edad7e553a1e6cba10a04ecdcfa6f7272549dd59c02f77b61176c9b183ffe1d9f0173f295d0ae03af36d8b34db1fe4f53a4eb0339a84ee93d3898c2ef681933c99f4319a9391ba56a363538f00ca0aa638ba0b95bb92656a4430cc6aa3a298b6fb0f7275e65a2a929e1cdd0caf5f39c0617070b75f6f061c5b22a6e418317399fef8797e9bac26232acf8ab09c25ca056d8d81724c9bb7c21e22d38e97f4f1ef5d5ea4004b39fed2cc4a74847b0805eab1e9b657bdf2bd94bb15ab947d299f4ee66741e7f9ac0fa882011b93ff00efa0c7a9b068fe6e284eb44e016a5a4914af332999c19db14eb60cebc8416fd806ca40b5f13a399b0173fb88d083a45a8d097640f6b54161aad32c73856d14ba72a5989cdd686884486c900d9b444d6db56fa3f56c07c08222286d1fc3f7e2740b5f35d0ffe1ac0317f68116d99da9f72dfae6e2933489a0325455a1c9199af03d8593b294e1c807b178b443865d18c7794c56489bf3be1cb6a51d615f4ab254e43f7f1f0a28120fbc87b70dcb5e06deb379a468749749d24535e8ba1d7d25d84033c14da095b45c251601d73415dab574358a5d32cf3026aa685f2670aafeb4e0366dc5051a62c3053ac0921c3b5b506caba33e33376cf627fd2bef84f7af6c18417c3bcb75344c68053aa1abc8014c8c8837247988accda4682a2327623dd046b4bc3514b65f7fe9d512eb04b66614f449dfc42fff14bf437ac6a9813795e5919e35445ac5bce4404eb3d8588b6d64279598cf34f167c952b209f0503fad08caa31146819e041669b12d923aa5e26414443802541504ecaae57792b2f626106e78c8d981fde04c92ff0b0b1caf9814b2475c025826be0913a6ef92dc81da1371e7bc92b7291cd110dd992f80f9264def4bebca8402dc63a72f9ac5cc8c6c563f3d6b38ec8b846a0d07d153cdd4310357756e0433dbd96d4d436a28fe7c657be141e319c57a9a4c5d9854b87d1929a7db5b15d2df3fe31658cd12e63b43de4afee9f655e7ea4d273ff49f94a3e8c4776a11142db8005c1c809f5829f09c137daa0df0acb26faf99321243fb8aabe280f1b9c6302a363ae6b96796d771d656ae1fd42e1351999ecc4926b2ee96a0df88f20146f5dbd8156cc765f21f0bc347bcd259efb2afb735ea70f27595f869bfa3f2c6e6b0087b5314393d175d7b61a4726828ca4c166d9729dceb4c75ba044e48deaec8567e7acce81894bba5ee9ab2bceaabcb8f17815ec744526000218c71277e5abf0b0d47e97c461e48bc83143c6e9f40fdeb0d1166bf069e7222a25d242574f889776863d8c699181223e520815aae443da52061d637cfb329e6c9db76175362d8550e665e04e29e8eaacef923722fabc19c5fbbfe542f08c4d669ad90adc3d3ff5a636ed2799daa06cdb43aa1dce9e02ea5a27a9180db9602425197899a7353cfdfe5adc8d5f81eefaa3ed9f18a24f43bdb053ab7fe92a01e407ddb7a5e24aaae71684756eac228c938a20d2fd1450cc09e9a0467c42bfc5ce7a2b3a2269b88b03058832b6fa50f3c0f1a0f5bc905ab15e2bf04fdb5ab7b14ae3f311585ebe89593d16d19643e6911bf13f30e6526280d8f86188648467a834d000293069a33952e180dc4a2411b25f3511a15f6e48eb730eb09ea64c981fe7e456b2abf5b4e3b93ed98b7e650cea178f1c9db17a5e96573c1b8b978b1747501c59117bcbb76cdd592b4a261b96b086786303d6255b3363cf82caea7f6f741fd15e5466508fb6c6b8dc624ffe5937086bf9037a5d0f4048ec52b21a4808cae30cb4934a0fbedc190be758fa0162181fce88a78d8c2dfeadf026ed57c3f4e31e7ebbc22a75d21127d5f8cac0e662f594e854f86e4d5710a92087bc93deb9506762ab4a276246fccdfdb6e2d316cc8f5a1e7957fd3e5235554424d708e64d506260fa1dbc5e50142c243fe7bd8af81d444da91201e58a16be697e49959a7d88e65cb5dfeb2f5eab2732886a7f42bf2fa2c9401c1668a66d9cac44d07a3e69108f996123104ddfbd9963d3c2e68cac8015361945e66496456e90145b2dd52a305d01eb54026026742891dcb36f2a2e06b421c47f6d571144e71664a646c8bf0ea87ad6969479a187890da16cbe95c9e911dd06f0b695c013953be17caa1b0bcaf7a7b298b9fa6457775acfa644e27cba4698c103c9a1bd80360ce96cd855acb659d3360f1cd8dcc04cd02087937be226ec0304760a675f652e98092d3ec1718cf175479575fb8d8fddbdf7f04596cd16e9353c0edd4a97cccd9735446fc4aa4193c40dd5391d5dbfe1b0b7ccf7d088bc0e8259a132f250898ec7e2e07872193fa62561f3f28668c67054d2e1e157cc30d78ca1634f8bd54a1c486b876291fa974c35d82ee19bed922db210ba10365324dcd83986acbdbdf20d670c0650e380730d31e524d71dd8e40e7658e84e64f1cf7c398eaf15c6daefdbad0ff1239f2a9f76f0a36143af6bfe5cef1cf79b2215a6a231afc9104aedbf4d385b4bc9422afb2a446e2b1e3f53a94596297ebe76dbf5c35badf6ee8db13b1df5a99ecd0ce4babb0796024443009cfe7c4122491a378e14a5a2ebb74df059cf9092615b1351021c828d2705a6050ff0769fa6248c87a57d327a566dab481c5490c695d194aae0e4d342695d08a98436202e45886a07022956f07eff6c19d3260f1a494aad711f306675d0ff549ba32b226058cc28968757e1bb25f8b1dd4b86aa064a95718a58669c39759fa0338dc2135d4c16f90863f0606faa72c4917d7d69a87a91e424aa9aabc3bbdb6875fe0eff1c43d47160806dfa8885b9faf51acf72f4ce667e6141659cec33598822b047b0e9401bf90eb74dd672136947a5a91f242378ba3578d0df6efb428d3d8b8e9e11a75fa4e89ee6e3fc9a20eb8ac0574895951a5820eb94232142a808357bd5d28c278c164b16236392d5f2b196cf23f6fd3b506737ba6eda5d07918916f1b21641288aa0dba62ceeb1292cb3fad1ca4ad24ec67b0a9aa1be366e3be00660a6c842e38edb6706950c5c464989691ef48e81964fc00ae369289ab4782464277e8afe89328750535caf09525eed1cdf4de96e470701b1e3cdf131f8483909f6c27364483a949342d6a93f72f687c20fcbc2d6fcfce5589c72cc3a06a07296e78a9257e303c113507e254c7903ff2c7f9e2664a4f10792b7a43216bb6326fc8a0fb63236492fd0311f7fcec7a944c7c539a73a0f78772b93ab6278333b99a7ed239902bea3f4e54c58969bcbef764f75933cbefb31811772a0c2bf713f5dec124bf9a7f43cdd4087ce577010ebc88801e80fa918cdd6cb7db4cf4a9f0b5da87225422369292b65506424b594b0aad468d8c7575f137f9a701d7b01514e596a98b00db2f692864d719c94d66a967f9d9c89bb6d7d5108a33de33d17a3ea589c6e8894800526f66f7ac898756a85218c487457d4bd1c990d39896b4a7e3f20fdda5605f6c8540434301564cc03047f8b8d3df8f05de7e3e1bc523d9de2107594cd29a5f3cc48b2615d2b63be3e0de6cfe58c759fa0859e99e919489ce307b0e0e27811f27ca2dac8344c6a670fe5439447512ac0a82debd838ffd5fbad58230dc153e27bcb7036ffd284078a75056b22a804e4f356fc7bd9c5640910be91f74a820eea483d69f1e612f55aa5772192892b1bd0d16f24f9a1dc822d6494835cda26a22be7d71f891e310d3cb52e18b689f93efea41c7b26cf99ccc55614078cfc1f4995abba9bb5f58ccbc88bed3244edd0a70d916802368058610f11c056a3bca3249f531ecd5252d6324d02b47e177544770da2c4fee19a7fdfbc4360b5a40b2d6d5f928794a9edc5f4ea8e18cd8569766af972169f599105712512e193eb6e02f7bfe098d4ccdd6a457c0a151927416703a091b51053ec8bd6ac91cd7dd7293441d3ccdf3c4cd07452e9b48834674d13511fbcabb082e5cd6725ebe67155be74f7ef8883127d9dd6dad51e09cf924abedd465bf8aa0458bdfa69697afe02e13f7f5e6260825e80b1daaaf81da90d7df0ca5e7ffaff8dd88b9ed565125a19b2e024df09e78b3e00e55e5dea4749d9c95b36584ab0cf6a7a6b6d014566f5fbc5e63290306e63b27598b198140aafdff9531333bd1d361ccdfd78bb172c875d830af62e203d519e7c15f68042132b64a7c32b9c3970ce27ef3307b2d54757a1b14add7d1fdc7d31ae43a24e7c044b0744ec2c537f3644027b8023697c07cd61a287d9af13823baa5f8ba67276e6bf24e66c8ba512d3291e4465d94984629b603c2f049b06e2ca9c9b1c87d77cb2a99265134a140f06bb2671fb12e044a8bc3206e33f9a54174346eb57e0975da9bf6119804e143976fc989211d37b861b6282cba0a9d20590bd6acff542ea5df42f55dc1c69de657aa10e2460cbe3fb284b1eba02a488f87bc71bc6c2f7261a1805b9dfa05116f6a54bd2cb4924061f16b410763376667546dc0aafe60a04df0bf3f059c519fdc17d010d557c0f9fe06382f7cc92ea28c4d3ca6b5f8c340ca4a5e86f0486eae5b3636ed64856774ffc9d2d362f060ce29f778d360e6f2bca8168f705cfba9bf1b749ccc43c16298ef2602a4c83dc096d08d0db1b996301078711ef4a5c9aa2528628b8e63a8c948f9698f7a7eeb6ac1058c637ab9cd7d4c6d774af1a08e36a0cd3961edb83eb2384a2b37f1310bc1b3b03edf473d9c5e2fea164f7e711b9534d7a2bb5640dfb14cafd1b10985ed64d503326d489dd6274a4e72dcdd0b982d5c3d1db2301cb58bee31b4a7ff23031a88c39128cfb3ecdec78d750185ac1f72d3955dcdba0ee953ab748aad047bbab337595f3c34d8f795104b1e1a346d2fd994933d12a2f4754b4569d0c1e9c54d5d50a9dca2a16e7f6a8aad44484344cdeebba3a00c6faa60733ccafc7e39af08cb3e02768b7751bf9893bdb71027299b07e0b853c0044ce074b3615cb651de6cdb59b65a4418383515b1ce35bd88e9ece04bf2f4ca656c29459468e0f280f0e339cd6a85de722de572fb59c2375223227cfa97f13866cc8a57528fd6fb4df2f2e2f40d29535fbb8d0845e883ebc189be35df9ad6f01e4f03d36407a8530b5e42582b577681bfa33330569ed29ee16490f0e11867e4535f497571dd45f4dd1184c7de1916c5a503763c312bb4de925d90569d57ef6bf60168bc98a088864a78f589acd25bd18e4bf374198815c05e28b0e00d8a5f9cce33152014745ecd6ca4231a7f5731f6cbde81b84c42b7dcf3d76d96d421b3f6624daf1b6e91a7958140730efc626ae3b6513cd0eaf90765f159a19ffaab462c073c1a087febd3ae84eebe482322576c63a506a7560e30fb374dbb7b358863ec5c28030746e937eeb1d1373ec4c72d91cc92fb7770dec4f04173a02ac55d1a142d7405aeaf56305b9d8b225753d968365b8e9724a3f1b8a00563174aafa5944a1c49190d4b65a704bb0e96914f22e23f0f3ec778462c634dbc910f1bb4c2b453700cac0b13ece3aa3654d0ef95a7009c80cc5c6fa91a9d59b4431e636c924f5edc5283427a027bf38b1a07336e8e297a6fc2bba61555e35a8a2ee43167ecb4de07ff20663e456168a22e9b490b1267a28e1119396b1ca237ef97d0bcb7460239ae0b158da1bb772eec14958921f3c4ab905f280fbc3487b0d349641bf90cdd7bf801aaddae73db7a028bc0d9ec2f6c39fdf0080f984e723b85f6d73ec45f1a8055c16e2c05b44b1469f7f1e202949a1c716b9dd17a138cd4a23315dbbb164da28e016eb4dc1c132651b416919911fcd427aec99c19e657110e901db89690ea4d9d97eafa81a5e9a7ac33a02f12639de9755d6b6bf3f3ec8564095ff354051284d08a3decd5e62992429592d9e6c83340cd8a7522022d6ac74cc7b73add3f53ffa616b6be9b639e1f4ab879056ef63fb656e16978d3c48f766df4434e6a054146c80b548c4e2db29e3924cd535fb56ef952018539deac75b3c38910d30622d4a05756a4ec893ecd276863bda219fc7a2d5b6a7732aa79897c3fb8d649220df2684322c938e90731e51fe00ed4af7aa44074e39ddab3bd06704534a6ee517f1da21fe152ad8c101a290cb86a4cb0382139434e51630eb89300fbc18504db285a919a4de5c6a307f87898c59fee9d746a648609d281373be62e57e3c70f8f1ca0e53858e3c1bab376594120e96de57c6cfd494773ebdf454f3a640d9066d4483f09099c4346e06f1483100f13d4505eccd61d801687aca280c77bcafe7125c963a822b212eb56c7875b8c8ec23adad184c96438186402117360a1499503b617b0a2ac7aa4530f82896827f41a0f52bca69413764e7508321719d5a995c696c5e2a490b82383d3b3157e8d8c92c6d8005f0bdfd962aa19793a160a7976c8d77f3269ae9572ecb95e619b7391eb39beeb5e6fd814b562a316602ac9cc121a9d00496456fcdd583155916835a59908eeb46aea9237ddc2645f8d36c3af76e20d318e6728b14e577d75ce954d655a5f87363a35f7f4c5a6d690ff35398ebcab4a1f3c3920e74e8798dc633ef0239ea360e3666820cae9a27b39b7d950c38236e70df8cb14c0cf57523eb1a497450b73aa020e46ee9f37bf84a28eeab831e3ce12d54b0c4363f2d8980813273ee8d7e7597e46d9b690129cca6ec8f4101b453b22ee42e034ac90b3829dbe255e7af1c2b48149e4803a438699ed8575e0dad7b5afdb8ef86f2d80e3aaaedfafa9ac138aee831e3efacac1248c8081ee3621f848c2d850e27f402f8023baa411def889991fa4599f48b10e169b54928527e3f5170c5370f1422727b3980a13f0b822b36fbe006d095bc0f7aae81a22fd5e1bd754d8157c900182ff27b64cc2313170eff1d3ea39cc5dd83a2a547996c5d987b6251534b3b2996ac948820fc7d2f00c2b813b7210428421359295008c298423869e2723e47a46b78ab329dacd6eabde57bd0a20544e7fcc6b4e15922ab98326cf8a17c1cf4b761a546dd60f3a75cb9742d426dae16361fdc32d136218821e791fcb7fd358c044c358658806834e84801b10acc43e699cc55cd264bd7fb3cae0fc97714b87e0c54ddf7496af99c6fee1c8439c4ace7057b8a0f718c8b901cebba3bd818f2db128034861a781aca01f2e540d0e2ce1a150cd2115060686742a0b91a99c17010d2cb5da929f02e1734b04531b6849ca41ec41b04e7b029137e7dfa73c99857340456c5bfa2e6a8a1cb363e6789510f124be5d93306c75c7af7f39b24b42256c36b4870ad5ca5afbab8d875552c322d0a3eb2a02ef2e5042aec7d092b930d8ae664599cda6a263b5edb942d70a8eac5d9b875a3f57639660c4eaf49c08aad215d42c5b3d74ce99fdbb00bd6a1f0e9e4bf2461daefc03ce7d4d5e336d53a953d14f3430f143e127ecd0f083ae263349d4b95d9d494ebaa4008c58f6e75826ff2c65bfb3ba0ea537b0aa43871381077164b7cab051edbe06a8514a47e7138c6dc676814ad50467fef0b5c361f55d4c20957c46fff3ae744eb90cb9491a5533513d67a6b9c349357eff99609685695b901166774aeb7c0efaa77868d00dbc6e80e07199e7c7358cdae57f29168a467a45c6fb340934b3f1b381dba21e4792b50e65432c26e48e969832c0fdfc8c654bb99251ce53c5472c6f323bf7cbfba953cf50d7dbda9ed93dc60755ce9a96876c435dfe4e0d16bfcf181cd568ea32cb3725c03d554b1cd36df24cd406dc96b78db5b113c79d36139440a8dc735a";
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