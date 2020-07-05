<?php
// JUST A TEMPORARY CODE.
// Please Dont Judge !!!!!!!!!!!!!!!!!!!!!!!!!!!
include 'env.php';


if ($_REQUEST['req']=='getAll') {
	$sql = "SELECT * FROM users";
	$result = $conn->query($sql);
	$data=[];
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$data[]=$row;
		}
	}
	echo json_encode($data);exit;
}else{
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$sql = "INSERT INTO users (name, email) VALUES ('".$_REQUEST['name']."', '".$_REQUEST['email']."')";
		if ($conn->query($sql) === TRUE) {
		  $data=array('stat'=>true);
		} else {
		  $data=array('stat'=>false);
		}
		echo json_encode($data);exit;
	}
}	
exit;
?>

