# SWD COURSE
- Complete Note & Practice Code
- Sigma Web Development Course by CodeWithHarry

## Video 1
- Using **!** for boiler plate code in VSCode.
- Boiler Plate Code :
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
- For CSS : in `<head>` tag <br>
    ```CSS link
    <link rel="stylesheet" href="style.css">
    ```
- For JS : just before `</body>` tag <br>
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
- Image Tag :
    ```image tag
    <img height="" width="" src="" alt="">
    ```
    1. src for path to image
    2. alt for alter text if image is not available
    3. height & width attributes for image size
- List Tag :
    1. Unorder List -
        ```ul list
        <ul>
            <li></li>
        </ul>
        ```
    - can use type for bullet design
    <br>
    2. Order List -
        ```ol list
        <ol>
            <li></li>
        </ol>
        ```
    - can use type for different orders
- Table Tag :
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
    <br>
    - Rowspan : ```<td rowspan="value">```
    - Colspan : ```<td colspan="value">```

### CMD lines to push it on GitHub
git status              --> to check <br>
git add .               --> to add all files <br>
git commit -m ""        --> to commit <br>
git push origin main    --> to update