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
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">打卡详情</h1>
			<div class="nav-btn" id="nav-right">
			</div>
    </div>
    <div class="ub uinn white umar-t">
            <span class="gray">打卡时间：</span><span>{{time}}</span>
        </div>
        <div class="ub uinn white umar-t"><span class="gray">项目名称：</span><span>项目项目</span></div>
        <div class="ub uinn white umar-t">
            <span class="gray">打卡地点：</span>
            <span>{{address}}</span>
        </div>
        <div class="ub ub-ver">
            <div class="ub-f1">备注：</div>
            <div class="ub-f1">{{note}}</div>
        </div>
</template>
<script>
    export default{
        data:function(){
            return {
                address:'',
                time:'',
                note:'',
            }
        },
        methods:{
            history:function(){
                window.history.go(-1);
            },
            getdata:function(type){
				var data=JSON.parse(localStorage.getItem(type));
				this.address=data[0].address;
				this.time=data[0].time;
                this.note=data[0].notes;
            }
        },
        ready:function(){
            this.getdata(this.$route.params.id)
        },
    }
</script>