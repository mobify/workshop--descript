# Step 4: Create a Custom Filter

For this task we are going to create a custome filter to locate scripts by. In this case, we can add clesses to our scripts when they are included in our desktop code, and we will select those scripts with those classes.

## Task

### descript.addSearcher

Descript's `addSearcher` function takes two arguments, the name of the customer searcher as a string, and a function that will return true or false. The function also takes two arguments, the current script to be evaluated, and the query. 

Inside of the function, you can write your own logic to decide whether a script meets the criteria. A common usage of this would be to select on scripts according to their class names.

In `/app/global/baseView` below `descript = Descript.init();` in the `preProcess` function add the  following:

``` javascript
descript.addSearcher('selector', function($script, query) {
    return !!$script.filter(query).length;
});
```

Now, when we want to select on a script, we can use {selector: "class-name"} as our crieteria. 

### Move a Script last By Class 

On desktop we have a script with the class "last", let's select it and move it into the "defer" container.

Let's add `selector: '.last'` as a criteria in our defer code. It should now look like this:

``` javascript
descript.add('defer', {
    contains: ['//www.google-analytics.com/analytics'],
    selector: '.last'
});
```

### View the Result

Let's preview the project and see what order the scripts are executing in now.

In terminal run `grunt preview`.
Open up the developer tools and look at the console. You may have to refresh the page with the developer tools open in order to see the console message.

<img src="/static/img/last-by-class.png?raw=true" height="50">

##Finished!

That's it, we're all done. To see the final product continue to the [completed-workshop](https://github.com/mobify/workshop--descript/blob/completed-workshop/README.md) branch.

git reset --hard HEAD && git clean -df && git checkout completed-workshop

