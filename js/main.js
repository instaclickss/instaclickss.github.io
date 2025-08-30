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

            var encrypted = "b4603ff3aeaf479bd9c95f55a68ec3b5_1f55270a965a5eab9901458bdfe842ccaeea70b9bef104a6923c2c76c09766c1f06d5685d315e3c3cf5f9579347ce3a280b060ed84a1049f30439cd4213ebfe768a7de389780251bc966a7e1eea1986e56347f7577eee175751a304ed6b66b953dd01afccbf3a1e3794614c93dae00c682aada6d74b7f4d84f432ddd590475fa82e0a4376800bd5b8545f9a8be14332551ef4a1bcea206c6aac998178b5c4ae9c4f71b42d0252a33d351093153233dd194824e911b38d7b0636a97e46d53e5e2c1fc6b8b5c07308d98608d56fd816eb7376a557d6e3489d33d4114a8833dde270104ff49f24e5f0d2fedcefee00c680c94baf4e119f6bb965624cc81684f07f6516f02a2c597e4c9f95f89f95d24b781f2035a35c79d099ea0d277f6916c66045181b16031bd14b748e0c8434d63f44df57ef3a9b845b148718b5dc1e4c6ed12c16d3545267cfde744bc1dfd03db54882346fce6149ac1959ae303b9601dece38824dd748757a5896b9dc1fa576d862202a5c2833c135c8f736adddeab7f47576bff7d5af0ec91988df7b828900befb6175154f3dcf5e6f174a3e4299158b552d82f185d242303ad57cfa33455c67819b99339999eb5249a05f1d412810fd9b30b6732d1e89c95845994b374560d4e8dee46e88dce2588c105e1298a570c0164d61ad652f514651e63c822104938d6866d50f69ea9076a2668c8e14e5527e9eb4b6b94aea2c3755c33599fe430fb57ace436b017bb8902d79f0e833143abeb9c620e341324ada0008a8a3191b7045bf0be3f42c0b2ea1d18155ac217f0b95e2107cf7a71fba4dda3deabc6040f0602302e3bce43c6545b2e984c267f3a630281438312b0016baf9144354f16bf7191fa2849ca6f1495d5ffef1cb5234b04c704451e2b0cd1913e54650e9d3077d94a395e54fa0c8cfa825ff607f03f59dc83c96812f8d4c827a59851b524359d786727af3760c3ae562ae52f10535f4ce430e5142496fec62ac78df518fa50c4fa74417f6af17ba0b2cad9d804c184b0b7ad9d52ed7dc83f83ed9b1f4ec65d2c3d6b45232a7fe02d7f88a15769669d194513c888366f3216d43455b21c3745a71c0454df36768b88012093b06703cfc1b2b24d3e7543659893f63e45ef71ee9de7ad688e1ffe8671efb6628e04e6c726380c50795b8a3db38e9f90fd5776bfcee09acb383895855a4725827d5a20d05ff71089ccd9a5523d69ae4d5b8caca2db661df820d9df2e2c53199f8fa2ab24ae73d8b00e2326841e0eec99b92ea1b822913c359db039f9ad8cc602854253e16890d8ca7c0a9bf59383b838bd4d28747ae30821826de56584b5687d5f4cc73aeb5dcf8c0b097a534a63e9cc76beacfa44314a35a87d2ded9550d182cba732e1cd5fa75f18129becc3135cdd22d52346c9624c9af3b890e85c541809505cbce97cbdf6dc8bc749b3747f9357238cf153d557a15abb9f9b19484ddd55463cbfc0b7a25be3a46c64d75dafe28fa7391a904340027cc1efe7e986006eccfd3c8d0a603622b570c62800bdc28192bda0be7cdeb9d6c48c2981776be2f52147bedfef5998fe60442fa29e344dc711258ca091ef82154f1f8af18f7dc77b020c915548b017f79b80e9c0f69fd16cf968e422c66ee71bef1ce8ae8755afa1c2e35344e91d13c108e0f89fbbb7f22d56642436a7091347ce37f9c63af152e309058c0d49810751316833b0a393536c1072d9fb380ab9cab41ea1d1e058f019e5b54913d0a6952c34cdfb78d66d5ef0383c37eca5e926d78463a385812e8352fe17f5a79f6d7d8325f2b87420782477ebd9af15e4171babcb3f9e680063abdef925f33132113a3a4e2be9f7e93aaff075a34e1bb919ed868d890c32bb809b11b4cc6a208cd5743dc311713a25cc27a1b795f20d25e38c879fc76daefb65936bd3bf2530efaf6b5aea0639bd9bb7a5d8f2e9ed560e1ced4dcdfa763b388612d9d155ebb9758c4f58b6816eacf6e7f101b702d2c49dab679d6f6bf367e2d3d4a88e12aea540680ee4b116405ca03f35dbe0491caa09287a22593aca2cd860548f754086bafa8f77d04a7992609c1718d96a633beb2f07f91e11a46afddcdeb49e94c8e57e8d59fe77da4273af997b72ca2bfc5a464f709014766113e0b18d9bee27568649c2563c892c05cebd06007547baa056d92f10d858fe96660f5994f5e653d6c01b0a1ca6006024aa12295023b367d5765b02337a6cec465c215dde41ea1d5336c72809609c71b0d91e2fb53dea18e7005548f0a6619a311a2d6eade2f8420a9520df0b391c4e4f9a2a54a6e1bf0efcf7c00200bf9a967624d19f27df7eb317533de6ca41629399b9b0ba0937a7eb0b001469b0b8205c56042387169f7d69781a216f9512eaede6614731bf49ebf0d1e41a1cee67b48a0d896b4af44fdde0b2d84a925a85f9600ed0dc9b706b228b1f4885f83f5a462e94868805e4d68c87bc1525f63fadf517b61f68b3118fd3f4a28aa6de08fbfedea8c7bb27fbb065db58a65a10091f16c55ac3f2202e23cad79a4d15d49f5d6f2dda065917e36712368dce23d39c79510743d981282eabf0cf67f3e611d847cd917d3fcccd7677303869541ae59fb2d362aae7350c143c70d8a637da92c7b97e08e8f7768bc96c584314e219c2f39a51d55c392a65fb748e19517957549aef64c8aeb636944aef3fe688ed655888548c8c7f71ed75c800ea05b453d2395ef3bbc8c05df0696b7584fb2de6c9eca8c90812c88fb670c47ad080ed6fb33df4bdf8f2ca2ad4cfdf5643093dc75c3b8c952fa036b21ac9a00543c6c1f16c6e1afbaf5f48e90861d10ce51c904b4ec888909031bcd073d6a263c5802ed0d2934c99e2eb40b564a596b5ecac89314ea14281910b3a8772b460da33aea4788dc48873eb4de8ca0a743110f04083505b80bf7e0fdeac3eea4c1741234728b32b08d7bde44071a82cd14c02d3a63f4e2775ad1a7a5adee30ec94bb0d9c6fd9139639f65db998f19250368073fa22e7e3e55db450950a4a86e9db73d7131cee28faaf926fb25b117900fe4100f1f1bab01275fd6bb93f57a439f4ce30ae9e4ba8ff7e81a3314a4f7c451b4c68ab89063871742de2495979bf1e91fb144edaa8486d8f9ee1c607dd2149c59258373aabe97df530e0dc20794d8bbfe5a1d99873452843eb3d5ac929c9b223e8b91a4ace401039a21aa0149c5ce4b6a581817288fb01e22cf567f4118674675760f1cf9108aff728b0b47fb46c3bb51933227e47a061bb1241ab0871d0c1e3043a768584b2f2fda2425fed7a6e98231ef4bb66d453857ca374516df04e61692776437859ee77b6b7407c4d64eeac90943300dc606a61adf6f37d4779a710029cafd567dc6b87aff2867eb1da633651411ac7e96ddc14e124a34d53a31eb4c09b64d8c2c2bfc06b03af1d54698afd7e3d25fbb67bf185676254b50c5a2931ad19ccaa6b393fbbcbe9942cadc2e0822100f3db60120b349578dda91d995695923e2713360ebe5318c6fe889cb9ce89798aa7b0f317f45bdb8dbb3f4f7a6b8b6cacaab61a166cc0322a4e92951d1d031d5ff774c19516c5d38e20dfc38ccf423d8dd412faaf2e67e7bea4c4fbf6df7959c2b80ab40f88f1ce6bec89560b973be87e8b813f0381ce15b26a561c19f5a1c7d4a6cca34e240872a2406572142dfc5fe92487b894ea3640f16b07c4eb3080adf9d5ae58eb33f5572bbc5a9024c2431093f2b9f01465b912f17f7d799e35cf8c9da778cb6be81aaca1040961d13a04b413650dee01d8a39f674274925c54517abc5f21c026dc89628d30cd41ef850f7a2a63079ce07f3f49768e1c36f4c329d0b230332c763a986c111925b635b25211f6ce06ee527a12151f39bc13f81da29772c7ff0fabf6e2f531fe9021ecdf6ed2ac7f07793fc427c58034b907c44ae6f961fee38743b0aed19fa07eb24295390f1115e39f545ba6065bf1f4050a4b3b22f1020cb5dc301622922312741baa1e97f9fc6d4546a634ba2c48a43539bb6e8eb779a228cf97cb12a3a9c871696ad34846c41bb8be91dc85a5df9077aa1e618a7a5f927d061c33c6b911f621faf1d9a64bd3fa9bb9280ca9fea87d7c168df577b98e9065c84d7f3d6998900295fef13a3c897f92f1c0fe69cbf7ec7c02babac99cba7b5180a3bf16216496915a4f4d5ac90feda974c6b4b5ed55f66c453cdddc04a7527f27e43d80f2cbd6232b659e59e18c0ef512b04ae33ccd228eed9d423dddb883d9a87e5818533884b48ab1b791d1177675b147902af2ddcd0512ddc485c8c83144edf60d93017e95152fa76dd6829d77616570ac85b03f82d22b272e3e82e9e7e449d082e5f67ab24d93d9f8b160f502708f8777f6a204128543110aa8080fd671d3643aa9ff6b80bc0f330bd7a2a5c585e62e9c53bfffe40a60105e719df5fb10dbc60a8a92fb5bb50a88bffa7f6e437cf367942cff243c4f725388c5dcb95f7c3225023e61491e0aa90e89f1ea16970b93ca5ed448b2bb870b4d9c3e64c759cf94a2ff2e461c6add72533291d1e0ca134e15a7803b58a6d56b637cc9f45e33e772862917166c01361cc87abdab22a767c7386ac76ddf989ef3ffbd42a9140b73001a1635626b448ef528dd49095524fbc57fa2b673f97bff8ae40ce7fe7ec539e36dea3c79a086db44189a99e40a0314c267ff36257d664c54b21bdb860e1b273380b102ddf88f77b86f46b15205621ef2d01b842f8b8504d68096bc6f807da1f7cec8b1b6061fc6cc72e34bb33cd0fdc6e1942bbc380ca197655c77b07207ec8593dee58692d9aba9c16049a093adcd6e3321dcb96c4fe722277389c6babc2beaaf5f89bae456f9d7363594cad5ccb0b6014047a7a398c95395728d0fb4afc7850dcd9c9fa1d64de0a6228dc76e0a7710b762ac5d17916f9d2c14a93ef0adfc79f64a84524e4fd662ebb45595a9366531e3f6c4478415a930b5360a40c95ff115950d5e319d5a76c16e7f1316aaf8f57535b01623e7b413cdae48211bde4c2161cec6913e9d0f18a3a438f95d0a97d8f80672d32554039c5a271b51f8d0738fd99cde4ba55d7d64e4bfed1dfa99aef559d7ee8bfd35a6e0d0e28064af612ccc08f64394c76da248748385d749e08bcb373fa8edf93a652313c9e0e553959dd7121300d49da5fe138f703e08e2062b225bab5aea4b139b319cbd9ca803505853931c6a90138e2e910fe997ef8d04c26905db8bcb63756fa51e554989509fa0f0113750cd990bfae8ed5b65062fbb4f3415cadf75ba90e379f67d1e6cf9ed9389dd00e7a7f99325a8ef34559220707bd841f1ccc563490d75a8af2a6cb7c1d7f59ca2980f9cc604d1c5b39ac9389a5df5bfb30c29d65fd1aeaf1ef47ff04ce5f17df820057c969888713fcbac451c1bd8b00d2324784fb8a9ea7b3d488e918dbb178e66f1ba07d60aff274bdc6365074b8371110bec01f308510033cb45e533c6d0a48e7622bcb2a5c74335390de1ba4227d4324dc178ca60fb3be350ab81995c5719221602ccba61e90ffedbbbe5f4b3ab386f7b6fab05f5916c1cb216030aaad7688a0bc2093f6ad19cafe85e8ad4adafd48c509fc11ecf963a3f7d6b735358ab091ae4e4c9c9f7f893fc893d1ccfa407a7a354a3b9a6698e7742b57b8cb4b329bab5f38dd8a86ed239b75da9773ee58c9e30e20e91d9477c685e0f03d8c0577bde5729de82942182d2eacf065e199902595745fccb68466e9380d6c8801087bd26d611694cc3d2bcb99ab7f78bd2b3f258e802598c60cdc16eaacebdd30c460a1399bc9f87c73c879443b204801fa8221e14b7682b3b77af091a0df5684f3b245290bf881914df5a5e3498c632f55be98b58a04dc3683932b434d407e57930944accd9ed5791134928e442c9d73dbb66206d8eddc72783697c4d48baf31cfe30ebcbb59bcb001bb2c09cc76441e0618bd70ca93ba2c989de7cbee236683e7ff6f2ae836428d61b743f1fe51c4d94d1dcc4355097b2fbe2d7a9ef809d56ab77a5b0cea55e09cd5bc56c44b6e42d8159d89a0ee9c22653da50de79e7de5e319b8117f8e541aab8aa164c27c3e6aed6741fc5114fd08e592423e1523bd026df629ad2aeb8c1079e3e3f6a4e3af6e9578fc435430139cc30a9a4df193da4f7eef66b18814a84f8e0d8b81edadd42de67fc622e099cc6d409353deb193d67f9a5e13c096e078d57e51e9040616a6bb4c4db995396297b61e6eebc31330a18b9403757c0db1e3f44a84025ed9a3be2d117a3646bfc1287fd28a97e59a82341791190977c1395ad2481bda0aa22e0b72fbbfefc5301a5ed7d1fd52b19c86c6ab3f9aeca2ea180f17baea0b12a7bd866d578dc9b885a12a7a73267205fa8da9d8cdccf4f409dea3f5ad4b8f1946e26d3c129cdd7547a7504c0671bb14a6009036c4e35cfb8c6aa50c6c434a13d04da5e750aa1a19b63e25ced9941b04770c53c18dab0a1fe6ab6f8b7ac7858847b008ffd593ae467ab54ff3620567a644e26daf5d807d46d579b31ce4eed3889effa41facca3594e145c8a47fc840acde03a4bc9aaaa44ab1e9775e5e06d69aaeeee035bc2a72bb1f9d750f23869679f696d79de77a15741c20db0862fe01dd77c44205fe7624b3720826b86d019823832a5f104d41541269a3f3e6ab1e83ef9b571a7a0211a74c3944f6dd47db31ec352fc878445e474cf469ab9a65dc36bc16e68057fed08128e6630faed753c6b22ccc69bdb965757ec1050e4bcee745bd1cdbd1bfa2ba83fe348c5e1dd5c65f2080d6baa8be998531a157fabcc2428930ddfdb196aea65865b8fcaa8236c1a1284def2e6fb4f2a197ccc294f78af0d70f66ad9e5b9179346aa566383f256ca5eb303f7e427df3dac95f9baedfafbfe9a8699669f4188920b991b22307013b43a82359294f27af01f00b8a164d09d83189f047779598b3fc96e8e0b50b84c07159699983c80263fdd8bee831e807d1f60f3fa4de07216cdcea1cf01e59e7e79f00f143e4676aefd4cb4608fd86fdd5b32e409d4ab241b4d9799051c51913c66bb9fcc7e3647a3cecd5b09c4b1726bfd7d7b99f790df56262aeefb6007761cdfb34242d29d7b70031b35402453dee9634f296bab057cb272d924e7a94f951afee8841b45786bcf53687b060ced3b80f224023701a6f653db2b34c9921a9ad9aeff7a9a6857c13cd7761c46226a57f7d0ed268b1b91cb15fa76be208bab48538e50a9c3e02564e3e59bdb03accf08689cfc03d882ec665cf432878d32f76364403efe65c73e61102e16a41655006a20e18a762c3d1dfa57ada2a3f7d0ac6a466d1688344c3973469d06235be0fc31f8c0ee5493eb20996e1dcf7aa12b2934de85ea32d0d3e9ac5319252c1c5f39c23c1cf64a2a15d1c746e055eee7c3ba18f3387814e811467e439eea28a011fd28bb21ec43f4d0aa02bf2e3e92e2265d2e40dd86f53ad5bbe377c5454a39b7e6c556e16cd8006e1916603b1514182f86dedb608bd14c89a01ae70ac505a4de0c59ca1251d2596ab2f5bc97232f510ee1f15212b2472ae0015a4a362cb41770aa4287a4cc7908cd3debde076510f6bc866a0ce7a2b290297c2b9fe58ff49ff36d3430f2800e89b7e9f57aac3482e86869143bda6301135ec9ee0277f085cffaa5f2e167bf129c4c1fbba3021e46c8d7f532595248a07826feef99b5aa1a656e7fa87250c1595d054b53a6504814bee31c9db9f9219e41e7a3ae8b7d1ee270868c210f06d295ef853df2caf4ae96c802ec3b45e84a0c009fbd2f096b57c2a7f7cb275928321e016c54295eed6a4deeb72e916829589a93d00ee2a547dd9ea9c861c4ad672ce8dacae806f375419e2760691f29a520b798cabffcbcebb7ef0eb4aab213d65c7554850e22b3a7866cc86b33395a2d4755aa2cb87b1af36f1ca5b606ca7a10890b9ef25a6f63fd739523e75cd10191ed6581bbc362891e8e4771defc18694d751991921672899bc3029276d04a4abd856e0ff0ec1f1736622f0eec3b1cec28ab3518f7a542e19231dd8ece1cbcf2411ece59b136a025e4bd54ecd56813dfab32cd36ae2864c322ac2fb373ab34fb8ff74184cc527e5031b1a804ab241685bdfdf31e6b756c905e41fb9afd5bd2bc93366a3354ab0f412124d6f0073e43a98e7a57247a96f81d10d33e35b1209c171eab8fa8399fda166ea1a4adcb265aeb0befc94a9fd6932299007b427bbe5262008747f261cfaa2395c2c42df4559e8ca0a894ef452a62b60df508b8e16d0bcf7a1ac06b1270a4f0fd2711bf442c5f05f333f798b5d3c7f1c8bae77b1c7b105aa58b57b61f7974dfa5e4e3ca8d9c81181c42cd500d09a76c56ca019607b990854d4135e63351b10d4bac9284d642d9c43d7f641fbc2a8137c03542cd08a33ba8a12b74a3ef45fc4219e5234f1e8b0cccd0e009e9ca28f87501a0370ed0a70b392780162735c12120b6ac9597221ae9af5d0e8e40aff4757b0fbff5a8d72189b865628074fa58d93650d657c75a4ce34a7c9b5f27659caaf2c38a8230f4b08b5cabb9f57de15e4d442fc2d7d962af077e2d7821e2051e8484bd8370e4711d3f42dd839ebfca2afb2d97561e12e54aab12f99b1257d3528889a385f536684a2ce8672d302bb04d7f25e58d38570956b40d9833c47064ae44c32ec16a10ef3921d6a0f67c3835b1053a79b898d462a05070f37dcafba094dd10155c746d12d1260b24fa3440a1bf7b0f69045227997b25c6c4c4638b233353ec7e0bfdc845ee8b68260d4d836df6be0b0e23d8f5f25f45c7bee20d7e4cf1b6959b3f929060b99a55af6835cb92115838c0a20840eb7edc87a7c226430efa37def274b904572fcd7af1bc0ef8f70a230ca364333e9723a0163ac52d0c6ee83df27c06b1399f88f0f11b31f7f963be4f595eb7479c9f21662400e60841cb72efc5e9d79f5844e0ee3b2e60184de1e6eaf987f0854a035273f3409a217cdeb54fda1a695cea4d788a19cf31c25485015d569b25a62d517a45316369d66c0ba4a2fb15f1ede9d9c856178782e6766489b70943d353d70692267227847fdfe824c924f5dcf62a3763f2060294cede733049f76969ddb60ea20b56dbd831689c0e8ca8eeacc7f13271206b819b63d086d44cfbdda597b306a5fce25398e0ff80735707eddb8b2334e7a25404ed5fbe2a4d780742e5f1c535b864b6faab9b1d00543ccb22a2a5e63e20c3c1e979859a3efbf4ed3d8608c2f568df1f0909293c7b2bf3f27a2d4c92053054366b9125db628f49a153cec4c77f91556724b2c9898a90e49021b3b9019263672aa71d355a6c73b912eb2f742aba7b8019a12a67937e56446d8ab33d148bf876676d11fbc0fdc68d1cd90e0ec6cd68a5d0ddde5dad84ec35cde7ac100f79c25f679d46ddd1023ca3d5e6df773b7f8f38a84dbeeb67ae4760b5192e0e69152c8bb670de874f541b0ebcc1a9caa2c625960659275c02d5fad61cb39757eb26a4a60a2c1ad82640bb3aefb7e5e0f2fe3bc1d84d2efba01d25504d681ca8fe8bee005642c26dd2e58e56051e42dc3da9b3136cf40ef8a6afb659334f4940d7a504ea4556c0bb75ebeba553a968a13f8968949e64c9a5c89a2dda80faa9659c59a401334d6f819c4f0d8814f111c161a3e03739bde084ec3e35a34f72954f5404bda40ae5f4dc4c5ea3b58d439c60063a1fef886efa51c70978a46675a16f3edfb50caf8357b8b7c81e2a0d0c3a4bb4d403f13880b46f2f7fb38f5251a42280ef5d96c900c0d180b0c234d04998bcda7af8a2eb6b3ca33abfe1145f33cdc3d216703cf559642778b41d54d499cfd78df3ca82849a4b096e01f5c3f938cdd26484289ed847bf8a42f66cdfb12cdccb4f7d2b133cfd565217a131035a72d23c0b5d902ae3e73563aa4ab94016f847015b8f9163e29250521af8bd9d97588662a1da5c4a10b98e311de3d8e0468ffed27d818f0df9a23ec393b093de52962e9effe79c96c41db1668da9170df41dd840044ddb46333dab365eb580f1f4bd1cfe38cc101d7f7ef02be19e753c5c5ae93cdf6001bf7255e6d6cb60474f87f9bf994a9d7af0fc5190d43a79439dddb5f0bf83ee0f0bdb72712e5437e8506e1267999a1c5cba9f1404380137d15eda9ed5dd9770d9a38bcbf2b52869aa9e7c4397efebec1c1ec546929602274e8ea6548692659d72049efd7951707466d106fc990baa2964c14d63676ef67fd8d1e9bf53d3200c19c64a2489485ee7b73ef8a1b58bd75d5a531046e0305260660d429d8ac03a0a7c3873dcb3d50abcae5b5af941066a4a93d0701e61d77475c8dfb390f10147f8012f3a1a525465ac5f1b32fa409e3abd0a404edc4d7f514ec249f521b0ab0cf6c2161d968dd2485e82e7f84f544bebf11929a4cc939625191420081f3021746649057acda724935f6feb62e5efa7c3bb399364c5e927e0c73426f4eaec2cfcd667ca1e5433093334f3fa817cd3c26a1738e9d39f3f6ba9495bbba89734284786b63d6b73d49dd13f79f8b81e8f16d6f6849f995277207fba0c031accbe1a98e6e8cf1c484e6497fd7453f5f7b864740ede7f8181ef4095c8189ecb30906402f3717f10049cc16e181e78f6409bdd1711343bf2040e44c39bbdcc59de48c03c4fb3475dfd8c99987989d0156634aa0ba7707ff7c8c82686b12677bb20e7065e9a47d886298dcb3365e9d06e489eddffd82ca32b277ce9ce149d56504b8d7d75662c333309a3a23681c16be881215c1ba88f996e29bac6a65137cf9902f5f526671a4288c98177779381b5f958f5e7efe13e0e5f720061b34ce7232f0af01556b45833f15ebcc8b009beb507ad9c7eda7e46ec018fec4a26b19a691b7f37ed18052760dc4aaf5f3ed3fc93c4cd25617f90c83adc34dc4ac13f7253eb0d9b4f5b13a01e9f7367f712369020e4dd331891839ead508e1f724d4783fee1149d32f7f1f0cea253611587a878228300137e03206be01a1b0f704834f0f43981fa8da6a508002be9d78ad6d8d161f2aa47f99d63c23998bfaa13087ffc169038dbedcf10b5b1ce669bfd22e40636f1d99cce37ec0d606b836e38dc7673bc98b0396a9a96b621dac15400dd1e2c708fde189563395ebf5d1b2bc3c80274b517780f99869531ba87d4559539787318137713ea70fd203d0cc3db330fc298f46a13f1fb13875a661b4b996f952b82b7625ad3e87db220526dd9f10f8c86d53f276cdd2cdeac7d7076bef1c7f99b5c29d73f1deed65d262c22f0c78dfa5fb1c00cff2ac00ff11b6c43eb16941a11d93a4d0d619ee39f7462e85dbaca4f6bd60bb38d3d5f38fcfec88f3d795c564578d22fbd5ccca727e28ab81e86e38e82adfdc7f0e2a5c6fd4d0234d4850c637986e17ad5e006480b7bcf20877041bf34f7a803dc173601f4bf80319c65ae2bd0af394a70b8df7b69cc3ec90f7558c89b50c07f321829fd5f26c8f29daed9d32751764f1ed84956614204ccfeafdf62845ee581ed427bdba74f8e8cd834bdc919fe742e15ab29af40538514ac92038d45ef4912e8797e98dc0adee67ee8987f28bbf6a6c8e2a31ba491147c83ec5bc0016af6caadca30847cd313ab1100f83ff1b0b7c753818c8301ef92078019a861ea68368aa01bddcb52365c95c5e205a58c24915027829e05be4fa2e89d6fab284d3a6d4e7653eb343b24881a70fad33e790aa99e5093f507cfa1d59ee0f920c001d0421eaf8d9abccdbd066730071512b49555259ddf6a8ddec4645d15ac7e40ce045bce093967602161bb52ce78d2103edb132d09fde02cd0b5e8a1e3d98e32dff0e9cf2f505c5022c47fc0a4e2f4ac470d4f6b85060d2c4b936d0c1b0ea3741ab157ec1e7e1881ad6c40d6132d870c504e9a841f97ce183c55389c67f4b89a8b8c4b95e33cfc591e650ffa9409076b3560ab45921d56551996615d67e09a69795b91a7c8a3b4ef2254c99fbf76b70fc71416ac63db6c44151d5995f8042161aaa1f83d23fc1b66f33772c4e060682a309641500b83dab6f5e754952c06a3952e1564cd6a55c5edcfa0ff23877e193d00726220fa0e97bcd5041d641385336409830255ca8657f745a9658355436c87a9babcd6287b5001ef9ef1f687cbab92f8a9967ed54c33283c72ad179c2eba9d136ebe3e7197934f08664dcf7f31916d1f295b39b115f6e840d818d1f99330f54e4d18d92b7b3a3bb736cf731e6459b114c2431ebfdc2c1f5a7c55ec1a03e4111815d58f51188fb1ed6dbdd4cb125077243d8308c08994cf51f89fc63b08e8d0f2a5b2a34c8800791ca989898e7b509e2b2b469edeea231c53e1f89ee5462b67b6c16ae794f34686401eecb03056fdf65834e8e84edb30ac74f95c6734e6286f224f8d9a2d66e3c0b8a3a715ee3de99a81e019fbcdeedd0efbd54b1d68e9845e03676d1ec7708513ffadbe47d5b3a3ab273b14f5efce87ecf2800d926de007fbfbe9bd3bdcc35287542bffeda706895642d9d9060e26ed409c94ab759f3a2f14c694e9a820beaa6473355e67d64b9463e794758fc47a86913cccd4799f23ebe5d590b43897d6e76fc1031b76281ce69092fadd1df3fa834b8af9f081c451921fad3153e43d0f88b14d76b4efb2efc04ac8fa0da569f585836d3b6f03034fbbd9e37a98b3d3159d4e3f553fde8f89e1b5baf054be38cad5b0adce82e84b55e1bc5b92a2414e9456db704bd7de47b993065c8ed6ff17c5f384f0c02f46a4c2d8bc1844db8f97a666004e7cfea86eb765a6fcb5e20c33e56d3a3e3c5f0efca04310202789ceb6390609e44eb8a2564e35e8787f8b0e9eae3c9a4ebdc5be9c3999c8d03ba1076242924a331dd8db164eacf5b2cc623ddece6b0f93c6bed39fc83f7c284cba3408231563d2dc0e9be901769e4847170377a51c14636c5b9dd201d301a2463fb00f99a33f72c9da8a65bf8219c575417e4c611334d0144338a451cbe7fa472864d8e34cf2e559b8ee028eb09a5ba6bab5e0c3e9f32a849c54449f2d5e0a1cdbee32373b190d4a426e36ee5e6cabda7ff60323cf0d27e49b7feb069616fc339abac3b82a3babee3f99d6b9ef1bdcc9aa4b6832e8d8cd33126f9eba372c6b052f9e2a112826a144615ed8aa0a93d50580fc01f0dbfe3555dccb4be5fba48f90b8d1de8be9cbc202bd1de33cc4010e7f71d522dba139652b72e9208257dc49aafa79af583ac8381642555775d6597a31320c1592ce3f99ee3ce83d859dc2177ab921a6a082e6b43ae1c78212810d678f334b09bfaa7582600fcbc0988985aac594354a207da0de415bf301839e82fd020147a03a7322d6663d70e4de1ab39860f267e7add582ec40ad4ad8c4c32ffef89b64fdc9306eaae4699921f96491654e4bdb4892613bf69e951f2ca2b7b022b71836b9966f271df1cd1ab0391aa820f3d0f61df7aecf1b8cc38c93b1169836ffa060a6d6722162247ca41570f436e8a05717eaa9656287dd8cbd569659765e2310ae858da933c29716624656fb782829fdec64170ed98a106abdc18e470afebf96feff3c43f301556784f5ee5f2a39f9ab064ff452ff654d3d0e3f1cfe575238f48274b5d55695e542dd579b3ebcda5dff06c9dc5cee11026ffee4acc9f22b1ff7ef830e619e0385e1bc0c24f5d47662beca1f67ac3ed544313e153ea3fa759ffce5bc3095821229434728ec4c8570e8836826e7f45938afad7babf98e56e992d0260ebed8d92656897fe85e5f4859ce49c616b4e16430dce1d74c79ff06b4eab45fc5b3381e9289d99fa0169b6d0ef84ccec926335372796652fdd62a6b2465ba567708d80428b113bca49bccb549e775c60ac2d42ecb2552d3f23582ffb45afb59c7a45902b89485796deef904598c38389d08efcd58d0b79c37ad8ccb087a96999282075faf7ff5bf7551f8c2cadbb919b39a7c58c51970939684068eedef1f7484ab453588bf7910f9240d5b62d6945e56efbc02d3f776c3ea404b15480f5f73c6e529e8958a770a4a56831a047eba0fe057b7637f1216faf53174957f4e470bbc2eabf70460b9df79268150986b994d80780eed6713942ed983c8a0edbba98e974f00e6170121c23a65358c34e5c46e403c3fd4ffa02bd942a037178fec668744a3efa2500721c5db1b70f73a8eb141c9694ec5e4929d6e6b12b09eb4d2ef8784db2711fc4696cabc1fff9b218eb5b63fc64e58bef8e6c05eb6fa718776fc780113b1fb9da26dce87c68a9cef33e64d04a8b214f236ba6756e91d965d9e7799298274e0f733b457213249d83ca3e37c0a41cdc8afa8da38ba4d1c55801d68292342126948ff30d6ed66124e773051a5ea8580745b0c7ff5bed0b4e4dc2b6e5b3d7cd7c17d70eb925e3ca2800c8defda27f6ce8b32c446525437d3a48f231d9b80011748ae30eb8d42279b5700c1a79fcdf1080028e04e66cbc9867045dc9bf8d5fa45117cba0746d93484bbc3bcecb8a477b027928f7c463a21598aabe3916caeba26446de893e6824ed7867b61bbd3563952b6b4657af6650de2c431685fa4653b6c9fab90d937bcb628d4e79119a1bc7840b5d2b602f597c35e4b8e2e74c55aa5510aa1225903556ce1b6a6626177da53b046a96a57dbe8eba1ed67ebe8dc709fe267fc3f43f277b4b593e84bb4ba0a33a041119199f3ea8a0afd68218520ca1a1f26bad343813d0ea7258a011782181ef4856eadede3d79e53e6794694337bf86e187be4a14d2360b327322e6d1230a890d406c7a8e2e95437ab8065aecc196b36b4c07d4e6028b38e651de8696014146197747ec3f09df9ad215c78d7c2f5a571ae0070a17d80db40e2fb460dc497f68e0314e83395ad9f80cb0215f551cd1c968b1e85aede8853da0c43e0ce39d478651c0fe617d348afce695b2110b418bb0c6ff2bd8e15fd815759312634d84beea3619de7df01b43f3a123ce6105980d0d9fe9b29eb572566cd2eff5baddfafc1fa2dcaec5bb8e2c24cca89dcc56af1f40e8aaa5804abda86cf2edc810f6c74622115a58332a66072ef952a10e3b6c6b80f60ebc33fae5c1ca117291537e3fc67c769ff30cb307dcbf9385808d9da3ef6750fe082c4dcc06196be4d3fa8a71b46bfa4c4d9591c0cfb411d0592af5c50cfa41192afcec84806d3af07a781bfc56955b2be493cc749a6f88b981b8886fb788dbf0c35ae8636d8f4a98854c6f8ad34a177dc22f1f537db4d0b2edbffbcd05148cd84b5f1c2f012c7178c8e7622c3e08b56519619e182e6c44590d3bdc12f61c5a44adeceab89846a20ec6a87a63300b76c60e100df3b076735e0808cf0ae70edffff976fba4975e8c15e3682c7fc994bb7e7ee4a3b8183e1fe493f4ae184127b001686190b4f9a16110411814e1dd5b21bee01169e13a01fae62f345aaaea90813e44d9cbfbcaab7954c12d647d1d1c3b574f2dd1cc063dd4ce51896ba9609f05c5cf5561e2ed728507ee36149c9f1ad9f402ece224e5147d548d9eb3a166342215d903fdef0749c93c977da427ff3e9fc6df7eee6e7e7519b13a2cef02d70ea21b50b4d57608c7d8ccba97fd1e26fd67481bc1257f8c5fcbc6d87dc21da7a7dd9bb93ee08b555a643f6d610646186f01c72fc39e48b01a8d079c637d2862287b0b52bc51642fbd1c28387004da43cd22b166a1d95a9dc21ba444d3686f3dd8de0552bc0c0a2bff1b552d7ffe9277eacb4d3bfa9a4780cdb603dd0ceaeb2eb6008bed07a8c7df9e53dfef5a9ad3cd7b141ce052b5130a081c00baa5ca008debc1ae1c330eda26f5b146bfba2529486e5d9cedf66849a15178809575ee9c2b659a83d0db7be70d7ea306c97233fbcabbac29cbb137f86ae4f90573ca400dac84b69c74a18c78b214f035862c0425e0dd81fa191570d579c3dd7f1be19efbf7e6c6501cd37fffa4755304aaf00c4093d08c72daa900d2cb6fe52591aa5449c00dd409802d6e73747ba745150b9f16b28bd174c06b6937d719b02ba46786c56a9601631b9547a85ca0cd96d80f8be10a3b96fad42fc365af8342273990edddda22064d2cd6fd179083ba8aa962439fa2f7b19b142933bd3aabf458389165bba00e54bbb7104957fe6e9fa896e30cfd8b26fb49ff135d55329ca613775ad6a2c1e413763c1aae39b1e97920f557623a356cfd125b45ce024aa16f5365e883107764d8fb69ce09a807ea0364b3d49d0709521b9efe79b7842e7d57f1d7df1461bf327540cec78601714e32f79e37c33ef3d8481ce2a298193eec412ce223dae9e3934ad3ec99e62b092ccbf3d24d5b4bb434a6b1af06a4663a692decb036eee71f41e473c4933ac9ad89cb0ec9b3b80c18df371ee4dd428ec55247204c524c0f060ec208d33e4516842d627c9c56186aae1d515319623f6b95eb11689233a15e7e3da6342a46774bf7b62ef0ab101aa67e642d162bda347deb88e7a3dd247812de478bc90f2706d4154a9da5c4f59b69c7a6db7b5fbc09aa88aa68d94bb8bd6cfa0d16acd2aa1539597d59117865c060b9d11c488109c63155ff2a4651d25ad0362fb25e3f44292cc52ce5f3f0983c085782fc11f51ab0e7670d19a3e4f813fa60feccfb8b2b55a6ed6a56ca38ff228854affc78d6c1ca3cfbfd7e0e700c00b0332244725266f2718ff57c374b1920b2d77e6b85125633604e1e19e33a3503307b34d8753cd2b92c685354a1bcabcc425669ddabc7224be166a4f568763d0e012f92c6e2b6be5e03a913d848bfc59f3c83c9b007552b1277ac0e7c32bf776fe57fdc368ecf7832904a70b3fdeac7c112fe569ef5928c57f45e181ffd7d210c574c0d74fa9f930a8b5297287fd9a7a94d1cc27faaafbdf6ee24a7e649c03cabb9b9c7b2f59346d1423f8b6c2c67a20772bc5d43ed0549892c1b61169d8d6dab791276c5ed99add3eeb7d378916d5078ce1e83ece48ed23baeb86e1904cdbd1cc18c7694e4151c5aea82330a9ec78ba8f641ad0c77c8c9c49e4b19df0b0e7a13372d344653d506f48170fbb8d4eb6618d22b8f4cd7ef31b6c0193f80f2994d155fa718a01d854436075ee1230f014677179d9891afea5b51ad03c0f5c8dacd0787efeb64a8e54278c972f37613e14af3a3afc774d16e4fddc8555c5b9f0d5f81ab85cebd3578949ad4b4eb20622ab9390035bd9a21bacff59a755dcb3f30731b465a8fd169764dd07bea2dcc951368330d96aa615e6b2f531c20206e82d6569cfef9d32f2caee8b1227fb284b875773a02e191cbc19b079c189d0161071d1718a8ccf5b834a282d95a763bd619a3874141094704a02a7cb2cb74bebacbe9f1a40db4c5d149e89280d634a3f5f74a09b4685639367b9a3aa64b8e57e7296e3ff009c6337f8ffd166ee784b7d9ddd30b4b58cd105f0c900ecec22ff2773ea1c16be6e2df559fa0dd01a2b017f39ee93f3d498d802f6abfb967712c5f4d063df76b098d2f0d52473446f201a1805dc61e4d9b39a54e01b25ec242747b4680bc361861d825f04dcef1969926d5ebf41d6b8a6a976df8b02d9e01a895f2314f8fea5c4fadecdf6f434d8e0bdcfd1599d7d717023c126b542d44c97f263bdb2a26a71515d5303105eb60cb8fae7948ad025fe61daad4beee502d69f875ffe7698e655df36e6b213e434af9b38f8c7cf6aade43ff249a2a636029d2f5f73ab4e3777d172fe36a62a51e7cfd44dfbfcd576e60c9dea7f2bd68c9c44b6cbe8d10d002cc26f93176f0166c14d7eadd1d8961541d6ad6ed54788758a9040c1ddf682438d01ecf8d58ef44eaff16c2bd15157ec2678f7755065dd5caa54e39b1816c05ca739dead37b21ed60ba8d7329220f77e0467af86d7c9efff7df19603bcbb5ebb36afafd166bae242df83e3235414a6a3fbbe7b64eec8575db59b5634dc366675b7fb41e6ac383ba6dd8a66fac094838c5e2319ed2c9665a7658c3f133400b6da97224de92bd5e97105075f5fe887c18830d74826ce551e0a479067b7cd73e5f3366aae8b3ac2308d04f49d3495b77c85caf21cd44d4e03f54bd3c517324ec8783394df93de546ad621f8551c853501a63e860f5a88816744e0fd3588ef3fc1d8f1be51b9630b032ef7d751f2ef1418edbd5266119ab7ae6dcefbe6b7d2d81c75598039bbefe6c825237de8df142ddff0eae4a3e8c6fcd5ac2989c02a1d0fb7063db33da506a3f1e4cb67339b407529be4832c23a9db7093960732aca015a47a480bf7f52e5671f922475390c0035baf77ec45bb6c777a83cd09b0298608635af97f272a07bf217bca7e7a9cda1b28d747a6f504df5ef9eb8336cb2ff8893eb2bf369796e0896aca401cccd1eacfd62029692ca81d6df7646bdc946542caae933ca5407863fb3095329a34bd5a478fcb935b86c2d5df8fc9cf7feacd2925c83a6491f031f3766987f46b0df753cc1ffb69ce62c3941971e684edc85c19f0b508185236691bd2fd08db1b5c4e318cdca403810dec4c867de4bcd955440f2ee9367561033252d135556b62b57576d4ac26daee40b62e756c664b8cdba362884dd31fbbd267f624115523c765b6ef00aac37351cf1bb85af7593978b3f0ab398beac1ac32f580a784a989eedc16d74e2cc033e701403dd3a60e3aa1df63b57ab0915f016e75a05e37a48c44ac7090a79457e84821511e6103e00331859ba328d2900bfdff5e40f39c17532a4d35d529f5ef51b666faefcdfb4b7a183f3251ef742d56a574a0496b633b3bd7fd111de76730e59fbb4059d5ce00ea411703aef29528fe49883e5a03078949cd7a4af18db6afb0001a9653622f76ff18fb75adb045549c7974157875565c3f8087c0f546eeea85b9ef2f0c616f646ec128abb4a79135bea8eb6efa60abf421682d4a9056759cccf4fc65d488f98769b94efc46ce0430f71d470b9bca3d2f6caaba95f7878d09f847c71984f0486a26830d4abd860f6a525a22e22dc38be34b9545f7963745868d7ff5368ffba0d8cbf5f6949b78bacbcc351b420156fc1dcf719a8a36c43b96fd34ac27109626cb7c3615bc2e81202ff8ea76e6762b81125abf85ebdfc2ba667c763e2392951e4471e4ec65bafb7ce99530fcc9fed82bb95743f4bdcba0c42842748914a5b06e85805ccefe235a17524717b6a78d7a486bfd11bbb4755156948982c5b23ff3a3514b7ab6eb64f1bbecfd04b08a5b2eaca773e74c41d5fe293658d7e2b9a2dc19c64edaa81d0881c9efe50acb5f5c1134ff6ebc45582be82df9d86d4848ecb50f13b31e3e518a45f36d708a4552a88d26296f878d80060764d5ae3f60fa117703e458f74841f1187a0f441a9602faa5f0dd06908f3efbcb4b8907670269005497d35ed92919c4a275b33eff4bedf91b7a4e2a16f557f4e1c570a725a3e42187510c53a2ad38e1c0cbdb1717ec89236a9c5fd2dae69e99984f477ee9a47be1afb5606d6d384824c6b2be44342b80d08a366f97d0b09921fddecd3c024d409e34dc9ca48f737f728e27068401f31a7c605f5909379de5addf49ac1d7acec1ba9396979bfa263bdb14a8cd5d1604098cae9102cd99e135526c6e8701b3f01da92f902219f394b686f4e57eaebb550931d2306aa112e137ab7801515197ab875a457a8a2ab62c2874a0763eb499fd8b3ae8efa0deb333a0020478953a1b8bf278a1370f005203dbc48a068611e060b3431fdd6d6ce159f7771c599a436cccb1e3b9701f06a9494ef3a0d8eee918c30ecb160faec970988544d741ef7fb7ef081cd3def740a1a68b4c45a0395a1f5756adcc46866b1eace0785d61a58a81e6811b68f5536e336f6c837e1cb9d673cb30835823abd38e8b97234c52263ad6c0afef6753317a591828f9b0946780107ac57936f313837e7273df3f8a2b19c27c74a6026a52242756e28a312f60cd3fef1d2859445f59a7b7aec4cbfd191e917ac5bb9098ec5155cce8857787ab38994c6c00c6e7c5053e887d249ef9f84ea3e1e0e2062e539c2e207ee35af5834c75b52e173e15485cf5ce3ead20ec060d8f800ca98fe3ed94271b105cbfd9135da61b6932a780f45b805e3bf3113869a11b5feee91316861efc7ffa229ab74ca89a2c741842ce7d0805089301eb60341941fa583d958ca9b227087b5edf2a565a734a880a1fd4d07cbf0f17803bbfd23c153930c71ba83dcd29fc942a19e73b029fb50025843bbfba3c56be7b77af3ce93e19510ceab418045d96778bc8cc8d2cce908b4468d24fdaff4a31bd643b40f4363cfe0d54e7595516f902bff1c3fee5b9cbf01471525a189176171338f4a3cade77006894c51c42faeb50848964a6bbd8ba97f33c1b6d8ab10180e13b1dc060c912fb363860e5b5c26ee04ddb73d8b800e1b1c683aa572f3d44a5d31f22a01c36c33486c4d79d31998ca5cd7c5d7f38de1fd4a9c7713366f925338be1e684ad988bbcd24c6098cfe2782d5ffadcc0ce7e3ed9da4c3a093a96440090e65d6922ee5930a3e74074e56a4f63c3f2f61b11af24cbe04799d4362b1200a1ed8f7302707510c841dce83721617d0d707d89a0aa67dcc545c6fcff382c69f0331b8295fc8c20e387475787d0d1227b11fc5bd4f85bacadcb0ced98645af9953fc588f1dde91a7a9d55e948de9ec0335a78437747836e8b84783be5991957f83723191b572c0e892b94db9676ac2baafd74187688585b1cd5584cdbd187f46971df5f13a3548e1ca4072813fe0c82e11e4744df3b51e9b5fc02e5812a18f951b7077e2f867b70dcf89ab49a1a160d2e130c091b58f4c867355801f829668cf8a0eaa4b63ae7ea19143d3a83d2c87ec6b2fcd0e2677eae8b54684ba6035ac2761e9de6e83959b5297b981d7a25ca6bd110e0ba260d8cd4711e34711fe02a7dab3f611c19f4a65e3b040bcb7b65a8c4a52506a2a10f6b170506319584a14449f85d3c1fd68a5d4895f728d999dbbd38672b8175fb83660bfd49875fe2cec46392f69e6b3895394aabba745ce4aa7acde4db0c00baeb813ac233219c6fe332cc0a2ea3d6a70fc0cc76469686ea43885b4c371fd903dde9bdc029a1b87e6aa45b69f0d0d99505295da3e641cb2d41681e74ad97a4a599d6e1f09a91e444c538330b34add1df685e494b8ce1cfc3683b75a6f650c8ec677a503088783fe3209f04476d37d2095eab0621696d57155956bcf37c47d2468732ac14498c1323f341b2ece46dc988ffc4295987ab2bd3843d88106e6c5cc0e5f0c35889f3aeac1ed64e300a474f64762770400c7a827a84d2178f6d620a240cb61551bbfabdeafbc49b039fe25b12f326604d155170ff0c07e4a3236f3585bbfb4f825ad28ff98d3c58a4fe737b82804f23b9d29d39b7efa64c0a30d50b5cc3964ec17e2c0de9bedaef2e753d21d4e673cb4165bad7384081588faa958e144f97365df135be5428d6898ef719602b9473310eed989b80bf6c14caaef2d54a6fbd1eb99040b5b042b07f77f15f44271a0997b8ea22c17eadf02d35793d5f415cb46c196670d394dc3b8e742ed7e89f5e84284d76da1f7e5d9f67c75d8ada7e14be4cbd26b101351588a49d02ff86631f95ed64d6a3a5a0c2760842942dde5ee25369806407697bc731c7e9037d7e2f67509b1b7282e1633bb32072abf6ea2348572977a5edd20ee3d93440f21c80114951a27c30658974d3e84027cba8675156fc60108949611cff37162c77ddfe842fc64031b6ea024fc83dcac070f1984ea3484334b6fb989bdf2e145c98a52d34fbd2924812eda3dcce8840ffcf19b48777bf2f31e076bcb8ddb61062a8c16fbac7180606ed430869725af8a24d033fda302ddd107eb59bf2ed18a552e1eda25380edbc932d3750a49568b4300cbb2b878d645c7151b0b9aae1aca0e471f172641fe8b897209aca1a61bab8ec317abb8061835a210c9df3f6c3bd2b45d9226328148ef3cd8783b9a2f8de736f4b9a26a8721bd3c7d9c9b091d8faf9d3b6cdb7664761e1ddeca880478c685a2755669a605c3ab4adddfb334a85010062dd8dd85080c2baca5ecd952b36117e35c8957df1eba51ec22455c6b165966049e0232489ec2006c251bf21086baecbecf931202b653aaff361049d3c4fd2db5b63fcde7e25d55e4cfa9bb03d652e9a21f162d013b1447ffdbaec81bf0d664c2f573f671a9177f597d1c3ef0fd99439fd8d65a669071bfb3c09987d707cb305b0d43e4ca897ef12834f9940da3718d5acb0999d3b5314237fc3898e721fff4139482354cb94dbfe56deba9e383f412e4f89552b47f09600cd1bfc09aa884679dadd5a5efb760c39dd9c2156b0963659264147d5688f6e284e0c25c3466f5895b077466a2d563f21503f96571a5673d9f54caba5f15959581a6b5f52c5fd65878122893aa45d3b23b9c3ae299274984ac5e7763d6d4b96783f297bc3d266fbe23f5ddaa43be5363b7216fb87df1a74c4e9065aac581e3e29804ec881b730a9e1aa078c9387c458d0b7e1d5b5718a1ab353f143ff8eb458866cc1dd04b73958a91c80a105c7475be91f37cd01bde7bfd4f5f70e942f1f250e4a1060532760ac9c2f03a7ec3204cfdb1a07f24ead39e1323aca96fd650740414bec898c7787be6cb3778a32d080343d6c0f422256da46d4793f256db52b8ccc48f70fee4fda06e5603e4ed65fdb1f80e2998c7175e9589cfaf84f7b28859783e80f805af5fca62b81b42f0e4d37ebfc09681cd86761f709a150ced686d2e9ff839e9943e3654c1fcb54bf1ab998f61c48fe2007e700804b98704f87acabfbdf6f21cbd1fc6f726f8c57234629bd3ffc3871d4c0ca6621952fa4f5d5a5b1c6572ba0871f45a1c5337a3413c0987c19b5a5645e5744c5d81a01c6c2968b31aef632ae9df3a04c3b3429b51e523fbcfc3810b736cd6743bee68267f9874cf22c5296fc2ffab995226980e6747e898b457c5c16b7a2f461f8d17aae986319131defb661ce24d804749ef50b0e32f508f1539d75943e70ec94795dee30514c20f87698a848415ea7e908397506307b65f68f8e69b93c87c3c46455d712adf5016ea9c5de1ad19b4e3d9c9ce2d9f7db3c629865c122114e4a223790ca0c17b83ef16b95f25427cf474f00431f9b2ce03074af707ee012db6ca026571bc52358e856ec3d93b1853bc709126b3e30bf45b2337fd853e254ad1541d8b83ce8ab5ccc80bb19bc6dd560684c64fad00335f82077ec2d76fbc6ad286fbeec46963c001c03fe068e5e3f7d89d7ad08a86eea3385891719f5ff6c2d3f286c59534b455288dfda99aed5ff57329f5b9c4214b5fb60ed2597512f47f0377e54c8957ceca0d7952041896aae0e180bc66902c6ecd25f6c0200ff65f81a9671392d5a16e8034afc3305299c09f6a3b2e1a5b68d2230c7ece778670f3754ade9abf02147aa8478526c50d0749481d7c6dce8acc203933bfa3caacf42d486969eb6883b7d455416f099522a06d39ba7face79c903324e3e899f5c51e6d0a95e2b656200da96a3b80ddf287cab52855223c55230f1482f22da70065d8fbd2b115aa8b90c18fec1c229a6749547326af94e0bd40dd1a80534d3933504ea57e633c0e2b0173d1d48ecc849ea65dec3d655cee4f4746db2858ca965149acfa78074a014";
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