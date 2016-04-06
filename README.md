# Step 1: Change the Order of Scripts

For this task we are going to organize our scripts into containers. You may create as many containers of scripts as needed. 

Descript adds each script to to the `default` container by default. Each script can only be in one container, and adding it to a new container will remove it from any other container it is in.

## Task

### Add mobile-first Script to New Container

<img src="/static/img/script-order.png?raw=true" height="150"/>

We can see that these two scripts need to run in one order on desktop, and the opposite order on mobile. We're going to use descript's `add()` method. the first arguement to the `add()` method is a string, this will be the name of your bucket, the second argument is an object containing a reference to the script or scripts you would like added to that bucket. In this case we will select the script by it's `src` again. 

In `/app/global/baseView.js` still inside of the `preProcess` function, and below the code we added in the last step, lets add the following:

```
descript.add('urgent', {
    src: ['mobile-first.js']
});
```

If you preview your project now you will notice that the `mobile-first.js` script no longer runs, this is because we are not selecting and outputting that container.

### Return The New Container Within Context

Still in `/app/global/baseView.js` scroll down and view the context that is being returned.

<img src="/static/img/baseView-context.png?raw=true" height="300"/>

You can see that we are selecting the `default` container scripts and returning them under the `desktopScripts` key. Lets create a new key called `urgentScripts`. Don't forget to add a comma after the closing brace of the `desktopScripts` key.

``` javascript
desktopScripts: function() {
...
},
urgentScripts: function() {
    return descript.get('urgent');
}
```

Great, now lets call those scripts from the template file.
Go to the `/app/global/base.dust` file and scroll down until you see where `{desktopScripts}` is being called.

<img src="/static/img/template-scripts.png?raw=true" height="250"/>

Just above `{desktopScripts}` lets add `{urgentScripts}`, this file gets executed in order, so this will ensure that `urgentScripts` will get executed first. 

### Preview Project
Lets preview the project and see what order the scripts are executing in now.

In terminal run `grunt preview -auto` and the Mobify Preview page will open up. Click `Preview`. Once you arrive at Merlin's Potions, open up the developer tools and look at the console. You may have to refresh the page with the developer tools open in order to see the console message.

### Move GA Script Last

We also have a script that we want to make sure goes last, this is the Google Analytics script. It is best-practice to run GA scripts as the last thing, but on Merlin's Potions they have chosen to run it as the first script.

This script is an inline script, so we cannot select it using the `src` instaed we are going to be using descript's `contains` selector. We are also going to add it to a new container `defer` to ensure it is run last.

Below our other code in the `preProcess` function in `/app/global/baseView.js` lets add:

``` javascript
descript.add('defer', {
    contains: ['//www.google-analytics.com/analytics'],
});
```

`contains` will select any script which contains the string you pass in, so make sure it is unique enough to only select the script/s you want added.   

Again, scroll down and create a new key inside of context:

``` javascript
deferScripts: function() {
    return descript.get('defer');
}
```

Lets go back to the `app/global/base.dust` file. Add `{deferScripts}` as the last item inside of the scripts block.

```
   {+scripts}
        {urgentScripts}
        {desktopScripts}
        ...

        {deferScripts}
    {/scripts}
```

##Continue to Step 3

When you're ready to continue to Step 3, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-3-insert-new-script
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--descript/blob/step-3-insert-new-script/README.md) for the Step 3 branch.

