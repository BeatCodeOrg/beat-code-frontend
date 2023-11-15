# Set up of repo 
- First run `git clone (this branch)`
- Then cd into the folder
- Then run `npm i`

## Judge0 set up
In order to run code, you have to create environment variables
- run `touch .env` and open that file in a text editor
  - touch just creates a file
- you need to create 3 environment variables
  - to learn about .env files, read this: https://blog.devgenius.io/why-a-env-7b4a79ba689 and https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e
  - we are using React.js but I prefer to use Vite to build the React Project cause it's faster, so in the code there's
    like a very small difference but the concept of the file is the same
  - `VITE_JUDGE0_SUBMISSIONS_URL=https://judge0-ce.p.rapidapi.com/submissions`
    - you can copy that line and insert it on it's own line in the file
  - `VITE_RAPID_API_HOST=<rapid api url>`
    - I'm pretty sure it's the same value for everyone (judge0-ce.p.rapidapi.com) but just in case 
  - `VITE_RAPID_API_KEY=<judge0 rapid api key>`
    - you can get these two values by making an account on rapid api and then navigating
      to judge0-ce and subscribing for the free plan
      - this is the rapid api website: https://rapidapi.com/hub
      - this is judge0: https://rapidapi.com/judge0-official/api/judge0-ce/
     <img width="765" alt="Screen Shot 2023-10-23 at 3 40 15 PM" src="https://github.com/BeatCodeOrg/beat-code-frontend/assets/43936294/1c369944-3bc0-4c4d-98da-e72ddbf2e72d">
 
    - then replace the stuff after the equal sign to the values
    - also, no, **you do not include the angle brackets in the line**
- save the .env file
- run `npm run dev`
