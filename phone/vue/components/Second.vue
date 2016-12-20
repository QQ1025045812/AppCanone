<template>
		<div id="header" class="uh bc-text-head ub white">
                <div class="nav-btn " id="nav-left">
					<div class="fa fa-angle-left fa-2x" v-on:click="history()"></div>
				</div>
                <h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">签到</h1>
                <div class="nav-btn" id="nav-right">
                </div>
            </div>
	<div class="ub white uinn umar-t">
            <div class="ub-f3">管理员</div>
            <div class="ub-f1 ub ub-pe">
                <div class="uba gray"><input type="date" class="bordernone" v-bind:value="days"/></div>
            </div>
        </div>
        <div class="ub umar-t uinn white"> <span>上</span>上班打卡</div>       
            <div class="ub ub-pc head uinn white">              
                <div class="circle" id="morning" v-on:click="add()">
                    <div class="ub ub-ver" id="circles">
                        <div class="ub-f1 ub ub-ae ub-pc">打卡</div>
						<div class="ub-f1 ub ub-pc ub-ac">{{seconds}}</div> 
                    </div>               
                </div>
            </div>                   
</template>
<style scoped>

		.head{
			background:#f6fdff;
		}
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
		.white{
            background:#fff;
        }
		.bordernone{
			border:none;
		}
		.gray{
			color:#ccc;
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
				add:function(){
					var self=this;
					self.$route.router.go('/components/Second2')
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