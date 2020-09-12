# Maps

I want to write something real quickly on how to use `Map`s in TypeScript.

If you programmed in Python and know what Dictionaries are or if you have used Objects for years in JavaScript, then you should familiarize yourself with a new datatype that was added in ES6: `Maps`.

How TypeScript described how to use Maps in the Handbook was like trying to teach a kindergartner what Multivariable Calculus is.
This page should be like trying to explain to that same kid how to multiply numbers, which is so much easier...and fun if there is *Schoolhouse Rock* involved. 

## What is a Map?

A **map** is basically a set of key-pair values. Each key-pair value is called an **entry**. Each entry has a **key** and a **value**.  In an JavaScript Array, we know of this key as the *index* value, which is an integer (whole number).  In a JavaScript Object, this key is generally a string.  The value in any Array or Object can by of any type.
However, in TypeScript, much like how maps are used in Java, we can restrict the datatype of the keys and the values.

Think of `new Array()` in JavaScript as being equivalent in TypeScript as `new Map<number,any|undefined>`.
Similarly, think of `new Object()` in Javascript as being equivalent in TypeScript as `new Map<string,any|undefined>`.

The `any|undefined` part is used to represent the possible types that the value could support. When we use a pipe character to note more than one data type can be used, this is what is called a **union**, which is another important topic that was not covered in LC101 Unit 1, that denotes multiple data types can be used. While `any` is a datatype in TypeScript that would describe any `string`, `number`, `boolean`, User-Defined type, etc., it does not include `undefined` which permits no value be entered into the value field.

Using `any|undefined` is much better than using `any?` which would allow the value to not exist, which would be problematic later if we needed to set a value with a key, because then the value field for that entry would not exist.

If you omit the `|undefined` part (note the leading pipe character), the value MUST have a value when setting a new entry, which is fine because typically when we create a new entry, we want to set a key and a value not just a key for a value later.

## A Map Example
For our first `Map` example, we want to set our key to a `string` and our value to a `number`.

### Maps in JavaScript

We're not going to dive too deeply into this, as we want to talk mostly about `Map`s in TypeScript.
In JavaScript, we don't need to set our data type before creating a map.

```javascript
(function(){
    let prices = new Map();
    prices.set("Chips",1.00);
    prices.set("Soda",1.25);
    prices.set("Cookie",0.75);
    prices.set("Ice Cream",2.75);
    prices.set("Hamburger",2.00);
    prices.set("Cheeseburger",2.25);
    prices.set("Double Cheeseburger",4.00);

    // Find the longest key
    let lkl = 0;
    for(let k of prices.keys()){
        if(k.length > lkl){
            lkl = k.length;
        }
    }

    for ( let [k,v] : prices.entries()) {
        // Pad our keys with spaces to the right
        let key   = k.padEnd(lkl);
        // Format our values in currency format
        // TODO: Should I add left padding? (this would use padStart() if it did.)
        let value = "$" + v.toFixed(2);
        console.log(key + " : " + value);
    }
})();   // Let's use an IIFE
```

### Maps in Java

```java
import java.util.*;     // The package where List, ArrayList, Set, Map.Entry, Map, and Hashmap are.

// These classes are unrelated to our Maps example, but knowing how to format number in currency format is a must know.
import java.text.NumberFormat;
// Note: Locale and Currency classes are also part of java.util

public class MapDemo{
    public static void main(String[] args){
        
        NumberFormat nf = NumberFormat.getCurrencyInstance();

        Map<String,Float> prices = new HashMap<>();
        prices.put("Chips",1.00);
        prices.put("Soda",1.25);
        prices.put("Cookie",0.75);
        prices.put("Ice Cream",2.75);
        prices.put("Hamburger",2.00);
        prices.put("Cheeseburger",2.25);
        prices.put("Double Cheeseburger",4.00);

        // Find the longest key
        // TODO: Show how to do the Arrow Function version of this! (If JS has Lambdas so should Java)
        int lkl = 0;    // Longest Key Length
        for(String key : prices.keySet()){
            if(key.length() > lkl){
                lkl = key.length();
            }
        }

        for ( Map.Entry<String,Float> price : prices.entrySet()) {
            // Pad our keys with spaces to the right
            String key   = String.format("%1%" + lkl + "s",price.getKey());
            // Format our values in currency format
            // TODO: Should I add left padding?
            String value = nf.format(price.getValue());
            System.out.println(key + " : " + value);
        }
    }
}
```

> Side note: If you are ever ask to pad a string with characters, remember these functions
> ```java
> public static String leftPadding(String str, int num, char ch = ' '){
>     String fmt = "%1$"  + num + "s";    // left
>     if(ch != ' '){
>         return String.format(fmt,str).replace(' ',ch);
>     }else{
>         return String.format(fmt,str);
>     }
> }
> 
> public static String rightPadding(String str, int num, char ch = ' '){
>     String fmt = "%1$-" + num + "s";    // right
>     if(ch != ' '){
>         return String.format(fmt,str).replace(' ',ch);
>     }else{
>         return String.format(fmt,str);
>     }
> }
> ```
> There's likely a better version of that code, but this will do for now. 

### Maps in TypeScript

From the above examples, we can infer this would be the code for TypeScript

```typescript
(function(){
    let prices = new Map<string,number>();
    prices.set("Chips",1.00);
    prices.set("Soda",1.25);
    prices.set("Cookie",0.75);
    prices.set("Ice Cream",2.75);
    prices.set("Hamburger",2.00);
    prices.set("Cheeseburger",2.25);
    prices.set("Double Cheeseburger",4.00);

    // Find the longest key
    let lkl : number = 0;    // Longest Key Length
    for(let key of prices.keys()){
        if(key.length > lkl){
            lkl = key.length;
        }
    }

    for ( let [k,v] of prices.entries()) {
        // Pad our keys with spaces to the right
        let key : string   = key.padEnd(lkl);
        // Format our values in currency format
        // TODO: Should I add left padding?
        let value : string = "$" + v.toFixed(2);
        console.log(key + " : " + value);
    }
})();       // Yes, you can use IIFEs in TS!
```

We could also write that like this. (I'm going to shorten the code this time as well.)

```typescript
(function(){
    let prices = new Map<string,number>([
        ["Chips",1.00],
        ["Soda",1.25],
        ["Cookie",0.75],
        ["Ice Cream",2.75],
        ["Hamburger",2.00],
        ["Cheeseburger",2.25],
        ["Double Cheeseburger",4.00]
    ]);

    // Find the longest key
    // This time let's use a reduce
    let longest : string = Array.from(prices.keys()).reduce(acc,idx) => acc.length : idx.length ? acc : idx, "");

    for ( let [k,v] of prices.entries()) {
        console.log(`${key.padEnd(longest.length)} : \$${v.toFixed(2)}`);
    }
})();       // Yes, you can use IIFEs in TS!
```

## `Array.from` your Maps

If you are trying to use `.reduce`, `.map`, `.filter`, or any other `Array` function on a map, you'll likely get an error saying those functions aren't part of the `Map` class. Fortunately, there's an easy work around. Put your map (more than like `mapName.entries()` or if you want to use just the keys or the values `mapName.keys()` or `mapName.values()` respectively), inside an `Array.from()`.
This will let you use Array functions on your map data in TypeScript just as you would use them in JavaScript.

## `tsc` needs to know Maps.

If you haven't set up a `tsconfig.json` file because you want to try compiling `.ts` files individually or if you are using `ts-node`, you may want to run `tsc` or `ts-node` with the `--lib es2019` argument. By default, `tsc` and `ts-node` will work with ES5 (which is like using JavaScript from 2010), but you should use a newer library.
I recommend using `es2019`, because (at the time of this writing it is 2020) not everyone may have `es2020` yet.  `es2017` is also good. That should be like ES8 or something. (I'm not thinking of the numbers right now.)
You'll also want to use `dom` as a library too or else `console.log` won't work.

```bash
tsc --lib es2019,dom Main.ts        // Compile Main
node Main.js                        // Run the program
```

## Why not `Record`?
`Record` is another data type that is a little bit closer to that classic JavaScript Object when written...but the basic types aren't recognized.

Let's take the code from `Job.ts`.  With a `Record`, 
```typescript
// I tried using this, but I keept getting TS2339. Asserting datatypes added a TS2322. So let's stick with Maps for now.
let fields : Record<string, any | undefined> = {
    "ID"            : this.id,
    "Name"          : this.name,
    "Employer"      : this.employer,
    "Location"      : this.location,
    "Position Type" : this.positionType,
    "Skill"         : this.skill
};

let longest : number = Array.from(fields.keys()).reduce( (acc,idx) => acc.length > idx.length ? acc : idx, "").length;
```

When we run this code in `tsc` (with the library arguments), three errors occur.  Using an assertion (e.g. `<string>(acc)`), didn't convince the compiler that our arguments (`acc` and `idx`) or the output of the `reduce` function were strings.

Maps didn't have this problem, so for now let's use what works.

Eventually, I will write something here that might show how to do it like that.

> In case you are wondering, that `""` in the `reduce` function tells `reduce` the initial value to use. In this case it is an empty string. If we wanted to use a number, we would use `0`. This argument is optional, but recommended since it will save you a line of code to set up an inital value (like the `lkl` variable in the first version of our typescript example).
> The syntax of the `reduce` function can be difficult for new programmers, but once you expose yourself to enough examples of the `reduce` function, it becomes easy to understand what it does.

## Crash course in the commands to use

| Method or Property              | Returns (TS (JS))    | Description                                                                                                                                                                             | Notes                                                               |
|---------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| `Map.prototype.size`            | `number`             | (property) Returns the number of key-value pairs in the Map object.                                                                                                                     | Use this instead of `length`                                        |
| `Map.prototype.clear()`         | `void` (`undefined`) | (method) Removes all key-value pairs from the `Map` object.                                                                                                                             |                                                                     |
| `Map.prototype.delete(key)`     | `boolean`            | (method) Returns `true` if an element in the Map object existed and has been removed; or false if the element does not exists. `Map.prototype.has(key)` will return `false` afterwards. |                                                                     |
| `Map.prototype.get(key)`        | `any|undefined`      | (method) Returns the value associated to the `key`, or `undefined` if there is none.                                                                                                    |                                                                     |
| `Map.prototype.has(key)`        | `boolean`            | (method) Returns a boolean asserting whether a value has been associated to the `key` in the `Map` object or not.                                                                       |                                                                     |
| `Map.prototype.set(key, value)` | `this` (`Map`)       | (method) Sets the `value` for the `key` in the `Map` object.                                                                                                                            | This method is chainable. (e.g. `map.set("k1","v1").set("k2","v2")` | 

For the iterable methods (`keys()`,`values()`,`entries()`, etc.), you should put your `Map` into a `Array.from()` method and use the same iterable methods available in the `Array` class.

---
## Sources
* [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - MDN
* [Advanced Types - Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types) - TypeScript Handbook
* [Utility Types - `Record<Keys,Type>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype) - TypeScript Handbook
* [`class HashMap<K,V>`](https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/HashMap.html) - Java 14 Docs
* [`interface Map<K,V>`](https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/Map.html) - Java 14 Docs