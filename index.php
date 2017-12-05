
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">


  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

      <!-- STYLES -->
  <link rel="stylesheet" href="proj4.css">

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>

<body>

<!-- PHP-->
<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "916695763962482688-Uzi1JAKLeH1h6lQxr4Tp80TfT5KwRly",
    'oauth_access_token_secret' => "gwZp7E2ul4kS9sm8nIVEWclyDOaWWESJyButKvolKeY8W",
    'consumer_key' => "oxqjFPx64P2iZ7RnzQXZO0fp8",
    'consumer_secret' =>  "CJPartqlA2UzfgkOtYpKDshXPjHz9rmqUAxujqX9T9En0Oyb2u"
);


$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=coralbleaching';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$tweetData = json_decode( $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc=TRUE);

          foreach($tweetData['statuses'] as $index => $items){
               $userArray = $items['user'];
               echo '<div class="tweet-border row">';
               
               echo '<a class="float-left" href="http://twitter.com/' . $userArray['screen_name'] . '"><img src="' . $userArray['profile_image_url'] . '"></a>';
               echo '<span>';
               echo '<a class="float-left" href="http://twitter.com/' . $userArray['screen_name'] . '"><h3 class="tweet-name">' . $userArray['name'] . '</h3>' . '</a>';
               echo '<h1 class="">@' . $userArray['screen_name'] . '</h1>' . "<br />";
               echo '<h2 class="tweet tweet-text">' . $items['text'] . '</h2>' . "<br />";
               echo '</span>';
               echo '</div>';

             }
//echo "<script>pageComplete();</script>;"
?>

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


<script src="js/proj4.js"></script>
<script src="tweetLinkIt.js"></script>
<script>


       $('.tweet').tweetLinkify();

</script>

</body>

</html>

