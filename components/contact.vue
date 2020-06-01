<template>
    <div class="footer-container">
        <div class="left-col">
            <img src="~/assets/img/png/logo.png" alt="" class="logo-img">
            <div class="social-media">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <p class="rights-text">&copy; 2020 Created By Enerjog Ltd. All Rights Reserved.</p>
        </div>
        <div class="right-col">
            <h1>Subscribe!</h1>
            <div class="contact-border"></div>
            <p>Register your e-mail and receive regular updates</p>
            <form action="" class="newsletter-form">
                <input type="text" class="txtb" placeholder="Enter your e-mail">
                <br>
                <input type="submit" class="contact-submit-btn" value="submit">
            </form>
        </div>
    </div>
</template>

<style type="text/css">
    #contact
    {
        background: #f1f1f1;
        padding: 90px 0;
        clear: both;
    }

    .footer-container
    {
        max-width: 1300px;
        margin: auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap-reverse;
    }

    .logo-img
    {
        width: 180px;
    }

    .social-media
    {
        margin: 20px 0;
    }

    .social-media a
    {
        color: #001a21;
        margin-right: 25px;
        font-size: 22px;
        text-decoration: none;
        transition: .3s linear;
    }

    .social-media a:hover
    {
        color: rgb(211, 70, 13);
    }

    .right-col h1 
    {
        font-size: 26px;
    }

    .contact-border
    {
        width: 140px;
        height: 4px;
        background: rgb(211, 70, 13);
    }

    .newsletter-form
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .txtb
    {
        flex: 1;
        padding: 18px 40px;
        font-size: 16px;
        color: #293043;
        background: #ddd;
        border: none;
        font-weight: 700;
        outline: none;
        border-radius: 30px;
        min-width: 260px;
    }

    .contact-submit-btn
    {
        padding: 18px 40px;
        font-size: 16px;
        color: white;
        background: rgb(211, 70, 13);
        border: none;
        font-weight: 700;
        outline: none;
        border-radius: 30px;
        margin-left: 20px;
        cursor: pointer;
        transition: opacity .3s linear;
    }

    .contact-submit-btn:hover
    {
        opacity: .7;
    }

    @media screen and (max-width: 960px)
    {
        .footer-container
        {
            max-width: 600px;    
        }

        .right-col
        {
            width: 100%;
            margin-bottom: 60px;
        }

        .left-col
        {
            width: 100%;
            text-align: center;
        }
    }

    @media screen and (max-width: 700px)
    {
        .contact-submit-btn
        {
            margin: 0;
            width: 100%;
            margin-top: 20px;
        }
    }

</style>

<script>
export default {
    data(){
        return {}
    }
}
</script>