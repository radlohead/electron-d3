<template>
    <div id="wrapper">
        <h1>Page List</h1>
        <ul>
            <li @click="handleClickRouteGo('barChart1')">Bar Chart1</li>
            <li @click="handleClickRouteGo('barChart2')">Bar Chart2</li>
        </ul>
    </div>
</template>

<script>
    import * as d3 from 'd3'

    export default {
        name: 'PageList',
        methods: {
            handleClickRouteGo(routeName) {
                this.$router.replace({
                    name: routeName,
                })
            },
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
</style>
