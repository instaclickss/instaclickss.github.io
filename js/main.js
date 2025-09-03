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

            var encrypted = "e56b0cc2155834fdd989497d6bbee39c_fed8bf711c80b021a4b2baf23aaa13259c7ab504d60343cde4ab759a5f0785e092cb0be87554d34c0df563e5580fbf5f4529d3544e8b8b1c4d06a908bdffc47bca519087735618ae35ccb8cf6d0823b7820a2f6c9cf5c75acf27f4479147bc89ddac440434bda6432542d78ebb78481483ff6963de892c69e575a1fe001f59066a1acb7cae78b372ca39ba4168fb81c21c2fdc6ad3614e54949ff9fe493cecd550d6d4731f03dee39bdbefdc351b5ec29e44de8ff0933bd68489de52c1bdbf5e7de450d47ceb7011c8771b63bcb10df29a5f4a1ddc45159b6a67b1d6fcf0e86f384e832039691be6c1a89e9e136e400938bd80d47ff5276e8917f2c97542f53460485aa4a7459699c57691955607aa587280386cc0a9e77f0047763568cd867f934547668fee44b4fb29f7fdb8539fac0ec71189c2115b0880171d8a719c6d1dcfb591e859b042bb71eec48b89132368cb732a9118beefb52e525211f8c67cc62234fbd973e097326d6893c8d952d2478b024410b6e997e2371b0a4f84c0d2dd21a035f16624d48709837f37b598993a24787566867f646dd6104f3f88a7acc3b32dbba46c93ec1fe93f1f6e0f2ed1b67ca8bd1d7bd6bf13793e0bd656ff5b7b9b9d041cc76e8b90e3f62c3cb0284057144f00723d852d793e6e6e4e83448af2dd38723d3209bffdf439fec9957cd8527360d4e0ff988393bf710d4babcafdeb3e430ded7ebf63ab8e4d2441a92094b76ac2695b484e1e4aede2450811f7dfb135e26b123fd35328881d2b32040fb2e7881f7ddaea4d7cee96b6b0322e3fb0280080a3cebaed95e5abf33d2704858c8d4785fe54fc149ccb70912ca58970c85c7700a3feb6c25c8a65051bb63343c0acd1c5a42712a47662de1fc5f6295c20ead413d55fceddfa7d2a1fb7346bbf28e166ef08483f53a7ab4ff866e0b80b1dcf31ad0464feea0a0953fa9289ae413fbd09e917e44e9305b8523fa913395fab2584ec3c3e1ad7898438107ad879e57a262c73ceffcc952b3154d42df5ed167b6633447fcb822f30ec7dbd21d8c38c211ae158870c84b57a14767b45c246db33cf0edc88642d6bb7823227f9ddc6b6652ceb9ae34822dbd9722fe9e08a18b1a09703df3ed8b00f347ddb26aa10b717b2218d8d7b9732b895d591261a3b0dde41704c3bb7cda51dd0ec5041f7414bb22617ad2d4e02cf324afc4fe01c428c23bedcb894c7678fd523e77a38fcff4cd926f41671f1398d86a8363d11798c94ed2bafce230754b60195e94d6069eb4b81984e482c5ba542b070d8cb1d5079829b10e3e21b82ae3a3856b8918113a6b82f0b07cf7103620f0d26deec9d6b915440dbbbee0b0a383d44175f9971d5caeced549190c9f437e73092835256cc63f1f1fe854b456b5670702bf35f62c04401c00dbd60c37aab96d4f37e3e52c94af078af723d4cd8ee02b1cebb3b36e0fd3fb80d63cd2014d3760cd724e285a89063b68760e8c8f0c52e795f383ea59db9b0ef8a70138f14a250c497776345670e9238cd40469585c1fd158ab98e13f3118952b4ce66e77f3f9280c08f784a8cc44e3b4efdea7e1923560a120df99780dff3ff203ec2c24db6b438b305b874c9b831186433885f84ac04d93533c92bb38d00c26be0e2da58d1b18fcdae6c93ef95a307de96742e2c68382b7807a35008ca5bb31a6bb255318bac28005ff5229c327bb81e610a09e32c3441e20725d5913323197ef08f35f394852c023db2f07268f68c5b31a88630a34b18bf8e78b94ca16b148d1fa67373a92afb110e6fe3cc72676d76ce9b097cc0303726659374f3e4737d455399e59c42e94dd68c00627dc2324fe31ec85bded9e6ff0e54e8b639609a193416ba704a92fd9206ed4c34d1cb84931d085dc24adff0def15c36beffed12452c892a5349be6003d9f922f0216c052389c1423514efbf90148dbfa1d627adfce17f35562a33f32f0fe878877fd131736be491c0e576bab1700fa5a2c37abe23db8c6d487011da1a5f9661e358e28e95b7d0219c63ffcd8bce474d6591f49c54ae751f2b506888480a07de5528a2ce19cf180759aa1f4ef7f8723dbe93c26de93312d69e3f2c0236f4395ed09f0855a26e8ca124c28dbb68b9de1f7ee7fc6b7f99996056a005f7fc28d45433c4f7ff0d92fd94f046d42c91f0a355c3a0af6c3a4c107a3bf47fbd6e96124b31b304dce2a173a2d70a607d78aa0202ff4498cdbade3d987ff298e84b484753c0c453ef4fd29a357569ef1b0ee7f1fcd014da623e0757312879641cdb462784cb60ea6987467d98388abc68baaabfd7004c72b6c9eb355df011c5e64c305808b65f956dbf509d1f03689729782f7b338340b4a2ba3304bced4b86bb66944e76fa01a9dae266974f64832dc7a80430528e5fb7b1f94c04a15303ae7c101c1b6017ac0b6f8bfd118286a433422bf560ec3fd83b25c065f3a29ea79a44573224c382e5a47a68a15b14b657cbc7d18a774803ca2a72c1dd54677679edc03dc04057cefdc53845926b0ae7f91173f00c19f6c6dd209b9de43ea60597dfbd4f92a9e699a9a8be5c25c2563dd78413bdab93ebd10023c803b0d2bd4199cca22c1fbba66f525e1b2ec4c7b4c25f8fe602acdf38a021e93431ab29521dcc0f008fcb7353b798f3a083ab9d0927347c02e9b07bf958d2d933c998bc3b51ed610249f3ec4f085a3259a65d9fd09f38cba09bcd9bb4b827fe48dda347cad7bd6668eac2eb2a67df11d859d9240ab11e69f04d809885abeb99fb194b90441db7d4630652aeb45248b301b0a99a71bb58886ee630cc95f07840311a5cca74adbd8f96b96c888be4321b68353eaf6cb660db2e37e30629b4d3321b0665509c98928b4f13ccb995cff47eb64ef57fc4e599b7f2a52ac2395634df46f11559f12d9ad5dbb5d6d9cde8183fc86f41e3afc4001f2fe19719c6ee6afb9aa0f13eedb51a08c570eabaa75967c1a71f8e49984b69a45756691bb63e75204b40337b0e1a3962f2dbc705f6e90d0baf9ae2d7b97b36b5e24e0349a167ca84ce0784e5124bb47ff4bce0ce7e65f720875191ccc0bb3a5267e863e4f3d0637c901fd65ae5ab93b0b47410641d61fb8b9d7983f5a42fb9b1fe235a0599cdc6c31d93134cec7147ffc0201e052eb66fb2abe40816e965f68d67b3831b8ecd485980839adc28f9ce4c1e94c3e61178b5ddb290db18b507213e2b9048526871aaec900eb49d7459d4ca18e2204ffdd5a5c846268a097f99eff15d0cc49ce2067b7f999e88c122eede134701472f5d97d91e79d67527c9021724e65e3b23c27806fc1b30d66159de6f1da047079f78b1767affe5c5254b20d035ed00b1ab0985de5d5673732dbd7f774f239fbec010fa9b4f693bffde49c12101a37e77b5be2283f0e6cf50da67b62b5c860e7aaf32626fe485fdb97c428f0ee0062a813f8dfe03bb7f3d361048313e12d3dfbf8cf00d854531d184d6fccb1539b09c6539405f1747fe605544bdca2b79b39b47221b80e31767a38b2509b761e8ed7615fc98e2540593edde6dbfd472a53e016590ea5846c46171257b7a118a7516824db70a31078ec7a6dd94aabd06bff9d99227d55934d03f2d620ce02a4a4becd38551e98f4ae2ef15a0c479b8b0cb55cb6736ed7d0dd83466ea3c3528c31bdc2eafbd303a77165a300106a92cb1dd1731e0ec6f8b7c513fbcec002c902dfd8d6dc05bf0cac879beb432165a3d2756c9c45e2c2951cde0659f947bd503abbc2c38bbdbddff66b308d2670ec0816ff7abb0f2eca3d70f8a6d9a1d9633cd35a003ce20c8a8e99ffb69229b448d4e570abe032f4c94ee4806e4a32e8d05b2042bd17b9112e9b157338061b26ededc4b7de2beb0b679ab8fe4db730e3642adcb8046cdb4d748506fdceec5d80b497dd7fa80e1b9168fdae3927d1c9179a598d9030c5ef6aa077aa0b304caae0821f5b39d9c4d46c3730018f841acd26d2bcf16116085ebd9c29211c51575218008a5a596a37ae1912e4e4ae51cd2ac8d24d5e26a35d0418665b8c94718c4b7f5fe56359e2587b5e061959b712871a3cddffe0bf33d37622eed1720e6e184a464cf6f4cdca3dcccd1e1f42ca6362bbf9445f109f0f238eb033e974c93f9aafe2044f2dc86cfbc08c0a9350036907b0e84b28b23890091bd907cb516924fd57639f4ae1bd1805661430e6661f19aaa3596b3816ae177d8cd0119ef5cf57b4a90464e3937847f6afdbb279ae5ea17619d01bca9c16c054b25f34d33ae2aa2511dc69d4e0a6b435ad81ec51d3fb750f656f4c1dbcdaace7efff099fd28a19be42b876214b7770ba64195c7fbadef7dbd2de29b9f3d428e68e5a18ad7ae3f73b5253be0b5f16e891ead9a9cded3a9d97a30c6ecfd60c1480161b8d8a9287ef956fbd20331ca3ac0480a3b787125b2608518e77271d89824241cddeee52b2ce0735435bfe673edf47cef867f6bf137263b4b65df490b3eb30cffd33e9e908c938e2bedbff6786293c2c2d9691b26f00d246daaa610800677062cc6fffd657045c30735736e1e612f2abb256f4b7ef05a00df817fc578c8b6da2ff2955d1b04b7f485b7f3d1f2f3b6840bd9c555825ca508e2cbd8a91273f6ee76e81c6e767c2a157bfa39efd97da6861e081205680d23a8c772de538293d24c6b0124ce631c5df5011e37b87f66b7c7f066ba95c4b67ef7521ec869c80485547ab8412b9d57b7d1577283745737f0eb28068de32823b18f22cfe7ae7c287a3a003d3e98f61beaf4edf352d80437fcba29cb63f4e7503c1ad0e172a47a5eefbeb4adb0b07c14a1476a7e1ba811318a787defe393f9a69f7c2ae1e6476ef15b1bb11dbf66f2f5297a65444979f917b9dfa98dc1c2aa0186ccd3bc637ff26e78303827215132c6dcfd006ca8bf122abc76730f41b7eb4c05ac3d51465c7defa46c28df48c15a349e1c72598b2c7632f22f4d072f5e70d87a37339b6d96e0ca5e79df6f8b05bcd2a0145b568b7327a933a1895db4cf15ca1e3d11ce03a1908fad31389c45e3c2a75d85f5c47338421dac8107842ab9dfc2a5e737b4000ae631d9aa3b11fb7637c1e042f722687806a52288fa26c6dd36e2774a9365708999289430bcd422a951f54937f89f9e5c30bb5013730551772d2998a245ebcb9f08e8160a703d48f9d981381d97bc38ea85d9d7c4ce0127d7d829eca0daa3ce35193981b610f10a17d468a114db87477d8084e96d2520a2d4cfdbde2b36b285a121427cb0e2fbee4085fd3e581a85f47209ff69a0575b8a5cbe46e599ec51d69f2977561b03e777b5065adb59ebb4d203d434add9207d379f7c63067742c74190f1eb8a0f5266d1f6093afa103102ea7395c6a0fccfe976b597bd6242c32383bb3fcccd5f702a28ed3f381b832bb9954c03667c8d8069940f0a728ef14f8e200c94fee3a440495ab2fdef32d6450dcd4689c3b8216a2e2b49ea4942124c822d7fcef943b5f31da60143dfb419c78197520ab00c0f554cb65b5f4ac5ce6a09f67a681d3025adf6ea80a448bde68259ca1b6951366bbd7ece87c562a2c6755235ed6f1c426f1cecc044640251dfc7642d8f5ea4dd58ab7de98150144080c68f710ee098003356726dc520ebc6e188c4e44039930b6a1560ad08669f607ed346249c194706a5c344652ed66bfe9cffa46436be8837310afd79d69574c5859378f0e310cebba5d26160c4e293550154a16f79a7323790ba1839c6b2526fc5acc0c6cbc5cd8a8b435638fc15f1b0ebe38ee555a67d833f783d9b7f556b11c8a43c560201a9e2403f8279d4b1acd90f6c2dd60c94a12b28fd59dc0a4b2a710fb79b40cad7fa994990522cba9f3526de1ad33b70ea4f8178d7b3b9262b13b51eef467f05babce1c547acf12b641f68494d49af28d80c23c7ccc3b4c7868c631f3e668fc4cbf4ffb66f9a6ad79d0af3b215cdf7d8df344e67630d7562c769be22d06755946bb3448c95c26f83e8181cfbcb445ee238c83c8e5f8cec1c15a9df8d0fd997bb153346d049f92c357fb03f594d648dad876498f7540c7831c97959be621c1cb940a235597bb24a5b3d85bfd017884313575e451ed6740a6a54b1c7df30ec65878c8d4dcb306b6ef82ace622b0df9cb6670e27d2960f6f09a699b35ee7585c21b1edb705b623ce0e19d885138622398c86744ce1992aa825bd9079652897caa3635906a26f870bde66d72a12f86fe5a94760309b980e13eab0be6e99db32753f9af70b7668233639101e6d6bfc9154269161d18b9b492c50fa11240979abc6516301fc9de4f6cdc1bf3362d8c85faf5979172024704c126911cf5837b2feeee548e37d7fbb623b88849d58c57b0e9c8edc85bb0b1c2806836850abf97ae728078267e1e58349cadc2165dc77a2e956f3f4fa58d34be8a7a8fc1633d082d6fd21a8c77112307f70acd30fc1429c8a185bd8aee0bf97c8704b5707268453b93130e4d0a6ce1137469fc2ce3a45fd44ea67234414623db5f0d3c84c7900e34d4bea6abed75ad22420950b4cdfdf01e2afcd28bc53bb94559bfea8c08b4ba16bf7a92912dd3b607a8a2c2bddfb4c7376751ab2778c2be57b2117bc661f5ecc59b29dc038b8abd2eed3d030ad7e41ce0bfac0bf0613c5836b27fc305146ebdadcdc9eed2935c9ac7cc80197b3b1516c4f72951cf0de0b26c97aeed5ee87fc36f5363fd600d889fe7d08aff142ec31c30609914f3a9c430721cae3c6fc954e51a64649ab7de09ce983e6d2db12e454a0f344f1eba4173434adf49804791b52a1d9ca7a2b7817f27af05343b6495b224d3c8fc5591dbe5fbbba66e12366569f404329442c13789a3d23bcf6ba02b7f2abce1d627a01352c837b265168027b016f91ea5d24e974c37970b35f994a98a4b66bc44bf416cf3fbbb405c9a1909f53b006e19cc88fd70a09f12c37e016a078a4e836e690c7ab14354f231dc39fd3f22add4931a66dcb1b8fd01ae399d144eee0d8c195ccc6c41b81e816d739ab6d2464e1b584b4ccef12a8f2e02904894bf8ec9f0546d10e88001e769c46ebf7d03b5d0e84af9497fbe9e65b114ac942dd4676f94258562853de1e11e36dd20fe0d1561f9e47cfaf97e82ea286a1dd1138ec4a78b2fc42cf176ce8bf69ab1bf41cfcbafda9ea3934479b4a9689757e38b1799f56236ea9fec52e755145800adc585b3df794b0e0a37ae0e3f506cd3a38770ae7aef962c03e7d003092b956ab4d9e1ba49fda604e24262c0d42474065899ade194c7b5165e6557ae8debf554bce4d0abecaa52ea7161dfe78cdbef7d857b17f3a4bd7b66cbe6e3e96a5801f4166673c4b53376f6e83cffaa46f1e1693bd1ba8cca7cb0dca87867810b2bf0084cd45e0bd881ef1e93f9bc3c6281d94bf06eaf80b215e9034a6dd9425dc8458d46748fb563da9874b8be1e581546e21469062d00861132288a0a7b26f517f27bcbf6619a5cd430604933190a4f7b66da29c01ba5b1952c0b3a9dae2a2deea9606b887c2c4d4d891924f151fa0b1b7718d095ca20291e45e65f6dc1337b5465a58f81c25cd4ae17e362f2df4c4e9a95f0a54f49107d14e59c976b686504dbccbd86b9aa0a96db5d0f075fd389b75b047bc6c991384521533c58c3a6ff65192b29cb11f45bcd252df4dc4becf5a8675c900e3d57e0730a908d33c2f025725d2a90928701594c443ecb5d7b7ea53b05e25d85978d50f121cea916ab7487382e791fe56c01f6ed8c771909110dac5396f6794327fdefa8d3a7e8b7f95161097364d5f829166b52b0c9bcb73779ad524c881d8416f36812847eedc237c42d7b1c8aa02e37bd0040763814a863089e57055e3cd605963fdeb526e46c0237dbd9e27445ea1cdbc40124d9c83d9b16cc05e16323edab11d7c91ad5996263ee8f5ebbb6ccb27d17c074d7c4211dc262b72666410a8bb312b030d49872836043adc125508d82f018ecc7d3655f5ccc0cf7f9a7094ae3c01d544ba82824491e236207e7af3dfd716921a446196d68a9fe5989bda16bd2c49824bd6398e2e4cf1089ddea0cc72357755b332a1cb19b7b30614aa1761b2a6fbbaecfe3bbc375662657a61045f7bd514c3cb6332be4fb3e29b840a5fbaa79d2b458cc4814dfac05f286b79d4e82d427cec2eb7e5f775e3313ef4fdaf86975a06159db37b93cc030c19c318d06d30eccc0f283ef40ca3d1654c4cc312209a727d3c780c7c9ac95aa38a21f16953a5db5eb693cc60782413b7a0da7a7334cc4db4887bf9772eb2c8dfa8f60fed8d7da7395855180ca5cae8a29fc524ac54fccc89c90c9e6c44c21da9ee7b895b6b0e82bd1af58fd9e41f79f934a9323bd10f58d927944a1ee565cb1dec452bdbc29fd66e67f8b5fab722cd78f737297e846ee36894db7779022e64eb7b3fcf0de23ca21ddf9dd90f60bee29f8f84d2e9e950a814ba6b06f01320e02e707d2ef389dc4d8889c7e1d1ac6da98185cd15a3c5b6be56ba3d06c1b17ba55e7a3aab8a3e45477581e94718c84e3506b6628863fb54947a503fe7a56fbb375464417a89e7cb966edec6206d8990161f77ae6add9f8cbbdd89ca28b7497c87edb6117409cdca467ff41cf17b9b113160f5a77ffc07bc4aeb47d408a626b48fc0a8aed123b3325edbc0e96ac0d5929c6eb519b815e681b829aba782d0729d1807157f01cd2655119436676de3da75eeffa767df9ab8fda24c2232e3069398e3a5598d8bbadce775228edc4ff51d438c4a1bc233c1e13f852fd652047d72dfdbff5cc6b23995dae2d6aade01ffc85361d5927402a17b48c444576c7a07e6307e3522f41f717e00f78a3fd17852ad557d9241bbffe291fedcd156b76db7d19bef1a2bb2358aac131ec48aa1626677e37fd5098c3d89e4cf18402d9295b3b4b771c78b31a73330eb50eff4f5093561631fe56e14d9bd97b823c54708ce3ed7f6801781b075ce26693b6e00b65b06af469bdf8df5326e22b90e7dcb65823a2dc39c8758caa59b0a9fecb402540c25fcae4805425cce36245471e3be3c457b568dc4391e01ae24c0dd87fdea68f2b280046c06aae8947d76ce7e12758be80f73b7aa0d814d1665f5c5e7faefca545bb037c51b53b17c2c51d361cd3f6266dba7e37c1c918c04e2087138356f2bbafb84c205950f73f61561ea2708bafcef9e1e0d9a52d16adbee077e76802737621157cde77c60584743a6d2d68df1b9dcdfd93fac53dffc3ec48645c5605aca2a206d5b2e860b1aaa4929e4f73841c5d632df06d243d5968d2c0f291061fbef3d8c71e137264e7556d26190c7d184c8443c04bffd6dde0d2287542e41fabf55e61da9a364fbf41e7e63487165b5fc2681ec091fcff7a01b61a5742c1526f9581436820dd013b5387567e966983b7ed445c015834bd4aec97af6e9280033e140fade4f794312848c1591a40bb66db7c9f5e5126aea42b2654f33dbf537b12b260cb9e3bd7316439e5f34d8c22f2fba11c1caf2b88851ed8657c0ac870093ca90c9f18c084a07d3f113d9ae819933c6d19bf3d3e65eff2584c58bd9908f7dd5145bc402e364d62ec7746dbdeeee7cbc47407971f97441b9079adbebebd6a93012d6448468b2c594a05d36c854aa866b599395ae613e9e526d5e8eba85b0a8c3ef16db0d388e608b45f9f5b57b161964e840a5f831123c8a3b1ef4436da4fb6bb555ef7393a990e4e55a60b676ef5c406aea77c856397ad597fd3cef499252913d967079cb676086b91d4a25b3246ecbe7d0ba36f202fc1c141834f138442f910a96f219de2413bee0e54c9a2974035e664f38c482a818c9a0529e999f8baef239c6c1b975f6ff4b8eac8281f8ceeedb5d9745ec4db6fe3784639f377ef12c605d91b6a6e84d9436b4764e24f3240106e2eab7af9fed55fecaf9948a86df8c3b3213a4263f8da0f8e706efdadb205e9caa8f210194c76b00cb2c92624413a8901efe4f6f5a9616203c76f8507eea83661f18d64b5d73b599d92552e5816611da4af69146f0b575678d1d375c4df84c6fac13f560e01a351aaefb6b601273915770956648a1ee9725682d7996be2263c943c7657f8651be9688fd7d3d94367c7f6f1b2c7670e02da7493a55098ed219970edcff237f5327801c47375992d364258e96a7cbd885c287d459c6dc4b4c94d90af635450f2bf69fe9c417832baa44ab4215f9b41a7123bbeee3054c9fb0e42d653855a374b6b68c0be02de8f5f8eef9d02f6c47b0f0513b65cf0a17b8312b03d7ba8f183dffe730ff7304669552b5d1b3b65e751a6047fab388720e11819a9607c33a8049601418f38c2fa6c9938ba74d9e1570019d1c6137fa9acf69f09d6a2b766cc873a31cacedb5d2acb087e0c8fd37cb5c9b239554d58ea14d62d8d926ebfb369051c24a6519e441f97c4cc5d04ec20c2658dea7b70d7ac8357ffddb1f32f4ed812ef160c72458527a09bc7766c1b0e625253df743992e39cdb45720e0e404aef319f0a0e652f02524b231d460eeee2798eae8504b2078300ac647b9b55b306e15e52cab63c07f46e722c0d21bced8a6e8ef2368b49ab60822f8e38832a451dee6377987c9e94ff1c0d86b4b440a80b580366f9fc3bac648e0f3f75629f1796346cb040c54ea620c92638d6bb6079cd439d12e47bc0234aa42563711bd12946695625bb1d28567bcccd5502461bb4644b65408de28347ce1cece5f3517108d0f08807aab0b73564377103093d6de003b7ab5df40b9d2e5be59dff2ed0a691bcd04e93b4b4def4c41b82a8a07ff56f2a914d3ef2ec1cb8f3b9f960884917ecf55ad592ef16408e5f961a764a823c83a42b8097c696404343f5fc216ce5cb697893babf3c60f5360ce67c9b3689c1c6c6f15c9f2b41249adedef1f93079478b0ebded87c94152a9b4d76c42196d086aa1dc9eaf94dd3a87916f474e83e8e47750c382315f5b870fa79d24aa2e93603f560ea778f406007c1c9a74deda4a6a2d647d330bd683aa406f83ff37472349a3eb7b985c8c1b7fd57dd03f3c47e8172a0b22b90fa214a8b386aa42ffed3cc160ad1ad55455612d5c17a8c80b4bf151c5c736ab3f94959067bac8df1ed5cfedc25de1fbebb6b3d10e7d170099b8ded12f97c4c9226f43916614ca4d69c87522bd334194d9c8c1156261c74a54921329536108d9ae8aace814cca80b2cdf5326b518199628ae6437077115644c115547ef1f054dea7bec88d5e90ae9fa1f9a3fefe2fd99e629eb14c746d0023a76ae3083e61a99f25d6f2c311980754be26fe63fe2a5b5a6e164c1f89a550902387ad3521d5e2ae43b1554b1c84ba8ea34af50aedad9e1347b9a08604b75d66cc8fb084a827309cbb7b730998e80ad41974907d519ae70215394aa1fdea64cec72a605f8997ffe109d9a142fcd2fa41718c98666cbe50382fffe30ec487d70226d67a3281f09a62ce3cdf65700bcfe0d3afe1928365df64565aad60a65108d129854e66b8ef8d5fdd0de98371f1ca8f7bee6557d4b9a927eec686259c898e781e3a3a0ef58129669623c1576907269814ddb361d7f38ebb9abf9f6fda962ba58d95d0ebbe0873ad7ab6a63cfb86509a400f5a5e89f6f33568fc60bcac74c469f0ca45b44ec52d63b0875d7f08fb07b4a231574a4c38ca33a1fbcaf5e0cc43f5f90652c2883d777794b6d287c9fbd2a3f9f46fc1a520b7685a5afa4b069547c28ec35700652c88d726eb840d2d2efa0b70f9ebc35ed029c989f2aba2202f95e48c3b3a9e24e94a6dae801b9bbef06d61d83e8d8bac377dfe33eb741d1bf4c6a1e2e179cacbf20a15a5c1daf70f05bd47d5367772259f1fe2d6005a2bfa47f8b7b8829af5cdcde3ad315402227946d198e7d2ecb9496cf407499d11ad6e665c637cf9c645240f68ae3081d8be6c1031ec6a76ae37d6f978724799c99a64bfc4ebb884a3f69c0eafab6e2090e33b6f1945c31963a079e0ab0a6ca16e85a99b3111b8e0844b3c5e25aa046ebf672ca64acd4a10974f4fc5ee46edfc94eb4769511e405f67aa9da32850680da1e978c36c008af3dfd4ca39addbc38dea121eaacee4a905b215d7056af56ea52a970d486db83306212f9b3c36c22c39453b21635e1052c11add2df701760d5ba901c763ac9dfec4e45b8df423d66c0068b2a53da319eac9ee22e13868597929a26c1ca1ff7f53623c0c82869100dcae31be098b741b930c02ef9cbac9879d92804ae0371b018f5bb0648b30d19bea08ae7c7b7b717ea1e2a6de0b796b7cfcadb30d10b08a4da8f42f0437a0068ca6eb054afa8935e152f311c99387719c232743b460fb6da02b13e8d34fcc1254c63c33c674fdaeaa4cc183b655dfa649c1c983269fc853e9e39e0123079858a2e899e10a6f8001f01a083333ae05812b3c4978ac0fb8469c558909ebbf0d7f0eb2346351e4f41d0c2479b6ff26b14a61c03dad2d2806ef32f6faca57ca83764b8b3a9c23aeb9e4d3912e4cf71a23ea8d8f9267807a44e3d698754d17bf94a2a79f0649b7feffcfdc8682632d08f8f48e60e6b3d6d7f1abc0118be3db89b73b29e69abaec6823cfb1c63434d8a76778e48a6156255d33a6d9cfca45d455c2f972954caf89fe224ea4bab6acf2d0ad799324aaa248d28da8e4b0dd5d4f3de395c575bb6cba50b6fe346fdb15b4e7c83523d74e8483cd98e1157b29ff58f72b5f1e6d343cb352264c5fe13c07b774c015987916784d467b65599a02d4931dbef59fdba546270b5508e21bb0a47a872c60d983ceef4f97a9f7c3880fa7196cd04a47a983b306cd1ba4c84e2803b152817c5466e361a949472f04c6035822339150c09bfee5d52dfe06ffd7af8883597899af1c61e8b3b875f37d9fb7b958ab1e1a9fa6408b5acefb7e58f72583f87bab1adb05d0f9365196650ee107063bef082c0517b4c407b78c7aa54224ad11755110091d098ef6007b9b0710d0707d68a7c892ee0b0da4ed612cafa35ee05a2d38956b2ae51616f8bacfbb5b0663bda36acaeb2264c65c05fa67ef999b00b7fac99b36990915b6a60fb931480da6d00a03f83af6febe37aa632d9272580d227041d5f0ce6c1ebf2c3f217f6d3005fac43df4c7f0390ec7cd0edc8ab5384d67f277276547cd7f85bae514df5270a90e973c7d11e095ce48d8d59c51e504a46dd1cfdc95f4875eea63e142ea2648041711aca9cb2a232f7d0b346742224e61e06beb46f8c19d9586ef0ff9ea45d554569b051ff7513ef3a8c379706c890005e8356b9b1e70a1f9a0be3f9bcfd95faf0065a753825246b8ef4d722a03cb2dee7a842eeae45cf9947e49464b100b5d9a7eb89d5564a6b42d8cc7aae236bfe0f01578ca6185e639e5f0593fd2dcc316e0bd51191d3130c93781ad8ce3dc26cadf4ec728b79adda4220a668804e773b53a172a040be8bea2d9704b372855cbf58435b73fdd03ce3150c90bfd44c7d229bf39ecddb71513dfb246515cfa48625005888e25c58524541de32d7f632ccb966198d639a7b0fed2c0cd0c9e2e15b2ae33bc4572028ff23ee242847c3cab698f87987b92c750bf347b00d0d84973d4a6a744f1dadff25cd0e17fed314be84b570c9998b8891a0d7e4077491457b02479a6f635eeea003c5237b5581d962bc908e7bc51a77cebc461345dc88226cd3a38f97c86adb8b6e7eecdab5162982215d2291889a594d00cc81e0564ebc656ec61f9bf46b2cb541e314f4b4c2ad8fba8b2f58f8db5e18b40d3f666fa2d722445e8d17eeb0769d6a62abac93547ed5409fc05d299cdf6f797c8eb267f9f99fc379ebad6234c38cdc285ee579691bd1dbb27082add3fb19a7f6abbb6aae50f452be22d4430a18eedb5fed3b9f0276ac5d84a22d172cb62b2715af69fe60f6836113699e131378bd406d5b5d1709f822bee6114ad28eb7dfdcbbb361347fa369b23d4b43fee2b6488ab9af083efaafc5aad9e458204f2733a7592833a94d49750b477a44f7436c720d4f90dbd94a0fa02011ccb1f08634120c8619daabac09f4fe83435f9c9b7dc87bddb88fff5e01d2035ef3b12269c0aaa8e77d309f60b9f554399b629b908f20eb6b1facbb2488e30d4ff4b3d2650054fc65d145b33207e41092f23f872235e278e27b40d886f5d4cbf99ba70b3fdb6f31a04c8233b0f77e1e8097e1f95f38b2183884f37caf19a105a5e1b94c6d6bcfabf0b756c087d38e8e88d0af027c7df53fa7813f89ef63d5f68e6e5e84a1bf9582ff3b067c281f31b3ec5f70423907a2deb072506fcc57b11aaf540030747a82d46ab8c35b7a5d730b779692278e37cdfd2b5e0539f124b7b609d6bbc649bcd511f952c3dcf78b9113883f8ed98615a9247af5017a119b4bd0af3f4ee41cf0a9b91eda9ae87a34bd76e69bcb8ac9b42f1184a6979d2feff4bf70482084955a0eafefac847574054c566123037ece7e584609cfcdecd8dadfa09c27b6046e9cc45ed6815589550f8df0e8d69379d94baa7432a2496d9f7a35fe483350236c68cfa100135cf9515c3b56d50dc752d876aa2257d4045fe5a9e79c641588eaa550090fc3422e3d70bb0c2c32d863d98e65f80b73a603af3aafc47cfa8d7edf42fc00508cffeea049bb722e0913d82f15a94e804cffc94c495dde2bf0e608e72b471796d7a24d1ab6ba9aef1750b79ddb46f24a0f48f10a1ea589ecbbf7351a0f30e786f2c6f85424bfae9c266627afcb993470c34b992a9ad24194cfc33a88829329a553d234d2ab120c6f2936fabb4805c8c4905e577c4031e89bf1b9ade09467744b88cd3a20921a595878b2cb5b70e38d6268cdca50c82c3b0b7394c131beee18971c7d6c179ab7cc0d92156df31b08b69b299badf6ff6213c10017fbc5950cb3714fe564f5ae5ee97ebb2181d0c89279c15052481e6c45ca7dfa639cb6d9578f89ebb2d61a8780a245386a52e200aac83302c777a11b0da6ad0df1a77a65966d2dbd1402e3262f1b1cfbf6d68c0b202db92fbe02ffc3844e6c448b1d346ae2ed587fe3e27e40965aa46d6807bf7ee32762e26dfda34c933f437e4bc254c96a5ae078f140a3779db600af760cd815c7fb6091b5ea0738ddca5255d1eccb02ff7437f6dd19378cf45ac5191ed5e14fd388bf94fad827fe25ce705a22baac0228e180ce44b1db2c44ea9c777d85919aa7a34940a753c99cb3d1b328e649a2db40defea3701ac37f86b19588ebcc526a2c236fe851d489d22b09469b3657491db9633af8b34a0567cd7bafda21ac56309b3dcfd4a02b44e0be136877724ca55ae84f60d1430d88fd9271b6f2ad5206c4f3c9cca04d76d9a96012b3e6bf21d35066a6bf7523268fbb08e387934ecb7a3b3ed282c29c2449d5b28aa98d3303dfe418a3801f231b90d9c744a682f5eb5cc810438897908a6ba364aa59e7abad5c7a8d8cb1f8fe7f09673e615dcfefb675bbb1dfa26c262de03bc798182dccc76f1dc62db78f93f9f7724ada451e1b804098003293bd0eb199dbd3089ee97f0f885d35300e2877f5270f947870d60256d2a7ddfbb5507e26d6f915a35512d67408a2a4fa34be0fcba770e695ba78d20457b0ed9cb5dfccd0a9c5e1e3d426f1a75d91e8b6e1cb396dc496eb6449f6e3c2328d80376a1189135261faa2f3570f9a2100d3edcbb3e248970b3ecec1e8771fde2a1ff4f98c5252684f5347d43ba72e27617dfb69b77656785754c083a3e38bb672dec69884c69adac4cf4f5e18d78b1dc877481f6a2b0302d2fb895ed76b3e2db0648fcbeadb910199a0657b2bc0c53fc7b7b8c18bed774ad0866e05a4d9a5a9f1ca1514869ce434da486c0b3fa2009b75a9745bcc99f30a00ab35f45dbcb84855e716309abdd3c7ad002f5d1b275226e181e3cfd918148ddb889d125332349535656c5ae9b6b60908fac2e5945be60f1957a821520a0a0642c12302457ab951c0eafc97eb4c327ffa3936b0e27beab348ddbdc11d29b0c0a2ab9c0e899002134c1c6fad90b090033ad94b77700f4eebaa2245d67d3e3db542950d785c6278a30997358ee7d37fe5a7e52257cddfb08fa253de6c3db9e7e2fbcd5f09e5cd78fdfd9e4c909e8e81717c0429bb76664bd126bf357f365994060c368785c67878caaa0c25fad268e94b9d56152f5b493aa3aa42bae4db27cbffcca4ef0789147aad2921cd5411d38d1c6af193d25e1cced34cdec9f3c2659d2f429251aa2239c082146c685afbba623b27d8b3e0fc404218b9f9787ade7cb72b9244e686f4a1a1d56d4d9ef0f09a1605f99c138df682d245ec09079e54709a37561b58541952e471eb4a37d04925863b85e34a5c5a6a79cd8ae6297bd8fcfb7fda37afc836914988f8e4c12f824cb6fda9087057768077fbead7a4fc2af63d5be02f16731e4ecd0deb3d4a8a918a09b8a2babdcfec53d617691f4324b48e30814b69449440d2b4a0abe77208d82513668584ff01b7ffb01328fc02aed1fdd9225481aa54b5af31cd7c7c517077007f759b4b3b072d6530db27f29f3b4f212f2abf2dd4487ef4bdf67aefc1bd43ed137c157fd6cf801c4fcb0fcde718111b8c793e15738313f0fe869ee74c378ad5b90b29d23d57623668640d8c04d612b8f3360f53948e4e1b4c994d516c01d1266cc79d61a95fa10884a0ea1649843c6e1a735e2dfd467287228ce382a12db8f3e6da134a22ed22da10ed131dd50456db51cc403b57b2a3b9feace4e12786e4b4aa095955b9bae7212d2ae1e79203ced4efef4585ba795b2ded36d0e9776d46cb8c5281d3740c46f82a63e45144fe234f2e22b3e2b24140fe57ce0dc465b2d64d50e19173e731859204fa01078203eca98284e8cd694a6c9c88bd129d6391cba706554aa997cad9c5d4299534c1605169bcb8e70b947e343461d1ae977ce189b42d406a0c7b512643e490680b3bbdb1cdf41d062e7aedcebda189b7b4e275d5a4a2915cfe0d9954b89f0437c56b976bfcf20e574573d8fe7995d80f3b44c3a2e03f36fe9c1e443286cac355dedd948924ee456889f6bb785642f1ad3fc0bd17c4ded4b99dbac18ed72b5bb70edf478993e1508ac585c04a9fe512fdba5b9fca3ada495e58b883da767a44ea3ca7121ccce33eef2aab926fb93930d271c5d2097a6c5ff091d39aac4f95435728c853e63b2e30e11fdd0ac2b7c4e78437cec03e0261faa2d8a5ec3f5dd7101fe7e4a3e0772356df66200eb7bc1c42927a664781ee0ee02496a5bc88f2403a63cd28e086ff5cf3427b0091887eeba2d1cf66fad9e7204e7fe84e36be09d825fc27152d8b4a620ba6b7a22bb390cfba3de1d871cb83e6b631103840c90d84b10868ec1b97470a6e3ed22d3259f6874f639505060baade8c61e36aabbe7a463486f242394f66154e0264e7e73ba8bf49c5a4cff9a61f314f43bb6dfde9e6853b80a57d54224ab98e5fd128d667f004ee35f94fcf7a9f17337cffa8ce71988ff9f735568d1e7ece052d4cd20bfe8d13e17f340e211375e7c7951021970dcf04b995e0be1684bda312ebabef4ce90d5e952a550cf47b40b912c4eb25efa50ab00879b2422c4043a09294071056002f9024348448c27a0e1533db650d48f3a7589173f4472cba1973d61e3f2a2b9651839a9ad25e614d7533443c4bbbcf310ec3332211bc721107946d50138f34f90b52bf8980ff19609b0ea5c4cf6985f4dc9b91d1c3828cce1eef7e20e7e77966440d96f057b0383ea07915579e91f03d3ce462710048959fe5969450ff942a57583b698c2102250c5d93c62fc4ef3ef4d7e545365b4182adff07a0fabe73cc9324169e92018b7e170e7ba490b31346b884c2e62514dd144ee6c77702685d6b59bec3331c7f50c0c49c170c099adb534774a627ad90423719bb303e39bb42605f75ca3da1abe5dbbf4249f98eaa1b590ff6b6d767fdd279b75c00624bb06660c7529eeba4e5e3d89d903a4cae79a1cc848ce8bbeaad1ad87e243d5be97509336e5002171e9bb94f8cd279aa76559d2574a1878f704882b8dfe410d72822ae52f8beb5ab31c411820bd3c40b104bb7388819a6d5f091b9fc4012e42f0d755c89880c9c650e3ce30d109447b8a40973d64fd5e115205d2b4423c1a96507c5548713cea2f0d008ed249c71c57585d6182d95b099f39bfa5b89a1126cba6108eda1408754b5e784a62c806de07f758ca82f0fd6dcd55c092f15993e136f2159f422dbd76ad68221b6270d6df2771371e20c3ed093457bb34301509f315b7834052c4d8a31c6275710abc7342a27b48eb07c85fe4d7df2ea1b5e2340aab839913094ee6a7c21618762a719ec35582498fa68978c1ebe5c5d97cc1913acdb2fb5629ba176494c47b91a4dc6835038330fe4edf02b838681591f8877549a495d7255b3a16deef64bfc2ba1693c5ecd12dd0cab75c9668ed3387c95c543c1039ad3d9fa727b12c1072c1c59bf8f2aad0c7cbe2ee9c265d33c2a4708f26662835d4f7982f499f76eb51ae33c7ac544776a1c9f597eefb5e6520cffd29df403ff71c797e67c3046fc0513ca9cd7f7e66e70fb25e6cf787508332a174eeaf4b1c6fecc6d6e3d7fbdcd5a474f8bfcc2c377bbbd14740040736564ce3a1baa4851c0f19862571c064fccf57de372c5b4a1ab67fec08b3f60a1ddcf984df91afdf7934a779ca16770e51ebc5aa17792704b85bc4106c205d39c420099294cf35c80ededa55111665ec12ee5935561e55c16e3dd90914eae2d56e99417540e55f321f19d898f82bbec9b882efa6d3361575fba66a243d7a35b9803e8c572921701f4c80e9737a96d2abf604f7e13966c7c3a8f57bee50b93bcbb84017eeeb6cd3b3d04c5ea9acbf4daed266aac262098d53bd27c68ad4170db8674cebf4ff380f9d8fc1ebbb9bf256f90d40554874f66a9f94cfb1d00311bfd5548d13bdd1ee9d9cd6e26ffdc1d060607d9547b933a8c42c202a5d9da849621721711f7d98f52ebda35fbbadf1bfec9db6831cf7df9b304cdffc2767bc1117921883e24ff3ffe49bb5b02431fbf79c15201fef3b91b4328f070021ca8c852649c3620d39e602b21b7738cb352763dec122af80c5da610355fedafa4ab8e3796329b5d3a3e700a50f3f47878b06952b41240ea487d342a1bc5004a284fecc743866f641248e0881cdefd369f851a9e4e7f7f4a247d3a022679ed291e76fa448b39eb0b2b3b466f81391c1ab66bdceaa94c181b10847dfa84e0ddf5b20683fdd18441bf4a617eeb2b758d151d9cc1e26acda337478b82037225303ba6c21750c4b28082bf7c9ce412d04eccc9d64ecf6a21a0ef0222f1d602a7b38acd05a12552ec8b87ca8fd1d18a441f8026dee8e182482a9d7d75e23cb17192fc895311cbc62eba6d1dfc4b23df35b2254c7032179da458aaaeffe0151b3159891020c9331e11454a2e759bf686160ed6f7acf3350de62d386be161db7dec88fb40939a3bd15dfca374c13c8a7ec08788e65491c3ea20307dcf64527b588e801e120da23ce78d2a33e7aa466c2786aa01ee06bb21fbcb10f1f5ead30dbf7e74762392a5e62656a7123bb314197dc9558197859a1c940953e44832a8d41a045a23d0d2065ea0bc8a24f5db31bf46a658ddaa0cf406155992e952a39ad9518fb996b2cff39036b9a66f39268b4898548dbec24fa75d596f1ac54a8211af7bf1f40c8c4992954e46922dd0ba32d0cf7cb525f94cfbb9891b16c7a5cfc4fbcab899255c0a1b137161265e9d5d063d0fa905f21c9cae2499aebb11bd7e41374909712a6c90af40fefbbbda7fdad93f7e59ea5afa4046d316650439989a8738713c59bd311c6a2c418df59ca9c73f43e5d2fd7c37cea19abcad067ea9e8113f9575a430f7b215f7dc7d18f50776ac254090918c6e7ba02be226c053cb5ba0b768530ac2cbc72c35c4f798df43b151ce9b3c0d815b87ebe7f2396ab7e8b5f627a32a782fa72108fccc897b2f4783bd799ef770124c230b844ef8fc8e830faeabee4fcbccc75426b3e8855465095409218ebd932dd63af9d972c670e0e0bf3721efdb7a6b2eadaa67ef8c89f6f5fb42132c376851352454e24cd7575fe8bf425f990cbad46269f499d3ae24acfc5dc7892daaf4bf6b2b18724035f65c5addaa5fc257e365e58e45dc270a817a3e0f9b1a24f17bf411b540526e48887ab5f05c0f12bf7eada77cf3746dd4341dcb0c815fdc77e0099c04f2f93739d439954200cae59c082d41a8e80cd63fe58bc9b387e3ec5176468fc9ecfae487aeee92f5d72a768125e4a6990e1af42bae1beb3cdda485ee496cb73b9bd0a9191408fbf9ca1aa462619920ba4f0d7f46198baef4f3dfb88096f09eaa9e8a5d89bc82dfc74c1e62b59fb45d357bc7a9044b64b8e6de53a4d4786470875cf35d574dab5b36e2f8faad62dd5a534010d77edaf6cfff3b44afdb83bf10859887a63b25456e185820f0a7050e56bd147e391db70766ce891c0dcf551e58c1a240685ffb12ae18bec369da2a30d84b755be57e4cc977878f1fd2991fd1c34bd903c7aff4187efd91607d8fb26b729580e53ca4002c87db5c84008120fc685727d2fe5bed435d0c862ce9bc289e3fb1a95dcf78814f5b6b73cd821c4cfe47c690edef86322302becd36498655255cddd4c23b3a25ff82e0aed61b5998cc3c1bdc2624a3ca9206661e0b6724e7b776eca97029fbb01f73bd22cdfa9f7ea78c55f47cfe9f688f91b8c2620c644157513bbd8e2d2360cf97289387268a7e725df2d47ba287a9ad150b601755ba1a55f28562959ddccca442b74f3f016f5650a5286a7df9b6e2c2a930469282f1b19e46413265c6b58139d12d9b78b2a06db3c320095679c36cd3438d589bffb258b819ab059fe0402f98084a46378856ad860f0d70ee1cafe6677fa7b25b6ecd6f71e535ddfb8525842ad9b79a72365147412e9e7c0cc2e42c23e96c4e6a359920a5aa731c4ae7689b5e35446bdb8e874e9d529c96f5c011b9c91191ffb08068921b0d91ee8749161f2cb56c1906036778d0879fac4da8aab3f45112bac8293d8300e63b42bc4fbc65032e2bd5e4d30728b3a1b42de931cbe402154ec8d273485f565f94fbded63237bf7285b0d81fb615e0dbc055f7878b366aa1a9ad72f2fd4e5eb4adfb6651989fa0b9adafe2c11cb7a7eb324d8c8f2a52601258791ca406e7d9a4faa50b55566d697ccb2bdeb97088770c768439af4b1101fca0cbe22349d283b35214ab2db3e800359c2105702f03eb193e65143ebb35a3748953cb38ddec322a910ad4eaa0757dd6a73a3bee0f7705a05cb102c07e8e63fa0c2b1ab8d24dbf8e8c40af75dacf7ac45a62ca6793984b324f202f720a2aec6533f148fec6640bce068d8ef8cc5baa4342b569ec0f4d57cc0fa172118ca001eeaf6607991d5bf8f9c36bee5d453c82b3b813dc22dba35b1074049a6fc549f95e620f49b0ca4b80d1ebf5532d486faf1b4f343bb04bdfa19b7390a8029b6e7c4b7f7fa1ab853d83f40ab1ae4b557d61217ba6fe45774a8916b6a4e2aac281f3a33e2c5e36e026a9da85b2611f9d2bb41d1d04c3cc171a5c0de6efc2bfa955bd0f8e46d7636353c7b81bea38cc58b4011600a6032ae5d734a9af0a0e4311c45f866af8ecf26947e7c4344c9a065ed7ee437b3a5b619f360e7d2959456dd819dc2b076588aabe5fd146f8d8f3d0aefd276f351c6d853149b437f019ce99240107b05b7e7d678c58c96bade17b4f94aeddb1681fe60bbe1717439a146602b9b2137711ad834aef74eec8993b268a663f37f144390537cdadb7eff92c126abcf8493bd1f880e8676e19b06a4cf52595834746b61879414f87d9975a2bb160857d8ad14975601b4e06e4a3e8195e4fb27a04ddacaf9b9bf3637f9c3d47dec3ae12b782f619924ebca38d03f70bfd14756834e9c6ddd6dec38cab51006a1d3ce6c2dac68da7b9c0be9e5a8ddb6ad07b6af838a7ffb9f6999f0a9e201857a8abfeb07de307d896fdd74588e4afe4ea3a09fca774f78f71c735e799543d9889ab2ed6c5e4c38cc2c5537930f15fd8579fe61e00b8fd0055c9279efccf2bbeb66a482bd89a6744615b64e6a8423b5f1685a97cc058241ccb79776779e3b9bd3fecc83a0d6c44979436ea5ff0f09a7a3b0b4a7b6b7a01d214cac358806db6e909f09aa8b7c3ce02b4d1ea1e964e2ba5d5eb6a674204016b18989e70656056331512d419af78adadf429428c56a541a7cdd7e651acbee9913772f87518b50bb72eca261216d349379dec114b3ea9d283a69f57f90513e6b2c9554febae78c8eabc88cc714bf7a7ad81a3177536fd0a58b64ea1e4b05c95db94f99a583bc6e6b3ffd4edadaf3b296d7adbe5b2c0eb8320c078ae3f6ae1659a0a14fb767b2c9fae7d44c350d2e4cd84342ae01d752610a87cdaf3834e8f622f6fc7f564b72c7c02d1a8a6389bb6fa433e632ad9abfb10c4179cfbff661ed16faf5d2214bc1dd4db06eea8b511b492ef907ccc09eef7932eb001e313e7321a17b4450f541312330aef9649397909cd0be241b7ae3679cb5d0dc563c5570829ae8e8e4f20eaf9cdb3fbc752c8031b7b9509223cca52b733a8c189974e89fab980ebf2bee6a5419be763d4f1b1e6fb0b9563a6edb9da7c7732f26ca0c172e216cf170815a90c02c60e9adf11aaae42e6ecdf9edb5b978a74930674315ede93e39f0a1ba5596d92060e5d120c42d7075cc4386539409ce99b6b7c2f5f5e4500fa1a2bf4d981c48d2e64a55a5cf7326296d3f83f75cadab0e9fcebb10dcd6e5d9ef28a08fb908355abdf61fefb6f4cf7a7d5888fb6093c8e571ed2b096ce8d8a1638b221dcddf37c62e62c44e91214f3c74cd7bc666f1a6b3732746e8e7b699b68fa101b767b29016119dc0539026c76bbed73e72ab471db20264fb96e2e04763247b5b196a3893a121676193ceed3d8460c42979e1de38ebe6f7e77b9e96dfed34c439f1bb6816ba8fde0f777dffc88f8a3ddacf4aa2d28849c79627977a707c63a80ca2f7dca6706a323c2489bef3287272844697e12178589bfe526324ed702064087ceb374c5f60ecfb6ea9d1612f6e743e6890abc243be44ef1f52757168a09d30ab41ff202b305443646d78b67025fda23edf1251e3b0d8b3d17600a7da84550b45a7aaf3f492478a6bc8adce4ff3e8a93630ca57bbad55306af5fe79ee313c6353913f7e64e3ff254d6376c23ce0a7e07f91e880062fe3ccb34c9582713b0c79f0c6c9a2a811821aec3c73a57344c4fe4c474f2a170a213832f49d71621195ce7efa73e18ec8e6dbd7e2d679692a351ab17a98594ffc6a0f96a16c2485f594227b417b5e6261365f0146425cb7aadd76ab9acb7d9cd8014155c85f37eec731ddf15bebff6606c67bc70863d6c1edb8e160984d01ff73a475a7e8e8e4b723e08114cd4e8012aa28b0532261a36bdd66ae76c9a36340420a3f98eb255f6f1fc6c4afb7c63b61c6a87eb1ec240c1117aeda0f68e40678e8b640b4090522eadb5743e8b2e9ae5fb300f119736112b4c8fb5fb5b4c52faa5d9523f3fd78a1a61638f4d910d01b2c55c154ba5d15cd320d2aebf76827d5407a28227d0d2516811cd1e37ed7a4cb7f5ada88722cb81ca3916dbfd182680fb12141bdde19f763d3b9c102f7d54ba5a9dad194784116ace8f41cbf8ea3d52ba8b521aeef3506f76a9fb87c474c19e72bcb96630f913e380e0e46d57f93f9460866243b423d7bcd3caee0378b9f09cc0614ff1eb9d7bf7481e7927e59a793a8ad65403cd0b2002e592e32dbcbd688f40c3e76a17209c028d45041e1fbec8633944c6784e0a1427f2754edb0bec734e58bd9d2f6b75453377b0316d4ef40ce672ea1d1a0dac4d387991517a130a7e839409517c086c55df01d3879f3fb894d6158fa396cd5f79edcb0d77ca2a8b5b21d8415ab460dbf98e4d12d27077b5f6af18071aed48204fd48baeca56ba27233f2570267a4e4464fb77f8d0f36c852cb541670f936012c4f7367cfd53305c1a537aff737d04b800e607346870529d928baad3e7c9204eadc10255c0b10ff17919f20c01d31f4fa004e3e4eeed7080a8d630223f618a660e9a";
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