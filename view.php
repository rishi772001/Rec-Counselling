<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style>
			table{
				display :none;
			}
		</style>
	</head>
	<body>
		<?php 
		session_start();
		?>
		
		<div class="container">
		<span style="text-align:center"><h2>Student Details</h2></span>

		<div>
			<input type="radio" name="select" id="all" onclick="display(1)"> All
			<input type="radio" name="select" id="transport" onclick="display(2)"> Transport
			<input type="radio" name="select" id="academic"> Academic
			<input type="radio" name="select" id="hostel"> Hostel
			<input type="radio" name="select" id="canteen"> Canteen
			<input type="radio" name="select" id="general"> General
		</div>


		<table class="table table-bordered table-striped" id="showall">
			<tr>
			<th>Register Number</th>			
			<th>Transport Issues</th>
			<th>Hostel Issues</th>
			<th>Canteen Issues</th>
			<th>Remarks</th>
			<th>Academic Issues</th>
			</tr>
			<?php
				require "conn.php";
				$sql="select * from grievances";
				$result=$conn->query($sql);
				if($result->num_rows>0){
				while($row=$result->fetch_assoc()){
				echo"<tr>
				<td>".$row["registerno"]."</td>
				<td>".$row["transport"]."</td>
				<td>".$row["hostel"]."</td>
				<td>".$row["canteen"]."</td>
				<td>".$row["remarks"]."</td>				
				<td>".$row["issue"]."</td>	
				</tr>";
				}
				echo"</table>";
				}
			?>
		</table>

		<table class="table table-bordered table-striped" id="showtransport">
			<tr>
			<th>Register Number</th>			
			<th>Transport Issues</th>
			
			</tr>
			<?php
				require "conn.php";
				$sql="select transport, registerno from grievances";
				$result=$conn->query($sql);
				if($result->num_rows>0){
				while($row=$result->fetch_assoc()){
				echo"<tr>
				<td>".$row["registerno"]."</td>
				<td>".$row["transport"]."</td>	
				</tr>";
				}
				echo"</table>";
				}
			?>
		</table>
	</div>

	<script>
		function display(a)
		{
			console.log(a);
			if(a == 1)
			{
				makeNone();
				document.getElementById("showall").style.display = "block";
			}
			if(a == 2)
			{
				makeNone();
				document.getElementById("showtransport").style.display = "block";
			}

		}

		function makeNone()
		{
			document.getElementById("showall").style.display = "none";
			document.getElementById("showtransport").style.display = "none";
			// document.getElementById("showtransport").style.display = "block";
			// document.getElementById("showtransport").style.display = "block";
		}

	</script>
	</body>
</html>
