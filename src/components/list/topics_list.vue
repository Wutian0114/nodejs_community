<template>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
        <mt-tab-container-item v-infinite-scroll="getMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div v-show="isShow">{{typeChange}}</div>
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
    </mt-loadmore>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

export default {
    data() {
        return {
            list: [],
            isShow: false,
            page: 1,
            limit: 10,
            loading: true,
            topicType: 'all',
            isFirst: true
        }
    },
    props: ['type'],
    methods: {
        getTopics(page, type, fn) {
            // Indicator.open('加载中...');

            let that = this;
            this.$http.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: page,
                    tab: type,
                    limit: that.limit
                }
            }).then(function (res) {

                let data = res.data;
                if (page == 1) {
                    that.list = []
                }
                that.list.push.apply(that.list, data.data);

                //关闭加载提示
                // Indicator.close();

                //数据加载完成后，重置提示加载信息
                if (fn) {
                    fn();
                }


            }).catch(function (res) {
                if (res instanceof Error) {
                    Toast('Error: ' + res.message);
                }
            })
        },
        loadTop() {
            //下滑刷新
            this.isFirst = false;
            this.page = 1;

            console.log('下滑刷新')
            this.getTopics(this.page, this.topicType, () => {
                this.$refs.loadmore.onTopLoaded();
            });
        },
        getMore() {

            this.loading = true;
            this.page++;
            console.log('加载'+this.page)
            this.getTopics(this.page, this.topicType, () => {
                this.loading = false;
            })
        },
        changeLoading(){
            this.loading = false;
            this.page = 1;
        }
    },

    computed: {
        typeChange() {
            console.log('计算属性')
            this.topicType = this.type;
            this.getTopics(1, this.topicType, this.changeLoading);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/_base.scss';

.mint-loadmore {
    width: 100%;
    .mint-tab-container-item {
        background-color: $bg-color;
        >.content-item {
            width: 100%;
            padding: 14px;
            margin-top: 5px;
            background-color: #fff;
            >.box {
                position: relative;
                >.tipTop,
                .tipGood {
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
                >.tipTop {
                    right: 0;
                    top: 0;
                    background-color: $top-color;
                }
                >.tipGood {
                    right: 0;
                    top: 25px;
                    background-color: $good-color;
                }
                .top-box {
                    >.head-photo {
                        width: 45px;
                        height: 45px;
                        float: left;
                        border-radius: 50%;
                        overflow: hidden;
                        background-color: $bg-color;
                        >img {
                            width: 45px;
                            height: 45px;
                        }
                    }
                    >.title {
                        width: 200px;
                        float: left;
                        margin-left: 20px;
                        font-size: 14px;
                    }
                }
                .bottom-box {
                    color: #92a8c1;
                    font-size: 12px;
                    display: flex;
                    margin-top: 10px;
                    >.left {
                        flex: 3;
                        >.create-time {
                            margin-left: 10px;
                        }
                    }
                    >.right {
                        flex: 2;
                        >i {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>
