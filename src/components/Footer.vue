<!-- footer -->
<template>
    <footer class="footer">
        <router-link to='/add' class="btn" title="添加舔狗日记"><img class="footer-add" alt="舔狗日记Logo"
                src="../assets/logo.png">
        </router-link>
    </footer>
</template>
<style scoped>
    .footer {
        height: 80px !important;
        bottom: 30px;
        left: 0;
        right: 0;
        position: fixed;
        text-align: center;
    }

    .footer .btn {
        margin: 0px auto;
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        line-height: 80px;
        box-shadow: #feca68 1px 1px 6px 0px;
        background: white;
    }

    .footer-add {
        width: 60px;
        height: 60px;
        margin: 10px;
    }
</style>