# SWD COURSE
- Complete Note & Practice Code
- Sigma Web Development Course by CodeWithHarry

## Video 1
- Using **!** for boiler plate code in VSCode.
- **Boiler Plate Code** :
    ```HTML
    <!DOCTYPE html>
        <html lang="en"> <!-- lang="en" is attribute -->
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        </body>
    </html>
    ```

## Video 2
- Linking CSS & JS files with HTML
- **For CSS** : in `<head>` tag <br>
    ```CSS link
    <link rel="stylesheet" href="style.css">
    ```
- **For JS** : just before `</body>` tag <br>
    ```JS link
    <script src="script.js"></script>
    ```

## Video 3
- Basic structure of HTML
1. ```<!DOCTYPE html>``` - declaration informs the web browser about the HTML version being used.
2. ```<html></html>``` - root element that encapsulates all the content on the page.
3. ```<head></head>``` - contains metadata and links to external resources.
4. ```<title></title>``` - sets the title of the web page.
5. ```<body></body>``` - contains the visible content of the web page.

## Video 4
- Heading Tags from `<H1>` to `<H6>`
- Paragraph Tag `<P>`
- Other values in one tag are called **Attributes**.

## Video 5
- **Image Tag** :
    ```image tag
    <img height="" width="" src="" alt="">
    ```
    1. src for path to image
    2. alt for alter text if image is not available
    3. height & width attributes for image size
---
- **List Tag** :
    1. Unorder List -
        ```ul list
        <ul>
            <li></li>
        </ul>
        ```
    - can use type for bullet design
    2. Order List -
        ```ol list
        <ol>
            <li></li>
        </ol>
        ```
    - can use type for different orders
---
- **Table Tag** :
    ```table
    <table>
        <thead>
            <caption></caption>
        </thead>
        <tbody>
            <tr>
                <th></th>
            </tr>
            <tr>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <!-- footer content -->
        </tfoot>
    </table>
    ```
    1. `<thead>`, `<tbody>` & `<tfooter>` to group the content of the table
    2. `<tr>` for table row
    3. `<th>` for table heading
    4. `<td>` for table data
    5. `<caption>` just for detail/heading line

    6. **Rowspan** :
        ```
        <td rowspan="value">
    7. **Colspan** :
        ```
        <td colspan="value">

## Video 6
- **SEO** -> Search Engine Optimization
- **Core Web Vitals** ->
    1. CLS (Cumulative Layout Shift)
    2. LCP (largest Contentful Paint)
    3. INP (Interaction to Next Paint)
- **Lighthouse** -> generate a report for website (option in inspect mode)
- `<meta>` tags for SEO optimization of web

## Video 7
- **Form** in HTML -> there are multiple types & attributes for `<input>` tag in form

## Video 8
- **Inline** Elements in HTML
- **Block** Elements in HTML
(there are many inline & block elements in HTML, can read [HERE](https://www.w3schools.com/htmL/html_blocks.asp))

## Video 9
- **ID** -> every elements have unique ID
- **Class** -> multiple elements have same class & multiple classes in one element
- can use **.** for ID & **#** for class
- id & class are attributes of element
- **id >>> class**

## Video 10
- **Video Tag**
    ```video
    <video src="video.mp4" controls></video>
    ```
    - **src**: Specifies the path to the video file.
    - **controls**: Adds video controls, like play, pause, and volume.
    - **autoplay**: Automatically starts playing the video when the page loads.
    - **loop**: Repeats the video once it ends.
    - **muted**: Mutes the video by default.
    - **poster**: Specifies an image to be displayed before the video starts playing.
    - **width and height**: Specifies the dimensions of the video.
---
- **Audio Tag**
    ```audio
    <audio src="audio.mp3" controls></audio>
    ```
    - **src**: Specifies the path to the audio file.
    - **controls**: Adds audio controls, like play, pause, and volume.
    - **autoplay**: Automatically starts playing the audio when the page loads.
    - **loop**: Repeats the audio once it ends.
    - **muted**: Mutes the audio by default.
    - **preload**: Specifies if and how the audio should be loaded when the page loads ('auto' 'metadata', 'none').
---
- **SVG Formate of Image**
    ```image tag
    <img src="image.svg" alt="Sample SVG">
    ```
    ```image.svg
    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    ```
    ```inline svg
    <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
---
- **IFrame Tag** (to embedd any web or video in html)
    ```iframe
    <iframe src="URL" width="width" height="height"></iframe>

## Video 11
- **Semantic Tags** in HTML
- They enhance SEO, improve accessibility, and make your code easier to read and maintain.
- Here are some commonly used semantic tags in HTML:
    1. **header**: Contains introductory content.
    2. **footer**: Holds footer information.
    3. **article**: Encapsulates a self-contained composition.
    4. **section**: Represents a standalone section.
    5. **aside**: Contains content aside from the content it is placed in.
    6. **nav**: Holds navigation links.

## Video 12
- **Exercise No. 1** : Created media player with pure HTML

## Video 13
- **HTML Entities** :
    1. HTML entities are used to represent special characters in a format that the browser can understand.
    2. They start with an ampersand (&) and end with a semicolon (;).
```entities
&lt;  for <
&gt;  for >
&amp; for &
&nbsp; for a non-breaking space
&copy; for ©
```
---
- **Quotation Tag** :
    1. Using `<blockquote>` for Long Quotes
    ```long quote
    <blockquote cite="https://example.com">
        This is a long quote from an external source. This quote can span multiple lines and paragraphs.
    </blockquote>
    ```

    2. Using `<q>` for Short, Inline Quotes
    ```short quote
    The philosopher said, <q cite="https://example.com">The unexamined life is not worth living.</q>
    ```
---
- **Code Tag** :
    ```code tag
    <pre><code>Your multiline code here</code></pre>
    ```

## Video 14
- Intro to **CSS (Cascading Style Sheets)**
- HTML creates the structure of the page, while CSS adds styling to that structure.

## Video 15
- **3 Ways** to add CSS to HTML :
    1. Inline CSS - not recommended (but useful sometimes)
    2. Internal CSS - `<style></style>` tag in `<head>` section
    3. External CSS - **style.css** linked with **index.html**

## Video 16
- Solution video of Exercise No. 1

## Video 17
- **CSS Selectors** :
    1. **Element selector** - selects the main element
        - eg. p {}
    2. **Class selector** - selects the class of elements
        - eg. .red {}
    3. **ID selector** - selects the id of elements
        - eg. #std {}
    4. **Child selector** - selects the child element of main element
        - eg. div > p {}
    5. **Descendant selector** - selects the descendant element of main element
        - eg. div p {}
    6. **Universal selector** - selects all the elements
        - eg. * {}
    7. **Pseudo selector**
        - eg. p:second-child {}

## Video 18
- **Box Model** :
    1. **Padding** - between content & border
    2. **Margin** - after border
    3. **Border** - between padding & margin
- **Total Width** = Width + Left Padding + Right Padding + Left Border + Right Border + Left Margin + Right Margin
- **Total Height** = Height + Top Padding + Bottom Padding + Top Border + Bottom Border + Top Margin + Bottom Margin
    - Here we can use this to maintain size
        ```height
        box-sizing: border-box;
        ```
- **Margin Collapse** : For example, if one element has a margin of 50px and the adjacent element has a margin of 20px, the resulting margin between them will be 50px, not 70px.

## Video 19
- **Font** :
    1. We can define multiple font family names separated by commas based on priority.
    ```font fam
    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    ```
    2. There are five **generic font family** names that serve as fallback options when specific fonts are not available: serif, sans-serif, monospace, cursive, fantasy
    - **Tip:** It is recommended to end the font family with any of these generic font family names.
    3. We can also use custom fonts for our websites. [Google Fonts](https://fonts.google.com)
- **Font Properties** :
    ```font prop
    color: red;
    font-size: small;
    font-style: italic;
    font-weight: 100;
    font-family: font1, font2, font3;
    ```
---
- **Text Properties** :
    ```text prop
    text-decoration: value;
    text-align: value;
    text-transform: value;
    letter-spacing: 5px;
    line-height: 3.5;
    text-overflow: ellipsis;
    ```
---
- **Color Properties** :
    ```color prop
    color: name;
    color: #RRGGBB; (00 to FF)
    color: rgb(0-255, 0-255, 0-255); (red, green, blue)
    color: rgba(0-255, 0-255, 0-255, 0-1); (red, green, blue, opacity)
    color: hsl(0-360, 0-100%, 0-100%); (hue, saturation, lightness)
    ```

## Video 20
- **Exercise No. 2** : Simple CSS exercise

## Video 21
- **CSS Specificity & Cascade Algorithm** : used to determine which css rule will be applied if there are multiple rules defiend.
    1. **inline style > id selector > class / attribute / pseudo selector > element selector > universal selector**
    2. **!important** - to override other rules

## Video 22
- **CSS Sizing Units** :
    1. **px** - pixel
    2. **vh** - height of the viewport
    3. **vw** - width of the viewport
    4. **em** - relative to the font size of the parent element
    5. **rem** - relative to the font size of the root element
    6. **%** - relative to the parent element’s size

## Video 23
- **CSS Display Property** : (some shown here)
    1. block
    2. inline
    3. inline-block
    4. flex
    5. inline-flex
    6. grid
    7. inline-grid
    8. none

## Video 24
- **CSS Shadow & Outlins** :
    1. **box-shadow**
    ```shadow
    box-shadow: h-offset v-offset blur spread color inset;
    ```
    2. **text-shadow**
    ```shadow
    text-shadow: h-offset v-offset blur color;
    ```
    3. **outline**
    ```outline
    outline: width style color;
    ```

## Video 25
- **List Style** : `list-style` and their properties used to style the list

## Video 26
- **Overflow Property** : Sometimes, the content shown is too large to be visible in a single line or division of the website. So, to avoid the loss of that information, we can use the overflow property.

## Video 27
- Solution video of Exercise No. 2

## Video 28
- **CSS Position Properties** :
    1. **Static** Position - by default
    2. **Relative** Position - can change position using top, left, ...
    3. **Absolute** Position - relative to parent
    4. **Fixed** Position - fixed on page
    5. **Sticky** Position - for navbar on page
- transform, filter, perspective properties for positioned

## Video 29
- **Exercise No. 3** : Designing a card

## Video 30
- **CSS Variables** : Defined by CSS authors that represent specific values to be reused throughout a document
- Eg.
    1. **Defining variables** :
    ```var
    :root {
        --main-bg-color: brown;
    }
    ```
    2. **Using variables** :
    ```var
    details {
        background-color: var(--main-bg-color);
    }
    ```
- Variables are not only for color, we can use it for every property.

## Video 31
- **CSS Media Query** : to make changes according to device's screen size
- **Syntax** :
    ```mediaq
    @media not/only mediatype and (expressions) {
        css code
    }
    ```
- Eg. :
    ```mediaq
    @media only screen and (max-width: 450px) {
        body {
            background-color: red;
        }
    }
    ```

## Video 32
- Solution video of Exercise No. 3

## Video 33
- **Exercise No. 4** : Multi Color Navbar

## Video 34
- **CSS Float & Clear** : Just like how “wrap through” works in MS Word, the float property allows the balance between text and the image shown beside it
- Eg.   1. `float: left;`
        2. `display: flow-root`
        3. `clear: left;`

## Video 35
- **More on CSS Selectors** : there many ways to use selectors

## Video 36
- Solution video of Exercise No. 4

## Video 37
- **Exercise No. 5** : Design this layout

## Video 38
- **CSS Flexbox** :
    1. `display: flex;`
    2. Flex Properties -
        `flex-direction: row;`
        `flex-wrap: wrap;`
        `flex-flow: row wrap;`
        `justify-content: center;`
        `align-item: center;`
        `align-content: center;`
    3. Flex item Properties -
        `order: 1;`
        `flex-grow: 2;`
        `flex-shrink: 2;`
        `align-self: flex-end;`

## Video 39
- **CSS Grid** :
    1. `display: grid;`
    2. `grid-row: 1/2;` -> row 1 to row 2
    3. `grid-column: 1/3;` -> col 1 to col 3
    4. `grid-template-columns: 120px 100px;` -> 1st col of 120px & 2nd col of 100px
    5. `grid-template-area: "side article article";` -> 1st col side & another 2 col article
- **CSS Unit** : **fr** (fraction) -> eg. 1fr 1fr 1fr means 1/3 1/3 1/3 of parent
- **repeat function** : repeat(3, 1fr) -> repeat 1fr 3 time

## Video 40
- Solution video of Exercise No. 5

## Video 41
- **Exercise No. 6** : Navbar using Flexbox

## Video 42
- **CSS Transform** :
    1. `transform: translate(x, y);`
    2. `transform: rotate(value);`
    3. `transform: scale(width, height);`
    4. `transform: skew(val, val);`
    5. `transform-origin: value;`
- The properties for 3D Transform are also identical; a new dimension z is included in it.

## Video 43
- Solution video of Exercise No. 6

## Video 44
- **Exercise No. 7** : Design the Grid

## Video 45
- **CSS Transition Property** : Transitions control the ease of transformation from one style to another when we hover over that element.
- Eg. : `transition: all 3s ease-in-out 1s;`
- Same :
    ```transition
    transition-property: transform, background-color;
    transition-duration: 3s;
    transition-timing-function: ease-in-out;
    transition-delay: 1s;
    ```

## Video 46
- **CSS Animation** : CSS Animations help to animate elements from one frame to another.
1. Animation Name : `div { animation-name: demo; }`
2. Key Frames : `@keyframes demo { from{} to{} }`
3. Looping Animations : `{ animation-iteration-count: value; }`
4. Animation Durations : `{ animation-duration: value(in sec); }`
5. Other Properties : Animation Delay, Direction, Timing Function, Fill Mode
- Animation Shorthand : `animation: name duration timing-function delay iteration-count direction fill-mode;`

## Video 47
- Solution video of Exercise No. 7

## Video 48
- **Exercise No. 8** : Bounce Animation

## Video 49
- **CSS Object Fit & Position** :
    1. `object-fit: cover/contain/fill etc.` -> to fit the content according to size
    2. `object-position: top right/center etc.` -> for position if using cover fit
- **Background Image Property** :
    1. `background-image: ;` -> to set image background
    2. `background-position: ;` -> same as object position
    3. `background-repeat: ;` -> to repeat or not the bg

## Video 50
- **CSS Filters** :
- **Syntax** : `filter: ;`
    1. `filter: blur();`
    2. `filter: brightness();`
    3. `filter: contrast();`
    4. `filter: invert();`
    5. `filter: opacity();` & many

## Video 51
- Solution video of Exercise No. 8

## Video 52
- Basics of Figma

## Video 53
- Project No. 1 : Netflix Clone using HTML & CSS

## Video 54
- **Introduction to JavaScript**
- **Integrating JS in HTML**
- **Console.log & Some basics**
- **Installing Node JS**
- **Changing Style using JS**

## Video 55
- **Variables in JavaScript**
- **Data Types & Object in JS**

## Video 56
- **Operators**
- **Conditionals**

## Video 57
- **Loops in JS**

## Video 58
- **JS Functions**

## Video 59
- **Exercise No. 9** : Faulty Calculator using JS

## Video 60
- **Strings in JavaScript**

## Video 61
- Solution video of Exercise No. 9

## Video 62
- **Exercise No. 10** : Business Name Generator

## Video 63
- **Arrays in JS**

## Video 64
- Solution video of Exercise No. 10

## Video 65
- **Exercise No. 11** : Calculate the Factorial

## Video 66
- **Introduction to DOM in JS**

## Video 67
- **JS DOM - Parent, Children & Sibling nodes**

## Video 68
- **JS - Selecting by IDs, Classes & More**

## Video 69
- Solution video of Exercise No. 11

## Video 70
- **Exercise No. 12** : Color the Boxes using DOM

## Video 71
- **Inserting & Removing Elements using JS**
- **DOM Properties**

## Video 72
- Solution video of Exercise No. 12

## Video 73
- **Exercise No. 13** : Dynamic Website Building

## Video 74
- **Events & Event Bubbling**
- **setInterval & setTimeout**

## Video 75
- **Callbacks & Promises**

## Video 76
- **Async/Await & Fetch API in JS**

## Video 77
- Solution video of Exercise No. 13

## Video 78
- **Exercise No. 14** : Hacking Terminal

## Video 79
- **Try catch & Error handling**

## Video 80
- **OOP in JS**
- **Classes & Objects**

### CMD lines to push it on GitHub
git status              --> to check <br>
git add .               --> to add all files <br>
git commit -m ""        --> to commit <br>
git push origin main    --> to update