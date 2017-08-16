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
            <topicsList :type="selected"></topicsList>
        </mt-tab-container>
    </div>
</template>

<script>
import topicsList from '../components/list/topics_list';

export default {
    data() {
        return {
            selected: 'all'
        }
    },
    methods: {
        
    },
    components: {
        topicsList
    }
    // watch: 
}
</script>

<style lang="scss" scoped>

@import '../assets/sass/_home.scss'

</style>
