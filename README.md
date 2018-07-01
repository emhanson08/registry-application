# README

## Build using a Mac

To install dependencies:
```shell
$ npm install
```
To run the application:
```shell
$ npm start
```

## How to use this application:

-To set the requestbin url, click in the upper-left corner of the screen. A modal should appear with a form to send the new url. Enter the new url and press submit.

-To send user information, click on the "Click Me!" button, and enter information in the modal form. Press submit. User information should be available at your requestbin.

## Further Considerations:

With more time, I would have liked to do a number of things. At the start of this project, I was very interested in writing code that would dynamically update the requestbin url without the user needing to update it manually every 48 hours. I was unable to find a working requestbin api to do a post request via AJAX for a new bin, so I moved on in the interest of time.

I would also love to polish the application visually. Due to time constraints, I used bootstrap modal components. I would have liked to put together a smoother, more visually appealing animation or image transformation loop for this project. Perhaps an image carousel, or something similar.