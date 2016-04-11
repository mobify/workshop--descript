# Step 3: Insert a New Script

For this task we are going to insert a script immediately after another one. 
We have a script that we'd like to insert only for the category pages, so we now have to include descript in `/app/pages/category/view.js`.

## Task

### Include Descript

Open up `/app/pages/category/view.js` and include descript in the define array at the top, then add it as a variable in the function. This works because the path for 'descript' has already been defined inside of `/app/config/adaptation.js`.

``` javascript
define([
    '$',
    'global/baseView',
    'dust!pages/category/template',
    'descript'
],
function($, BaseView, template, Descript) {
```

### Create preProcess Function
Inside this first function, we are going to make a new one. Call it `preProcess`.


``` javascript
preProcess: function(context) {

},
```

We need to ensure that `baseView.preprocess` has run first and use the context returned from that. So we will ensure that from our new function. Then initialize descript.

``` javascript
preProcess: function(context) {
    context = baseView.preProcess(context);

    var descript = Descript.init(); 
},
```

### descript.exists

We're going to insert our new script immediately after the script with the `src='mobile-first.js'`. first we need to ensure that that script exists, We'll check that with the `descript.exists` function.
``` javascript
if (descript.exists({src: 'mobile-first.js'})) {
  
}
```
This will evaluate true, we will then use the `descript.insertScript` function. `insertScript` takes two arguments, the first is the script we wish to insert after - identified by src, or contains (or a custom search param whcih we will get into in the next part) - the second is the script, either inline, or a reference to it. We will write a simple inline script with a `console.log` in it.

Put this code inside of your `preProcess` function, after initializing descript:

``` javascript
if (descript.exists({src: 'mobile-first.js'})) {
    descript.insertScript({src: 'mobile-first.js'}, function() {
        console.log('special script for category page, must run after first script');
    });
}
```

### Review

The first part of your `/app/pages/category/view.js` should look something like this:

``` javascript
define([
    '$',
    'global/baseView',
    'dust!pages/category/template',
    'descript'
],
function($, BaseView, template, Descript) {
    return {
        template: template,
        extend: BaseView,
        preProcess: function(context) {
            context = BaseView.preProcess(context);
            var descript = Descript.init();

            if (descript.exists({src: 'mobile-first.js'})) {
                descript.insertScript({src: 'mobile-first.js'}, function() {
                    console.log('special script for category page, must run after first script');
                });
            }
            return context;
        },
    ...

```

### View the Result

Let's preview the project and see what order the scripts are executing in now.

In terminal run `grunt preview`.

Visit `http://training.merlinspotions.com/books/` to checkout a category page. Open up the developer tools and look at the console. You may have to refresh the page with the developer tools open in order to see the console message.

<img src="/static/img/insert-script.png?raw=true" height="50">


##Continue to Step 4

When you're ready to continue to Step 4, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-4-create-custom-filter
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--descript/blob/step-4-create-custom-filter/README.md) for the Step 4 branch.

