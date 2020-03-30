<!-- 添加-->
<template>
    <div class="add">
        <el-form :model="data" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="form">
            <el-form-item label="日记" prop="text">
                <el-input type="textarea" v-model="data.text" autocomplete="off" class="textarea"
                    placeholder="我是一只舔狗，舔到最后应有尽有"></el-input>
            </el-form-item>
            <el-form-item label="心情" prop='weather'>
                <el-select v-model="data.weather" placeholder="请选择心情">
                    <el-option label="晴" value="晴"></el-option>
                    <el-option label="阴" value="阴"></el-option>
                    <el-option label="雨" value="雨"></el-option>
                    <el-option label="雷" value="雷"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市" prop="city">
                <el-input v-model="data.city" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">舔狗按爪</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('不写东西就是不合格的舔狗'));
                } else {
                    if (value.length < 15) {
                        callback(new Error('不到15个字，不是合格的舔狗'));
                    }
                    callback();
                }
            };
            return {
                data: {
                    datetime: "",
                    weather: "晴",
                    city: "",
                    text: ""
                },
                rules: {
                    city: [{
                        required: true,
                        message: '请输入城市',
                        trigger: 'blur'
                    }],
                    text: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }]
                }

            }
        },
        methods: {
            checkSpecialKey(str) {
                var specialKey = "[`~!#$^&*()=|{}':;'\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
                for (var i = 0; i < str.length; i++) {
                    if (specialKey.indexOf(str.substr(i, 1)) != -1) {
                        return false;
                    }
                }
                return true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('add', this.data).then(
                            res => {
                                if (res.data == 1) {
                                    this.$message({
                                        message: '恭喜你又舔一天',
                                        type: 'success'
                                    });
                                    this.$router.push('/');
                                } else {
                                    this.$message({
                                        message: '舔狗失败',
                                        type: 'error'
                                    });
                                }

                            }).catch(err => {
                            this.$message({
                                message: '舔狗失败',
                                type: 'error'
                            });
                        })
                    } else {
                        this.$message({
                            message: '你是个不合格的舔狗',
                            type: 'error'
                        });
                        return false;
                    }
                });
            }
        }
    }
</script>
<style>
    .add {
        width: 50%;
        margin: 50px auto;
    }

    @media screen and (max-width: 1024px) {
        .add {
            width: 100%;
            margin: 50px auto;
        }

        .add label {
            width: 50px !important;
        }

        .add .el-form-item__content {
            margin-left: 50px !important;

        }

    }

    .add .form {
        width: 100%;
    }

    .add .el-form-item {
        margin: 50px auto;
    }

    .add .form .el-select {
        width: 100%;

    }

    .add .textarea>textarea {
        height: 250px;
        resize: none;
        padding: 20px;
    }
</style>