<?php

	include_once 'connect.php';

	// get POST parameters
	
	$name            		= $_POST['name'];
	$phone           		= $_POST['phone'];
	$city           		= $_POST['city'];
	$image					= $_POST['image'];
	// operation time
	$adate          		= date("Y-m-d H:i:s",time());
	
	if ($stmt = $mysqli->prepare("SELECT phone FROM user WHERE phone=?")) {

            // Bind the variables to the parameter as strings.
            $stmt->bind_param("s", $phone);

            /* execute query */
            if($stmt->execute()){
            	/* bind result variables */
            	$stmt->bind_result($phones);
				
				/* fetch value */
	            $stmt->fetch();
	
	            // response json data
				
				if(isset($phones))
	            {
	            	echo json_encode(array('code'=>1,'content'=>'Send Fail'));
	            }else{
					if ($stmt1 = $mysqli->prepare("SELECT card FROM cardlist book limit 1")){
						if($stmt1->execute()){
							/* bind result variables */
							$stmt1->bind_result($card);
							/* fetch value */
							$stmt1->fetch();
							$stmt1->close();
							if(isset($card)){
								if ($stmt2 = $mysqli->prepare("DELETE FROM cardlist WHERE card = ?")){
									$stmt2->bind_param("s", $card);
									if($stmt2->execute()){
										$stmt2->close();
										if ($stmt3 = $mysqli->prepare("INSERT INTO user (name, city, phone, card, image, adate) VALUES (?,?,?,?,?,?)")){
											$stmt3->bind_param("ssssss", $name,$city,$phone,$card,$image,$adate);
											if($stmt3->execute()){
												$stmt3->close();
												echo json_encode(array('code'=>0,'card'=>$card));
											}
										}
									}
								}
							}else{
								echo json_encode(array('code'=>2,'content'=>'Send Fail'));
							}
						}
					}
				}
            }
           /* close statement */
			$stmt->close(); 
	}
    else
    	echo json_encode(array('code'=>3,'content'=>'Send Fail'));
    	
   	
       
?>
