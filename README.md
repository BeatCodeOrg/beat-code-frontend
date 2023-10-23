# Installation Setup

- clone the repo using `git clone`
- once cloned, navigate to the root of project by running cd beat-code-frontend
- then, `run npm i`
  - if you dont have npm, read this: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
- run `touch .env` and open that file in a text editor
- you need to create 3 environment variables
  - to learn about .env files, read this: https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e
  - we are using React.js but I prefer to use Vite to build the React Project cause it's faster, so in the code there's
    like a very small difference but the concept of the file is the same
  - `VITE_JUDGE0_SUBMISSIONS_URL=https://judge0-ce.p.rapidapi.com/submissions`
    - you can copy that line and insert it on it's own line in the file
  - `VITE_RAPID_API_HOST=<rapid api url>`
  - `VITE_RAPID_API_KEY=<judge0 rapid api key>`
    - you can get these two values by making an account on rapid api and then navigating
      to judge0-ce and subscribing for the free plan
    - then replace the stuff after the equal sign to the values
    - also, no, **you do not include the angle brackets in the line**
