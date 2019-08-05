# Flow Instance Pseudocode
The pseudocode for how `<FlowInstance />` will be laid out and work

## Layout
- `<FlowInstance />`
  - The main handler component that the user will interact with to view sites and keep track of their flow
  - `<Nav />`
    - The right side action/navigation bar
      - Basically a div that takes up ~ 30% of the page
    - `<Search />`
    - `<div>` containing the current flow
      - *possibly* the option to add a title to the flow?
    - `<div>` containing all of the user's other flows
  - `<WebView />`
    - Just contains an electron `<webview>`, wrapped in an React component thanks to the npm package `react-electron-web-view`

## Logic
- On launch/fist opening
  - If there are no flows created yet, then the width of `<Nav />` is 100% and it only has a search bar
    - Then, it goes back to 30% and a webview(now shown with a boolean becoming `true`) loads the propped `searchQuery`
  - Else if there is an opened flow, then it goes to the last viewed element
  - Else, it goes to `<Nav />` at 100% width and displays all of the user's flows
- Once flow is in use/created
  - `<WebView />` shows the latest webview(and can become fullscreen if the user would like it to be)
  - `<Nav/>` lets the user add a new query, see what is in the flow, and see the current URL
  - Every time a new URL is searched or appears in the `<WebView/>`, it gets added to the data model

## Schema
<img src='../../assets/images/FlowInstanceSchema.jpg?raw=true' alt="A UML chart showing Flow's schema" />
