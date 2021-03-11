<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

	</head>
	<body>
		<?php 
		session_start();
		?>

		<div class="container">
		<span style="text-align:center"><h2>Student Details</h2></span>
		<table class="table table-bordered table-striped border-primary">
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
	</div>
	</body>
</html>
