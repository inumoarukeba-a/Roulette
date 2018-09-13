<!DOCTYPE html>
<html lang="ja">
<head>

  <!-- Meta -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <?php
  if( !empty($device) && $device === 'mobile' ){
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
  }else{
    echo '<meta name="viewport" content="width=1024">';
  }
  ?>
  <meta name="format-detection" content="telephone=no,address=no,email=no">
  <meta name="description" content="<?php e(@$description, 'ディスクリプション') ?>">
  <meta name="keywords" content="<?php e(@$keywords, 'キーワード') ?>">

  <!-- CSS -->
  <link rel="stylesheet" href="/common/css/common.css">
  <?php e(@$ex_tag_css) ?>

  <!-- Title -->
  <title><?php e(@$title, 'タイトル', true) ?></title>

  <!-- Web fonts -->
  <script src="//webfont.fontplus.jp/accessor/script/fontplus.js?AoLijhqMriI%3D&pm=1&aa=1&ab=1&ab=1" charset="utf-8"></script>
  <link href="//fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet">
  <link href="//fonts.googleapis.com/css?family=Monoton" rel="stylesheet">

  <!-- Analytics -->

</head>

<body id="body">

  <div class="wrapper">
