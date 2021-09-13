# Introduction
This project focuses on automated tests for Open Weather Map API and contrbutes the quality check of the API.

# Getting Started

Jest ad Axios is the framework for the e2e automation for the APIs.

Jest is a JavaScript testing framework desiigned to ensure correctnessof any Javascript code base whilst Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both browser and Node



### Installation process:
The project is node JS based and all of the development dependencies are in the package.json file which is in the root of the project

The command below will install all of the required packages for the project once after the cloning is successful

```npm install```

The pre-requisites however to run this command is to have node installed on the machine.
NodeJS can be installed from the following location : https://nodejs.org/en/download/


Software dependencies :
The projects mainly requires jest and axios as the primary dependencies but also added few supporting packages to help build the framework more robustly and will need to constantly keep updating the libraries with the latest versions for better support


Jest comes prebuilt with chai assertion library


# Build and Test

To Run the tests:

Step 1:

### Install the dependencies:
The above command will install all of the required packages for the project once after the cloning is successful

_NOTE_: _**please install the packages from the root directory**

```npm install```

Step 2:

### Run the tests

```npm test```
The above command will run all the test

```npm test --groups=regression```
Create a tag to the test (e.g @group regression )
Then use the above command to run tests individually using jest-runner-groups package

**JEST TAGGING**
Tagging the tests to run against environment is a feature built using the package ```jest-runner-groups```

The package is listed here : https://www.npmjs.com/package/jest-runner-groups

Tags are added to the files above the parent describe text 

Few Key points on the tagging: 
Tags are implemented with the package only at the file level which means when a tag is added to the parent describe , it executes the whole feature
Command to run tags is to use ```--group={Tagname}```

To run a particular test only in Jest , the Jest CLI provides with a argument ```-t {test name}``` which only executes that particular test 

### Reporting
Reporting has been implemented using the package ```jest-html-reporters```

Thr package is listed here: https://www.npmjs.com/package/jest-html-reporters

After running the tests test HTML report will be generated at the following location 
```./html-report```


# REFERENCES: 

Jest :  https://jestjs.io/docs/migration-guide

Axios: https://axios-http.com/

