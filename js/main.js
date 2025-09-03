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

            var encrypted = "cb2c56ce0fdcec78bc266e084928897a_151db9cfe23c3938c9d7c8facca69ec8bb4f5180c3208a89973c43146a727581864c1d26e02eace5bc067067a81259299a5ac93319cf386f3c0b626cebaf1e575cfb165afef5f545d1dcccc2b816b071bda5537ba70c06b44bb0d0719bce789c0f802aa630e2e7b34efab3ccf5fd7b524e1f7ae9cf3e9e20a10a39e391e069d5a09fef006443df90064a9dbcc5a0b03d656c32a77d49be4d1e8269747071cbcb4f594589f5a648087bdb0999f888597ffb5ade65eb483e9397c166261d05e03c5e9efa2aa19b5c577f42c635c89e0222000838c1efa5e4939f6c92bc93d93cbb06d0a60d0ab2fa8c74398cc04715c72dc41cf4d028bd7256507f1d0e92331258e2e66ab52612ffeec310bc8f7675d33b848116fdd5014081ff18b2d95878e0f6f28201f5e1b988ba63ca89a4406e8b3ae8d80e62440c60fde923c7f2737ac8a3072d762cabd57bc79412e029bc2c5a4194ff3ff8180a9acbc0d044fd84e032e23665b05553159f0eb69c5a238a2ed78ec506c40a7145707547476b44ace08fd259f5a1210e667e73a24a61e9124cf55b14cfa5cf85df21cf46afb2c2a75d0b2924cb1a2d08d4265090f9193ac587a04976feff9e42c6b6f5088d4407c7ec07b44a2869ab5e2fd1acf8951e473a98758d0d06a4375eafdcf667a1819e7da99ce784fd8daf60d3229d61f2f9a9fc7f3fcfc5fb43804cf8511eed9b3478a79cbf54a7a30be1f0519ede0a85dfab9dd7b86d6b15a61b62f52b89279665e64467fa9b3225be84d5f545516d35eacf06cdc9a3dbda174adfd95f261239c2c053c291464e3ac1cad264bce675f9c0534fe53cceac9c26805cfc09cba3b373643aea2d2a60b13541a35b9554487cf192458ec06457693c4a4703f6935b738359075e7d3882b67696f2f8797b15faec9fc2f819440fd2771d6b7c3dec45b26aa9a7479fc56ca028351700a4764dccab6aff65b1697cf9fc1531458a34a5ff97011fcace7c3aaeb7822119787f29071229e98fe0821d369b154a1ec3f4ace5abfae6353e6199005bb6d03dc522c1ae1acfad8b4f1838c8047e7830fe9468f75d9a91570ef80a5c57b9f36c95df9a266c06f6ec3ae66d52552b118e3a9a19110d706facf276e4cad320ca181e111a9ab9c06b515fb6952db657e043c8abc9e4a4712b00a5ab49dd9207d7fb476c0374a8bc253f065f5cfcb504309e773c6f36352f66abaa568ab99f76fb7d1185b6036b7d1be3e961ece663324e7717c88d132e1b32f57d27d76904c5ea5e9a5bba87e5c7a8f231a72fce2223b0cf9386737cd29fcd1f74ec8b213ce28c46966fc58d8df578a37a3a179006dbdd8e5024a14d6209df0d47736e76a14aecb9d23ecf54916fe0d36e98c940caf66a8bf0215cad9d54d503360578cb2af1ddb236b47047eaf7ac1bf9c914e4ecab21dc522fdbccae37fcd293239e7bc6e81bca2674ddcac6364147731c27675319cfefad7fdc1e11fefeb9dac59a5c2c8969d71e7d9a61a9db9f246b354598f7dcbf29947096bc82b2842bb747cb482f757feab64f0d172eda33bcb0e42827c73c1417e1d664599d71f5cc52e5dc782f47d98e97bcf68c100b22248f76663ddecd1195211753b5fa8fc7bb8bc01dbd8ef51f654d770b2ef55e85487cceca9984a390f50aa5c8d14483d90715cf3fc4648058ebe3efa24f2ec309a5a79ce6ea2d2149035f96c81c750765250de4c6ada57d1f128f124f46006421b7fcb327a1b7aacbf6149b035fda323b28f9a2ac917de158ad1d2c898b40d9e132bd13640b3bc0ffc8e554a041942eda7d2a3c57a8a56cf4e83471f2c4d20ed39fdc5d3c5905b34d39bdf3b2f4ffcd7341d7f4f32dae940b3e00f3e5234c742485affb1e65e4d5551b61748c22a0d204b57c7c698fadbfd423f1cda949a459a9ddecd8b9d5c4698b61cb15bc840ce6a60a3bf0ebb8992ded7bc55cc2247eeed46c50acc68337e96715306eeb01fdb66dfbbf4e2c215d394ee01659b72922b8f04edea7a8c381ebf98e3a7e1c57c423aefd019750fe8282fbe5d1292da6d4bd84ebbae5a81c09083f22664fe3c560dcb0f8395f55e33015e7fee5ba52d8647066eeae5f5716e8f24281e1e80a49b6f110f9629f0c84b16e0a337c393d5c56ae4f37f510ddb3686860b5feac20fc9d5ff29f0531f1415f8fcd43341d9ac9372dabb288bb8edca594c4d53b864612669973576da7d59dc5c2b4c098308bf7cc00d884d65fc4cc9c423aeb7c746608bb92899ed8b364352f4e4084de0b978ba7de5239d8fc7bc057a56cb4c8ab6be902ebb097c6fb9b8127f9b3aacb322c9704e279ece4ff0f3496750b2401770b3a1b9f7c118aaa4aef5d6215282db106a26423032da12bf92ffe8ccc6408de31c6b998bd6b90286ae8e79654ba4a5d332f47e77f1a88865ea18235784f7bde91260dab6c296d3d9176ca24245274658a76e1cd3c55ef4b85b04a17ce47fd547cab96d65204f86e2de24a0929ba8a1751b05d10d1b51a5a7d45853523047d0a115e862e34b8beeeab961d7e015a556fd31850bf6ecf2c6ba6579356633b012d960dbac487a2d012279914bdbf1aae98426264cec43fc1a4713ee59700fc51744ac896025f6669020b3ba22db1fdd544a8dbbe13ea7028fd7e1024bc46f9c94abdef3338c5e08609eddf6d6361dcb84736bca4c4ed9b761e8883611115dd418cd1be8617b2085ba423974d93c60e9963ee3226d733c35362b2e92221d75383c9af028ba64d04840a7b5e5a77bd5f4d55b6d588acdff216197e3096faf99854be277012d8a9ea7a0fcd382acebfd18014dee1e02103a05e7c434ece893234e8813536c50b957169783ae01d994c7d527ea4ff91f8522310ad20478303b646eec69b82268ef58adf63ab6ae3a16a96b1585adb20566bb37951274d24fe0fbc999b99b6e433a6692582a242a95c597e4ec79443ddfe8371a7b4e838f8db33fd4c6071148520f435db1d54e17d151483960f2b6836985f5aa8dcabe9f20f0bd4dc0fe8925543818b5f1d11ddf8bbbbe3fefc3517ff701ac5b5520d835c3a2cdcd3d50a673322f831644ffb2c50ed7a964d3bdd9196e3a24b81c098faff1bf1f5748b5ed01d718857e8029045fb365fff145a5b0fa79f1ab48b354d4247ed064b4ab088cd723d36398f9420c2924d599d63abb8151ac540887463e768210af07c0024b6e335b62970d3d932f4469e8af2415b774bb920e955e02f0de1537b90166dae96f3e4fbe1fb65a7eff403ffecc36b28d92f5c641c8c27912eec3d2e77aa12e6706fa6ba219c3fc70d7afbc939826218287a54a20974a8aaef3b75ec118c96ded5cdedb71bad0e824553b62d916003e6d0b5c979cc4cddd2e28b611ef33cfadf8551f1f95c91c029a00eda0cc70a3f17096decd91f120336f1197769a00650fb322edb6089b1fbd43d4189d0cd678e17a524963a0b7b0ac3c2c1feb90e97ff078f6e5140b2d7ec800f0bf4a308c325daa16865711133dceea73fe828e3ce68d38857a247cf5dd8eb38d831c0ecf3f4145a992ec1e4ddb2308f585d1e555630eb76d779afb78004650614c333ee398cd1eb1c9b28edae6ab34c96dde7f3fa24f80f97b9ee775c5c110f0035b3a4f8dc5a1d337fdfdd06e51bf23f5923b34a2b62b46ca241b07f8bad94578526a0d79f195c2f94f78331ce0ec7dee80ceba7001ace25ddd81c38e571db868684e4f97dd19e7e202c249d2a690ecd7aa56144622bf88d8562276f23b0035a4b755a416dc02cffbe0475852b6c897d7a33c383f1046fe1fbca52d90b2ead1ca27ec967c84a33dee1bcbb60974c9ded600fcd31370e8b2a09c7b89eb2740f87f3cd35e20a61c9f3c31c7ac1306c5aabe7708fb1acb367dad9c00a3a2bd96d5f216ff09e1dca4076a6e2e924177105d08e3fec093ca409219db8bac98cb96a2c73e818baced861a83cc982ad3506d025014f1cd43ff7c1c2a30d0d5fc629373f976dbb7bd8224713fc7061dd4ad251e3b103d406c6477be695cf476afa60b13605a6d1dee7e075f0f2f8ebdba5f4adf243e625089264c3749553b5facefa400fc8762613b55e18b34e72573f0f0631171ae15dc9560e0515b8ee7d364c4c34e6f245b3ccfee35d946635769a47eb0b572fb2f75a94db95ae192ea79a02fc2c7c45081dd242c63630d64cf92305c08d58c09377e0b49fba549200192bcac9cdbe99ff4667eeecf7fcd9d77668e98430ad2e2c3fbe060f60e087de957b1418200d60ccc12b645db327d6aae5133448d31f10846bccda1d83edca67d710fccd37b1590d2bde4d54c6886a858fd37bfda019d13ef77ef4c3079622f0140952f483ccc58cb940b7d797d77a8a8308da023375a678e293aada73004384620b6bab2cf6be83a12148f33de2f34b2b6f989f980bd5fc2b649c4f751557211ce11ddd6316fc6bf24cdcfd1ffad4debb9a83b96c4e009f48d7f697d7f00007c43405ab1905a4cd85c82abdc971ab41de046f8a9b43dada429a9fe583b934fc41915faeb6e7a466f873fb49b1aff6d8ee078d9c43e27ae8bfda7eed09c604fe8258ff584314a4e56aa0118e0b0441791194541fd4ca29037401fb2a9147826380fcfcbd73e59e14813ec7ac374d19d8dad20d2a50924884572880b2f531c34f413d6da4c4606786795d7b2a84ac6dcb58b6271033786b0ed84856fb88a69c6b123f42743307bc8e3e1ebd613de0af50909282fc255e85f527cd70b480416ae2e217deea4eb590e9c3a0e126b4548b9af99c1e08597c5206b4009112b2c4a631537c6b98c14c138fa41f9eead7928f921aae4110fc51d856eb533c0afdc0d0669126c9885c3423eaae808b7b06abb05b970c9b8727dcbaaaf789fb81f11bb946e86ea41327447d81f1904d8f302e18dd8304d5f2223af2992bd30c81c2e79004eef04e380bf1f773de0ecbd26d2cd13468ae537b9483f248915fdef8a0c2efb8d286ed26cbf5b464a1c786854c3f7b9d709808a34e22078809619965d832a45c795d0eda493782ea5c014cee20484f7cc03317a8a691afd3cef7a7a3acc6de68c29e962e9ff35dbdfcc0b123a12b7066708ffabcf912f026be11156c66487b4977c42fffcb919edeaa3e298d9f1ba1011ed48362f1b50d205373ec80746b57159a62009584e62b01c6969fb88ac5267644619a50bfb120c17ca13de8cd70236e55c2e7f3c166eaee027358a9e796297c1b722b1c1455840ca3e7298aac2828d54a934f52eb6bdfc4f6fae89e2db796cb8c63d1cabe2fbf8a6ee76f2ba6858492c99bfb923b7be5b7d0d296e77d255dc680ae882f7733795e8a7c7c5acbbee34976831599cba9d7ab32e16d8f02121d57380d7ae8db151d75b8c0c72124bf9a14d79f9c62205ba4f2e0d75d7a565d22e57f027ed83132af386f54d7d20f708408e2e03b1158751ce2bcf79daf6161d92181d1a4b36baeb99f3927300dac974ad8a04d9c993c37f1138d669f985c35a79865dca9d8238f22fe9dc149fd08f8f6d7264bdd55076ede38f0f8aa003910c5457b201603aeb7efb73c300ca32f13c120793095f9135f47e7af16ee0a19e6956d2f99caa785eafade6fa892e240a263b7dd6f68eabbca17dc2987eb8ac149861061234e9381632f2f8361ff9fb851363004ae2d2c547a4ca0e2a71ac36716127cff5819eb9ebdfd013fe1a6ff3f35d140bb4fceb8ab89b4723442fdc6f99f152537a70a49eed4d9a734a21523beec10eac6121e49e6403743b7d1e089b3574d00a75ef4602a4bf3970948c6cecb0bc8bd3a2ec4e4759e8544548d6b35b6ac25f6f6aca213174ecce830fcfa26f9d4619071aee4123bb72c95d005a8e810006e875e361678e2a2f3feaa02280f572da27717b472f99f84f1f50618cd5186d79c49974ea29229b633469fc435bd8831c3ba2fae40db03e825152c07c853928bb608667d19100e96ad99a3224bf398571963607a7bd136f886b6f05f6ba49844261b46cf3af13b1a8284709dea55ee2530722b88961433827590c2d993144f9f776319b836ff6cdd8d2595ee453a3740fbb67a1e08d4f243f91ab2237c4b0eeb50a0c280be217054e50ae23836df348c935bc29c6ed304d81e5ab48f70352d3006cf29589edf4de17060c92628d62e6836e4b71fde6a7d48961b3ebff0dbffa4c1ff1dcba414c5066bc1ad3e5ace2e1d980fcf4fe8d1bca1b58751c32bd6274db406358ffa0340c1dc93f2d2eb1a59d0da6169d936bb094d57bbf0cf4840ec59f50bfc169934ce1244b38df18d540f5bc9c9b1f1332899227d9fb1cfcf71904b86381d24ef500fae3070e170495367de0f102c6c318a325d68e5ae013b5b032419f4c1cec2bd41de67809eadf29814d4874d1ec2b62664574a7b9173ab0653ceb58c438a849be22d3c3c3070a162292a080279d136ac600d12b00475bb1357fa48412a3db003753980dfde19abf1cf618d872492591be6e4d83c52db0c60202ed20958914d32a99c5dd3a2b2eb4b8d31ad77597a45188fa1a89aeb8a538c77127a87fc14e1fec44649b3ca80e51c9efc393341ef3f1ac2deddd1b2149f0dbb83526891297cde3bba31493495c82a6e9a11bd28cb0f5f3826b15e05754e13e01ce22140f977b710afc91c10f854ce2c8364d6afb508a97ac836ff2bee4a5d85323f44ccf650f099a59b3cbe7ea28b1b9f17d817f5f72765966bfb8faa003a14928188130730dcafa66c0482ed210b5486846c517bdd24c4527c345fcb97199c2fc0583a562fb912cbad70c243049bc921c6660b09f7bf4969500d8e43ecc35589adfca84851597d0b595e4a4770d50771e17ec062a3665f3bca61486bc54dffbb8c4a55530e0c7641e6af677bff1d36205be10e7a08b7f9be5652e5d2ce40c8bc912194855e32ff59e6195184c26675b413c95f78466e455d8760ccdf4a60fb8a4f143d007cc7702146daa42a389644d9cbba19ebd5c09786aab46874c749eb3069148021702be812f44bebddd3baa1114c4ad56db20a7f7b098ef55df58023a16e8d2d40e19be2cd2bb7e33fb1ec03422faca9af306084055be3ce1ef2677fc8bd293c9b48c0f7a6598eaeae065d2e2fd18e5504b17d7bd3f1bae171e16a5664e5bce3c8010288112bb7b10a552fbab493be173d2cbb9cb31c189ba3e756974c3e779e322a5f2076f93edc84414fcb320f23d39e8234200e76f8ec780896adcd6756c052755d8491b64915333d497ef0e15ebe8ace9feb378e778436fcb54c91738ba232f362e4bb5eb34a550993b058031240d814671fed91c5c0912f4b5915414827c4ccc00260eda34e269e10be82840daad75977d48808fa3efaf49063867e0d1e81058460dfa097ff29fd86313e4693b552e4a286457f7a0e0abd6039a0f8f9a270139cc6d64f99752c443e45437109a7aaa4e0206a8b91eb8d0d127458043cff81325d4e801e213539b92013dcc9971a74052385eafa096f808ebc5a16f40b20b20035301931fa96cb9493400fba9b4f27aca5decea5f0cf2556ef4b9abb11c6ae4fedfe5a4bdae99b0f89e57d5d6a657e93ca3799d9180c5a2d72893e508b3d08c910b49f80f9b4738ce3e24c17afa129495ecbe48e33bb9d5edabdc4159712413dc3919c536c37d506cf8740c9ee1f54bcb76eb53be866433a0ac9c69c5900bcf795e56e2518746a23e179ddcf32c23ef2adbe9affbaaedbf303e716ff03cc6a1d832024e5c7b25025073c3d7d3e4a74eab3f7bfe3d776ce4c829daf4eade0c386deffc08ac414d837542a71c7ba6baf03dc18a31cb61bb9701ab5b0fc7f2e8eaf7da3408ff70795f4382c8814c1bee0c17246223c34c7c524b3eba34e03911b4146cf06b3f664fbefa1f0701667c061c78717a1e532fea447b1d817aeeabc17e876dcca47de9f1fd84aaae90a0bed10299a65a97a7fae45cb3c0de8ae655f4a45e58be3fb9e4f254ba1116cc8153a63f674ca220739110cc1165462b3187e6ada40f253892d308e0fe4d9c1d3dbb05d01cb87488b6934d167c299d79b8a680d93f0778efdef7ffbb69509cbaf8b726794226508526e784a5dd363d596f55a6ab1cfec93642a52e7670091df38dcac8121cd391e9e74b20d050ea74fe6f515334324e604e1424c7d60405bedd5da9184b403a40e642db45c4f77be1f4ac3e78cb2c3be2333c76785f0973b6d7b9b920d7bf8b9c63d0eef5f730b9a09345e929ca44a3b3a1ce31bb528051bca6d325ef51da3c3ca91f6a1e1953d4cbee0940c2bd3253613ca889f3a5adc7b399cb9070d5a608568af70094fb7fedb94113bedafcffee437aa090445953f3c39d13952188913f3d884339c8cdcf4f5329f343e648a5bac6ab9cde55ccd850f7e559327c33917bd4ba316d338a14c274889ed0c8af3ac68481ca6e9cb92ac1baf9382b46f5041d64c0a530a3e4cab36614711f279e67bb2eaba758303d3df358911e3296c5b871e771a0a73f5d6e625cdeeadc1f227294d2e2e9ab4a05724494ad1de49ab5c9181a75b4a480a20362005f406514a60d9dd9ccbace013d0966ba920a26660f4d0064832008873240bc8691c89d8a1f23a1596aa168bf3e300991126fb5cd19ce68ace022843e4769e67095d3a27ae646f222b81c850b43e074310dff989f11c8024b90b9a01ab19ac50fa166c8174af55cac4cac7de927284bf269480323e5a9a2770c306d47a012c6a1c3a19487d1cf4dc5a1f623046afb78b0865342db160efaa84a6c3fa3b0f67e4dc8c514761ad1c6d4ebb9646743bf108f000dac460da6e8949654fec4300fdf7266f5d7b32cab72a65641f98cdfe596607606c506668b208a6def83477a02bf82e8749c40be38cf35c8b9fcb1dfd2a486cc51607c3167a9d826c6c8cc16fc8b873258f4abc428f26fbcd5829255f0ab3bff5c0f3ec2171847683bee9d84202596846fcf350086167d161d589fe3e6503c2c6ee99c6eb45dec8cbf0f4dc671f08fc9d13bf651d8769bbbb3fc85ea1f6d3d49d5abe9547144149a7cba6a482f18a9d7500bf983392631ac6384079d945fc6a8fc6b7cd9f27f93098c21e721dfd0d6bfc067d2255e4b7071f6316cd50b64c80685733f5ef9e4a9304a215fad955f6fdf589f067ef48e36cd903fe4e03b8450d8b45f4357ef37986e9d3a816d7c192158e80d48a9c6ac9608f1dcb18d8866a772288f0e5f100400782ddfb6a9db7d4b7c28692e00481825e8bef78d73a7696c893d8d5f4194bf91e6285d5c3dfee6ebad86894282b4be0cf6b9beeb200c04149a92cb4ea91685336bb2a2cfe6333332da464e3ca4173d2ec78ec3dfd25773d4b08c67dcbbe5855e79401c627148b4f8dadda4244eafc70d57f1a5ab39f54a55ea2e2b5c594e8c92e74560649b03ff283a710ffd39b73da984208afef38eff7ab62cdae0135e0b05b49be1b2e3185c59d27a7ca63fff7d14eaa919ebc44b54f439331bff10138a02c946fa8ff789f42219e53f841f522334ed4f2686dd170376b7962b6c43067984feb512957240cb4b8b258c5ccfda708b663c7be04fd3db8e8cb911f70a2e361b85a65a97a13963c08326814e2947db1223b66a150845ab237c1dff9468fdcf6a69abc40cfb24a20175bab2b5cbf13cdca015227f1c927c9406a61dbb8460e39b3a451ca16e919b32386c476d16442063bc9c449081e59fc0fde139342ffbb11e6b4fc84f5ea3eecb9de6e29259c159169a8c3616943e5353c7f22370ba6f219c33fbb6d444ebd04ecde954685839538a21117f74cb05f236bf2ffd38a249cfc3a7b91cbfefe396d3b72e0b3214730344d9d006f2245eeb691d89d8097bd767a04125207b63c69e8409676843713cb7e3c1f4856d006cb4fc8160ca5a135cc97f1bdc046db46042ce2b4ff802128bd791b05d516349249d569de72c727ed4a8a37c29af9b4f13686ec8d04ca71e999a2fc5b0f92dbfce69b00b5432116921512ee58b5ceed55199c24a0134a2158442215957cf5f1ab349993b4a775c25d7815883b683b916a84b9b3d3b1f831522563d7f37a8b506011e483f31ac5ec2c0d7890b847ff671efec71b426160b7562489a7116749234a9638c97ba78ab9e95a827d9738bc0a79fa29b6b2c28053e3a5ede73422b5529b1166ab3ab453c0f8c00637d511a70ab84b95a394baf54521b3f6171bd79b917b0a7aaac7c1ba467b329866a243101ed146810613b86b2df531efd93556cf2de62611d90215541d28c3f47e542e7a02a71f5d9fdd7d5a9b632e4c6dda8b781ad6352c8e357da1a954aa43089cf3eb392114a12dced188911ad9621070e1eeccee93e8ee6d3c47b0187683612a9775dc3f776c67b6ab81531dba46df6e99acc9e10e84f651530a059a675d34ff7d8a714a45edad67b8bffd1868a82b5826db633c21940ac2cc5cc0a7f6780b5b625f8a9aa8f736388c09866d756aa67fc2718de8ba3e5e5029078f80b5abb6cbab4407c131cc1dc5fabc011b7760c9c62f330a73930bdb7a41bd49fcd4e1ac13a9eeb25a0bdeb93f7bfee2447a93e0763bbf52007a83ec3d299a8b503386bfb0cae0008c3c24bdaf9d0536342fc2557599467b4a2ec52d66e9e6456ef8de586b35f7905da36705775885fb16f78f6906a95201ac4f472b7f412c56b8fe804985c3d088f8d3c50fd6613f0e7a8d1b6fe0a0b576a05b1660428bb32e26e20169377d401949c730b795605d2ce8946606ffcd625ede32f1de119891dce19d30c99760d624767e214c452becfea6013c393c856662ebf68f88af13f521fdbd9ee354000e658d6e9f4eaa487b013b850510c7dc2c589d44c3ea4f92ebfe554676f8d1fb5997264c1673bde3b8b42fb4a95e52b2e2c52dfd24de6a12d84da4221e97adde9b235572f55e39cf20afc319e1a6414eb278e600d5db5a2015b5d7a358b744eab74cac373a84875024180be1c56c42a2d4789f1db3bfd2ccda30dc0eca6250758cccc7a9418925c9d0fbf73e0c6d12c464319a211a6a92422f88b59c0d078224b5705be82db57e606cf7719301df1fed1aca02b5b1cb805b97a23cf7e27fb21b778b16223320c51c8bee9f39aed1bdee67a57f721a1ef91c85e79c1484dc2ebcd7e27d62ceee5cd2c49e332140c95c150d59ce0029f8ad5decc83a32446f295199581c5f075a18879a5fd1359ab402f46e3ce35b8478697614b5b14b0f6e2beb83339d41f7f426d3ef65cb6b89182c29f85818e2f44d32c3f930d0f9c89d4d51c7b06aba569893dc6c7be4c4b9d900f90ed01ecfda7fe41ff219fd4b0fed49d059e51604d6087f64f46257895291df50c4f16cdd87c78e284d59652e73f1b1cda9b52066f079c5f183835ebef1383573b0a19fa000217c95d45a85a929c6096fccdbef94200d8e08a50d7f4f30ee84244f642e48e040470ab9e416dd963590dc4ee2a23773475a51f41768c7cdc3ef15c5e7df20c44201b95e2bf443240d058dcaf2dd7ea0f5e120fa086cf117e7b0ce28f0bbc61e119fb995ffa07055384a8a411745983a9376c2d9617668a57414d5677b58ae0d432c8ac11a2e9c975a6c6b65322232eddaa25c35d3c151d83da619b24bf263c608bc1b51fa20b9d522727074ff6876c3b7ad5868cd147b9991f546b016392229f170a16baae19101dbfd81fecfc2a19f3bd6dd8e30e4e4c5c3cbfc1fc65f1f2d5bdcdb74ab779681c9c71a306d7c0f9f573ad2edf797a70bd3bd0549b95f8192d08907a8f745b4eaefad388f6e3016428968f0ac8e11b243929c267b786bb98c9a1e97901f6ad772b337abff2b61eb2051afc5591632c0d928d5dfe933e8f4ecb03b69f88331075896ab328ca7a06d8ed725626eac7280bd00a255f88cc48747233ea26f000ac4d1bd81c56a51a9a423f2669c5614572d4b4616bafd4da66430059fd66cde8ced70c91e131c249afd8685d6dc360b525e575138e758d37b6c3de5547dafb51ec563f3dc6951c99b7128e14c25c3e2925c35e5018a44876fe2d84332d775c8715f9e2592f26e0584aed255bb9e228f2bd3b1af81a13b99c19d054fb73bbae92e852af8795307edb982e470d6fb14c3cdd957aa49a06b116c640fbbe6190b015175b2a26ade4916b8d39bce4f7efb14e2601c53969e274c999dcdd82883c04ca249e72c48da8c7f6bb91a08f7e3fa7a64cd35ca43f68a309032dbde7e17630b8def190256508d7a50e09ee284f6bf909a3f0038bc7fe93785f483c401f48eecb2aa4cf2de76c50297a785edaf284df738c7c4f68c49ccfa1bc2846649acc3d0befb0b9a0ec6f4744261fae187dfa5b1b8d3bba18009e0a22748f89207599b40e41ad40794d078801268bbd13e5c4d7a4db39c2e2331ffe21e8a2f673f639c19f557d56ec71d66a3d4403f2243b2f4e7ec83072366021891d31141c72293b86424f37650a494bd54cb91faf7fecffe636b83002d6808ed864fba2a2ce382bd5556b90b0dfa729698a08c5ff02a670ffaf7cf6068d9cd5d315f76c76f21237b08c96d732d33929bf98badc9885192112c5639b0f09022e2b728f2d9af251f421a4edf68b7666d472f996eb652afbd57e5871d909d6b04e30701d6cb30baed3d71c827e962902596e7c591e46945d9ae3c79d903ed8d5204978d5fa3b93350398aa64d2ac464fa9fba198d0e8c6402b9380bd197ee95ae6f595b074e8b3d3c1581b20d8be8fe18c5b59f36a3d9aac3e68a8e920f5c25c3ac90313d9d8f1dbede3179d190b1f1e7c33e5fee3153cbfa9c611d35bf6663aae20beff3147928fdb513d1fa7b1a700578a4976b287030efa7b946aeef76ae8289f17ae069c89fc82fd709dd5d0fb8573b5bf64d27059c6b65b500b146b48494001b67ff970d8d483358f2c104c603f0274d000fbdd7a16bee0ad221a09c4b0e529f8c672e3b1821dd2d9c62bf8624651b3ff7ee9023da19f69ebcb6019556327f112af34d0c4fb2c8db7687aad5a0af899d88ebe3f504ab99d5842365a6c6c8901bb42bd0e326eb9ffbb6a9c21b84e41a02ad98dcc149c1ea3596d79449369c4b435131bcccb606fe933b2a9d6b18b3694e49d585b8a1a0b8f67652a93b496aa87d4c45782216a1190182e914542415b64de95c68a5d5654e19ae87249c48ddccaa08e34cfb623c1c20bfc5e3d0cb74a957e0bba4305fc30cb6b1df104ee746ac99feae70b1ad62dd20261f6049dfaf4111ba127047e8c2b83ecfc79c26b73719091d31327ce24312a84749789ff58e0dbb5ee7ccd47afeb250474d95d1be5194a989572df9f51a4127c38707e58d8ad5517bd265b19a88b56317cfab45d9d48142750a6303c55669669e9f077102984716da4a36ea611fdc9515dc34f5f0ee1218ac431b0b6946a9c936cf49f1c111f677786d667ad55d49f909224a8b45523576e9d042906504ad9a561d3172dfe86b0e0079395794afcb899bf5b0b21199ef7cda96e904634d7673f0ecabe358a2cda17b7fbeafd515b4ad548eafb5450e58bee400825bdac3431baa0caf308e1bdb863856ede08a436fe5c3f4d99b34cc7be7d503c84b5587c520f3037fea2627420cd1e47f86a88d1aa40559f54d3cb4d007795faa752cbc55b9921cdbe6313add0924c6321377f2a98079a8764b72dad011e39dad562c3116cbcc4720f5831eb0b840abc252cce4faa37e4de418a56aa5616fd60c41ffd6bf50f8ce6766b3817143fec1e10a026b1c42558e83a855b39a8f49ceb544254ef5857a918d934cbe4e6b956263b8bf77500cb4700d53bc9d4a57c011cf1c07205fd00510ec2bf3ff1147131fc60cb063d78ed8c5a3f20153e10804facdfc8f11e2cf552533b83fdf7783bae16ab7bf305b9bcbe32014875bfc3b41b7c590e07fa7f2b53be63f29764c60e7dcfd86f444c2c536664577a3f3487242b60d6c78008b78150b9b34037319e553addc1252f18c74fd708b4e4d6d040d7f90c6665b985bb766bf5e8a567fea19857cda865f17fedf86b02a2fd809915868aab63c4261459589dbec9ed73d470cf9ec6082a2955dc94f6b0527c3e32b1a99124bf9127932e85b503a449985a660a1ba3b509bf6fbb7f0d6e8e87aee511545806ac283120b72b33ae68eb3bb4e3feef9183ece69c90068b923e73f25a055a536a69f5d1d72a260d8897313432a842c3c00c314b9a99ea4586001ad3fd49cdff613985bbbb075d9e54caf8ca94624206005541a0c528f9cbc3018d08d8391ecee5eb765a9d8afdcce8701fa446e93071a38170cd14f577e98b6b67b979be269847b7d91f1406922d83abb1c4c36e583be9e5eff70d013b5d3a3e7dc41af58ef7bde2b859fa6d7129271d6ae331b9d8ac4ed4855e6f351aba4e841534e19bb35789be59b1adc9f5a88258a21e29168f7053d4edbdaf012de2c286577f47b934ea3be95f8f82276fe99951d70ade06f4ebc6779d4d45140e4888ad0946e743ade0708ded63c781704bcce9deef9204aa6df24ed1de797b2d749cf18325f6d6e0e4287763b70efa59a69bc0881f017708b6eba4a3b665764cbeb960a44367e37ca80d169a6af360dd6b6424ebba1d2d518b5ae430ccb899a0c1af40675d2d18a6126c18241311dbd8624ac39ab4d08dcdaa76ea6c30cacdc2ac30d2edba970961cbb59f1d82244039480a839f1b1db255161f7b8201200b570836042c929cbc0c3846a5feaf8c5908ae52816488f8f6e5ac13386c8d1aaae71b0e272e859007df7320d44b6aa251dc03d3df63fac9a9f68ba09a91ee9513a88fc0c46c23dece0e6959e6cdf347a44a4bf799da0eaf18c9af62902b849f78e00d8d2c8842c3c6f33a8963463068b3bb234706af3043211e09198a288e5012b7ceb806a60d86e1251a13a8f4e876d24ca76a8f4ab0570c0392c6bb9bd09611d0cdc0ac80d35e709234ebd1bd5bc9a46f25cd6cdc342aaaff81b9484c5ecd3f25ab30a4e6d0e83b7f6d11281969107557ab075b74ce6eb27a218db4c731461f9e0729e4f31a39e78bd1f736e671119a352f501c29785759177720b8ca29a0ac62c867ce80fc9a3a4b7d9cce6141a29169d9b96c48fb9ed348de7f4acf650c4307b9655d1f1807ef198ba9f212f00e6af32dcdb39c75ba1e093de80793949b8bc7aec74a613b37f8d3ac011db10e47da8c4a7161776c12e59d3d0b0ee6f1d29b5b55978914195da09b86b86ca98ed80d3c3d964ae872a9823e813ea6f986f6c6ddb5f2cb199e13326842b30e94e91b7c5bb04a9431c5a6dd307ffcc37d0c52a8988da0af61e513e06c2cd63c76db5f65abc7976638fd650cffba924026be956964257dbfd28095b1af0abd6e31966d3daba4934469743024ab80fa41c1012a8ac931819195f624183579069ffdba04c5606ef9d3f7852ff61ccbbb382fd6a380f8764088f94bf447d4f635ab7bf65484e07899423706f648b859faa5e7d89728ce50805c34a57e337ab3c5ee217fd3beef2acd7ae12851a84a64fd79d92c1db8925bcef69d1d7bd63ac7b111e0def8c5b565d13ad7148aa0698dc43aedaa5f2a41e48a54b67fff3c8605f39043519591967f1bd78ad3b8ecfb6d6f92b23ca141551f256c657cb7b10145310a4da061b484629a3283732c28e6839e1f3ab9b1370519ecaf7da6c2a2893d3f8695771b4adaf7f94bf94f2422a5e54026d86460f5504d823219e54d5f1297de16226c5b2dd7e7ef65a5712a8c91c7a6c1fc1b2e69f96c98b33003af09368baeeac7f0c135d342159516c7e99d8b77e08d04ce034bc24d3bdc86f490d72870a67a3d633ecf487eac2671f9ed5fe9f51da2ece9fc7395ae5c3d685e1c9411bb23ddd6a85f0035a65ed38533d639888e76813dd8af4f5ea8a1e269880256660b9bacbfdc8e78eb260dcec7557739e15db383bf4ace0270e38d661c4619dd3ddca2d06a1195821b4f7241ef258b0d641f87a1dee93e661afeb88939c3f5fd22d83f523151cb564184c53c950e34d8673e5d74644c9363c6aa570ef0cdbaa16ce0b708d39367ae6bd8e86707a3714ad8e10fe4a31234435a87a2918365977bec4a128362405bea47488be570763fbdc1ddf075e10911f1b38873c398653bffbf4e683089ea46206f7b3fe2f04b80662a8953667ff4c068e6aa14f0bcf058d76ab01c9a6d74c2e5892d376b2bdea3e68284fa22db6f199e3415eaa508eec2bdd464d9d8d25e30627bd762a9c72025af85e1ab9fd700fa4266daf845a21f2497495bca5feb89f40955036080abfb73315ac8da6de3b09f5366016f7372b59f943f3c8ad94b1c0f81132420c9559fc2deb0fe6c620c01b243b256cb912b311f0c209c619bbc0ebd62e616ab12500aaa7f0d4a02ec9eee1450f2620ec1a01329558efc5fe21d8bd736b3789dd34138ff173b7ea8ad23c7c72756aa699007b96fc0212b898e15f64fcf35e52ff69f016333952fdc7612c8f8888a5e2a6ee5d1f0939bcccbe47a889744c56ad2f7d356548c3c20c0751f63d9177484d0881e160dae324641c6c8e7c3302d73ee1bdcd48fb6f6180456b629597e74b10f6038238e4ef7b31d62b64e10213d3709ab941bafad05e3fbf1bf578d60a116938ed68f35d25d36aa365bf062f6315c92356cd937b1e269b9ca672a516e7a70ec257a580a20178edcea7704a89c7033c88fc0b18f5b5f3748e0ec1c3087179d833dcab3a80c9a80822b5e26d25e8252457c0585c79be358b7607c152cb658435fe230d999a80c981263b4c7938cebb70b03d00b81cb7c7b5124e410b93c0446bcf2491a251a4c43f6f52562a6f8828e45d708823d3ae2f0b900ea2e2e1398c41ddb07a43e2d8b4c8cd1556ab45fe8c7c37a68429a945bfa3eba87c613ba3628e6f488353d0aa970452f217a4fc96608465be7af917ea53227b80197196c09190d1aaa0b49867c5a4d556c0c068b2e705727ecbfbf59dfe53c00c9c7693615a3b7cd6cc7e607ff4ad68c133e4d3408a68aa8b744bbbd5b7d6e9bbcdaf594ac0f7119dca07a2d8fb4d24cc73c6ac5e96fdcc739bc704c7adf9e23d6110916895102cdbb39fa966669c01179cddd4573f87273e04b1e02edef9778eab756b183242c54e2acd092920e325e71badf1ebe117ee262b766e9aab96784941a32346fdbce4f10e19342e9479cfd06cc09d2ebd56cb9df81e249aef708ba3de91680868d87f3f121b964f9bce169a273d051f36e5fe0b10dbbeba896080cb9eff4fb9e54e18cc37b50e12b41f39b2bc9ba57943206381aa598f13c8feec137b0b533c78d3d019355872cc40ab7dfd3eaf345827585846d10915d0c8733b691d4445ad249e5fa34b4695d58b58e7b3f633cd23de5dfb09c90931a794a25950bfa7146ed69e0b92b02f2694a7a0684daa3c5d4fe772bef8c56d82db99beeceac9446f4294c38341264d01fa116a94263baa55899040b1cab8393c85bf7ea1116ded32e04a621e178da97c86895fe7361401895b58175a339f6091434ec3f8250e49f8ab3db3441e5ef85a150324e67e65e380751a3c9a4b9bb4d42cb21f68927695ef7574cf9157781226bcc0ef1341b43b5607e6bdf8ceda06a84e3d5c403412de10dff80fd9f3a7949665a7933317aad1ef7359a2eb2e1e52455de76ecab18024eace535f2ee7592cdab499d9836d087e9ed4c22f6334ee7f040a5159201e8f347ff3ac47cc19580ec98a4660a2bba2fbc92fe00c1bd41d2b63ec18174fc18dc7ad6824bc305a994e15cd0d24f3a160fb475d524d42fd8da98f5078cb8da2b8ab5221c585c1c3204e6dd8f35b3467ea7367cd6e74ac8015688a94d765c511f4b6a2004be769822da67377e076b4e23973c4ee37b53036429dd99597e4bcc40670eedf8555e1914e822eed2650522ab4e83c444f4b32aa7ac33f95994afe6ed865c23d6585e583ddcc3e3c38f0019f60acbe92d4928690fb5687917cb96ab64f2582e66f2004cd1ac29291f2b8ba40a4674b9e1217bd547bf473653f6a906a000cb34ab7f596b597b7e2fa35dfa845ea5fbc23af8b2f4430cf38d5d335e966486694a94fd523ba92580bb21fb0bc4b534f8b15f4785d27fa98755487d448789d4d60abec5e1a903b9e6161e347775fb8bc180fd9f76cab4bd8e19396387c774e1fb1643e89de59f3ae8e1eff31015e874f1e0b807fa68feec04b6287d2972c3a4a97266261521cd25702006cd69d4dcd2f87445b06c4ef98e186b49a545625352fe71d7286934ba776bfb0eddcfc3f9d20bee299ce979efcf14e203157b39ac80423626745fee98b5766b23f8411f029f99e72c191ffb5f4966962c6f665bebc2e7b894bbb0f30778cbc241a1dea27cec191b6828d3692da4f2db1e09d04a531939ca3427f07475af59433bf2fed5b72523a655a4a8c88bc35b8fdb6a4c2d67dba83b364d32933f65a8ae63c0425ed6aa5a638a4804e517cb5dbd77d3ff35ff2b9bc32b61b706ac3b216933ac0e8ce508902f30161ea333b3dff067e5d1604c6d76c99eb9ca39f643cf76d87dd6b432da87194f2551c8e17f08c1d749f4f9e4067609e9e4808a48a6fb607021d915ed1f66f6844e77af592e6c070ed263360573dd2961ad990d5effa1ab766f527e539faf7d1f8694af9f21af6a098cb6dc28f156287445a3c6869269bbb4d8d34f34e492eb752f03d2ce225ed646541a702dba62d45f1dca1304c149313d475dd3965206dfe032519a40cd4e763a23e9eaa2653f200cf100d937c22a707d79a4f3afe3ba58c26ad13634e637ed6dbd6ac9500eb5107e80e25b6c7b1bb1c20c6f179a7966a867b0638454431b3e57672782c8cb7febdac1e83023908eed435c44d48cc6e6e343cf3d585e0b3f2ab76563fd1bac650fc0b852b95ea30e96084607b32680e6ac4632f531914678ec8a13261a39dd3e3b4b9ed9de154d51c143178578f0a71b2afb48176b1e7d8285afef19a8216579f0dd4005b77f4f8fb51d31b0b4364c411976a45e7aa683ade116857642053602af093c58c553079faeab5fcd41d138f67d3cd30d1c8f8606a7d8d377c56bcd91c4af4a4aaa99a3364f561030072b14d80c9c08fe1c917c8376d6d9217f311c1c73b9480abe4309232fe65063f2bd6f7f669cb29e04749d702ffc6ed5f4e99b852fa208825b572683257287cb8a4d7b6b38551b5e804f6dacbd6b88ea1797eb240c25c7064c981950e3ac83824349085e1abfe6bcfac556e7bc49b6c55e42bd213564b5992a7212953681494649cbcca53f622eec1fa819489a5e34c0193b2aa8a846fe39db357bfa60ad802fa2a20e673491e1798216c1797cf165297d7ab323236ec428b164f4fc2a69e6c13d6cd836bdec87fe86da7e98abc199d246574201853bbcc67659d512ab8612df25af959d8e10ca8e603a49cc260568a894dc532572f749e508d8430844f1413017bb8b5047acd40f5d726086675bdf1c87a487372f6a9d28de082810c631dedee718615be387a7ff26971ba9eea9fde887b33506f5f3b2fdb326fb30227e0ac26200809a1475785d73c9a783214f0b8a3b313ceb718d62084835d11affd6d7086bc2ffa5df31eb2001d8a065621e728fc1c09aabf9612a649cc873c4f28b75917f0df469bf1e4989443c3115de5d6799153052609ae2afa836cde4124911750fc845562d3a9563ef3044aadca9167df170b717acb860f297f61a7fb3ce0a443fe37799e5bb5a356a88bb61df92a83b122f71a3eadb25b22cb54e49f82e3924ea797188db47f5da4d248cbb8a2198714c4f28b0ef738640885ce22ecbcfb07d3399d82fc58ea85359906e4856a705be29c972acec5992b27be47835e22815f93124e2cea24bc283866330d3f87c8629f208976de286a28582b198a904bc9b228420d7246ade67811707cf4de53bb6ca11709a146fde77859d30c41e83c2aec113ad6343131ba1510171fa6b0e4379c7c9de9b8263f3122ed0be08cb83e06d3b9a86ff4cbb1271b9ec1fa1511cbc1f4b5f4325257f72055f6d9de0082ffb76a0b560670d1366d997f73e57281520cb2b61bb551e1522755b614a44210096b04b8e44e85d179e55a4e2a9eea3ae85c9e2b213fafef4056e72cae310afa1b73d456e6d4a594d645337455f1bb096f021d082b589057013b3bdd8d662bfc06c40927f1724fed87f2e6982aef5878a93c7782d513a9c7f431e006b6bf9e7cb1c2835db8cda39ca4458eddfcfb0408069222e49ff628baeb67ef850bb33b6180fa7c7a47fadf06505d922126d0d047ec99be01cbe8d2d111ef69d0689466369206f88ba174ec6b35470fae21822584725e277816434458eece41980a4c7dba12a2edc8a021a353f4c5bd78bdf477b6c9bf8b312ff30ea5cf758dae1d6ea5db90fbed8b21eb42367586a5f06ed6af3906c1be2af81321abc3711501e8927b3299068e70b40c4a14b81f90b2b89146c4e00394cc33ea08006df4ff212e11294387df6ce385d07713bc5e5d84ac0e7e72515f0eeddc52607a3708b40afd54cdfb603d77e21f56d85cb937a85319dfcffbbd47be50cbd039ec67189f5fb9adf9460db660f8373bb7d67c36bb8a5caa1c4a1e0f349ba14e4dfab3de5f1f357564ee4674c6439b7919616b5124faba7ef4f5d8d6f8407f8ff09a587e469779758de879c4005a07e7357dd0d03044f3042571be00fe76eab9e5909fe79e65ce5c72d4c1533fe4486e64137d6d96ad49c5e57fad15859c3cf71ad2ea117c24de5dae9308a71099302ff6e998c752183597e231f88d456b8094df42f099f739a953630889510167752cbc1aab694edf12338324840da92109896bd26d5c31012616ea8b5dc226564d3d4998b491bcc4c428c22edbb5c19b49d108dd13daa9060d7c9029a2d5fdf39e3b97e9eb2eaab1d797a443dba65eff9132ac73b9661ca4c235655f85e868baa943b9eba16e6929ba6c4944a2c54ef3a0c783f16bb5eadc3a6947d7ee6c809cf2e491aeb713b53ea0334b0895766cf7818bae6dc8f94c164c677793eff51f3e65cf8b54463695629510331349192d37e262ec90751d4ce264df95f6145b97797411b7f9a34ec512e81c084416faa00219faafd557ddb9582a21f1d6bea92ca6a7b0fbaa5ad58f1831cc14ca53250c9008e57c7a40d3a37a0bb3b9359753ba33e072ab0314a815cc26b25e62704a45a9eb03c8251073e9582eb972baf24f062cf73c421878240866d09c3d2ab43a615a8bf8e9cda3a9d8a0cb8bfa3d62d024f0a11c3553d141cd9beb73a8e495b8ae12904de164e5770ff8a21a3ac06f8e910ac888f3ac1b97a5547499a64b4f82848c2a9ff66fc5967b023265499a4f8cc1316fdb0bd7997c7e34f76ab668cf8be08621a5d5a4fc598ef0c6a48dc3ce7443aedfeea32a56efad0b85d0caa361d9118f3f96d177d034ed7c3a06465642b3d74625d2056fd5a95016962c1c2a1eec9183daf545eb56a940a6aeb3cb3611aeee50d6cd94b09ec554f14dbd7c52dcea7c341be1f97520561583dc7ff006d72a5029c94e96bc9366d9da232df7792bfbb587fd1c4f8475cf7768b0486f733543e5ca9e35f82af47dc2480f47840325b6483122e5195b78b03bb3b6e044133d237f03535f1dfd7ff6599dd46626b1f261767012b07cf7d088f3e338503871fc616981967ca09640cc8790daa40352fbed4e0bba17a6d0808539b23e717bca09ae6f497b39a0e71cdf64dbfc206493ebaf274a9a08f8aca38700c557adcca595438790273cf62c9ee799c2b27d666a728e576fc7b2f4267be7f91ba1f6253ca4de99e1853dcf669775cbaae12c0b88cc031ac6ee7419096d02eaf3bb6ac8f86f58bdab5058296c3dd0bf926fd5785b5e12872a49309313d3a5de51a4de8e4e59dc197a56395de191b1bf70af47ce913475cd0766183662838e9b000d8efab66de3a010ddb4111b74b85c5c236f10fad03555d3cf1fb22d0f533b8a516c1c415d0e1face713e5ccfea5f4a2c0b5a70f610de9a987428c3584a150117d1c304a46263e1f767f402f3b835d1f94643a55dadc09f6fcb68a8c79291ab26b40930f6d541a45cbc202c4f5dd20fb6cf7dedffd181d21c08d88e46db34027bd047a5401f6dba827bff8f0c6f7c1c37fe374507b228e54616806e0765c136c3ea4976eb0c6073f86dbbbdf89dddd01eb508a6738ca948708879f7058ac959fdc06b0487830633ca209fc539b325efc810a3b72e1d33a14348afa713294fcb8c2e11cf71f020e84769a41e45164155d3d0125f09449469f8856731d73a9f87ba47447e126cf0cbda2bdc143846cfb3997c79067d54a97c8f5dbacef87e156bae59773d8dd5d4eb705beac1b229a385d2f3d50b4f8fd269c92d171f0ae334c47f9064cfe7f19203ce110d3fbae5f937d72b9ac43097c384c24b562b8ddb2d5f014f7c020cb933d3b863ba74412198a5954354af81f4963aadf50995682e9ed14f29330651a01047dafc2fdba91b0f634d86e8d5bf1fe2d845382de52ec2b382052f9b5b9e166613a7afc43126ff101e78c4197473b1fc0446afc0baaa3a34d84b701ce1c30a2507d04fed8a596fb7b808265d7d94e5b77fb9707d55113d70695083aef9c509f90ca8eabaeecf6c64b6ab949a7bf40eaca8f76aec77bdc1b58155723f6557c2cc42b91f095d8dc3c323d8e4f88ff7af1d7ff77a455f5f701452711661f0c5789868ff9ae75cb8d5cc1a93cdd4f186fd385c52b7201a09a735df96764d22d5f349cdf4c36fac1d05e2b1375b7b5895c320a4945fd46c091a52ba8b17bb9a1aaf5f531b21562ca4a3ee911aaa43fdc5790e7c3eadd6e50202deb3f3b50b9e652a9f67217897fd7e7aa08c7700b129796c44c6d847be36e8f17c70d617038ff27f870aace66e21377cc6135ed4e4958a61fb8cc9c18182f67b63aba636770fba5321c44ba8a84efaf23287f4ac2135817006a2396f50222c1a6d3aa8af25bc02781814d2f88c9c47210cad6d26a57d3c343add0fb2e89a02b98b0b9e8bd02635037b39f4bbb8e227219ab01ce998417bc1ec3728b07a6f1e789bb34abb0f122c26fb56ad5f2aaa6282b1174c64cb4484db3e513f1ab492dce81d612909af9f1fdbfdba52e7ab66eb86411ac8064b3e45d641f2a260f45d1be601a45b4a84a80c9b51565d3011bc9ecff17f13c2e8318f5d5ea916ffb15bd6554566febd7e13afaba8db451a0956436bd8aeefbd4c463c021f427501c03a55903c95cf7ec320802bd28e7845ae02c47612aeecc941d756658e8d2c73f85232ab5d2487920f89d92cadae304a2dc53c5460a40e4ef2932118226f9380c4c90f5957b2c003cd0c06f31fc1c988931e9f37f9bd674ecb9a93b89cf316f1448836807c10544ffd28ffa8d7b868d335b0632a9ba7a3077b9dfe572babe7fd2981fb2a7a19eaf83db517bdfb2bb659cae603d4fdf54838ff465c7830b89e133a31415358815a95a85b49e0ce92287b3924ada3a802ef5af823f48bcd2883938ec9198274066bd42d77012f8521f4c95d6ae5d4142fe903239b178cf1a1393eb22f32704213ab62d3b0901bc8f8510514f1c49d49511c553b7cb15fb8d80d9648cd0913be3d2a21a399c2a13a82e8d64a723a4aef6f79788856ecbf81b1b3c99c7f0158c62f3ed1afd09c8acffe53473b3c4251aa1238bd371631043bd979e56151f0f048d5864c95ae870d8ca2438f3c2765416735ff99b0c26a63168b57b0c8fb1e50645da2e5ec41e0981e0b52f53a94a6525778f8d33a4c685a5c170381de8a1f0f3a8de9db77d09c50d1a2dd28b4aaa4da816258cf96236ac310d08fec71cfa3bc78c9f72924fc74a705c309e0fbf89a63d52eb388f5f73daca6b14b63eb0991b13f4a1710b0edcfe8b47e8a81923641fcc3201a8d7f6cf0a1a0ce7263e310707362fc63c8af6d3b2fef62e07c661624141d2cc3c476ea284125a1fe154f9fef20018e32c997c9a92a96ae8459b7e1a0da4b64dbefa3021833fbcab2068c817730c1d8d92a06b783df127e3bed32fd98cfb76e4da477f717249667228de544a64e95cf8fba908b4354a3ac04ac3a6f141cd1df58a0b0b7d745ffe49de0305601d2432c767884c1dfcb7905de4d3ede1c7679fbdf42ad2be0bd370cb2f333d7001eb23da77068539c0b30a635b7ead35129a31c64427c02eab7463a3ee75df40626496fdd0f92a18949d6e30794b7e1e87269ab4deedd14d95a91a5e5a020b2bc39f9ce7672c4e7e6d1529d13e61b71e271d7820d44abfcc7d0c6a289212bb4e21d4e8f5a8238f6fefbf2a69a40c64ab8f6ff608e78d455c97b519dd90db0e14ff95dbbb66a6596fa43e0e28fa16c7049adf523b35de494e9d73b872bb1cf09a83f253f4acddc4e6c7367d2acfbda3d1cf11f92292f4387b0b71b4663aab78cc97d419678137b4de6820154d822b4362418fbe3978637ecd07b7fd09059ae046609c975c5b89d7b67cbd23785e6bac9148b13e7b";
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