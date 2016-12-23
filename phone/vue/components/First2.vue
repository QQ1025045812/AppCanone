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
        
</style>
<template>
    <div id="header" class="uh bc-text-head ub white">
			<div class="nav-btn " id="nav-left">
				<div class="fa fa-angle-left fa-2x" v-on:click="history()"></div>
			</div>
            <h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">{{data}}</h1>
			<div class="nav-btn" id="nav-right">
			</div>
    </div>
    <div class="ub uinn white umar-t">
            <span class="gray">打卡时间：</span><span>{{time}}</span>
        </div>
        <div class="ub uinn white umar-t"><span class="gray">项目名称：</span><span>项目项目</span></div>
        <div class="ub uinn white umar-t">
            <span class="gray">打卡地点：</span>
            <span v-bind:class="{'fa fa-spinner fa-spin':isok}">{{address}}</span>
        </div>
        <div class="uba bc-border uinput ub ub-f1 umar-t">
    <textarea placeholder="备注....." type="text" class="ub-f1 white" v-model="note"></textarea>
</div>
<div class="ub ubt uh ub-ver white gray position-bottom" v-on:click="savedata(nochange)">
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
                address:"",
                note:'',
                time:getSeconds(),
                data:this.$route.params.time,
                nochange:this.$route.params.time,
                isok:true,
            }
        },
        methods:{
            history:function(){
                window.history.go(-1);
            },
            savedata:function(datas){
                var arr=[];
                 var news={
                    "address":this.address,
                    "time":this.time,
                    "notes":this.note,
                }
                var old=localStorage.getItem(datas);
                if(old!=null){
                    arr=JSON.parse(old);
                    arr.push(news)
                }else{
                    arr.push(news)
                }
               localStorage.setItem(datas,JSON.stringify(arr));
               this.history();
            }
        },
        ready:function(){
            var self=this;
            if(this.data=="detail"){
                this.data="上班签到"
            }else{
                this.data="上班打卡"
            };
            uexBaiduMap.getCurrentLocation();
            uexBaiduMap.cbCurrentLocation = function(data){
               var datas=JSON.parse(data);
               var json={
                   longitude: datas.longitude,
                   latitude: datas.latitude
               };
               uexBaiduMap.reverseGeocode(json, function(error,data) {
                   if(data.address==undefined){
                        self.address="当前位置定位错误...."
                   }
                    self.isok=false;
                    self.address=data.address;
              });
            }
        }
    }
</script>
