# Goals
It is expected that the tests you create will serve as examples for the second part of the project. You need to provide materials for one of the interviewers to make additional tests using your model. You can expect your audience to be a development engineer who is well versed in the craft but lacking any QA specific skills. You can assume that your "student" is as quick with new technologies and concepts as you are.

 

Prepare sufficient written material to allow your student/reviewer to generate additional tests similar to some that you have already created. While we'll discuss your project with you afterwards, the written materials will be the only avenue for you to instruct your student. You can certainly point to external reference materials for framework setup.

 

The choice of instructional format is up to you. Simplicity and clarity are preferred over flash and art. As an example, Markdown would be preferable to animated slides. Conversely if you feel animated slides and video are essential to your communication, you may submit them.

Next we will setup a fixture which in TestCafe will organize our tests into a certain category for the tests to run. For this type the line `fixture(test description)` underneath the import function. In here we can configure what things we want our tests to use, for example typing `.page(URL)` it will tell all subsequent tests to go to the page set in the fixture when they load.

---
# Test Goal
The goal of `smokeTest.js` is to provide a high level test of key functions of the website in order to validate pull requests quickly. For this we test the following functions:
* Search feature
* Account creation
* Account login
* Adding items to cart
* Newsletter signup

---
# Test Setup
In this suite tests are setup using an object class and a test class. 

### Objects
The object class is where we will store all objects for the website each under their respective page, example `homePageObjects.js` contains objects that will be found on the homepage. We do this so they can be reused throughout the tests and when more test classes can be created they can simple be called. In order to create a object we must first find the selector we will use. To do this:
1. Open Google Chrome and navigate to desired page
2. Open dev tools by right clicking and selecting **inspect**
3. From there you simply need to hit the inspect icon in the top left box (or **Ctrl-Shift-C**)
4. It will highlight the desired object in the dev tools
5. Right click and choose **Copy > Copy Selector**

It will generate a string similar to `#header_logo > a > img`, this is a unique object identier that you can use in youre tests (these can be greatly shortened in many cases but for now lets stick to the basics). To make this into a selector, open up the new object class you created and wrap it in the following: `this.objectName = Selector('your object')`. This will create an object you can call on later.
### Tests
To begin setting up the test class create a new file called `myTests.js`. From there you want to import Testcafe by typing `import { Selector } from 'testcafe'`. This will call the Selector function from the Testcafe library so that we can interact with elements on a page.

Tests are where we will take those objects and create a sequential set of objects and actions to replicate a users experience on the website, thus creating e2e tests.

To do this, first setup your tests by adding:

`test(test name, async t =>{`

`})`

Between the curly brackets is where we will add our objects and actions. First call your objects page above the fixture by typing `const name = new objectClass` this will call the page so that whenever we use `name.object` it will call from the previously created page.

Now, in the curly brackets of the created test lets type `.click(name.object)` this will simply open the page set by `.page` in the fixture and click on the object. There are many many types of actions you can send to the object but for that I will recommend going to https://devexpress.github.io/testcafe/documentation/test-api/actions/.

After you add a few more desired objects and a workflow for them with the actions created you will have a functional e2e test for the website!

### Running Tests
To run the tests we will open up a command line interface and navigate to our project file. To run, simply type `testcafe chrome tests/yourTest.js` this will kick off the tests you just created using a Chrome browser and report back results. 

To run the example `smokeTest.js` file I have also created a script where you can say `npm run test:smoke`,  you can use these scripts to kick off a certain suite of tests as setup in the `package.json` file.