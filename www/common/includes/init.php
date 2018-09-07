<?php

// ルートパス追加
$site_path = "/xxx";
$root_path = $_SERVER['DOCUMENT_ROOT'].$site_path;

// インクルードパス追加
set_include_path(get_include_path().PATH_SEPARATOR.dirname(__FILE__));

function e($value, $default = '', $add_flag = false) {
  if (!empty($value)) {
    if ($add_flag && !empty($default)) {
      echo $value.' | '.$default;
    } else {
      echo $value;
    }
  } else {
    echo $default;
  }
}

//端末判定
$ua = mb_strtolower($_SERVER['HTTP_USER_AGENT']);
$device = '';
if (
    (strpos($ua, 'windows') !== false && strpos($ua, 'touch') !== false && strpos($ua, 'tablet pc') === false) ||
    (strpos($ua, 'ipad') !== false) ||
    (strpos($ua, 'android') !== false && strpos($ua, 'mobile') === false) ||
    (strpos($ua, 'firefox') !== false && strpos($ua, 'tablet') !== false) ||
    (strpos($ua, 'kindle') !== false) ||
    (strpos($ua, 'silk') !== false) ||
    (strpos($ua, 'playbook') !== false)

) {
    $device = 'tablet';
} elseif (
    (strpos($ua, 'windows') !== false && strpos($ua, 'phone') !== false ) ||
    (strpos($ua, 'iphone') !== false) ||
    (strpos($ua, 'ipod') !== false) ||
    (strpos($ua, 'android') !== false && strpos($ua, 'mobile') !== false) ||
    (strpos($ua, 'firefox') !== false && strpos($ua, 'mobile') !== false) ||
    (strpos($ua, 'blackberry') !== false)
) {
    $device = 'mobile';
}
