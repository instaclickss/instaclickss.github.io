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

            var encrypted = "a60d627b72abfb457fb797ac27d42069_5ef2c83665155801f7063377514f874d1f1bba526562b66b8e6d85d83db16689843f6862dcde33110662f9e929dfdaf5897482e45050f0710b191e8e210f9cd79bc80c3ec0321acc021cbf493084945ce6f327bae985ae415bcca25bf9aff4d2a885a50137f9fe83a0345bbe526bdb75e86820244bec4f5fed45d78d2890b2e820cc1ee96df39df5621369faf6b021657061592702d28718e55754d675f7693b7bf71d1796437e8f4ca9c6a84092221cd2caed44a719a4f32e4b331f6f9041608a864d530f730d4d30a5b60ca1717b7862be2cd89ffe4c44f6e123332fcba664712ac5a5eb818c847fa833ad41a3c71ce296815c71ca8261fb9be9fdd5e1ee00044ddb1ce70f43b937f0b8f2a3eb17a2ee4f2278a77b4752418dc0c9b7618f65721809f4a30854f1041ef7b88169fcead22f9d9e91c4f683f4fcca90fa2d714c5ee098373e359b6eed44a6f7715329487c7bdc9acffbec3423e8437bd059f678b11b88ed07ba7489c8a246c19b836a21d9bc4d02406b080c9e231af78ea76ba7cea6932218b184073393af7c02ba16ecfbe57984dfdd93193597a78f5587e199ac40ea81f3d8fd377f03b1425b0a1b37d8d83574ca64916422b4f54eb45d0534826369d31db2e3d4925d6b6a921d4008bca39432d9f9d31b5c625c07279d095baff9befdb5c1797b6da3cf399a189cb04a3679eaae5deaf2c93f4bed2482a866b404b22a3d8054ed6b466f7b2b6e25e59cc4146637cb47adc82f15cbd64e1be031511e500be4dd0f9c55c7ac16aea2d88a914427761714a9900a8383be54578b974f0df6fa1c56794f436732c52555c818e8522e17fd494d369bf08464871de067f47a2067bbb9a674b2158fe19f9f296e39d01b3518c22bd449bc97fad25e458808c192701e701506eba08953bf712a609545a0f077bf990903707f748b9b857edcd2f0b11f815456cb77731217c2af4ab907fea17ff0a0ecef5de51ff99d8c53b882e5b81bb902be9ab5824bf267425b2bdd5420863233850cd65318849b1833f71ea934360256cd1dbad5fc642900829cc816a87cdecabafa10e855ae1ca938a994420b4e03793351db29175fe71d1f4dc50a71d70c58aa22cd5232f3a2441d879d16eb6b0654dded73c25d2ab1f667c9568d949da109932e8159e1d96fa604808790ec4295aca0c57aebafa3f167669a2faaee574a9956c540de797562d68ba50709a582b605f3549ba6c88ba4fe0ff14101e3149da51f037a8e0ef6fc3761c03011e9907956084aa2aa0aaa644d9d3befcd7e98fbeaf7050c4910883a4f2ce1c4241a64329edb85dd70ca19046e3a6c574ffdbb3a4972ab937ae20fd06bc72a43e6a14566abf9ef8c942464aa79ae89c6b8c3f857f99d6b686148125a6aeaf109ce75bd2eded093519222f7decddb90739aa5a8f6aaae0e3ad1e46802e800aecda57bc9da9727c3f6d1d7f3390d33ec288c568655bb4278e638a6638d2bcbab758c2c99b911b177019243ae1ab690fb993e4076e43ff785f833646b60945c5516a0eaef0503ff5138c95b9b0929e9a10f431e0b87aa315052d435f49f57c3f5ae02dcd38ab8d839b3fae26dc9619875c312fd5e66707926ff9c057a4f81afec0ab077d95362cbf5ad3a80b5e5e00e82e46520f5ab581ddd0ae0d0b740cd6982026c399ad86a8a30bbcb3e52efb79dad3caf3adf580ac2725ecdc2e5231cdba78c129ac4e905fd10aaf7215f929b2476dc9fe8438836de3bce1170e2446829da518b54e665b34317176b5f577f037e9560ac13a8b253b9f0186ae749985ca5fda56360353ce8c1d81ef8615eb38c83b5c9d80fabe5957c1f60084338e33ac21e51e8aa56e49291fccca64dc0de135272efb0e56cc7bff6f61e643745ffada2b11fd35572f3fd6b9fbee18c0afc4cc5673c098c3ce01679590b092811f9a17a7a961f29a2c7f33868799b98f7fa81cd003746a42a29e52d7043fa7fa48ab2bdf0401543fad9a6ca7b26f0b6c97cf6a98d5636aac72bdc9354728a5abad77a67d55f55b9cbfea14039f4e899f47b0817914ef6a15b7db809c7f8c5b30cca8b25295dcf9cfe3f952f22f06b876baa89bb414cde43316968944996ea26af255c1f3660fdf1f0a4d091818537d0e42b2dc74286338b29d2c29dba1a7c08e08571cf471bb002e9c4aea0794de5ddf6fd52d8dc1dcef566c1b2f2a7de9d8f5a5993229756c86b12655181c87f4523b0f6c7f7c975673d1f877a695768848b3811b0f5201f0f865c58ed451b9dbd07216a6f7e7bd241da28d30760c60353abb0cd765726cbcebaceb5d95334f7cf06bb56e87264e0d57e36160436ac9bfae374e61acbc3c64f74f67013e4581dd3cd67c3d3ade0e9df1b695cea2a78cda21d39f3060bd7f930b5d8530d9982a895d15adb57a6ed729dc44ccf005eb85692bc97335d899174e1589f9be56b4e1c40c44c63e25136282e1d66dfdbc0ea9d72a78a585c1804bb455e7ae2889277f4829c9c0243d1fe5b438c210bc2b3e97c78077f6e563d1747fb626568f0f5da4560c85d3f70fe1dc48881ed71a4172d6f96e498a0c3d259c9cfe39f23e40a00229f52c6e25681901df3381d53c8111200df5afa49aa19f5f584c4e996ca056efb8cce1f0b154417381970fec365ec24de57e84653ae00a1ccd066efe86cfa3911df07f6c6d2cac9bf4032c633fc9a5f6f6065b4a26528d12a9d7a21ef88fce8d9067a08892e2ace8d15df7b84929300978b7630b7ae44028a1beb5786861d5ee498681e865ba7c425e71a4291c87e0b3e73305d33d0d193d1cc9b3dce104fb7a159e3fa9a2218b2b8a6afd79ddfb090b6a2a9df3fb7609b506f5b9c5e378a4cfbc968bfcab3f4497e650438411db73d15a90c15969b62c5b5594a39c6f852fb4d2e81363e6def4d120c4117e1cb00252baba1a48e190739e47e6c1073e58d8a1c7d266d3ec145a325ade1065fe971ae788e7eaf5776aec7a1be34d76d1b02d4f7f2c506481d05b3736b7a837bdffe70e4dfb08d9a085132e1ddc701ebc8ca2844daf4c75e39eecc4a9c12f47bbeabe374f33fbe3ae6ee66982e0ae57a3220ff028cecc5d0bc1d03ec183ff9fa7e9b873404ddcbe698f65cb34ef196040b4a33d86dcf86d1b6a7262dac61812f761c2fc4afc59fa2ad2afda2464d165cb11bd01b29bef66f0116e55b872d510614724547beb1c7e2fca0a24c78ab87f97a410844a5772bcffd5d34a985cbd60524f28267ae2867e02e7f103ebc4dcbd336727fb9cb41405c9e13e39eef0ef1f4106e78161e74bed4d84b7293c077205447b1936399437e00f0584828f12bb6dbe1a405c807477a63157e8fbc1f2257aa1df4c774a577002fc433e7af4df76a11ccc0ab1d1869aa2d41f80bf8af922b4658d30c04e825a31f836cc3d740bb2745973fdce97d833ccb66780403597addb7e66fba930aa5030407dff7ef87c0b45d3ac02687fe9cf4de5792fac643d18c103a4b138929dbac8f1857730edbb8abc47721706a54077cd855f63b69ba5ea60acb3eb3528a860726b0af98401f25e64a060a57c32d2960422a19a7103c14f856b1679b84b16767b1a3011066475f7869b2e732a4d2e9e40dba00ac4e253e48a97279dfd5a5dabf1d7afc73ba1a63324615a37b6008cca026fd422ca7744ff5a60be6ffb397546d719ce3d4abf7e84dfce6ad6a5414ceecd2ee6d91addc1e0199503f53a71c99d6dec0a0da44ab929e935b11748ec7da15646df41503c76001b7d5eaf0c7a3c437cbe5bd05ec7ef0ca1b1b5193f56fe892732c97f2998849ad79cfca1c4f04d5bb401abf999c0daf2bd6aea7e9f939e61b538bea2ddc2dfa7c5789262f2e85b37c2f9582886efd496d003e41794c6b5d60162fec963a85ece85bf6365e13c74f5e592e6a6387699924f9ea7a3a270bc3ecb9a6644388791e3a824b8eb286cf0f3688c3f9295f86d7bcca2b17503a08069a864947cbe9baadf65c64f6f130cc27aa5760c18dc37b4cbf9f273641ad44d2c41c5ccc0a552624dcd76749a11cf1ec99fdfb6897bb75ec0c36fd25e652979b110632b36507fdb613a36f21511ffbd4af351e2d0dc5d43a21283937da242da5f736e8c585f4caaa2e44d8952de74671c3b789057078ab05f1eda92007b948cb0592d24fc39ef810407d19517c5a6f3f065d5351a6a59a823f1ffe515af70fd2ef23885f318f9d8ec9d926fa21b1d235525110fb3c48a425b8d0887ce5f5e5c7c9e014e7eff237e3570697e3339db7f08d7083ebf3a4b9c2a7c46ce441dc72bced785791afc71d3f32c59d0a31d6fbc3bdd51633ff712782d6aac3af62138eb39ed19e695f1638a60cdb05ca1017b62710186a87bb7c67893ab9d79bdb52fb98171c20a3afa1f059d329cf8241f27778d887f4f9232bc262601ade7b718cb036f1bdb6ced9d57f4965a4f3c0629e45a9b363b76288b80f7d0b19ca1f27223d6246d60dfa9f5da7956ce5643a6737ea7a337cb0c1a2b2c2171882d6b9c110fc779fa7b681b1117da0b50f10d54504f86f0272fee3908b48b9e697656dee65b76b030718b8a8e8301207e1256fbc725569749dae1957fabef433c127556869816250e5be5015d16eed31022c099b09670da188abe44e118db2dd3f7a91af3e69fd9fffe0f2c3a6b95430bb5702a05bdb39ced95a2567bdf8e3a774f9180d69cb59e1cdfc6e63bfc2b3a179267f8340b435224cdfc4afa22588785c5cd56d70bbde63d3b64bf1c864b5bfa77abda8974a9838c235bb303663430759ee609d3bb83b3eb76c0df30f87c1ca6fa36c78b1bf001641caa6dfdb5ccec896a6e1d7317155956ff271a797a1a9e5b3f67a7cba3c4ef6fab6c4f08ef76accb2d21a0869d1c5bd7c5ed1ce4185e1e08528c785ff45f4b1caabf6d90978850bef476aa632de040968eaa6be518f729424cd5c95b78817a1442f33966d8830226577f3de388e8415b773175561f1ab9b75ec48162fdd939ffc7f379e37587a094773384c2b48630e48f3541f91d517a79b7e04e69145865a920f7b0703de806258618ee8bf8d34c36064be17fe4c7768ac7bb69f723a2f8fd7615f55c55500413e926c83e9a6da5126058859d5b523a491c5cb8655159745d6aa4fd5258baf9376e1f7293d1910f2f43d99681d85f2351b028c9561478aa2abadb1d1f3fc47bd243a549bc2bb002b4ef74debed6519f63f65200cfa3920247fed262fb5b66cdb7c830cc6ef0830662b6d6cebf45327cf77729a89aaf959e43ba20030663a40c9c90798596939c88468a7a830e88dbb2a43b761af43db450f8fb7075559ba7f1b369e1a00253bc57e5f5d99338869a9f37ddb2597ae5838f00df17ac001a09e25354fc4536eeac9fe21b87e9d70409aba41e58ad15acc0c4026dc36c39dae8feaceb70cfb187f3cc12fa3cae4aaca891ee972a407550b4e66ff7da0c2add5fce82d9030ebe4629e1cbf6c28023a8aa5221e2d4e3382ab37274845bf0bd2ba9d9fb5d1c3479a11ecc7f244dab2dc0577617d25f0ed86bca473b6a5eb941bb1d4a79dd9edcf05d8f3615d06270cca9e1bba743da3e87bee4ea14a5fedc0eaeaf8b54412494cb4d4c817f198e9ed9ef547f3036a882d910929c8622ca30094bf16ace0ea946cac999613ea7ed9c790d72b09c9f5a6423203ad97c007305e5c27d3dd9c86027329b83ce4cbcb81124689bf0651407b32afb4e09188889ee74396bd3845298222ee8843e29f5b84415cf224e7c32d80e36eb9e22fecd8f2120c456440d94eef0dadedec53b34ff2bc9c43f8ac412db9214979a17911a1abff7ba482adf96824765d7b224a05fcf1e7c83c3562180e0f2ba0a7b6d5b98cb466e52d87219f61dd5d6d66685239f79bdec10f9a0dd1c467df8f6f51c7adfb9f83dc9a86681f355b6e653e6d52283c7a786d39dc55b2d34bcae7683432efc0a0df17873d907684ace9df86044f5a9ab08a62b9698762119918b88e840401bbbbb7f81b111ed6c9c47ca298f89c6a8bc92b0db5ba2362064e8d269f4ca5e0751cc570b665b7d5461959f9bfe7bfb2dd70fcef354ce34f8cef3bbc01d1aa8d859b7739e84a9db705c3563ab08a638e442736639a65f72707e086452fed47294fc269ff2f3056878897f181db0d192f9dce96d853d85feb9103bf7792882747cb0ce41f09818ef91922ffa3111b2e14cc9945fb8fc1facc630924b15fc9f8bd8be649ba5e22fc1884c76d061da7d23aa2489754d5c91acd722f49085efc8244775c945f3688c80a9faf4628351d54219eecfa2777af0dc842636d492724d0e00d90209b18cafec81f8221ffa387397305acf1c69e0d65cb85508ddde1aca188c6e80ebcc224350cac32c368cb0ce129d6aec92634376f855d813b286ced17525b02ebacd8e5989ec63745ec9298d1e22c3076072b3b4a4963fc1cd1f5d9c7072d9db6754f4b50da1bef12985150d13e00af7502c9e4cf446de053cf0bcde3b57384f140336cce05f5c252e5608ee63e809270daa32cdf28f5cfbd7de997d391ab8a73945d538ad876625dadd8af12601cba5c2fc1ed32811a0268ced8d1b3819b33f9d4e76e88de4473c8005ca1c1783b47e1c433137e04e5a3a0f116870b940f3563331596c29ed9274a0711defabea750f6431abd54bd3c4c680d8ccd39b48d4483f6f55b15a30e46f93029c0ec4afa6a99b66215319d0af3d5e6a587237ad37e1f1c76a9a1baebfc04ffd7a456b849bfc5baeb8f3b09566713710e7e72d654f9ee8d87ee57498a526da7c950a543bfe8901bd1bcbf744ef1363c4c4902a1b095201ee1235ded25e31950066b75f0eb9b565f352b317d02d66126cf2338389f173df9e0263994cdf75870b6e3d8c4363387a0307e9f3ad86316b205ebc1dc43f3b9b5cb8ec71c0f88e9661134985aae91d30294edabead62798551ef7a645c28539b48f3518e66d585fde08a3989b288213fafca4abfa551e5ecf950bcc8c679956922af3b6ed72ef690a640980f95cbae09042be32ba73ca8bf8e2c590c6bb476e943ac0c5a75098933a11008223b72812337a9a4df9c7b615d5efc7a4757fdaf31a5edc9777df1008dd216422df1a96c3cfce623c19d4a0d97dce23124e438c7d22436f8d2df470716a17bbd594416cbec7933d5fc348eb0a28405a722dcd0af6858854d4e15832ab2be1c25ba913bc892924ff679bf00ea7484fe18226d9fc35c318b927f982341e7e90e5ba88f186070924286abc542e77ef59c23ba069b9bef7ba193e51d5c432c3407e4300c1d0960a3fd5c9f3bf05c9ce7977ed31af991a7654dc5f1c83b5715f1cca40bf57e8228e75ab4ff238addcf27beec8d20449fbe0bb904bbf06cd88196e932f8af329f1bb9b8106edc2db0001e74dc65413e0c6f6aeb1afc7d3472a44fcfdaf91b2ef82e1c4340ea65f7d1d679ea3352c9501eb14ac959b0d387825e10ece72cd926b3677dccef80da7f4565cf9f375bcb9d3f34c467bff8e2bb16078d64fc67dd5e22eec4fd4a9c73eba6c29285d50be95dccbe0aefbbf05ce1e9dd14926862339bb5ddf6c3b17a75f8aeb8579dc1dac6953b31a2114b18e3772f4d93e39b42be6b05d12f3fb5636d124d6515fbe765a486846bde746b68fd7bbef7414cec10387ccbf561cc8416294ebc41279085464228a8bc77343caa3dcf745ac379006131a0efa397a0418c0524d7ff15d3294e48c5b1ea3f3a990d549809749dd7735559b039dabe369191eaae525a4f7fb3b517c494aacb71f5b682aa545c44760cbfb197221f00ab7cd36baf56bd65fe60e861644e542381a2284c817b39871507b8b939cd9b1b2d28fb01c53a00a07221a5419a7e016788557ec957ea6b37a7475eb6d4579b3d14a5639b9ff9b4755073e1e30fd59c39ba2611df1b0fa80acbd32dfdd1bcde2a37e7bbd2c5b56c197ea4f7a08a0b6fe27837e1f8f599503127bb534cdd9237df18126d499b41fb53f1216ddfdfbcb4bd3a0d02fea8c197cc1ede3a1acffb57a4eb671943da325d996868bd95afc383b190a3ee14f686e2f849cdc4825d021c2fbc6f69082002367028f82bab0f57c6cac8cff99cab9ac0be1ae46ee88d73c4496d542906aeb44249391ed04e97034814b09965824287805bd46aee406fa085e4c4e62314a36ba78c78c8c1a8374c762cade5fe795917c02817fb99a4f914f8386c72bf685b9b5033c0c44af2b9f952981ec4692ffacbd6c32ebbb927747ff9f8f54ede2ee03857fb3959b58b12e651ddb798500f88db930bfebdb03fa21ae2f5caa1a7ad4140c7721fb168057da7de0d4eac94452ed32e3ffe02375016ca623f6dd7d97287522ce99ac559738c7a393926bbe1b2f7a71b4eaa724a3048db64694886dc104a2b5fddd6357659552be02827ee39d5b2b96b2422560c8aea6d424967a5c917bf4d125c897990a4941aeb0c1df7035b7a077cac5288d5387692ef825687301f4b968544c8ac2c8e2eac38b43bcb0da5b431f35540b517a1eaeb056b3a49e1dc0229d69921485da17cabf88277c4ac704c68039eba5cdd991ddfe4796021bd7a3dcf68c9bcb39c3087dc7feb572b43e5a50b6621d9c2b4aba54f2993807f2ebbd3eee5c52e2236d3f84c480d558bb5e530fa4f104148f9d0b8b1450c1f15c9fbcde30a8105cb15810ea56704ae008a1e1d36ead76e5d9bb981a898f12e4524f2cb4c420d604e920de8488e2010af601c95dba38c06f6fd457355f90a5520a4cab1b63662e6563fa4e30d697863928233adeacbc2f180777b577761aaf95a99de75ebdc367c6aa2c29e6344ab9997f34a49c1fee3af44ea144acf419727b3b0729a589ac7daba4e5d5e56d744caaa6dbb929f470edd68e41fe6ebd3f3d223f431387cf7b8b3507325842262201c1bf17c13126f860a354619970cd028d9bc29e0c47cf4a04d6fce5f62990cdaccaa679cb5671d839cf7b1e79f30fd23e2a4168b331811f87e325c2fada260485e97596ac79a51a1567b6b5aaebfd1fdf338b147e00dc18e451da1851adb37e357aa2efe7b1288932aa060ab8234f56923235f31285f66e7291bfdc44d14d19d86f94c7e98458b694c9fe6217abc788acae6f54b1f7df6d57b043b201b854d5ee7ab8464e8edf1b0ede73f68b8039545f0bff1662a01fa8c28d388c5d2c8a071ea61bddbac99ef2a0800d6542edc73e841cd60eb12f19daef4b512911e2bc015da9d618e82866eaecf4fe6ad4b2110020a3aff37476742b770ede508de7c0d0f0c2d38bcd40d0feffb440b2fd7e22c30daa18f3d9f772aaf761973c62cc1f20af3473bf3b4e7987e19fec3452f245339a0efb16838b068204c5c18a96731aa05a0b4046e55c9c74fc2d1a63593aed1c10855027f893517b19660df20f8e4f26e8141a19c2b4998e1e64c4350b0e05269d8efd37e0610b16caed7455cfbe1690d14fa20c5cf171e51e0306c01845ea3e65c11206fe62b61c76b8cb848cd2fce0d6b668ea9279d0a108a88963039d21c7d6ce0dadc8c1d1496a5433a17e90d16b4473e794ae6feefdd9649ad98306d7e250d9813da0ac274dde013d1bd5267b2cc9020c49b7032f539d4cfa54fc791513e41cd30cf25996c8c1c2e44c98b03edbfa67606658bfbd63f11d9944add1a14081798e8dcdd65fce2278a401cae8867196f62286eb981867a2886f2c8708a7b5cd852b3b9391c4e24bc56be2ab06e7095fe8f1ae5f99a266eda6dbfdfebe2b4350d6000b9bef6e0d63218770c221b371a532ec9219715c24f5ea0b1b82ad95a15fef5112cc61cc2c5010d2644adeffbb6856682fca6b3a0dbeedf23183f8f9e8042472ea0cd08a91e2931e1ff1a909d085b0a10fa33cfb87a3ffe51058a2fddeea22e0f94291fa60a4af8e3db8cb2cd32b672bb713761ca2222804649d5e1520bacb85003458c8d06dab50546adf3103670e98ea9959d22499bd783d9621e885a9d48853ab1dd92dae2678be432899f1eade69702f8c5df3de7969b40473e3039aa9666e51af22de30db0de2ae07d0ac1a36d0f9d2c09486a4b080091a145dd2083179670b538c96f7e72eebf69e52db990bad93b3a8cf1d325de544e467b326f2723dcd607087ec5e314491dd51668e4424d4969991818d4588841b83efe81c6092823615fe2e40e4148d06b9132e312e7902622299db4420ac937fd4b4b77ed275d6ff40530101b07576cb5c0f8b739b27b942201b635de546cb06ceaef1451cf114c0f8aa32335db053d36718e38ced8e4be7bb9b4a67bfc05032a5508172adf467fe6ce4496ba849cbe1a2931b42dbce68488dc798b2c9a67fd02809430116876b751bedc1378d9c29f509950af47818a34a50f9066b55d7822a666484e394249f81378b1e1380344b86de82e8afdff1b6d97c0b2084ae0ca8668df443cbc5591e2f65185c933df9a5018c3f0e9a14355f03a2a5ae32b2d879872846d06c2006540180de839156a3a50251eed7453032177290b92cdb532396ce94092e74a709a379517c8672a55026a47f6657b37bedc66fdef3af0159bbcd45b2200072912d1942c0edc434492197f99b59182380ad87d2db28940a745247691bfb9a9f0a12030b2462b0f2ce14d084f9338aee892f74d979212bc638d53e8d26169c4c6179f768f6039e787474aa688d30d289eac8e21dd4d59096a9464a420640b61267a4c85dc1ff99f7292925277551b016d8e8fb63c679106706e463e3cded47598bc4daffa3a92c44583037363b32bbaae53f5f7f86c13fd59c2f9ead7f6c8abbc5f825a88df24301028323e3eb1781da04e3fa078dcc92405680c98fa67c467ebb36b2707653aa31cc5db687a84800811d819318dcdde9c87af5e201e1b44e4aee1e9e191e793d9d500a04715c5e0c356681e093b8da708035b61d6d819b616a1af66afdfbacb46e6e3bc3d07b8a4edbfc8053f4d56e0b56f5eebd631ee86996884481cb0c06c7d11e001dd37934c02902bd4e93f68f8ad342f87a71f1c78dd2a90c7b1299612cd737b8bddd0b472ba16eca86f371f49005e2d351acf96396a6d11faf7bc5927b6928bf3ad208709c067c7c4b2fcbc40f436eefc776768d244b9ea4022747ec5ee554fb9c2045daa5f1fcbe38de7b1c03d8f9e3d38d71a3ac37f611f5571fb9215fd5138086c4b28c682bc9516bf00c386bdf31dc73a5038cc3eda631d36ca9c59aec6b4159ffe69f8f8a73e91c8b7b84af693126334eb2c4512345b6b46969debbb67674ea5aa464b08fcca83b8e4450343f34596e0ed30589d3973605ebf94b64e4a80320e9cae3939c92dfb2ed361a8e239f8e73824ed2dd62f820b5649e6e6b63b133bb0f4278322e2702150b56710e2c9499e97b601ab85e83f7501d57be8952724035d36bed574d344576f0d15c65576d46c441ac8d3e6a167f84040cb3c53eadc1ed194627b61810dcffec66fb0f32ff493a5d70314e7825fd17fd9ea747bddc4402219771c36f959082048c8de120fc96558e90f231edce3a9bea5eb0f9692d533d7429a4a8972fc0ad4eb09ebc6064baac87da12d42d69f6f1b3d6c9dd327f12b053af827cd3676cfc82b7161ab5466dc41808a8018082d4784359e40699e9d76cacc180d44bed009785ae954a3ed81c8f751262d3b58cf3aef32cbe88679d9edfc3686517056bfd133ae2d3d090531274db331b4696e324f5e3f589149d0918d2340f653213dd9ca8545237b16eaa8b96d29a3367973f0cf82ca04de92450aebfd5ad4a1e37b8bcaa9602a9ce03979a5ecc7f19053c09e97106f63f053ac0587be89fd993655638b83bce694eb33f8b1c342b2ead885c9f0d7e3e80d1f9d890dad939efe2bb3ccf6ca9f365365a098aaaad6b9cb87b400cf90f2d8d5885059c5fd3e6cf2f02a915796a44ebc53f370d80fc1f38d72b70c16a14adf0cd0819232570d8e7e6722af9df01ecb73c4416b515bb8a83916c5ca0c808c4c24f5ef64bca53858f86719ed4d3c3cfbe9934b8470b8b94f69133e630e77badf00196f2ed40bfb9f58a06007997fcffaa50b0640463d4caee68e250e29e327f7b1fc6634932e71468b22b68fcf18a4f09948dc9c72904dbc8b7e9aa72a209e6a5f659bce57a8877222c484774db38892e02fac501d7b333dfe4cb968d6bfdb212d68b219ac147bc53860ee3cc8ffb2d3b60612a3672ca8bda9a57f9f76c8679a43db403934718d6de5f8e5785a0912a3af4cc6d62bda8c5cf22f36ee152e2674d17a0714c1460561729ab1ebdb42fa2f93a3550bf051356ce796a90c0a6c3bafb14692f7577cc3141eb05302c8d1b7236d9db1f12f6bf136f88a1e42c3e8fc61b140f6518d1d4bc560e6ec653c25b0534d53222cfbd4cfa88cda5100358ea76f462b82462486f41c4df5ee052613d23e5312aef78425d62a0a5adf8ca6230bdce6fcdd938145259cfba89f8865e2817e96e8e5fdd3cee0cdc3c0f23525604bda75095a97b6e0bdb1ef642a08f1dae750e7c3a42e5020d78431c5378e9e05af4867c13fa2498c6ae20bf3d95d1f2edb3a543cff3f4974bd5a32468c68db07dad00ec080c7015b757ad77f830ce5b5ac8bc3f18dd0a81e4e937ac08d812dfb2c0f75e2b62aa9bd4bc1c2602582834f1ee7ab6ff98411cc66295b0ebecdfd815d47a4cfe7da63072d6d48ce6f4bd2fa39c6ed16dfb2913f8cf2c46945cec7de3ebc733fe85cd10813bed7faeec2fcd3b81a3bfcad09763f53e0c0ca16c4d59112177e4ddf122907de9673fa619eab4932bbeae0c5dff5cbc84c15c10f63278f94e721a1c19ca7fc5b429d30173f6d8843ba99625a96a45a04a854db348c81c623b34ddf3a9fdf6e642bd3fad42458ee63839b045dc1c112765489f8076b12c3980435497d25059000fe08a3d4a55e0fa479898396200be710e3c7a19288c65d4e75c44737c9f6516700b898f50e3af35588afa5bbb86b6771c297918cd0043faf548d554dbbe8f3205734ad25a378e2a0efe732395ffef116618f8ac93ab3749039fd05cc1c1c147c33da9c6a7e09c11a8aa5cab65748173738e95ff4c10a8509b8f9de25f4914cee86627b7974385328c52ee711e083abf554328117339f36edaebab3773bf4ef6679f401da9a989c070b29c5ed831a6e9f842524cae4f70d6e9b3c2844d94f4280876b45380af23f24fb0560875698aec09b24272b8b2824f00752d147f6706a2a702b20f7b4532dcd28805a24d979c53850a6bdd83f3a9db06ea2804cca41c3a2101c9a189d74eedcbcdbac62b181ca9ffc38ecaababf5539e8e9f5a4e24f3f6c747f312607dabc5eb0207a4e011819611333cc96ad9c37c1f51b346086ecc05cd4c37acd80907b245abaf0c358c7d4af60af416404b7c217f0549fe92c354078782eff80672bf78cd8a330e2a575f31f5dcb6be09333994597448da88785115c49eb5e3f274f41795aec04e852feac41471664fd98085a8b2d8648b8eb78aff5f95e66398ce28d25a043e3c897720dfcb33aff8e690b533bd20279120c5d52b5c64b3ebcb950470835aba49f7a665e58bdbf44155c6ecb5341d0ba09e29bca9f71577e0d643b1fc849b0ec4747aefc1a6dd094e5dbb47dc8275c8e63901f9b614996dabad30e4159c76b824aa689b7087a54d0a4201ae01f5f591000527546929cffc9c744b24383d6d64b32b7569d2ea65f00bdbd6f7257e42b397f455d35fc59622b4c4548361d717af690bb01566dc184466199b948c82f01a1aac6ba0c53b6eddbd745ad2c4254ca9ba9b8e8cbec78d2156b64abfb82711e37308fd52c6cc7412d1ae8e0929bff1a52fceebba4d85d7ad582fefe4e176a7bf9543f11ccab0ac9ea1abca03be63a9ff54c5b0f8ed29ea6adb8210f6b6fd7cf3abee694161a501e03234cb0efc6db113728f11b689b3ba5b11169aee1abaa7e1779187ac3185bdcac4d57f2c6c33161c38a1d87bc2c2195fad3ac5a1cf3b0d5c9c4f88c40f06b1c872e39acde82e1ed61821f2092ebb3af89b7a56a2fd9d27847f72facacf6ff43b18b6750654642ede52d273332bda26572b5519de990e30c52ed65687534a8a85edae28f14d6f802970479bfaac62dcd28e1eb8718bfa96429eec68e841eb76c0108646b7b877bb4535389100474a4eed2b3bc2681fa11b1180f1c02bdcd9026bc3ad0cc20f5c66efe238fc1559a692d278bf3ca8889e12f4f590761ec641f8f2eef4acfb3281f17d638610b38e52730eec286576a598bbb94f972873a7a342ecee7c42c05372d5624c59ba296808d014ec4fbb64934c0b46db30b19c00327bc678da2bc08b5d83040212e62b22b8a1417aff74d80fa7e2e03c91de134a1f38a4c5d9e2ed0c6bac3f8b548e5771a49cf50cd2905cd81a7f29b5fff9d9c2dfc7e24746a5e66adc9d6d897ff7604fa79647e099792d77959a7d0675ac1df7d81a895fb96c9cd8e462f735955068a33c48a35b36c6043009804c0b375c9e641005f92964a6caadf1b4cfc1b5cae2b940c3290a4eb7314d381aa1f60ed3ea696865714b2eb8f3ef7b22cdc86083eb5f5474c9e998e3e6cc7641940d850901fc67255a2f83fa0fbe8c1803b61e2555c11aaf8aaa713c855a120d4f0486963118e2e529edc21b8ae972bd5ce87ade0c9c322f2adaa64cf867b23b05f333b11883c253499036812a45ce2369844e9c0a18d1093d541f92a4aaadafd4be33e1305d8c644ac861f2ad75a4e03e1e1f7d8bf7a0902346f67c7e3733cd29b826a6d4ce3324047de5e2156e56c184b594730c48c917e7e83f64d80ff2bd941bc3a6cd257b7e33137ef52bc0e039737a8f378d2e381cceb18c80cf16ce26c06351bb8e98431209af584f4d73ee4628a51be433f5e10e648eb2c80a40588dba312f0738e9ef275eb8e3cda23840bb2a953bc4873a1e4cfed97c6be8ea51557605a02c852d76f8cb2f515e152a2e1cd074f206b799efbcca654961651a49054ee904d52785dc61f1a07f44f8686cd9936aa8792b00c6c0e8143fa8b658cb23884bc3806897a5157c417434d7176ed7ecf85a2e15e353f4e5f6ec432703c4ff75df2cb979518cd3b5f2976f935039557025b11d4a20de1e616aed81f42323008bff680b200dfe62ae0fa75e062f3e71e02e7b61c5caf38965ab55801075fc7dace98a68fc965480ba8993d37a35e58c6bcc8d2540dbb5f6f4af44bc0f994a3de597c41914a245e25c965ca86fe1b046611675e9eb33af8345b144e6687c93bcebce41bd40c4d134ea661764c1a4cbcd3ac3517e54559171fc2d2d8047298500a89435b95f5246a6746d71abae955b5957728a51d767bbe96b2402dc3f268c7268eb6dce2c8f387b59260767f490ce18578f4c2a38d77f04c3a0f6ed0e65c8e811ca74aeaaee4312df53161dac68fe404997598e6bcd8b81f8e09cbc0abf9a389a1e6b121d601c43cff4cbc8499ccb25a0709e71031bae9fb6992f9b3327596c45d359bbf66e0cb93f92834eb2c1e9ac98d200836dc94dbe7a5c0d50963c168ff3e8da20453d4d8043b6ee672379bcb39547a26561d62b8ab88b04e939e2bad3986b28c1349a60efcbd39c0dc01c5ca7b9b7395e0fc738c4e6b8eff8061542bf163d561be20d203c0f11a3e27c51c99345feabc1e17628f1c3fb668664862d84811514f3a7f76e4679efb460dcd44229f0f72283be82e928332201ed7240bf945cdff7299295e26c6fcea5b23c9028d71fb93ae7080b2bc87636c9b1d14cb03687b6a756abb97d96c39557a17bbca0ac4937366d6ca2471fb13a7bd20231e3f7ca485db2bf3c5fc545a5c3f2afddf8ed4fc1481186209af3f03e73ec118a43b066884121e4a220a871650062aa67a4ea479d32e052a9c9d93618909c772fa59184146a2fb6a86afe868384b0e4892a0cdf096f4cd300016ebfb39b70b70d83274df31f04e2fa194e7e780a06e67798b52c970af387d09a136a946be1f6bbdeed2c5e0be9b2a67018257424699e0c1fa9b5947797bd07067d7f2d368ca99c9d9f8db7830f138fb04a816889caf4b54db936320578a314bfa47379f7a71cd092f0446251598e5004cc8a1c361fb15c8fd4cde39f3eb892badfdebbe4c459be4d034387d1071b4fe1e47405900db88f952352b4937475660e788995d560210093f25f76ff3433bf5254ca05bb84026110f87ee6e69c900c532c00ea821d53bf3f03c13ba7718b4994aab0e9e309837af249ba28f11382a13ff75bc5f902ef1a5d3cf4157ad93d044059ecc5a330432e5b5afd72f098d49e92a94fdb88c6a76fea42211198e6468dff07d6668025033010eb69a4cd2a008adf7d7b8fd21e200c5dedddd7fc2a9400f585f85f8b672a1828692abfcd17ce9f8035b7b007842a25dac48ca38a66ca7aa91200a5fa181739670e429bdaeb49bd17f6d13dbb60079f4248dfb0e0c3df3388aaf6fe8db6bc8dd2c5131bf422909458e5bd33acab2a124b52b162cbd45618c7bc1e07acd8a2d33952a4d8efa05934cb771609eef9c7a875ba78cc6e9be6ec3ae9d04b3f8d22a9aadb129f663d35c8f94e79d602133a99b061d2a9823df520ae7b7b71988fb6b09c4e8520214a8bade57389170ea4bdb2bd960e57c10778e458f6a98c2449604b1135051623a8e13bcb796eb26c46ea0f5b598e1043718c6f2d6ed06f9adfc8e01f0ac818eb0b2bb7e71d337a21493a0a1b37abb07c028bfb1806780eae014c76ac79057c82d2198810530ce447c7768205d49451cd510e55107207536ae65e384133f8ff73c1be494955abea99bc84f264fabed95e4fb14e708c1575c922cbe1a1cb8976234c7d51931651b2f489b016122e927d6714df94773e5de14a683db554d19ee91647c54fbeb1afc7f376b2ba84f666d1507cd08bc34837816107cba5a384c5e29dab44f400b127f4cd884992233fdcd59c757c1d233c034279d29bf5bf3e98d12c441215a69c8493cbc9cd29fcc827f2e7045cb69d1e416ebc518c49adffc8c532e2af703a62b81e8aba9fc0eeac78d7573c211a4694ec4e573e65f3bf2c5fa6d634ffac689a042aa576970a304fd4f56ab6ed9d5bb5a77365a1acc1cceecc0a47e5e95c1dd8a1e1040845575a0b72c51dc97e4d21532d31bfcd8d7683f658b9538f64718f1e6f87a4c890c2e9fbd68c853f2a5ca8e8b992c3f9274997b83fe9dea828478ef84083e039c5b617a3c3c5a2ca99a5357ba318ea97fc387c206fc7fd13250deb5b07c1e971cf6bdae516fdc6106bf7d77429790b0495a93766b6d52c6d42613fe2cacab15d44d43c20c549c299d3daab5c0abd267e5913e4681298372f6e74887f2463b1443bc3e260dd22d81365b87bf0f6453c5368efe107f74d2631f0f5a332bcc3972658272f324fd84f277f04834e9b2eeea792f1b489e57d2f183b6dcb9386c9dd1f82669b6d380677f8abb65aba1b82a7143fef9c992f7827b0bc6b2f58671be13b992afd7bb896cacba4105ed1e3f25261a81f2aeaf030d1a75a35f275da06c91408cc9f54af1b6e6396e0702fa2084169c16f47f01fc38250fee48b1891dc1691cc0dce6da153dcd5cc76523c9d8d66cb5783bd77b7a9ec1db47d33c4b934f89628d897981da3caaa0cd05ded651dd0e72cb5ef423e9d22804700615748cc9fc2839ca686771bd85400fbb471a11ad567ba75e3c2d8e6146f45fa263e83091f00f4402d9a5f8ae86033ea02658bbd8cc6df9e658bf455e5820bf9f5ce6ffb6eac7b3a6f66da66a5ef5fc8a8049e92f63f882adb8e6bc93da51e9be1077b75f1384235cc8d9eaf0a6a9fa215a4640f670442c384b68ba2800e99c7d5fb0b8fe33ba482c0537e4a6de94e75943a21c1fb68a18078561684e8605a0ab3f5194d816e8e535da352ff7bc261c46fd83863eac8bc336cc64d534650d87d83c88c7586472e2b576334e2d108b00bdd2546956e1d8db09bf8435e529d1a0af4b1320e57a2df93ac45ca7f0e9ded51e1b4ce64e2bda6428e8412e90c5989309f02a453b93577890f7739a692556af704628b149f498b903628458c02ada3a6206070a4ed9a93ea3076fe6b05861ba3d40fabef74e5da72ee7a3840d94d728d4532e8dff54b702f1d16fbdb25078ec44165d3a82fe04bb4d3f83109783410e079e8574bd14a490f78e7015d627a584b9526156a816d9dedfd60dbe620c13f1fed9d0c69326fc99b38732268406cd22bdc389fd8e3002fa364b0424f5e420a81270e207b372f99edcd7e786643b5c2bae911dd56684bc8956619c1a8bf67e6dc645209e5b1953547eb6ac7f66d24684a802695db36997adc120d9f90c3f3dcc312dd71b85a1ec65cb6ba5d6fa40201ae7d784313c332dfc5e781e817ca8fa83b00de756216b138c8ed4565407320517da3c456f3bfa1d0c19964f086358837cad4477ae0eac8ff6163ffafb765ba01ed7419aa22dfcd6d62235270f646ac045f2eaf9a16257900bce53f903273ea5c5a0f03575892bddabcb139416e21728e7c9f99710fbe5cc1e014fdb99baecbef52651f750a0592990faef3b970dd6de6aa87e37e8441e93e008ae7bc88c74e8c0d8fc5344dbd354d4aa998d3d6d5461faafc7ba8147a311b08c6f21e2d493ea8fec0cefc20879aef2cc197d8bf557f55eaa1ad961e2e16e6f4bb5bf8c8bf809631005d9ffa789d5b778b40b48686310c945dd42e90e765112233fc49b5e1f5f2a012cc2d23d507e2f4a53a1259b3c9d40b004641579f23bea52d7828f326aa2aee9942f68a1045c7b4d4d7b4818daf4e77ea2aa715e526d03625c066eb9cb60a8e306b53988f27833de957c2f133e664e8c1b8041439eb9ab5a370401089032577e641d3039fc55f3db7bb7be95f1e4473651121f5f93ffbeb664b8a775ba8a1849c8c757bf4a336d2060be5886134b962812c464ff759169783e2a4052339df8c01ad4ced970600eb89bdcdf47078680c48bc9c41674a4d6610c9da9ba6db5deaa7d9bb19197b217ccb71cbbc44bea3f7911d4331d97a0bd40e44f9fc571ddf0907177ea39aceedb4a183d88c42bc086ee8f04b577e0ae105b8dabff573427755064428db8073633d9678333fd5224d92e3ace1351e3dd46def7b7b8a2a62f3c4521f63002f7c18b110e5059354486f6536050766f1e7fbb0d4066ed576778d7371179c8a4f1a00339bbbf1324173dd648b174b6f91f8c2f1bd9e5bdb5fd46c8877c586d4330f4e9f49cf42111da3db7140f15ee2a71db31345188834575313c5e2c7701b1b3983d67924add51cb95cf5714357f67fa905aa3bc8873632931466cfde168897111ccd475665b2c78712728efea7965eccc98d628e440b6a473babb93e04d44bc5626106d848ecc1869631a44da50d51cca9a0e00395df0a2d3a9721862ae06da658a3946c79eb4207d16e94aaf013d76f47b74f245d5661325373b2b728479cd319d008557ed565968808784eedbe580d658eab09d35b50098579475c18b72da5944d274f504e00035fdc2150b7ee47ff8e7fd7f33931f4a63f3da953e70c7b2b2d2dbeb02e23b16abb9b164637947b77465356c76c5a528c2fbf1c61f1ac4b339e91461d4b04b27a2d7b160734e07c51ddcbd4e2fc01aab07d7f93b167dc259a65bf9b76ae552497d32f1cfb16783f6c3b2bc42ffe22984148d185fdb7c5fe1f56572d0842e26851f6faae1862c0fc9a8afee190a809b3df8cd25460d5905080eca98d04635e0c8f6830e5495a415f578770f3ca9812699022782d5047e91edc8b1ca9aae1bdcd4329697d4fd70174314d9a89a399147b65723f649b3175aa0b94f9517c06d43371a4eb3c441b2b5dcbae3fe19a57fe68078d95a11a67cb94bf09d29a4195b95a133f35240a30e008503e6ad51e4b5929ce459476748da2f532f91cf2a1a2577455ae6a7423bb1dd7193f8063e7481164d996c565878f5d22b0b478e832e1cd3146c12556177ed76c5e9138c0b66cca5fbaebdf199ff284876e1a2680a56bfd58f4bb54e45cf92c875220dbc21d7b44ff4612e03ce8179738bc8cbba5d795a707e77c3ca431fc5ef77ee83eb7974f45a1ace9eafe466056daaba6b19497ea3c07077404ae5a22b71de11b23af66fc453a1cfa05f28cd4d09684ff98580eaef0ea47e53a1faba02275c7362b2f8c10cd319a6a9ce77ec46dc2c0e0b4378a1520ee2c0894e64222d977e118e8b4d732b6e19655a557a7824bb04b8df0b0841727cc45be07ff30f71c7f702a975d6c71346476b0c63f804eea816734180538be014e1c5ab65c9a4dfc366311218bf95e0d5da9066b044080c2defe4664051fb544194745c2572f0fea9090a72e669ccab26c958ccedc0f3c74bf1375c95bf8ad4b07651c42b477243e6b4506f4d3fe9775afc13c51e1cc5ce8be13fda938afe0cae5b69a527aecbf403c0243dbc7e89046f3d224e4180542fcaadb775e5f817262881e0564cd5b3c7707a195aa45ae5d72c8c45961e108b266c0a787b1a7df42ebf94dec811b1cea895182aefc636d7ca0fbace8983f03210bee66d21e2e0db71214cf0f8e8de41645e0f345c951e76951f6f88fe961a8dd8266a20e5743cbc079ab915a1dcb25ed05d56bb12929803ce74d5f10aba087e8c480a95210264e90728f58be00561e767a9fe467f6b96d15535e2fe8ad9ae102de6a62f47bbd025f60f1378ec7c74d53b60e82fd6ee5da34dca71a60638c429a329fa6c006e305fb4e5540cc5068fba024b7252d0c1fa6cb1d92793d97d3ae4e072b95580e686a4165d85b4e360aef2a48e2302071dc0dfa78824be223d3d43c23cd8d571650cd52c3102711143e99900bcbbeb1792bbcb2ffaf5e7011bf52ea7a358121ed1a93dcce41a0cbd009625e1a268c243693dd5cd6b950695a88e27b427c51bc9c961d0d795762bb6ddcc2b52538b400db95e6d1218ff1caca1126d115d73c980d436540e61ff8f08dee9a7c8cdd1987385bbfd146bec72648ae22ea950b64694f00919404780e1e978b0ee5959a6ad58e4961182d41dd6dc7a796cc75909b97cb1e3629f47f6555949b015eb27ebf2c7bdc4a3cf1a1470c0bbed04d8b3234aee52fd6563b9de34d14faaddb00aef5e0eee3d866078fed1633e5859968d1ed8729ecd4c611a85a885d74640fb1e8e522850cb36e95eaf25935d4e75fd8b6d0e3209bebcacbd10d98e68f46ff3e25045ed9294494458ad6a255b4c46e4d13067793ce34e5ec56ac1603ac3c41554855593b13e082b4ae79f4a650a64b1ba7905663ed6c9c44d2638fa3e9d60b29fc0fc571f8ac3c1338ded6dbb268851ca045777ea046cd58996ce5fb3987cec37a2151dcaf2f0c3da6532310797202e3683ba12ad14a3469eccb68967752c37514d5ffc18d69f16c3e2455e4ee9a06b758159cd09512a6b443be425419c8a163b89cf0a04fd5ca225616cd9ad8e03cc0810ee88d9d56bb2bda0b4e7269bc437331644b7baa53b88697cc2a9d95e1e7f12b9bbe0c50372fc889428a06f592f447df063cf1eb915d05715f3c0549447628a2d80bb381b15ae04d9ebbbe2a309ca05a99db25fa28aadbd5b999a0d99d0ebfa44557da44411413a14f969bcc2c2c5d37860d338901d09a8d9609e1f45eac0bba55692cbf9fcc247e408cdc0decbb86fe44ab54593802a0654c05cff6f24875ff31cf70593daaa7487ead8dc8276b8003cf1e248ae21dacb7a161d864512a8cb8b9de3ad2758fc3f349d38a65b7f1a852cd2a5f14edd74350911d44033d28b7fd2d65dec224c1cff40339e2195dda8bd5b08913cb4dea9008929c3167b9d1e02af635636ac9fc7fea95c389d81cc79b7e22966a8ecb4263a7fd8fabf8023253742f5bb3c5d682b83336f80fcf73d54f1bdcd4316930b8c4644315feb2d14889dcd62c3c49d591feaaacded62600fa7dc25ecd4b8357d1359f29ef5ecac2de3a84ecbb6e5cb8d7aac252b53b33b44dbc1659dda6b000a0522f647f11e0a4e1c1f6e9a7c9af46c7753e68dbb40108a9a996a70f9220cec942781280756bf5ffff088dd6e201f2fbefcaa7b335624a27b8fd65dc8555f6fe8e5b599da6ec8b94c300008a3dcccd77a7dc26532602e2d75b5dd361b66a653c2ebb7b17b2e22dae0cac21a3fab56d947932637dd365b077c813936a6dea6392df706836d86965e162e1d0bba525b4942e1470c5e697696682f8ed4e9e7ae1daefddbd3fae33352716e0fa3ab2234946e320be1df204a5350fe68fd71188d25d37aa360d8946151b0344ce2fa2ef584b740e69836ec76a6d282fd7bef08a1b1c783c2a49f608778360f10b5e50371f3f489ce232a18fe6769969c6f959faccc3e896cee27cfc5edd87f3cf3c3467eedd9365b15a4f7fa6672444b64bfe103a8ac6f2f3edb4ec8fafb334ca09d1102e60d49546262498245f41cda23daf4f552c8fff517f25d0e2bad23e4860eca1452169cbdd7910244b844ae3ff37c07d1beaa0feb290101ecf3c4c4453a4f719f1d7d3f2bb7b0724c160fbe6b3f05b0bd5cfaa891701b520d6e778bbeea3de6e1e7b772b7cf2702aaf04a12c3ada0e1d7f1c431f64ebc0edfe2fba35fb4755ead3b3674edbc32d4cb7142694f0c3593e0ffbd89c70b8dd9b3afe3dc4179a868a4e0de05f7318b7e0d043d283977f4a6ec8fee2dc83e5dcfd1d4ebb4a1a4a99c9d08d1c506f0a7b3427754f440493088ab052f01b3c32073ed60075ecf173d96271f132d3620098e7731dc3c59bbce22a7e23d5ca4f22d59a069a70cb0d9d7870b319eadc9c9dab4bfcee1f070840d7f8df600c5f2ca301ef7c486cb87e1b79aeba30413e7c07a6fd2c0b476d724a5d8937fbf36e4138ef22163cc58494dfd055a0a13c56d7c48800ccba7ba1bf38e046b60780081ed5ae6324cf5daa2417471bffaea1f6d0dc1a57e678ec441407d5f9ad0b85477d8e52a865823c3f093f07491ba8b5744ab9b7458faefbf660b5c39f0471336a5bd6a5de0fd47c30892feafee0caef3e56a67cfd6466876589cdf831c0619f3738578cd6a00046171ec5a3732f4a135d0323846e80357ab3ded0ad7ce4dab9e3c1c6d6921bdf94a0245e3e8c9b0e9f471cb11e87c0c42846bab1b023a1effe07317380f224a7e12253761c09958a13cc67e6f34c6e5bcd76e751f9f15ef2585c5799761e0d6befe86a095ed5920fd682e11e60b479500969d315bcc0cf9050ccea1c056f2868e76ce059a82843d0e71f7a9069e62ba807b4fbd0d9686e772a3d6d78a8bc48041ada116ed205bfc65e586083d5a3baadf1c4ed23ecceededb447a75b05cb30b311a6b1f1708453e5e19d8f271b8257ae5b3a232ffa83b4402505617a8b3bc6b305b1c2d2acf02185e3ab5e93a797b0c374faf35fe2636ae38a4dd6b3a68ef14e86141927c6a0914556c06a867b7ef2da9fbd588e990054be05da1aea9ab1dc0ea385349df17ac90570ad425c1aa140e8b6bd48029fada9c73cd9948f107018cf9be1ef163c21656f3d9744bcae7a25b13ca22e5fd14b39de341bcf67e306669fc84a5a3c4b8dc2c2142b9d1cb9ca7428257c33abdc972da0dcd02374696b7f8640506e4c6c57869d060796f113663c546594065232d06c1e409b6a51dbdced9679bd96fa6ce3bb329379637871fdc64ea5dc47c3616e72d35ac61ec671cf47e0a52b0612fea26a9821f8d04bc592d767b1f4b1077fa621e6525cf665f1381a8f6b5cebc18718ee0aa35cf5aa18653c0349557295cbf59f2ad2708621b8b04914fc46a5bdd41c715782ac1c3893d04f15e8b1cf2fddecc8d995746091d35d90d1520c5c0dcc4480c8c1be671e22a7ad0d17ffae61b86d70554df064f61e1c70bde665070428c1ba0995d172d9e372fba8514caba3bc5b56d4f00805caec48f00c41ed4802bd30d23744edc92d5f11b563e01a59ceafcd1fdc611d5ae1854e300a978c28393eff801c620d80e2f0eff95da35c2b288391d6ee0209bee81f1ca3c98a6913dfa32c311b7ea40f07f875a22167b29db30bcbbbec739b53f7c9bf0f5513efceac6478da00c48ec22957963d71670b24927d8d38400184e47fe905bf31ae74256145165fa0393d4156c8f87de3e225b70d44951705206e9928a1ab5e4a5b7b738f4f99d8b82aa79508a1926d6428f87a4c042755c83ec9d0895da47840f1502d58236007e718062588e69d655cd1becddc2749ec3c4ef65dd3d2cf4028e7d5498ff5305fa9bd06a7b31c1da82cc5954de52994d839eb47dcf8311f80c8efb6fbdfc11e5850f966b2e02a81b04b63e44f8f9c4cca16c99dc0279c6ca72f0fcaf9a1201a3621ba9686c7fb36f7656660b33b5766f841a031d355f42d2539016576b089dc1acb7aff3e08cdcf3813b9d09170e73bf57ee340beefec6f2fbf58ad85152b8fe7b61568594375cfc1b236ee57b923026128e03ac320fc";
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