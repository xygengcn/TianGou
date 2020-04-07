<!--  -->
<template>
    <div class="all">
        <div class="post">
            <card v-for="(item,index) in data" :key="index" :data="item"></card>
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
            compare(prop) {
                return function (obj1, obj2) {
                    var val1 = obj1[prop];
                    var val2 = obj2[prop];
                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    if (val1 > val2) {
                        return -1;
                    } else if (val1 < val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }

        },
        computed: {

        },
        created() {
            this.$http.get('all', '').then(res => {
                if (res.data) {
                    this.data = res.data.sort(this.compare('datetime'));
                }
            })
        }
    }
</script>
<style scoped>
    .all {
        min-height: 100%;
    }

    .post {
        margin-bottom: 100px;
        display: flex;
        flex-wrap: wrap;
    }
</style>