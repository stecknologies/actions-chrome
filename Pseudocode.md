# Pseudocode
The pseudocode for how `App.js` and the router will handle the user's flow and render certain components

# Logic
- Eventually we will add user auth and ask for their name, but not for the MVP(want to focus more on the browser part for now)
  - Many other things will be added on in the future(onboarding etc)
- `<Homepage />`
  - `<Search />` instance is rendered on the top of the screen
    - Since it's first use, the search will just ask for the user to search for something.
    - As a user's flow continues, there will be a list of flows * still need to decide where the flow list will go *
  - `<Workspaces />` list at the bottom
  - Settings button on the right
- `<BrowserInstance />`
  - New instance of browser instance is created
  - Same as `<Homepage />`, but there is a `<Browser />` at the bottom instead of `<Workspaces />`
  - Settings button on the right
  - Adds each website to a flow and adds that flow to a flow home(or workspace?? - will figure this out)
- `<Workspace />`
  - List of flows and list of sites in a flow
  - Has a `<Metrics />` tab
- `<Metrics />`
  - This one I need to do more work on, but here's what I was thinking
  - Maps out the time spent per site per day
  - You can click on one website and get all of the data from that site(links, meta tags)

# Pseudocode per component
- [`<FlowInstance />` Pseudocode](https://github.com/stecknologies/humane/tree/master/src/components/Flow/Flow-Pseudocode.md)

<img src='src/assets/images/BrowserUML.jpg?raw=true' alt="A simple UML chart for Humane" />
