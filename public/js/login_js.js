// JavaScript Document
function val()
	{
		var flag=1;
			var b=document.getElementById("password").value;
			if(b=='')
			{
				document.getElementById("password").className="invalid";
				flag*=0;
				}
			else
			{
				flag*=1;
				document.getElementById("password").className="";
			}
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var chk=re.test(document.getElementById("username").value);
	if(chk=='')
	{
		
		document.getElementById("username").value=null;
	document.getElementById("username").className="invalid";
	flag*=0;
	}
	else
	{
		flag*=1;
		document.getElementById("username").className="";
	}
	if(flag)
	send();
	else
	return;
	}
	function send()
	{
		document.getElementById("signin").disabled = true; 
          $.ajax({
            type: 'post',
            url: 'http://localhost/ci/index.php/complaint/check_user',
			data:{
				email:$("#username").val(),
				password:$("#password").val()
			},
            success: function (data) {
				if(data!="0")
				{
					window.alert("login successful");
					//window.location.assign(data);
				}
				else
				{
					document.getElementById("signin").disabled = false;
					document.getElementById("incorrect").style.display='block';
				}
			}
        });
	}