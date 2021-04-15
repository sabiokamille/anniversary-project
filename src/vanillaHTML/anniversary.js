var onScrollHandler = function() {
var newImageUrl = yourImageElement.src;
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
     newImageUrl = "heart-icon.png"
  }
  if (scrollTop > 200) {
     newImageUrl = "icons8-heart.gif"
  }
  if (scrollTop > 300) {
     newImageUrl = "heart-icon.png"
  }
  yourImageElement.src = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);
