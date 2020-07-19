// Wrap - Wrapall - Unwrap
// let wrapper = "<div class='wrapper'>";
// let button = $(".button");
// let wrapped = true;

// button[0].onclick = function () {
//   if (wrapped) {
//     $("section").unwrap();
//     wrapped = false;
//     button.text("Wrap");
//   } else {
//     $("section").wrapAll(wrapper);
//     wrapped = true;
//     button.text("Unwrap");
//   }
// };

// Empty and Remove
// let lead = $("#lead-banner");
// lead.empty();
// Empties the element
// lead.remove();
// Removes the elemnt completely

// Remove attribute attar();

// $("#contact img").removeAttr("alt")
// Removes
// $("#contact img").attr("src", "https://source.unsplash.com/800x600/?water");
// Adds or reads attr
// console.log($("#contact img").attr("src"));

// Controlling CSS

// console.log($("#social-nav").css("position"));
// Changing css
// $("#social-nav").css("position", "absolute");
// const props = {
//   top: "-40px",
//   border: "1px solid red",
// };
// $("#social-nav").css(props);

/// removeClass(); addClass(); toggleClass();

// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");

// let button = $("#lead-banner a");
// button[0].onclick = function () {
//   $("#points-of-sale").toggleClass("open");
//   return false;
// };

/// Event handling
// on();off();

// let mylis = $("#points-of-sale li");
// mylis.on("click", function () {
//   // this is refering to the thing that we're clicking
//   $(this).css({ background: "pink" });
//   mylis.off("click");
// });

// Event Helpers

// mylis.click(function () {
//   alert("You clicked me");
// });

// $(document).on("ready", function () {
// When you put script tags up top
// });

// When Everything Loads
// $(window).on("load",function(){
// })
/// Also shorthand .load() .ready()

// Event Objects

// $(document).ready(function () {
//   //   $("*").on("click", function (e) {
//   //     console.log(e.pageX);
//   //     e.stopPropagation();
//   //   });
//   $("section > h2").click(function () {
//     //   $(this).animate(
//     //     { width: "500px", height: "100px" },
//     //     1000,
//     //     "linear",
//     //     function () {
//     //       alert("Animation Complete");
//     //     }
//     //   );
//     // $(this).fadeOut(2000).fadeIn(500);
//     //   $(this)
//     //     .fadeTo(200, 0.2)
//     //     .fadeTo(200, 0.8)
//     //     .fadeTo(200, 0.2)
//     //     .fadeTo(200, 0.8)
//     //     .fadeTo(200, 0.2)
//     //     .fadeTo(200, 0.8)
//     //     .fadeTo(200, 0.2)
//     //     .fadeTo(200, 0.8);
//     // $(this).hide(1000).show(1000);
//     // $(this).toggle(1000);
//   });
// });

$(document).ready(function () {
  // get the blockquote

  let allQuotes = $("blockquote");
  let currentQuote = 0;
  function changeQuote() {
    $(allQuotes[currentQuote]).fadeOut(200, function () {
      if (currentQuote == allQuotes.length - 1) {
        currentQuote = 0;
      } else {
        currentQuote++;
      }

      $(allQuotes[currentQuote]).fadeIn(200);
    });
  }
  let quoteTimer = setInterval(changeQuote, 3000);
});

let items = $("#points-of-sale li");
items.click(function () {
  $(this).find("p").slideToggle(200);
});

