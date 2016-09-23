<?php

    session_start();

    header('Content-type: text/html; charset=utf-8');

    include_once 'connect.php';

    // for debug use $_GET["param"]
    // http://localhost/madnessh5160309/db/getstatistical.php

    if ($stmt = $mysqli->prepare("SELECT count(*) FROM user")) {

        /* execute query */
        $stmt->execute();

        /* bind result variables */
        $stmt->bind_result($totalppl);

        /* fetch value */
        $stmt->fetch();

        // Display the data.
        printf("== 报名信息 ==:<br>总报名人数: %s人", $totalppl);

        /* close statement */
        $stmt->close();
    }

    if ($stmt = $mysqli->prepare("SELECT count(*) FROM cardlist")) {

        /* execute query */
        $stmt->execute();

        /* bind result variables */
        $stmt->bind_result($cardlist);

        /* fetch value */
        $stmt->fetch();

        // Display the data.
        printf("<br>代金券剩余: %s张", $cardlist);

        /* close statement */
        $stmt->close();
    }

    if ($stmt = $mysqli->prepare("SELECT card from cardlist where id = (SELECT max(id) FROM cardlist)")) {

        /* execute query */
        $stmt->execute();

        /* bind result variables */
        $stmt->bind_result($cards);

        /* fetch value */
        $stmt->fetch();

        // Display the data.
        printf("<br>代金券最后编号: %s", $cards);

        /* close statement */
        $stmt->close();
    }

    if($stmt = $mysqli->prepare("SELECT name,city,phone,card,image,adate from user")){
        /* execute query */
        $stmt->execute();

        /* bind result variables */
        $stmt->bind_result($name,$city,$phone,$card,$image,$adate);

        /* fetch value */
        //$stmt->fetch();
        $i = 1;
        printf("<br><br><table border='1'>");
        printf("<tr><td>序号</td><td>姓名</td><td>城市</td><td>电话</td><td>卡券</td><td>提交日期</td><td>图片</td></tr>");
        /* fetch values */
        while ($stmt->fetch()) {
            printf("<tr><td>".$i."</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td><img style='height: 100px' src='../wbimg/%s'></td></tr>",$name,$city,$phone,$card,$adate,$image);
            $i++;
        }
        printf("</table>");
        $stmt->close();
    }
?>
