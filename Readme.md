Transition.js
=============

This repository is just a wrapper around the code provided for [Codrops article on Page Transitions](http://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/).

Features
-------
* Next page transition.
* Previous page transition.
* Go to a particular page.
* Add custom animation.
* Add a list of animation to be played randomly.


Install
-------

#### Install via Bower
```bower install transition.js```


Getting Started
-------

### Page Anatomy

* **.pt-wrapper** - Add this class to the wrapper div with all the pages and buttons.

* **.pt-trigger**   - Add this class to the elements to trigger the animation on click.

* **.pt-page**     - Add this class to all the individual pages.

* **data-animation** - This attribute is added to `.pt-trigger` element with values between `1` to `67`. If you need random animation then the values should be separated by **`-`** 

 **`data-animation="57"`** it does the 57th animation.

 **`data-animation="50-51-52-53-54"`** it does a random animation from the list.

* **data-goto** - This attribute is added to `.pt-trigger` element, with values `-1` or `-2` or any valid page number starting from 1 inside the **`.pt-wrapper`**.    

 `data-goto="-1"` trigger next page.

 **`data-goto="-2"`** trigger previous page.

 **`data-goto="2"`** trigger to go to page 2.


### Events

* **onAnimationStart** - triggered when the animation starts.

* **onAnimationEnd** - triggered when the animation completes.

* **onResetPage** - triggered when the classes on the pages are reset.

#### Sample in action

Adding the **transition.js**

    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/transition.js"></script>

Adding the **HTML**

    <div class="pt-wrapper">
        <div class="pt-trigger-container">
            <button class="pt-trigger" data-animation="1" data-goto="-1">Go to next page</button>
            <button class="pt-trigger" data-animation="2" data-goto="-2">Go to previous page</button>
            <button class="pt-trigger" data-animation="58" data-goto="1">Go to page 1</button>
            <button class="pt-trigger" data-animation="51-52-53-54-55" data-goto="2">Go to page 2</button>
        </div>

        <!--All Pages-->

        <div class="pt-page pt-page-1">
            <h1><strong>Page 1</strong></h1>
        </div>
        <div class="pt-page pt-page-2">
            <h1><strong>Page 2</strong></h1>
        </div>
    </div>

Initialize the **PageTransitions**

    $(document).ready(function() {
        // initializing page transition.
        PageTransitions.init();
    });

Initialize **PageTransitions** with event handler

    $(document).ready(function() {
        // initializing page transition.
        PageTransitions.init({
            onAnimationEnd: function(page) {
                // Do something after a page change has occurred.
            }
        });
    });

### Options Reference

<table class="reference alternate">
  <col class="name">
  <col class="type">
  <col class="value">
  <col class="description">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Default Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
        <tr>
            <td class="name"><code>hashIt</code></td>
            <td class="type"><code><i>boolean</i></code><p><em>true</em> or <em>false</em></td>
            <td class="value"><code><span class="s">true</span></code></td>
            <td><p>If true existing href hashes will be appended to the window url.</p></td>
        </tr>
  </tbody>
</table>

## Down the line

* Add single page highlighting all the available animation.
* Add range for random animation.   
 something like **`data-animation="1:10"`** will make random animation from 1-10.
* More samples.

### Working with Scroll Navigation and Arrow Key Navigation

[Download latest jquery.mousewheel](https://github.com/brandonaaron/jquery-mousewheel/tags) for mouse scroll

    <script type="text/javascript">
        $(document).ready(function (){
            // Mouse Scroll
            $('body').mousewheel(function(event, delta) {
                if (delta < 0 ){
                     $("#nextpage").trigger("click");
                }
                else if (delta > 0){
                     $("#prevpage").trigger("click");
                }
             });
            // Arrow Keys
            $("body").keydown(function(e) {
               if(e.keyCode == 37) { // left
                    $("#prevpage").trigger("click");
               }
               else if(e.keyCode == 39) { // right
                    $("#nextpage").trigger("click");
               }
          });
        });
    </script>

Contributing
-------

1. Fork it.
2. Create a branch. (`git checkout -b my_transition`)
3. Commit your changes. (`git commit -am "Added Feature"`)
4. Push to the branch. (`git push origin my_transition`)
5. Open a [Pull Request](https://github.com/icodebuster/transition.js/pulls).
6. Enjoy a refreshment and wait.


License
-------
All the CSS animations in animation.css were written by Codrops and therefore fall under [their license](http://tympanus.net/codrops/licensing/).
All other source code is released under the MIT License.
