<html>
<head>
</head>
<body>
<?php
function validate($user){
	if(empty($user) ){
	echo "Please fill all the entries";	
}
	else{
	echo "Welcome! ";
	echo $_POST["username"];
	echo " You are logged in!";
	}
}
$check=validate($_POST["username"]);

?><br>

</body>
</html>
