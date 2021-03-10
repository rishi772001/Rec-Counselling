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
		img{
			height:100px;
		}
		.image{
			text-align:center;
		}
		input[type="text"]{
			width:300px;
			height:35px;
			margin-top:-20px;
		}
		label{
			font-size:20px;
			float:left;
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
		<div>
            <?php
            require "conn.php";
                session_start();

				$name = $_SESSION["name"];
				$design = $_SESSION["designation"];
				

                echo "<section style='margin-left:400px;font-size:20px'>" . substr($name,1,strlen($name)-2) . "<br>" . substr($design,1,strlen($design)-2) . "</section>" ;
                
            ?>
			
			<a href="view.php" style="margin-left:-400px;margin-top:200px;"><button class="btn btn-primary">View Student details</button></a>
			
			<h2>Student Details </h2>
			<form method="POST">
				<label  style="margin-top:19px;margin-right:40px;">Register No</label><br><input type="text" name="rno" id="rno" placeholder="Enter Register No"  style="margin-bottom:-20px;">
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
							<input type='text' name='name' value=".$row['name']." disabled  style='margin-left:-60px;'><br>
							<label>Section</label>
							<br><input type='text' name='dept' value=".$row['section']." disabled><br>
                            <label>Branch</label>
							<br><input type='text' name='designation' value=".$row['branch']." disabled><br>
                            
                            <label>Contact No </label><br><input type='text' placeholder='Enter Contact Number' name='name' value=".$row['phno']." disabled style='margin-left:-40px;'><br>
							<label>No of Sub failed </label><br><input type='text' placeholder='Enter No of subjects failed in CAT' name='failed' style='margin-left:-80px;'><br>
							<label>Attendance </label><br><input type='text' placeholder='Enter attendance in percentage' name='attendance' style='margin-left:-40px;'><br>
							<input type='submit' name='grievance' value='Next'  style='margin-top:20px;' class='btn btn-success'> 	
							
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
