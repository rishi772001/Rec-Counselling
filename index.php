<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<style>
		div{
			text-align:center;
			margin-top:60px;
			margin-left:350px;
			margin-right:350px;
			color:white;
			padding:20px;
			background-color:#800080;
			border:0px solid black;
			border-radius:2px;
		}
		input[type="text"]{
			width:300px;
			height:35px;
		}
		label{
			font-size:20px;
		}
		h2{
			margin:30px;
		}
		img{
			height:100px;
		}
		.image{
			text-align:center;
		}
		</style>
	</head>
	<body>
	<section class="image">
		<img src="logo.png">
	</section>
		<div>
			
			<h2>Login</h2>
			<form method="POST">
				<label>Staff Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name="id" id="sid" placeholder="Enter Staff Id">
				<button name="submit" value="submit" id="staffid" class="btn btn-success">Submit</button>
				<br>

				<?php
					require "conn.php";
					session_start();

					if (isset($_POST['submit'])) {
						$rno=$_POST['id'];
						$sql="select * from staff where staffid='".$rno."'limit 1";
						
						$result=$conn->query($sql);
						$_SESSION["id"] = $rno;

						if ($result->num_rows==1) {
							
							$row = $result->fetch_assoc();
							$_SESSION["name"] = $row['name'];
							$_SESSION["designation"] = $row['designation'];


							echo "
							
							<label style='margin-left:-80px'>Staff Name &nbsp;&nbsp;</label><input type='text' name='name' value=".$row['name']." disabled><br>
							<label style='margin-left:-80px'>Department&nbsp;</label><input type='text' name='dept' value=".$row['department']." disabled><br>
							<label style='margin-left:-80px'>Designation&nbsp;</label><input type='text' name='designation' value=".$row['designation']." disabled><br>
							<a href='student.php' class='btn btn-success'> Next </a>	
							
							<script type='text/javascript'>
							function a(){
							document.getElementById('sid').value = '".$row['staffid']."';
							}
							a();
							</script>
							
							";
						} else {
							echo"<script type='text/javascript'>window.alert('Invalid Staff Id');window.location='index.php';</script>";
						}
					}
				?>
				
			</form>

		</div>
	</body>
</html>
