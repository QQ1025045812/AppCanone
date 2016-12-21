<style scoped>
    .white{
        background:#fff;
    }
    .gray{
        color:#aaa;
    }
    .head{
			background:#f6fdff;
		}
</style>
<template>
    <div id="header" class="uh bc-text-head ub white">
			<div class="nav-btn " id="nav-left">
				<div class="fa fa-angle-left fa-2x" v-on:click="history()"></div>
			</div>
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">上班打卡</h1>
			<div class="nav-btn" id="nav-right">
			</div>
    </div>
    <div class="ub uinn white umar-t">
            <span class="gray">打卡时间：</span><span>12:00</span>
        </div>
        <div class="ub uinn white umar-t"><span class="gray">项目名称：</span><span>项目项目</span></div>
        <div class="ub uinn white umar-t">
            <span class="gray">打卡地点：</span>
            <span>广东省珠海市香洲区翠微西路8号</span>
        </div>
        <div class="ub ub-ver">
            <div class="ub-f1">备注：</div>
            <div class="ub-f1">打卡测试.........</div>
        </div>
</template>
<script>
    export default{
        data:function(){
            return {}
        },
        methods:{
            history:function(){
                window.history.go(-1);
            }
        }
    }
</script>