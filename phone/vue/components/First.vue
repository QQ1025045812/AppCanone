<template>
	<div id="header" class="uh bc-text-head ub bc-head">
			<div class="nav-btn " id="nav-left"></div>
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">考勤</h1>
			<div class="nav-btn" id="nav-right">
			</div>
	</div>
	<div class="ub">
		<div class="ub-f1">管理员</div>
		<div class="ub-f1 ub ub-pe"><input type="date" value="2016-12-16" /></div>
    </div>
	<div class="ub"> <span>上</span>上班打卡</div>       
		<div class="ub ub-pc">              
			<div class="circle" id="morning">
				<div class="ub ub-ver" id="circles">
					<div class="ub-f1 ub ub-ae ub-pc">打卡</div>
					<div class="ub-f1 ub ub-pc ub-ac">12:00</div> 
				</div>               
			</div>
		</div>
		<div class="ub"> <span>上</span>上班打卡</div> 
		<div class="ub ub-pc">
			<div class="circle" id="afternoon">
				<div class="ub ub-ver" id="circles">
					<div class="ub-f1 ub ub-ae ub-pc">打卡</div>
					<div class="ub-f1 ub ub-pc ub-ac">12:00</div> 
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
        #afternoon{
            background:#ffcc00;
        }
        #circles{
            height:100%;    
        }
</style>