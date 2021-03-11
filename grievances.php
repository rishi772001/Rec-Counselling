<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<style>
		.main{
			background-color:#800080;
			color:white;
			padding: 30px;
		}
		.container{
			margin-top:60px;
		}
		textarea{
			height: 10vh;
			width: 40vw;
		}
		img{
			height:100px;
		}
		.image{
			text-align:center;
		}
		label{
			font-size:20px;
		}
		h2{
			margin:30px;
		}
		</style>
	</head>
	<body>
		<section class="image">
			<img src="logo.png">
		</section>

		<div class="container">
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6 main">
					<span style="text-align:center"><h2> Grievances </h2></span>
					<form method="POST">
						<label >Grievances</label><br>
						<input type="radio" name="yes" id="1" onchange="clicked()">Yes<br>
						<input type="radio" name="yes" id="2" onchange="clickedno()">No

						<div style="display:none" id="div">
							<br><label>Transport issue:</label>
							<br>
							<textarea name = "transport" placeholder = "Enter the transport issue"></textarea>
							<br>
							<label>Hostel issue:</label><br>
							<textarea name = "hostel" placeholder = "Enter the hostel issue"></textarea>
							<br>
							<label>Canteen issue:</label><br>
							<textarea name = "canteen" placeholder = "Enter the canteen issue"></textarea>
							<br>
							<label>Academic issue:</label><br>
							<textarea name = "academic" placeholder = "Enter the academic issue"></textarea>
						</div>
						<br><label>Faculty remarks:</label><br><textarea name = "faculty" placeholder = "Enter the faculty remarks"></textarea>
						<br><input type="submit" name="submit" value="submit" style="margin-top:20px" class="btn btn-success" >
						
					</form>
				</div>
				<div class="col-lg-3"></div>
			</div>
		</div>
		<div id="sign">
		
        </div>
        <script>
            function clicked(){
            document.getElementById("div").style.display = "block";
            }
			function clickedno(){
            document.getElementById("div").style.display = "none";
            }

        </script>
	</body>
</html>
<?php
require "conn.php";
session_start();
if(isset($_POST['submit']))
{

	$rno = $_SESSION['rno'];
	$transport=$_POST['transport'];
	$hostel=$_POST['hostel'];
	$canteen=$_POST['canteen'];
	$academic=$_POST['academic'];
	$faculty=$_POST['faculty'];
	$check= $_POST['yes'];

	
	$sql="INSERT INTO grievances (registerno,transport,hostel,canteen,remarks,issue) VALUES ('$rno','$transport','$hostel','$canteen','$academic','$faculty')";
	$sql1="INSERT INTO grievances (registerno,issue) VALUES ('$rno','$faculty')";
	
	$sql2="SELECT * from grievances where registerno =".$rno;
	
	$sql3="UPDATE grievances set transport = '$transport' ,hostel = '$hostel',canteen = '$canteen',remarks = '$academic',issue = '$faculty' where registerno = '$rno'";
	$sql4="UPDATE grievances set issue = '$faculty' where registerno = '$rno'";

	$result=$conn->query($sql2);
	
	if ($result->num_rows==1) {
		if($check == "on"){
			if(mysqli_query($conn,$sql3)){
				echo"<script type='text/javascript'>window.alert('Successfully Completed');window.location='student.php';</script>";
			}
			else{
				echo"<script type='text/javascript'>window.alert('Something went wrong,Please try again after some time');window.location='grievances.php';</script>";
			}
		}
		else{
			if(mysqli_query($conn,$sql4)){
				echo"<script type='text/javascript'>window.alert('Successfully Completed');window.location='student.php';</script>";
			}
			else{
				echo"<script type='text/javascript'>window.alert('Something went wrong,Please try again after some time');window.location='grievances.php';</script>";
			}
		}
	}
	else{
		if($check == "on"){
			if(mysqli_query($conn,$sql)){
				echo"<script type='text/javascript'>window.alert('Successfully Completed');window.location='student.php';</script>";
			}
			else{
				echo"<script type='text/javascript'>window.alert('Something went wrong,Please try again after some time');window.location='grievances.php';</script>";
			}
		}
		else{
			if(mysqli_query($conn,$sql1)){
				echo"<script type='text/javascript'>window.alert('Successfully Completed');window.location='student.php';</script>";
			}
			else{
				echo"<script type='text/javascript'>window.alert('Something went wrong,Please try again after some time');window.location='grievances.php';</script>";
				
			}
		}
	}
	
	

}

?>