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
					<div class="row">
						<div class="col-md-6">
							<a href="view.php"><button class="btn btn-primary">View Student details</button></a>
						</div> <!-- btn -->
						<div class="col-md-6">
						<?php
							require "conn.php";
							session_start();

							$name = $_SESSION["name"];
							$design = $_SESSION["designation"];
								

							echo "<section style='font-size:20px'>" . substr($name,1,strlen($name)-2) . "<br>" . substr($design,1,strlen($design)-2) . "</section>" ;
								
						?>
						</div> <!-- user -->
					</div>

					<div class="row">
						<h2>Student Details </h2>
					</div>
					<div class="row">
						<form method="POST">
							<label >Register No</label><br><input type="text" name="rno" id="rno" placeholder="Enter Register No">
							<button name="submit" value="submit" id="staffid" class="btn btn-success">Submit</button>
							<br>

							<?php
								

								if (isset($_POST['submit'])) {
									$rno=$_POST['rno'];
									$_SESSION['rno'] = $rno;
									$sql="select * from student where registerno='".$rno."'limit 1";
									
									$result=$conn->query($sql);

									if ($result->num_rows==1) {
										
										$row = $result->fetch_assoc();

										echo "
										
										<label>Student Name </label>
										<br>
										<input type='text' name='name' value=".$row['name']." disabled  ><br>
										<label>Section</label>
										<br><input type='text' name='dept' value=".$row['section']." disabled><br>
										<label>Branch</label>
										<br><input type='text' name='designation' value=".$row['branch']." disabled><br>
										
										<label>Contact No </label><br><input type='text' placeholder='Enter Contact Number' name='name' value=".$row['phno']." disabled ><br>
										<label>No of Sub failed </label><br><input type='text' placeholder='Enter No of subjects failed in CAT' name='failed'><br>
										<label>Attendance </label><br><input type='text' placeholder='Enter attendance in percentage' name='attendance'><br>
										<br><input type='submit' name='grievance' value='Next'   class='btn btn-success'> 	
										
										<script type='text/javascript'>
										function a(){
										document.getElementById('rno').value = '".$row['registerno']."';
										}
										a();
										</script>
										
										";
									} 
								}
							?>
							
						</form>
					</div>
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>

		<div>
            
			
			
			
            <?php
                if (isset($_POST['grievance'])) {
                    
                    $rno=$_POST['rno'];
                    $sql="UPDATE student SET arrearcount = ".$_POST['failed'].", attendance = ".$_POST['attendance']." where registerno =".$rno;
                    
					$sql1 = "SELECT arrearcount FROM student where registerno = '$rno'";
					$result1=$conn->query($sql1);
					$row = $result1->fetch_assoc();
					// echo "<script> window.alert(".$row['arrearcount'].");</script>";
					if($row['arrearcount'] != "")
					{
						echo "<script>window.alert('Already exists')</script>";
						
					}
					else{

						$result=$conn->query($sql);
						if($result)
						{
							echo"<script type='text/javascript'>window.alert('Updated successfully');window.location='grievances.php';</script>";

						}
					}
                }
            ?>
		</div>
	</body>
</html>
