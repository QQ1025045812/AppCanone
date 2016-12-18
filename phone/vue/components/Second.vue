<template>
		<div id="header" class="uh bc-text-head ub bc-head">
                <div class="nav-btn " id="nav-left">
					<div class="fa fa-angle-left fa-2x" v-on:click="history()"></div>
				</div>
                <h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">签到</h1>
                <div class="nav-btn" id="nav-right">
                </div>
            </div>
	<div class="ub">
            <div class="ub-f1">管理员</div>
            <div class="ub-f1 ub ub-pe"><input type="date" v-bind:value="days" v-model="days"/></div>
        </div>
        <div class="ub"> <span>签</span>签到打卡</div>       
            <div class="ub ub-pc">              
                <div class="circle" id="morning">
                    <div class="ub ub-ver" id="circles">
                        <div class="ub-f1 ub ub-ae ub-pc">签到</div>
                        <div class="ub-f1 ub ub-pc ub-ac">{{seconds}}</div> 
                    </div>               
                </div>
            </div>                   
</template>
<style>
        .circle{
            width:8em;
            height:8em;
            border-radius:50%;
            color:#fff;
        }
        #morning{
            background:#1cc5ea;
        }
        #circles{
            height:100%;
            
        }
    </style>
	<script>
		export default{
			data:function(){
				return {
					days:this.getDays(),
					seconds:this.getSeconds()
				}
			},
			methods:{
				history:function(){
					window.history.go(-1);
				},
				getDays:function(){
					var date=new Date();
					var year = date.getFullYear();
					var month = date.getMonth()+1;
					var date = date.getDate();
					date=(date<=9?"0":"")+date;
					var result = year+'-'+month+'-'+date;
					return result;
				},
				getSeconds:function(){
					var date=new Date;
					var hour = date.getHours();
					var minute = date.getMinutes();
					minute=(minute<=9?"0":"")+minute;
					var second = date.getSeconds();
					second=(second<=9?"0":"")+second;
					var result =hour+':'+minute+':'+second;
					return result;
				},
				secondsChange:function(){
					this.seconds=this.getSeconds();
				}
			},
			ready:function(){
				setInterval(this.secondsChange,1000);
			}
		}
	</script>