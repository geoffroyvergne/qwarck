<?php
error_reporting(E_ALL); 
ini_set("display_errors", 1); 

$crawler = false;
$language = "en";
$fragment = "/";

if (isset($_GET['_escaped_fragment_'])) {
	
	$fragment = $_GET['_escaped_fragment_'];

	if($fragment == "/lang/fr") {
		$language = "fr";
	}

	if($fragment == "/lang/en") {
		$language = "en";
	}
	
	$crawler = true;
} 
// else 
// {
// 	include "botDetection.php";

// 	$crawler = crawlerDetect($_SERVER['HTTP_USER_AGENT']);	
// }

if($crawler) {
	$languageFile = "languages/" . $language . ".json";
	$langFileContent = file_get_contents($languageFile);

	$langObj = json_decode($langFileContent, false);

	include "commonHtml.php";
	echo getCommonHtml
	(
		$language, //$lang, 
		$langObj->main->title, //$title, 
		$langObj->main->description, //$description, 
		$langObj->main->description, //$keywords, 
		"http://www.qwarck.com/ico/faviconQwarck.png", //$urlImage, 
		"http://www.qwarck.com/#!/lang/fr", //$frUrl, 
		"http://www.qwarck.com/#!/lang/en", //$enUrl, 
		"http://www.qwarck.com/ico/faviconQwarck.png", //$ogUrlImage, 
		"http://www.qwarck.com/#!" . $fragment, //$ogUrl, 
		"Qwarck", //$ogSiteName, 
		null //$fbApId
	);

 	exit;
 }
?>
