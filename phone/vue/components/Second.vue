<template>
    <div id="app">
		<div id="header" class="uh bc-text-head ub bc-head">
                <div class="nav-btn " id="nav-left"></div>
                <h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">现场考勤</h1>
                <div class="nav-btn" id="nav-right">
                    <!--按钮开始-->

                    <!--按钮结束-->
                </div>
            </div>
	<div class="ub">
            <div class="ub-f1">管理员</div>
            <div class="ub-f1 ub ub-pe"><input type="date" value="2016-12-16" /></div>
        </div>
        <div class="ub"> <span>签</span>签到打卡</div>       
            <div class="ub ub-pc">              
                <div class="circle" id="morning">
                    <div class="ub ub-ver" id="circles">
                        <div class="ub-f1 ub ub-ae ub-pc">签到</div>
                        <div class="ub-f1 ub ub-pc ub-ac">12:00</div> 
                    </div>               
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
				
				}
			}
		}
	</script>