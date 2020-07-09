<template>
    <div>
        <h1>D3 BarChart</h1>
        <div class="container-chart text-align-left">
            <div class="chart"></div>
        </div>
        <button @click="handleClickRouteHome">뒤로</button>
    </div>
</template>

<script>
    import * as d3 from 'd3'

    export default {
        mounted() {
            let data = [4, 8, 15, 16, 23, 42]
            d3.select('.chart')
                .selectAll('div')
                .data(data)
                .enter()
                .append('div')
                .style('width', function(d) {
                    return d * 10 + 'px'
                })
                .text(function(d) {
                    return d
                })
        },
        methods: {
            handleClickRouteHome() {
                this.$router.push({
                    name: 'PageList',
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
    .chart div {
        font: 10px sans-serif;
        background-color: steelblue;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }
    .container-chart {
        margin: auto;
    }
</style>
