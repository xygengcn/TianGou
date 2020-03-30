<?php
header('Content-Type:application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *'); // *代表允许任何网址请求
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin'); // 设置允许自定义请求头的字段

$act = $_GET['act'] ? $_GET['act'] : $_POST['act'];
$password = "xygengcn";
if ($act) {
    switch ($act) {
        case 'add':writeJson();
            break;
        case 'all':echo readJson();
            break;
        case 'admin':admin();
            break;
        case 'login':login();
            break;
    }
}
function writeJson()
{
    $data['city'] = $_POST['city'];
    $data['weather'] = $_POST['weather'];
    $data['text'] = $_POST['text'];
    $data['datetime'] = getMillisecond();
    if (file_exists('data.json')) {
        $json_string = file_get_contents('data.json');
        if ($json_string != '' && $json_string != 'null') {
            $json = json_decode($json_string, true);
        } else {
            $json = array();
        }

    } else {
        $json = array();
    }
    array_push($json, $data);
    $file = json_encode($json);
    if (file_put_contents('data.json', $file)) {
        echo 1;
    } else {
        echo -1;
    }
}
function readJson()
{
    if (file_exists('data.json')) {
        $data = file_get_contents('data.json');
    } else {
        $data = '[]';
    }
    return json_encode(json_decode($data, true));
}

function admin()
{
    if (file_put_contents('data.json', $_POST['data'])) {
        echo 1;
    } else {
        echo -1;
    }
}
function login()
{
    global $password;
    if (@$_GET['data']) {
        if ($_GET['data'] == $password) {
            echo json_encode(array("code" => 1, "data" => readJson()));
        } else {
            echo json_encode(array("code" => 0, "msg" => "密码错误"));
        }
    } else {
        echo json_encode(array("code" => 0, "msg" => "输入错误"));
    }
}

//获取毫秒事件

function getMillisecond()
{
    list($t1, $t2) = explode(' ', microtime());
    return (float) sprintf('%.0f', (floatval($t1) + floatval($t2)) * 1000);
}