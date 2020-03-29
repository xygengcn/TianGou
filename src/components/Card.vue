<!-- 卡片 -->
<template>
    <div class="card">
        <h3><img src="../assets/logo.png" alt="" class="card-icon">{{getMyTime(data.datetime)}}
            <span>{{data.weather}}</span><span>{{data.city}}</span></h3>
        <p> {{data.text}} </p>
    </div>
</template>
<script>
    export default {
        props: ['data'],
        methods: {
            getMyTime(timestamp) {
                var date = timestamp ? new Date(parseInt(timestamp)) : new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                return year + '-' + month + '-' + day;
            }
        }
    }
</script>
<style scoped>
    @import "../assets/font/ZCOOLKuaiLe-Regular.css";

    .card {
        font-family: "ZCOOLKuaiLe-Regular";
        margin: 15px auto;
        min-height: 200px;
        padding: 20px;
        position: relative;
        background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(rgb(255, 214, 140)), to(#f7f0e6), color-stop(.1, rgb(249, 215, 153)));
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom-right-radius: 60px 60px;
        box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);

    }

    .card:before {
        content: '';
        width: 25px;
        height: 20px;
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom-right-radius: 30px;
        box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
        transform:
            rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
    }

    .card:after {
        content: '';
        z-index: -1;
        width: 100px;
        height: 100px;
        position: absolute;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.2);
        display: inline-block;
        box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
        transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
    }

    .card p {
        font-size: 1.2em;
        margin-top: 15px;
        font-weight: 400;
        color: #5c5c5c;
        line-height: 1.5em;
        text-align: justify;
    }

    h3 {

        font-size: 1.2em;
        font-weight: bold;
        margin-top: 5px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        color: #333;
        line-height: 20px;
    }

    h3 span {
        float: right;
        margin-right: 10px;
    }

    .card-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
</style>