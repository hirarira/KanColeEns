function ensei_object(name,time,nenryo,danyaku,kozai,boki){
	this.name = name;
	this.e_time = Number(time);
	this.e_hour = Math.floor(time/60);
	this.e_min = Number(time%60);
	this.nenryo = Number(nenryo);
	this.danyaku = Number(danyaku);
	this.kozai = Number(kozai);
	this.boki = Number(boki);
	this.show_all = show_all_s;
	function show_all_s(r_show){
		r_show.innerHTML += "遠征名："+this.name+" 出撃時間："+this.e_hour+"時間"+this.e_min+"分<br>";
	}
}
function exp_support(){
	var r_show = document.getElementById("show_result");
	var j_hour = Number(document.form_inf.time_hour.value);
	var j_min = Number(document.form_inf.time_min.value);
	var zuiji = document.form_inf.zuiji.checked;
	var ens_list = new Array();
	//名前,遠征時間(分),燃料,弾薬,鋼材,ボーキ
	ens_list[0] = new ensei_object("練習航海",15,0,30,0,0);
	ens_list[1] = new ensei_object("長距離練習航海",30,0,100,30,0);
	ens_list[2] = new ensei_object("警備任務",20,30,40,30,0);
	ens_list[3] = new ensei_object("対潜警戒任務",50,0,60,0,0);
	r_show.innerHTML = j_hour+"時間"+j_min+"分<br>";
	r_show.innerHTML+= "随時：" + zuiji +"<br>";
	for(i=0;i<ens_list.length;i++){
		ens_list[i].show_all(r_show);
	}
	ens_list.sort(
		function(a,b){
			var x = a.e_time;
			var y = b.e_time;
			if(x>y){
				return 1;
			}
			else if(x<y){
				return -1;
			}
			else{
				return 0;
			}
		}
	);
	for(i=0;i<ens_list.length;i++){
		ens_list[i].show_all(r_show);
	}
}