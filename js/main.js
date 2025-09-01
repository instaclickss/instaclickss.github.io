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

            var encrypted = "7dfe60db73a9d20e4cfa178517d5914b_2439bacd69dba271e213d513c319f06049fc5084493f25725bfbc4a5948f9416c5455526576a6495bde1b949707600b45c0ff8616de730d585d18b47a23bbd7d027341f9879f2d356096176005681c7398837525fca5226c98f65c533c1f052006d4e93725fd758b76a4c9184f15e5541f6989fc56b5300ec46a97648366cc3bd9b3fd7a7c45272342fdd254ac805f679009ad413d4705e5fb5ef206d94e30c7807ae006acfb915a58a080a9aa97387c25b43ac9dd6a39158c71d5056b5eae11e22318fdfa72e4595c2cda50ef19e9194df9b2fc3e37e9941f99f99002aab03f5486aefed5669a736d80a101fe5dd6a13a60a0f700dfa6098cac5c15b5d08cd2d30eaae71015bf548bcf42f1a4834e98b0b3fdaba0603b49c49a8353e280190bba17938e5ce3ca9ecac79e2361d19ee32a135833c617a0df952a4f2334178aa7f26ec744cd7357facef930e1a595ab3f0ea9e0ec8949b41913995a7dcf411cf0bb641f795701bbc5d94628681868fee4495eecf689493f02f52116e54530c50527db12c8e025a7bc3edf9f4fd48d75c7c191431fddb3f6f784f3368c7af026eb1272b1ab2696866711f09f5852d57f65916dbf9e09dd199327cb588c47a803e3aeac9c7a328450ca9b81b2db4a36b6db4384af7ec9085094ba54d5c02eca151272af01c3ff5d9353a88c4fc47ce4e9e3386f4d7389d6e8ff8c09088b3265afadbd6a03a6f80beb66dee91d2a0542c9cb712396fae4d81d0e7cddac691828c66fe655655849706c0e3217393d976a57516ce0bb33ebd1e0f0333ba74f18d87372a24a059bb418404d2ee04baf5f3d6f3f523f39c5ce8fda3b7fc90e1547f3079512bf08b3efb3f0b134be3fb755a4c163ac9e5d62e1a079f00164f051bea03586ef39a59e60f92381a39a182dce0c0f6f43a29c6409a364b8938eadca7cf7eb91245bd84e320b9edbb854a0b37c9f2d0ff455901129bc89461f74288c534637bcde5e6774100db4bc5074ef17afccde62afe72f64417af4ca287d5746cfa413de8dbc70976fd3a1486781699fe8725c5ad7bbbf3d665a5a215aae58446155122d81efe0bf1ccc4fa88d6cdae79c10ffd3e8f1686b9e2755a437172a21697b182034641fddda55878cfb554d57a16a79748d28eab2f860f4ba0de1d22320205c8d822c771ef378df2e60e0b5fcae1c8ac31023423245f3ceeb736d8827efb33672c0497c62164b47cdac59c86066002fc9c677677788aba704568fca07eb03834c01a5b87a4bcf7e97f48f95192d292810efd9e605c5d400ac21294d76f611a839f0ba2a1218b0c87891396162905595174f5df16fc4d5b6a784a2a9f0ee05146599c424f3361bdbfe4a1425da91340d93d97c139513786bf972fde749cd4f1c65b40e395ec8751e3a6f8b8617237263814e467ad0d550d5cc916c7347c87c379ff2e3cf72e0a664bb141a7ff4a254a984482858d5bb41a9ef11e7db53b7d581bc8c9a4a96e0220a7dbb9e6858abc50d844e9ab7721a3d850e323f4ab58b3c28e88a7adb258b2f291bcc34fb86e2aac4da9d2a29b9a47784996d2e52918ef92204c41bbfc1a76235fc6f5102ba3e83f933e88e790fc820b7c37cfad9da5de207b2ff2f596157dbcf1d3e2a56d8c112143346fdfac0b25bfa6152061b11f16a3d0f2e09e199e0fe5c13fe5b0b518c510903b6d425c483c7e29af3786cd0ab3c892437178d8d2017ed2acc64b30a7d8826a35d05aefb21c8a2f7fb282329dad2201813653cca4444bfdde9d320769613129c5370f2568073563e6c2f60c3684f0e0b0d52a1f33e6412ffcf6dae10f28b43b07388c7cba0c6a8a6355c0cbabb9918537635e92481aa658476e25f356171a78f7d2e2fbb38258d9477fe9070ab7fefad07e398a5cca33d59ce3583589b0ec8485dcc3ea2dd97a30354cad258e362dd6f465a989d851498dffff7a4ade6ecac4ef1621f5eabd749c29f19dff8e3eb8bfdb86776fc93a3e90c0c128822e1d262d25cb236d46e55d3aba49cecfb838cd1ff31f4659638fa7cd6aa3b249db2418aceb9a4c664a13c07717901e1c4bfcf42638c6a7260e5acc4edf22543ddca650749296c8ec30541ff741f85d50e288a6bbe70579a91dee30d1fc46c4029204c7919e03744b47aafdab0c922978aa3179302e4a4a929bc5d652da5f85cf8ebb79f481e664aca053cd70282c8f4c22875f95ce162a3191c0b556052912b263a981ef05c36a7b508493193139c563faf2a3837ae472c8d9cb06ea9ed6105214ff1df2f7f7bd7052577a256fd1df3420b5af15a566a4aabcbf27a680b90d4b4ce79d620fc5647788b5ce91a6c79a67233416c9919ada6da932f12134d91174837298f00bd5747096c8a5ef9d37c295ac09788fa5ee6a0afde476ce0fe1f61622ccdbe4592fa3e83106e97501888cb54443af8b0d177894fac0e1fa804951c03e1854e710864c4f0cc288eb0a11c46c0570e4bc4d11804438230fa74ff1e005fe97b9956445b289dbb63ade741d467602d5feffbed1f7b6df0dee528485f0685f53975b045de498344978f7ed51a955cbfcaa9a3ad479741b7d77408089c57557ff9be992150ac430b85eb81db360fa193a98e838ec5226bf15f30bb7a97c7cf96911640901084070291e27f53ae6893ef0516918d283d184304313efc5c1bd9833a2439c3f4f31cc76aba4753c94560138a7cc9fd5b6732c86a4db305b145414d05d002f1e72abe6a5886a2993a560fc172ad1d47df945b05c36f8201ad1a735bac043eb888c0d5e3b94cbb3ffb07111608ef0da44a32f560d3812f13277d95c1f01796ff4313edcca12efb050bc5c00eb74d673b33e895bb854724425f928eb079614841c38735fddcfbde51196af4ff11ab662570569c538aa69b8c99bec497db3a914eee8fdade0b740739e17a6fbd70db6139057a70ce33644d670c4711cdaddb7039543b74333f990ca9b5ea47e87fc33b0fefa00779e22cda4215203890be510fa463824acf27db5267578c5867bfd6a6d3e773f0b38b57d426804d7e7113f93dfac9ac3dcf7bdb59ffac67e3f9f6b65dc85da509352734139c7f73ff12c8c8821f408d5544c0dbe3bd09301ddf9547e0089c1f7da48334abc9675d022efc42d14254c082e5a8745bdf02edb46351f8bbde48b9fd10eb3dfaaf8296c8225535b4f57de60151d0787d2910848c9ff20b0037930592568007653ef6b954384eb65abbb52f215f4cebbebec807471b27f6dd47c85eb534bca31959824fb228eabc18f7e563de1d5ce7b762e39277b0c3ac62e7014d87ce85a47b5d2656df3d6bab48c35ca72dbcc8dac7249990d5dc9d63951199073ed1f1431891c902536f97e1efd5c2f67dcf66db2f8b51595022e4f8c83396221aec1fde8126e24ecd5b6c94cd655998c09776f3f6fb36e27d0be6f9b08bbc452a5a27984b97d82ec34975535200e0563d1e969cdc84b4bca8e7850cd1d091011892cfb6afa088357f848c17b2b90c471c7693a293c5ad50dbeef758ab492821181355080304eeb710a67ce90e22204dd6ac6fdbf44228af91a372e89ad3c7ae7e72ef84a20bae83862333c8dfe2de300f065e5c0d448d6aba56c1d1dc2a1716d402bea24774134e1e7cfc5908d4fad27318d60099cf2a321a6aca305d4cc7bd4b697a3b717ca2707c4b8c72cabc3a311fa5f17bec954c1ba098e1b83012dfee5cc5575d311dcc434ebfc9947afdaa361a4855dc6ae5653a8ac72d9b10adee6924b9779fb97ad34edf571afce6bd5af902568d0923f4492544ed5be52674cdaabab037ceb0388c7baebfa73f7f45246ecd75691403419f234ffd786ddde7e3cf95c8912ceb28cdb3b3e9bd0b202266b631574be620feb41e3b82aaeb660c568333bca282612d7903399579ac66fc5bbeaf2eb6bafa52faa3d12b0d923b564e4648c21ecd08882fd07f70ca1eb847728837584f205490b450089b7fe1fa025c7f60bfe381bdcebbf2970e3828d7ec7772178676a14db0f8044302f2fac71ab2cfae4af5a86f0caf6b78758c53df82b5d7694594e173d53a3db5b9ab80abdce0adfb2feab80c9fe911760b3bfcf64a0790f53a7718f63023c79e10a2aec19a95439fc862b979e1e40963b4b1d905ab039c7a1ba0585650ef83272e1ae214c643d7a9e879647a629045412882cd19742bac03384a32e6ef5ae255ff4c6475934f57de0820abbbdeca87fa8ff59ceb1e37bf4e646503bb4c133121c54d57159b01ae80cee8e7e6a9f1b9bdcffdcff5e8f1449eb0af14ef7f7c2add5022a112b8ea96599a78fe386b07d932b9a9a1e792df9d22eb361ac0e9552b36873b231b459816f621e9afda00abda630fe600fdff8be515e27eac92ebbe88ff101402ec4881cdf9683b6493b2852e7f4a2ce625b1b27d65aeb096936708e97ef2f102101ee4e40aefd1514d7695f554ba1f0197578ea44fd5cf8a99a644bf2395db9e23cf7b206f677c04afd257a0d04f9fb6eeea700ae5e48ec4d2104f913d675627751fcf9aa0774bacf3c49cdfae61c06f6a20c9b96dbafefa29b3beb04c64af63b883391c68f88a34d45f6da33a9538504cc5fa4d9b4d056884a8759376ae131971623575a9f543284cef00289eb88b38433f33fb1e6f60df831f8a5cd94245c6ba51895478fcf352f8275fcf8c93f73723546dbac508a4cfb059a17634d8da3d57830cebeae2f663b0b11f17a9c63dee8851db8232b9437646ed875b924a103fea13b5a5583ce8a36940bc39265a8cf544b1e4bcf77c781486f5346100d8e092d26f04005e2ef1e05952b6f5b35733eee8b3d2ea2a2522dcd49721673a38f86e2d16860254c990635d3f457a5ce836942bc5f2dfe8415409bac06c20a2a531f386c9332d8e44fe615de9881104fc6e6edffe9ff08de765748f1510c124e43d5c0079e78738fe3342ab098b812a25c62db986925e4eea29ca1c18e28c0f037640efbbe90a863d886824c94c220183c9edf4505bbc3c98a78de9f356458b560ac434e4b47194b9413df460feab580e1cd5378c191eb888ca72951ef9f8faca74eb19f7f2a7f9e24c3707faa5068038464c28ea51bde13877a42e2fe495590741bfee1aa2817a6038b5eb0d014375856d64dedda4d3ea4160c41b4cd271fb5fa805c9a562117b4e241493968136475b1e9cb55ab0daabe53c8785c39396bafa98c016bb1c6371fc37189f44722a4cbe4e64322d454567d49eb4188c63e4dc5f1d4ec0599e842e857f12901493300b003dd27d6e454b557da684f326654ba83c25630c86ef286a3ac346751baca66b895b839e906b2c3190ea4917625dee3fbc62c84cc486da1698ea953ee742320ed92fd30a50075625ed42d195f99a3275066fc38f8e93659deaf304ca5a4bb1a49d4670d3784c1abaadf72f53fa0d85296f6aad72e3cde8941fdb8a0da39255c0a6322065283930a2e9b34a89e69820a5e26a0d26b9232f90ae532a1fb3ed6fb341db6ace4a6196d0cae8130606c911412990afd09ca34ef7e7d23fe1eff74fb394b8fac3033c1c00d360a462866325eb8633de53ce0fcfb3de4298c83bff755194f922533377f410a18770212bb4a3ac64f657e6bab9980cce119ef0b14b127257f97c60749bf8cef24cff746e8154b5bb9dabdb49ef2c834a58bf9156cbc9f1ed6110be5dea770f9a3f667d81a8f9d7f5ccce07c0c00bc8cc613f9524bb7d8e8f957a21f39123cbc6dd708ba8095f5a73c28a7bda05d088840e5dd19bcd2a735a9f8bd82b9344f0a5824b293907d1523d7036ef0e61e1fdb0b0e609c10360ead7cccf5f9b375b6766cef7c9397fa37ec2220b3ebc333ff1ad4814b5f63630dea1b201a9dd289f1178f6829ceadcbe945102af1b84c8697b37977d17746e1d919c65092cd42c9022634b4066a38f66d3ffb3fed57735804a420e031ebc6093d35c2d041813959e2eb514396b629f3e20eab506f65d8704ae619f7cd6dcab74281374d6ccdfa9b5bdc5b8110b725316c66f084ae55627017ec8573681c7a734820426c20451c05ceb215755225b09ba42e342e4367177f0c617653abceec8b57393ed06d4e2b131556e3d10f0610d354d096e77bacb925be116f3535375f38026cd702b02ec091b2a5c1d78467626f116c35664bea93bc67370165eb20c8d40d2686062738cd05fa67129b8327c8f1933cd9fe7e0dc16d2d7087c9b56e467ce0d0ee2e10272d805b0ddf69717ee163c4aaaea5970e00896dcaa6e1e3c0bbfc53be123ed3d1eb2e65dbaaeab438a29707d975f513018436176b7a9e8f0fdb953a59c28a1bb0991d799824b6883eeeb8f258b508fec57148e06886aaa26a1eb05f0e598731e48205838985aba2ba50aeceeb14ef35b7c67e52a3b98915db5b934b49ed10f18b7c3d17bfda7aed66877c878da25f1f8189accbc20e51342de88cec75eb31ff494c7900a9d0e71ab3d458c62e4be557250ebe7e09ee58baf7fede58c82a46dda5d41f1ccf4a41506db8df2ba22ec0c1ae9f809668a4b3c61b25bc5fc9f922e8b6b29bd6d4b3eb2e6af68ad3f39d2fe8aabcbece0bd704856895b33582f01170cb0e202a3b7763b2b2e6e1937d86e1d3a6ced84f5df4797b6a4ba527924720d9ea5b31843a0319fe0cfb6f0f115077a37a3ad16ee4a309dbdfc3434100e0bc5b8b3189d9616733ab495933609c868d0f2d02e8b3ab7e1c5474ac57ae4c86736783336d5c5edcff8f6a49c4efae331ccc84237d4b53d3a0190705d7c5bcf37421b30480bf3385a59c9feee247ce19b20744ed8581e0cd07fe40d8196ba09a900ec1e14abc0414472600c50d47be18d0bb9d04dc41934631f5fd95db439bbbc6775358ce13c0c43a1ae6a1f96582d7657ebf408e0c03478aeb547796cff09cd762230bb1ccbfc2b89f2d855240c6582b47414539d881502d84a5e0479cad2f5e1163617adf3f1baf1c49a3630d2392d58dafe9714b4131af942d21340131e81e74ad45fd759d1db0a6ce071dc0016b84a323b6c145e99833ad7d0f09cdc65e56957f4c518ad3da56d45570a9171249b839ddd8cb129d844167cc082b78e026e1d395bc82218361807835875f241de48b7408d6b79a11842a0553f8642ae282c3a4a2c02cfa439ab270f3585a9a2bb724d1c0b24c498699afd13187daea5503da767ed48a781b4360ef89bd8699e1e4d69992f71d43a34707c7204e110ca31cc9c8683bc8d932e2a55299d4aa4d52fc0036d417c758ca88368c63d29c64693ee4fd7f5ff96de885baab59cf9298333221e829d95ea33726af1f107f3e93a68fb7374ec049af61d1a3dabc1c5df6f205c403672da853c3bc17b11ecbcd4175b695b4b036e3ace8b8c8c1268f0aabc816496f75af635a741c92577929d8104be3d550d7cadc8543f084776730ce108713ce144401f6ad780df9e6ecc7f7b0c005a65488ef08f72dc77b5611099d856d2b744d1ea8be734012f76a744bd6b364c12f50128f8bf7802b96370a325da12d35c401b47c282ee0a3882467fde8aba1c22650ed8eceee507a1e41e9274586cef6c915f877d0d6cea4b7e4a1569b5f4e722c8704bf70973ece1e38e84277b4ac9558a7252a06687b263532f69b588abde3332008636304bb41a519cc0e9d5a1748a431dcc8102ffa66e7f10656778450eafc1d8bbeca208e886f7baca2861fc2453266d7d1e5d465c8dd80632a1e054722a43458deeb2385637da10e929573e50fdb1b1675e4c1e65fe0dcc35ff3099d19fcd620ffbe8e81d707b0dc838faaa786c1109f82021faeba2823c3922a3a769259c6d3642135de4b290812400df59a6dce253904f46babaefa0e29a261195b8025dc7ef891830cc7237371b057cdbdfaaafed5cd2c58c7e63cc8671c133a5329833e781ea0269a28538d2534d529738a2daaf4680c7f99b913c3b826f8fac0ae06f60eab40d60dad8de367a4918863a014119cc17d371bbb842c5d6b8a1cb77cb10e5fc5b52e5240df2a9bdb862ec9bb88a189edfe0a14a0fa45cec88b432d1953cc04116bcf46a9414fd297b0e6afab7399f411ca024c23a1ed4b8bb677fdde8838a0d5043609c649feb4d07be8f68fc35f9fde34ba0173534b06ba44356c3a08946aedfa2a38dd7eae5553f395118944eda0babe4e8c855ced9be2f1b1290280c20ff52ab3b22acbac1b9de237f7edd932e55a0e1c4d44b3c812d07d03cfcc26d23ab3dd26b77299ae939a48396c1c26eab404fb73fee5438dc92510e4c7def8a691956fabfb068fa961809819d169f5f3f710dbb1be5ed3a810122fce2ff6bf737cc8670a94f5c1bc6b7bf0ff358471438cceab039ada0733769173bceaa0661d6b189cae0ae7e66adb4475ec2c49fe2531714a38d22a6087cd9f551b6c69e6a06d73421b1b9527c561ec54ac1519f7591918f6c3a9a02358ba47020b5a89d3e35abecb991e369617eed6eed371c584329467887fd8538db348279622455129d2ac5d290a546c694e25c306512a866ab3b00dd12fa3b631a256666a99039f150d5394aae5ad28fbe1c184e43eb258b8375c63500bbe1efd6774f170a82de91f58d2f6c5acbbbea5a106502216f9cc6d57e1fe25bc9122714ee7f645ba8e7fcad5529f069bedbaa5631bf308542e97206d94f3c3c7d4ff420cef0bcf6a117e087c4ed5e2324aa603b75a851707cb0bc5287ebbc70acc24348a59f9665172ec91fab03874a2330a07a2d78ecae86fd74f3d6f914780e357f71f22dd60b29bb7ed996f6a886cbe08fb2ad3d67b96cb3e161cf1e526525f76b6b3480b1a57086aeb3cc32351df01815e6a0448c10f158d8ef699b2eba23f260defaa48697c9c846b6711c2698e5fef5df37dffabb82d051e1c858f06f702b1eb1665ae459aa5f02e61f73af3b27966a303ccd956728a57377b0be8ae8ad5f211a16880293fc7faa6b6e0e68981f4ba9ae2d2dae70bc0434bec32afa374a03eec705900a4da416d8c799af6cf46f05c667754ff28754d0f607ab173f6773a2874a7bc26b3ce980580f5cac19edfe0cd605a5722b1675d56a45ad0cac0ef79040f30447138d482e0012ad0498bfbe7c16cebe6a75580c7448687b289016671d4a310094e1232d17d748ba26727b1e45139bff9f4302bf53c81532a65c4f0b7930643b64ca1faaf6a07380c8af17414ce7a46075fd3844ea791110b49d8c5a76db8a6f2d4c2a2a99f3ca936522fb9a9faeea1b0cad9bedb9d29026d8bcfd04ac9b57c5177331917de0de3fe477faec55416f6c0486f29f8799734e027442f7a5380165ea58023e969e014bce7f0538b226d82b431cdea2b17b7e576c92ed6b07ab28184381060c3f0c4da484458452398188a00a5cb9858f399cb38dc455cc93872163df34271bb8db3190b644373bfd35726818a469ee7f4269e0257b518568fcb9ace258b0680489c9113924be38963d3585b30722d10d44ef09942b8290e77d395c063ee1d0aea9592d337e6726baa09d184043e926eeaf1b368d43af10966b265cc87eb7dce6ff7392a976e9784cf127d3473aeeb5e7de4bb4826b4e1f5a54e47a0525b12dc6cec42bcb197c0915222692e78c3bf8227c8b87ad281ce77da11ada2ed236679c592fdfee2e3869ce2acafa983dc4f5e562dfdf7b60ef8e83c08cdad0931e3d9a531288b7be9e7f2d2e6562feca01baa1d06ce06a31ff0bc38bcb6b82d031cf83f70f4154ab06d1b4480229c4761ab74a9e28549fe1b8b8497691b73e2e619c7f5c39cbc751ed774d38bd48fc7498060739e5a3e3235a057de7872381ecc32594985012fcfad57f479138d589a0fe1e81031849dd74c341e612c6729a0847b3ab06b2a0db6c9938f2ee5434fefa3baf12754bdc01f4659f8e0a0bda7ed55e20d5bcc1b542a6ff27deec07ec3d3afe063ec4a6da42cd78e4cd46a185fce6f1d6397ecf2c54ec5181ace34298b69a576436f839fda70389133e57e2f9caa28851ddc15a2be5f33f2c3e122d03250588b02fbc6d7b37c1d8707248a0db21601a6016ce6f0bad1a87a3bf9b9fc641f886791470cb376721a27758926de9fa0205c812592eae14bf201ad242cc895223c1870ae8e7621e09d4b1d178ce244c2c0e7acef8f19ab0bce19005b232d591e3ad90216e1126edf3330b8b80fb6b13d6b645776c36a8fb98610410962e8ba5d171be875cf09ba2996e6a8aba8d51d68ba2235963ed4ae2d9505f2847eeb913bb67139b02ea6155f44004abf08dc9124a4f980627f599bfa1d1c937908081f97d634817862897779d7d6e17e07c57aa791423f419e78e25804c2b5e7a3a81a9fbe36bdd5573bb5620082ee2a6d9d77e9012e9e2117c46f8b8b546856d50754f474839cc0ef9985832d1be40159818e1d93d6d4c09a4961a2808c21b819eff07180898774c1d317946c2336af1f4cd929d730bf97ac7dc682a3048d680dc0c8a86058b366d73417ffaca7ee866c939f32935f60618b32b2e16fa71fe907229b74cffddcbf9b19f43f4420ef4e391074ed03cc6fb11e1c51d610612f393530c3599b14e42cf4464a41a6571e6961996b81de09d2c483b3892308d18a4a19513708c7f4b845cfd7a8c8ff43610fdae16f8e4520eb2351265b404a1676decfada3d8f3e42f4dc547e911a03fb08df6ad50003d36dfecb70cec4646c3376eeb4f7be6aebc772a67862b51ef2729fc2a78151c5d8c90c0aab6ff2cec9a876b79c02ff75826671479e0c9180061556349c8a28fdb845f9959c7bcf9b161555198c3e8d7347700ae035350693b5fbb61e1bfea9cb6dc1ea9e4dce609e31789b35b5b24883ccd87457332cae8940478207a2a5aa2d83c9e41ff7dde858cc44e3286f0c4be599d28d5119323dc8e22115140f2ddba4206ccfe16a1aa984572382ac9c403a0452d72ce2ad25983e248da041218fd349d7da7cdc4ee30a4b66664dafecc6029a302c938357334f9cd5eac75aca9ef0facea4f1f0be7d67b511217a834c2f5a9c753188d700647305b65114e3893220c0145d98e6ef844947309284032a106a1a7512bba14c51ce276c2264b125a50ba9d655526bdb68fe436d8860377ec9311b382700e151e81824a24c4b1590f9abbec84a5aacc13011f5423a543c6c624b0943786f96317fcd5328cadf0bf2069c635c215ab6a937a30c51f6df6061a3af88060cd0e6cbd681172d4a141342911091d9a9759b490b875f6e28120d53bf488f9b6e5511818b286e8442afad2f15c8b508960d6756fea1909cd465b7f5b3549c46b203fbfe40bad2f051ca88683b2705f34da1245d2c72e428cfe1bc323b0bb3311234c77df794b08e8f0e8eeafdf024d1adb69e37057daa4d56fd201182632083da63ac2c3bdaabed2ed4e622fcd7eec4732432153a0283fe8962db3af660f3ad6cc126ea9876fe67c6a2cf0a86da400b142e331f6afe6cb44867b6f7100698728e3337ca32c9bb32e39b58843c29311962d6390bfae1e0c6abab8ecb3732a22c3b0be24302ca79e217804879a7ad5c824956a4846850b5a9e4c3b405297b219642e379b376bd44724c4c1f44eb76fee64552fb7f79b2ddeaa3e97b8e1d6135f7820918570780bec8bd79c071937e94ff9679fc81cd7c7f4b216ce3e02c282d88e3c53b5cddce9ef189523b85b30194d0bdf95da855b9e2410777f0adc96ea0ffd59d60387066e3816cb889dbd783e217c1d02272838aa6fb42a033c6db2eaae881a538810e31ab75ea492c69e45ede3246ca447d26b3df2af9d6b240ec3d55c476ff5eb949311de83c4c057203da423fc62ef45cc0c9ead44af0f0e01b5245d57f1a71dd1adc2f552ec5174395c56590814c33c93060711ac91e1c50c2beba388330b4f163d7178a439618159594037eb01510234c461959217f56388b23972a58b326c10b63da70b83ab6c57e0fac2d9c24e198e8dd8ffd3b34715ca9b529708e9b319d8e75943989e32bdc6288c29da5540a1ec2e5d1c9eb0df0f5f37bb7ea1f000ad11441ab969b85a663e6fc4db32c37b38acbdf2ba9cd1819e156258d531b89de9f944f37a491ead00252c51fbfa908dd3a163619b74058bcc5839b44d30902466ba62b917cd4b53450ca93dd275e36cb63a28a0b8c02cda3e045d849f05cf576bbdd290491d0b59b2b08219069e8679989b6872e49a406857e5f54d0fa17345ba64751c31f65e02b459039745015e6f2beadd7d9fc37258a04ff6ba4a65dcd3263a89f7506ed1cc0e11a82e15ec1e9edc311bf1add1b3da4bb9fd923ff738aa93eb9dc71e3b9495bfd2d96283ca7664ed068ca02aba6e919932a6c00c2bdee5fb81e08726199000d56adf4079d619d6543959148b51642f15104e75de047f400c8d0650f9455cc409d962c6065c408963f614e481659970be41edfcc4a60cc01c8e129bc08c5bb4ed1d933210a65ddc580d3a2c37dcd05d58fc5c0750082b024e550045f8e8730333ad0b9983645d8288d230a9bb1e54236b67b63cb2a41e6aaf2eed5b99dd2b9a72dcba619ef1600883b047aa6862010fc3154aa364d3abcdd600227e458ffabb92f516a6a088c3c46ebf360f33ea040bb9eb781bb9f8d0e3c8f97dcd5d68d234332e50146376c2f7cac6ea88e97c225465f0330f5ce79d8dabfe2609b3af7ce1c7de87112bdd3f12ff0e2514c85424e9469794aaca1eedc9e322e59631b5a29a4589d683abac39ff1fa04b5ed65509eca33cfa5476237e650d7ef46058b00eef6ec1d9c4a3cd177ae6ee78ff51117cc286732b7759fad96673f0eec8969624916871699a08450e838d8929c7d53f65b3043d6ae8fd2680dcfdd79460a28d5b4d906b40182811123beb09b92a3b44970a9edb1bcbed29e96a19f966ddd57593f8b5ab8d3f2e0559d4493ccff942d3bf46d393f731f429c532f17ba46db67f1d9596b2230846f35b49de6c4ba65eb71812879acb20168e3a6c7c3ebfb836b81a5b5a83825d5491d2638601d6cfd1e9e95189912bf79ed89497735d4dcec0557e1088ebfda2928a96c9c08b56a31de8b544fa1932a72868f5391950e66b63afd0848e358c31e53ac8965d58a0ced1c0be222ddaf8597ea26a564fa9f3e6a2106f1c704c80ba39fb5bc3fb70a767ef5bfe5f4d75535c57fb1a69a57fe515f463d2b03e09b3f2cd333a8ea69f86f8c35631232f27cc1eecdd922e888665bd6fdd339a23ce5420632a9334ddf3cdcd7f5a99403a34a99202b23c43c2001cc5c9dfc68e5c294714f92aa58238019a6aacdbf1b295507309121800084c9daf039ca0dbae0c120a0cb1f92df544df09498a76963e57e72898e4cb9d280cf792f90968f58c142b0632319ccd22c90c1b390bb27988fbe68aaa5f736e900b32ebe4a2d37a88eab9c98efa80c9767531b8258c05219bcec1b9e9e63e3b2350c0e0e7af85443472b28669598e9fcf25c9c6c360469f8ddaccad14d512761dc8aa122d59a642417de3e6dc575ad113a28ab1057e310f70ff39c385cfb7f5acc5526137a3603882df0595403cc363cd179ad8d69297fd8c6f339627cd5f98ac90d9a4f129452a638ebf79027e3f5328516e98b4aa4a365e861c3c2163231ad8ecce99f5b935e25e4491d3a9ab97f457ffaff1a66d49c28bf84145423d53c4f280017a346f65e3fbb4419d7e21ed1734eb9ea49850445333b54426335bd686f600217bbc2ba7643468b8c6cf08fd6368ed9804533f4f4b960f96b15f9e4c42475618e215b99aff99d2e3f4a50cbf438ec0bfce4775602b2e4cc248d442dc5b187c4600f929b47743b2e1c500074e592b51fa0cbaf845e2ecdbab7e8c0c3d58a160af5a7be6b8174676a35fd6012ac958ba8622757b4d523fa53bb67adb1ff6d49efd5cdf5206b8adeaff76b7da6f9b8350c5430dd95a3969e56ca01b3fea8044809ab201177884999e011adaf8e0d7b67c6d730e47e46517db48775f0c92f52aedf24ae77107ab5b259a10b2897fea967fc9863439847aad501a338ed66cf706eb34ef212d63b64f5029e241b5e9888ec077fc15be29339869686d6b37ac715c50eb0c51098718f418bed21a03f925f3b8546f61a7964411188dcc17b355ed5f6a4f0acd64b3bcdac21e38ca41c94da0d1ec04c5f9b0cc5b7f2d27918791f89bd34f02f115784321f4d06b48beeaa5023d14789ccbda788f758f6be9812716f70c5b24c18137929983da3b19eaeecc72461a0377620bc89ec50195b8231bffc800a9948785582208e41b6c3b0ea983aa0b4baeb9565a86f5793bd6e858ad0383846d116b159234ba2c478630f1860d01516a9ac8909cd704e1f07fe29df0f93f79edcae1e83b01723a302db38dbf0c4bf57121a04f414898674efc33f46167b3b118514eb7c8efbb4d39acb2ce429ee9ddf023b8e577e5ec27e34c564f82552e2198a58f586f1f7fba5882dd299d3728a40570937705bad13366384fd9b3834cd6c65e7f44c7179e1125c5e83488252da0995256130f1f2f955f28eaf17402dcb57149548f2e8d66337941ed71f38beed794495413769c2e46ec2b3efb52fae436935de2de696acd04f32d9b3f3869a7f9486801d7042adf8737fa7176ec706d1a0904795acc2429758fccd1d2d6b4f2eb6a06bf30213f249f6e1431fa72a4a0efa9bc4f588deaca8396259661231457e4f62c8806e0a6f4e166cb2102064a14c46471a30481ca5cd0b5d884430cd530f110e31cc8e25007dd6dda0b33f551068fd3ff3a0b6953596b12a7cb88324c011f2367e874b1e063362f5f1831890bac31597946a356bf331da4d6c65b57f718be7d0a1607eb1d36bec32223c05f4e0025259e2bd176869adc4af6422fa1526ba6f7ed246aae521431fa368f5a284124d7e7003e6108d9ccee05c6dd512c9f26d9ae4208be90e6a49fa20c597100905271268d8b4eb69974f428b83afaf00ff620d98eafaeb4e219856156bff9e3d797738a402dd252b90ebb64db2a39c6b7396289b40b5b6176de49c2458cbe40a1cece122f17f8ce26e8c2514698a4c3ba3b04f99d5145cf60014ac959d22a682c0407917dc485a76b58c462e4b86527243284d6214fcf44f8e0e1a1c06c03f87543865cbcbce4a9908d96808c6dc197f156475e636227781cde60d54f9caa912929a24ec1ba58b58e72f4fc3feefc9d21ce33f96f57047ff521cc05f7df10121c36645292ba8dd5aa4d5451156af0f3164cc59f85872826ef38a93b73ba6c57f6fe95e9f22ee87e06c5d1ee863de0cf1e1843d6cf98b9f19296af5a80c4119270bb0c64068053e789d89538fb3f82aa05ae8ee0a4666d25f8e15170b49a4adcd7f9e101729b188b1b0d0c80624709b922a3cb3daac0dfb9bb4a96494903372bd6e68e03cd9a9b9179abfc7c76ce5040601a569d2ba3101b54cddec3be32e62510e6bd7517a021a689fbde2d512541bb6785214a14e57379d91bc2934dca653f4358b62784f0ad17d6bb5e5be4f9c2ca6136a5bc38d83587f97fc42de3c52ed96a0688c32b69a1708d5a62d7de0855c8c1a375f73f952f59cfc995e8d260d6e6df2c0b3d8ed6bc0cfe8d28695446df822c5c8e1a79cec49ad335335106f4296029cab6f24f0a8ab041855d17f5ade789387eaffcd9f1a3813ccd75427dbe89df2271fa06ebaf8c3c430753ef745f445983b279e791405fb9dfabece14ecfec739c73dcdb9da728c343d9850f4ad6987474630ec629889ad8a4d370b4571321249a1262e1a2944cb4ea70f51b1cade06280b8091e66de7dd289d88ad0929af090c1ccb6646b20ddfb5d0f9325d6ef51b5cad55eb2096d3efbd95f8cc37d1e9a7b8f5098a93f63284abceed470c64ad17e23717912bb6febea13179d295f4a2dc38d8068d4be82aad0a856b573669be54a012df82dc1a79919ef09e7badd5bb425a978299c810767dacf03c332552f4a2385c271c64ffb2e02653a7a6cea945f401a9da5eebe37a9fbb69eca0b6fc7fe4c2d78a8ef3859d82a6313ca27e18711f0b2491e3345ab2d48b6bb329b40ba9427d10fc0254d58fea9f2cb448ee0fb8170fd441fe663d37c4a08712935b85102bd3fbbc0e367bfe370928a4e8e8cb0936ed20296eab628db325b85771f959b88be542cd4602dda351b78429da963ce3e2974ebfd8a16321dab6f7200f34af32efe6c3d5f160ea4a3a0ca743968c7ba0f76b84494e28ef2e0ea14bff1a94874b284a98eaa87f3e375249cdafa53d2b40cc2631a15316cace465b6e4254afd14bbd50f87dc4087167c54e8f5c84cf5338ae4e0521175b86eb5c88503af0df7cced7588640d30d302b7319d01ab8837ee816852ff66873a2d6a3f39863bba68865e07d5f0612f4c85c758c2a9fcb97615e99c7c4eafff7308c6e2dc9817d0ea0ebe9987649259f6074a202a76abb2bf04b68ee6e64943a18d81a66d09f8df541e0709afe1545dad92e6a2bbdb851e4ed27f2f5a3cecb9dae37461cb3c321ef0588c5a61965d0386d2c06f7cf7312bdb84c1d671d5c4593813a5ed5ff0a2b95be48d17161bbfb873b1c57cc9cb7c54fdb59efca382d494b6037815ea78c3245d8d47a7a5b16312f8c6b2bb04e4a1ed82c789655807047ad97e98d1ebf19aa313167f790d2b95141281dc453ae77355d5228bdff5bb3f6f0eaf88d07b027a4c35e6d56027225940568ba2c6c42278b23a4f24d6b038a6077e2ed4bc0e11133a1910de344a6b33586d6e2a6c6c37d21765e34057f56edcb1f21e1edbf4653c6bd6b2ea7eaa1cf98c26beeadd337c643be68fc63a8093b03120ec66512119eafbbb1da8469c93d1ed2cf5b441941e14fc48c221de7f122d57168ff5661ba151d2b23e913a9bda620ea792e76efb82a3c35a2b04616b4b6b3765fbcb1d1c1264244476f1fbf216aba3b75a4325298eb0519efec15c831ae12bc8fa38c008c2b1aae324a50c57e9a082170f9a329d4c400a90dc1ce45c3a70cf0122adf76cbd47d3c62ebed6e901b19c322e1ac82a0f51a5c320dc1424c32e21a88fc43c59761f01bb30f448a99a8badc1ee8bc51fdb4f62f1b67559f3178751f2401c20df8aa80d2c4d3fbebfaa36bc27b01b2029eeec6f5b748d20a9d7cd9815e79ad914a8d506e0080e850c109637066b12727e4c79688ef0d21728e4a16b127b8e7a17f240a3268acb291a97859bd3b415c4568276ca95f005211f7472d4d816827d99f3ab38258e0827c4b576e652ad92c0b8667717895c09b119f46d90d1fba7b0ba103574e6d468ce1fc5e7f550afc4363e7f8e84006bc404e137f780a065f753936c1d764f591beb746d3276f7f576411d8c85119fbddee3dab656f0bda2d02b34dce0e72e804e19a37e408a10f43a88c641a9c3efb19711aa3aa9c4e6a2557d48fa1c099144096e2d2494cdeca4236c92663ef79c334d38a7cc53274c9b2d51eb1d840ec4a0830c7f8a494a74c60ac01acce7a1c436847e8f7bf55f1bc4acf3016a4e7a893409a86f2f888925ab50aadf5743443b3a9515a7c03aa8c27e6dbddcf00be8058edc3002592cd7bd8e0f584b0eee261e0b41de4e50f7710448291edaed343ef14706b00b9021fc1fdae5ef599eae734f8d4c4d42a814e0c44892cde229e02471c5f62f40755f5e5af870cfa9e39deddf76fa3cef59e659c4f54430d87acd78f0c298ed130c51ddc70fd3e74ef5ab68fa590fe4dcae29876cad62e32ba493c64a3a238b309fc5db7da575320c338c5cdace565a047f77182a8c42a51f5f702f2cb0c7a9f95739065a2f317fd43fa86670bf5663f01e779debe5fb15e44c208916d573ceceae1710ec47db29c02f6dc5abd54507525823ec526075d88c8c149af48d57a42b8d2f9a340bd741afdec9e1e95fceec21ea62a0a1ac9d5a97253f531609299fd8c6cda012e4257c5b86fa91626f0a17ab2ef53ea576c3985dcb19d1b48fedbdcc7436fcd1a19b23b143ec8580e799d9ae0fac4ed2fc8c2dd9cbe3061364bfd8d7ab5bbfe3728b59deffce4c7d21ae4c772f305c41e889e430b3804c662cc131e5017122adf88e674ac37c2ef6ae757e86198424883a4bd2c3894f1ab90751d9ed75539c04c3cff60e129acfee8681788a032f130bdf15d165c626a034e6147163df3055a9455729f9cefb4f48c6a228955e34ae4d902dd9195fcc2269b7a818d120f01590fe6b0eb7fb883e0e4bf69e563ba1fc0ce1a73667b6d5a0942d8b9761848dc57cba0e1ba11119604864bb8227558af17faf24aba653176c268cec743d36c9f728cc40d9bebff6d6adc5a5edd2a0e0c07139b354f313d5db9944e907c56a74a05d84fb0fee1aa5aff8ba5ed0d6f53c431bfdd52b3bc73c7d80e3e356ca237e93d2efb66b25c4f34f39fa1cc95638a8480878b945a6536226a10e6a86c1b86e27a5df2f43cce18e91d1dacd978bffc99320ad569b8ee46dfdb1363f04c5b2990f3cf070e521cb47c9627a30e0de1512c57a38318361692adf84232a99595874db8c5e73bbc601743bcbc499e4f0c24214a171c6ca4b81f1e07d2ef5d4129ac32488a10a29665d53f87d6921eb9b258b13f2b174c389f07065a01ca003ee1264b1493dca62194d797543ea17f1ba2c962d9e61db9df9497ad479b8f8606b3f1cbcbe14c39845e63738b2418589be22aac2c9e5230c6d989b66003a74bf8e65b727bae3d345d60bda94e0ddc4e80becd44b7cbee6aed8b199b24af888086e8b61358cbc715cd1a110a05e151cf7525ca9090fb41c2b082c68ebe7d73e0cf24d9db7553c0b9aec8777a5e6cc6d7f6120115b77530105a245dabc0f92bd096e8697db8e1eacbab931fa502eadfc005a19da6daa1c3e00faae4abe9f91f414227f73707f6e92966c94d8d3128244dc649d9b4938814b77d9f2299f1b1b801b0fd797b21c1b13e72a925f56878952a644e41ca9db0a1bcd94deb044e0cf6632d0b545d9a15d64130081a9a2b8473b07c5f8040d896c5bfc4f65db52214308385c79f5287d36cc967d5076cad718bd41044649b12572bbaca76f0d5e80ad78274bfef4cc2e97cafb2627d2857437fa4042c06711af20363026ab710d83e6635b963e6754c1161d938297ef0ebc653e3c02e57c64e98016e0d6bdf596fd55f245477526c4384ba442d77f770c853d45893b88244718875424a85376db35b4a87df350300b3cf0143bfee5a4be688357929f80a68b70b07dddbfd8c27f204cdb04f863a2d6322182cb82c5e8c2870fbc44785e5e8454388c13c535b85f1976459d7baef7e7b49809ea6614128dc61675a946605736fe8b9a2a8c38dc6dd8afb72f62d5e3c7a69abaf9d8293daae5a028484fa5ae9e9b86065ee480bbba24ee7d88c6b70a7076f78d77b7d9454df62e592e331493b13f4d8806692d12ef321cc7b75e920701fd3d6b8e183d8c5fadfbaea00908d97a51aeb1f24d7cb0bf80a22d1820abf7a656e38875aa2f9ec8b1f683d0b730d86a22a93a659966381732d6fd336b40209cfe8165b984c555ca9bf4f0d98bd6fe2c1da47625c72aef19475a22bbf68c3c5ee46614fe33a4365cc30ba5e60e6375bbbecf5248f3fc52822fea624da80c8fdd5c27a4c379c8e7654e4d40d772965d65016bbd5986e998c2763d2e42be8b1a9e57ec3659b485023b432566aaec776242072a48cfd4ac3ef5cab9d71c40dd47e614f2f6093d02135da25a4817bda7a88a8afd99d3a824c89c6724feba4ea66ccceb4e1deae91ae476abcf1c29d3cb314dca9ad6321b19d5010f9994208531f55f6bb75bde50c46518f1c2a671365111615468da9b40d052bd0d6f0bf4ec3bcd10f4a6e3b8bf8d86d32c5538ac6aed94154f875b83abc2cddad9aedd268366270c03c01d5f6397ade3a6e505c11866cd5127457d20872dbdf3aafb4934bee6623122ceee3edbdd670b83b4fc1f10992f6c13bef235c4966e8777c68ea9839339e3ee4e5d3fd0ef0024fb6ccbac73ebb9b3f82c172362d2eea41fa8ba04592153e6f25995ec5e3e925780558f73db51db9e462b011d5d86f50ea2b0e7df3fec963cea49362191510bd6b503860cfeb3ddd1bc314a9f41b0efaf263584f5f676396b6d79059ba33565c253fa76649d83ca67eb822b6b69e44101755c9ec693dca4f181c6f2e04728972dae4903a7ccf9fba073feabd3c954c7679b2833f75a2ea857d0d50d814093c5300fc09b81fea0e77269d03309958c100414d000381c19b76f201e313748e04f002568b0e3d470dd699d6145b5f9cf5b96066646229310a39cdca5c6193189f81eb2947594546331f4b370aff07ae3b8caab917afd8a77fc5191e36b4a3057e64a9881321ec6f08a5853cb4bc5846a77a18b1341337f75fb47ea9c480fd75c9d4e4b59c1ded762bad8ba9e6d051bc7ca66084b5565ec2f65a66265ef33219aebe4127d8844ee970b60807dd8ada247b91c6290888029026f615a06707e787b706a0e6f9044f64c39fb5134b835c0e85428e333413bdbb1231afa2346dc9a41f3585014e4128d8fd4e171eab81b98a92ac9127641cc4ccb1e4a335d08af72df42636a201139df8ece470766a3ca784777cccf4ed7f8c76232baa426d058437783ac06b1075afe9cb5f320017efd36b4abade2981dc1eb194036b2d067acf66faf6bb539ee1d8f7f9adaafd5675f560c9aa252759f199b8deec2843e1937335a2b3c8778bec0411ff8a94e61be5365b15710fd9fba67aee3d175cb399533128bfffa1d719a545a6cfeb103ba75fda07f0a6cd8cf79246adb7b44f0fafb278007e1c2e2cc9aac2e63cf59bb79026a80e3e703d3584c2b0c01f9dbe2d8b1518cfcd23402797d188086ecc3962802aeacbec763e6f5972a7e681467b1e28ab95c5c43ade5e6b526bfb051435c7f6dec0e68aa240e194ea9601c6d0affe56a678e36f8d96bf3159291b8302041a9125d56c344a6756b9d5b709d6430ff0093fdafaf25062f660c765a0f54dfcd4d867060fa9b96f3a598ae6485d4ca2809f306bee779934d7e827ba682b55dfd5fb71be1eb25cfada447176386ee09a55cb04f07f9cc09d7512be6759ad27a0efa4303edde860923c7f18635785db1231aa6b219edf6867c68fc20821992cad0f6b4fa7f69f9cbce8c20e92637f79c3b854638fa0ed5e90b45e24767a8e8d7d231220e6f1669aaeff7f330a6d87e251204b864e767f3f98c043643c0c4d075e581a27abd46c7a2d515122bb8fccf5caa7d9ab92413f1cc490d7ddc35ec621cdda08ccb7fd793cae356282f3ec2322e19cde5b98b357404bae59ab45ed030b1fcc47c66a13a825939c0edd330e000d5f1e1e490780ff73aa66d1ceaa16e51e56875eb52e73d02598e99f17c685282ed153a7fc309dbc0a9830ec0840a66ee33f70ece3d8e0feae9f807b57153474623b0e1f84487134cc78b780ae8b34e9165a472463bff36a2822387718f17948c96e4832906c5b46c3475fbe7bc7460b1e051b79e7b3b00fea05df580d326b6e53de390b8f96cb051a8b943ae7d90d49dc18afae3dcd3b906441a9b1c59972236460de0dacb1627f4c114820a0d7016b1b2360dbe2ab655aac8b9a95c8c5d43a2dff86945ade08c19caceef784be3c4a75a7623f3f6786ec9c66257aed104489c1ca5a7941eeea91ec3328e79aa42cebb35dd9cf81b18b8559e3eeb0d2f724fa02b7bf8d8e1c1b58e3ff55305cf30272ce80f762fa6eab581af926b548e0817f58c517e35264ee77762faf7053bef1243a922b32df7707ab6eeff36aba27841b771b1b952a595ce0c70649117a9d72ee5edc3af9e331ad76fd8ca5112e05820e9f86e108d54a6742c532cc1928c550bcf082249733ffe37a3a747ab5fea15b0e0ef30a0e4f9b3374c0f79a1bc72ffe2bb90f318cb173967168fa3621bbbe948155fb45ebedf3acb62e1f0e0cae7dccab4dba3746b27bedd0f0c63b51aa5fdaa87e3ae61f2f9670c35b50b107a4684855ace91e3313b69a60fee21c918c34b4515a6d3a76a90eaca8b997162efcfcaabc3622a635b4c67f0f6d7629db54a319febaa7d88a9ece7f5c8b60f669dafc663eeff276b9c8a44d4da2eead88ad4d57cd8744d37a8298727e5280780718bb786d6f37fc734b8eea549ec8ffe9d1a3aaf491abe433d978e853249fbb5030dcb991ecf65a0f07f2b51b06998cea7bdf1ff3d36a282d44e2abda6607613f2bc6a9fc9c50b2df80cbd58e86c5d60ad03e3dd7d5b6b70d8e82dfb17048835a31802955b8fe13788aad99e5444b3c8fa26608eb30bfc912d69c24d94c31cf6437785195b134f86bb0866eaef4eaec16d8391849d0d51e78769770df987d9d6f5b00bb2337e2e757895c9be0f063761ff9cb31b3011816c0174711198612222655b6778949f544c7f4f0f7c75adf3c86b0b8782ab9cdae4e000b36b8f4a78cc0872e75ceda26c212276838cd8420b0922979f1e3a3722a3b11e3ebe7d2caab717914b006c60eca173f1488499de4ae5387ecee076a727cfb909541a0536e055bf065da6b532e8e38f14b9a2ba83a5611e1693ec6ec078ae31e3e03167397822bc99050c3493a314458b36a55adb86f20aff05b6f1f17aef2bc3d08773230005cef450a12f10caf7178eec56113fbd43f4fe3798884527b9f0748855da8c12af8e3491ea90e459a903fe95898e91a1ededac98b5dce3ef8b82748ff006d92fbb03a1bf97473a9a669bdd31bdff03281756bfb9132bfbb17abbc29635450a7eeb7241783f5fa28597efe316192905a12f8347dc1dd829be94d37fe3231e3aaf3101fed591d98ba2253b9be165a136954743619c8c1da4f316fe7ab97b407aa1b5a9178151c03cd113a694137f0ac919cbe1e3dcb9879343a70669dce6cecbb86867ddf4db0eb1f6d69420571be1fa151b3e281bbac55fbb923d35d65a11029cd6da0e04be8cc3f99e36e9cd421c629192613e1e7f156ff4b4da9d68aab15db2e2b8f240a73f407b289b3f4810dc4bb9cda3841e0f59bf43049ab32ff160ab4cc9de14dd3d39a4dd5c8b2a30e7a9fb3709dde2760fad29a870e72d856cb4f6892a0b9939f923d3d94373a525bbf8b4458bf047f880f11b917084b441eabb44005469f165e4d71a6ed6c00d9bcaedeb19c8f8c23bdfa6bdb49a911a55c6cf2e808a30e3c67fd74427188ddfa3239f5e1859b8ea90e04db504f9070ac7b5ffe039c4d97277ce642f496cd0f2883e8072550b86de64f5f7375a924e457cfa165da578cd7b4aa63e5efba2c3523a83bb445f731b306be6e90a5022763e55bb68378f9bddc1c09c21060cc969f5211f92c94438fecbf26f5e18aff92cbdc7954bd64e1f96a469dbe2a62646a9dc60021bd9c6b84ac2ff73fc79ea04e87ceeae7ca0aa9c1ec38d037baf47000e5a126290a3ca6ade412f46e80e8755d8f7e3574ac30f5e7a56ecb3d56137cdbdca2964a6b1878bc5968094e51fdd29f1d5c5efe26535c3f02628f4806198ecc941290ceb7902e33578f38eed530c2a24ccebdcbfc6bf5e9a2cc048b7f7499b525232d94c314787cfbd2b30cd1da40911a94713f46bf906b5d6608063d0dfdb10b40d24d0eb022f09ab67b7d01972ff12bdce4c4a192253eb622225100640126ec58dbaeeb5fb1c2ecc6f0d43afd8a627a73d9ea8d5998c747e8a5de0a33dd52eb339915f9a38c5771ebb6bde2a3ff128bb321b0c7fc5295c89a574236e01279c4e426cfefab6057c45676c9863b9b72c39661b82220a350867476450e22fbdd78688bb733c1b9ad53c5e4310d86926bf64bd3365c78efeb11ff35fe8e720038e9864bc47221b2ef884df59bfdba1a4559d8eebf0fce12fe96c6117d4c0cfdc33ddaaeba5a17ead44eb76c4138e88e9b60391236e87e1b06b9fec8d95a4e219356d04091bd160a3164a2aaeab73cf4e18c0b297b54b71c88d6f601c90cda8c94c2325412a1074212c62a02e40343b2261902d26b06bf005085e29bb9c2d03f539b5c00fc0eaf12120677f1bef214804dc5ae87e4e3f241e5e700cd612233cb5bbf4f0606cf45206a87089e2ff0479244fee8ddda268874bbc135a8d5926d3ebedb9a09ed938c072e22773fd2209b4631907d3b9dada4ca29d6e3a7bd2b07193e5081f8407e29efb8f49cc2e4eb24e976f43231ee056e2f34dfc681f24851";
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