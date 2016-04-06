# Step 1: Remove a Desktop Script

## Task

### Get Oriented 

If you look in `/app/global/baseView` you will notice that descript is automatically included in your project. 

<img src="/static/img/include-descript.png?raw=true" height="300"/>

You will see descript being initialized inside of the `preProcess` function. Currently, this does not do anything.

### Preview Project

On the desktop version of the site, there is a script, all it contains is a `console.log`. Lets preview the project and see what the `console.log` says.

In terminal run `grunt preview -auto` and the Mobify Preview page will open up. Click `Preview`. Once you arrive at Merlin's Potions, open up the developer tools and look at the console. You may have to refresh the page with the developer tools open in order to see the console message.

<img src="/static/img/console-logs.png?raw=true" height="200"/>

The message we are concerned with first is "You are on desktop, this script should not run on mobile". Lets remove that script.

### Remove The Script

On desktop this script is called like this:

```html
<script src="/js/desktop-only.js"></script>
```

So we will use the `src` of the script to remove it. In `app/global/baseView.js` inside of the `preProcess` function, immediately after the `descript = Descript.init();` line add the following:

``` javascript
descript.remove({
    src: ['desktop-only.js']
});
```
The `src` used in this case does not have to be exact, it only needs to contain the string that you choose to find it by. Be careful to make your string unique enough that it only selects those scripts you actually want removed.

If we preview the project now, the script should no longer be activating, and you should not be able to see that output in the console.


##Continue to Step 2

When you're ready to continue to Step 2, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-2-change-script-order
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--descript/blob/step-2-change-script-order/README.md) for the Step 2 branch.

