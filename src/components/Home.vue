<template>
    <div id="tpl">
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="all">全部</mt-tab-item>
            <mt-tab-item id="good">精华</mt-tab-item>
            <mt-tab-item id="share">分享</mt-tab-item>
            <mt-tab-item id="ask">问答</mt-tab-item>
            <mt-tab-item id="job">招聘</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="all">
                <div class="content-item" v-for="(item,index) in list" :key="index">
                    <div class="box">
                        <div class="top-box clearfix">
                            <div class="head-photo">
                                <img :src="item.author.avatar_url" />
                            </div>
                            <p class="title" v-text="item.title"></p>
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <span v-text="item.author.loginname"></span>
                                <span class="create-time">{{item.create_at | moment}}</span>
                            </div>
                            <div class="right">
                                <i class="iconfont icon-attention_light"></i>
                                <span v-text="item.visit_count"></span>
                                <i class="iconfont icon-comment"></i>
                                <span v-text="item.reply_count"></span>
                            </div>
                            
                        </div>
                        <span v-if="item.top" class="tipTop">顶</span>
                        <span v-if="item.good" class="tipGood">精</span>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="good">
                <mt-cell v-for="n in 10" :title="'内容2 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="share">
                <mt-cell v-for="n in 10" :title="'内容3 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="ask">
                <mt-cell v-for="n in 10" :title="'内容4 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="job">
                <mt-cell v-for="n in 10" :title="'内容5 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';

export default {
    data() {
        return {
            selected: 'all',
            list: []
        }
    },
    created(){
        this.getTopics();
    },
    methods: {
        getTopics(){
            let that = this;
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                params: {
                    page: 1,
                    tab: 'all',
                    limit: 10
                }
            }).then(function(res){
                if(res.status != 200){
                    Toast(res.statusText);
                    return;
                }

                let data = res.data;
                that.list = data.data;
            })
        }
    }
    // watch: 
}
</script>

<style scoped>
#tpl {
    padding: 50px 0;
}

#tpl .mint-navbar {
    margin-top: 50px;
}

/* 列表样式 */
.mint-tab-container-item {
    background-color: #eff2f7;
}

.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #80bd01;
    color: #80bd01; 
}
.content-item {
    background-color: #fff;
}

.content-item {
    width: 100%;
    padding: 14px;
    margin-top: 5px;

}
.content-item .box {
    position: relative;
}
.content-item .box > .tipTop, .content-item .box > .tipGood {
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    border-radius: 10%;
    color: #fff;
}
.content-item .box > .tipTop {
    right: 0;
    top: 0;
    background-color: #26a2ff;
}
.content-item .box > .tipGood {
    right: 0;
    top: 25px;
    background-color: #ef4f4f;
}

.content-item .top-box > .head-photo {
    width: 45px;
    height: 45px;
    float: left;
    border-radius: 50%;
    overflow: hidden;
    background-color: #eff2f7;
}
.content-item .top-box > .head-photo > img {
    width: 45px;
    height: 45px;
}
.content-item .top-box > .title {
    width: 200px;
    float: left;
    margin-left: 20px;
    font-size: 14px;
}

.content-item .bottom-box {
    color: #92a8c1;
    font-size: 12px;
    display: flex;
    margin-top: 10px;
}
.content-item .bottom-box > .left {
    flex:3;
}
.bottom-box > .left > .create-time {
    margin-left: 10px;
}
.content-item .bottom-box > .right {
    flex:2;
}
</style>
