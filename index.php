<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
	<section class="image">
		<img src="logo.png">
	</section>
		<div class="container">
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 main">
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
									
									<label>Staff Name &nbsp;&nbsp;</label><input type='text' name='name' value=".$row['name']." disabled><br>
									<label>Department&nbsp;&nbsp;</label><input type='text' name='dept' value=".$row['department']." disabled><br>
									<label>Designation&nbsp;&nbsp;</label><input type='text' name='designation' value=".$row['designation']." disabled><br>
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
				<div class="col-md-3"></div>
			</div>
		</div>
			
		</div>
	</body>
</html>
