# React Native Code Base

## Top-Level Folders

After cloning the ArzHere Repo, you will see a few top-level folders in it:
+Assets: List of fonts and images
+Components: Reusable components written in Typescript
++Common: Small reusable components written in Typescript (Button, Text , etc.)
++Others: Large reusable components written in Typescript (Currency Selection Modal, etc.)
+Constants: Constant variables like environment, secret keys, routes, etc. 
+I18n: Required configurations for multi language support
+Navigations: Navigation Stacks and Tabs
+Redux: Public state management
+Screens: Components which render a whole page
+Services: Business services. For Instance: APIs, statistics 
+Theme: Theme manager and related context, variables and functionalities
+Utils: Common functional utilities



Node Version
We’ve used Node.js v18.0.0 for initializing and then developing this application. You can install latest node version (or 18 version with node@18) with the following command using brew OSX package manager:
brew install node


Package Manager
We’ve chosen Yarn as our package manager. There are separate reasons to use Yarn in small or big projects. Its main advantage is the fact that it helps to avoid any possible problems related to different versions of node. js system modules, on which the project will be mounted.
So in order to install required packages run the following CLI commands (in OSX):
<pre><code>
brew install yarn
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
</code></pre>

Then install npm packages:
yarn install


finally , install IOS pod run below command in project’s source folder:
cd ios && pod install


Colocated Tests
We don’t have a top-level directory for unit tests. Instead, we put them into a directory called __tests__ relative to the files that they test.
Top-Level Application Architecture





Architecture Benefits

