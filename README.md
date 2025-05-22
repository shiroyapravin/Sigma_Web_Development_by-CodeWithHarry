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

### CMD lines to push it on GitHub
git status              --> to check <br>
git add .               --> to add all files <br>
git commit -m ""        --> to commit <br>
git push origin main    --> to update