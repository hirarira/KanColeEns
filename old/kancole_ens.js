function ensei_object(no , name , time , exp , nenryo , danyaku , kozai , boki , need_lv , need_num , need_ship , remark){
	this.no = no;
	this.name = name;
	this.e_time = Number(time);
	this.e_hour = Math.floor(time/60);
	this.e_min = Number(time%60);
	this.exp = Number(exp);
	this.nenryo = Number(nenryo);
	this.danyaku = Number(danyaku);
	this.kozai = Number(kozai);
	this.boki = Number(boki);
	this.need_lv = Number(need_lv);
	this.need_num = Number(need_num);
	this.need_ship = need_ship;
	this.remark = remark;
	this.need_all = 0;
	// 表示関数
	this.show_all = show_all_s;
	function show_all_s(){
		var ens_list = "";
		if(this.need_all != 0){
			ens_list += "<tr><td>" + this.no + "</td><td>" + this.name + "</td><td>" + this.e_hour + "時間" + this.e_min + "分" + "</td><td>";
			ens_list += this.exp + "</td><td>" + this.nenryo + "</td><td>" + this.danyaku + "</td><td>" + this.kozai + "</td><td>" + this.boki + "</td><td>";
			ens_list += this.need_lv + "</td><td>" + this.need_num + "</td><td>" + this.need_ship + "</td><td>" + this.remark;
			ens_list += "</td></tr>";
		}
		return ens_list;
	}
	// 重要度決定関数
	this.need_object = need_object_s;
	function need_object_s(need_v,time){
		this.need_all += this.nenryo * need_v[0];
		this.need_all += this.danyaku * need_v[1];
		this.need_all += this.kozai * need_v[2];
		this.need_all += this.boki * need_v[3];
		if(this.e_time > time){
			this.need_all = 0;
		}
	}
}
function exp_support(){
	var r_show = document.getElementById("show_result");
	var j_hour = Number(document.form_inf.time_hour.value);
	var j_min = Number(document.form_inf.time_min.value);
	// 随時チェック
	var zuiji = document.form_inf.zuiji.checked;
	// 物資必要チェック
	var need_obj = new Array();
	need_obj[0] = document.form_inf.c_nenryo.value;
	need_obj[1] = document.form_inf.c_danyaku.value;
	need_obj[2] = document.form_inf.c_kozai.value;
	need_obj[3] = document.form_inf.c_boki.value;
	
	var ens_list = new Array();
	// No , 名前 , 遠征時間(分) , EXP , 燃料 , 弾薬 , 鋼材 , ボーキ , 必要旗艦Lv , 必要艦隊数 , 必要艦娘 , 備考
	ens_list[0] = new ensei_object(1,"練習航海",15,10,0,30,0,0,1,2,"なし","なし");
	ens_list[1] = new ensei_object(2,"長距離練習航海",30,20,0,100,30,0,2,4,"なし","なし");
	ens_list[2] = new ensei_object(3,"警備任務",20,30,30,40,30,0,3,3,"なし","なし");
	ens_list[3] = new ensei_object(4,"対潜警戒任務",50,30,0,60,0,0,3,3,"軽1 駆2","なし");
	ens_list[4] = new ensei_object(5,"海上護衛任務",90,40,200,200,20,20,3,4,"軽1 駆2","なし");
	ens_list[5] = new ensei_object(6,"防空射撃演習",40,30,0,0,0,80,5,4,"なし","なし");
	ens_list[6] = new ensei_object(7,"観艦式予行",60,60,0,0,50,30,5,6,"なし","なし");
	ens_list[7] = new ensei_object(8,"観艦式",180,120,50,100,50,50,6,6,"なし","なし");
	
	ens_list[8] = new ensei_object(9,"タンカー護衛任務",240,60,350,0,0,0,3,4,"軽1 駆2","なし");
	ens_list[9] = new ensei_object(10,"強行偵察任務",90,40,0,50,0,30,3,3,"軽2","なし");
	ens_list[10] = new ensei_object(11,"ボーキサイト輸送任務",300,40,0,0,0,250,6,4,"駆2","なし");
	ens_list[11] = new ensei_object(12,"資源輸送任務",480,60,50,250,200,50,4,4,"駆2","なし");
	ens_list[12] = new ensei_object(13,"鼠輸送作戦",240,70,240,300,0,0,5,6,"軽1 駆4","なし");
	ens_list[13] = new ensei_object(14,"包囲陸戦隊撤収作戦",240,90,0,240,200,0,6,6,"軽1 駆3","なし");
	ens_list[14] = new ensei_object(15,"囮機動部隊支援作戦",720,100,0,0,300,400,8,6,"空母2 駆2","なし");
	ens_list[15] = new ensei_object(16,"艦隊決戦援護作戦",900,120,500,500,200,200,10,6,"軽1 駆2","なし");
	
	ens_list[16] = new ensei_object(17,"敵地偵察作戦",45,30,70,70,50,0,20,6,"軽1 駆3","なし");
	ens_list[17] = new ensei_object(18,"航空機輸送作戦",300,60,0,0,300,100,15,6,"空母3 駆2","なし");
	ens_list[18] = new ensei_object(19,"北号作戦",360,60,400,0,50,30,20,6,"航戦2 駆2","なし");
	ens_list[19] = new ensei_object(20,"潜水艦哨戒任務",120,40,0,0,150,0,1,2,"潜1 軽1","なし");
	ens_list[20] = new ensei_object(21,"北方鼠輸送作戦",140,45,320,270,0,0,15,5,"軽1 駆4","艦隊合計<br>Lv30以上<br>ドラム缶<br>3つ以上");
	ens_list[21] = new ensei_object(22,"艦隊演習",180,45,0,10,0,0,30,6,"重1 軽1 駆2","艦隊合計<br>Lv50以上");
	ens_list[22] = new ensei_object(23,"航空戦艦運用演習",240,70,0,20,0,100,50,6,"航戦2 駆2","艦隊合計<br>Lv200以上");
	
	ens_list[23] = new ensei_object(25,"通商破壊作戦",2400,80,900,0,500,0,25,4,"重2 駆2","なし");
	ens_list[24] = new ensei_object(26,"敵母港空襲作戦",4800,150,0,0,0,900,30,4,"空母1 軽1 駆2","なし");
	ens_list[25] = new ensei_object(27,"潜水艦通商破壊作戦",1200,80,0,0,800,0,1,2,"潜2","なし");
	ens_list[26] = new ensei_object(28,"西方海域封鎖作戦",1500,100,0,0,900,350,30,3,"潜3","なし");
	ens_list[27] = new ensei_object(29,"潜水艦派遣演習",1440,100,0,0,0,100,50,3,"潜3","なし");
	ens_list[28] = new ensei_object(30,"潜水艦派遣作戦",2880,100,0,0,0,100,55,4,"潜4","なし");
	ens_list[29] = new ensei_object(31,"海外艦との接触",120,50,0,30,0,0,60,4,"潜4","艦隊合計<br>Lv200以上");
	
	ens_list[30] = new ensei_object(35,"MO作戦",420,100,0,0,240,280,40,6,"空母2 重1 駆1","なし");
	ens_list[31] = new ensei_object(36,"水上機基地建設",540,100,480,0,200,200,30,6,"水母2 軽1 駆1","なし");
	ens_list[32] = new ensei_object(37,"東京急行",165,50,0,380,270,0,50,6,"軽1 駆5","艦隊合計<br>Lv200以上<br>ドラム缶3隻<br>4個以上");
	ens_list[33] = new ensei_object(38,"東京急行（弐）",175,50,420,0,200,0,65,6,"駆5","艦隊合計<br>Lv240以上<br>ドラム缶4隻<br>8個以上");
	ens_list[34] = new ensei_object(39,"遠洋潜水艦作戦",720,130,0,0,300,0,3,5,"潜母艦1 潜4","艦隊合計<br>Lv180以上");
	
	//ens_list[] = new ensei_object("",,,,,);
	
	/*
	r_show.innerHTML = j_hour+"時間"+j_min+"分<br>";
	r_show.innerHTML+= "随時：" + zuiji +"<br>";
	r_show.innerHTML+= need_obj[0] +"<br>";
	*/
	
	for(i=0;i<ens_list.length;i++){
		ens_list[i].need_object(need_obj,(j_hour*60)+j_min);
	}
	ens_list.sort(
		function(a,b){
			var x = a.need_all;
			var y = b.need_all;
			if(x<y){
				return 1;
			}
			else if(x>y){
				return -1;
			}
			else{
				return 0;
			}
		}
	);
	var ens_table = "<table border=\"3\" class=\"e_t\"><tr><td>No.</td><td>遠征名</td><td>遠征時間</td><td>獲得EXP</td><td>獲得燃料</td><td>獲得弾薬</td>";
	ens_table += "<td>獲得鋼材</td><td>獲得ボーキ</td><td>必要旗艦Lv</td><td>必要艦隊数</td><td>必要艦</td><td>備考</td></tr>";
	for(i=0;i<ens_list.length;i++){
		ens_table += ens_list[i].show_all(ens_table);
	}
	ens_table += "</table>";
	r_show.innerHTML = ens_table;
}