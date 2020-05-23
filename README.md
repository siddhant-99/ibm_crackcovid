# TEAM REGRESSION
 
 IBM Crack the COVID Hackathon

## Authors
 - [Siddhant Dangi](https://www.linkedin.com/in/siddhant-dangi-8b9707153/)
 - [Jivat Neet Kaur](https://www.linkedin.com/in/jivat-neet-14a4b0187)
 - [Honnesh Rohmetra](https://www.linkedin.com/in/honnesh-rohmetra/)
 - [Abhishek Agarwal](https://www.linkedin.com/in/abhishek-agarwal-003623166/)
          
## Contents
1. [Overview](#overview)
2. [Video](#video)
3. [The idea](#the-idea)
4. [How it works](#how-it-works)
5. [Diagrams](#diagrams)
6. [Documents](#documents)
7. [Datasets](#datasets)
8. [Technology](#technology)
9. [Prerequisites and Installation](#prerequisites-and-installation)
10. [Getting started](#getting-started)
11. [Resources](#resources)
12. [License](#license)

## Overview

**What's the problem?**

In times of crisis, there are multiple issues which affect the community and we're trying to solve a few of them. As the number of Covid-19 cases will continue to rise, the number of people seeking treatment will overwhelm many hospitals. Having a handle on local hospitals’ capacity and resource availability could help balance the load of Covid-19 patients requiring hospitalization across a region by allowing medical staff to send a patient to a facility where they are more likely to be treated quickly. But many states lack real-time data on their current capacity to treat Covid-19 patients. 

Also, as lockdown relaxations are taking place, people will be stepping out to go to work, purchase essentials and carry out other activities. But, normalcy has not returned and the hesitation and fear of safety will still affect people when they think about stepping out. A live monitoring of the safety status of locations around people will help manage crowd and the safety scenario in an efficient manner.

**How can technology help?**

Technological advancement with a blend of machine learning, software development and connectivity through applications can equip the mankind with abilities to fare through this pandemic in a safer and smarter way. 

A web application can help all - those have been affected as well as those who haven't been yet - by providing essential statistics and services that can make them aware of current scenario at different locations and aid them in selecting the best possible treatment available within their financial and personal constraints.
(**Add about IBM services used in brief**)

## Video
## The Idea
With the rapid spread of COVID-19 it has become increasingly difficult for the patients who test positive to be accomodated in the treatment centers. Often the treatment centers have no availability of beds and are already working at full capacity, which leads to inefficiency and confusion in communication while transferring patients from a COVID-testing facility to these treatment centres, leading to a risk of life. Also, there is a prevalent disparity in the financial state of the patients which can result in added mental and financial burden. 

Our application provides a platform for all the listed hospitals to share real-time statistics like number of beds available, presence of testing facilities and number of ventilators and other resources which can significantly help the patient to select the treatment center which is most suitable for his/her needs. 

For those people who have not been not infected yet, the most worrying concern is the ground situation of the places that they are planning to visit. Once the lockdown gets lifted, huge numbers of people would take to the streets and the risk of the uncontrolled spread of virus is unfathomable. 

The application provides the user with number of people present at any given location within a certain radius, which helps the user to stay aware and cautious before making a decision to visit the location. With the help of deep learning, a mask detection model was also integrated which generates a ratio of people not wearing masks out of the total people present at a place, using the live footage from CCTV cameras installed there. This ratio is extremely essential as it gives an idea to the user about the level of risk he/she might take. For publicly crowded places like markets and parks this application is furthermore crucial as above a threshold this ratio can clearly convey the peril of visiting the place. 
(**Add IBM cloudant database being used and other IBM services for this idea**)

## How it works

**Integration of Hospital Monitoring DB with (App name) app** (Dangi)
- Hospital Dashboard Login
- How implemented Login securely
- IBM cloudant for DB
- Form fields  + screenshots

**Integration of (App name) app with Google Maps Platform** (Dangi)
- Google Maps APIS used + screenshots

**Mask Detection Model** (Honnesh)
- Model Architecture
- Input and Ouput (Image input, extrapolation to video below)

**Integration of live Video feed and Mask Detection model to predict Safety score** (Honnesh + Jivat)
- How model takes video feeds
- Predict score at equally separated frames and return avg safety score

**Integration of location-based Safety score with (App name) app** (Jivat + Dangi)
- Using IBM Cloudant database
- How sending lat, long, predicted score to the cloudantDB
- Retrieving from IBM cloudant DB into app

## Diagrams
## Documents

**Tutorials and Documentation**

- [IBM Cloudant Documentation](https://cloud.ibm.com/docs/Cloudant?topic=Cloudant-getting-started-with-cloudant)
- [Build models in IBM Watson Studio](https://developer.ibm.com/technologies/artificialintelligence/tutorials/watson-studio-using-jupyter-notebook/)
- [Watson Studio Documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/welcome-main.html?audience=wdp&context=wdp)
- [Directions Service-Google Maps API](https://developers.google.com/maps/documentation/javascript/directions)

## Datasets

- [Face Mask Dataset](https://drive.google.com/file/d/1QspxOJMDf_rAWVV7AU_Nc0rjo1_EPEDW/view) - [WIDER Face](http://shuoyang1213.me/WIDERFACE/) and [MAFA](http://www.escience.cn/people/geshiming/mafa.html) (MAsked FAces) datasets have been combined to form the Face Mask Dataset after correction of wrong annotations

## Technology

**IBM Technology**
- [IBM Cloudant](https://cloud.ibm.com/docs/Cloudant?topic=Cloudant-getting-started-with-cloudant)
- [IBM App ID](https://cloud.ibm.com/docs/appid?topic=appid-getting-started)

**Open source Technology**

- [Node.js](https://nodejs.org/en/)
- [Google Maps Platform](https://developers.google.com/maps/documentation)

## Prerequisites and Installation

#### Dependencies

`npm install`   -> To install all the dependecies.

- express
- express-session
- passport
- ibmcloud-appid

#### Usage

`node.exe app.js`

Then open [localhost:3000](http://localhost:3000) in your browser.

## Getting started
## Resources
## License
