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
        .position-bottom{
            position:absolute;
            bottom:0;
            left:0;
        }
        .min-height{
            height:3em;
        }
        
</style>
<template>
    <div id="header" class="uh bc-text-head ub white">
			<div class="nav-btn " id="nav-left">
				<div class="fa fa-angle-left fa-2x" v-on:click="history()"></div>
			</div>
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">签到</h1>
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
        <div class="uba bc-border uinput ub ub-f1 umar-t">
    <textarea placeholder="备注....." type="text" class="white"></textarea>
</div>
<div class="ub ubt uh ub-ver white gray position-bottom" v-on:click="savedata()">
    <div class="ub-f1 tx-c uinn gray">
        <span class="fa fa-send-o"></span>
    </div>
    <div class="ub-f1 tx-c">提交</div>
</div>
</template>
<script>
    export default{
        data:function(){
            return {
                time:"12:00",
                address:'广东省珠海市香洲区翠微西路8号',
                note:'',
            }
        },
        methods:{
            history:function(){
                window.history.go(-1);
            },
            savedata:function(datas){
                alert(1)
                var arr=[];
                 var news={
                    "address":this.address,
                    "time":this.time,
                }
                var old=localStorage.getItem(datas);
                if(JSON.stringify(old)!="null"){
                    arr=JSON.parse(old);
                    arr.push(news)
                }else{
                    arr.push(news)
                }
               localStorage.setItem(datas,JSON.stringify(arr));
               this.history();
            },
        },
        ready:function(){
                //this.$route.params.id
                //alert(0)
                console.log("000")
                console.log(this.$route.params.id)
            }
    }
</script>