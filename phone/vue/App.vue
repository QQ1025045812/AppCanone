	<style scoped>
		.fonts{
			font-size:2.5em;
		}
		.blue{
			color:#35a3e2;
		}
		.green{
			color:#1dc565;
		}
		.orange{
			color:#ffa54e;
		}
		.red{
			color:#fc6785;
		}
		.uinn-ahz{
			padding:1em;
		}
		.uinn-top{
			padding-top:0.5em;
		}
		.bc-white{
			background:#fff;
		}
		.head{
			background:#f6fdff;
		}
		
	</style>
	<template>
			<div id="header" class="uh bc-text-head ub bc-white">
			<div class="nav-btn " id="nav-left"></div>
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">现场考勤</h1>
			<div class="nav-btn" id="nav-right">
			</div>
		</div>
		<div class="ub" style="width:100%">
			<img style="width:100%" src="../images/banner.jpg" />
		</div> 
		<div class="ub ub-ver">
			<div class="ub-f1 ub bc-white">
				<a class="ub-f1 ub ub-pc ub-ver ub-con uinn-ahz ubr bc-border ubb" v-link="{path:'/components/First'}">
					<div class="ub-f1 ub ub-pc">
						<span class="fa fa-hand-o-up fonts blue"></span>
					</div>
					<div class="ub-f1 ub ub-pc uinn-top">考勤</div>
				</a>
				<a class="ub-f1 ub ub-pc ub-ver ub-con uinn-ahz ubr bc-border ubb " v-link="{path:'/components/Second'}">
					<div class="ub-f1 ub ub-pc">
						<span class="fa fa-flag-o fonts green"></span>
					</div>
					<div class="ub-f1 ub ub-pc uinn-top">签到</div>
				</a>
				<div class="ub-f1 ub ub-pc ub-ver ub-con uinn-ahz bc-border ubb">
					<div class="ub-f1 ub ub-pc">
						<span class="fa fa-users fonts orange"></span>
					</div>
					<div class="ub-f1 ub ub-pc uinn-top">团队足迹</div>
				</div>
			</div>
			<div class="ub-f1 ub bc-white">
				<div class="ub-f1 ub ub-pc ub-ver ub-con uinn-ahz ubr bc-border">
					<div class="ub-f1 ub ub-pc">
						<span class="fa fa-history fonts red"></span>
					</div>
					<div class="ub-f1 ub ub-pc uinn-top">考勤统计</div>
				</div>
				<div class="ub-f1 ub ub-pc ub-ver ub-con uinn-ahz">
					<div class="ub-f1 ub ub-pc"></div>
					<div class="ub-f1 ub ub-pc"></div>
				</div>
				<div class="ub-f1 ub ub-pc ub-ver ub-con uinn-ahz">
					<div class="ub-f1 ub ub-pc"></div>
					<div class="ub-f1 ub ub-pc"></div>
				</div>
			</div>
		</div>
	</template> 
	<script>
		export default{
			data:function(){
				return {
				
				}
			},
			methods:{
				first:function(){
				
				},
				second(){
				
				}
			}
		}
	</script>          
	 