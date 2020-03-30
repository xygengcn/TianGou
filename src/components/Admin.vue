<!-- 管理界面 -->
<template>
    <div class="admin">
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{getMyTime(item.datetime)}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="del(item)">删除按钮</el-button>
                    </div>
                    <div class="text">
                        {{item.text}}
                    </div>
                </el-card>
            </li>
        </ul>
        <div class="saveBtn" @click="save">保存</div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                data: []
            };
        },
        methods: {
            getMyTime(timestamp) {
                var date = timestamp ? new Date(parseInt(timestamp)) : new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                return year + '-' + month + '-' + day;
            },
            del(item) {
                this.data = this.data.filter(el => {
                    return el != item;
                })
            },
            save() {
                let param = {
                    data: JSON.stringify(this.data)
                };
                this.$http.post("admin", param).then(
                    res => {
                        if (res.data == 1) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                        } else {
                            this.$message({
                                message: '保存失败',
                                type: 'error'
                            });
                        }
                    }).catch(err => {
                    this.$message({
                        message: '保存失败',
                        type: 'error'
                    });
                })
            },
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
        computed: {},
        created() {
            var pass = prompt("请输入密码", "");
            this.$http.get('login', pass).then(res => {
                if (res.data.code == 1) {
                    this.data = JSON.parse(res.data.data).sort(this.compare('datetime'));
                } else {
                    this.$router.push('/');
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    });
                }

            })

        }
    };
</script>
<style scoped>
    ul,
    li {
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 15px;
    }

    .saveBtn {
        position: fixed;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        background-color: #feca68;
        color: white;
        box-shadow: #cccccc 1px 1px 6px 1px;
        cursor: pointer;
    }
</style>