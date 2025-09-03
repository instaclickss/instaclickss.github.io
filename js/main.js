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

            var encrypted = "15b4843ea59ecf548ec63a8ada4b23af_9fd96b2e6dce965cebb4e2604498f40df4119f51b9c7a14997d3f6d61df12198f0e45cb3be434412a2dabfe088e65621618ac634a1ba92b05447beb135dc8ee5957e03cffa97107699be23a919254df046fc0bc6b5d16861b6b96a6b153a959c60361f8d35ec91daf88ce1546ee18a7473da614b4cdee00754d28741b6b53c44c66895b6fcb0a127daf0a6d6d72945e0a0d54e72d186043371f1988db1be1f878fbeb9f294b85a9c7d0a977b7d9380470f1e3422e6c5e290ca52e9c29516bf6508f4f78d6aab7c7ac0b29a92dab1383e05fdef623ac9457bebf3d5de688fabfd742b6470dcf5d1cdd467b53a9171e7159beb66d07a8bbca87d62f525b1f2f9208e686679c8cd77cdab2bdf6c0ad73f3bcea1e65b17ac6cfbe1c7b623cc53963e55812224204d73e920215f761d4b575a36d63a45e276d25fa1e07e63cf786c790d15290ae4f4d0251fe62c2eac2720310c91916c60468df469405e279d1ee4a3fc0e0a4202c80017a8dccc0143123beeffa9fc569d85e4fc56f8405a2b83d0ad0067fa6586564180220958ef4dc039a42a327dd2c86b76427ca69155bdfdd38a91c74006658c4d215e6f03170306b6469c0a1f43c76e10567d0518b3c06b7449cf1d24ba31a20edd749c90270e144bf3a9cf46b8c62af7bbd954bff33da26ab0efb4dab1c620d9722da3aad8605a07df2b7c80fba3a30bf003243717d78503ec7736096a5520f7829e24ad891e591377d6c02e3807b37670103bb56ce4be2e1de6d1ad2c8c8080dca928cfe68d618d4b686d3dec9b58f1b697a73f3849ef462f7aef16d7630a3739449dc2ae172cec711f3a8d3ecf207df8eb4977494147867ff9d509df3b037cd29c04c4376f8741292eb5126c1fc139d1051f10f7663d6d8a31352ff2eb4a13f09033ea7ed0d55dc8afecd5e3e21ec3130e1b5fdfa5661d9f53e19e9be217c5ce22a0d8d6c8a1a95535025592a4ba3d74b60b2ce67d3a93fb60fd84738029de78ba4fa25e57b906f746017adb40b9cec52ee82965dbe7602dbbad71490b5e33f042014d0f79afaec680ca4d92032fbbed9a0cc12475cb3ef906e1788f93a1aaa4a3a4b400143215b6a03a352621a9d50cca85e5a374227f27b8ec5c60ad6579371eee453499bce9b3393fcbe316f0e0111bcc1f98be68f36a898e53c758f0f1ccb497ec53a7f1e627001a258cc75f0f090e151647407bf0a73269e4239bb0b986110de1b033f75320b968bbd8bc5920cda2f7527873711e6f50c54bbcda16a9e389b5cb3e34caa9d0bc3cd91d897ea974c0675b6a8a0faa2c991752d64eca265beddc47d779f4cf0026370d8dbaad08ec2705d3737afc2fd93c717b48021f0ed62efceca91c7da855622657fd0e56232bb940535677412d3f7126f0c72464bff85a04d7267a3016c58607896d1e6b394651a45b8833bcfdea2fa72b42c391f571aa571a5d2d01b387b26c467caa60dd301ac40e5da3796f83afc384eddb1e9e53ee7af65eab8398737209482b46dbd91f2be84281e3a9a97d254bf4c0dee60b0553556bf55d5beabed04e6c6e152b5cbc687f443260e0b9356ba4610096512ebb7ff5b5ceb288a3c7ad7c6f1fd0360938baa661e3aa92a79fb182a8ef02f3fb3daa6630069e747248016f48519216b80d7b8ad9644613ddef2967a759361177c7c63f3da3af89aeec8ff9093541310da0ab6f8de8aaf5c1212f9490c34b016c7efdea27292ff07f466c89f5ae6942d497bf5c8a2d2d7db437fb926cb246cecef851f1fabfab7eb057767295fafb5af05951832efe453bcf455c3754ebc32fbf78f9cfc35fcdc21c36f437bf2caf25abe6f5380fbdca6d9aeb8dcc81a57d8f589122ec8088d868e3583468692d45e55c286ff62445319a3a191b5e085b7a7f20211c6397bc82b0ea4cabcc0d361873a3c5091a216349536c9df3e0b5aa368d1bc1f9c53809006ef7a9d5b82ae7e1a2f594c5bf46ed17f4e475e399f346abfc1e1b41f8affdf24d8ae70ff8e33f8ed887da4e64eac4298edc1398e410d5e6b7b62dc0c0cdbe2168b8351d105a603953cd77dad2a423508dca9f4dbb1df2e5090dc748bd14c19d13b8c2830bb7e25efa41ab5021ee3ad7d5ea4d5afa16bd51c72af266e810f7c24221d834a9eae677bc47c669de14f93355630b36dadf250955a262bd059286b73bd8aaf1e1e94fc865dfeb0338710f55e716af2fa10a15caebe4ae8051b635cb05ac4c275b354989cdfea603f5b716acf8dd11c32b0546c621f0b006932185a75bfd2a20a46d0172de446c8f269669d38e14f416ac9b9bf9b2b18f8698d7d124d3cd8a0a835b16d30d066419e2350c3e2cb30d220bfc993bb7245d19f9153f1edaafda527c8a3a40e9dcf5ddbc9aa1b7dea92bbc20b7a2d2d5cef6fccc2cbf78701ba206b5c4054def2633d59d0e855d9b62d4f4d7f141edede17615c1bea070afe28f94059a822fe02c75c1c95d7b04b87bc52b52235886abc661380449ba2fdd2a776485b0fdfd2fd0ae73609720c129778e92adbef2dd979ca215f8f0e14646cbc82a92ac1555f313394f7c1efa1475dd3b6f56c9015de860ad99f7cdcc2235293ef8416e6bdbbe25ff4344d657d232141e81b3e8fd86f08c1a2ef0785d0ded4c6d6aa2fa31c2ad01d85c7bfa9f91517b09d56259b95309a0f7d72bfddccfac70d8137f0951fe5acbc758af874c68d18f0bccf33c8e5d1b5adfa7293ff8b66a08a1811f2c336f03224a02ce13065e29900d3905d9f6b7e2e821db54a6b6ab3a89c4e6d4aaba9b6ff6b6788e6738a992d737cb35cf2195e0424e363cccd60044b2a353d3939f15354abd362c896832074bbf66ecb915f596cddd8d9530c21f6addc4ea206bbd993c4f31730a06f8dc98003f6e042475eaa8ea22213b3eb4d91d0902458c905e5c49ba4e1057eb1de316cb7eb8d7fae48570f27a5839805e88112c924451403054f862f208ddad2769300595052693b3e1a3a2364e696f3417390d65d3417265ac974169aa46b68032ade30cee1d29d04d3338a6b4d598a644d2b69a5b254850fcf347e50f4fd28bd18859f25b9fd0b645b8d2101b1a6d7b2f02142a22bd1858bd19958aa08aed8ee91bb37abc9136a2c4ae5dd1994bd8a7db0c3e385630b54c2aefc888121b3a46650b48dd47877d5603ec4460acc98754a3ebdfc0b3313a2757e9212c84f48a668c1231d6604f4868b25fd454136263ec8532518dedb2c33d036ac450be7da094b3b16d2d8c9f54e0bc42d31c11714933e67d9aa5c6066866b1ece68179b5511a849baf1b8d616eaecb3ea63e6ab0cb8a979169277229687ec964d04dd0ba4699d0572d872f9f13414b0b59bb41c8495e61dc0890e264815779fd3fb5d0bf36051e146ab1f6d77c4eff6aba8f1b13e228ba7ab8472584c46d0b003595cbb93afdff5f68ce603ca5579bae6e6a77e2fb0780871bcd0e0dce7494b08bb6ed2782e2d1f5d81b11c2e308a47e6bccd094f067c6944746d8a8c060c0fe9b9b26543a91f503d98737680b8f78968dc1b79a4353f21fe88180b88dc6128b51ab977d6b93975bda062f5a8b5a6afaaa87b0851e67bd0758204f4fbb24cac44c5f3544c64a894e02dc919758178d1fccde84020257371f9c56928705fbad3517810f8d635c587a47acc818216eae5dc6c2532f7fc102ee2e81dc4b1343a211b53fd46e2436a02acd7be8e42cf239068e37542e3d07d09d612bb7adc1b6dfe5e8e6646e3073d3f671c81757c0759ec4315c733a44e2eca3e039801b5f1cbb5395abaeb0199b6d55b79b581f0ee7e0ad12e63817dda85224657ee6a77320fe93e9f332ba7ea3aa93cf07617b83cc62b6c21baad50fc47facdb128d6bb530d897f2d6a928bf7aacb9de1b9ba5dd8523f16c2cc699a628a0872b5a592491d59d9639ecb02b093bbba0d0a74d022f89c951a57ad07b56fcef7e19e14fa20bd7207524863b25dae92029129da082aab8c03df3fc6b0aecf7c4c3c49e233fcdc7be07f755f88c01e8e332846600b1fb7b62be0fbb488d721d97f9ec5d55279839d727df337e65c4f937c5d1d190f6ca7f864929a731890f05c0af2911e7ad3bb6ab3c51d7cc04c72859b81dd947e436d050b034473c2aa64b34f68a2dd48e8c01b04a7547d1d287adefaa5a0663153b161be77ed3bce43542382da61602d6a3e2c43e5de1b9179d723468213a8efa258639f18c5df9e80da0f7a31794accc82e293285ea394e3e7ea116da1a5a93ce5f6f958a8fba957a508b4f438963eaf0b21a7f1a7d8aab852e8f70ac7f297230afc271d99c9db137e6de53e3d62ab5b2d28bd5f1233192efe67c80f79a7e6389d7ce20112d164cb667e697edda8d43ec1b844788301fdd71c1ede3d6b8a5954172d2db9db9e958ce45e9844a1e61ec26b5a48fd20a85160a2a9a06c19b1bfcfc25ac8c2217d0b5d017b81d36d221f36d6bff965f454baeda95c71e06d715a6e41ae71757c0b7868313acfe7c673fd9833b13069760e3d1365d6282c7891d31c8205142da84d4b066d15c80f6b06fa5e14a87b64bb9d966072a0253e097773eec219d2109b4d7a241ac158628129c6e480337acea536e154a3252fb45b9906e1d09b046c0e59efdf239d57483d3e8613fce29c19a6173f7c9d67a8e520d21742317173abcc407cd8772ad725d8daf8431a78656586e99ebe18b8da3aa7ad9be96213682290c990784465a6145dcc9008eb528de0b63ef4fd8c78df1a56f40c6c7b81b186993f0bf2a23477dc09410ba5f4e84be799d169e818e12e3ad58786f62d2dbe9a401f86efd4321d0c008bdf6e42341e82e9929551029770b243ab9b9d292931c1a2988c4f651b5398684195c8d494cf5c93465447a85cfd1aa2986af5c2780497ae1e73d856ed0395e915b2ee7797bcb7035eee7e243161d7ae84f75d41227b17796837deb6a982df6940f5832f1e36752eb56d557d7f006a4c6cba7707db74e0b035bea7308876fd870a79f2bb542ef8ce68813bdbcc1b78f84a00a29114a1486ea2f0604dae29bbdfd1e738979208b374fd701f9639a4166ffd79789ffcc985ceb17228b638845810e0c24be049a808a324f2eb68159f5b19b1aeda861b04f21c27a0716076c61d8afaff9a18b784c77ee2761e4d3666de51e213f563cd9e9144586ddf69ef1f08ea5eb8a1809471f104d872742422f7938f7f7a6fba6537d88e7ec8076680cb5a208c34d0d7e1c89a982fc72777dff5375742e3c18ed4db3adfc8ebd6307ca196a731798426d6300223e7a3c2c1942ffe175ad9edf064953bf2e661e4baaf925e36be9c6257a174e0cfd8ebcfac0d5c25a222583f3bea9644d8bfc69a9e4a3d367dd17b028f90c6445ef921437f32624a14ae50828c0e66c0c7624b379710582439acb4b9e374d18a08828177c3d12e48aee81a53fe5f4aa954a63c6396ef637d484ea808838c0fc4a31a473053e9dfaa419708ef44e2eaacb6f59b5e8bed7bb6de627012402b2cc907d3f7cef023e391e162402ace28e968922c9338716e1c8364be4e2be0732d5ad9dc0dd10515ec895ce6d8857ab57958763fd87ef5c58370e118008d26030e1580698eb903d807b1c93c22ae2cd56169207263ad5070ca840812f536747eaaa9b3041e8c679ad022be67ee2cbb077541cea30a2fb4d93e82a25c01b06fa59be7c192df829a58f984c47e844100933503116e9e58584eae5540f2fd7b758954e13606d862d4b62d626d275945aeddcf8faf79d44852e1b5f590c6bedd3ec3f493174363052d2594cf9a759fe4c5cdd84d171d369fb9166e8b8d47594338a95ce5f8f9e6bad18d69c26af8a8030ff6b1f7c06e9998367d186721f9dae38d4b9ec4ea1eeeb82e86ce1038d69712520ac113730376b8300519e5b323cfc56a8a8cdef34064b9dacce60df1d66a2f897510309b0a57d163eb41daa59f3e3a33ec2df54be7b5f682575a378fda873051cc8ad276146e537e7704a2bb1757a4f25bd9afa6043e27b35409e4e7cc2965780009c16307860d5382ede72acc7e02cbd8b7c966913e2ab9ab656e8cc730dc0373a48498d454047f7a3a3bad92530c821ba9a03ff7b8ce17738b8788f6dcb760f765f65295e9892e10429a8475474658c8425e814c86765751dbbfe5d5714a09ebd9f12dc85b247b12c658f90d93f0854dafc1947edd244d93b3edc63a229f050938fc21ee73fb6c02676741a8ff77c66e93267e1e37294afbdc8c3e9181e7ab757fece0eee7c10d38950940951932e289737e5f4aa1be5eed8a57bba23d0dc041b9eb4afcfc2329f1ec8c4e7d71c27dceea1e1ee3dbf83cc6432cdc2a6a6bf810343d31b92bd7f439606de32c79d3af71d763f300d5946420446f4330a4caf3549bd267d3c5de6e1bbbc63648d1d1ea44d8904baa1c1a83baea2fa40d2339a0701c22e767e84b29c1359bbdbf5a03b686a142610e4af1e59f9ee45f56ebdd5d6401aba76376f3c2752298a7cb56e0a6eb6b3a9e6490e42850475855e21199e87d1eb2f4575c4984ec3ebd71619f1806830bf8656ce7141713e48f41b2f4a7cea9026232d5843a9b883a39fc75f6ef7057e4079bea728a28a0bd92ebb2aadf1d8d2888ac25d084b89537579f2f066a7f1a9e74fc9e9eff6346ff9c2b52a0637e489e33c1e6fa9ff0607a1ded859c62af10454ac0d2e89e034517ca34e10128f6eaf20723497dd332d3e9c8e509cdc76a4be6196e140c199ce40f6539e022ec8c2438a8f6df27a25114d21448f85567f7a1d4963f2e5f293a1b4d47f39efe5b16503acc9d7f616e8add03898788b1baf0aae92891a684a46562d0cc8d94b357b4991c920e2d7b476cb6c121ac0fabcc971984aa50fe0304ca2ebcebe2ddb1284bd70f71deac37f75f1e5da7942e43ea3e69f9c16376f8554b751a417a7f1a4fa452d538abe2e5726e13a0a7fee3e89338a5de2517329c9cd0fad276f064fd43fe47412da45fedd3acbd8ef83cdbce788499e3254df638db3b4adb690409db5b0f968af2d2fd8388173b91756e068d76b9c9c268ec73a191be38232ea5eff70e64e0eb9ce49c6e22d8a89212d33482b0643a1a18e6dba7222830336bb28581b4d6854830e6f8ffd999227eb1efe4566baec4e56f11a540bdce11eaee2e1b74fdd5552db3b7c9c50bd1f824f75cc6e875dfb40545efe8235c1b9bb8d1c3de6453b52d775d59ee1bddaf2ed9f26550e75508eeb2b7cfae6b5a1300d7bb4ff58599d2d28dca5b8d57f334cf6dd82bb311710ff6143d5df2e559cb57fd87d74a4e6724658b0b2f10ed4aed067ad9b77a9d8a94114a073b10090d1549161cfe43121271f31f78ec705e4c37e3b671f4848fcf9929d91d3c7d784f76cb29321afc277bc63ddbf31f6bb6c09209cd7007d90938401f4432aaab54c9361131fd5693a07d8ba03181d61049fc29db6480036fcf35acb31f665555409658ec35a93c102e2c4db4a9a4a1722fffe1d0e01c69ba25fd59aaee232c6ea934e9a2309d2ecdedc33bced1d5975ad9bc19c17b1862a09befd1e5e5b45c64d484a9536eb6bcc4d9f884e9d8d619970ac88fd7d1280a08af61eff6fb45f8d2e0c7f8de69347931c3ac8a7ce4a2b87b2d9ef2bf54ee551fd52fbd97485b4c341ee00e3bcda8b3f79403f82031c4ef7001a277cc720b3b48e6ef13a8842becf5ebb88e27e25e58adbdfa42c26c6f50c6b92e3087874afa40be47b8117ccf4c33fd831689ece7ab61ccd952146e812f35895b7f8649d3995610c7695cad2d8bbe0671db285258aec0e3da0a1f9d7c2d6c3e697895e87eb7100aba6980224dca093ece3b517fcc6c82d171ee6e900ead7828e5870a1bae13dc4402dd741631e1c425dc86f1510dab71c5f163fea7db44f05f3e27394e39c429e0c65c606fc53438ac75866908865dca199101c26d99a5241019b34ce68b91a0a6b8671ba9ca8da45431f0f4d062f380608866585ce43b927cd8d1455f8e9282041f6e7abff486dedff710972bd5d5dd8a396155269811b8a6a99ae2b2f24619edb107f85344837909bb5894c1c06c0db2eb66654b53de0194ca3d51dbf32581a7a479d28cb12b423b8b4162a648b6f7da78e0a1be0609f46d5705c08a558b935ac88420ecfc855eba7091b148dd685711d80fc00d91a9defec6f60b6b64713b95c520d5373b2ef4f0061cd229613cead8a1a7f1e1bf205e349b169d4f5832647d081609fb338f1e8c400e14ff86a7da7adfff37dce0c6255f0aed4c5112351a10fabd675279012495a7065efe9690ed73280776733504474f077ad6a30cbd3fb03a6ce42861ac592c6d29ac63db4698fdfefbb1438c5b73ea84d210e81ec3003ba5f249920b104499216f1ffca2970cfd62307ad69a50c7d9584442d795b8c4471e7e675b52c422c7272c3d4c80bc0699499010d45db323bc10f6fc0651b641fab1006507acb17efa57bf253069b8e2f769f3b2ea07ef77109b5034bd0c60270e21add895e070165bfc764f65c37f91415df175a348570b64c9051e883a6288a14f5b22b15f83d829829c8d09d67be6b77f4265d081da0a90062e189531bc979575b72eced1db6f80a14f3a894d3c855fd514f818e20d078f75743dfbaa9ba742ddd1dae189bf8880f900ee4fda4418bfcfacfbd7cb357e316e256cc5f015de818ef013f247633d90afe903a7e49f02fd5b47c8582f6fea04c3ecf1aae7ff27b02e1d47ea218f6aaaad995e3c863a45bcac8f0716cbfb756f9953c9b3cf50365681cf794195d0c6e388b6f289f2bde259b44224b52a35e38e99a89873cbf12cc84e9ec742822f65c5944f222a8a7bc83852f91d356750daa7c0ee825242c7aa25a1c6966eca80853ed0e27893afce7c4ba03895005b80e003b8fecc378f30b69b6b1337a761dd8c6e77f813a726c177445646dc3d7b33fecc4dda68e22693259ae9c29e631d476af145ca1425ae50b168808f7898e20cfd1d015b4e9d3381ab9827a50407979d1699f538fe487abada1ba046bd47ee65687e779ad8ae8f7a0276a5be7d2c2788d0c048afd353e9cbfc506eb9b0ae16d17f4f6989d4f3090304a5c5f657bbc9d82ae38a48f262ea80ae2716c86d7541b8c9fc39ca0a60c8d91397afdc8e1fd37e9f093d74c752b57da1c3e67187cc0d49d6d7fa91468f333a9257607607c4cb79fe216347f14b417bf2c45aa7df154e0763d4d1fcdfafafed335d7115ce85335ea5fed40eec9e12bebb2f93f58cf60367f844cf51fd2384ebf41b811d064ef3658c60b8cc2996efdca5359f8d86fc22776baedfb17c5f5b00ff41849154cf42b97216e3b8481522410173de712458e84ace1284011e489eb1f411a0e298fe52fcb8f446fe6896bbecf8555dfb2a0ef1b0626718a918c06035ecf119928e778d5724c0f5107d0054b5c3f1826937f1737c1f92322e7ce1d59d6195563f7890f5174744a18a514436fd43e0415f9f112e11b1dd1c4d685f34db187431538d7b23578fa3d3456cf5ae5e672ac870306f12ec6f8b42ad9b0e7373d38f939a5144dd12d3b397824170318f859875615a56d4030ba75281696df7e559e3914ab0e97da9b83b5b985d6fbdf094cb1acfefda8ee6cac11fa0915cdcab556973bcc513473c83b0a93c0652a82fd85d431112cb6014c6759f2d4f6ef274fb709b8f35efd7f2b736f707516c101180d56aa901475010bb392a193be59ba3416d447392005175ff20e7a84167afca2cbdd1a9cc6b897dc9a7a6e1cccffe9d9f795d2b3e44ab18478f34c7646ebd769202115ad8d95906f43390740ed4e7f1526429da840ff43c7866bf564d619f3303f53ffb0a245152631c3ca75707dd51ff1ca483c8a1c2ba46c63f7b492d5a4ee6e602625ae5b339d41034612f7c92bd0cd13c41f1c70eed4c32a025b2416fc4d1c699704cfdd3de526ac50302a487fc1acb8b6fc800da2cc5c3f7529688baa61c135ffa247988ab1fe5ec51df781153831e307d402f761aac3f1ca280514d7836faa61a15a2107b9028b2cd7e986371e2011062fcf35bde136017a61d1ec6f7bbe64489c40fabafb6970563350f80e64d4b49ef7bfff7073d183e1befabdaa3d055dec61244f5e93a211a3d458323eb15437df9fb5705c0d0b3a5db2ad2e8a0b57e886bfcd4574497be6dbb3560f4366a3a5b2a13b39d3cfd55746835dcebf3577bda52ed9c9a97198c692d5a1f9002e52ef119142c08ec23331e9b50b0ae550bd6f2b38b3ee7d468759b471e4ed4f559d77747bb8a0a7442380c122ce31e1b82a1cf1c48dc3727819f614a45109bcc3b553be50d341923921525c554add72f5543a1ca34391201924f5a2f91a56f2f80bfe51b3f96517786c0a9a264cb4577fd8a3df06bf5aecd199ac06f79ed21e1f1e5a6c1bddb0a8951f71d9f097ea6022b42c68ebb2fd3b826302b7c9334fb15ab3634ca014f6c94651f6184acfcdf06811046056a58ef4d813f57e0fdf2779189536dcbc3e2711e589e224192c2ede148463f75629a650b730f3e2c52c5f9271b4ae35b28a34944830cc5e064e8e37ae50a3034acb8ceb1deaa6a469d373b8b5ef8e548b72a8a6e698e8e7de25af444a4eef6db7ae47262e7c2756d8b96f19f53f260dda9dc82ce5a2fb1e4b1b8403424301198cd3311aab2596c6720c3845d105cf52f089a25e75e4c9a7543f5c123e5a3f70a400ca7df7e00aea1cb75302d0279e891d5fa3714da1dc0ca4e834bb98228e9a13abfee4630d5d873cee89d5f2139cdf19a1fbc44776073db58be3bb153ebf762e46e158066537beae15fc6c65f7691c8e3d5c3eef29ab9f1f28c9baeaedfd714c5f2a8aaace425b6a16fba4e12e429ba7c5dad8a0a858b442bac6a3e28f292fc7bb4a33675310dfd77c9d94caa70fd0305502002a9d3340c78043d94b9a7134ab33ec876d60946917985c42ad559c2ee8bd905b444c1d17962344a55adf44804b63906db262182467d25c12e97e0d3bb9dd16fafcd1c5a4b316aa2f505884cf317db5d96ea9a67290464f64645a2c53098f5dac0365cf6fd7593d1bb2f190aa1211801091c449e2013327a2c54151ef29c0f83b4ef2d5b3eeb2d0badc2f89a586dd62d241460b5f3942fbac12189bba4b6d3adcf46776dd2a8ad5c7b6b58fea265d92aaa5568d27ab22e590bd38d8a5d57b0c32c648e0b22cb8704584aba7ac039fefb56f2a27aeca8586965d2e8b3caefb9df7b5c1d57bb6b096ff04ede3bc7f6aa68d77bd757ce9637c2b559fe8a74431bb08b067988bdece433c8f2c208027bd1e369f0f8ef7daf80462bc16ed4001d6365d853fc4b7dab85556a0b51a58c73ad90d305e86ebcdfc43965b5c00cce05fe2e26ea28c34c39d64a3a5bc34ff862f6b6d060f6ac9f5af37cc37fce5b1ed8c5478c2fa4a3e21dc14f3a7d0d6a59024aebcc44957987110537cb2355c7264669a2df0a6045dd81cc68306159c041a1150a7207bb3ca77558cfee62925e3239378bddb433f02d7601c68dc479b338dea1953e1994d721a0b49c70898bc654cf42735ae7ff79d7dab621ba3d3b644aa392308679952e2795b84eb5ffc8886871b8380f0d2747a355f3adbc4e1e69c17cab037df79a6985afecf3bdc182a9301b028ce66896d35522431cab523f81daddc83a94ab5a8cdede17de67cf520ac9bbfdf59c372f2b5defd327e067fbca5a474ccb61c397a8fd91af269cfb19930d1e21bbe20f838e07b54918cec89ed9f1ef325dd7137b8ecdc46912a478d10f51378a389f5af72733b19afba41a26f605961c81a252e59ed9d77c414ea9c914711b5bf2be53b73b14a739b7cbdc36df46825571b68d0f88a4185ac7011a7f1d61be57f0918743c349bfe33a5c0536167cd0b3fcedf08f3968477f5a8590174c1c0e5d7d98e3ff7d81f5ce233c05548f45e91269a86ad0d6318a9055b182fc4b49d45620f03693975e0c3f25c65761b6f81417715031c41b3ae39c18d000c677374e870d17a90a54c8fa3a5bb07dacdb595ffe7fecc66782bfbb7629ebd6d1be2b40987b770f44cead13005d23aeaa5c3cf8aeddf4abbaa495d62cbeeb5ff28789665c7cfd295b7d2b9fd64affde264faa1acbad7c35615bdd4dcbc6976e5018e5ad66bebe72a8026f476d07b1197f00cb9b7ec748328e272c09f63f78566b649b8fd56b589684e9cd7194a1c99f835ba87a25fbdb1e104ca9138a9041b5ee8ac5d7e1e0ba519ed14fcc45535c1e36a3e1ba559bc572276585070b7fd725dec4f1840e7ae269eb0c51e9368dab9a9519beda7000f444ff382a15dc87d0070f3d4cd9b38d90678020896fb97a8b5b0355ad447cbe98bd0fead99079becad3d128399123ca3c5394da0d930d4db8030bd0fcbdd57390ac244d6135eab31880b0cf6881166b9ad1a0a433008ce61a621df07291d41d6e90b87a9c7308c4d83a44f2b5e76a9194ae106096801ec562e718d9101459d6303c96a55f54a2d200f388b7dda381685f1e856835eb4502f302e8312f6874b8ee4f812cd88cb6440085bd03d3a8a5625c67d21b6a23ce0adeee9a05c23e2cb5867f3d8231e133afa19a78364ef60a7358fe205177c5b7894ffdea66b2d6e5bbab872deef3d416040c3a19bfb9f4ffeae92ca8ee243deb0dc844944dffb822d02cd08b4fc294f3dfeb43dda1bdc0e9fd35f18ad6ad32b0e7207b212bd7c0f837a9b4f40d959cde29afd64b8bb600cdb4501e252ba230e41de8e06132ed0ce29ffe8187ae9ec8aa9aa2bc6e91e93e7169da0ec43b3c9aaf70f7510fe79b0dc45e3e1c0f50997c693ac237f2348ad6bf6358d20d86db2f9ea7f1509704d18422540b8033359d8b11988fcffea65b7701a75f5106906ab8cfea9efc95366bf0814399e6c415474787bdf1272f082cb636f27bfa6aeb06377dc48a943e32b594690e82320d5ee05ee08f5ded7004261fcf4e187604c9ca4cc4cd12eddc49b431542ff6a5d03784291fddb630592f5d4e8b85333f8a746537624b617fc0881675ee5cef6cafd9207883249f9af3218d2d5d31876033eb6b42c1c0462e1b4a067e65d6884c2917c73061e9cfd5956385a252362eb5e85cc4772b5cceb3618feafc0af13f2022dbec91746196695c795e156eb11c96b1a2344c9bfc82a87c8dd890a97dc026ab070228d52b203f970b4bfd820b2d403b32723071834ae05714bfefe59688375c8059a9676251ed201ed3b1094c2091c977323d1fe2d3001e38c5687dec7d05c3e885f1c817596ffb1a337f47937c23c13d0faf1d0b749ef9bfe9ed3798cc45da44b62a4736de418f9ab862b0fab71cdde1e25fc8c08855eb4b828f9dd7c58d971823f546b13280d5d43f191054d896b4a04c13b7cfac36e852d93bf57754e501cb3c6de9365423ba8b6735e955bc5196e7ee1ca9e9b1873e4e554c2d9aaf8ac4902760c0fee0da00f325a4d961662b2a22956798eb5f3ea5029584148b62b78837f62bd7e8f795efb3692ecc36ae132b1bf7dcfabe1257891575e83fe2cd6bad81bc6f4f966f7c8f65e12a450d5f4c88b57cc91ad71fe20792c1cf19bab71d3436320dec7362a14606e5cb948144bfc0ba6d29b511fd646063b6ee0773e34f428bf975a7755bfd94dc0fc87d6c6f7b1794dc5470a79ca8bae0617be220f79e0f42841a7308ee99df486e06d9686253cbeb60d72ece8b523fd40d9210627f125aa1582a5ede6dca8c557c848dcf6fcf5b0bd9f3ff2b5049ad322c1001684caf92ca83e4aeff78a2067cbbcdd3584276ef169fa226ef0968b6afc1580bdb0e12748467c7500eae9f1cb92765a69240e391a38d901c8e79117755891e3ce09ef96e183e9f6152fbdd72045a87515c1a6e552f77302ce408ad833f33ed280d696049db1f04b42470ed52d8b750bb3f11281cc79fda9412343f0523799e8dc07f109267284faed328092714841e4811c368e2beb437574577d0834ce09b3ce61dcd6eaa387e75fa53807032dcf9c1d7059da754058aae8933a260658aceab52c95c72da480ea5e204056f549203d01868f659462a2cc18b096d299b668dc145dfb56da2060f5e4907e10bcb654de556586316a8506517641b4e68021901985ee5e8614750245f534729a44852e4ca662de9b5d4c63443e6f04ebd12c77e1ea7e5e33ac4d24aefa1905529c4780a954019bb3ac00bfd0ec0862b522869bbd443f03a7aca061bc5fb634a03b59388ab75787d59214a741b5bc8d230018447489728b6198aa2f66b0ef6be62f8b52d85d961437528cda0814b492bf0b9805a39546c247b0fdf631065ae2671c5a86a3f2ec5663e550b600ed14901335ac2d9c40a3b95c10675aadff25a1c8b7081c6cef73e5b6891d6cea8b6e9b18255c770029eb2f403abff15c7f6e1cff0b3273687914be59354969294f1997dc4c0fa11252b71e06c0d75d427551ff750b7763f01a1764655a983537bf0c55b5b03976c99eec60d71d1e6c8db9e3a4803bda892bcf10ce4d0f404b064ee28cbfdda2579543f8c6365d80cb0a4779b738144621c401a4fe545b87d339854df16890636d97ab86ad95d23280c541c2cae0645dbd791955807542ddbfea86dd7ca46b357b58bd0f4091ba68701da2145b4124b7ca0c961f527fd32d1e44773ae3bad136dfe5c24de029e17295c2ff29efe08f1368acba715e6698b4417b1dc0bef10c7c81e7e14f069803c3beacf8cce52809dcf3418f0b0cb58bf143fb75b19a4b8667410955babf4a95a447475412e768237f7c9ee7ecf964ee7b3634652035ebd4a18247ef74ef56de4b82c3ed11402d6b02b767d47902ab2ca8775c35ff6ef87085573726e978a120938b8d88b2283bc41b36e3ac131255fa5bc988aa9a49a8cc0e0fbd106c83e90b93a88aeeb75a325c3376cb114a3552b49e9eed460d918fa6ee558c96efca2b555af8b04b9c804a3f4f1b7d86356c404673f04545885cda94181204f66b59421d64b04a93b1f5dc767bf09d09b6ecbb0e4df77f604f94ef1e00aadbfdd5d411fc63957f5f0e2862dfb4a771e8c0d29a2d306d6607b25f258ba95e828f252dfc076c9b019b24e1e0aac58dec763012354a703f3e134efc8c5e69152a2063b7125f721f468a60d45ea82cce9ea6e7fadfb986d99f5802f1306a7f005e5159b4d00c16814e1530ce17df7713703249eb4c6481f00df59e691fafcb347402d3cd3b14c8638876ee78afe9d0283e26dd4c44ac893a2ec5529ddb81c8e872798cf38c404dfba8f8cff36bd615c71091de5c4033e811444c6aacede2b33190291a244861a8688fa6db493908cf437531bcb8c777c24a31402229746e03e59da0c0c5a82e8302189c77c960f4cf5ae978024dcef60dae99f395917558f0b1528382f37eacfbcc7ea4ff9f983b6ef0a59118df62916cf8f5713dd208d258a7ef71b8d2583ad1ad46fd1b5e44c26b878559043e9b5b2ce34253688a1fb685e0b1655975ed86509d6169a454f7a655a03b0ad9a87a186fbcf3ed29cd3b7a2132856c25d6e805a10f75550defd901dacb5970e686a7292daee3a2febd48579758b65ad5d8cf3b9326152129ea44d3323a93a6e90f6232e0243e57c01d947a0b74c99eee3b443aad6644fa9dfde269f5de72ab6e37df292bcdedb0c578c6416ccbeae91b9cee65eb6bdfc49d054100c988404a310ddb08d3058e0b882a695e2f37773eae59882ca500f80cb7ab0e989d5c36a5d13913737cb4d99c6cbd60d8a0b3548262bf18a145ea3e6567fb928df438dbe866c3eabc86c66788391e1e4aea342c9e929499a46e0f4a0536f3c522dd574c2372c4233bceeb55fa7f49843918ae1f310c8ce12f8fdfc99c00ea6987d3ddcd39f8d58460c191f56c94622844d772aebdd85634c606f5937f4c4aa99a6fe4734f19df32907f9497177f53dddb2b79b894498541c649b1ad10b7fbe3147d4ddad2a19723e454f2e177ab82c8f6493562e7a367cb970a665843f930c2cf7d28f9e00d646af2928c0dd0e655d87a4e219b0ee5b9c5b8600e65dc8dfe12903e70cb99ac1997e3cb937bfd80585d1ee287befc218a3201f11634044dc14c3b93bbe418d28c50441af9479eceb62465009154ae88f729a8219a028ac0fcf3f7905f3b2a502a806b9985d3eeeb48c23e3a0eba77683ec84ab8cc93eb39b37da5d20e34077b51c448147eb810c062faeaf5fcf174cd521ac44217418c0bdd31bcf8ba9d3a7b806a2e74af5d97313faf087f23be61d8cc4c846712853e40325efcb769be02d73f31b2f3c591a45d7a2061cacc312a928f759781b94f65cecb3337fb06bffc297ed493d9c1c9a1275576f9daf0378f6627fe201782e6a7110f9b6e54fa833c118c6c8447230f3edaafd463ce8c01f57bce74a50fceac258351713b35155c26985294e10b311a292f2e48097687c397a1109446bab5cfd971411aab5298c812bf67ead413e44c812af56b2737465be206f4dad62c246ce09989578dac694e6fdbaaad89fd1554a5a69f7ed5d23517cb614da5d62ad1ead7b01f6d5b549e3e0c31625f0083c0681354665d6942e39a5975a65e7b4d2de197bcc44a0481c75430b469ecf8792c6624442ffed8080fad9abe679224aebc8663f446d742216b536bdfeeac40c8a124e00e3c1bf19c74e6666dddab70e4c471b379ec0c9fe6c8e4238c63f9cf5b47482fd8b28e2a8aba0a394e13ea909256fbd6aba9f3d6cec18aa0f9834a866c67ab084e598fd7c15d081fff323bc4baa76b75d47c4e5a906c600a2dac497f6343ade8ef1dc5fa28c080f5d9ad4d27236de774f0dc709fa4824e900661bbdc838e1182bceb9fa68d619e9a946005956bcd456b12e135fb6afa1d4041f8534cb839896915be3dc237310d01cdaa9acbcdb8d507d0a71c33737279407f24f56b13bf8b5be7727015d353ad7922b245d17fbc11dfd867f28325be8f380e77b1ef580b1edaec41a369525f5fc1596a689255b3b30a9cc95332b81b6a197ae6eb7f671fcca711d2fdaee27dd491bc3793f0ca55164e309f045bbb0304c8d813ca839c37543088a21f54aff942c075b2cd7e90bb6faa8d83218bdc55bc10b59d8bdb9421597c99b613bcdcee0cdcf6f74c337d4bdf9992b9ea8aa7d1604c7a2e96771a2113236d37030b6d6ce2703f4f747ed3593b54da4c020b626ad2524c44e3c25f0a93c9105977e9899a58baa93a2704babaa7ab56a1dcb88c17ce738471f429e3ff555db25f4df5987f4300241988faf91ed619393188d75beacdcd34ed615c60112d71490b78157cbde369689265db93d6dcaa8cd0cfec4ee65979f24e41c5835a4842fda7e6b896334acf5d41f76ea436f14b644e54881761a201bc850ffb5b7fc729e016b0917ab89967920a8ba2706b4dbec5550f67ebfe975a6379434c71ad824ecb441d563b39954885478f7f2f2e2985163d8b6d4eca22ab3fda86314caa81a49c057922d20fca0f9e28824ad14bb4e5b25c4440d742bfaae77549b49d94a2a79ad9b34f56404f562df4aca39e36e9df3f91514a88fa39960d0b755e37a3d71ac3dcd596d3dbec3ffae860099bc4addfb20c9546262cdfa6f78849eb6cb063d61edbc8131bdd1ba9d744bb34ca3353481d864940aec31fde804ec8c614402e253277c50acb4c57d0e04ef7597354bfcd2cbb0c8639d8de71b9b07c8993956a3f8ea742482b29a818522f2bdfb7cf5147dd0d69a3d022ad138cc773bf7320889969194c845fed7b4058249a381733fefcd57411cba60d6777f66b74dcbb2252b30aa90a7c9fb3174fa6946e37513e21634f505ab15bd038d9e15e75ed67676a1f988b50c2bd1d01998514a46ee64716b96607289833e78852deb10d50dfe9b03bf6a980122366aa9e39de0770301252a66ed36f4cf0a61beff1998ac4714ad72c41efa62b0fc1cb9798bb64c50f43e74e5a74f5d2e0997f85a361b06dc5cb0410208faefb468666a9da9eb4b20c165eddb39fff6edde022c2feca315a83ce8d49ccd7b0444d8d9665665d6ba042631a16f05f3b160a590c71f9e0551692fdb76eb0cb5f5aa24643f92601b82ae69694b7c6477b2a057ef60c28d5b5b6717785be1ece558c0badd70f93c780878d46beafb513cdae0e85148830072fae042aac8f89a3a885d2072895fd01f3f115e58f76041412c838500ded133eacdb6b0b145938f80e91aac2b3c75101675251cce73d1870c5b3946f9615039d617b1cbddd870738e0aaaef5cbdb6eeede3b58aa0432b2915eb017f60954a1490655451d6f11ba57cb217888a6c25d51bced75a0888247fd3a44c6447ef735c6af0d23fb034d1c48c5ec1adac2f27d533c3efddc2221e82cd1b0d30230bd3e3ac086b60cb9c956fbda485d01d48ec79dcb942b6e60b1beaa45b699254f63e7ca4e727f07c710382307cd3380372b902933d7f1276a9b95d190a01e58c9f224d1617065ef1fcf06eed8331edf478092354f88ce3b82b570ef33d629f15d87e43b9bd580c21ed2d5e03f4e0eee566b1eb34eb1ac24a95ae413f14ced4cb949797e19aaacd70b222df02630bb19f89d45a8bd5f862d113901718fd5d73fef23da8cc9fd6c6d6a51adac9ee5b519ff494ef304989c9bf478057128a4a52b27eeefc19a0912d6853421f22b16765851210aecdcbc7bb24347c30acaa104bdb1b2b09f72f2e9de2416d3f211ac2f126c34b8c7e4baecbad2e7674638f3b38e5e8893ecde8d1a20126d8beefb95ed2f0c4243c68b0fc6d2b52bcd9baa3f786c0362e571845969245a31b6cd93a0553a9955e0a74d9f2dc7f4b0d43d9f36e461e3978aaf9957e5f3f116e5e6acddea233009029f8f1cfa3ae97c4ca5bdafcc54718c6b49b64c385049736b0439772d16208b33382d133099fd7950d443ed3292bb9f7ce77a2bb497a8a7d4bb827d95afbf4bf060d365f4fad4430a1275ef447d9e6c68938e5fed4aac18e04464d2b197365417bb4105bf398e10fa04e9b8f0e8067f25ee49dedf21e827b58f2102f7daf99dc131829cd1ea4a4307c3173b57d29c4ccd0c568ae522916b8dd3dfefcc837f64029c259ce1e5496f8e8eed07e6c5c0a1f852a40e6c01bcd1ee7e58a06bdb949c3c565c5280cccd027813bf7daa82fea04810f263eaf683d14385e26f74ab96cd145089f1616edc0e0ebc4d995b8e7eff5564286389318d41782a0c1f1997df0c353c2a8555bdaef92d3444755a97c4305254b5af7c6b773c666d0aa7649973d5647375a738a714b4e33c82a57b3ff59855ae9b68f088521963b15f7e1cac4d1d37345f99f31fc2ec33ebcc57d824a57dbb85a70137321e8faf7bfa0310258743ae56769c0b43f9b73a63adccafab7479451ed934fe2c96dfe07a7ffac233b43caeb5f2cb71e96af62bd9b4357e5da52264b80da801972f55de2ebbb1005afc5106fdd8905e0d6b3bba098130126011f22f688b38356e085702dc6a835807402c2293cae7c219d98f9f3c2c4173b7781f46143339dd38be214567a348775f40fbca687c1e09e25da2fafbe29e9894a7467c3a66ed1f54753e360872fd183fa7b5c67aceebce3a76c2779028287c2f4f0a02b186fefb227e4b4f2965eaadf3419e948949a5926e2667760752f79b33087f123d9c82820d7765584b87c8330b733da88515081d56c4047c4b6aeaaf4f88db2d174f066139e2766266a6b0a8953ffb8b94dd65d1554c7798f33d57b8085ef155faba12f5f8706f9b7b23daa17b7c0862757bbcc4dd8173004c76f1cf20a8f97d219890f4ac7b73bddd6682a3aee93031cb1ba7acf6a6d09dca3c8cc2d046c83f9dbe3f3b4371dccd012f7c82b496a9324730347dc106bffc4c89ce469f54ee8a59e7d0f8b6231cefb61eaf9f21ec574290e021631ec93ec4e9c9b5e7845ab68885b1ba2825c1b2f71029e4df0e58f18a04582c82674c2f7f85a9c0beeb4fd752c7e3ca8447af000dffa233c5e716ced4f87dde0fd19d1e0270f30a0257776895516e03f781df001705b3027162835451a737c8e950bf37777c6cce0016b36270d8da637180bf0f4eb4cd345b86886ad2215068d8755293eca67fd7068a87ea9ad544d5329c46696aae18fb532bfe46ab1efba20dcfba6beddcfb9c816f75a11230183d138f925260e9d702e7854d9980b31087ebed32336199b1c52724f8ce2a7ed9d0d477d4811108a6189953c490ee79689865bf6fa7c817b3fb2cf32f0b836bf61f0a8aee3018bc00ff3eea91377615f3665cfc9e5a4a010a3793b6dac4b406569e6f2e377bcdc807bb806b92b5fdff2b304a04fc527d0c20fafa5548124347384a43e2be5437751b026c32a462e1011a49b9d63df1baf780e2463a8c6a67ad01de8a1d8275dd66f0000a540ba39a48be2e4a00c325ef97e60f1daa1c420f2740bf1d990bef17cc1517b48db64dd895cf76ddfc424ba7a1fe672a3cf8c672bac644655b6d6dbaac7e05de3feec5ccd042c92cbf98f6a45936f6a70a26837e21b2a19be50279553af42baa11c82b3ed748fc5ad919582e0c911ec20d43e70d16a3f47a7304523a7a0ce8f6b0ec1bc1bcd7254664d8c44c13de8c26c1df458561fdb06227bb23fb1a6dc29af674978ba92a3b8cfb7434eda4954e72043ceb9cbadf6ef4dbe3834f40cb6cb9b9233ebe59d83625121864b7d44fc7290b89e3d894df4a8ab0e7ff9cce2ff76326c2efc69e55b4d6071742897b2e7bff3dc7b75439fbcc9a3ac8273ba6931a08da2c7f5e28e0cba056bf4d163594f69a9834ea7c15091ff84e75862e79e4b7361b0a62b0ef44ddc8b2bd308d756af8748f5d728451e3f4f2b1039bcbed1e721dcc9fe06f5eb6c0a849c16f5a7bc9c0a10fcf3bce6d34704b01f484622a544d0bf1872454f01edd35838e0e86b2d19f135d48c8947e011b737d7df6539a98fccd687ab2c00abfb7001fd1d1efc75deaab76982ffa199d3840c656dfef2a0bed563a65c905286100c4238e7979a7033e386395c2f02c982ccb176d344d58453ed52dd2aaf3941a2ce1a509c70152480a93996c9f0afbd71eb2fc75400682bd803261b16fd5c58249be15cdc7c3c9825aeafcf40960ab8ac59ab202db62106ecdccbfe2c070dc36a8b11d5e9fa30cee757765a9a79f2fbd06e97aa4e9cdf04aeba44ec68b2061c10404c056b471e00afc109cef9c5a8e9c284c7155a3a8ddae21388d3db0783c846d5693f91117603d819c7344ce163597890d950d005add160055bbd43fa2149487709abcaab1ff8229e3256001b10d4feed7851bd791cc1cc80ec0d2832426dd7b28646d9adbdc96dfee86d4df2e9784a82f8c022fba12162190ac5b6499947cea354bd924e4a97c0678dc488de773d519c2edfed405368af4b9aa237f146468e3e5f9b67c57e2ad97c078b6e4954544a4a5575eba722b2fa08b99a0a49fc01e629c901551ae134713bcef7f00d2c47dd9c3b07cda4000c6daafabfacfbe5788eddd6d188c416869b74fd5e1f7bb437ebd9ad33a1f2aaa80b85d59a3c4453549a5dc807de632cefaf804aefb5374eb524864dd52e48cc1e9d3d95889433212e6a5bb4913da3943a3c4853fa4ed1396721098dafd889145d8eeb765ddc7e4b96176da8d788dca74a4f224b04e2527e877ee563c3a767d301ec976aa69120f70162f9b44116f9db2ff94fcabade91b7d6509c9e4d7da9543202fcb7812de5462e5a05d654243abf045fa6e4ae631b4b3277c29fd317aefa6abad021a9274d1ab7285e84382b75c2204c59e46b5a3d561cfed96b4e338919cec13c5b1f0502d00ca370c8908312795131f1852ff2f09511c207d21ff789967809d40f78c69af20f0f486d6e37b99e036d2f672397c38678a3cbff3de1decbe8dd7e62792df033698d2ff151932471bb8e1ea48a8844c0c3646aa65fafe497f688af1c6faa5ebe9c1a4b266732abb426526f5ebdac7fe0b52455aea94dbaeca76346dca0e1bce04c084fa8b3d0c19f1db991dd61c1075b150eb67b644d133fbe6683ea2a4547933ef80ce2b928652bec587dde4b38b142951c75fb4328f5e3c240c7e7ae65dbd6010d9db78d2c261f343bcf438960e9ea11c004d193386d2fd61b2dfae96bd3d92662585b3e5b53697ed8694d2cc111a74c9b5a6ef2980c358105b8ab6f3175782fc38ddbd53ea25531d8fccad9f146ba80a394674879648a76cd7d8d621649af03e65f1fa7bfc21bc616763a39fe7fe5a114fe20513a7b10928328681d3cbcb329b020adedc24fdd1ec61e7bf4a390d460c5d2f80e462f38b44d0a9387cd3ea96af1368ad3c3de5611bbb3a91dc843f0d12a2e445e28b447a6d290460c230a76aac1ca81223dbe259767b8ddb7bdea85a03a5c73b7024415a5693739c737511b72125e0afd04284bacb1d32ea4239923d9af311296651a3034efe9b319734dc8e773b0b7413ddf211a6bca86f79b0dd64e10813e18a6439117d85a8e4d8786853bab99d23303dc2786ddbc29658dbabdc478a042b315a091f88d52a4dfb63af5d21fc930889bbdce10d4c97090ee332258d1374989fcc75c7df714bf4f902fcb6d3db8b7164a7268a4cdb53096463a77126bf41476bf91f01166fc38056ad35a11ba307c3ea100fdb5495100191538dbc6356d94d39e3859cb70ad93dd9829394076d2434c23194ac7f8da4a707a588957b7f4896be1b045d8f0396f56ef0ac7ebc60c69f6354fe57d6626f7fe2397995b66ddfbe24d7798be27babd35680981203bdbe7a1204b8d45524d2e77544a2c9379e2450e11566ecb50eeec77c219d3bc789d8860fc875f5224e575e03102e62101e641f8e3dec35b0f218883a6190e3f62012029dec43ef98aef07786c96827c162895c0726b8629da8839bb10bbb1093f3b20b86a0fbf6b5af4b01f52fe8dafdc28204ae28f6d25ccbd13ce471335608f0beb9b5d5d2b5aec92b7a8dd2205514f83ba0d6fa17e066e299444096eda759d26f2db55496bca83e628c892c5f251dae8e11a0fd85dc38830ad49e76ead72977c70c6887004de311ffdfe6c5c752fe2db4e61b3c2eeb4c6bf13629287f170dec6cb9eba489e333a585e70b0a785f8806a8f3b234f13d351e77b639622ac3f7fe99d0c71206d92c9dac8101b6d3c3d6e92e3cbe7084bed939651e9f5e6086201b5af97bb5f606b59f05848a7699d80477277cb10e6cdecf2d722ba469a90bc7f129ad8b7f33fdcf11a4ab5ef2409bb20e4018e53d90cb5efdc4f01a755541d8e5e8b85ea744cd756560809501aa29d61df8a269ba9203e51df2356345c8b94104f084fbc599d464e0753ce56cfabbd9bb942ba6c6d785c4872e6e325fbb86d5d24edf7d1fbab3b4dc43c9258ec10991fd600b21c06c3abf721d101e38f9f8a0cf689ffebd2657c511ae0ed2bbab6bbbef9bfc9125a42d44af3be87ad0c784c4d3f17cc8162324a46ecbf296bdb8a4e79fc89a2f9197366c15b58244e76e0947a6a0d5e3d2ad005fcc3dce42fc9be106dc0b1fdc52546e3a143e9ee9afe82dab3455525f698eec653a04afbf1cc5e6d7bf87edbe0560d19e3a93d4c65efeba8fdfa77e91df4f033de9455a2b738c84b5459b4ea2c10dd463c47589c2d51619125cd3518ee70b8e48c63da4d1290a3b5a8e9461fd00ac4b486301a85e98ada101f12070f9d8032a84031cad22616aa11bfa2a1a582334ba7075cd1cb7a0d5a85538f4c9265e0a86807b37ca3a1884f9fb90d93bac3cbedaa9dfd1723cb2438e9290d45d42b8c4103f01232dcf4affb4f88c7f611c4d23ddaa6534a944ccd7240c7064cdf6f25b0903ff75556ab4e45cd90707c29b692c296b76a9c7bdb9315ee91bde259c510297dcfa16990d2aa0257675196084fb005825398449e3e3a415fa9f61409c506de9b1748fa2e77354993cafc3824bc82f3a892e5a7873136d3428843743db4076f01fbc3dd8ed447073af845f333aa98ddbfffdf4e176c8e0e740888e105fb939ca7ce036a6b3a20c49d03803fe603f05c5e61dfcdf4d3c94dfc994b33b252cb6ad9a133f8e91c35323a53e89f4967a1736656758bcf7b79412e3e9a62d82c77cca47a7d222de7fc783c240e7acd74902ffe57181aed846300a7d50bf5acec67c7904f1996a89c719dd847478caf937c45fa7c739c045f96e9eee6dea70b1bbacaa58fe1e3b0ae0815ba94b3cb37ec2d150383b4f7e674328615a4c24bde685d58cd0105b6af922b9afab9176de1c7228dace658a1e7eaa8249d2f9d4a79aba2ca7dda06d6e4bc8a2e0dba49d1656cb441d6e5eeeafa450070ff3ec407c8170427f564631f65d6cf493997b7aa9db57d8019ce2405e201d9ce29cf6ff5234e336e0ce15172dd20318b4b797a47e921f313d56420e261bfcb009bc8d4d9e7ba2627926eab545086e045475fcfe6b8029046adc0607d164f4f7a6f5a2f946e872752c23f884caa8c592e1deee95b48cc88bef7";
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