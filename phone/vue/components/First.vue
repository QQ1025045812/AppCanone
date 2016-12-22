<style scoped>
        .circle{
            width:8em;
            height:8em;
            border-radius:50%;
            color:#fff;
        }
        #morning{
            background:#1cc5ea;
        }
        #afternoon{
            background:#ffcc00;
        }
        #circles{
            height:100%;
            
        }
        .white{
            background:#fff;
        }
		.bordernone{
			border:none;
		}
		.gray{
			color:#ccc;
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
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">考勤</h1>
			<div class="nav-btn" id="nav-right">
			</div>
	</div>
	<div class="ub uinn white umar-t">
            <div class="ub-f3">管理员</div>
            <div class="ub-f1 ub ub-pe">
                <div class="uba gray"><input type="date" class="bordernone" v-bind:value="days"/></div>
            </div>
        </div>
        <div class="ub ub-ver" v-if="morningWorks">
			<div class="ub ub-f1 umar-t uinn white"> <span>上</span><span>打卡时间：</span><span>{{timem}}</span></div>
			<div class="ub ub-f1 umar-t uinn white"> <span>打卡地点：</span><span>{{addressm}}</span></div>        
            <div class="ub ub-f1 ub-pc uinn white" v-on:click="view('morning')">              
                <div class="circle" id="morning">
                    <div class="ub ub-pc ub-ac" id="circles">
                        <div class="ub-f1 ub ub-pc">查看详情</div>
                    </div>               
                </div>
            </div>
        </div>
		<div class="ub ub-ver" v-else>
        	<div class="ub ub-f1 umar-t uinn white"> <span>上</span>上班打卡</div>       
            <div class="ub ub-f1 ub-pc uinn white" v-on:click="add('morning')">              
                <div class="circle" id="morning">
                    <div class="ub ub-ver" id="circles">
                        <div class="ub-f1 ub ub-ae ub-pc">打卡</div>
						<div class="ub-f1 ub ub-pc ub-ac">{{seconds}}</div> 
                    </div>               
                </div>
            </div>
        </div>
		<div class="ub ub-ver" v-if="afternoonWorks">
		<div class="ub ub-f1 umar-t uinn white"> <span>下</span><span>打卡时间：</span><span>{{timea}}</span></div>
		<div class="ub ub-f1 umar-t uinn white"> <span>打卡地点：</span><span>{{addressa}}</span></div>             
		<div class="ub ub-f1 ub-pc uinn white" v-on:click="view('afternoon')">              
			<div class="circle" id="morning">
				<div class="ub ub-ac ub-pc" id="circles">
					<div class="ub-f1 ub ub-pc">查看详情</div>
				</div>               
			</div>
		</div>
</div>
			<div class="ub ub-ver" v-else>
				<div class="ub uinn umar-t white"> <span>下</span>下班打卡</div> 
            <div class="ub ub-pc uinn white" v-on:click="add('afternoon')">
                <div class="circle" id="afternoon">
                    <div class="ub ub-ver" id="circles">
                        <div class="ub-f1 ub ub-ae ub-pc">打卡</div>
						<div class="ub-f1 ub ub-pc ub-ac">{{seconds}}</div> 
                    </div>
                </div>
                
            </div>
			</div>

</template>
<script>
	export default{
		data:function(){
			return {
			days:getDays(),
			seconds:getSeconds(),
			morningWorks:false,
			afternoonWorks:false,
			addressm:'',
			timem:'',
			addressa:'',
			timea:'',
			}
		},
		ready:function(){
			localStorage.getItem("datas");
		},
		methods:{
			history:function(){
				window.history.go(-1);
			},
			add:function(time){
					this.$route.router.go('/attendance/'+time)
				},
			view:function(id){
				this.$route.router.go('/attendance/details/'+id)
			},
			secondsChange:function(){
				this.seconds=getSeconds();
			}
		},
		ready:function(){
			setInterval(this.secondsChange,1000);
			if(localStorage.getItem("morning")!=null){
				var data=JSON.parse(localStorage.getItem("morning"));
				this.addressm=data[0].address;
				this.timem=data[0].time;
				this.morningWorks=true;
			};
			if(localStorage.getItem("afternoon")!=null){
				var data=JSON.parse(localStorage.getItem("afternoon"));
				this.addressa=data[0].address;
				this.timea=data[0].time;
				this.afternoonWorks=true;
			};
		}
	}
</script>