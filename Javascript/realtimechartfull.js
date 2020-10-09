class RealTimeChart {
    constructor(divid,iname,clrclmS,chckclmnS,XscrollenableS,zoomenableS)//constructor(divid,iname,clrclmS,chckclmnS,XscrollenableS,zoomenableS) 
    {
        
        var labelfont = "calibri";//var labelfont = "calibri"; 
        var labelsize=15;//var labelsize=15; 
        var labelcolor="rgba(0,0,0,0.73)";//var labelcolor="rgba(0,0,0,0.73)";
        var gridcolor = "rgba(14,56,87,0.56)"; //var gridcolor = "rgba(14,56,87,0.56)"; 
        var gridsize = 0.5;//var gridsize = 0.5;
        var vlcolor ='rgba(0,0,0,0.32)';//var vlcolor ='rgba(0,0,0,0.32)';
        var dea = 'S';//var dea = 'S';
        var canvleft;//var canvleft;
        var canvrigt;//var canvrigt;
        var canvbtm ;//var canvbtm ;
        var canvhvr;//var canvhvr;
        var canvgrd; // var canvgrd; 
        var clrclmn=clrclmS;//var clrclmn=clrclmS;
        var chckclmn=chckclmnS; //var chckclmn=chckclmnS; 
        var Xscrollenable=XscrollenableS;//var Xscrollenable=XscrollenableS; 
        var zoomenable = zoomenableS;//var zoomenable = zoomenableS;
        var vltble;var percspan;//var vltble;var percspan;
        var tbl;//var tbl;
        var tblcl1;//var tblcl1;
        var tblcl2;//var tblcl2;
        var tblcl3;//var tblcl3;
        var tblcl4;//var tblcl4;
        var tblcl5;//var tblcl5;
        var tblcl6;//var tblcl6;
        var  ntx1 = '';//var  ntx1 = '';
        var  ntx2 = '';//var  ntx2 = '';
        var ntx3 = '';//var ntx3 = '';
        var ntx4 = '';//var ntx4 = '';
        var mdwn = false; //var mdwn = false; 
        var vlwidth = 1;//var vlwidth = 1;
        var tblprv = new Array();//var tblprv = new Array();
        var condiv;//var condiv;
        var clchk = 0;//var clchk = 0;
        var tbinput = new Array();//var tbinput = new Array();
        var tbcolorinput = new Array();//var tbcolorinput = new Array();
        var refr = 'C';//var refr = 'C';
        var zoomer = 0;//var zoomer = 0;
        var zoomperc = 1;//var zoomperc = 1;
        var shc = 'J';//var shc = 'J';
        var scrollS = 0;//var scrollS = 0;
        var scrollE = 0;//var scrollE = 0;
        var scrolinc = 1;//var scrolinc = 1;
        var tmpsctest = false;//var tmpsctest = false;
        var zmv = 0;//var zmv = 0;
        var ymax = 100;//var ymax = 100;
        var ymin = 0;//var ymin = 0;
        var hei = 'T';//var hei = 'T';
        var autoYscale = true;//var autoYscale = true;
        var gtpoints = 200;//var gtpoints = 200;
        var totalpar = 0;//var totalpar = 0;
        var parprp = new Array();//var parprp = new Array();
        var arr = new Array();//var arr = new Array();
        var tarr = new Array();//var tarr = new Array();
        var mymax = 0;var mymin = 0;//var mymax = 0;var mymin = 0;
        var xloc = new Array();//var xloc = new Array();
        var xlocV = new Array();//var xlocV = new Array();
        var loc = new Array();//var loc = new Array();
        var vloc = new Array();//var vloc = new Array();
        var rxpos = '-1';//var rxpos = '-1';
        var he = 'R';//var he = 'R';
         
 
        deasd();
        this.RefreshChart = function()
        {
            drawpoints();
        };
        this.pushvalue = function(name,value)
        {
            arr[name].push(value);
            arr[name].shift();
        };
        this.updatebackgroundcolor = function(color)
        {
            tblcl1.style.backgroundColor = color;
            tblcl3.style.backgroundColor = color;
            tblcl4.style.backgroundColor = color;
            tblcl5.style.backgroundColor = color;
        };
        function updatebackgroundcolor(color)
        {
            tblcl1.style.backgroundColor = color;
            tblcl3.style.backgroundColor = color;
            tblcl4.style.backgroundColor = color;
            tblcl5.style.backgroundColor = color;
        }
        this.pushlabel = function(value)
        {
            tarr.push(value);
            tarr.shift();
        };
        this.updatelinecolor = function(name,color)
        {
            parprp[name]['Linecolor'] = color;
            tblcreator(totalpar,vltble);
        };
        this.updatelinewidth = function(name,width)
        {
            parprp[name]['linewidth'] = width;
        };
        this.updatelinedot = function(name,enable)
        {
            parprp[name]['ldotenable'] = enable;
        };
        this.updatedotradius = function(name,dotradius)
        {
            parprp[name]['ldoteradius'] = dotradius;
        };
        this.updatedotColor = function(name,dotcolor)
        {
            parprp[name]['ldotecolor'] = dotcolor;
        };
        this.getarray = function(name)
        {
           //  console.log(arr[name]);
            return arr[name];
        };
        this.getlabelarray = function()
        {
           // console.log(tarr);
            return tarr;
        };
        this.getlabelarrayat = function(index)
        {
          //  console.log(tarr[index]);
            return tarr[index];
        };
        this.getarrayvalueat = function(name,index)
        {
         //   console.log(arr[name][index]);
            return arr[name][index]; 
        };
        this.updatearrayvalueat = function(name,index,value)
        {
            arr[name][index] = value;
        };
        this.updatelabelarrayvalueat = function(index,value)
        {
            tarr[index] = value;
        };
        this.updateymax = function(ymx)
        {
            mymax = ymx;
            drawpoints();
        };
        this.updateymin = function(ymn)
        {
            mymin = ymn;
            drawpoints();
        };
        this.updateayscale = function(status)
        {
            autoYscale = status;
            drawpoints();
        };

        this.updatetablefont = function(fontstyle,size)
        {
            vltble.style.fontFamily = fontstyle;
            vltble.style.fontSize = size+'px';
        };

        this.updatelabelfont = function(fontstyle,size,color)
        {
            labelcolor = color;
            labelfont = fontstyle;
            labelsize = size;
            tblcl3.style.fontStyle = fontstyle;
            tblcl3.style.fontSize = size+"px";
            tblcl3.style.color = color;
        };

        this.updategrid = function(color,width)
        {
            gridcolor = color;
            gridsize = width;
            crtgrid(canvgrd,10,gridsize,gridcolor);
        };

        this.updataxisruler = function(color,size)
        {
            vlcolor = color;
            vlwidth = size;
        };
        this.updatetablebackgroundcolor = function(color)
        {
            vltble.style.backgroundColor = color;
        };
        this.updatetableborderstyle = function(style)
        {
            vltble.style.border = style;
        };
        this.updatechartbackground = function(color)
        {
            tblcl2.style.backgroundColor = color;
        };
        function deasd()
        {   
    
    if (chckclmn==true)
    {
        ntx1 = '<td width="40px"></td>';
    }
   if (clrclmn==true)
    {
        ntx2 = '<td width="40px">Color</td>';
    }
    if (Xscrollenable==true)
    {
        ntx3 = '<div  style="position:absolute;left:5px;bottom:0px"><button style="float: left" title="Zoom In" onclick="'+iname+'.zoomit(true)">+</button><span style="float: left;font-family: calibri;padding: 0px 4px 0px 4px;font-size:15px">0%</span><button style="float: right;" title="Zoom Out" onclick="'+iname+'.zoomit(false)">-</button></div>';
    }
    
    if (zoomenable==true)
    {
        ntx4 = '<div  style="position:absolute;right:3px;bottom:0"><button style="float: left" title="Scroll left" onclick="'+iname+'.scroll0(1)">&lt;</button><button title="Scroll right" style="float: right" onclick="'+iname+'.scroll0(0)">&gt;</button></div>';
    }
   document.getElementById(divid).innerHTML+='<table style="width:100%;height: 100%;border-collapse: collapse;border-spacing: 0;" border="0"><tr style="height: 60%"><td style="width: 15%;padding: 0px"><canvas style="padding: 0px;width: 100%;height: 100%;background-color: transparent;postion;absolute;top:0;left:0"></canvas></td><td style="width: 85%;position:relative"><canvas style="width: 100%;height: 100%;background-color: rgba(240,255,255,0.0);position:absolute;top:0px;left:0px;z-index:5;"></canvas><canvas style="z-index:6;width: 100%;height: 100%;background-color: rgba(0,67,223,0.0);position:absolute;top:0px;left:0px"></canvas><canvas style="z-index:4;width: 100%;height: 100%;background-color: rgba(88,121,199,0.00);position:absolute;top:0px;left:0px"></canvas></td></tr><tr><td style="width: 15%;text-align:center;"></td><td style="width: 85%;padding: 0;position:relative"><canvas style="width: 100%;height: 0%;background-color: transparent;margin: 0;position:absolute;top:0;left:0"></canvas>'+ntx3+ntx4+'</td></tr><tr style="height: 24%"><td style="width: 15%;">.</td><td style="width: 85%;"><div style="width: 100%;height: 100%;margin: 0;padding: 0;overflow: auto;position:relative"><table style="width:100%;height: 100%;border-collapse: collapse;border-spacing: 0;" border="1"><tr style="height:auto;text-align:center">'+ntx1+ntx2+'<td>Name</td><td>Value</td></tr></table></div></td></tr></table>' ;

  //<div style="width: 100%;height: 100%;margin: 0;padding: 0;overflow: hidden;position:relative"></div>
    var mdiv = document.getElementById(divid);
    var mdivhg = mdiv.clientHeight;
    var mdivwd = mdiv.clientWidth;
    tbl = mdiv.getElementsByTagName("table")[0];
    var tblrw1 = tbl.getElementsByTagName("tr")[0];
    var tblrw2 = tbl.getElementsByTagName("tr")[1];
    var tblrw3 = tbl.getElementsByTagName("tr")[2];
    tblcl1 = tblrw1.getElementsByTagName('td')[0];
    tblcl2 = tblrw1.getElementsByTagName('td')[1];
    tblcl3 = tblrw2.getElementsByTagName('td')[0];
    tblcl4 = tblrw2.getElementsByTagName('td')[1];
    tblcl5 = tblrw3.getElementsByTagName('td')[0];
    tblcl6 = tblrw3.getElementsByTagName('td')[1];
    canvleft = tblcl1.getElementsByTagName('canvas')[0];
    canvrigt = tblcl2.getElementsByTagName('canvas')[0];
    canvbtm = tblcl4.getElementsByTagName('canvas')[0];
    canvhvr = tblcl2.getElementsByTagName('canvas')[1];
    canvgrd = tblcl2.getElementsByTagName('canvas')[2];
    condiv = tblcl2.getElementsByTagName('div')[0];
    vltble = tblcl6.getElementsByTagName('table')[0];
    percspan = tblcl4.getElementsByTagName('span')[0];
    tblcl5.innerHTML = '<span style="font-family:calibri;font-size:12px;position:absolute;left:3px;bottom:1px;color:rgba(0,0,0,0.77)"><i><b>'+he+hei+refr+'</b>'+shc+dea+'</i></span>';
    tblcl5.style = "position:relative;";
    updatebackgroundcolor("azure");
    tblrw1.style.height = mdivhg*0.60 + "px";
    tblrw2.style.height = mdivhg*0.150 + "px";
    tblrw3.style.height = mdivhg*0.240 + "px";
    tblcl6.style.height = mdivhg*0.240 + "px";
    tblcl3.style.fontFamily = "calibri";tblcl3.style.fontSize = "15px";
    canvleft.style.width = (tblcl1.clientWidth-4) + "px";
    canvleft.style.height = (mdivhg*0.60-4) + "px";
    //alert(canvleft.style.height);
    canvrigt.style.width = (tblcl2.clientWidth-4) + "px";
    canvrigt.style.height = (mdivhg*0.60-4) + "px";

    canvhvr.style.width = (tblcl2.clientWidth-4) + "px";
    canvhvr.style.height = (mdivhg*0.60-4) + "px";
    canvhvr.width = canvhvr.offsetWidth;
    canvhvr.height =mdivhg*0.60-4;

            
    canvgrd.style.width = (tblcl2.clientWidth-4) + "px";
    canvgrd.style.height = (mdivhg*0.60-4) + "px";
    canvgrd.width = canvgrd.offsetWidth;
    canvgrd.height =mdivhg*0.60-4;
    //canvgrd.clientHeight = mdivhg*0.60-4;
    crtgrid(canvgrd,10,gridsize,gridcolor);
    
    canvbtm.style.width = (tblcl4.clientWidth-4) + "px";
    canvbtm.style.height = (mdivhg*0.150 -4) + "px";

    //drw(canvrigt,canvbtm,canvleft);
    //tblcreator(totalpar,vltble);
    if(shc == 'J')
    canvhvr.addEventListener("mousedown",function(evt){mdwn = true;}, false);
    canvhvr.addEventListener("mouseup",function(evt){mdwn = false;}, false);
    canvhvr.addEventListener("mousemove",function(evt){var mousePos = getMousePos(canvhvr,evt);drawhline(canvhvr,mdivhg*0.60-4,mousePos.x,false);}, false);
    canvhvr.addEventListener("touchmove",function(evt){drawhlinetch(canvhvr,mdivhg*0.60-4,evt);}, false);
   //canvhvr.ontouchmove = "dsaw(event)";
        
}

        function drawhline(canvhvr,heigt,xpos,cond)
        {

           
          
            if(mdwn==true || cond==true)
            {   
                rxpos = xpos;
                var lclr = vlcolor;
                var lwd =  vlwidth;
                canvhvr.width = canvhvr.offsetWidth;
                canvhvr.height = heigt;
                var context2 = canvhvr.getContext('2d');
                context2.beginPath(); 
                context2.lineWidth = lwd;
                context2.strokeStyle = lclr;
                context2.lineCap = 'butt';
                if (dea=='S'){
                context2.moveTo(xpos,0);
                }
                context2.lineTo(xpos,heigt);   
                context2.stroke();

                for (var i=0;i<totalpar;i++)
                {
                    var tx = 0;
                    for (var k=0;k<loc[i.toString()].length;k++)
                    {

                        if (xpos<(loc[i.toString()][k]+1)&&xpos>(loc[i.toString()][k]-1))
                        {
                            tx = k;
                            var j=i+1;
                            if (clchk==0)
                                tblprv[(j*2+1).toString()].innerHTML= vloc[i.toString()][tx].toFixed(3);
                            if (clchk==1)
                            {
                                tblprv[(j*3+2).toString()].innerHTML= vloc[i.toString()][tx].toFixed(3);
                            }
                            if (clchk==2)
                                tblprv[(j*4+3).toString()].innerHTML= vloc[i.toString()][tx].toFixed(3);
                        }
                    }

                }
                var tempval;
                var tempcellwid = tblcl3.clientWidth;
                for (k=0;k<xloc.length;k++)
                {
                    if (xpos<(xloc[k]+1)&&xpos>(xloc[k]-1))
                    {
                        tblcl3.innerHTML=xlocV[k];
                        tempval = xlocV[k];
                        tblcl3.title = tempval;
                    }
                }
               tempval = (tblcl3.style.fontSize);
                tempval = tempval.replace("px", "");
                while (tempcellwid < tblcl3.clientWidth)
                {
                    tblcl3.style.fontSize =  (tempval-0.1)+"px";
                     tempval = (tblcl3.style.fontSize);
                    tempval = tempval.replace("px", "");
                }
            }
        }
        
        function drawhlinetch(canvhvr,heigt,evt)
        {      
                var rec = canvhvr.getBoundingClientRect();
                var xpos = evt.touches[0].clientX-rec.left;
                rxpos = xpos;
                var lclr = vlcolor;
                var lwd =  vlwidth;
                canvhvr.width = canvhvr.offsetWidth;
                canvhvr.height = heigt;
                //document.getElementById("des").innerHTML = "touchle= "+evt.touches.length+" xpos= "+xpos+" posleft= "+rec.left;
                var context2 = canvhvr.getContext('2d');
                context2.beginPath(); 
                context2.lineWidth = lwd;
                context2.strokeStyle = lclr;
                context2.lineCap = 'butt';
                if (dea=='S'){
                context2.moveTo(xpos,0);
                }
                context2.lineTo(xpos,heigt);   
                context2.stroke();

                for (var i=0;i<totalpar;i++)
                {
                    var tx = 0;
                    for (var k=0;k<loc[i.toString()].length;k++)
                    {

                        if (xpos<(loc[i.toString()][k]+1)&&xpos>(loc[i.toString()][k]-1))
                        {
                            tx = k;
                            var j=i+1;
                            if (clchk==0)
                                tblprv[(j*2+1).toString()].innerHTML= vloc[i.toString()][tx].toFixed(3);
                            if (clchk==1)
                                tblprv[(j*3+2).toString()].innerHTML= vloc[i.toString()][tx].toFixed(3);
                            if (clchk==2)
                                tblprv[(j*4+3).toString()].innerHTML= vloc[i.toString()][tx].toFixed(3);
                        }
                    }

                }
                var tempval;
                var tempcellwid = tblcl3.clientWidth;
                for (k=0;k<xloc.length;k++)
                {
                    if (xpos<(xloc[k]+1)&&xpos>(xloc[k]-1))
                    {
                        tblcl3.innerHTML=xlocV[k];
                        tempval = xlocV[k];
                        tblcl3.title = tempval;
                    }
                }
               tempval = (tblcl3.style.fontSize);
                tempval = tempval.replace("px", "");
                while (tempcellwid < tblcl3.clientWidth)
                {
                    tblcl3.style.fontSize =  (tempval-0.1)+"px";
                     tempval = (tblcl3.style.fontSize);
                    tempval = tempval.replace("px", "");
                }
        }
        this.checkchange = function()
        {
            drawpoints();
        };
        this.colorchange = function()
        {
            var key = Object.keys(arr);
            var lcolor = new Array();
            var lid = new Array();
            var rid = '';
            for (var i=0;i<totalpar;i++)
            {
                if (parprp[key[i]]["Linecolor"] != tbcolorinput[i].value)
                    rid = i;
                parprp[key[i]]["Linecolor"] = tbcolorinput[i].value;
                parprp[key[i]]["ldotecolor"] = tbcolorinput[i].value;
                lcolor.push(tbcolorinput[i].value);
                lid.push(key[i]);
            }
            tblcreator(totalpar,vltble);
            drawpoints();
            if (typeof oncolorchange == "function") {
                oncolorchange(rid,lid,lcolor);
            }
             
        };


        function tblcreator(totalpars,tbl)
        {
            clchk = 0;
            var xt = '';var xu = '';
            tblprv = new Array();
            tbinput = new Array();
            tbcolorinput = new Array();
            tbl.style.fontFamily = 'calibri';
            tbl.style.fontSize = '15px';
            var tbltop = '<tr style="height:auto;text-align:center">'+ntx1+ntx2+'<td>Name</td><td>Value</td>';
            tbl.innerHTML = '';
            if(hei == 'T')
                tbl.innerHTML += tbltop;
            //alert(tbltop.length);
            if (chckclmn==true){
                xu = '<td width="40px"><input type="checkbox" checked onchange="'+iname+'.checkchange()"></td>';
                clchk++;
            } 
            if (clrclmn==true){
                xt = '<td width="40px"><input type="color" onchange="'+iname+'.colorchange()" style="border:0;background-color:transparent"></td>';
                clchk++;
            }

            for (var i=0;i<totalpars;i++)
            {  
                tbl.innerHTML += '<tr style="height:auto;text-align:center">'+xu+xt+'<td>3</td><td>4</td></tr>';
            }
            tblprv = tbl.getElementsByTagName('td'); 
            var key = Object.keys(arr);
            //-------Saves array for td for values ------
            for (i=0;i<totalpar;i++)
            {
                var j=i+1;
                if (clchk==0)
                    tblprv[(j*2+0).toString()].innerHTML= key[i];
                if (clchk==1)
                    tblprv[(j*3+1).toString()].innerHTML= key[i];
                if (clchk==2)
                    tblprv[(j*4+2).toString()].innerHTML= key[i];
            }
            //----------Saves array for check column
            if (chckclmn==true)
            {
                if (chckclmn==true && clrclmn==true)
                {
                    for (i=0;i<tbl.getElementsByTagName('input').length/2;i++)
                    {
                        tbinput.push(tbl.getElementsByTagName('input')[i*2]);
                    }
                }
                else if (chckclmn==true && clrclmn==false)
                {
                    for (i=0;i<tbl.getElementsByTagName('input').length;i++)
                    {
                        tbinput.push(tbl.getElementsByTagName('input')[i]);
                    }
                }
            }
    //-----------Colors text--------
    //parprp[key[k]]['Linecolor']
    var trrar = tbl.getElementsByTagName('tr');
    
    for (i=0;i<totalpars;i++)
    {  
        trrar[i+1].style.color = parprp[key[i]]['Linecolor'];
    }
    //----------Change input color-------
    if (clrclmn==true)
    {
        
        if (chckclmn==true && clrclmn==true)
        {
            for (i=0;i<tbl.getElementsByTagName('input').length/2;i++)
            {
                tbl.getElementsByTagName('input')[i*2+1].value = parprp[key[i]]['Linecolor'];
                tbcolorinput.push(tbl.getElementsByTagName('input')[i*2+1]);
            }
        }
        else if (chckclmn==false && clrclmn==true)
        {
            for (i=0;i<tbl.getElementsByTagName('input').length;i++)
            {
                tbl.getElementsByTagName('input')[i].value = parprp[key[i]]['Linecolor'];
                tbcolorinput.push(tbl.getElementsByTagName('input')[i]);
            }
        }
    }
}
        
        this.scroll0 = function(p)
        {

            scrollS = 0;
            scrollE = gtpoints;
            //console.log(scrollS+"  p= "+p);
            if (p==0)
            {
                if (zoomperc*gtpoints*(scrolinc+1)<gtpoints)
                {
                    scrolinc++;
                    scrollS = zoomperc*(gtpoints)*(scrolinc-1);
                    scrollS = Math.ceil(scrollS);
                    scrollE = zoomperc*gtpoints*(scrolinc);
                    tmpsctest = false;
                 //   alert(scrolinc);
                }
                else 
                {
                    if (tmpsctest == false){
                    scrollE = gtpoints-1;
                    scrollS = (gtpoints) - zoomperc*gtpoints;
                    scrollS = Math.ceil(scrollS);
                    scrolinc++;
                    tmpsctest = true;
                     //   alert(scrolinc);
                    }
                    else 
                    {
                        scrollE = gtpoints-1;
                    scrollS = (gtpoints) - zoomperc*gtpoints;
                    scrollS = Math.ceil(scrollS);
                    }
                    //alert(scrollS+"-"+scrollE);
                }

            }
            
            if (p==1)
            {
                if (zoomperc*gtpoints*(scrolinc-2)>=0)
                {
                    scrolinc--;
                    scrollS = zoomperc*gtpoints*(scrolinc-1);
                    scrollS = Math.ceil(scrollS);
                    scrollE = zoomperc*gtpoints*(scrolinc);
                    tmpsctest = false;
                   // alert(scrolinc);
                }
                else
                {
                    if (tmpsctest == false){
                    scrollS = 0;
                    scrollE = zoomperc*gtpoints-1;
                    tmpsctest = true;
                    scrolinc--;
                       // alert(scrolinc);
                    }
                    else
                        {
                            scrollS = 0;
                    scrollE = zoomperc*gtpoints-1;
                        }
                }
            }
            if (p==2)
            {
                scrollS = zoomperc*gtpoints*(scrolinc-1);
                scrollS = Math.ceil(scrollS);
                scrollE = zoomperc*gtpoints*(scrolinc);
               // alert(scrollS+"-"+scrollE);
            }
           // alert(gtpoints-1-zoomer+scrollE);
            drawpoints();


        };
        
        function scroll0(p)
        {

            scrollS = 0;
            scrollE = gtpoints;
             
            if (p==0)
            {
                if (zoomperc*gtpoints*(scrolinc+1)<gtpoints)
                {
                    scrolinc++;
                    scrollS = zoomperc*(gtpoints)*(scrolinc-1);
                    scrollS = Math.ceil(scrollS);
                    console.log(scrollS+"  p= "+p);
                    scrollE = zoomperc*gtpoints*(scrolinc);
                    tmpsctest = false;
                 //   alert(scrolinc);
                }
                else 
                {
                    if (tmpsctest == false){
                    scrollE = gtpoints-1;
                    scrollS = (gtpoints) - zoomperc*gtpoints;
                    scrollS = Math.ceil(scrollS);
                    scrolinc++;
                    tmpsctest = true;
                     //   alert(scrolinc);
                    }
                    else 
                    {
                        scrollE = gtpoints-1;
                    scrollS = (gtpoints) - zoomperc*gtpoints;
                    }
                    //alert(scrollS+"-"+scrollE);
                }

            }
            if (p==1)
            {
                if (zoomperc*gtpoints*(scrolinc-2)>=0)
                {
                    scrolinc--;
                    scrollS = zoomperc*gtpoints*(scrolinc-1);
                    scrollS = Math.ceil(scrollS);
                    scrollE = zoomperc*gtpoints*(scrolinc);
                    tmpsctest = false;
                   // alert(scrolinc);
                }
                else
                {
                    if (tmpsctest == false){
                    scrollS = 0;
                    scrollE = zoomperc*gtpoints-1;
                    tmpsctest = true;
                    scrolinc--;
                       // alert(scrolinc);
                    }
                    else
                        {
                            scrollS = 0;
                    scrollE = zoomperc*gtpoints-1;
                        }
                }
            }
            if (p==2)
            {
                scrollS = zoomperc*gtpoints*(scrolinc-1);
                scrollS = Math.ceil(scrollS);
                scrollE = zoomperc*gtpoints*(scrolinc);
               // alert(scrollS+"-"+scrollE);
            }
           // alert(gtpoints-1-zoomer+scrollE);
            drawpoints();


        }

        this.zoomit = function(p)
        {
            if (p==true)
            {
                zmv++;
                if (zmv>3)
                {
                    zmv=3;
                }
            }
            if (p==false)
            {
                zmv--;
                if (zmv<0)
                {
                    zmv=0;
                }
            }
            if (zmv==0)
            {
                zoom0(100);
                percspan.innerHTML = "0%";
            }
            if (zmv==1)
            {
                zoom0(75);
                percspan.innerHTML = "25%";
            }
            if (zmv==2)
            {
                zoom0(50);
                percspan.innerHTML = "50%";
            }
            if (zmv==3)
            {
                zoom0(25);
                percspan.innerHTML = "75%";
            }
        };
        function zoom0(zom)
        {
            scrolinc=1;
            zoomperc = zom/100;//in 50%
            zoomer = gtpoints*zom/100;
            scroll0(2);
            drawpoints();
        }

        
        this.updatearray = function(name,arrayy)
        {
            arr[name] = null;
            arr[name] = new Array();
            for (var i=0;i<gtpoints;i++)
            {
                if (arrayy[i]!=null)
                    arr[name].push(arrayy[i]);
            }
           // drawpoints();
        };
        this.updateXarray = function(arrayy)
        {
            tarr = null;
            tarr = new Array();
            for (var i=0;i<gtpoints;i++)
            {
                if (arrayy[i]!=null)
                    tarr.push(arrayy[i]);
            }
           // drawpoints();
        };
        this.settotalpoints = function(ttlpoints)
        {
            gtpoints = ttlpoints;
            scrollE = gtpoints;
            tarr = null;
            tarr = new Array();
            var key = Object.keys(arr);
            for (var i=0;i<key.length;i++)
            {
                //alert(key.length);
                //arr[key[i]] = null;
                arr[key[i]] = new Array();
                for (var j=0;j<gtpoints;j++)
                    arr[key[i]].push(0);
            }
            for (var i=0;i<gtpoints;i++)
                tarr.push(0);
            drawpoints();
        };
        this.addparameter = function(name)
        {
            var tst = false;
            for (var i=0;i<arr.length;i++)
            {
                if (arr[i]==name)
                    tst = true;
            }
            if (tst==false)
            {
            arr[name]=new Array();
            parprp[name]= new Array();
            parprp[name]['Linecolor'] = "#ae2ed0";
            parprp[name]['linewidth'] = 2;
            parprp[name]['ldotenable'] = true;
            parprp[name]['ldoteradius'] = 1;
            parprp[name]['ldotecolor'] = "#ae2ed0";
            for (i=0;i<gtpoints;i++)
                arr[name].push(0);
            }
            var key = Object.keys(arr);
            totalpar=key.length;
            if (vltble!=null)
                tblcreator(totalpar,vltble);
            //alert(parprp.length);
            //else alert('Duplicate Name');

        };

        function getautoYmaxmin()
        {
            var tmax = 0;
            var tmin = 0;
            var key = Object.keys(arr);
            for (var i=0;i<key.length;i++)
            {
                
                
                for (var j=0;j<arr[key[i]].length;j++)
                {
                    //console.log(arr[key[i]][j]);
                    if (!isNaN(arr[key[i]][j]))
                    {
                        if ( arr[key[i]][j]>tmax)
                        {
                            tmax = arr[key[i]][j];
                        }
                        if ( arr[key[i]][j]<tmin)
                        {
                            tmin = arr[key[i]][j];
                        }
                    }
                }
                
            }
            
            ymax = 5+parseFloat(tmax);ymin = parseFloat(tmin)-5;
            //console.log(ymin+" ymax "+ymax);
            if (autoYscale==false)
            {
                ymax=mymax; ymin = mymin;
            }
        }


        function xax(first,lstpoint)
        {
            xloc = new Array();
            xlocV = new Array();
            var xcanv = canvbtm;
            xcanv.height = xcanv.clientHeight;
            xcanv.width = xcanv.clientWidth;

            var ctx = xcanv.getContext("2d");
            ctx.font = labelsize+"px "+ labelfont;
            ctx.fillStyle = labelcolor;
            var txt = tarr[Math.round((lstpoint+scrollS)/2)];//tarr[tarr.length-1];
            var mn = ctx.measureText(txt).width;
            ctx.fillText(tarr[scrollS], first, 20);
            ctx.textAlign = "right";
            ctx.fillText(tarr[lstpoint.toFixed(0)-1], xcanv.width,20);
            if (xcanv.height>500)
            ctx.fillText(tarr[Math.round((lstpoint+scrollS)/2)], (xcanv.width+mn)/2,20);
            for (var i=0+scrollS;i<scrollE;i++)
            {
                xloc.push((i-scrollS)*xcanv.clientWidth/(scrollE-scrollS));
                xlocV.push(tarr[i]);
            }
            //alert(xlocV);
        }
        function yax()
        {
            var ycanv = canvleft;
            ycanv.height = ycanv.clientHeight;
            ycanv.width = ycanv.clientWidth;
            var ctx = ycanv.getContext("2d");
            var mnhg = ctx.measureText(ymin).height;
            var mnwd = ctx.measureText(ymin).width;
            var mxhg = ctx.measureText(ymax).height;
            var mxwd = ctx.measureText(ymax).width;
            ctx.font = labelsize+"px "+ labelfont;
            //ymax = ymax.toFixed(2);
            //ymin = ymin.toFixed(2);
            ctx.fillStyle = labelcolor;
            ctx.textAlign = "right";
            ctx.fillText(ymax.toFixed(2), ycanv.width, 15);
            ctx.fillText(ymin.toFixed(2), ycanv.width, ycanv.height);
            var center = ((ymax-ymin)/2+ymin);
            center = center.toFixed(2);
            var centerl = ycanv.height/2;
            ctx.fillText(center, ycanv.width, centerl);    
        }

        function crtgrid(convas,liness,lwdth, lclr)
        {
             var wdth = convas.clientWidth;
            var hght = convas.clientHeight;
            var twd = liness;
            var de = wdth/(liness-1);
            var thd = (hght)/30;
            var context = convas.getContext('2d');
            context.beginPath(); 
            context.lineWidth = lwdth;
            context.strokeStyle = lclr;
            context.lineCap = 'butt';
            context.translate(0.5, 0.5);
            for (var i=0;i<twd-1;i++)
            {
                context.moveTo(i*de,0);
                context.lineTo(i*de,hght);   
            }
            for (var i=0;i<thd;i++)
            {
                context.moveTo(0,i*30);
                context.lineTo(wdth,i*30);
            }
            context.stroke();

        }
function drawpoints()
{
    getautoYmaxmin();
    yax();
    var convas = canvrigt;var xcanv=canvbtm;
    var key = Object.keys(arr);
    loc = new Array();
    vloc = new Array();
    
   var wdth = convas.clientWidth;
   var hght = convas.clientHeight;
  var twd = gtpoints;
    var de = wdth/(scrollE-scrollS);
        var mx = ymax;
    var mn = ymin;

  var thd = (hght)/30;    
  convas.width = convas.offsetWidth;
    convas.height = hght;
    convas.style.width = convas.width + 'px';
    convas.style.height = convas.height + 'px';
    var firstx = 0;
    for (var k=0;k<key.length;k++)
    {
        var tempxe = false;
        if (chckclmn==true)
        {
            tempxe = tbinput[k].checked;
        }
        loc[k.toString()] = new Array();
        vloc[k.toString()] = new Array();
        var xoff = 0;
        var context = convas.getContext('2d');
        context.translate(0.5, 0.5);
       // for (i=0+scrollS;i<gtpoints-1-zoomer+scrollE;i++)
        for (var i=0+scrollS;i<scrollE;i++)
        {
            if (arr[key[k]][i]==null || arr[key[k]][i+1]==null)
            {
                xoff++;
            }
        }
        var templineclr = parprp[key[k]]['Linecolor'];
        var templinewidth = parprp[key[k]]['linewidth'];
        var dotenable = parprp[key[k]]['ldotenable'];
        var  dotradius = parprp[key[k]]['ldoteradius'];
        var  tdotcolor= parprp[key[k]]['ldotecolor'];
        //alert(scrollS+"to"+(gtpoints-1-zoomer+scrollE).toString());
       // for (i=0+scrollS;i<(gtpoints-1-zoomer+scrollE);i++)
        var divident = Math.abs(parseFloat(mx))+Math.abs(parseFloat(mn));
       // console.log(divident+" mx "+ mx + " mn "+ mn);
       // console.log("hght="+hght+" mn "+mn+" mx "+mx+" test="+( (0-mn)*hght/divident)+"mx+mn="+divident);
        for (var i=0+scrollS;i<scrollE;i++)
        {   
            
            
            if (arr[key[k]][i]!=null && arr[key[k]][i+1]!=null){
                if (i==0+scrollS)
                {
                    firstx = de*(i+xoff-scrollS);   
                }
                
                if (tempxe || chckclmn==false)
                {
                    context.beginPath(); 
                    context.lineWidth = templinewidth;
                    var tests = (0-mn)*hght/(divident);

                   // if (scrollE!=0)
                      //  alert("Digi= "+i+" value="+arr[key[k]][i]+" LocY= "+(hght - (arr[key[k]][i]*hght/(mx+Math.abs(mn))+tests)).toString()+" LocX= "+de*(i+xoff));
                    //console.log("Loc="+(hght - (arr[key[k]][i]*hght/(mx+Math.abs(mn))+tests))+" Val="+arr[key[k]][i]);
                    context.strokeStyle = templineclr;
                    context.moveTo(de*(i+xoff-scrollS),hght - (arr[key[k]][i]*hght/(divident)+tests));
                    context.lineTo(de*(i+1+xoff-scrollS),hght - (arr[key[k]][i+1]*hght/(divident)+tests)); 
                    context.stroke();
                }
                //--------------------------
                loc[k.toString()].push(de*(i+xoff-scrollS));
                vloc[k.toString()].push(arr[key[k]][i]);
                //--------------------------
                
                if (dotenable==true)
                {
                    if (tempxe || chckclmn==false)
                    {
                        context.beginPath();
                        //context.lineWidth = 1;
                        context.fillStyle = tdotcolor;
                        context.strokeStyle = tdotcolor;
                        context.arc(de*(i+xoff-scrollS),hght - (arr[key[k]][i]*hght/(divident)+tests), dotradius, 0, 2 * Math.PI);
                        
                        //if (i==0)
                        //alert(tdotcolor);
                        context.fill();
                        context.stroke();
                    }
                }
                //context.beginPath();
                
                //ke();
            }
            else {
                //context = convas.getContext('2d');
                if (tempxe || chckclmn==false)
                {
                    context.beginPath(); 
                    context.lineWidth = templinewidth;
                    context.strokeStyle = templineclr;
                    context.moveTo(de*(i+xoff-scrollS),hght);
                    context.lineTo(de*(i+1+xoff-scrollS),hght); 
                    context.stroke();
                }
                
                if (dotenable==true)
                {
                    if (tempxe || chckclmn==false)
                    {
                        context.fillStyle = tdotcolor;
                        context.strokeStyle = tdotcolor;
                        context.beginPath();
                        //context.lineWidth = 1;
                        context.arc(de*(i+xoff-scrollS),hght,dotradius, 0, 2 * Math.PI);
                        context.fill();
                        context.stroke();
                    }
                }
            }
            
        }
    }
    
    xax(firstx,scrollE);
    if (rxpos==-1)
        rxpos = canvhvr.clientWidth-5;
drawhline(canvhvr,canvhvr.clientHeight,rxpos,true);
  //  console.log('-----------------------------------------');
}

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        }
    }
}