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
    <div id="header" class="uh bc-text-head ub bc-bg">
			<div class="nav-btn " id="nav-left">
				<div class="fa fa-angle-left fa-2x" v-on:click="history()"></div>
			</div>
			<h1 class="ut ub-f1 ulev-3 ut-s tx-c" tabindex="0">签到</h1>
			<div class="nav-btn" id="nav-right">
			</div>
	</div
    <div class="ub uinn white">
            <span class="gray">打卡时间：</span><span>12:00</span>
        </div>
        <div class="ub uinn white umar-t"><span class="gray">项目名称：</span><span>项目项目</span></div>
        <div class="ub uinn white">
            <span class="gray">打卡地点：</span>
            <span>广东省珠海市香洲区翠微西路8号</span>
        </div>
        <div class="uba bc-border uinput ub ub-f1 white umar-t">
    <textarea placeholder="备注....." type="text" class="ub-f1"></textarea>
</div>
<div class="ub ubt uh ub-ver white gray" style="position:absolute;bottom:0;left:0;">
    <div class="ub-f1 tx-c uinn gray">
        <span class="fa fa-send-o"></span>
    </div>
    <div class="ub-f1 tx-c">提交</div>
</div>
</template>