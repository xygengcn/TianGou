<!--  -->
<template>
    <div class="all">
        <div class="post">
            <el-row :gutter="30">
                <el-col :xs="24" :sm="24" :md="8" :lg="6" v-for="(item,index) in data" :key="index">
                    <card :data="item"></card>
                </el-col>
            </el-row>

        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
    import card from './Card';
    import myfooter from './Footer'
    export default {
        name: '',
        components: {
            card,
            myfooter
        },
        data() {
            return {
                data: []
            }
        },
        methods: {

        },
        computed: {

        },
        created() {
            this.$http.get(this.$http.url.all).then(res => {
                this.data = JSON.parse(res);
            })
        }
    }
</script>
<style scoped>
    .post {
        margin-bottom: 100px;
    }
</style>