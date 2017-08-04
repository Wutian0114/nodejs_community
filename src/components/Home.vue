<template>
    <div id="tpl">
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="1" class="is-selected">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                1
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                2
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                3
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: ''
        }
    }
    // watch: 
}
</script>

<style scoped>
#tpl {
    padding-top: 50px;
}
#tpl .mint-navbar {
    margin-top: 50px;
}
</style>
