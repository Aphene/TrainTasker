
 let ajaxTimer =null;

export default class Ajax {


    url = "./server.aph/?Command="

    constructor() {
        if (ajaxTimer==null) {
            ajaxTimer = setInterval(() => {
                if (global.toServer.length>0) {
                    let ob=global.toServer.shift();
                    let data=JSON.stringify(ob);
                    this.post(this.url,data,this.handleReply);
                }
        
            }, 200);
        }
    }

    

    handleReply = (reply) => {

    }

    logon = (ob) => {
        let json = JSON.stringify(ob);
        this.post(this.url+"TaskerLogon",json,this.logonReply);
    }

    logonReply = (reply) => {
         if(reply.Error) {
             alert(reply.Error);
         }
         else {
            global.user=JSON.parse(reply);
            global.gotoPage("Dashboard");
         }     
    }

    register = (ob) => {
        let json = JSON.stringify(ob);
        this.post(this.url,json,this.registerReply);
    }

    registerReply = (reply) => {
         if(reply.Error) {
             alert(reply.Error);
         }
         else {
            global.user=JSON.parse(reply);
            global.gotoPage("Dashboard");
         }     
    }



    submitTrainReply = (reply) => {
        let ob=JSON.parse(reply);
        if (ob.amount) global.amount=ob.amount;        
    }
   

    get = (url,callback) => {
        let  xmlhttp=null;
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
        if (xmlhttp!=null) 
        { 
            xmlhttp.open("GET",url,true);
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        callback(xmlhttp.responseText);    	                          			                    	                    
                    }
                    else {
                        alert(xmlhttp.responseText);
                    }
                }
            };
            xmlhttp.send(); 
        } 
        else 
        {
            alert("Your browser does not support XMLHTTP."); 
        }

    }

    post = (url,data,callback) => {
        let  xmlhttp=null;
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
        if (xmlhttp!=null) 
        { 
            xmlhttp.open("POST",url,true);
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        callback(xmlhttp.responseText);    	                          			                    	                    
                    }
                    else {
                        alert(xmlhttp.responseText);
                    }
                }
            };
            xmlhttp.send(data); 
        } 
        else 
        {
            alert("Your browser does not support XMLHTTP."); 
        }

    }

}
