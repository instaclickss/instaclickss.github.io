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

            var encrypted = "feeb0ba087ac066d7209f692d2a513e3_335f058abe612702f597ae8ec2e678f8197098720ef222d13ec3903cf688ddfd2d0e9682d557214a27f0fa49befc67e70b8cdfaed4d18a6cec60053473573fb464cbe74fcfb173397b4d41f9583e40d1f82d115544b9872aaf2b8cabecf76b3f8f837b0e067991f33c1dab7747f6f361fc9a1086c76d0d3cbf232c51ce27535982b1ec8da8011ba3426ed8a2ae65b0cdc2bd05ac94081e14edf497d5be17b49d7b80283186b6d752cf2fb2340223acb04a7d726431308e90e4e9a3126ba9909095d5b1376900a565230444893661d8c3d1ffa405d0a7f018e7fd3f15e95d802d9f3a9b36f69ef1fea8bea5e137be06c542f8638d5bce6d3f0e8d0c16ac7c79a4f493265db0eea171e578e229c80db541f37570a2455fa4b4c09f940ac0a25d019f70e9ecd420c69baee1baa51467dac90a0bd4cb3de7b46259f9f44ec6686c3e83ad4b701c8e50ef3114496ed21088545b1a860205ea4a972761a11346a1c1a8c17e179e40566b28b40a6745484690fea602ebabc90a1b64e762b70bc6717bd641ca6837954143e62c393a4d8bf00567229c8829d98e8209632aa38afb10798b1d10d962202965e6dc2dc2f7404108895ddfccb123684d48896722cc5e9fec248ce0cd63a66e3a2e5286fc16e83bfe466b606b00a45bac8e85ff6cb4dced88e5d66cf3886497f71b23dbc42c36f3e1086d8549f17362756ec45d5c1b3a81ca2a8354fa45046c34c3e9b065987e2e29faedaad85e2936c61e38a27734585538cd4766d3173ac6a95831495a4c8770c009d0d18011cd508a03612fd7172a71edfe1c3936ce7f0e0ce937d0b2e7370db068af410f0865253bcf51f5fdace2bd1ddc861efa627e95c4847f49bf02b8231ec62de4e4b107d9c2d0fd9081954d97e7273093acaf7dd7dc12bcc77408976f08b1c685cacab2d60f4d1864a0363159e1382c4ef8e86d5ece2814fe4b921e76d337edaa8053c63ae8cea4d664954a875a4c3497d47d7cf3e303d4e926f548cca21535afaad6cffdba2e8e76cf5483ba730f0b98ac15660e38536f55d09067c368c015b08e58101446e56bc8b865933c06e6efcf1fc03cbfed9c78595b47dfd6978d5cab76e2fbac3cf143e83e3260eb9b7c9bdb5e54965e393066f0cd8bece20382fa200343ad1375717151c34f482c6e0f8c27bb21d36c1ea64fda8ccdbc7193f37f56c339dba52e7097e489b6140ad40781e042b06fda1a826c298babd949dbb32ff0b99d7bbf5067158378a94fe555215d5a04b64d8d839f52602bf8b06ae850502147163de809fc029144bb69adeb26f58f3dbf754369a16771bdaaa60e83dce67b12dacf8a9e2e23894eaa27b23e9b2aa8e1f3c125ed67f94d14af768a577480846697a095033e6bbb38c60b55252d3221fa276eb389177818b7e56517c70495d3c0a3aeca79d78264cfa89d692508bba1324c2acbd3129f4728ac242b12a8e471c6f1eb38c109c3f874a7057c72be2eb8ec0cb030a5368b7b586c1210bc3ae753d7c4b95ecb3244fb6380ebb597842034bf48e4c5cb81b94d8a1a8b5640234a662d2b0ccc89a62fc322da0beb3021b7784e7c5815b771065315b7f0c269322307270cfa84e77cb7310ba5ff3364e44897faa9aec2bc72930eab0af5c32d21d596196a9fd17b0020187ae72e071d5c6548315af1d491d240db1cc57cc10b1653194c0024b331a0667c3582f38c0fac0679cb024cf16bc55048e6f5d686ac7887e5970af56541cb91c63bc7c876c807de5c694ca952d4d9bfed7e289a191d684a089eab1c1bc7abc86f88ee90ac7424f8ff677b08b226f6bfcdffc00dbf4f2cd8302b5d61fd1d737e440c17d5a72e18ab15a9df2ec303a4c547d8611198b6f64e063902ccbbf97a64f6c99fda6c41ceb6d3d08bbefbb9a874ce4979f5748290a52212a23013df235459dded8bdc1f119e01f6acf6f4ca17d1b742ade1bd73c74ec5a0c89d18648b2c955efb3e36f0e9940786cf7766b5fb02e715ecd856c1bbaad6b964f9feaa040fb7e9d5d845176bdbb6050fcbce52fe32526a530504c920b845a6b57d2a6caf74c72661bd402c4af1f1637db9488b71c3ebed286055ee6c9b2e3ed5c2f7b9d5fac3c93a492d29fce2f019f00ebf062ce77337e4f3f1e4e760009cad5f393839c4de64fe25c17dd5f2fd0f9512705f0ab0a00f5d620accec6b3b1ab1434d67bf888c9db9ce38f222dd30755c9605cb016bbe79b5c38b1a1cc184eb29a89bafed6732212eaf279ce46c94c3e5afbcce9ba35bd4df149188757e2951de9f0d72f589672a35cbe7e2289f06e840dedff7ed6bc975a3cf2aeed7042af8cfcc8964ec4cb758a554a6ca23b3e91cfadc075bfbd35a53089398904f84b61f97287f078b24b8f84b0dc736cba3ed84f6f5ca99eceec8ba082aad6341d4a378bf8e0c39f194dc5b134fbb340efe3a9c18524908cf4de10fab910158bec4393778a001297aa2130f307fa0d0a01e4de68c32428b3e73ce46f5f3717797186a35b8e8e60ba9d8814909a7a6b82f13a4fa12b807247e871238e69bbdfa81a065c4505ed6639d67e0c325313443ab83cd300fbb01066272e8561df3e4d174c15714d2e550eb3e7c2630572ce9f09be9e201090bad9a635996da79ce7b4a1e1caf0a6b4c55886851466ec6b5d96d37577a66a444e76eb5fe2d753966c920bc8b2d082f03685a5e97881e4f2466d2cfd27cf6b507691892f55515d7089fbfacaebbc1c5b6c72b60da12c341f3629e940d19fd4117843361037b30dbfc2de88790c7ea41375cb9c50410caa47445c49ca3105321b1da27fbba7292baf4373aaa7b6d22420a647602b5f4f3d84081be3beba80df4dac734ad776d8fc84109b2be2127bc864281aff56a509719fd44624c5b658898ebc547f1f08d9f688ae884b0e57093609d1b93ee1b10eec415e0341219313950e5d7682eb2d20f627ebdc3eb461e29444a9bf737838c8a2e971b4e28665622db9aa1ad9e2fa798400206595f58488f41c57f2f32c4e6daf6c18952592a82d9f2827fc640f75bd16279e93f9767acfc5ff44410e749deb057726319225de2782ecc76c648f1b19130311e8e779c60c73dd4b2874603d775ade45189a1828246cca1f4ff7cdaab1b289f06388de3ed1b148c7a1682eb0882ec1c9d38102271e50c5b18c2db0119fcf08f85f8894d27395ccd73ad53df861d5426662fcaa4e1ab4366cb08f9fbf54ac3cb64f7e2147f80d91c513f607806c969aad51a6da55b0ffae2712f0952d5084475653a43ad9e6e7c1f15a2efe50f0a4c13315dc5cbed5e7c923976ebbbf0fbc6b1b4fd389b35d14f9ba8372e4ee367c00f8512c8b86db28fd9658ddf440f705b294bf96f9404a6bfe4d7774a06bdb18f08803474b89954a1e0dbb08e73e42a1d4e0c0d76c800dca68176ce68496f2263e39481f1005472b327c7c3fda5f59b17d078a42f50af6d60ea3fa74e0662837076c7c58d0fd1f17947b50e0451727523affc6499b44c291933f5776616e43187eea509d144e3a520886770a4ee29765aa48cf88c1c9694d09ecb1fdfd0bc82d61ba133b811ee216fda3e5912380e80695df94353c97932e6b5f79fc762d3850d2e354bed256087221fa30d03a4c3581fe865c6f96a625f9d86e8f3d562e1de45a3f1a2de66bd2521720e0bd12df396727e8fa65ae5a698f574e8c7493395d70a0bdd271499585570729ff4793a2e33d2787f83ed6b58fe13dddd9e37d08eff5b0c3339ea1bb6a67bafe232c633880dc7a9ed7e1eb92582cf98c5dd2ee0529c17a7db0e9e4c247960e9ed0b981ca616fa793ac597cd2425ce8d0cba29b0593aa4719a6322d7d3d62463243a3d955b1accecb01955c940f4069d9bcb2a6b101ab68e218306a8ce5fe6891010f7491d1f7af08282dd5b2a213ed82ccf1ae81698b334ff3598d60bf3ea50ebce431b0715fe6edc697eecf91b5d6dcc395113a15cb2b65838fa37fd5c012d78dbcd2b6ca39753ba3959bd9a773b99f58695984281f44fddb173ecd55b2a5426f118c9d147770c42f823400415411d60f0465cbadc35579eca9364c09d60aa12782b3e3dbd11575b4e4b32b287f3cc6d891d1a2a2f7d147549dd7b7ad2a4a9acbf09d4c6f2cd38dc8c724b7abab7561ee544eace780ac35b09f15d84d9c069734626370258b4e3fe9c1939b6d8a5bf83d9f5253bb64fd908033afa6efd6563843ad6fa7d240d6317f90a63207f00314d6e11f6da0377d8963355e34fff8dd50a7aa565950d0b668242750efa91c3fde488fdb3e0ac39e5de5f04858b609fedf87f309fb1fd592566fb2f7664f9bdc05ceb984ffcc06314aaf6ae39a24884982d579178ec6fa7ae5a4f441eead2348ed6238aa641c58ccda52e65d4044305aaaf78d81dbaa5d3c17a4e178935448cf758e1088378ce16750c6d62b727d35ef2c7f395bfcd3ca5de01b126510fa0a36b940e1391d91015220d358d661c5fe20a2d6bbb9bd4cb05092aa87bae1e09e47c6fc3769baef5c57c58fef850453f83a38aef77a4f852d39b99544af7e3727f038ab47b20c358013e6563e83cfee3d80d1a80ae9a2dd469e18b4fa370e1b98b8018cbbc82497977634d14645193497ce8793ba6392a071515528cce727a1cafa0661ea25222e9994cb9ce29c18e26c9555fc73199b3128e929065585391f48a95e80a134626d020aaf07bac220e75b02bffef16d4fb6b8b82268e6d5a2248dc307448a9fb0ecdcfec7a3a1d7b0bf1771e929514682c78b8cff0e5ce0de63ac1ddbcc60037ee7b7a910a94d6db45e8230c29ba649e8be1db41b8e372a8b849d200e9beaf2ea47390494c69fe71f410cd855ab51de172e3303dd1918d36638f885f76395aa74fafe8a72507d2b5f04bc591dd2b0613116726b0a1eca4d0ceeb1280005873917dacb934feb7e274f30d578ae2ed3dc7fd6172cced8e43b3ffb05beab49b5ced81ce9c1959fdfeb34c0c9da47c8b05cbbfc539b41f0c7311d78630b21a0a465f4f903cfa6259ad2f0e4435368e06da761af28028f7e011d15e981c0a569052a5a95a970308e24e5eabc871d7d968ba3a8e0e92a518d205083a6da1c84a5626c0f54bec505bf01795ebf838e13545cedb8d709239fe2f32a4d3af81844e7bd268e60390b8f8709f8e1bbc8091ebb68f8e73f300024d1659ae4742868cb2494e6690a2b63124b690206db1f86a7b4b9b45a15c423feb0023fb9f34b8465b1adfe9aac6588618957acf9ae0ff53bde0507ef66930caadbe8b231079fc0f32e9461168fcb210ea95174beaf0c61a2fbaf8b0cc604f38bc51677c3d32c74e039a7a21e7c9690dffe863c5950759200109c1ea4f2a262b9c68d1ad0fb2be3d4c62298698b3d101f85d3c4a6a50da983b93998ccd170e7581a2bac42e030a39d82adcb9e5818a19cac0d06c7829a47a80c89b23121ac70f3fab7854e73002fd461ce7fbaf1303852a4827e4bd0840d34a278de2620b7215b754ee7dee0cac3914fe594ea3a0f6e651b3b9078b1fec9e87e9e7ea3d490d9168c70b083de28251b43a2fce4cdfa6dbe7799d1d9685fdb80224cea5632eb46e4316281cd53c7cd9a10cda11167d685c42c084252ed2f24e0fc7474c49923668d2e13b5c85f7a427a84fefca01748b2706602ce4031639c3406d59e04d2aa28ef04f4f9aa894cde6d69111146ee0d2b9eaeaa5d4bbec8937952a4d498160724040a28c47b0abd55a1445a16f22e05b2c023bdf2703c6d9394853b4813eca79662a4a1ef47bab57e7bd2993f54a73f6c962bc7faefd7513d46a77a052f986a677f698634147f542f5285c511b717961bb860f994b9b09e9da8cf01a79232fd35634c7a8c29d391f600e1d6c1bd439bd6f6783f9f3044856fd79db456e000b184dd2b8212dd3d89d711e397b0f7cf774eb26e2a56d56336d4a83d1a49b667e057ebb6e8d1d1d3ab5ce91e45d0659d04c25af24db5443a976665ee9d127767675d5bd60eae6585c10211e4d9e1c787698ca426d02d74188e913d4bb9903072383227e81712e2c0bacd95d8db6ba96da93680fd1222d4b88b2a3fc0bf9658149986d6324003d8e4d8a3dc318d0cfe11d2b801302b9b97762ea398c34d5ca5d819980fbb67b227fbf427ed7c402d2e9b596136ab6938e3e36052b071a58c50eea4c42695ceb32e785092a069cdbd2d721052d77db7fb1de1b5cc4a998f25f2fadaab7b28683bdb800dae274020b69d85e4181c3849d880f37200c064dd81a121d0ad226a4c826fb4abf4ca653d1f2903b153203fe38686eb0ff8ec9378a98bc747639c06c9e280b5d16e45372cebb7d92b1feeb24913e668acfe3b0a3988f2d89ffdbadafa0eaf85823a38e33bd20ef456326ae6c56e624d04745eabf732553c62612371dc2c6d864507a550fc51e8cdbdc11ae436b61e417879edf980ba15701e1e6d8232cb090f6a4cb7b085527d231dce5179fb71d5ca98df8714b79ad60ea459f9fd68526e8390b13ac4f5ad4c119fdb43d5cdbdad1cfab6acab0dee6c70bbadf406c9ea50980266e6581cd82cdb1119781b9df42ed5189c4c37abc9b16ae95b832fc7dd07e1d4f21078a23ef9d92c9b6a983857556b785d91dbb41fbf3101bb3a85a11537b56d359f1a481ef6443e8f6f345f3682d4e798ad004da7053538bc45c31267737dbd223d158e7b5eb77503c9fcc3ee5fed0f981fa1eaa36adcc16f44a5fa9120aeb9b1757f0ee7f7b6e4a45ffc18952139494511ad2787d219787f9bd9e5749229dabc9786e8d56678924144ffcffa0bd1678e569f8a04582b313a8749e8647ee6815b1cc3f1b2cc302a2661e857d965cd8bf171adb9c728517c5a0793060bee44aeb0cef868c5c0453645387067384222ec345e752b22c68aee239e372cb3c72d6fcee5adefd25fd08a101b08b9236aebd8a43e346e9d61a2bdfeec79cee87fc226cc54b0388c79b78841b203d6e550dc401245f732a649e6408f3c14e2b2984c2d1133a8f83175442ae79422762bda705a53db5baa0358704aa004aea11c2985807278893e3ae7ffcd2dbdde2408f46df0df5c88626b46f74fee66d5e278242730adda9995a4c12955d19662bb31ffc900e9f0fc342746b999c8f376ea3b2370df9d83ca2f5572d965ccc799f3f5ad38a3bf737eef3f8d9eed611e1ebee851b8fe27f29123ac85f373fe8c02db7979c489a3303d2e6d7d95a9b123cdd482368e59c934cbfc36007fc422a8bace1cb956f6a00e5d9cae46bb12e9620ee8ea6e81bdc05b95791520f09a841461060b260059ff0968a97774d33e6a1a957be12d84f3bfdb7a848790b099db0bb6ca8d5230e4ae9fb0b7676489f515becb98e2025bac18566f315d460bc97c56e8957fd0cc6984969a3097c7f137d246eaf6dbb52eefcf6cd5039cc592bdcf08791e702490fcff0457e16614129337e0374afc7cddb12fa55e827d6c51789afe227359eb00a621a7b03eac8c4d12709e79246ea6f5ecd35bdd6a10dff548dd6ca4191677006bd12828336279cf1634d10aeaa98cf5d7c01eebc155e7de66f5d8d8c06afb500b96db97afb067fcc07de1634a6a553e0f19eb728d6e7f50cd561ec16f2f748eb5db2167e4b995cd531efe131a88443c7703b103413b71cbba44f37f0b30ff6c80f7111112285449bdf1bd40fdbc21d1c0eb444eb762129ad2a803aa57b7b27cc5cfe30529b62d08f9391b24205b5af10b063c73b4f4bc6103eb698807ea91708468dd0e7947ed368fd1f22a646200b06823991bd48d80e4aa8d57bfe1d074a561bfa90a16d868f8bc10a71a1f236008ddc47341eb737f14c148733ad31c78acf147610e33240271183d6834aaddb02935bb6474bd6e6e423aee6c1018c97aa817a416cbfe551d48a12594ff50097a808022b0379ccbfcaa0b78bc55ace534286fb129b09ed2f529d484131d5796d7d8d19fa25ed3b73aaa7f7ea4ff96c8d22f2af5f4ac3ef5c717213cf6c9e3ecb35bb13faf7b24cf3b835e0decdb70362b06cd9615e9aa9642af81749eac70856adb08d1d8be593ddf43f3fce182cbdeac29229810f6e2b5a354f285d21c9de2adc98e84cf1aebeed6e946185f380336729b1ccd1deb7a5739209d11539757117cd25e3958229e5c8c508d260ef7d98f726720f8f70db6226f71f0da45cdd57b1560821c28602e1aa50150265d2917411c431d202febb0fa9858cf5db5d72fc1b1f6e73370b9deaf06960c14eaf1caa77f0b1b5882749a8b54e77c783b1d7ee7009cc79964c5abb9413ddb68d1e6d6331f5c712c12c66666e056621f5f2564f69bc3e5e08bf5e2411ec9954a848dcf6507b988a16e96a8874b4f53130244cddb3592dc217c9f889e165491b077eed9292f08babe94a50eb3656d324e68baa19fc422f44d361203617bc273593994a7f7f5b782585c0ce0ebe597dd14bdea9bbbbaf65826878c9817a7b81eb38f94e517c5bdd1ea322a7e3a57a6586620f09adff40f94e18a45d52d2af9638d326d9d115df156d8ad87802253cd2ad8900e0d058ba62d0c1012ba1d7f3ea52a1a8b47c4e72b1cf90acd62353b715029ca31321a10a185f61a2c084f3737b3307baabeca7f1df178dc676aeaf1efeaa2e86649c876e0e8aa953f5600a6a828569909a8f5d5c3c1454ba44607a438778f34075c10ad57075dae70e1fdd6679be9546b9c8b71a6f134c962905661ac4b1a8f8d4270981bec37db5eee92ceaf735ae5e54ff3d2c5b11f784597cac2092b812d72bb131dcf56744c1031a40d04ccc83e177bbe68dffdf7367992c004ba93a82d4d61ec2ba3c30cd11356271ebbaa6408be2975c40fca79ba5c97ac0b9c57fb346a6bd8df0692d80be6087412b2039bbf92cc4bb15f153ee1c99fc3d966a2335cf6ee869fae782132558e377517d2091ddb8f50a657bce4f21cfd3f5a1110e15cb45eccb4d414ff003ad8346a61d7622d0c1f71ec96b70ce1f55370977585db334c17e99631823804eea515f0d6d9038b55d997b8e7c5a9c22c6fdaa83a4212b1bd65cb14bfebb2b7db3cd7c1bf2c90365979974a7aebaf22e2a6a9875ea3e2f3644a3b19bef0c96e4414f69c5042bddf7d0cf887bffc79e53f65cdfdffe9c284381b4d5e7a8a2f867df58a1c0ecfaa9f7a073a16b97e1c70fea565036e64cf92209784a36b53819914707bf0381cb9343eacd794be264ba1da452e0cfc4f3b2ab48ddcb0ac40adb4d467d1e3fc41e3769c6b8d2dd44d22b42a435c0c61e2aaeade0506de462d3a36d45f2907bc084dbd29b0780e1a5e9d131eda3954f472c795ef1b2e9765b125783d1bca2319ac94fe38b20dec4eae731de42a5aea7b8f6fb273039e7bc536900578685a3451033bc55cdce668a0befd438ef103ccad1b175793fb55947aa346ac928b7274c0a32c45c434f45277f1cfb1f3c12a1cfe4d11b7d11f7c4cabddad3096d371d8458562970c2f14255996e2c77142793cbb8d442c622150abb976109237db683c365dfeedf51bd07af14689926b77321707fb120d78d0be2e04cbdad0d608499d02a75028a594b0c1b08deb1af423359905f2b8f53c586c407b6c476aa4747b2e0cb34743eba48aca3a749645270fffcedf7095be6b7746e405bff2835d369904c310150afb62c350447ed7dff0ad4043cd54bf7926bf60cf0ab2c5ed30e0892aedcebab9aba20837c7d5d173cb675d6ac8a04644f029a6b61bd7eff95c12b3bbd9504acbba2b615b8426aa7c6be34672d0266b2a9ce679b8ec5fcfe15ce9c666081745c942e493b7849beabb715bac75599dfd29266cd2e543decd261ae46cfa2249c112191472e3e45ba402e8b76ef676c7e6ca6b2792e93e288b98cb4ace63ffcaef1455c1cdaa1698fcf40f7a5070ccf0f3b5852a3045bbece39295f1d25cc658d7729fafd70e67d02313c403183648225461ec59f7fed3391c4f3329bd3515b01d080abc87eeed0064a28eec84445bfb934f75d639a3a69e90b55ec8cfa618d2829aaed9348a015e454e981ac74ceaf16853cdade1783de6c3bd0ce6bce68600990c7dd03461c8d4a857fa0b6bbc9ec4611032d87684bb27e9cfb61887a9128d9506974560754790b901381c2b379fcd919584e33ced804918933a3f4fc18a239317f1835097a7b1446fdf9af499e9bf16fafc1818c96d096cb8a1973543f95013247ae10f0f287d3bce0ebc11b636bc02555abd6baa0e9746457f83b9b2c23f5d74e6925c961e3734b86617104aba7b4fb1a62a6c76c2e905fbe18ee07e529108c07225d47b01628b708da3526374bade9dafc1a18a35409bd435894a3069591af3475cde087b99ab863e0023cf784f22fec08941ade70b51739994844d21a6f5c1a2d33ad97e9e217df9c4f3ec496ca0cb4716c3cb0da9043109c16e5609d55ceea4201a04367c98b267d380fae4d6fa022370036a9a8f220ba64ed458564dbea5122aaf51c05e92265395f35146e53173cf9a9ea52fa93bf80b6a5e0c4133826667f025d9340cb7e39238af33824e7877ecde90a78ed96a3aedf56ba7c49d9010eccb7f0c654c958082a7a0227da60e08c2dfeb592a87cb541c9b6e27f52d37f17e3376cacc4880a0c94ecb36df0ebae963e5b878d5fc1af35ca02882a785ee82d2b9a55bb2acf6e354efc903ded7c13b4906f612f5766d8af5304e3f54f421cb4f0db3a2cc134bfe27ae343111521e1bc4fdd93c8b58e58e1e7a48cbd82cd57b9bddc50d08b5255aec309bfe1d44ef030b8bbbed0e2472ac3a54bd3644ca7b02e430ff9b5357b8b7d27395111b58b03d5131eb90b219ff97557c085258c8a0d025e4efcc943319a79f84bf735e5c985f85891432714e349d3fae8a9355c3b8dd0710fc0b98325ad0d04ebf515224cfa05f62e2923192b78040ebf14473fcdbc773e3d5d3644d458b24e78639107afe32ac2ebb990e61039136b9a89cba83baedca0c1b4b9e33e3e7272157e6b5a2f7e4c58a49ab8de4ce30f690ee5e44cf11d071a573265c730ed832565542668775c3aee1d49ba33be05e0fa7b9aafa5f0a0ea3547db206426e09d0cc9ab4fa0ecd534333664055c95aa241ade321efa7b4ebca6edc177a554d59eb624bf0050cfd65301bc4975c4eea563e5d800062f2d995e60d524961dd79cb5551cdc12891850f8095155584ac3088e4238b469b0148a8d45f7a5a92c5dd2569934dd4932fb5a5e0b5ae5d3c72dfeab2e23e0744287f32591fe05d9300e7831da9b6930ca6139b8b583fadbba99a9345fa3ec77f47cd8cfaf72b7b9bc3aa16478c3121ba06a5a6568d7ae76ee13a83a521f8e95258f159bdbf74e21c1c22de86dc8a36ac9798cb9e76d429668041230ea9d880288dcee7285df538f957477dcd7339b629c6fd752e0b0d447078a13dcf64e51bb7ae8414d7e4424e50e3b6c79e93dde694c608795e0104efb4b0ce30865a2f9c0043a9d602dfd17227ef6baeebd14d365cc800eac4c3ec9c97529f50ca2771b6f57fb7d25b489978273a9d104b28ce798a69dc0445817604eba03bccab5752dbe05a1bd613b42c2ed86be0da261b37f59b1d48f84dcc97c18af971b2233f5cbdd642743cf811274939e045f859f5fa69fde272993188247402bd2ddbefd6e8a3afe37109e4ce7fa8f6cd4cf13ff036345e6de05a15f4d8c493383b6f6b3b65d1c89af31e8a49cb12561416a5e1706f28f6a3a16e578f7ff092797b7ff291f9968d286020cf978f59c0e5cfc656052e3b533f9bb1db95306c4800cd7861e7e9c1bec7dbe80d7de11d5274d37e22aba3eda87104aeef94d9f9c4fbcc9f66d4eddb27528198c9b6dc04ef87f476e068d48053f5c2a280919b2407ab60dd543a479802c9a669899b6a2977407f9101ee663a6849bf74e863536076ca162bddf2bca9a999a4a4668a557a4aeb602c6432718080c5644aea0825b75aace8aaf3326c4639e101c7559caa40842887fa347283b24c7ce826806fdb067aaf87c0e070e4cdf4c0ef440b05a5f718bf4c415e1f337f39deabae034d8f4d56adc06c411095376209302abf49f11bccc6ea5164da04ef4fa806696303594bd0e5c32e9cdb9b1612ca78f504e330a161ca63588db1f787599eeae8274a6846a78ecb0d1bb507a126ac20eeebc1b39fcde9511b6ad0756f76b2b7bed9e53901e6ead8efd6455a385988718f08e078bb1ee83515af18cc390ccbf9843136dbc596983982581403c6dacb5a8444a0a7e8d8a2f840e388dacfb58593b090ee4026365ec2f08b2ab0aae7675f43e216ccfa3265d7dfccc6fa756e243cf1f5773eb5b986486f857f76b084f9c296014aa0b089f451fd154dc8d5ff91c2edd894547e45bfacf7f56320db38e3c9df07ea937b866260334427bf36d4ce22119b629d8b04e66078e03f0c84c1a12c3b2106b679a085a0febbd41a87bc15d54ef42f248b0943ddad9f3010e6227dcea71b5809bf82271c1f3823031245af15dcc89b015362a267621f66f5d7fd255cfe68979c9b3c95a84e1b22667285fc275e4118e2763a88add93f0c133e7644e3e7f82253396aa8c22fd0f6151676f7f8b9064c9412c1aba9557f6eb2e824cb83c2dd82ef4ac332fa80bf0aaccf45709eaca1cb268a7b42b3da774644d9e965916ad4c872ea015191cea878d518bc583b5bef04fea6cf92a1e28db91526bc6af5c61e4cdd4152b35578baa2df48854072e0e82374d059bf148066873fbd02e332a111712fe1678ab565713d17d98aafdada2f073ccaa6b17ba3a01f307aeca878e1867ca92d06810891342a12deee1be3a9c2df23d9e64fe093197ceaa489f993e442667ffbad22b98aea673aab86cf833ae70f213a5288c74fb2da64f66370b19509da30f4e0313523a15b84a52f48f1b708c51b99a962a43cad435d6f8bd236e2713097ef53f074b1bb3b811647fb433ddfa0eddfd064ddf7ab41164dec72fff0488fead0144611e44d6e9d4e4e128a15360a7226d92a91a9a6f1ec788b8681ac91682f991de375e8480c7e0bf4a475386c30432d7b7a9f1b2255ba75ff937fbb133327486a6cf015242c11a891b34fad80b19bc5ac6ff90403ff65d63aa3015974004188f174a976ca4fa849321c44799346c016f8bbebced94b1f76efe5fbe6348792b2a7221baa5af615cd33711f24b7fbf764581e88e0133725b1fe7bd796f7b3f6172de7418d5d7730b85af11a0f1e06c2a7d79659938d413ff793694a27fdef60cf449e1d7f284495de589cc726d74d0d76e540025945934922a928956e00e85884033dadd3685cefc061a9a0a9efb0f535b7666d34d1f2bdf3f21aebd84d288c4c9704aaef8502bcb09db8faefbbe73a8ac53d885a3a9d089b4d96e56280649fdb16ec104d8419ac3050b91c8a23f1df3bf86adb81f039bb54cac8d3e08eb6714ab1d469a1ca82e57937ece3545620382d0cb7bbaff4b4fc0b79828a2e7522006ba71896c54c495f4e945552d278693e0596e15df025d1735ba80b46336bee038bcb0f6885098eb4f6daf7a9efc2875f932514b94e4b873bf0fea813e2d653c78719ff2892e1c93eb3034bf4da113c47d221a6bb1fe9086d59525a785a4b3bc963343a2ad651fc2b1973114e999791d4271ae78ca22655db01c91545fd477e99fb113ab8f2fabb3565fd1e5d8860b62beba329ddbaabbf6699f69a63c3bc0c0397bc82ff470904f0a4959076c8335a9047157f1859686c27f84bcd5aed0ba015a118527f202b26ee351f87d1d87bcf3ec09bcd439230ab0ec7fdf984c411cd58f69ddc2d2aa7b3cd879d193deeb853b963b8658754add9af440081e4b149a7eac6b1cb1692e9369afdf3a0ae8024bbbee660aed758e918dd0f7767c7333eb0221dae54943f17b233cadf039ba5585c3d8d22e2ca7544a53be6044b81196acfe3465096ba5778c0c36d712342d976654c9da2a617aad2210ee123ec1f1a1d4245769ce2da1ae31241af0601efecf54a4c4363743a8d74aec1e8ff9722f6dfc54b980c324ed815224feaec98ddbb2c9407f62ceb479433723dfdf0c03e2693b945ae6de32558fd14069bdde6682f5f0d08f0c99115de2d3619e69ad4f1e073b0e6dc8768b3fef056446229d0fe5177e2c6868a6a055d9467829ba2745fafb5066f83775867831539becb10d554fcddb138ec090aa593fd0fbb503faf673f0b88c6d9c770474b0afa37f4bc1ab86dac2a146f3ea1199b383d4e099e0b7377c0543e0cab5aa154e82f4c8a525a95ff077eca5932ba536164342fad70d6dc766a08025a0ed4861263e33c7eaefbd9f85bb8259bcb577cd483627afff6bb584876e003d07bf76eb5bee901d00593c8b933feb743820195a2656058ef6819ed89e0b8e65c3a250284323653d24d5612f3450d1e8baf5a27d3a58900677e2dc03cd3790d13a6190289469f3f47e60d3ccacf6bf3aa7dd7e0e8cc6f426d13f909d8b6ab117394baf1e2af7f2a9b9c72b27467da8660c82af76d24249b64973027a16ad668fad660a4b381e14d7503875dbf1c54450981283eddbf70dc95b75614440877c675ad53fba3d31b2afded125312bfb5474ea1ed33393be7797819f9ce5fad28d8a6daeeaa02ed087e912c216fa39e1d9e8ecb00b89413e2f6c395dd05950a21074b885e877a7e5c3f2c3e758697f305002bd4f9ec1d4574b41435f5d61e12c9b19d8770011bc95295cb83656b2de4cae4bb1de06eb9870a2a6af8a25642c73a211016d9b69cdb1af6ad658bb670b14d0d48c11c436176f7c6d0c6abf115e89b5f69ccfe00d7e48283bce74b498bde1150fb6a943f4ea65d4a3fba5877ba129f0dc51395bea232fa349ea70d2db0c7be4fe71da92a46e38b66ba6d6bc4dab2c04010d1958e9f756752178e01483bc4c9d5d25bac55a8249230a8abcc0af09c53cd7eda5897ee256b477aaa0f7a5e455c35d3825f0daaad64b6f0c233ba3d8b610cc7432af86c6f375b6972deb2a772f3ba7e7b15dfddce8c59c3574c1be4222fd5f87f87e694cbba094546b6794d3a020b10f21b79018c084b0ee24b26e59cf0c73ae03fe910ae196670a90e43e4d6887bda914a7e21f8008b7d9902b8a3f53cdc9ee008a2c6518c44a816173b4b57fc5d1c11c4f0b7baf45d285b70ea1e38ae2248b499204c32c5e16675df3a677be1421b248b15124852659bda6cf3d7d91d243e9ef33adf5adb9ccb942869be62877f474fee18ed0c48f02cc333aa01e2fe3228db4966f3b50c31e41a1f6a786907c12b657a66621db2cea8e0ebba8deeb8acc742d1477ec6f191292836bec486eb27a306102028be8e34b0a2d86131d5c406d0bd26d180ace589b2f10eaacf5120b7ebe680900303b5820dbfda52d2e3986654ffa8372011a8db3bf6cde905445d8c23c0cf50fa7c47ae83f24d0a5b84fb132d4703ea33dd4a2c6230bae24347156e3451c056d6f0c21015f81aad10a5bda47a9647fcb27472bf7a180f6f785180576111b0fec62f0e0f9b166561022b574179faaba7026cd5f3288e27d52c5c9ef047112fc06dadf599464ed5c9b0696595d36acca28b59e6f917d5fc4f46c2f6ea8e51ef73e738574cb85b3132f9150f574931deff161505138e0b3d7584953add2a12e57968323c3b358627abc0abed842b14fd8ddc0b9db94f46f5b8edeb2ae6b5022b91580898b2363b4788e64209d72b4860b991577ce9b325c8b286bdee5d73215ad550239df31a83f16499529d3b2c6eaff760e3f59362b604b5472772eeec389988cd5a90c07a456d56ced03b818916cbc34c767750b7c8b0ab6179592c17290870d9c678e4f9e81e80b9557517582c9dae7ef8b46577a73603d08f8fee7edd6bd54a4ecf4cdac02657e0c23ce6ed7e891e1a42342bf9a4bcd150aefe88140ee7d7feebff4f3fc557e97ed818201a08b9200c674aed8595b7c00de4d674d809f621083ec52acc543f8a00448119a71690feb00ce50a476d45bffbb648af70b91d205eb63425a0bef2d6d5f528d8f8614108215a4aee8904a9880ee30f7359ae87ba0b5c770f031a09f3e12e80501628ebaafb48664b17b727a11ab97d334b23674e7fa9f80ec8985b21943d52f80751d38294c53e32183f276f855d915199732f367020aac8cee9da8fd94a5af1fcaffd329b6a0f19c622d5c14a4d83c3b1a5ca6c6cf3d3d4d6fcf8a9e8596d086ad1c6a973bd0377ad4ba3532beeca79694b40287269767aee45620622f701963caa167466368271033d322e03bac54d140d46d2564bf00e97211f2f5f992758d75c933e5fcf94adbeb1cce7e9d3165e886e96f4b59dab153ad38ba132c3e53759d608e0c04dbe01916545f9bb23f115afd4e850f1f1917c9142cf1fba0c6ea3de1c0cc6afa5f7d6983544a7c89850d0e86a3fa79aac80e4876cf7c3d463d445fc213e40b382f63df19ef790d04fb6f39f4ef1ef45574312cbe0da1db17d35ee8683873a12d72af329f08823cee74c530b736976764dd8c76b04e28143afa53418cd7e4e927331148d84ab6b4f489b0f938f4a71aa429328027a84ebaa033140feadb84286b81d2531b8022e9dce10631dad4042021549fe50edaafab65d822965007d8005743ea3555b2ac8ea9efa45c7a93445052e71add758923f8215708ff695101b785c691d9a13bbe6cf866bd68fede9b5333682f7d54904342e09dcda037c69a3be042decdde989ee2eddda60fd4ee734e5938aa07bf3bf21e1b9e529b24138565c568078d53397de6eed5e261d78b04387ce62f6b905cb37fe20eeca4acf3d6be4df7085e9c585280b12a0f2ac78d5719f55686df8697411f82a68a480b144e5df2032d4b7158e1ae052bb7eedea3c91b3141ae1f86e12d4e1d09f7fdb4acdda2cd4f43c51ad7542c6a1d5c852b4c582925ac3aea91c08b0d479e185866ccd30ea6cbf423236f8e34de00d5fa287285324320b373d4ad5f925e92933f0ef5d0185a69b60c1ccca94f186117f0dc0f3d46e75377dca586f3b927c4b514f719af942a6c0d1faa58e29da16d44ffaaa4d799b51168e6a4c1045ab8c01fb1a1c4ad86c053bf9fefcabaa93c3c456071bc0e82481e938575be45b8da5dba1d90b86162cc6df7338459cea606a6bf25623c174a38a10902feb4c3103efe42db2450ead63c989adeb164e9227fd0fbe564639455e55d0cab94372573566e0e55a8db0c9a72e5cb52298122fed8b77181147cc1fb36cb558dbde8329531ca3152badc6a2cf0655f5b4611d98fea2ad6ed5f8d8742a3831c06a9879a56ca2e9bf37300c5d1ea808839d7dd06c26d0685dfc39c3b212693263594ee61259edbcf4983f19fe1df370cd2a6a3a83259e649eaa7ea2bbe8d0264aff2195e732379142b5718202381d34f86e8fefb363dcacaacd3f82a81130300e70e35b6e7d68620ee0d5e6204eb92003ea6e729367c30cd48a109fa8b872694fc878031ce124403f29e957cfa975d43d5f87a8e7e00a50da2e8baba859489ca0d93ccd5eca675d41051f505b7a073e82bf364c78f3c5969148d9988beb0dcb4b65121acc4ebb15cee4644ad72da013a1ecbc77b791fe4616d49d4857cea4d96080d9afccac7f9eff8fcc3c3449db85685dc200ea5e1de2635d69a98caa35780f75854aefe60ba9902d9eba98e5b56dfeffcd430cd704e0ba65fc9c9b56463ff4c81364ef4113a50cdd0a98f1520ec53e8c115c9161b488ec9998d34aa3f21dd75cdc157f5b6580c2a21b0e1877796a5b6c248edbc163737f231e5ee89d62e3b79feabd9b340a86494ec7fe90f6abb5512b479a667a52bf176f48b7a37114976084cfc82d8135c42700a72fe768d95da3220c0f1cacd6551dffa8461b6e57d770e6a2fa82b166aa0f0fad25e7849945169f6e8496f9baac62187b460190a48d1e2d247fbc97d40177e1b3ef319b4d6904749036e495f9ba1f88fcc5c213baa89d6d05e2819859d9be5b84d3c4f464fe5dcc52c3be260a8f095d32a6d91a9804a566586148af5254b7df36f3693270ed1e69b62afd27c0d09273a74d1fa8e83a6b89a5233564909a0fdbf330d81646bd7e71d86baeda424b8420cc481f2bcdd3160a51046f050db0d7a91d3cd35924d91dbb4d6c5055f72f4b2d90677b4bc15eeb060b26bb7562f8ffffa29cbd6875dc47735fec7b379ceb48ab47ef90f6e46b0b65c1067510bfa98f11b3fa1946a1e44a6126831f036fc9c02c54de6c1c098cedb53bfe162ead7356e2d4ed7ffcc94ae5b6250adccc800416fef41ca7bd196970d57675ff9dfd71dd347225a536565ced39a39cea47c995eaa4e84a0fbaf59b0bf46e24f13c7f2545b7ea95ee7ca3fbb7e58f447762ba8eca8aa44202c2b204817d84836133f58c402d7db9922d0918ab3e56374acaea24b23c214db4d4b6a4761813715dc5dcceed9827d8a48a3f182cbfbad23a7611023d7d24bbfae2410ace74e66da6f568c46663b4e300f61960c500420a40f70d777a109b61f30e30326df49927d5eb959c4ca9f0e8ad77754ceb524fadf5f44707006081bfdfd0fa2fb7126e03daf03fea8bd26a7053acba467a77162706a127077971e8998247d62a6454500072ddff2438006a7de6f8ed8bb36ee4c850858cef56d9bb072a60619f96700034509dfcbf1c2ba80e817f66fb0f737b1d7e8d6f1f3d4258606181aa0626d2b34c856b6af438a12df7f7f8547f8f5dd77e224dc800df0b5824c44d44b4ca7192d1e94a18bda7633b73aeebcfb270bcc8e5cdc3220725cd2a02a8b1149d6e72ed1fa5e38182196375971bb42bdeb212b58fa84c3644bd3c3445ea2f1931762c6acda2d24f5c3f603d409bf8025094d647c3403236d3e8025d13a2e2d1e8e0498f9919fdae6c96bdc2c12f6654b9b1b7aad264ce7b1440a2d31459092e30af34ccab3e05cd89331444be08404052178fd5e355cfa81302a0cd4b830135f41bea48c32965db29ac9cfe333148fa3d620a7f059923b0d8ad64d1bac6a839bf7adacfa1bc6b707395f71e3b005323673031556da4e631bae8f3f65633b61195c7999e5e280aea5fb39f72f20f74001cd378fca6eab65605e3136ef4b520ef3c5ef503e7c779046a399aa360a6ce502dc5bc05c0b04993eda6695d662c4fe67124c27db615cf5c3c9ed59ab7bac10744ed3a85a78e7ff7018fd2d1b23006a7c614cbbb61c5de5b3ceaa06fb1fef7610a98a93101e7a0af5a22b0734e94232fa8ea4053d18caed175d76667ba6e916b796edefcc45f731cfe10277b9c1229dde1cfabfe608448aef95d257a81c4b3400eb8aab615573d1a9b6d22085f3ab8e7871c9b3cd29630e8630cd6ef3e6089869030358774d7702c6626633c971aad82a7c4ca4f9db5e95e9f571a6baea025be3c1c001d5fd2a65afb32c53a0d70eb45b0214b7172fc78d7be543150ef5306fce82963c81e48fc196de4df759875c085fdd4825821a36a8a092be5470cf6fd946b31919ff1c0a08d4723d2102ea2a38b9b6818786f16ae82933915a2ddd3d5b370dc291b82d1843f1e52211ed80fff6b3a0e10def7f1686ca729dfca9be810d5026ba9a3eaad95e6d78d1910de8e072b7dcee820d649d15b200665e45b2f713f96f63a618376de1836398c02a2a6b6657320cf41f9cb4ef7020aa8a23f72dc94e888ef9f142e54fbc0775f8b7cd20dbc3e4d09687ec94f303096574abc83a1028e956ed43345a710c1790a631c8f4cdee29bcd84ce8b894df907fbc40d032bfd303deac0a2a89bfa9f0fdb5b8a6043e3aec9f62226a8aeaf5097a870ed13f2b900f49fa8826958c1206676220fdf1bd8d8359b377dc012aed72a04369be597ea044344270d38180de52defecffb00c85104e1e8b648695b9af0765871e594f81a8f1d102644be18fb25f4b04b005c9bdf815bf56bca065669fdf65fd21deacf7f42d814811e07b2dbdf287dc1a8bc6774669c2beb2e6605a9e2fbb48d0048a95448e27fe40385b1b2e6aab6f572a29b5d2544ec5b37a0ab14c0ebbf78827a25e13ce07f89e06eb657bd3335cfae989f5c4f974acae09dad15aa9dc75d2c5101c0c11edfd262d6b7be54d15da475381e15d3b67622569ad00ea21a9f17584a2647b7def4d161588193fce629cc1ee4fa978b587616a7971d9d4df8708091a145e09d64af4ed8b5a6043bec53fcb32868bf599f3f8eb93ad0649c03ed931ddb8fcdfe72969e2fa25a9d7dc8a7160ef6bbaf37fd38bfe7d16ea9fc3759978c3173ee9b3b6282fe4aae47082097d2e2b18c9c889da5ff100fdcb99e7d8d7e7dc62b68225ff2ae59b74fc27baf7378f593f477fb74a807bfe59fa6e5a2bd0187ead47a2d55e3fd91edd1fe5d5715b454c528ece4ee7c8eba3fb03e4dc822f5165b91c6e259e26ffb9226aebfc288c0581d57dcd311c14684bc3afcd77204f4e7c2d96eaf1436151acec4880392fe39bf1d016f18fda33fbfbbfc5baea7756a419e8964f4059b009d45e617a78c497466b4931d522d8d01be5e7120c00e7d3702544bfabb41f2140b10d88b377fe540f32e4944b94f7350020a5f445ca7da6ba1918814578696e99af470a77767ad56204906bd1bafe7869e96dc0264c384ea1087c58f8fa62e641cf065fcc657e2a5cfd0b19d74cd49144f7fcf42707d1ae0e8219fb689bd81f6814663b17b827131d3a57e5cb2754f12cb93f751752fc7b255efd73b42c19c19263956023aa0f811fdb6bcf3ae4379a1d80c1ed99a366e1fe6c24b96cc774a532e27efb97c92cf3096f6da79ceb4a8cb03ea150aed2ee398a1d90762cb363a32f1b8b25beb9b02b5022d27293d5e1bff0dc011c97175941f03f7745241b8812a196228331295010d4f666a6cf64add857785625b3736d9d1fcc83a44c7dc537febff83254b0b0b5395cacf48ef40183bb1b2da8b9e6e7c6f5988d16485b0d0de99da57a950fe42ba75f7f5f0a9077371c84490cf5ae347e4a136b29b7afb53a82d6cd55887a83c733db5371634b74910f4a4d1e77b9ae9b362a29bf7a5db7b1ae5779e7282971c9a05b7a6c3553849513a57f3ec2c2d8b1e8de64585f49518f73f2e0f844fb77ceab81181d940d1be555c8a49c195744c6573dab925b2566e3108cb8bf01f978d2451f6d0c0bdbcd73924cb24c7c50b6c4903356263edd1bb070d0efa50056592488be9cdb165dd55820c3ba31df9debc01e6037bcfadb46318dba9a4063f177bf206e82b5d3a8993c2a8b653bed45b2b0cdc2b4b0346d8dd815c4ad7bf6e7ccd6beb9a2340a53e6f2462c1b6101e339f09dc8d9899f3afaecf5691bf513ae0d2b86c9f23c6c1b111c979b766f39287fae47b5f019668d6519cedd38aabffb4509f2c4274e16d0ae20e0b8d40fdaba105f74468e3d82247996be6b16a123cd79592d30e4792d2e1a1203f46d658c8c0627d91e9eca24dff9a8710da11148d69f284ef4d047ad7c1bce1482f8f2d22c1db1fd61f795a9ce0b4d6bd3b965b89a3073228f11a3069ea36bd314090e49ae108f30d416be23862520f809ecab56ea3dd15a403c50bda1cb0d923f73319f8283a7a3205bd9a59fc6ad64ff489dbea7f259e47609240f69f16b3ddb4ee20f8b730c55e90fabe6dfcfa10556b4ee43de780e654a34149f4e7d83cf32a78eef5fb0cdc46ddd17f7f7ce075ef9ce9c0b646f1e1755bc553b5821281b010484c6cb673734da51088af4ff2be6dc589f1503b4539c5b0f15d278540e9e396a20ddc4365dea5f0ac6fa8745353e7cf217b07f52390548e182d25304cc0d9d8f77390a04aea628432f88fe677efc770766a50b8c9aa549efced38c23e7f6b7c2d627216c10b02cafcf4ef554938e3227ee6c745c9d72e0a9874bad63e361902b0a9e636576a0f24c98c27c9c30c3eb4e808ac4d23760b97642cea6da071074f0bd3a9d1ac640e37f2c19e19b67b120ad57e935d5ebb61dd2a6b19dee24a48a896dfa0abde49a196659086632629ffbd49abd1e2775c2dbf3f59cf68570006aad8c15b38d621556eb238f744c992160d067f3e1c9d6fe8d97c66b114f5f654d2b4ac253d59c0c565e8e0bf4261326e0569c2fbb05103df9948fb6cad768a4c04b8d4cd334031d79d8a152d90b1ecaca237f103f33cd7d081d2482e592a28ce298fa018d4c42a3edcb076ea8ceb42cf5b5aaf8b4dd51f5b81272c29833eb65909dd7c2591d94eecea856c99498115e1c1ee891a7f80dbd9d43292c2bad6488d84c999f35d467d4f33b805d7a7657fab93eb87dc1b855289d6380fe59e45ece64ef4c8a7c2ac205026c9b61a1496f2d9bf69d81689b194a77174b72ea07c6b7081b874968d956433041a7e4217943f83dd0aa76b7af2529fb00db2def1bb9b50870dada33ce959725cc46bdd093dfc805c141f1b39f9f06a68c6abc1b601aef9f949b9123c8f0a5e8a95ac641a5338ecdce69da293b9e6202ea6e746ca855021adc2964cc8c9c99f9246d69c4599eaff5375c39293dae64d3814ced362a5be741257b3413fd0a55ebfad78d515a9f9a0cdbfb65aaed04361970680c4cf9cd8b6016394633493533ae451aca7c3054c345389af69a96220a670aab515b3047e6ae03f05d325377b5e80a52d98ef616fb359ee382188c570145cefc525dbe10a247a3e5531a9e429e269dd9f3f00bae34fd7bd7c402a713b916e9393b19b5eda3d65bb85d5cee1fb8e00f561075fc65d98c0d950601e6af1aadad6223166376a132cff8da044fe3f0e8b396edeb7f6423d93698f36ec392e487b8fb78dca59cbf33edfde3c0668c1ee3e1d213a55a64bdc6794e9e9299bfe8952e3673ae1f6ceb04acee184d9285a40c57bc57a13b164ad00422099cb947c44af532716346851f86f97dd8f";
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
        var content = document.querySelector(".content");
        console.log(content);
        content.innerHTML = page;
        runScripts(content);
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